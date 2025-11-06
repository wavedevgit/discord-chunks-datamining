/** Chunk was on 88295 **/
/** chunk id: 870569, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk686546 = require("./686546.jsx"),
  Chunk861526 = require("./861526.js");
let d = Chunk647438.forwardRef(function(e, t) {
  let {
    tooltipText: n,
    children: l,
    onContextMenu: i,
    onClick: d,
    disabled: p,
    icon: f,
    iconForeground: m,
    innerClassName: b,
    className: O,
    redGlow: y,
    orangeGlow: v,
    tooltipClassName: g,
    onMouseEnter: h,
    onMouseLeave: j,
    "aria-label": N,
    "aria-checked": x,
    role: S,
    tooltipColor: E,
    tooltipForceOpen: P,
    tooltipContentClassName: C,
    tooltipPositionKeyStemOverride: I,
    tooltipShouldShow: T,
    plated: Z
  } = e, w = "function" == typeof f ? (0, r.jsx)(f, {
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
    "aria-label": N,
    color: E,
    tooltipContentClassName: C,
    forceOpen: P,
    shouldShow: T,
    positionKeyStemOverride: I,
    children: e => {
      var n, s, {
          onClick: f,
          onMouseEnter: m,
          onMouseLeave: g
        } = e,
        N = function(e, t) {
          if (null == e) return {};
          var n, r, l = function(e, t) {
            if (null == e) return {};
            var n, r, l = {},
              i = Object.keys(e);
            for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (l[n] = e[n]);
            return l
          }(e, t);
          if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n])
          }
          return l
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
        disabled: p,
        innerClassName: b,
        wrapperClassName: a()(u.button, O),
        className: a()(u.button, O, {
          [u.redGlow]: y,
          [u.orangeGlow]: v,
          [u.disabled]: p,
          [u.enabled]: !p,
          [u.plated]: Z,
          [u.plateMuted]: y && Z
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
        onContextMenu: i,
        role: S,
        "aria-checked": x,
        focusProps: {
          offset: {
            left: false,
            top: false,
            right: 1,
            bottom: 1
          }
        },
        children: [null != l ? (0, r.jsx)(c.ZP, {
          width: 20,
          height: 20,
          mask: c.ZP.Masks.PANEL_BUTTON,
          children: w
        }) : w, l]
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