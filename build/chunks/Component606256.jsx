/** Chunk was on 97492 **/
/** chunk id: 606256, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => h
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk837381 = require("./837381.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk941971 = require("./941971.jsx"),
  Chunk900848 = require("./900848.jsx"),
  Chunk550591 = require("./550591.jsx"),
  Chunk878442 = require("./878442.js");
let h = Chunk64700.forwardRef(function(e, t) {
  var n, i;
  let {
    id: h,
    onClick: f,
    onContextMenu: g,
    icon: m,
    selected: b,
    tooltip: A,
    upperBadge: y,
    lowerBadge: _,
    lowerBadgeSize: O,
    showPill: j = true,
    className: v,
    "aria-label": x,
    children: E,
    onMouseEnter: C,
    onMouseLeave: S,
    onMouseDown: I
  } = e, N = (0, a.Vd)(h), [T, P] = l.useState(false);
  return (0, r.jsxs)(u.c, {
    children: [j ? (0, r.jsx)("div", {
      className: p.Io,
      children: (0, r.jsx)(c.A, {
        hovered: T,
        selected: b
      })
    }) : null, (0, r.jsx)(d.A, {
      text: A,
      selected: b,
      children: (0, r.jsx)(o.Qk9, {
        selected: true,
        upperBadge: y,
        lowerBadge: _,
        lowerBadgeSize: O,
        children: (0, r.jsx)(o.DUT, (n = function(e) {
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
            null == C || C(), P(true)
          },
          onMouseLeave: () => {
            null == S || S(), P(false)
          },
          onMouseDown: I,
          className: s()(p.oZ, v, {
            [p.wH]: b || T
          }),
          onClick: f,
          "aria-label": "string" == typeof A && null == x ? A : x,
          "aria-selected": b,
          onContextMenu: g,
          focusProps: {
            enabled: false
          }
        }, N), i = i = {
          children: null != m && (0, r.jsx)(m, {
            className: p.sF,
            color: "currentColor"
          })
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(i)).forEach(function(e) {
          Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e))
        }), n))
      })
    }), E]
  })
})