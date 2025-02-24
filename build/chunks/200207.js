/** Chunk was on web (https://canary.discord.comweb.a4687b32e07d48ae.js.js) **/
function t(e) {
  let t = e.regex,
    n = /[a-zA-Z_$][a-zA-Z0-9_$]*/,
    r = t.concat(n, t.concat("(\\.", n, ")*")),
    i = /([*]|[a-zA-Z_$][a-zA-Z0-9_$]*)/,
    o = {
      className: "rest_arg",
      begin: /[.]{3}/,
      end: n,
      relevance: 10
    };
  return {
    name: "ActionScript",
    aliases: ["as"],
    keywords: {
      keyword: ["as", "break", "case", "catch", "class", "const", "continue", "default", "delete", "do", "dynamic", "each", "else", "extends", "final", "finally", "for", "function", "get", "if", "implements", "import", "in", "include", "instanceof", "interface", "internal", "is", "namespace", "native", "new", "override", "package", "private", "protected", "public", "return", "set", "static", "super", "switch", "this", "throw", "try", "typeof", "use", "var", "void", "while", "with"],
      literal: ["true", "false", "null", "undefined"]
    },
    contains: [e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, e.C_NUMBER_MODE, {
      match: [/\bpackage/, /\s+/, r],
      className: {
        1: "keyword",
        3: "title.class"
      }
    }, {
      match: [/\b(?:class|interface|extends|implements)/, /\s+/, n],
      className: {
        1: "keyword",
        3: "title.class"
      }
    }, {
      className: "meta",
      beginKeywords: "import include",
      end: /;/,
      keywords: {
        keyword: "import include"
      }
    }, {
      beginKeywords: "function",
      end: /[{;]/,
      excludeEnd: !0,
      illegal: /\S/,
      contains: [e.inherit(e.TITLE_MODE, {
        className: "title.function"
      }), {
        className: "params",
        begin: /\(/,
        end: /\)/,
        contains: [e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, o]
      }, {
        begin: t.concat(/:\s*/, i)
      }]
    }, e.METHOD_GUARD],
    illegal: /#/
  }
}
e.exports = t