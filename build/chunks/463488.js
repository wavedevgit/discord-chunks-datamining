/** Chunk was on web.js **/
function t(e) {
  let t = e.regex,
    n = /[a-zA-Z]\w*/,
    r = ["as", "break", "class", "construct", "continue", "else", "for", "foreign", "if", "import", "in", "is", "return", "static", "var", "while"],
    i = ["true", "false", "null"],
    o = ["this", "super"],
    a = ["Bool", "Class", "Fiber", "Fn", "List", "Map", "Null", "Num", "Object", "Range", "Sequence", "String", "System"],
    s = ["-", "~", /\*/, "%", /\.\.\./, /\.\./, /\+/, "<<", ">>", ">=", "<=", "<", ">", /\^/, /!=/, /!/, /\bis\b/, "==", "&&", "&", /\|\|/, /\|/, /\?:/, "="],
    l = {
      relevance: 0,
      match: t.concat(/\b(?!(if|while|for|else|super)\b)/, n, /(?=\s*[({])/),
      className: "title.function"
    },
    c = {
      match: t.concat(t.either(t.concat(/\b(?!(if|while|for|else|super)\b)/, n), t.either(...s)), /(?=\s*\([^)]+\)\s*\{)/),
      className: "title.function",
      starts: {
        contains: [{
          begin: /\(/,
          end: /\)/,
          contains: [{
            relevance: 0,
            scope: "params",
            match: n
          }]
        }]
      }
    },
    u = {
      variants: [{
        match: [/class\s+/, n, /\s+is\s+/, n]
      }, {
        match: [/class\s+/, n]
      }],
      scope: {
        2: "title.class",
        4: "title.class.inherited"
      },
      keywords: r
    },
    d = {
      relevance: 0,
      match: t.either(...s),
      className: "operator"
    },
    f = {
      className: "string",
      begin: /"""/,
      end: /"""/
    },
    _ = {
      className: "property",
      begin: t.concat(/\./, t.lookahead(n)),
      end: n,
      excludeBegin: !0,
      relevance: 0
    },
    p = {
      relevance: 0,
      match: t.concat(/\b_/, n),
      scope: "variable"
    },
    h = {
      relevance: 0,
      match: /\b[A-Z]+[a-z]+([A-Z]+[a-z]+)*/,
      scope: "title.class",
      keywords: {
        _: a
      }
    },
    g = e.C_NUMBER_MODE,
    m = {
      match: [n, /\s*/, /=/, /\s*/, /\(/, n, /\)\s*\{/],
      scope: {
        1: "title.function",
        3: "operator",
        6: "params"
      }
    },
    E = e.COMMENT(/\/\*\*/, /\*\//, {
      contains: [{
        match: /@[a-z]+/,
        scope: "doctag"
      }, "self"]
    }),
    v = {
      scope: "subst",
      begin: /%\(/,
      end: /\)/,
      contains: [g, h, l, p, d]
    },
    b = {
      scope: "string",
      begin: /"/,
      end: /"/,
      contains: [v, {
        scope: "char.escape",
        variants: [{
          match: /\\\\|\\["0%abefnrtv]/
        }, {
          match: /\\x[0-9A-F]{2}/
        }, {
          match: /\\u[0-9A-F]{4}/
        }, {
          match: /\\U[0-9A-F]{8}/
        }]
      }]
    };
  v.contains.push(b);
  let y = [...r, ...o, ...i],
    O = {
      relevance: 0,
      match: t.concat("\\b(?!", y.join("|"), "\\b)", /[a-zA-Z_]\w*(?:[?!]|\b)/),
      className: "variable"
    },
    S = {
      scope: "comment",
      variants: [{
        begin: [/#!?/, /[A-Za-z_]+(?=\()/],
        beginScope: {},
        keywords: {
          literal: i
        },
        contains: [],
        end: /\)/
      }, {
        begin: [/#!?/, /[A-Za-z_]+/],
        beginScope: {},
        end: /$/
      }]
    };
  return {
    name: "Wren",
    keywords: {
      keyword: r,
      "variable.language": o,
      literal: i
    },
    contains: [S, g, b, f, E, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, h, u, m, c, l, d, p, _, O]
  }
}
e.exports = t