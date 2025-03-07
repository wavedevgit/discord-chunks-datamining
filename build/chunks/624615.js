/** Chunk was on web.js **/
function t(e) {
  let t = "[a-zA-Z-_][^\\n{]+\\{",
    n = {
      className: "attribute",
      begin: /[a-zA-Z-_]+/,
      end: /\s*:/,
      excludeEnd: !0,
      starts: {
        end: ";",
        relevance: 0,
        contains: [{
          className: "variable",
          begin: /\.[a-zA-Z-_]+/
        }, {
          className: "keyword",
          begin: /\(optional\)/
        }]
      }
    };
  return {
    name: "Roboconf",
    aliases: ["graph", "instances"],
    case_insensitive: !0,
    keywords: "import",
    contains: [{
      begin: "^facet " + t,
      end: /\}/,
      keywords: "facet",
      contains: [n, e.HASH_COMMENT_MODE]
    }, {
      begin: "^\\s*instance of " + t,
      end: /\}/,
      keywords: "name count channels instance-data instance-state instance of",
      illegal: /\S/,
      contains: ["self", n, e.HASH_COMMENT_MODE]
    }, {
      begin: "^" + t,
      end: /\}/,
      contains: [n, e.HASH_COMMENT_MODE]
    }, e.HASH_COMMENT_MODE]
  }
}
e.exports = t