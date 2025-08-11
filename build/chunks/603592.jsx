/** Chunk was on 34779 **/
/** chunk id: 603592, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk91192 = require("./91192.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk276952 = require("./276952.jsx"),
  Chunk682662 = require("./682662.js"),
  Chunk662146 = require("./662146.js"),
  Chunk329922 = require("./329922.js");
let p = Chunk73800.forwardRef(function(e, t) {
  var n, l;
  let {
    id: p,
    onClick: f,
    onContextMenu: g,
    icon: m,
    selected: b,
    tooltip: O,
    upperBadge: _,
    lowerBadge: y,
    lowerBadgeSize: C,
    showPill: v = true,
    className: j,
    "aria-label": E,
    children: S,
    onMouseEnter: x,
    onMouseLeave: I,
    onMouseDown: P
  } = e, N = (0, s.Ie)(p), [w, Z] = i.useState(false);
  return <u.H>{v ? <div className={h.pill}><c.Z hovered={w} selected={b} /></div> : null}{<d.Z text={O} selected={b}><a.aRk selected={true} upperBadge={_} lowerBadge={y} lowerBadgeSize={C}><a.P3F{...n = function(e) {
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
            null == x || x(), Z(true)
          },
          onMouseLeave: () => {
            null == I || I(), Z(false)
          },
          onMouseDown: P,
          className: o()(h.circleIconButton, j, {
            [h.selected]: b || w
          }),
          onClick: f,
          "aria-label": "string" == typeof O && null == E ? O : E,
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
        }), n} /></a.aRk></d.Z>}{S}</u.H>
})