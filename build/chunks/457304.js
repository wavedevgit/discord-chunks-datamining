/** Chunk was on web.js **/
/** chunk id: 457304, original params: e (module,exports,re quire) **/
module.exports = function(e) {
  let t = "[a-z][a-zA-Z0-9_]*",
    n = {
      className: "string",
      begin: "\\$.{1}"
    },
    r = {
      className: "symbol",
      begin: "#" + e.UNDERSCORE_IDENT_RE
    };
  return {
    name: "Smalltalk",
    aliases: ["st"],
    keywords: ["self", "super", "nil", "true", "false", "thisContext"],
    contains: [e.COMMENT('"', '"'), e.APOS_STRING_MODE, {
      className: "type",
      begin: "\\b[A-Z][A-Za-z0-9_]*",
      relevance: 0
    }, {
      begin: t + ":",
      relevance: 0
    }, e.C_NUMBER_MODE, r, n, {
      begin: "\\|[ ]*" + t + "([ ]+" + t + ")*[ ]*\\|",
      returnBegin: true,
      end: /\|/,
      illegal: /\S/,
      contains: [{
        begin: "(\\|[ ]*)?" + t
      }]
    }, {
      begin: "#\\(",
      end: "\\)",
      contains: [e.APOS_STRING_MODE, n, e.C_NUMBER_MODE, r]
    }]
  }
}