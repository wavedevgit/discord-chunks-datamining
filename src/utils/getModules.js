import * as acorn from "acorn";
import * as walk from "acorn-walk";

function getModules(code) {
  const ast = acorn.parse(code, { ecmaVersion: "latest" });
  const result = { js: {}, css: {} };
  walk.simple(ast, {
    ExpressionStatement(node) {
      // js function
      if (
        (node.expression?.left?.object?.name === "__webpack_require__" &&
          node.expression?.right?.type === "FunctionExpression") ||
        node.expression?.right?.type === "ArrowFunctionExpression"
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
        switch (node?.expression?.right?.body?.right?.value) {
          case ".js": {
            type = "js";
            add();
            return;
          }
          case ".css": {
            type = "css";
            add();
            return;
          }
        }
      }
    },
  });
  return result;
}

export default getModules;
