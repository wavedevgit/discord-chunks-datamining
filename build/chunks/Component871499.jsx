/** Chunk was on web.js **/
/** chunk id: 871499, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => I,
  d: () => A
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  Chunk119421 = require("./119421.js");

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

function I(e) {
  let {
    label: t,
    onClick: n,
    onKeyDown: i,
    onMouseEnter: a,
    onMouseLeave: u,
    onContextMenu: d,
    className: f,
    wrapperClassName: p,
    iconClassName: h,
    iconColor: g = "currentColor",
    iconComponent: b,
    themeable: v = false,
    disabled: I = false,
    isActive: S = false,
    tooltipPosition: T = "top",
    shouldShowTooltip: A = true,
    forceTooltipOpen: C = false,
    buttonRef: N,
    grow: R,
    "aria-label": P,
    look: w,
    buttonText: D,
    size: L,
    color: x
  } = e;
  return (0, r.jsx)(_.Z, {
    children: (0, r.jsx)(c.aML, {
      "data-migration-pending": true,
      position: T,
      text: t,
      "aria-label": P,
      shouldShow: A,
      forceOpen: C,
      children: e => {
        var {
          onClick: t,
          onContextMenu: c,
          onMouseEnter: _,
          onMouseLeave: T
        } = e, A = O(e, ["onClick", "onContextMenu", "onMouseEnter", "onMouseLeave"]);
        return (0, r.jsxs)(l.zx, y(E({
          look: null != w ? w : l.zx.Looks.BLANK,
          size: null != L ? L : l.zx.Sizes.NONE,
          color: x,
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
            null == _ || _(), null == a || a(e)
          },
          onMouseLeave: e => {
            null == T || T(), null == u || u(e)
          },
          onContextMenu: e => {
            null == c || c(), null == d || d(e)
          },
          onFocus: e => {
            null == _ || _(), null == a || a(e)
          },
          onBlur: e => {
            null == T || T(), null == u || u(e)
          },
          disabled: I,
          innerClassName: o()(m.lineHeightReset, {
            [m.buttonInnerWithText]: null != D
          }),
          className: o()({
            [m.active]: S
          }, f),
          wrapperClassName: p,
          buttonRef: N,
          grow: R,
          "aria-label": P
        }, A), {
          children: [(0, r.jsx)(b, {
            size: s.Z.md,
            className: o()(h, {
              [m.controlIcon]: null == D,
              [m.themeable]: v,
              [m.active]: S
            }),
            color: g
          }), D]
        }))
      }
    })
  })
}
let S = {
    disconnect: Chunk119421.disconnect,
    join: Chunk119421.join,
    red: Chunk119421.red,
    white: Chunk119421.white,
    green: Chunk119421.green,
    yellow: Chunk119421.yellow,
    primaryDark: Chunk119421.primaryDark,
    primaryLight: Chunk119421.primaryDark,
    activeLight: Chunk119421.activeLight,
    premiumGradient: Chunk119421.premiumGradient
  },
  T = {
    disconnect: Chunk119421.disconnect,
    join: Chunk119421.join,
    red: Chunk119421.redGlow,
    white: Chunk119421.white,
    green: Chunk119421.greenGlow,
    yellow: Chunk119421.yellow,
    primaryDark: Chunk119421.primaryDark,
    primaryLight: Chunk119421.primaryDark,
    activeLight: Chunk119421.activeLight,
    premiumGradient: Chunk119421.premiumGradient
  };

function A(e) {
  var t, {
      ref: n,
      color: a,
      caretColor: s,
      isActive: l = false,
      className: g,
      iconClassName: b,
      onPopoutClick: v,
      popoutOpen: A = false,
      popoutDisabled: C = false,
      isTrayButton: N,
      applyStyles: R = false
    } = e,
    P = O(e, ["ref", "color", "caretColor", "isActive", "className", "iconClassName", "onPopoutClick", "popoutOpen", "popoutDisabled", "isTrayButton", "applyStyles"]);
  let w = (0, p.Z)(a, l),
    D = null != s ? s : w,
    L = (0, u.Z)("(max-width: 456px)"),
    x = i.useRef(null),
    M = i.useContext(f.h9);
  i.useEffect(() => {
    null != x.current && (M ? x.current.pause() : x.current.play())
  }, [M]);
  let k = null != (t = P.onContextMenu) ? t : v,
    j = null == v && !N,
    U = null != v && !N,
    G = N && null != v,
    B = (0, r.jsx)(I, y(E({}, P), {
      grow: false,
      onContextMenu: k,
      iconClassName: o()(b, m.centerIcon, j && m.fullRegionIcon),
      className: o()(L || R ? g : null, l && m.active, m.centerButton, T[w], j && m.fullRegionButton, G && m.attachedButton)
    }));
  return L ? B : (0, r.jsxs)("div", {
    ref: n,
    className: o()(m.attachedCaretButtonContainer, A && m.popoutOpen, g, U && [m.fullRegionDropdownButton, S[w]]),
    children: [B, null != v ? (0, r.jsx)(_.Z, {
      children: (0, r.jsx)(c.P3F, {
        "aria-label": h.intl.string(h.t.PdRCRg),
        onClick: C ? true : v,
        className: o()(m.contextMenuNub, N && m.attachedCaret, T[D], A && [m.popoutOpen, m.active], C && m.disabled),
        children: (0, r.jsx)(d.Z, {
          className: o()(m.contextMenuCaret, A && m.open, C && m.disabled)
        })
      })
    }) : null]
  })
}