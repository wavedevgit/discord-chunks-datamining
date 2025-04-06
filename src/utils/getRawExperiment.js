const acorn = require("acorn");
const walk = require("acorn-walk");
const generate = require("escodegen");
function parseValue(node) {
  if (node.type === "ArrayExpression")
    return node.elements.map((el) => parseValue(el));
  if (node.type === "Literal") return node.value;
  if (node.type === "UnaryExpression") return node.argument === "0";
  if (node.type === "ObjectExpression") {
    let result = {};
    for (let prop of node.properties) {
      result[prop.key.name] = parseValue(prop.value);
    }
    return result;
  }
  return generate.generate(node);
}
function getRawExperiment(code) {
  const ast = acorn.parse(code, { ecmaVersion: "latest" });
  let result = {};
  walk.simple(ast, {
    ObjectExpression(node) {
      const keys = ["label", "id", "kind", "treatments"];
      if (
        !node.properties
          .map((prop) => prop.key.name)
          .some((key) => keys.includes(key))
      )
        return;
      result = parseValue(node);
    },
  });
  return result;
}

module.exports = getRawExperiment;
