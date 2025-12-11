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
    onMouseDown: p,
    disabled: f,
    icon: m,
    iconForeground: b,
    innerClassName: O,
    className: v,
    redGlow: y,
    orangeGlow: g,
    tooltipClassName: h,
    onMouseEnter: j,
    onMouseLeave: x,
    "aria-label": N,
    "aria-checked": P,
    role: S,
    tooltipColor: C,
    tooltipForceOpen: E,
    tooltipContentClassName: w,
    tooltipPositionKeyStemOverride: Z,
    tooltipShouldShow: T,
    plated: M
  } = e, I = "function" == typeof m ? (0, r.jsx)(m, {
    width: 20,
    height: 20,
    size: "custom",
    colorClass: null != b ? b : "",
    color: "currentColor"
  }) : m;
  return (0, r.jsx)(s.aML, {
    "data-migration-pending": true,
    tooltipClassName: h,
    text: n,
    "aria-label": N,
    color: C,
    tooltipContentClassName: w,
    forceOpen: E,
    shouldShow: T,
    positionKeyStemOverride: Z,
    children: e => {
      var n, s, {
          onClick: m,
          onMouseEnter: b,
          onMouseLeave: h
        } = e,
        N = function(e, t) {
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
      }, N), s = s = {
        buttonRef: t,
        look: o.zx.Looks.BLANK,
        size: o.zx.Sizes.NONE,
        disabled: f,
        innerClassName: O,
        wrapperClassName: a()(u.button, v),
        className: a()(u.button, v, {
          [u.redGlow]: y,
          [u.orangeGlow]: g,
          [u.disabled]: f,
          [u.enabled]: !f,
          [u.plated]: M,
          [u.plateMuted]: y && M
        }),
        onClick: e => {
          null != m && m(), null != d && d(e)
        },
        onMouseDown: p,
        onMouseEnter: () => {
          null == b || b(), null == j || j()
        },
        onMouseLeave: () => {
          null == h || h(), null == x || x()
        },
        onContextMenu: l,
        role: S,
        "aria-checked": P,
        focusProps: {
          offset: {
            left: false,
            top: false,
            right: 1,
            bottom: 1
          }
        },
        children: [null != i ? (0, r.jsx)(c.ZP, {
          width: 20,
          height: 20,
          mask: c.ZP.Masks.PANEL_BUTTON,
          children: I
        }) : I, i]
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