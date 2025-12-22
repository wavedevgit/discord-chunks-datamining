/** Chunk was on 67000 **/
/** chunk id: 603592, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk91192 = require("./91192.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk276952 = require("./276952.jsx"),
  Chunk682662 = require("./682662.jsx"),
  Chunk662146 = require("./662146.jsx"),
  Chunk799830 = require("./799830.js");
let h = Chunk473749.forwardRef(function(e, t) {
  var n, l;
  let {
    id: h,
    onClick: p,
    onContextMenu: g,
    icon: b,
    selected: m,
    tooltip: y,
    upperBadge: O,
    lowerBadge: v,
    lowerBadgeSize: j,
    showPill: C = true,
    className: x,
    "aria-label": E,
    children: S,
    onMouseEnter: _,
    onMouseLeave: I,
    onMouseDown: P
  } = e, N = (0, o.Ie)(h), [Z, w] = i.useState(false);
  return (0, r.jsxs)(u.H, {
    children: [C ? (0, r.jsx)("div", {
      className: f.pill,
      children: (0, r.jsx)(c.Z, {
        hovered: Z,
        selected: m
      })
    }) : null, (0, r.jsx)(d.Z, {
      text: y,
      selected: m,
      children: (0, r.jsx)(s.aRk, {
        selected: true,
        upperBadge: O,
        lowerBadge: v,
        lowerBadgeSize: j,
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
            null == _ || _(), w(true)
          },
          onMouseLeave: () => {
            null == I || I(), w(false)
          },
          onMouseDown: P,
          className: a()(f.circleIconButton, x, {
            [f.selected]: m || Z
          }),
          onClick: p,
          "aria-label": "string" == typeof y && null == E ? y : E,
          "aria-selected": m,
          onContextMenu: g,
          focusProps: {
            enabled: false
          }
        }, N), l = l = {
          children: null != b && (0, r.jsx)(b, {
            className: f.circleIcon,
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
    }), S]
  })
})