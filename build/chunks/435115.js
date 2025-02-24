/** Chunk was on web (https://canary.discord.comweb.6d4953f88f353958.js.js) **/
function t(e) {
  let t = ["package", "import", "option", "optional", "required", "repeated", "group", "oneof"],
    n = ["double", "float", "int32", "int64", "uint32", "uint64", "sint32", "sint64", "fixed32", "fixed64", "sfixed32", "sfixed64", "bool", "string", "bytes"],
    r = {
      match: [/(message|enum|service)\s+/, e.IDENT_RE],
      scope: {
        1: "keyword",
        2: "title.class"
      }
    };
  return {
    name: "Protocol Buffers",
    aliases: ["proto"],
    keywords: {
      keyword: t,
      type: n,
      literal: ["true", "false"]
    },
    contains: [e.QUOTE_STRING_MODE, e.NUMBER_MODE, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, r, {
      className: "function",
      beginKeywords: "rpc",
      end: /[{;]/,
      excludeEnd: !0,
      keywords: "rpc returns"
    }, {
      begin: /^\s*[A-Z_]+(?=\s*=[^\n]+;$)/
    }]
  }
}
e.exports = t