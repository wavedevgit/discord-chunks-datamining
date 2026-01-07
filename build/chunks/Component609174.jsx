/** Chunk was on 1272 **/
/** chunk id: 609174, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk681715 = require("./681715.js"),
  Chunk481060 = require("./481060.js"),
  Chunk185514 = require("./185514.js"),
  Chunk719961 = require("./719961.js"),
  Chunk365355 = require("./365355.js"),
  Chunk891304 = require("./891304.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk470165 = require("./470165.js");
let m = Chunk185514.Nx.binds["0"],
  h = Chunk185514.On.binds["0"],
  b = e => {
    var t, n;
    let {
      firstElementFocusJumpSectionProps: i = {}
    } = e, {
      titlebarIconSize: c
    } = (0, u.T)({
      location: "BackForwardButtons"
    }), {
      canGoBack: b,
      canGoForward: _
    } = (0, a.cj)([d.Z], () => ({
      canGoBack: d.Z.canGoBack,
      canGoForward: d.Z.canGoForward
    }));
    return (0, r.jsxs)("div", {
      className: g.backForwardButtons,
      children: [(0, r.jsx)(o.u, {
        ariaHidden: true,
        shouldShow: b,
        text: f.intl.string(f.t.B9vzIP),
        keyboardShortcut: m,
        children: (0, r.jsx)(s.P3F, (t = function(e) {
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
        }({
          "aria-label": f.intl.string(f.t.B9vzIP),
          "aria-disabled": !b,
          className: l()(g.button, g.back, {
            [g.disabled]: !b
          }),
          onClick: () => (0, p.Hm)("nav_button")
        }, i), n = n = {
          children: (0, r.jsx)(s.whL, {
            size: c,
            color: "currentColor"
          })
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(n)).forEach(function(e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
        }), t))
      }), (0, r.jsx)(o.u, {
        ariaHidden: true,
        shouldShow: _,
        text: f.intl.string(f.t["9KJ29e"]),
        keyboardShortcut: h,
        children: (0, r.jsx)(s.P3F, {
          "aria-label": f.intl.string(f.t["9KJ29e"]),
          "aria-disabled": !_,
          className: l()(g.button, g.forward, {
            [g.disabled]: !_
          }),
          onClick: () => (0, p.TL)("nav_button"),
          children: (0, r.jsx)(s.ZSh, {
            size: c,
            color: "currentColor"
          })
        })
      })]
    })
  }