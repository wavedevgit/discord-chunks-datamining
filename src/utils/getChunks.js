const acorn = require('acorn');
const walk = require('acorn-walk');

// check if a key is a number or not
function isNumber(key) {
    const char = String(key).charCodeAt(0);
    const char0 = '0'.charCodeAt(0);
    const char9 = '9'.charCodeAt(0);
    return key !== undefined && char >= char0 && char <= char9;
}
// removes block statment brackets
function formatCode(code) {
    code = code.split('');
    code.pop();
    code.shift();
    return code.join('');
}

function getChunks(code, moduleId, moduleFileName) {
    const ast = acorn.parse(code, { ecmaVersion: 'latest' });
    const result = {};
    try {
        walk.simple(ast, {
            CallExpression(node) {
                // find (this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push calls
                if (
                    node.callee.type === 'MemberExpression' &&
                    node.callee?.object?.type === 'AssignmentExpression' &&
                    node.callee?.object?.right?.left?.property?.name === 'webpackChunkdiscord_app' &&
                    node.callee?.property?.name === 'push' &&
                    node.arguments?.[0]?.elements?.[1]?.type === 'ObjectExpression'
                ) {
                    for (let prop of node.arguments?.[0]?.elements?.[1]?.properties) {
                        const key = prop.key?.value;
                        if (!isNumber(key)) break;
                        const chunk = prop.value.body;
                        const chunkCode = code.slice(chunk.start, chunk.end);
                        const codeFormatted = formatCode(chunkCode);
                        result[key] = `/** Chunk was on ${moduleId} (${moduleFileName}.js) **/\n` + codeFormatted;
                    }
                }
            },
        });
    } catch {
        console.log('!!!! error', moduleId, moduleFileName);
    }
    return result;
}

module.exports = { getChunks, formatCode };
