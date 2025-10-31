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
  Chunk719961 = require("./719961.js"),
  Chunk365355 = require("./365355.js"),
  Chunk891304 = require("./891304.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk861265 = require("./861265.js");

function m(e) {
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
  _ = Chunk185514.On.binds["0"],
  b = e => {
    let {
      firstElementFocusJumpSectionProps: t = {}
    } = e, {
      titlebarIconSize: n
    } = (0, c.T)({
      location: "BackForwardButtons"
    }), {
      canGoBack: i,
      canGoForward: o
    } = (0, a.cj)([u.Z], () => ({
      canGoBack: u.Z.canGoBack,
      canGoForward: u.Z.canGoForward
    }));
    return (0, r.jsxs)("div", {
      className: f.backForwardButtons,
      children: [(0, r.jsx)(s.aML, {
        "data-migration-pending": true,
        "aria-label": p.intl.string(p.t.B9vzIP),
        tooltipContentClassName: f.navigationTooltip,
        shouldShow: i,
        text: (0, r.jsxs)(r.Fragment, {
          children: [p.intl.string(p.t.B9vzIP), (0, r.jsx)(s.M2$, {
            shortcut: g
          })]
        }),
        children: e => (0, r.jsx)(s.P3F, h(m(h(m({}, e), {
          "aria-disabled": !i,
          className: l()(f.button, f.back, {
            [f.disabled]: !i
          }),
          onClick: () => (0, d.Hm)("nav_button")
        }), t), {
          children: (0, r.jsx)(s.whL, {
            size: n,
            color: "currentColor"
          })
        }))
      }), (0, r.jsx)(s.aML, {
        "data-migration-pending": true,
        "aria-label": p.intl.string(p.t["9KJ29e"]),
        tooltipContentClassName: f.navigationTooltip,
        shouldShow: o,
        text: (0, r.jsxs)(r.Fragment, {
          children: [p.intl.string(p.t["9KJ29e"]), (0, r.jsx)(s.M2$, {
            shortcut: _
          })]
        }),
        children: e => (0, r.jsx)(s.P3F, h(m({}, e), {
          "aria-disabled": !o,
          className: l()(f.button, f.forward, {
            [f.disabled]: !o
          }),
          onClick: () => (0, d.TL)("nav_button"),
          children: (0, r.jsx)(s.ZSh, {
            size: n,
            color: "currentColor"
          })
        }))
      })]
    })
  }