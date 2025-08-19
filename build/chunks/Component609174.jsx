/** Chunk was on 1272 **/
/** chunk id: 609174, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk185514 = require("./185514.js"),
  Chunk365355 = require("./365355.js"),
  Chunk891304 = require("./891304.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk861265 = require("./861265.js");

function f(e) {
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

function h(e, t) {
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
let g = Chunk185514.Nx.binds["0"],
  m = Chunk185514.On.binds["0"],
  b = e => {
    let {
      firstElementFocusJumpSectionProps: t = {}
    } = e, n = (0, a.e7)([c.Z], () => c.Z.canGoBack), i = (0, a.e7)([c.Z], () => c.Z.canGoForward);
    return (0, r.jsxs)("div", {
      className: p.backForwardButtons,
      children: [(0, r.jsx)(o.ua7, {
        "aria-label": d.intl.string(d.t.B9vzIC),
        tooltipContentClassName: p.navigationTooltip,
        shouldShow: n,
        text: (0, r.jsxs)(r.Fragment, {
          children: [d.intl.string(d.t.B9vzIC), (0, r.jsx)(o.M2$, {
            shortcut: g
          })]
        }),
        children: e => (0, r.jsx)(o.P3F, h(f(h(f({}, e), {
          "aria-disabled": !n,
          className: l()(p.button, p.back, {
            [p.disabled]: !n
          }),
          onClick: () => (0, u.Hm)("arrow")
        }), t), {
          children: (0, r.jsx)(o.whL, {
            size: "sm",
            color: "currentColor"
          })
        }))
      }), (0, r.jsx)(o.ua7, {
        "aria-label": d.intl.string(d.t["9KJ29f"]),
        tooltipContentClassName: p.navigationTooltip,
        shouldShow: i,
        text: (0, r.jsxs)(r.Fragment, {
          children: [d.intl.string(d.t["9KJ29f"]), (0, r.jsx)(o.M2$, {
            shortcut: m
          })]
        }),
        children: e => (0, r.jsx)(o.P3F, h(f({}, e), {
          "aria-disabled": !i,
          className: l()(p.button, p.forward, {
            [p.disabled]: !i
          }),
          onClick: () => (0, u.TL)("arrow"),
          children: (0, r.jsx)(o.ZSh, {
            size: "sm",
            color: "currentColor"
          })
        }))
      })]
    })
  }