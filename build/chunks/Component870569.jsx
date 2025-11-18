/** Chunk was on 72472 **/
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
  Chunk197466 = require("./197466.js");
let d = Chunk473749.forwardRef(function(e, t) {
  let {
    tooltipText: n,
    children: i,
    onContextMenu: l,
    onClick: d,
    disabled: p,
    icon: f,
    iconForeground: m,
    innerClassName: b,
    className: y,
    redGlow: O,
    orangeGlow: v,
    tooltipClassName: g,
    onMouseEnter: h,
    onMouseLeave: j,
    "aria-label": x,
    "aria-checked": N,
    role: S,
    tooltipColor: P,
    tooltipForceOpen: C,
    tooltipContentClassName: w,
    tooltipPositionKeyStemOverride: E,
    tooltipShouldShow: T,
    plated: Z
  } = e, M = "function" == typeof f ? (0, r.jsx)(f, {
    width: 20,
    height: 20,
    size: "custom",
    colorClass: null != m ? m : "",
    color: "currentColor"
  }) : f;
  return (0, r.jsx)(s.aML, {
    "data-migration-pending": true,
    tooltipClassName: g,
    text: n,
    "aria-label": x,
    color: P,
    tooltipContentClassName: w,
    forceOpen: C,
    shouldShow: T,
    positionKeyStemOverride: E,
    children: e => {
      var n, s, {
          onClick: f,
          onMouseEnter: m,
          onMouseLeave: g
        } = e,
        x = function(e, t) {
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
      }, x), s = s = {
        buttonRef: t,
        look: o.zx.Looks.BLANK,
        size: o.zx.Sizes.NONE,
        disabled: p,
        innerClassName: b,
        wrapperClassName: a()(u.button, y),
        className: a()(u.button, y, {
          [u.redGlow]: O,
          [u.orangeGlow]: v,
          [u.disabled]: p,
          [u.enabled]: !p,
          [u.plated]: Z,
          [u.plateMuted]: O && Z
        }),
        onClick: e => {
          null != f && f(), null != d && d(e)
        },
        onMouseEnter: () => {
          null == m || m(), null == h || h()
        },
        onMouseLeave: () => {
          null == g || g(), null == j || j()
        },
        onContextMenu: l,
        role: S,
        "aria-checked": N,
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
          children: M
        }) : M, i]
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