/** Chunk was on web (https://canary.discord.comweb.6d4953f88f353958.js.js) **/
function t(e) {
  let t = ["add", "and", "cmp", "cmpg", "cmpl", "const", "div", "double", "float", "goto", "if", "int", "long", "move", "mul", "neg", "new", "nop", "not", "or", "rem", "return", "shl", "shr", "sput", "sub", "throw", "ushr", "xor"],
    n = ["aget", "aput", "array", "check", "execute", "fill", "filled", "goto/16", "goto/32", "iget", "instance", "invoke", "iput", "monitor", "packed", "sget", "sparse"],
    r = ["transient", "constructor", "abstract", "final", "synthetic", "public", "private", "protected", "static", "bridge", "system"];
  return {
    name: "Smali",
    contains: [{
      className: "string",
      begin: '"',
      end: '"',
      relevance: 0
    }, e.COMMENT("#", "$", {
      relevance: 0
    }), {
      className: "keyword",
      variants: [{
        begin: "\\s*\\.end\\s[a-zA-Z0-9]*"
      }, {
        begin: "^[ ]*\\.[a-zA-Z]*",
        relevance: 0
      }, {
        begin: "\\s:[a-zA-Z_0-9]*",
        relevance: 0
      }, {
        begin: "\\s(" + r.join("|") + ")"
      }]
    }, {
      className: "built_in",
      variants: [{
        begin: "\\s(" + t.join("|") + ")\\s"
      }, {
        begin: "\\s(" + t.join("|") + ")((-|/)[a-zA-Z0-9]+)+\\s",
        relevance: 10
      }, {
        begin: "\\s(" + n.join("|") + ")((-|/)[a-zA-Z0-9]+)*\\s",
        relevance: 10
      }]
    }, {
      className: "class",
      begin: "L[^(;:\n]*;",
      relevance: 0
    }, {
      begin: "[vp][0-9]+"
    }]
  }
}
e.exports = t