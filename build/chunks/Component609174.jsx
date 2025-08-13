/** Chunk was on 1272 **/
/** chunk id: 609174, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk185514 = require("./185514.js"),
  Chunk703656 = require("./703656.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk817066 = require("./817066.js");

function d(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}

function p(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let f = Chunk185514.Nx.binds["0"],
  h = Chunk185514.On.binds["0"],
  g = e => {
    let {
      firstElementFocusJumpSectionProps: t = {}
    } = e;
    return (0, r.jsxs)("div", {
      className: u.backForwardButtons,
      children: [(0, r.jsx)(a.ua7, {
        "aria-label": c.intl.string(c.t.B9vzIC),
        tooltipContentClassName: u.navigationTooltip,
        text: (0, r.jsxs)(r.Fragment, {
          children: [c.intl.string(c.t.B9vzIC), (0, r.jsx)(a.M2$, {
            shortcut: f
          })]
        }),
        children: e => (0, r.jsx)(a.P3F, p(d(p(d({}, e), {
          className: l()(u.button, u.back),
          onClick: s.op
        }), t), {
          children: (0, r.jsx)(a.whL, {
            size: "sm",
            color: "currentColor"
          })
        }))
      }), (0, r.jsx)(a.ua7, {
        "aria-label": c.intl.string(c.t["9KJ29f"]),
        tooltipContentClassName: u.navigationTooltip,
        text: (0, r.jsxs)(r.Fragment, {
          children: [c.intl.string(c.t["9KJ29f"]), (0, r.jsx)(a.M2$, {
            shortcut: h
          })]
        }),
        children: e => (0, r.jsx)(a.P3F, p(d({}, e), {
          className: l()(u.button, u.forward),
          onClick: s.eH,
          children: (0, r.jsx)(a.ZSh, {
            size: "sm",
            color: "currentColor"
          })
        }))
      })]
    })
  }