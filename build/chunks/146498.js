/** Chunk was on web (https://canary.discord.comweb.767fb3b3f685bfe8.js.js) **/
function t(e) {
  let t = ["assembly", "module", "package", "import", "alias", "class", "interface", "object", "given", "value", "assign", "void", "function", "new", "of", "extends", "satisfies", "abstracts", "in", "out", "return", "break", "continue", "throw", "assert", "dynamic", "if", "else", "switch", "case", "for", "while", "try", "catch", "finally", "then", "let", "this", "outer", "super", "is", "exists", "nonempty"],
    n = ["shared", "abstract", "formal", "default", "actual", "variable", "late", "native", "deprecated", "final", "sealed", "annotation", "suppressWarnings", "small"],
    r = ["doc", "by", "license", "see", "throws", "tagged"],
    i = {
      className: "subst",
      excludeBegin: !0,
      excludeEnd: !0,
      begin: /``/,
      end: /``/,
      keywords: t,
      relevance: 10
    },
    o = [{
      className: "string",
      begin: '"""',
      end: '"""',
      relevance: 10
    }, {
      className: "string",
      begin: '"',
      end: '"',
      contains: [i]
    }, {
      className: "string",
      begin: "'",
      end: "'"
    }, {
      className: "number",
      begin: "#[0-9a-fA-F_]+|\\$[01_]+|[0-9_]+(?:\\.[0-9_](?:[eE][+-]?\\d+)?)?[kMGTPmunpf]?",
      relevance: 0
    }];
  return i.contains = o, {
    name: "Ceylon",
    keywords: {
      keyword: t.concat(n),
      meta: r
    },
    illegal: "\\$[^01]|#[^0-9a-fA-F]",
    contains: [e.C_LINE_COMMENT_MODE, e.COMMENT("/\\*", "\\*/", {
      contains: ["self"]
    }), {
      className: "meta",
      begin: '@[a-z]\\w*(?::"[^"]*")?'
    }].concat(o)
  }
}
e.exports = t