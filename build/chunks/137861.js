/** Chunk was on web (https://canary.discord.comweb.9f0be545d3e34886.js.js) **/
var t = "[0-9](_*[0-9])*",
  n = `\\.(${t})`,
  r = "[0-9a-fA-F](_*[0-9a-fA-F])*",
  i = {
    className: "number",
    variants: [{
      begin: `(\\b(${t})((${n})|\\.)?|(${n}))[eE][+-]?(${t})[fFdD]?\\b`
    }, {
      begin: `\\b(${t})((${n})[fFdD]?\\b|\\.([fFdD]\\b)?)`
    }, {
      begin: `(${n})[fFdD]?\\b`
    }, {
      begin: `\\b(${t})[fFdD]\\b`
    }, {
      begin: `\\b0[xX]((${r})\\.?|(${r})?\\.(${r}))[pP][+-]?(${t})[fFdD]?\\b`
    }, {
      begin: "\\b(0|[1-9](_*[0-9])*)[lL]?\\b"
    }, {
      begin: `\\b0[xX](${r})[lL]?\\b`
    }, {
      begin: "\\b0(_*[0-7])*[lL]?\\b"
    }, {
      begin: "\\b0[bB][01](_*[01])*[lL]?\\b"
    }],
    relevance: 0
  };

function o(e) {
  let t = {
      keyword: "abstract as val var vararg get set class object open private protected public noinline crossinline dynamic final enum if else do while for when throw try catch finally import package is in fun override companion reified inline lateinit init interface annotation data sealed internal infix operator out by constructor super tailrec where const inner suspend typealias external expect actual",
      built_in: "Byte Short Char Int Long Boolean Float Double Void Unit Nothing",
      literal: "true false null"
    },
    n = {
      className: "keyword",
      begin: /\b(break|continue|return|this)\b/,
      starts: {
        contains: [{
          className: "symbol",
          begin: /@\w+/
        }]
      }
    },
    r = {
      className: "symbol",
      begin: e.UNDERSCORE_IDENT_RE + "@"
    },
    o = {
      className: "subst",
      begin: /\$\{/,
      end: /\}/,
      contains: [e.C_NUMBER_MODE]
    },
    a = {
      className: "variable",
      begin: "\\$" + e.UNDERSCORE_IDENT_RE
    },
    s = {
      className: "string",
      variants: [{
        begin: '"""',
        end: '"""(?=[^"])',
        contains: [a, o]
      }, {
        begin: "'",
        end: "'",
        illegal: /\n/,
        contains: [e.BACKSLASH_ESCAPE]
      }, {
        begin: '"',
        end: '"',
        illegal: /\n/,
        contains: [e.BACKSLASH_ESCAPE, a, o]
      }]
    };
  o.contains.push(s);
  let l = {
      className: "meta",
      begin: "@(?:file|property|field|get|set|receiver|param|setparam|delegate)\\s*:(?:\\s*" + e.UNDERSCORE_IDENT_RE + ")?"
    },
    c = {
      className: "meta",
      begin: "@" + e.UNDERSCORE_IDENT_RE,
      contains: [{
        begin: /\(/,
        end: /\)/,
        contains: [e.inherit(s, {
          className: "string"
        }), "self"]
      }]
    },
    u = i,
    d = e.COMMENT("/\\*", "\\*/", {
      contains: [e.C_BLOCK_COMMENT_MODE]
    }),
    f = {
      variants: [{
        className: "type",
        begin: e.UNDERSCORE_IDENT_RE
      }, {
        begin: /\(/,
        end: /\)/,
        contains: []
      }]
    },
    p = f;
  return p.variants[1].contains = [f], f.variants[1].contains = [p], {
    name: "Kotlin",
    aliases: ["kt", "kts"],
    keywords: t,
    contains: [e.COMMENT("/\\*\\*", "\\*/", {
      relevance: 0,
      contains: [{
        className: "doctag",
        begin: "@[A-Za-z]+"
      }]
    }), e.C_LINE_COMMENT_MODE, d, n, r, l, c, {
      className: "function",
      beginKeywords: "fun",
      end: "[(]|$",
      returnBegin: !0,
      excludeEnd: !0,
      keywords: t,
      relevance: 5,
      contains: [{
        begin: e.UNDERSCORE_IDENT_RE + "\\s*\\(",
        returnBegin: !0,
        relevance: 0,
        contains: [e.UNDERSCORE_TITLE_MODE]
      }, {
        className: "type",
        begin: /</,
        end: />/,
        keywords: "reified",
        relevance: 0
      }, {
        className: "params",
        begin: /\(/,
        end: /\)/,
        endsParent: !0,
        keywords: t,
        relevance: 0,
        contains: [{
          begin: /:/,
          end: /[=,\/]/,
          endsWithParent: !0,
          contains: [f, e.C_LINE_COMMENT_MODE, d],
          relevance: 0
        }, e.C_LINE_COMMENT_MODE, d, l, c, s, e.C_NUMBER_MODE]
      }, d]
    }, {
      begin: [/class|interface|trait/, /\s+/, e.UNDERSCORE_IDENT_RE],
      beginScope: {
        3: "title.class"
      },
      keywords: "class interface trait",
      end: /[:\{(]|$/,
      excludeEnd: !0,
      illegal: "extends implements",
      contains: [{
        beginKeywords: "public protected internal private constructor"
      }, e.UNDERSCORE_TITLE_MODE, {
        className: "type",
        begin: /</,
        end: />/,
        excludeBegin: !0,
        excludeEnd: !0,
        relevance: 0
      }, {
        className: "type",
        begin: /[,:]\s*/,
        end: /[<\(,){\s]|$/,
        excludeBegin: !0,
        returnEnd: !0
      }, l, c]
    }, s, {
      className: "meta",
      begin: "^#!/usr/bin/env",
      end: "$",
      illegal: "\n"
    }, u]
  }
}
e.exports = o