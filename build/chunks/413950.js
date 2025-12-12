/** Chunk was on web.js **/
/** chunk id: 413950, original params: e (module,exports,re quire) **/
module.exports = function(e) {
  let t = e.regex,
    n = {
      begin: /<\/?[A-Za-z_]/,
      end: ">",
      subLanguage: "xml",
      relevance: 0
    },
    r = {
      begin: "^[-\\*]{3,}",
      end: "$"
    },
    i = {
      className: "code",
      variants: [{
        begin: "(`{3,})[^`](.|\\n)*?\\1`*[ ]*"
      }, {
        begin: "(~{3,})[^~](.|\\n)*?\\1~*[ ]*"
      }, {
        begin: "```",
        end: "```+[ ]*$"
      }, {
        begin: "~~~",
        end: "~~~+[ ]*$"
      }, {
        begin: "`.+?`"
      }, {
        begin: "(?=^( {4}|\\t))",
        contains: [{
          begin: "^( {4}|\\t)",
          end: "(\\n)$"
        }],
        relevance: 0
      }]
    },
    o = {
      className: "bullet",
      begin: "^[ 	]*([*+-]|(\\d+\\.))(?=\\s+)",
      end: "\\s+",
      excludeEnd: true
    },
    a = {
      begin: /^\[[^\n]+\]:/,
      returnBegin: true,
      contains: [{
        className: "symbol",
        begin: /\[/,
        end: /\]/,
        excludeBegin: true,
        excludeEnd: true
      }, {
        className: "link",
        begin: /:\s*/,
        end: /$/,
        excludeBegin: true
      }]
    },
    s = /[A-Za-z][A-Za-z0-9+.-]*/,
    l = {
      variants: [{
        begin: /\[.+?\]\[.*?\]/,
        relevance: 0
      }, {
        begin: /\[.+?\]\(((data|javascript|mailto):|(?:http|ftp)s?:\/\/).*?\)/,
        relevance: 2
      }, {
        begin: t.concat(/\[.+?\]\(/, s, /:\/\/.*?\)/),
        relevance: 2
      }, {
        begin: /\[.+?\]\([./?&#].*?\)/,
        relevance: 1
      }, {
        begin: /\[.*?\]\(.*?\)/,
        relevance: 0
      }],
      returnBegin: true,
      contains: [{
        match: /\[(?=\])/
      }, {
        className: "string",
        relevance: 0,
        begin: "\\[",
        end: "\\]",
        excludeBegin: true,
        returnEnd: true
      }, {
        className: "link",
        relevance: 0,
        begin: "\\]\\(",
        end: "\\)",
        excludeBegin: true,
        excludeEnd: true
      }, {
        className: "symbol",
        relevance: 0,
        begin: "\\]\\[",
        end: "\\]",
        excludeBegin: true,
        excludeEnd: true
      }]
    },
    c = {
      className: "strong",
      contains: [],
      variants: [{
        begin: /_{2}(?!\s)/,
        end: /_{2}/
      }, {
        begin: /\*{2}(?!\s)/,
        end: /\*{2}/
      }]
    },
    u = {
      className: "emphasis",
      contains: [],
      variants: [{
        begin: /\*(?![*\s])/,
        end: /\*/
      }, {
        begin: /_(?![_\s])/,
        end: /_/,
        relevance: 0
      }]
    },
    d = e.inherit(c, {
      contains: []
    }),
    f = e.inherit(u, {
      contains: []
    });
  c.contains.push(f), u.contains.push(d);
  let p = [n, l];
  return [c, u, d, f].forEach(e => {
    e.contains = e.contains.concat(p)
  }), {
    name: "Markdown",
    aliases: ["md", "mkdown", "mkd"],
    contains: [{
      className: "section",
      variants: [{
        begin: "^#{1,6}",
        end: "$",
        contains: p = p.concat(c, u)
      }, {
        begin: "(?=^.+?\\n[=-]{2,}$)",
        contains: [{
          begin: "^[=-]*$"
        }, {
          begin: "^",
          end: "\\n",
          contains: p
        }]
      }]
    }, n, o, c, u, {
      className: "quote",
      begin: "^>\\s+",
      contains: p,
      end: "$"
    }, i, r, l, a, {
      scope: "literal",
      match: /&([a-zA-Z0-9]+|#[0-9]{1,7}|#[Xx][0-9a-fA-F]{1,6});/
    }]
  }
}