/** Chunk was on web.js **/
/** chunk id: 205332, original params: e (module,exports,re quire) **/
module.exports = function(e) {
  let t = e.regex,
    n = /[_A-Za-z][_0-9A-Za-z]*/;
  return {
    name: "GraphQL",
    aliases: ["gql"],
    case_insensitive: true,
    disableAutodetect: false,
    keywords: {
      keyword: ["query", "mutation", "subscription", "type", "input", "schema", "directive", "interface", "union", "scalar", "fragment", "enum", "on"],
      literal: ["true", "false", "null"]
    },
    contains: [e.HASH_COMMENT_MODE, e.QUOTE_STRING_MODE, e.NUMBER_MODE, {
      scope: "punctuation",
      match: /[.]{3}/,
      relevance: 0
    }, {
      scope: "punctuation",
      begin: /[\!\(\)\:\=\[\]\{\|\}]{1}/,
      relevance: 0
    }, {
      scope: "variable",
      begin: /\$/,
      end: /\W/,
      excludeEnd: true,
      relevance: 0
    }, {
      scope: "meta",
      match: /@\w+/,
      excludeEnd: true
    }, {
      scope: "symbol",
      begin: t.concat(n, t.lookahead(/\s*:/)),
      relevance: 0
    }],
    illegal: [/[;<']/, /BEGIN/]
  }
}