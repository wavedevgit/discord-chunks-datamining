/** Chunk was on 95017 **/
/** chunk id: 241209, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => O
}), require("./413496.js"), require("./433524.js"), require("./35282.js");
var a, r, Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk159635 = require("./159635.js"),
  d = require.n(Chunk159635),
  Chunk663993 = require("./663993.js"),
  Chunk770146 = require("./770146.jsx"),
  Chunk772096 = require("./772096.js"),
  Chunk428595 = require("./428595.js"),
  Chunk532901 = require("./532901.jsx"),
  Chunk963071 = require("./963071.js"),
  Chunk154257 = require("./154257.js");

function b(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function v(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      a = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), a.forEach(function(t) {
      b(e, t, n[t])
    })
  }
  return e
}

function j(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var a = Object.getOwnPropertySymbols(e);
      n.push.apply(n, a)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let _ = new RegExp("https?://".concat(null != (a = window.GLOBAL_ENV.CDN_HOST) ? a : ""));

function y(e) {
  return "string" == typeof e.content ? e.content : E(e.content)
}
let C = j(v({}, d().defaultRules), {
    heading: j(v({}, d().defaultRules.heading), {
      react(e, t, n) {
        let a = "h".concat(e.level);
        return (0, l.jsx)(m.Z, {
          tag: a,
          children: t(e.content, n)
        }, n.key)
      }
    }),
    paragraph: j(v({}, d().defaultRules.paragraph), {
      react: (e, t, n) => (0, l.jsx)("div", {
        className: g.paragraph,
        children: t(e.content, n)
      }, n.key)
    }),
    strong: j(v({}, d().defaultRules.strong), {
      order: 6
    }),
    em: j(v({}, d().defaultRules.em), {
      order: 6
    }),
    u: j(v({}, d().defaultRules.u), {
      order: 5
    }),
    del: j(v({}, d().defaultRules.del), {
      order: 6
    }),
    link: j(v({}, Chunk772096.ZP, (0, Chunk532901.Z)({
      enableBuildOverrides: false
    })), {
      order: 6
    }),
    blockQuote: j(v({}, d().defaultRules.blockQuote), {
      react: (e, t, n) => (0, l.jsx)("blockquote", {
        className: g.blockquote,
        children: y(e)
      }, n.key)
    }),
    image: j(v({}, d().defaultRules.image), {
      order: 6,
      match(e, t, n) {
        let a = d().defaultRules.image;
        if (null == a || null == a.match) returnfalse;
        let r = a.match(e, t, n);
        if (null != r && Array.isArray(r) && r.length >= 3) {
          let e = r[2];
          if ("string" == typeof e) return null != e.match(_) ? r : null
        }
        returnfalse
      }
    }),
    inlineCode: j(v({}, Chunk428595.Z.RULES.inlineCode), {
      order: 6,
      react: (e, t, n) => (0, l.jsx)("code", {
        className: g.codeInline,
        children: y(e)
      }, n.key)
    }),
    codeBlock: j(v({}, d().defaultRules.codeBlock), {
      react(e, t, a) {
        let r = () => (0, l.jsx)("pre", {
          children: (0, l.jsx)("code", {
            className: s()(f.scrollbarGhostHairline, "hljs"),
            children: y(e)
          })
        }, a.key);
        return (0, l.jsx)(u.GI, {
          createPromise: () => Promise.resolve().then(n.bind(n, 364964)),
          webpackId: 364964,
          renderFallback: r,
          render: t => {
            if (!(e.lang && t.hasLanguage(e.lang)) || "string" != typeof e.content) return r();
            {
              let n = t.highlight(e.lang, e.content, true);
              return null == n ? r() : (0, l.jsx)("pre", {
                children: (0, l.jsx)("code", {
                  className: s()(f.scrollbarGhostHairline, "hljs", n.language),
                  dangerouslySetInnerHTML: {
                    __html: n.value
                  }
                })
              }, a.key)
            }
          }
        }, a.key)
      }
    })
  }),
  S = d().parserFor(C),
  E = d().reactFor(d().ruleOutput(C, "react"));
class T extends(r = Chunk647438.PureComponent) {
  render() {
    let {
      className: e,
      children: t,
      state: n,
      parser: a,
      output: r
    } = this.props, i = r(a("".concat(exports, "\n\n"), v({
      inline: false
    }, require)));
    return (0, Chunk951288.jsx)("div", {
      className: s()(Chunk963071.markdown, module),
      children: Chunk647438
    })
  }
}
b(T, "rules", C), b(T, "defaultProps", {
  parser: S,
  output: E
});
let O = T