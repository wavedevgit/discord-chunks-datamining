import * as acorn from "acorn";
import * as walk from "acorn-walk";
import generate from "escodegen";
function parseValue(node) {
  if (node.type === "SpreadElement") return null; 
  if (node.type === "ArrayExpression")
    return node.elements.map((el) => parseValue(el));
  if (node.type === "Literal") return node.value;
  if (node.type === "UnaryExpression") return node.argument === "0";
  if (node.type === "ObjectExpression") {
    let result = {};
    for (let prop of node.properties) {
      if (prop?.key?.name) result[prop?.key?.name] = parseValue(prop.value);
    }
    return result;
  }
  return generate.generate(node);
}
function getRawExperiment(code) {
  let ast;
  try {
    ast = acorn.parse(code, { ecmaVersion: "latest" });
  } catch (err) {
    console.log(code, err);
    process.kill(0);
  }
  let result = {};
  walk.simple(ast, {
    ObjectExpression(node) {
      const keys = [
        "label",
        "id",
        "kind",
        "treatments",
        "variations",
        "defaultConfig",
      ];
      if (
        !node.properties
          .map((prop) => prop?.key?.name)
          .some((key) => keys?.includes?.(key))
      )
        return;
      result = parseValue(node);
    },
  });
  return result;
}

export default getRawExperiment;
