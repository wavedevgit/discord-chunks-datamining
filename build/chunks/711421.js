/** Chunk was on web (https://canary.discord.comweb.895a2488cd77ea6e.js.js) **/
function t(e) {
  let t = e.regex,
    n = {
      className: "meta",
      begin: "@[A-Za-z]+"
    },
    r = {
      className: "subst",
      variants: [{
        begin: "\\$[A-Za-z0-9_]+"
      }, {
        begin: /\$\{/,
        end: /\}/
      }]
    },
    i = {
      className: "string",
      variants: [{
        begin: '"""',
        end: '"""'
      }, {
        begin: '"',
        end: '"',
        illegal: "\\n",
        contains: [e.BACKSLASH_ESCAPE]
      }, {
        begin: '[a-z]+"',
        end: '"',
        illegal: "\\n",
        contains: [e.BACKSLASH_ESCAPE, r]
      }, {
        className: "string",
        begin: '[a-z]+"""',
        end: '"""',
        contains: [r],
        relevance: 10
      }]
    },
    o = {
      className: "type",
      begin: "\\b[A-Z][A-Za-z0-9_]*",
      relevance: 0
    },
    a = {
      className: "title",
      begin: /[^0-9\n\t "'(),.`{}\[\]:;][^\n\t "'(),.`{}\[\]:;]+|[^0-9\n\t "'(),.`{}\[\]:;=]/,
      relevance: 0
    },
    s = {
      className: "class",
      beginKeywords: "class object trait type",
      end: /[:={\[\n;]/,
      excludeEnd: !0,
      contains: [e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, {
        beginKeywords: "extends with",
        relevance: 10
      }, {
        begin: /\[/,
        end: /\]/,
        excludeBegin: !0,
        excludeEnd: !0,
        relevance: 0,
        contains: [o, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE]
      }, {
        className: "params",
        begin: /\(/,
        end: /\)/,
        excludeBegin: !0,
        excludeEnd: !0,
        relevance: 0,
        contains: [o, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE]
      }, a]
    },
    l = {
      className: "function",
      beginKeywords: "def",
      end: t.lookahead(/[:={\[(\n;]/),
      contains: [a]
    },
    c = {
      begin: [/^\s*/, "extension", /\s+(?=[[(])/],
      beginScope: {
        2: "keyword"
      }
    },
    u = {
      begin: [/^\s*/, /end/, /\s+/, /(extension\b)?/],
      beginScope: {
        2: "keyword",
        4: "keyword"
      }
    },
    d = [{
      match: /\.inline\b/
    }, {
      begin: /\binline(?=\s)/,
      keywords: "inline"
    }],
    f = {
      begin: [/\(\s*/, /using/, /\s+(?!\))/],
      beginScope: {
        2: "keyword"
      }
    };
  return {
    name: "Scala",
    keywords: {
      literal: "true false null",
      keyword: "type yield lazy override def with val var sealed abstract private trait object if then forSome for while do throw finally protected extends import final return else break new catch super class case package default try this match continue throws implicit export enum given transparent"
    },
    contains: [{
      begin: ["//>", /\s+/, /using/, /\s+/, /\S+/],
      beginScope: {
        1: "comment",
        3: "keyword",
        5: "type"
      },
      end: /$/,
      contains: [{
        className: "string",
        begin: /\S+/
      }]
    }, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, i, o, l, s, e.C_NUMBER_MODE, c, u, ...d, f, n]
  }
}
e.exports = t