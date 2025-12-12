/** Chunk was on web.js **/
/** chunk id: 871499, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => S,
  d: () => C
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk212605 = require("./212605.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk131388 = require("./131388.js"),
  Chunk259580 = require("./259580.jsx"),
  Chunk937995 = require("./937995.jsx"),
  Chunk618158 = require("./618158.jsx"),
  Chunk362267 = require("./362267.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk240766 = require("./240766.js");

function g(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function E(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      g(e, t, n[t])
    })
  }
  return e
}

function b(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function y(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : b(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function O(e, t) {
  if (null == e) return {};
  var n, r, i = v(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function v(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function S(e) {
  let {
    label: t,
    onClick: n,
    onKeyDown: i,
    onMouseEnter: a,
    onMouseLeave: u,
    onContextMenu: d,
    className: f,
    wrapperClassName: _,
    iconClassName: m,
    iconColor: g = "currentColor",
    iconComponent: b,
    themeable: v = false,
    disabled: S = false,
    isActive: I = false,
    tooltipPosition: T = "top",
    shouldShowTooltip: C = true,
    forceTooltipOpen: A = false,
    buttonRef: N,
    grow: P,
    "aria-label": R,
    look: w,
    buttonText: D,
    size: x,
    color: L
  } = e;
  return (0, r.jsx)(p.Z, {
    children: (0, r.jsx)(c.aML, {
      "data-migration-pending": true,
      position: T,
      text: t,
      "aria-label": R,
      shouldShow: C,
      forceOpen: A,
      children: e => {
        var {
          onClick: t,
          onContextMenu: c,
          onMouseEnter: p,
          onMouseLeave: T
        } = e, C = O(e, ["onClick", "onContextMenu", "onMouseEnter", "onMouseLeave"]);
        return (0, r.jsxs)(l.zx, y(E({
          "data-migration-pending": true,
          look: null != w ? w : l.zx.Looks.BLANK,
          size: null != x ? x : l.zx.Sizes.NONE,
          color: L,
          onKeyDown: e => {
            null == i || i(e)
          },
          onMouseDown: e => {
            e.preventDefault()
          },
          onClick: e => {
            null == t || t(), null == n || n(e)
          },
          onMouseEnter: e => {
            null == p || p(), null == a || a(e)
          },
          onMouseLeave: e => {
            null == T || T(), null == u || u(e)
          },
          onContextMenu: e => {
            null == c || c(), null == d || d(e)
          },
          onFocus: e => {
            null == p || p(), null == a || a(e)
          },
          onBlur: e => {
            null == T || T(), null == u || u(e)
          },
          disabled: S,
          innerClassName: o()(h.lineHeightReset, {
            [h.buttonInnerWithText]: null != D
          }),
          className: o()({
            [h.active]: I
          }, f),
          wrapperClassName: _,
          buttonRef: N,
          grow: P,
          "aria-label": R
        }, C), {
          children: [(0, r.jsx)(b, {
            size: s.Z.md,
            className: o()(m, {
              [h.controlIcon]: null == D,
              [h.themeable]: v,
              [h.active]: I
            }),
            color: g
          }), D]
        }))
      }
    })
  })
}
let I = {
    disconnect: Chunk240766.disconnect,
    join: Chunk240766.join,
    red: Chunk240766.red,
    white: Chunk240766.white,
    green: Chunk240766.green,
    yellow: Chunk240766.yellow,
    primaryDark: Chunk240766.primaryDark,
    primaryLight: Chunk240766.primaryDark,
    activeLight: Chunk240766.activeLight,
    premiumGradient: Chunk240766.premiumGradient
  },
  T = {
    disconnect: Chunk240766.disconnect,
    join: Chunk240766.join,
    red: Chunk240766.redGlow,
    white: Chunk240766.white,
    green: Chunk240766.greenGlow,
    yellow: Chunk240766.yellow,
    primaryDark: Chunk240766.primaryDark,
    primaryLight: Chunk240766.primaryDark,
    activeLight: Chunk240766.activeLight,
    premiumGradient: Chunk240766.premiumGradient
  };

function C(e) {
  var t, {
      ref: n,
      color: a,
      caretColor: s,
      isActive: l = false,
      className: g,
      iconClassName: b,
      onPopoutClick: v,
      popoutOpen: C = false,
      popoutDisabled: A = false,
      isTrayButton: N,
      applyStyles: P = false
    } = e,
    R = O(e, ["ref", "color", "caretColor", "isActive", "className", "iconClassName", "onPopoutClick", "popoutOpen", "popoutDisabled", "isTrayButton", "applyStyles"]);
  let w = (0, _.Z)(a, l),
    D = null != s ? s : w,
    x = (0, u.Z)("(max-width: 456px)"),
    L = i.useRef(null),
    j = i.useContext(f.h9);
  i.useEffect(() => {
    null != L.current && (j ? L.current.pause() : L.current.play())
  }, [j]);
  let M = null != (t = R.onContextMenu) ? t : v,
    k = null == v && !N,
    U = null != v && !N,
    G = N && null != v,
    Z = (0, r.jsx)(S, y(E({}, R), {
      grow: false,
      onContextMenu: M,
      iconClassName: o()(b, h.centerIcon, k && h.fullRegionIcon),
      className: o()(x || P ? g : null, l && h.active, h.centerButton, T[w], k && h.fullRegionButton, G && h.attachedButton)
    }));
  return x ? Z : (0, r.jsxs)("div", {
    ref: n,
    className: o()(h.attachedCaretButtonContainer, C && h.popoutOpen, g, U && [h.fullRegionDropdownButton, I[w]]),
    children: [Z, null != v ? (0, r.jsx)(p.Z, {
      children: (0, r.jsx)(c.P3F, {
        "aria-label": m.intl.string(m.t.PdRCRg),
        onClick: A ? true : v,
        className: o()(h.contextMenuNub, N && h.attachedCaret, T[D], C && [h.popoutOpen, h.active], A && h.disabled),
        children: (0, r.jsx)(d.Z, {
          className: o()(h.contextMenuCaret, C && h.open, A && h.disabled)
        })
      })
    }) : null]
  })
}