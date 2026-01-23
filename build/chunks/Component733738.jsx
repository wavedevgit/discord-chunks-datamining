/** Chunk was on 21738 **/
/** chunk id: 733738, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => A
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  l = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk435371 = require("./435371.js"),
  Chunk397927 = require("./397927.js"),
  Chunk430086 = require("./430086.js"),
  Chunk545167 = require("./545167.js"),
  Chunk729904 = require("./729904.js"),
  Chunk963169 = require("./963169.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk88808 = require("./88808.js");
let f = Chunk430086.GY.binds["0"],
  m = Chunk430086.M$.binds["0"],
  A = e => {
    var t, n;
    let {
      firstElementFocusJumpSectionProps: i = {}
    } = e, {
      titlebarIconSize: c
    } = (0, u.p)({
      location: "BackForwardButtons"
    }), {
      canGoBack: A,
      canGoForward: _
    } = (0, a.cf)([d.A], () => ({
      canGoBack: d.A.canGoBack,
      canGoForward: d.A.canGoForward
    }));
    return (0, r.jsxs)("div", {
      className: g.y_,
      children: [(0, r.jsx)(s.m_, {
        ariaHidden: true,
        shouldShow: A,
        text: h.intl.string(h.t.B9vzIP),
        keyboardShortcut: f,
        children: (0, r.jsx)(o.DUT, (t = function(e) {
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
          "aria-label": h.intl.string(h.t.B9vzIP),
          "aria-disabled": !A,
          className: l()(g.x6, g.aX, {
            [g.r9]: !A
          }),
          onClick: () => (0, p.OE)("nav_button")
        }, i), n = n = {
          children: (0, r.jsx)(o.rJJ, {
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
      }), (0, r.jsx)(s.m_, {
        ariaHidden: true,
        shouldShow: _,
        text: h.intl.string(h.t["9KJ29e"]),
        keyboardShortcut: m,
        children: (0, r.jsx)(o.DUT, {
          "aria-label": h.intl.string(h.t["9KJ29e"]),
          "aria-disabled": !_,
          className: l()(g.x6, g.sY, {
            [g.r9]: !_
          }),
          onClick: () => (0, p.Qb)("nav_button"),
          children: (0, r.jsx)(o.EdP, {
            size: c,
            color: "currentColor"
          })
        })
      })]
    })
  }