/** Chunk was on web (https://canary.discord.comweb.6d4953f88f353958.js.js) **/
function t(e) {
  let t = ["struct", "enum", "interface", "union", "group", "import", "using", "const", "annotation", "extends", "in", "of", "on", "as", "with", "from", "fixed"],
    n = ["Void", "Bool", "Int8", "Int16", "Int32", "Int64", "UInt8", "UInt16", "UInt32", "UInt64", "Float32", "Float64", "Text", "Data", "AnyPointer", "AnyStruct", "Capability", "List"],
    r = ["true", "false"],
    i = {
      variants: [{
        match: [/(struct|enum|interface)/, /\s+/, e.IDENT_RE]
      }, {
        match: [/extends/, /\s*\(/, e.IDENT_RE, /\s*\)/]
      }],
      scope: {
        1: "keyword",
        3: "title.class"
      }
    };
  return {
    name: "Cap’n Proto",
    aliases: ["capnp"],
    keywords: {
      keyword: t,
      type: n,
      literal: r
    },
    contains: [e.QUOTE_STRING_MODE, e.NUMBER_MODE, e.HASH_COMMENT_MODE, {
      className: "meta",
      begin: /@0x[\w\d]{16};/,
      illegal: /\n/
    }, {
      className: "symbol",
      begin: /@\d+\b/
    }, i]
  }
}
e.exports = t