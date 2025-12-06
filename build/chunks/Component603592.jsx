/** Chunk was on 46467 **/
/** chunk id: 603592, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk91192 = require("./91192.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk276952 = require("./276952.jsx"),
  Chunk682662 = require("./682662.jsx"),
  Chunk662146 = require("./662146.jsx"),
  Chunk790952 = require("./790952.js");
let f = Chunk473749.forwardRef(function(e, t) {
  var n, l;
  let {
    id: f,
    onClick: p,
    onContextMenu: g,
    icon: m,
    selected: b,
    tooltip: _,
    upperBadge: y,
    lowerBadge: O,
    lowerBadgeSize: v,
    showPill: j = true,
    className: x,
    "aria-label": C,
    children: E,
    onMouseEnter: S,
    onMouseLeave: I,
    onMouseDown: P
  } = e, N = (0, a.Ie)(f), [Z, w] = i.useState(false);
  return (0, r.jsxs)(u.H, {
    children: [j ? (0, r.jsx)("div", {
      className: h.pill,
      children: (0, r.jsx)(c.Z, {
        hovered: Z,
        selected: b
      })
    }) : null, (0, r.jsx)(d.Z, {
      text: _,
      selected: b,
      children: (0, r.jsx)(s.aRk, {
        selected: true,
        upperBadge: y,
        lowerBadge: O,
        lowerBadgeSize: v,
        children: (0, r.jsx)(s.P3F, (n = function(e) {
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
          innerRef: t,
          onMouseEnter: () => {
            null == S || S(), w(true)
          },
          onMouseLeave: () => {
            null == I || I(), w(false)
          },
          onMouseDown: P,
          className: o()(h.circleIconButton, x, {
            [h.selected]: b || Z
          }),
          onClick: p,
          "aria-label": "string" == typeof _ && null == C ? _ : C,
          "aria-selected": b,
          onContextMenu: g,
          focusProps: {
            enabled: false
          }
        }, N), l = l = {
          children: null != m && (0, r.jsx)(m, {
            className: h.circleIcon,
            color: "currentColor"
          })
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(l)).forEach(function(e) {
          Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(l, e))
        }), n))
      })
    }), E]
  })
})