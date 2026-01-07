import * as acorn from 'acorn';
import * as walk from 'acorn-walk';
import MagicString from 'magic-string';

function readAbleCode(params, code, id) {
    let ast;
    try {
        ast = acorn.parse(code, {
            ecmaVersion: 'latest',
            locations: true,
            sourceType: 'module',
        });
    } catch {
        console.log('failed', code);
    }

    const edits = [];
    const functions = [];

    walk.simple(ast, {
        FunctionDeclaration(n) {
            functions.push({ start: n.start, end: n.end });
        },
        FunctionExpression(n) {
            functions.push({ start: n.start, end: n.end });
        },
        ArrowFunctionExpression(n) {
            functions.push({ start: n.start, end: n.end });
        },
    });
    const mappings = {};
    const isInsideFunc = (node) =>
        functions.some((f) => f.start <= node.start && f.end >= node.end);
    const isWebpackRequireCall = (node) => {
        if (node?.type !== 'CallExpression') return false;
        return (
            node.callee.type === 'Identifier' &&
            node.callee.name === params[2] &&
            node.arguments.length === 1 &&
            node.arguments[0].type === 'Literal' &&
            typeof node.arguments[0].value === 'number'
        );
    };
    walk.simple(ast, {
        UnaryExpression(node) {
            if (typeof node.argument.value === 'number')
                edits.push({
                    start: node.start,
                    end: node.end,
                    replacement: String(node.argument.value === 0),
                });
        },
        CallExpression(node) {
            if (isInsideFunc(node)) return;
            if (isWebpackRequireCall(node)) {
                // Replace numeric argument with "./X.js"
                const id = node.arguments[0].value;

                edits.push({
                    start: node.arguments[0].start,
                    end: node.arguments[0].end,
                    replacement: `"./${id}.js"`,
                });
            }
        },
        VariableDeclaration(node) {
            if (isInsideFunc(node)) return;
            for (let declaration of node.declarations) {
                if (isWebpackRequireCall(declaration?.init)) {
                    mappings[declaration.id.name] =
                        `Chunk${declaration.init.arguments[0].value}`;
                    if (declaration.id.type === 'Identifier')
                        edits.push({
                            start: declaration.id.start,
                            end: declaration.id.end,
                            replacement: `Chunk${declaration.init.arguments[0].value}`,
                        });

                    // rename based on chunk id
                }
            }
        },
    });
    const mappingsFuncs = {};
    walk.simple(ast, {
        Identifier(node) {
            if (isInsideFunc(node)) return;
            if (mappings[node.name]) {
                edits.push({
                    start: node.start,
                    end: node.end,
                    replacement: mappings[node.name],
                });
            }
            if (node.name === params[0]) {
                edits.push({
                    start: node.start,
                    end: node.end,
                    replacement: 'module',
                });
            } else if (node.name === params[1]) {
                edits.push({
                    start: node.start,
                    end: node.end,
                    replacement: 'exports',
                });
            } else if (node.name === params[2]) {
                edits.push({
                    start: node.start,
                    end: node.end,
                    replacement: 'require',
                });
            }
        },
    });

    edits.sort((a, b) => {
        if (b.start !== a.start) return b.start - a.start;
        return b.end - a.end;
    });
    walk.simple(ast, {
        Identifier(node) {
            if (!isInsideFunc(node)) return;
            const mpf = mappingsFuncs[node.name];
            if (
                mpf &&
                mpf[0]?.start <= node.start &&
                mpf[0]?.end >= node.end &&
                typeof mpf[1] === 'string'
            ) {
                edits.push({
                    start: node.start,
                    end: node.end,
                    replacement: mpf[1],
                });
                return;
            }
        },
    });
    walk.simple(ast, {
        Identifier(node) {
            if (isInsideFunc(node)) return;
            if (
                mappings[node.name] &&
                typeof mappings[node.name] === 'string'
            ) {
                edits.push({
                    start: node.start,
                    end: node.end,
                    replacement: mappings[node.name],
                });
            }
        },
    });

    // Apply edits from back to front
    let result = new MagicString(code);
    const s = new Set();
    for (let edit of edits) {
        s.add(edit);
    }
    if (s.size !== edits.length) console.log('there is dups');
    let lastAppliedStart = Infinity;
    for (const { start, end, replacement } of edits) {
        if (end > lastAppliedStart) continue;
        if (typeof replacement !== 'string') continue;
        result.overwrite(start, end, replacement);
        lastAppliedStart = start;
    }

    return result.toString();
}

export { readAbleCode };
