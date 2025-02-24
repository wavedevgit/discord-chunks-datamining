/** Chunk was on web.js **/
function t(e) {
  let t = {
      className: "subst",
      variants: [{
        begin: "\\$[A-Za-z0-9_]+"
      }]
    },
    n = {
      className: "subst",
      variants: [{
        begin: /\$\{/,
        end: /\}/
      }],
      keywords: "true false null this is new super"
    },
    r = {
      className: "number",
      relevance: 0,
      variants: [{
        match: /\b[0-9][0-9_]*(\.[0-9][0-9_]*)?([eE][+-]?[0-9][0-9_]*)?\b/
      }, {
        match: /\b0[xX][0-9A-Fa-f][0-9A-Fa-f_]*\b/
      }]
    },
    i = {
      className: "string",
      variants: [{
        begin: "r'''",
        end: "'''"
      }, {
        begin: 'r"""',
        end: '"""'
      }, {
        begin: "r'",
        end: "'",
        illegal: "\\n"
      }, {
        begin: 'r"',
        end: '"',
        illegal: "\\n"
      }, {
        begin: "'''",
        end: "'''",
        contains: [e.BACKSLASH_ESCAPE, t, n]
      }, {
        begin: '"""',
        end: '"""',
        contains: [e.BACKSLASH_ESCAPE, t, n]
      }, {
        begin: "'",
        end: "'",
        illegal: "\\n",
        contains: [e.BACKSLASH_ESCAPE, t, n]
      }, {
        begin: '"',
        end: '"',
        illegal: "\\n",
        contains: [e.BACKSLASH_ESCAPE, t, n]
      }]
    };
  n.contains = [r, i];
  let o = ["Comparable", "DateTime", "Duration", "Function", "Iterable", "Iterator", "List", "Map", "Match", "Object", "Pattern", "RegExp", "Set", "Stopwatch", "String", "StringBuffer", "StringSink", "Symbol", "Type", "Uri", "bool", "double", "int", "num", "Element", "ElementList"],
    a = o.map(e => `${e}?`);
  return {
    name: "Dart",
    keywords: {
      keyword: ["abstract", "as", "assert", "async", "await", "base", "break", "case", "catch", "class", "const", "continue", "covariant", "default", "deferred", "do", "dynamic", "else", "enum", "export", "extends", "extension", "external", "factory", "false", "final", "finally", "for", "Function", "get", "hide", "if", "implements", "import", "in", "interface", "is", "late", "library", "mixin", "new", "null", "on", "operator", "part", "required", "rethrow", "return", "sealed", "set", "show", "static", "super", "switch", "sync", "this", "throw", "true", "try", "typedef", "var", "void", "when", "while", "with", "yield"],
      built_in: o.concat(a).concat(["Never", "Null", "dynamic", "print", "document", "querySelector", "querySelectorAll", "window"]),
      $pattern: /[A-Za-z][A-Za-z0-9_]*\??/
    },
    contains: [i, e.COMMENT(/\/\*\*(?!\/)/, /\*\//, {
      subLanguage: "markdown",
      relevance: 0
    }), e.COMMENT(/\/{3,} ?/, /$/, {
      contains: [{
        subLanguage: "markdown",
        begin: ".",
        end: "$",
        relevance: 0
      }]
    }), e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, {
      className: "class",
      beginKeywords: "class interface",
      end: /\{/,
      excludeEnd: !0,
      contains: [{
        beginKeywords: "extends implements"
      }, e.UNDERSCORE_TITLE_MODE]
    }, r, {
      className: "meta",
      begin: "@[A-Za-z]+"
    }, {
      begin: "=>"
    }]
  }
}
e.exports = t