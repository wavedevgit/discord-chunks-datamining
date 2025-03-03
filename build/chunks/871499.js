/** Chunk was on web.js **/
"use strict";
n.d(t, {
  Z: () => A,
  d: () => D
}), n(47120);
var r = n(200651),
  i = n(192379),
  o = n(120356),
  a = n.n(o),
  s = n(212605),
  l = n(481060),
  c = n(131388),
  u = n(686546),
  d = n(70097),
  f = n(221241),
  _ = n(82965),
  p = n(259580),
  h = n(937995),
  g = n(618158),
  m = n(362267),
  E = n(388032),
  v = n(35245);

function b(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function y(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      b(e, t, n[t])
    })
  }
  return e
}

function O(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function S(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : O(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function I(e, t) {
  if (null == e) return {};
  var n, r, i = T(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function T(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let N = "https://cdn.discordapp.com/assets/content/3988d11030317ce331a0b327cac18a9c02a693041f9a7695bb13b3d4cb486e11.webm";

function A(e) {
  let {
    label: t,
    onClick: n,
    onKeyDown: i,
    onMouseEnter: o,
    onMouseLeave: c,
    onContextMenu: u,
    className: d,
    wrapperClassName: f,
    iconClassName: _,
    iconColor: p = "currentColor",
    iconComponent: h,
    themeable: m = !1,
    disabled: E = !1,
    isActive: b = !1,
    tooltipPosition: O = "top",
    shouldShowTooltip: T = !0,
    forceTooltipOpen: N = !1,
    buttonRef: A,
    grow: C,
    "aria-label": R
  } = e;
  return (0, r.jsx)(g.Z, {
    children: (0, r.jsx)(l.ua7, {
      position: O,
      text: t,
      "aria-label": R,
      shouldShow: T,
      forceOpen: N,
      children: e => {
        var {
          onClick: t,
          onContextMenu: g,
          onMouseEnter: O,
          onMouseLeave: T
        } = e, N = I(e, ["onClick", "onContextMenu", "onMouseEnter", "onMouseLeave"]);
        return (0, r.jsx)(l.zxk, S(y({
          look: l.zxk.Looks.BLANK,
          size: l.zxk.Sizes.NONE,
          onKeyDown: e => {
            null == i || i(e)
          },
          onClick: e => {
            null == t || t(), null == n || n(e)
          },
          onMouseEnter: e => {
            null == O || O(), null == o || o(e)
          },
          onMouseLeave: e => {
            null == T || T(), null == c || c(e)
          },
          onContextMenu: e => {
            null == g || g(), null == u || u(e)
          },
          onFocus: e => {
            null == O || O(), null == o || o(e)
          },
          onBlur: e => {
            null == T || T(), null == c || c(e)
          },
          disabled: E,
          innerClassName: v.lineHeightReset,
          className: a()({
            [v.active]: b
          }, d),
          wrapperClassName: f,
          buttonRef: A,
          grow: C,
          "aria-label": R
        }, N), {
          children: (0, r.jsx)(h, {
            size: s.Z.md,
            className: a()(v.controlIcon, _, {
              [v.themeable]: m,
              [v.active]: b
            }),
            color: p
          })
        }))
      }
    })
  })
}
let C = {
    disconnect: v.disconnect,
    join: v.join,
    red: v.red,
    white: v.white,
    green: v.green,
    yellow: v.yellow,
    primaryDark: v.primaryDark,
    primaryLight: v.primaryLight,
    activeLight: v.activeLight,
    premiumGradient: v.premiumGradient
  },
  R = {
    disconnect: v.disconnect,
    join: v.join,
    red: v.experimentRed,
    white: v.white,
    green: v.green,
    yellow: v.yellow,
    primaryDark: v.experimentDark,
    primaryLight: v.experimentDark,
    activeLight: v.experimentActiveLight,
    premiumGradient: v.premiumGradient
  },
  P = {
    disconnect: v.disconnect,
    join: v.join,
    red: v.redGlow,
    white: v.white,
    green: v.greenGlow,
    yellow: v.yellow,
    primaryDark: v.experimentDark,
    primaryLight: v.experimentDark,
    activeLight: v.experimentActiveLight,
    premiumGradient: v.premiumGradient
  };

function D(e) {
  var {
    color: t,
    caretColor: n,
    isActive: o = !1,
    className: s,
    iconClassName: b,
    onPopoutClick: O,
    popoutOpen: T = !1,
    popoutDisabled: D = !1,
    premiumGlow: w = !1,
    fullRegionButton: L = !1,
    forceGroupedButtons: x = !1
  } = e, M = I(e, ["color", "caretColor", "isActive", "className", "iconClassName", "onPopoutClick", "popoutOpen", "popoutDisabled", "premiumGlow", "fullRegionButton", "forceGroupedButtons"]);
  let k = (0, m.Z)(t, o),
    j = null != n ? n : k,
    U = (0, c.Z)("(max-width: 456px)"),
    G = i.useRef(null),
    B = i.useContext(h.h9),
    {
      coloredIconsEnabled: V
    } = (0, f.Z)({
      location: "CenterControlButton"
    });
  i.useEffect(() => {
    null != G.current && (B ? G.current.pause() : G.current.play())
  }, [B]);
  let F = (0, _.Z)({
      location: "CenterControlButton"
    }),
    Z = x || F,
    H = Z ? [v.experimentButton, V ? P[k] : R[k], L && null == O && v.fullRegionButton, V && !L && null != O && v.attachedButton] : [C[k]],
    W = (0, r.jsx)(A, S(y({}, M), {
      grow: !1,
      onContextMenu: O,
      iconClassName: a()(b, v.centerIcon, Z && v.experimentControlIcon, Z && L && null == O && v.fullRegionIcon),
      className: a()(U ? s : null, v.staticButton, v.centerButton, o && v.active, ...H)
    }));
  return U ? W : Z ? (0, r.jsxs)("div", {
    className: a()(V ? v.attachedCaretButtonContainer : v.caretButtonContainer, V && T && v.popoutOpen, s, L && null != O && [v.fullRegionDropdownButton, R[k]]),
    children: [W, null != O ? (0, r.jsx)(g.Z, {
      children: (0, r.jsx)(l.P3F, {
        "aria-label": E.NW.string(E.t.PdRCRk),
        onClick: D ? void 0 : O,
        onContextMenu: D ? void 0 : O,
        className: a()(v.contextMenuNubExperiment, V && !L && v.attachedCaret, V ? P[j] : R[j], {
          [v.popoutOpen]: T && V,
          [v.active]: T,
          [v.disabled]: D
        }),
        children: (0, r.jsx)(p.Z, {
          className: a()(v.contextMenuCaretExperiment, {
            [v.open]: T
          }, D && v.disabled)
        })
      })
    }) : null]
  }) : (0, r.jsxs)("div", {
    className: a()(s, v.contextMenuContainer),
    children: [(0, r.jsx)(u.ZP, {
      className: v.buttonMask,
      mask: null == O ? null : u.QS.CHANNEL_CALL_CONTROL_BUTTON,
      width: 56,
      height: 56,
      children: W
    }), w && (0, r.jsx)("div", {
      className: v.glow,
      children: (0, r.jsx)(d.Z, {
        ref: G,
        loop: !0,
        autoPlay: !0,
        className: v.glowVideo,
        children: (0, r.jsx)("source", {
          src: N,
          type: "video/webm"
        })
      })
    }), null != O ? (0, r.jsx)(g.Z, {
      children: (0, r.jsx)(l.P3F, {
        "aria-label": E.NW.string(E.t.PdRCRk),
        onClick: O,
        onContextMenu: O,
        className: a()(v.contextMenuNub, C[k], {
          [v.active]: T
        }),
        children: (0, r.jsx)(p.Z, {
          className: a()(v.contextMenuCaret, {
            [v.open]: T
          })
        })
      })
    }) : null]
  })
}