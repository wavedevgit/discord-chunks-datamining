/** Chunk was on 51868 **/
/** chunk id: 241209, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => S
}), require("./413496.js"), require("./433524.js"), require("./35282.js");
var n, l, Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk159635 = require("./159635.js"),
  u = require.n(Chunk159635),
  Chunk663993 = require("./663993.js"),
  Chunk770146 = require("./770146.jsx"),
  Chunk772096 = require("./772096.js"),
  Chunk428595 = require("./428595.js"),
  Chunk532901 = require("./532901.jsx"),
  Chunk963071 = require("./963071.js"),
  Chunk154257 = require("./154257.js");

function j(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = r, e
}

function y(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = null != arguments[t] ? arguments[t] : {},
      n = Object.keys(r);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
      return Object.getOwnPropertyDescriptor(r, e).enumerable
    }))), n.forEach(function(t) {
      j(e, t, r[t])
    })
  }
  return e
}

function k(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      r.push.apply(r, n)
    }
    return r
  })(Object(t)).forEach(function(r) {
    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
  }), e
}
let O = new RegExp("https?://".concat(null != (n = window.GLOBAL_ENV.CDN_HOST) ? n : ""));

function x(e) {
  return "string" == typeof e.content ? e.content : v(e.content)
}
let w = k(y({}, u().defaultRules), {
    heading: k(y({}, u().defaultRules.heading), {
      react(e, t, r) {
        let n = "h".concat(e.level);
        return (0, a.jsx)(p.Z, {
          tag: n,
          children: t(e.content, r)
        }, r.key)
      }
    }),
    paragraph: k(y({}, u().defaultRules.paragraph), {
      react: (e, t, r) => (0, a.jsx)("div", {
        className: b.paragraph,
        children: t(e.content, r)
      }, r.key)
    }),
    strong: k(y({}, u().defaultRules.strong), {
      order: 6
    }),
    em: k(y({}, u().defaultRules.em), {
      order: 6
    }),
    u: k(y({}, u().defaultRules.u), {
      order: 5
    }),
    del: k(y({}, u().defaultRules.del), {
      order: 6
    }),
    link: k(y({}, Chunk772096.ZP, (0, Chunk532901.Z)({
      enableBuildOverrides: false
    })), {
      order: 6
    }),
    blockQuote: k(y({}, u().defaultRules.blockQuote), {
      react: (e, t, r) => (0, a.jsx)("blockquote", {
        className: b.blockquote,
        children: x(e)
      }, r.key)
    }),
    image: k(y({}, u().defaultRules.image), {
      order: 6,
      match(e, t, r) {
        let n = u().defaultRules.image;
        if (null == n || null == n.match) returnfalse;
        let l = n.match(e, t, r);
        if (null != l && Array.isArray(l) && l.length >= 3) {
          let e = l[2];
          if ("string" == typeof e) return null != e.match(O) ? l : null
        }
        returnfalse
      }
    }),
    inlineCode: k(y({}, Chunk428595.Z.RULES.inlineCode), {
      order: 6,
      react: (e, t, r) => (0, a.jsx)("code", {
        className: b.codeInline,
        children: x(e)
      }, r.key)
    }),
    codeBlock: k(y({}, u().defaultRules.codeBlock), {
      react(e, t, n) {
        let l = () => (0, a.jsx)("pre", {
          children: (0, a.jsx)("code", {
            className: i()(m.scrollbarGhostHairline, "hljs"),
            children: x(e)
          })
        }, n.key);
        return (0, a.jsx)(d.GI, {
          createPromise: () => Promise.resolve().then(r.bind(r, 364964)),
          webpackId: 364964,
          renderFallback: l,
          render: t => {
            if (!(e.lang && t.hasLanguage(e.lang)) || "string" != typeof e.content) return l();
            {
              let r = t.highlight(e.lang, e.content, true);
              return null == r ? l() : (0, a.jsx)("pre", {
                children: (0, a.jsx)("code", {
                  className: i()(m.scrollbarGhostHairline, "hljs", r.language),
                  dangerouslySetInnerHTML: {
                    __html: r.value
                  }
                })
              }, n.key)
            }
          }
        }, n.key)
      }
    })
  }),
  E = u().parserFor(w),
  v = u().reactFor(u().ruleOutput(w, "react"));
class _ extends(l = Chunk647438.PureComponent) {
  render() {
    let {
      className: e,
      children: t,
      state: r,
      parser: n,
      output: l
    } = this.props, o = l(n("".concat(exports, "\n\n"), y({
      inline: false
    }, require)));
    return (0, Chunk951288.jsx)("div", {
      className: i()(Chunk963071.markdown, module),
      children: Chunk647438
    })
  }
}
j(_, "rules", w), j(_, "defaultProps", {
  parser: E,
  output: v
});
let S = _