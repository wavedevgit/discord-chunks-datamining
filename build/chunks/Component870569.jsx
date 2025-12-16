/** Chunk was on 51333 **/
/** chunk id: 870569, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk686546 = require("./686546.jsx"),
  Chunk784569 = require("./784569.js");
let d = Chunk473749.forwardRef(function(e, t) {
  let {
    tooltipText: n,
    children: i,
    onContextMenu: l,
    onClick: d,
    onMouseDown: f,
    disabled: m,
    icon: p,
    iconForeground: g,
    innerClassName: y,
    className: b,
    redGlow: v,
    orangeGlow: O,
    tooltipClassName: h,
    onMouseEnter: x,
    onMouseLeave: j,
    "aria-label": P,
    "aria-checked": S,
    role: N,
    tooltipColor: E,
    tooltipForceOpen: C,
    tooltipContentClassName: T,
    tooltipPositionKeyStemOverride: Z,
    tooltipShouldShow: I,
    plated: w
  } = e, k = "function" == typeof p ? (0, r.jsx)(p, {
    width: 20,
    height: 20,
    size: "custom",
    colorClass: null != g ? g : "",
    color: "currentColor"
  }) : p;
  return (0, r.jsx)(s.aML, {
    "data-migration-pending": true,
    tooltipClassName: h,
    text: n,
    "aria-label": P,
    color: E,
    tooltipContentClassName: T,
    forceOpen: C,
    shouldShow: I,
    positionKeyStemOverride: Z,
    children: e => {
      var n, s, {
          onClick: p,
          onMouseEnter: g,
          onMouseLeave: h
        } = e,
        P = function(e, t) {
          if (null == e) return {};
          var n, r, i = function(e, t) {
            if (null == e) return {};
            var n, r, i = {},
              l = Object.keys(e);
            for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i
          }(e, t);
          if (Object.getOwnPropertySymbols) {
            var l = Object.getOwnPropertySymbols(e);
            for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
          }
          return i
        }(e, ["onClick", "onMouseEnter", "onMouseLeave"]);
      return (0, r.jsxs)(o.zx, (n = function(e) {
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
        "data-migration-pending": true
      }, P), s = s = {
        buttonRef: t,
        look: o.zx.Looks.BLANK,
        size: o.zx.Sizes.NONE,
        disabled: m,
        innerClassName: y,
        wrapperClassName: a()(c.button, b),
        className: a()(c.button, b, {
          [c.redGlow]: v,
          [c.orangeGlow]: O,
          [c.disabled]: m,
          [c.enabled]: !m,
          [c.plated]: w,
          [c.plateMuted]: v && w
        }),
        onClick: e => {
          null != p && p(), null != d && d(e)
        },
        onMouseDown: f,
        onMouseEnter: () => {
          null == g || g(), null == x || x()
        },
        onMouseLeave: () => {
          null == h || h(), null == j || j()
        },
        onContextMenu: l,
        role: N,
        "aria-checked": S,
        focusProps: {
          offset: {
            left: false,
            top: false,
            right: 1,
            bottom: 1
          }
        },
        children: [null != i ? (0, r.jsx)(u.ZP, {
          width: 20,
          height: 20,
          mask: u.ZP.Masks.PANEL_BUTTON,
          children: k
        }) : k, i]
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(s)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(s)).forEach(function(e) {
        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(s, e))
      }), n))
    }
  })
})