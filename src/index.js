const fs = require('fs/promises');
const beautify = require('js-beautify/js').js;
const cssbueatify = require('cssbeautify');
const { writeFile } = require('fs');
const getModules = require('./utils/getModules.js');
const { getChunks, formatCode } = require('./utils/getChunks.js');
const determineType = require('./utils/getChunkType.js');
const acorn = require('acorn');
const walk = require('acorn-walk');

const base = 'https://canary.discord.com';
async function getText(url) {
    return await (await fetch(url)).text();
}
async function save(name, content) {
    await fs.writeFile(name, content, 'utf-8');
}
function asset(path) {
    return path.startsWith('assets') ? base + '/' + path : base + '/assets/' + path;
}
async function perf(func, name) {
    const start = Date.now();
    console.log('! ' + name);
    await func();
    const end = Date.now();
    console.log('* Done, ' + name, 'Time Taken ' + Math.abs(start - end) / 1000 + 's');
    return Math.abs(start - end) / 1000;
}

async function main() {
    console.log('WaveDev Discord Client Dataminer - V1.0.0');
    console.log('Downloading latest canary client web.js file');
    const html = await getText(base + '/app');
    const webjs = asset(html.match(/assets\/web\.[\d\w_]+\.js/)?.[0]);
    if (!webjs) {
        console.log('Error - No webjs file, discord fucked up something....');
        process.exit(1);
    }
    console.log('Web.js - Got url - ' + webjs);
    console.log('Scraping list of modules');
    const web = await getText(webjs);
    const modules = getModules(web);
    await save('./build/web.js', beautify(web, { indent_size: 2, space_in_empty_paren: true }));
    await save('modules.json', JSON.stringify(modules, null, 4));
    console.log('! Done scraping list of modules');
    const everyChunks = {};
    const timeTaken1 = await perf(async () => {
        for (let cssFile in modules.css) {
            const stylesheet = await getText(asset(modules.css[cssFile] + '.css'));
            await fs.writeFile(
                './build/css/' + cssFile + '.css',
                cssbueatify(
                    `/**\n  Module ID: ${cssFile}\n  Original File Name: ${modules.css[cssFile]}\n**/\n` + stylesheet,
                ),
            );
        }
    }, 'Saving every css file');
    const timeTaken2 = await perf(async () => {
        for (let jsFile in modules.js) {
            const js = await getText(asset(modules.js[jsFile] + '.js'));
            const chunks = getChunks(js, jsFile, modules.js[jsFile]);
            console.log(Object.keys(chunks).length, 'Chunks on', 'module', jsFile);
            for (let chunk in chunks) {
                everyChunks[chunk] = chunks[chunk];
                await fs.writeFile(
                    './build/chunks/' + chunk + '.js',
                    beautify(chunks[chunk], { indent_size: 2, space_in_empty_paren: true }),
                );
            }
        }
        // handle web.js differently as it does not with acorn
        const chunkStart = web.indexOf('var __webpack_modules__=');
        const chunkEnd = web.indexOf(',__webpack_module_cache__={};');
        const chunk = web.slice(chunkStart, chunkEnd);
        const ast = acorn.parse(chunk, { ecmaVersion: 'latest' });
        const chunks = {};
        walk.simple(ast, {
            VariableDeclaration(node) {
                if (node.declarations[0].id.name !== '__webpack_modules__') return;
                for (let prop of node.declarations[0].init.properties) {
                    const key = prop.key?.value;
                    const chunkNode = prop.value.body;
                    const chunkCode = chunk.slice(chunkNode.start, chunkNode.end);
                    const codeFormatted = formatCode(chunkCode);
                    chunks[key] = `/** Chunk was on web (${webjs.replace('/assets/', '')}.js) **/\n` + codeFormatted;
                }
            },
        });
        for (let chunk in chunks) {
            everyChunks[chunk] = chunks[chunk];
            await fs.writeFile(
                './build/chunks/' + chunk + '.js',
                beautify(chunks[chunk], { indent_size: 2, space_in_empty_paren: true }),
            );
        }
    }, 'Scraping chunks from every module');
    const timeTaken3 = await perf(async () => {
        console.log('Chunks amount', everyChunks.length);
        const languagesChunks = {};
        const all = {};
        let remaining = everyChunks.length;
        for (let chunk in everyChunks) {
            remaining -= 1;
            console.clear();
            console.log(`${remaining} Chunks left.`);
            console.log('Parsing chunk', chunk);
            const [type, chunkData] = determineType(everyChunks[chunk], chunk, languagesChunks);
            const data = {
                id: chunk,
                type,
                data: chunkData,
                fromModule: {
                    id: everyChunks[chunk].split('/** Chunk was on')[1].split(' **/')[0].split(' ')[1],
                    fileName: everyChunks[chunk]
                        .split('/** Chunk was on')[1]
                        .split(' **/')[0]
                        .split(' ')[2]
                        .replaceAll(/[\(\)]/gm, ''),
                },
            };
            if (data.type !== 'unknown') console.log('Chunk ', data.id, data.type, data.data);
            if (data.type === 'intl-loader') {
                for (let language in data.data.languages) {
                    languagesChunks[data.data.languages[language].chunkId] = language;
                }
            }
            if (!all[data.type]) all[data.type] = [];
            all[data.type].push({ id: data.id, data: data.data });
            await fs.writeFile(
                './build/chunks_api/' + data.type + '/' + data.id + '.json',
                JSON.stringify(data),
                'utf-8',
            );
        }
        delete all['unknown'];
        await fs.writeFile('./build/chunks_api/all.json', JSON.stringify(all), 'utf-8');
    }, 'Generating json list of chunks');
    console.log('* Done, scraping build!, Estimated Time taken ' + (timeTaken1 + timeTaken2 + timeTaken3) + 's');
}
main();
