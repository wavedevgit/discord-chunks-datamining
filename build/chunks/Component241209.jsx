/** Chunk was on 66181 **/
/** chunk id: 241209, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => N
}), require("./413496.js"), require("./433524.js"), require("./35282.js");
var i, r, Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk159635 = require("./159635.js"),
  d = require.n(Chunk159635),
  Chunk663993 = require("./663993.js"),
  Chunk770146 = require("./770146.jsx"),
  Chunk772096 = require("./772096.js"),
  Chunk428595 = require("./428595.js"),
  Chunk532901 = require("./532901.jsx"),
  Chunk963071 = require("./963071.js"),
  Chunk154257 = require("./154257.js");

function x(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function _(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      x(e, t, n[t])
    })
  }
  return e
}

function j(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      n.push.apply(n, i)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let E = new RegExp("https?://".concat(null != (i = window.GLOBAL_ENV.CDN_HOST) ? i : ""));

function C(e) {
  return "string" == typeof e.content ? e.content : S(e.content)
}
let O = j(_({}, d().defaultRules), {
    heading: j(_({}, d().defaultRules.heading), {
      react(e, t, n) {
        let i = "h".concat(e.level);
        return (0, s.jsx)(m.Z, {
          tag: i,
          children: t(e.content, n)
        }, n.key)
      }
    }),
    paragraph: j(_({}, d().defaultRules.paragraph), {
      react: (e, t, n) => (0, s.jsx)("div", {
        className: f.paragraph,
        children: t(e.content, n)
      }, n.key)
    }),
    strong: j(_({}, d().defaultRules.strong), {
      order: 6
    }),
    em: j(_({}, d().defaultRules.em), {
      order: 6
    }),
    u: j(_({}, d().defaultRules.u), {
      order: 5
    }),
    del: j(_({}, d().defaultRules.del), {
      order: 6
    }),
    link: j(_({}, Chunk772096.ZP, (0, Chunk532901.Z)({
      enableBuildOverrides: false
    })), {
      order: 6
    }),
    blockQuote: j(_({}, d().defaultRules.blockQuote), {
      react: (e, t, n) => (0, s.jsx)("blockquote", {
        className: f.blockquote,
        children: C(e)
      }, n.key)
    }),
    image: j(_({}, d().defaultRules.image), {
      order: 6,
      match(e, t, n) {
        let i = d().defaultRules.image;
        if (null == i || null == i.match) returnfalse;
        let r = i.match(e, t, n);
        if (null != r && Array.isArray(r) && r.length >= 3) {
          let e = r[2];
          if ("string" == typeof e) return null != e.match(E) ? r : null
        }
        returnfalse
      }
    }),
    inlineCode: j(_({}, Chunk428595.Z.RULES.inlineCode), {
      order: 6,
      react: (e, t, n) => (0, s.jsx)("code", {
        className: f.codeInline,
        children: C(e)
      }, n.key)
    }),
    codeBlock: j(_({}, d().defaultRules.codeBlock), {
      react(e, t, i) {
        let r = () => (0, s.jsx)("pre", {
          children: (0, s.jsx)("code", {
            className: o()(b.scrollbarGhostHairline, "hljs"),
            children: C(e)
          })
        }, i.key);
        return (0, s.jsx)(u.GI, {
          createPromise: () => Promise.resolve().then(n.bind(n, 364964)),
          webpackId: 364964,
          renderFallback: r,
          render: t => {
            if (!(e.lang && t.hasLanguage(e.lang)) || "string" != typeof e.content) return r();
            {
              let n = t.highlight(e.lang, e.content, true);
              return null == n ? r() : (0, s.jsx)("pre", {
                children: (0, s.jsx)("code", {
                  className: o()(b.scrollbarGhostHairline, "hljs", n.language),
                  dangerouslySetInnerHTML: {
                    __html: n.value
                  }
                })
              }, i.key)
            }
          }
        }, i.key)
      }
    })
  }),
  v = d().parserFor(O),
  S = d().reactFor(d().ruleOutput(O, "react"));
class T extends(r = Chunk647438.PureComponent) {
  render() {
    let {
      className: e,
      children: t,
      state: n,
      parser: i,
      output: r
    } = this.props, a = r(i("".concat(exports, "\n\n"), _({
      inline: false
    }, require)));
    return (0, Chunk951288.jsx)("div", {
      className: o()(Chunk963071.markdown, module),
      children: Chunk647438
    })
  }
}
x(T, "rules", O), x(T, "defaultProps", {
  parser: v,
  output: S
});
let N = T