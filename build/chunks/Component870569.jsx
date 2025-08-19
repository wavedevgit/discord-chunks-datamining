/** Chunk was on 66181 **/
/** chunk id: 870569, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk686546 = require("./686546.jsx"),
  Chunk861526 = require("./861526.js");
let u = Chunk647438.forwardRef(function(e, t) {
  let {
    tooltipText: n,
    children: r,
    onContextMenu: s,
    onClick: u,
    disabled: m,
    icon: p,
    iconForeground: g,
    innerClassName: h,
    className: f,
    redGlow: b,
    orangeGlow: x,
    tooltipClassName: _,
    onMouseEnter: j,
    onMouseLeave: E,
    "aria-label": C,
    "aria-checked": O,
    role: v,
    tooltipColor: S,
    tooltipForceOpen: T,
    tooltipContentClassName: N,
    plated: I
  } = e, y = "function" == typeof p ? (0, i.jsx)(p, {
    width: 20,
    height: 20,
    size: "custom",
    colorClass: null != g ? g : "",
    color: "currentColor"
  }) : p;
  return (0, i.jsx)(o.ua7, {
    tooltipClassName: _,
    text: n,
    "aria-label": C,
    color: S,
    tooltipContentClassName: N,
    forceOpen: T,
    children: e => {
      var n, o, {
          onClick: p,
          onMouseEnter: g,
          onMouseLeave: _
        } = e,
        C = function(e, t) {
          if (null == e) return {};
          var n, i, r = function(e, t) {
            if (null == e) return {};
            var n, i, r = {},
              s = Object.keys(e);
            for (i = 0; i < s.length; i++) n = s[i], t.indexOf(n) >= 0 || (r[n] = e[n]);
            return r
          }(e, t);
          if (Object.getOwnPropertySymbols) {
            var s = Object.getOwnPropertySymbols(e);
            for (i = 0; i < s.length; i++) n = s[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
          }
          return r
        }(e, ["onClick", "onMouseEnter", "onMouseLeave"]);
      return (0, i.jsxs)(l.zx, (n = function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), i.forEach(function(t) {
            var i;
            i = n[t], t in e ? Object.defineProperty(e, t, {
              value: i,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = i
          })
        }
        return e
      }({}, C), o = o = {
        buttonRef: t,
        look: l.zx.Looks.BLANK,
        size: l.zx.Sizes.NONE,
        disabled: m,
        innerClassName: h,
        wrapperClassName: a()(d.button, f),
        className: a()(d.button, f, {
          [d.redGlow]: b,
          [d.orangeGlow]: x,
          [d.disabled]: m,
          [d.enabled]: !m,
          [d.plated]: I,
          [d.plateMuted]: b && I
        }),
        onClick: e => {
          null != p && p(), null != u && u(e)
        },
        onMouseEnter: () => {
          null == g || g(), null == j || j()
        },
        onMouseLeave: () => {
          null == _ || _(), null == E || E()
        },
        onContextMenu: s,
        role: v,
        "aria-checked": O,
        focusProps: {
          offset: {
            left: false,
            top: false,
            right: 1,
            bottom: 1
          }
        },
        children: [null != r ? (0, i.jsx)(c.ZP, {
          width: 20,
          height: 20,
          mask: c.ZP.Masks.PANEL_BUTTON,
          children: y
        }) : y, r]
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(o)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          n.push.apply(n, i)
        }
        return n
      })(Object(o)).forEach(function(e) {
        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(o, e))
      }), n))
    }
  })
})