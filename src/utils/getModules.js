const acorn = require('acorn');
const walk = require('acorn-walk');

function getModules(code) {
    const ast = acorn.parse(code, { ecmaVersion: 'latest' });
    const result = { js: {}, css: {} };
    walk.simple(ast, {
        ExpressionStatement(node) {
            // js function
            if (
                node.expression?.left?.object?.name === '__webpack_require__' &&
                node.expression?.right?.type === 'FunctionExpression'
            ) {
                let type;
                const add = () => {
                    walk.simple(node.expression.right.body, {
                        ObjectExpression(node) {
                            for (let prop of node.properties) {
                                result[type][prop.key.value] = prop.value.value;
                            }
                        },
                    });
                };
                switch (node.expression.left.property.name) {
                    case 'k': {
                        type = 'css';
                        add();
                        return;
                    }
                    case 'u': {
                        type = 'js';
                        add();
                        return;
                    }
                }
            }
        },
    });
    return result;
}

module.exports = getModules;
