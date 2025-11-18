/** Chunk was on web.js **/
/** chunk id: 241209, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => N
}), require("./413496.js"), require("./433524.js"), require("./35282.js");
var r, i, Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk159635 = require("./159635.js"),
  u = require.n(Chunk159635),
  Chunk663993 = require("./663993.js"),
  Chunk770146 = require("./770146.jsx"),
  Chunk772096 = require("./772096.js"),
  Chunk428595 = require("./428595.js"),
  Chunk532901 = require("./532901.jsx"),
  Chunk316697 = require("./316697.js"),
  Chunk525685 = require("./525685.js");

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
let v = new RegExp("https?://".concat(null != (r = window.GLOBAL_ENV.CDN_HOST) ? r : ""));

function I(e) {
  return "string" == typeof e.content ? e.content : A(e.content)
}
let T = O(b({}, u().defaultRules), {
    heading: O(b({}, u().defaultRules.heading), {
      react(e, t, n) {
        let r = "h".concat(e.level);
        return (0, a.jsx)(f.Z, {
          tag: r,
          children: t(e.content, n)
        }, n.key)
      }
    }),
    paragraph: O(b({}, u().defaultRules.paragraph), {
      react: (e, t, n) => (0, a.jsx)("div", {
        className: m.paragraph,
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
    link: O(b({}, Chunk772096.ZP, (0, Chunk532901.Z)({
      enableBuildOverrides: false
    })), {
      order: 6
    }),
    blockQuote: O(b({}, u().defaultRules.blockQuote), {
      react: (e, t, n) => (0, a.jsx)("blockquote", {
        className: m.blockquote,
        children: I(e)
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
          if ("string" == typeof e) return null != e.match(v) ? i : null
        }
        returnfalse
      }
    }),
    inlineCode: O(b({}, Chunk428595.Z.RULES.inlineCode), {
      order: 6,
      react: (e, t, n) => (0, a.jsx)("code", {
        className: m.codeInline,
        children: I(e)
      }, n.key)
    }),
    codeBlock: O(b({}, u().defaultRules.codeBlock), {
      react(e, t, r) {
        let i = () => (0, a.jsx)("pre", {
          children: (0, a.jsx)("code", {
            className: l()(g.scrollbarGhostHairline, "hljs"),
            children: I(e)
          })
        }, r.key);
        return (0, a.jsx)(d.GI, {
          createPromise: () => Promise.resolve().then(n.bind(n, 364964)),
          webpackId: 364964,
          renderFallback: i,
          render: t => {
            if (!(e.lang && t.hasLanguage(e.lang)) || "string" != typeof e.content) return i();
            {
              let n = t.highlight(e.lang, e.content, true);
              return null == n ? i() : (0, a.jsx)("pre", {
                children: (0, a.jsx)("code", {
                  className: l()(g.scrollbarGhostHairline, "hljs", n.language),
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
  S = u().parserFor(T),
  A = u().reactFor(u().ruleOutput(T, "react"));
class C extends(i = Chunk473749.PureComponent) {
  render() {
    let {
      className: e,
      children: t,
      state: n,
      parser: r,
      output: i
    } = this.props, o = i(r("".concat(exports, "\n\n"), b({
      inline: false
    }, require)));
    return (0, Chunk54381.jsx)("div", {
      className: l()(Chunk316697.markdown, module),
      children: Chunk473749
    })
  }
}
E(C, "rules", T), E(C, "defaultProps", {
  parser: S,
  output: A
});
let N = C