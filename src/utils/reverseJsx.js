import * as acorn from "acorn";
import * as walk from "acorn-walk";
import MagicString from "magic-string";
function reverseJsxFromString(code) {
  let ast;
  try {
    ast = acorn.parse(code, {
      ecmaVersion: "latest",
      locations: true,
      sourceType: "module",
    });
  } catch (e) {
    return code;
  }
  const replacements = [];
  const toJsx = (args) => {
    const component = args[0];
    let componentCode = code.slice(component.start, component.end);
    if (componentCode?.startsWith?.('"') && componentCode?.endsWith?.('"')) {
      componentCode = componentCode.replaceAll('"', "");
    }
    let attrs = "";
    let inner = "";
    if (args[1].type !== "ObjectExpression") {
      attrs = `{...${code.slice(args[1].start, args[1].end)}}`;
    }
    if (args[1].type === "ObjectExpression") {
      for (let prop of args[1]?.properties || []) {
        if (prop.type === "SpreadElement") {
          inner += ` {...${code.slice(
            prop.argument.start,
            prop.argument.end
          )}}`;
          continue;
        }
        const [name, value] = [prop.key.name || prop.key.value, prop.value];
        // parse children
        if (name === "children") {
          if (value.type === "ArrayExpression") {
            for (let element of value.elements) {
              if (
                element.type === "CallExpression" &&
                ["jsx", "jsxs"].includes(
                  value?.callee?.expressions?.[1]?.property?.name
                )
              ) {
                inner += reverseJsxFromString(
                  code.slice(element.start, element.end)
                );
              } else {
                if (element.type === "SpreadElement") {
                  inner += ` {...${code.slice(
                    element.argument.start,
                    element.argument.end
                  )}}`;
                  continue;
                }
                inner += `{${reverseJsxFromString(
                  code.slice(element.start, element.end)
                )}}`;
              }
            }
          }
          if (!inner)
            if (
              value.type === "CallExpression" &&
              ["jsx", "jsxs"].includes(
                value?.callee?.expressions?.[1]?.property?.name
              )
            )
              inner = `${reverseJsxFromString(
                code.slice(value.start, value.end)
              )}`;
            else {
              inner = `{${code.slice(value.start, value.end)}}`;
            }
        }

        if (name !== "children")
          attrs += ` ${name}={${code.slice(value.start, value.end)}}`;
      }
    }
    return inner
      ? `<${componentCode}${attrs}>${inner}</${componentCode}>`
      : `<${componentCode}${attrs} />`;
  };

  walk.simple(ast, {
    CallExpression(node) {
      // detect jsx calls
      if (
        node.type === "CallExpression" &&
        ["jsx", "jsxs"].includes(node?.callee?.expressions?.[1]?.property?.name)
      ) {
        replacements.push({
          start: node.start,
          end: node.end,
          line: toJsx(node.arguments),
        });
      }
    },
  });

  const s = new MagicString(code);
  for (let replacement of replacements) {
    s.update(replacement.start, replacement.end, replacement.line);
  }
  code = s.toString();
  return code.startsWith("<<") ? code.replace("<<", "<") : code;
}

export { reverseJsxFromString };
