/** Chunk was on 32098 **/
n.d(t, {
  Z: () => f
}), n(47120);
var r = n(200651),
  i = n(192379),
  l = n(120356),
  o = n.n(l),
  a = n(91192),
  s = n(481060),
  c = n(540059),
  u = n(276952),
  d = n(682662),
  p = n(662146),
  h = n(61621);
let f = i.forwardRef(function(e, t) {
  var n, l;
  let {
    id: f,
    onClick: g,
    onContextMenu: m,
    icon: b,
    selected: v,
    tooltip: y,
    upperBadge: _,
    lowerBadge: O,
    lowerBadgeSize: j,
    showPill: x = !0,
    className: C,
    "aria-label": P,
    children: S,
    onMouseEnter: N,
    onMouseLeave: I,
    onMouseDown: Z
  } = e, w = (0, c.Q3)("ButtonListItem"), E = (0, a.Ie)(f), [T, A] = i.useState(!1);
  return (0, r.jsxs)(d.H, {
    children: [x ? (0, r.jsx)("div", {
      className: h.pill,
      children: (0, r.jsx)(u.Z, {
        hovered: T,
        selected: v
      })
    }) : null, (0, r.jsx)(p.Z, {
      text: y,
      selected: v,
      children: (0, r.jsx)(s.aRk, {
        selected: !!w || v || T,
        upperBadge: _,
        lowerBadge: O,
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
                enumerable: !0,
                configurable: !0,
                writable: !0
              }) : e[t] = r
            })
          }
          return e
        }({
          innerRef: t,
          onMouseEnter: () => {
            null == N || N(), A(!0)
          },
          onMouseLeave: () => {
            null == I || I(), A(!1)
          },
          onMouseDown: Z,
          className: o()(h.circleIconButton, C, {
            [h.selected]: v || T
          }),
          onClick: g,
          "aria-label": "string" == typeof y && null == P ? y : P,
          onContextMenu: m,
          focusProps: {
            enabled: !1
          }
        }, E), l = l = {
          children: null != b && (0, r.jsx)(b, {
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
    }), S]
  })
})