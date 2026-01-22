/** Chunk was on web.js **/
/** chunk id: 187865, original params: e (module,exports,re quire) **/
module.exports = function(e) {
  let t = "[a-zA-Z_$][a-zA-Z0-9_$]*",
    n = /(-?)(\b0[xX][a-fA-F0-9_]+|(\b\d+(\.[\d_]*)?|\.[\d_]+)(([eE][-+]?\d+)|i32|u32|i64|f64)?)/;
  return {
    name: "Haxe",
    aliases: ["hx"],
    keywords: {
      keyword: "abstract break case cast catch continue default do dynamic else enum extern final for function here if import in inline is macro never new override package private get set public return static super switch this throw trace try typedef untyped using var while Int Float String Bool Dynamic Void Array ",
      built_in: "trace this",
      literal: "true false null _"
    },
    contains: [{
      className: "string",
      begin: "'",
      end: "'",
      contains: [e.BACKSLASH_ESCAPE, {
        className: "subst",
        begin: /\$\{/,
        end: /\}/
      }, {
        className: "subst",
        begin: /\$/,
        end: /\W\}/
      }]
    }, e.QUOTE_STRING_MODE, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, {
      className: "number",
      begin: n,
      relevance: 0
    }, {
      className: "variable",
      begin: "\\$" + t
    }, {
      className: "meta",
      begin: /@:?/,
      end: /\(|$/,
      excludeEnd: true
    }, {
      className: "meta",
      begin: "#",
      end: "$",
      keywords: {
        keyword: "if else elseif end error"
      }
    }, {
      className: "type",
      begin: /:[ \t]*/,
      end: /[^A-Za-z0-9_ \t\->]/,
      excludeBegin: true,
      excludeEnd: true,
      relevance: 0
    }, {
      className: "type",
      begin: /:[ \t]*/,
      end: /\W/,
      excludeBegin: true,
      excludeEnd: true
    }, {
      className: "type",
      beginKeywords: "new",
      end: /\W/,
      excludeBegin: true,
      excludeEnd: true
    }, {
      className: "title.class",
      beginKeywords: "enum",
      end: /\{/,
      contains: [e.TITLE_MODE]
    }, {
      className: "title.class",
      begin: "\\babstract\\b(?=\\s*" + e.IDENT_RE + "\\s*\\()",
      end: /[\{$]/,
      contains: [{
        className: "type",
        begin: /\(/,
        end: /\)/,
        excludeBegin: true,
        excludeEnd: true
      }, {
        className: "type",
        begin: /from +/,
        end: /\W/,
        excludeBegin: true,
        excludeEnd: true
      }, {
        className: "type",
        begin: /to +/,
        end: /\W/,
        excludeBegin: true,
        excludeEnd: true
      }, e.TITLE_MODE],
      keywords: {
        keyword: "abstract from to"
      }
    }, {
      className: "title.class",
      begin: /\b(class|interface) +/,
      end: /[\{$]/,
      excludeEnd: true,
      keywords: "class interface",
      contains: [{
        className: "keyword",
        begin: /\b(extends|implements) +/,
        keywords: "extends implements",
        contains: [{
          className: "type",
          begin: e.IDENT_RE,
          relevance: 0
        }]
      }, e.TITLE_MODE]
    }, {
      className: "title.function",
      beginKeywords: "function",
      end: /\(/,
      excludeEnd: true,
      illegal: /\S/,
      contains: [e.TITLE_MODE]
    }],
    illegal: /<\//
  }
}