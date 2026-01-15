/** Chunk was on web.js **/
/** chunk id: 871499, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => I,
  d: () => A
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk212605 = require("./212605.js"),
  Chunk681715 = require("./681715.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk131388 = require("./131388.js"),
  Chunk259580 = require("./259580.jsx"),
  Chunk937995 = require("./937995.jsx"),
  Chunk618158 = require("./618158.jsx"),
  Chunk362267 = require("./362267.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk240766 = require("./240766.js");

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function b(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      E(e, t, n[t])
    })
  }
  return e
}

function y(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function O(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : y(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function v(e, t) {
  if (null == e) return {};
  var n, r, i = S(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function S(e, t) {
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
    iconColor: m = "currentColor",
    iconComponent: E,
    themeable: b = false,
    disabled: y = false,
    isActive: O = false,
    tooltipPosition: v = "top",
    shouldShowTooltip: S = true,
    forceTooltipOpen: I = false,
    buttonRef: T,
    grow: C,
    "aria-label": A,
    look: N,
    buttonText: P,
    size: w,
    color: R
  } = e;
  return (0, r.jsx)(_.Z, {
    children: (0, r.jsx)(l.u, {
      position: v,
      __unsupportedReactNodeAsText: t,
      ariaHidden: true,
      shouldShow: S,
      forceOpen: I,
      children: (0, r.jsxs)(c.zx, {
        "data-migration-pending": true,
        look: null != N ? N : c.zx.Looks.BLANK,
        size: null != w ? w : c.zx.Sizes.NONE,
        color: R,
        onKeyDown: e => {
          null == i || i(e)
        },
        onMouseDown: e => {
          e.preventDefault()
        },
        onClick: n,
        onMouseEnter: a,
        onMouseLeave: u,
        onContextMenu: null != d ? d : true,
        onFocus: e => {
          null == a || a(e)
        },
        onBlur: u,
        disabled: y,
        innerClassName: o()(g.lineHeightReset, {
          [g.buttonInnerWithText]: null != P
        }),
        className: o()({
          [g.active]: O
        }, f),
        wrapperClassName: p,
        buttonRef: T,
        grow: C,
        "aria-label": A,
        children: [(0, r.jsx)(E, {
          size: s.Z.md,
          className: o()(h, {
            [g.controlIcon]: null == P,
            [g.themeable]: b,
            [g.active]: O
          }),
          color: m
        }), P]
      })
    })
  })
}
let T = {
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
  C = {
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

function A(e) {
  var t, {
      ref: n,
      color: a,
      caretColor: s,
      isActive: l = false,
      className: c,
      iconClassName: E,
      onPopoutClick: y,
      popoutOpen: S = false,
      popoutDisabled: A = false,
      isTrayButton: N,
      applyStyles: P = false
    } = e,
    w = v(e, ["ref", "color", "caretColor", "isActive", "className", "iconClassName", "onPopoutClick", "popoutOpen", "popoutDisabled", "isTrayButton", "applyStyles"]);
  let R = (0, h.Z)(a, l),
    D = null != s ? s : R,
    x = (0, d.Z)("(max-width: 456px)"),
    L = i.useRef(null),
    j = i.useContext(p.h9);
  i.useEffect(() => {
    null != L.current && (j ? L.current.pause() : L.current.play())
  }, [j]);
  let M = null != (t = w.onContextMenu) ? t : y,
    k = null == y && !N,
    U = null != y && !N,
    G = N && null != y && !x,
    Z = (0, r.jsx)(I, O(b({}, w), {
      grow: false,
      onContextMenu: M,
      iconClassName: o()(E, g.centerIcon, k && g.fullRegionIcon),
      className: o()(x || P ? c : null, l && g.active, g.centerButton, C[R], k && g.fullRegionButton, G && g.attachedButton)
    }));
  return x ? Z : (0, r.jsxs)("div", {
    ref: n,
    className: o()(g.attachedCaretButtonContainer, S && g.popoutOpen, c, U && [g.fullRegionDropdownButton, T[R]]),
    children: [Z, null != y ? (0, r.jsx)(_.Z, {
      children: (0, r.jsx)(u.P3F, {
        "aria-label": m.intl.string(m.t.PdRCRg),
        onClick: A ? true : y,
        className: o()(g.contextMenuNub, N && g.attachedCaret, C[D], S && [g.popoutOpen, g.active], A && g.disabled),
        children: (0, r.jsx)(f.Z, {
          className: o()(g.contextMenuCaret, S && g.open, A && g.disabled)
        })
      })
    }) : null]
  })
}