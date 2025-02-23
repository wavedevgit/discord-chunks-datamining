const acorn = require('acorn');
const walk = require('acorn-walk');
function getStoreClassFunctionsAndDispatchEvents(code) {
    try {
        const functions = [];
        const events = [];
        const ast = acorn.parse(code, { ecmaVersion: 'latest' });
        walk.simple(ast, {
            // get functions of the store
            ClassDeclaration(node) {
                // check if it's store class
                if (node?.superClass?.right?.property?.name?.endsWith?.('Store')) {
                    for (let defintion of node.body.body) {
                        functions.push({
                            name: defintion.key.name,
                            // handle rest elements and normal arguments
                            args: [...defintion.value.params].map((param) => param?.name || param?.argument?.name),
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
                    node.arguments?.[0]?.properties.some((prop) => prop.key.value === 'en-US')
                ) {
                    for (let prop of node.arguments[0].properties) {
                        data.languages[prop.key.value || prop.key.name] = getChunkIdForLanguage(prop.value);
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
function getIntlMessages(code) {
    try {
        let messages = {};
        const ast = acorn.parse(code, { ecmaVersion: 'latest' });
        walk.simple(ast, {
            CallExpression(node) {
                if (node.callee.object.name === 'JSON' && node.callee.property.name === 'parse') {
                    messages = JSON.parse(node.arguments[0].value);
                }
            },
        });
        return messages;
    } catch {
        return {};
    }
}
// determines chunk type based on code
function determineType(code, id, languagesChunks) {
    if (code.includes(".p + '") || code.includes(".default = 'https://cdn.discordapp.com/assets")) {
        const match = code.match(/(\.p \+ '(?<fileName>.+?)'|\.default = '(?<url>.+?)')/);
        return [
            'assets',
            {
                assetUrl: match.groups.url || 'https://canary.discord.com/assets/' + match.groups.fileName,
            },
        ];
    }
    if (code.includes('data:image/')) {
        return [
            'assets',
            {
                assetUrl: getDataUrl(code),
            },
        ];
    }
    if (code.includes("Store'") && code.includes("'displayName'") && code.includes('.defineProperty(')) {
        const { functions, events } = getStoreClassFunctionsAndDispatchEvents(code);
        return ['store', { name: code.match(/'(?<name>.+Store)'/).groups.name, functions, events }];
    }
    if (code.includes('buildNumber:') && code.includes('versionHash:')) {
        return [
            'buildInfo',
            {
                versionHash: code.match(/versionHash:"(.+?)"/gm)[1],
                buildNumber: code.match(/buildNumber:"(\d+)"/gm)[1],
            },
        ];
    }
    if (code.includes('createLoader:') && code.includes('en-US')) return ['intl-loader', getDataForIntlLoader(code)];
    if (languagesChunks[id]) {
        return [
            'intl-messages-definitions',
            {
                messages: getIntlMessages(code),
                language: languagesChunks[id],
            },
        ];
    }
    return ['unknown', {}];
}
module.exports = determineType;
