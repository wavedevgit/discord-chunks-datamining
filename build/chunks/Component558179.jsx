/** Chunk was on web.js **/
/** chunk id: 558179, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => N
}), require("./591487.js"), require("./727858.js"), require("./747238.js");
var r, i, Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  l = require.n(Chunk503698),
  Chunk280230 = require("./280230.js"),
  u = require.n(Chunk280230),
  Chunk268218 = require("./268218.js"),
  Chunk481859 = require("./481859.jsx"),
  Chunk694403 = require("./694403.js"),
  Chunk542664 = require("./542664.js"),
  Chunk49005 = require("./49005.jsx"),
  Chunk529223 = require("./529223.js"),
  Chunk829681 = require("./829681.js");

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function b(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      E(e, t, n[t])
    })
  }
  return e
}

function y(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function O(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : y(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let A = new RegExp("https?://".concat(null != (r = window.GLOBAL_ENV.CDN_HOST) ? r : ""));

function v(e) {
  return "string" == typeof e.content ? e.content : T(e.content)
}
let S = O(b({}, u().defaultRules), {
    heading: O(b({}, u().defaultRules.heading), {
      react(e, t, n) {
        let r = "h".concat(e.level);
        return (0, a.jsx)(f.A, {
          tag: r,
          children: t(e.content, n)
        }, n.key)
      }
    }),
    paragraph: O(b({}, u().defaultRules.paragraph), {
      react: (e, t, n) => (0, a.jsx)("div", {
        className: m.FY,
        children: t(e.content, n)
      }, n.key)
    }),
    strong: O(b({}, u().defaultRules.strong), {
      order: 6
    }),
    em: O(b({}, u().defaultRules.em), {
      order: 6
    }),
    u: O(b({}, u().defaultRules.u), {
      order: 5
    }),
    del: O(b({}, u().defaultRules.del), {
      order: 6
    }),
    link: O(b({}, Chunk694403.Ay, (0, Chunk49005.A)({
      enableBuildOverrides: false
    })), {
      order: 6
    }),
    blockQuote: O(b({}, u().defaultRules.blockQuote), {
      react: (e, t, n) => (0, a.jsx)("blockquote", {
        className: m.aV,
        children: v(e)
      }, n.key)
    }),
    image: O(b({}, u().defaultRules.image), {
      order: 6,
      match(e, t, n) {
        let r = u().defaultRules.image;
        if (null == r || null == r.match) returnfalse;
        let i = r.match(e, t, n);
        if (null != i && Array.isArray(i) && i.length >= 3) {
          let e = i[2];
          if ("string" == typeof e) return null != e.match(A) ? i : null
        }
        returnfalse
      }
    }),
    inlineCode: O(b({}, Chunk542664.A.RULES.inlineCode), {
      order: 6,
      react: (e, t, n) => (0, a.jsx)("code", {
        className: m.hQ,
        children: v(e)
      }, n.key)
    }),
    codeBlock: O(b({}, u().defaultRules.codeBlock), {
      react(e, t, r) {
        let i = () => (0, a.jsx)("pre", {
          children: (0, a.jsx)("code", {
            className: l()(g.kw, "hljs"),
            children: v(e)
          })
        }, r.key);
        return (0, a.jsx)(d.c2, {
          createPromise: () => Promise.resolve().then(n.bind(n, 752238)),
          webpackId: 752238,
          renderFallback: i,
          render: t => {
            if (!(e.lang && t.hasLanguage(e.lang)) || "string" != typeof e.content) return i();
            {
              let n = t.highlight(e.lang, e.content, true);
              return null == n ? i() : (0, a.jsx)("pre", {
                children: (0, a.jsx)("code", {
                  className: l()(g.kw, "hljs", n.language),
                  dangerouslySetInnerHTML: {
                    __html: n.value
                  }
                })
              }, r.key)
            }
          }
        }, r.key)
      }
    })
  }),
  I = u().parserFor(S),
  T = u().reactFor(u().ruleOutput(S, "react"));
class C extends(i = Chunk64700.PureComponent) {
  render() {
    let {
      className: e,
      children: t,
      state: n,
      parser: r,
      output: i
    } = this.props, s = i(r("".concat(t, "\n\n"), b({
      inline: false
    }, n)));
    return (0, a.jsx)("div", {
      className: l()(m.wD, e),
      children: s
    })
  }
}
E(C, "rules", S), E(C, "defaultProps", {
  parser: I,
  output: T
});
let N = C