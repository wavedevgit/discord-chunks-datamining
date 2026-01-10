import * as acorn from 'acorn';
import * as walk from 'acorn-walk';
import getRawExperiment from './getRawExperiment.js';

function getStoreClassFunctionsAndDispatchEvents(code) {
    try {
        const functions = [];
        const events = [];
        let ast;
        try {
            ast = acorn.parse(code, { ecmaVersion: 'latest' });
        } catch {
            console.log(code);
        }
        walk.simple(ast, {
            // get functions of the store
            ClassDeclaration(node) {
                // check if it's store class
                if (
                    node?.superClass?.right?.property?.name?.endsWith?.(
                        'Store',
                    ) ||
                    node?.superClass?.property?.name === 'Z'
                ) {
                    for (let defintion of node.body.body) {
                        functions.push({
                            name: defintion.key.name,
                            // handle rest elements and normal arguments
                            args: [...defintion.value.params].map(
                                (param) => param?.name || param?.argument?.name,
                            ),
                        });
                    }
                }
            },
            // get events handled  by the store
            NewExpression(node) {
                if (node?.arguments?.[1]?.type === 'ObjectExpression') {
                    for (let prop of node.arguments[1].properties) {
                        events.push(prop.key.name);
                    }
                }
            },
        });
        return { functions, events };
    } catch (err) {
        console.log(err);
        process.exit(0);
        return { functions: [], events: [] };
    }
}
function getStoreName(code) {
    let name = '';
    const ast = acorn.parse(code, { ecmaVersion: 'latest' });
    walk.simple(ast, {
        // get functions of the store
        Literal(node) {
            // check if it's store class
            if (node?.value?.includes?.('Store')) {
                name = node?.value;
            }
        },
    });
    return name;
}
function getChunkIdForLanguage(ast) {
    let chunkId = '';
    let moduleId = '';
    walk.simple(ast, {
        CallExpression(node) {
            if (node.callee.property.name === 'bind') {
                chunkId = node.arguments[1].value;
            }
            if (node.callee.property.name === 'e') {
                moduleId = node.arguments[0].value;
            }
        },
    });
    return { chunkId, moduleId };
}
function getDataForIntlLoader(code) {
    try {
        const data = { messagesKeys: [], languages: {} };
        const ast = acorn.parse(code, { ecmaVersion: 'latest' });
        walk.simple(ast, {
            CallExpression(node) {
                // find the messages keys and languages
                if (
                    node.arguments?.[0]?.type === 'ObjectExpression' &&
                    node.arguments?.[0]?.properties.some(
                        (prop) => prop.key.value === 'en-US',
                    )
                ) {
                    for (let prop of node.arguments[0].properties) {
                        data.languages[prop.key.value || prop.key.name] =
                            getChunkIdForLanguage(prop.value);
                    }
                }
            },
        });
        return data;
    } catch (err) {
        console.log(err);
        process.exit(0);
        return { messagesKeys: [], languages: {} };
    }
}
function getDataUrl(code) {
    try {
        let dataUrl = '';
        const ast = acorn.parse(code, { ecmaVersion: 'latest' });
        walk.simple(ast, {
            Literal(node) {
                if (node?.value?.startsWith?.('data:image/')) {
                    dataUrl = node.value;
                }
            },
        });
        return dataUrl;
    } catch {
        return '';
    }
}
function getJsonParseExportContent(code) {
    try {
        let content = {};
        const ast = acorn.parse(code, { ecmaVersion: 'latest' });
        walk.simple(ast, {
            CallExpression(node) {
                if (
                    node.callee.object.name === 'JSON' &&
                    node.callee.property.name === 'parse'
                ) {
                    content = JSON.parse(node.arguments[0].value);
                }
            },
        });
        return content;
    } catch (e) {
        console.log(e);
        return {};
    }
}
function getEndpoints(code) {
    try {
        let endpoints = {};
        const ast = acorn.parse(code, { ecmaVersion: 'latest' });
        walk.simple(ast, {
            CallExpression(node) {
                if (
                    node.callee?.object?.name === 'Object' &&
                    node.callee?.property?.name === 'freeze'
                ) {
                    const value = node.arguments[0]?.properties;
                    const props = value.map((e) => e.key.name);
                    if (
                        props.includes('USER') &&
                        props.includes('GUILD_JOIN') &&
                        props.includes('LOGIN')
                    ) {
                        const endpointsTemp = eval(
                            `(()=>(${code.slice(node.arguments[0].start, node.arguments[0].end).replaceAll('window.GLOBAL_ENV.WEBAPP_ENDPOINT', '"//canary.discord.com"')}))()`,
                        );
                        const params = [];
                        for (let i = 0; i < 11; i++) params.push(':param');
                        for (let [key, value] of Object.entries(
                            endpointsTemp,
                        )) {
                            try {
                                endpoints[key] =
                                    typeof value === 'function'
                                        ? value(...params)
                                        : value;
                            } catch {
                                console.log(key, value.toString());
                            }
                        }
                    }
                }
            },
        });
        return endpoints;
    } catch (e) {
        console.log(e);
        return {};
    }
}
function getLottieMappings(code) {
    try {
        const data = {};
        const ast = acorn.parse(code, { ecmaVersion: 'latest' });
        walk.simple(ast, {
            ObjectExpression(node) {
                // find the lottie mappings
                if (
                    node.properties.some(
                        (prop) =>
                            prop.key.value ===
                            'discord_common/js/packages/tokens/tools/platforms/lottie/originals/native/Lottie_Requests_Messages.lottie',
                    )
                ) {
                    for (let prop of node.properties) {
                        // same function used as same style of code
                        data[prop.key.value || prop.key.name] =
                            getChunkIdForLanguage(prop.value);
                    }
                }
            },
        });
        return data;
    } catch (err) {
        console.log(err);
        process.exit(0);
        return { messagesKeys: [], languages: {} };
    }
}

function getRestApiProp(code) {
    try {
        let data = null;
        const ast = acorn.parse(code, { ecmaVersion: 'latest' });
        let exports = {};
        walk.simple(ast, {
            CallExpression(node) {
                // get  exports
                if (node.callee?.property?.name === 'd') {
                    for (let prop of node?.arguments?.[1]?.properties) {
                        exports[
                            prop.value.body.name ||
                                prop.value.body.object.name +
                                    '.' +
                                    prop.value.body.property.name
                        ] = prop.key.name;
                    }
                }
            },
            VariableDeclarator(node) {
                if (node.init?.type !== 'ObjectExpression') return;
                console.log(exports);
                // the object is set as this P = { get: I, post: T, put: C, patch: A, del: N };
                if (
                    node.init?.properties
                        ?.map?.((prop) => prop.key.name)
                        ?.every?.((key) =>
                            ['get', 'post', 'put', 'patch', 'del'].includes(
                                key,
                            ),
                        )
                )
                    data = exports[node.id.name];
            },
        });
        return data;
    } catch (err) {
        console.log(err);
        process.exit(0);
    }
}
function getClasses(code) {
    try {
        let classes = {};
        const ast = acorn.parse(code, { ecmaVersion: 'latest' });
        let isClasses = true;
        walk.simple(ast, {
            ObjectExpression(node) {
                if (
                    !node.properties.every(
                        (prop) =>
                            prop.value?.value?.includes?.(prop.key.name) &&
                            (prop.value?.value?.includes?.('-') ||
                                prop.value?.value?.includes?.('_')),
                    )
                )
                    isClasses = false;

                if (!isClasses) return;
                for (let prop of node.properties) {
                    classes[prop.key.name] = prop.value.value;
                }
            },
        });
        return classes;
    } catch (e) {
        console.log(e);
        return {};
    }
}

// determines chunk type based on code
function determineType(code, id, languagesChunks, jsxChunks, lottieChunks) {
    // lottie chunks mappings
    if (
        code.includes(
            'discord_common/js/packages/tokens/tools/platforms/lottie/',
        ) &&
        code.includes('.bind')
    ) {
        return ['lottie-assets-mappings', getLottieMappings(code)];
    }
    if (jsxChunks.includes(id)) return ['component', {}];

    // Constants chunk
    if (
        code.includes(
            'https://creator-support.discord.com/hc/en-us/articles/12653663868823',
        )
    ) {
        return ['constants', { Endpoints: getEndpoints(code) }];
    }
    if (
        code.includes('"/assets/') ||
        code.includes('.p +') ||
        code.includes('= "https://cdn.discordapp.com/assets/content/')
    ) {
        const match = code.match(
            /(\.p\s\+\s"(?<fileNameP>.+?)"$|"\/assets\/(?<fileName>.+?)"$|\s=\s"(?<url>.+?)"$)/m,
        );
        if (match)
            return [
                'assets',
                {
                    assetUrl:
                        match?.groups?.url ||
                        'https://canary.discord.com/assets/' +
                            match?.groups?.fileName ||
                        match?.groups?.fileNameP,
                },
            ];
    }

    if (
        code.includes('label:') &&
        code.includes('defaultConfig:') & code.includes('kind:')
    ) {
        return ['experiment', getRawExperiment(code)];
    }
    if (code.includes('= "data:image/') && code.endsWith('"')) {
        return [
            'assets',
            {
                assetUrl: getDataUrl(code),
            },
        ];
    }

    if (code.includes('"HTTPUtils"') && code.includes('HTTPResponseError'))
        return ['rest-api', { apiProp: getRestApiProp(code) }];
    if (
        code.includes('Store') &&
        code.includes('"displayName"') &&
        code.includes('.defineProperty(')
    ) {
        const { functions, events } =
            getStoreClassFunctionsAndDispatchEvents(code);
        try {
            return [
                'store',
                {
                    name: getStoreName(code),
                    functions,
                    events,
                },
            ];
        } catch {}
    }

    const classes = getClasses(code);
    console.log(classes);
    if (Object.keys(classes).length > 0) return ['classes', { classes }];
    if (code.includes('buildNumber:') && code.includes('versionHash:')) {
        return [
            'buildInfo',
            {
                versionHash: code.match(/versionHash:"(.+?)"/)[1],
                buildNumber: code.match(/buildNumber:"(\d+)"/)[1],
            },
        ];
    }

    if (code.includes('createLoader:') && code.includes('en-US'))
        return ['intl-loader', getDataForIntlLoader(code)];
    if (languagesChunks[id]) {
        return [
            'intl-messages-definitions',
            {
                messages: getJsonParseExportContent(code),
                language: languagesChunks[id],
            },
        ];
    }
    // this is json chunk (.json file)
    if (code.includes('module.exports=JSON.parse(')) {
        return ['json', { content: getJsonParseExportContent(code) }];
    }
    return ['unknown', {}];
}
export default determineType;
