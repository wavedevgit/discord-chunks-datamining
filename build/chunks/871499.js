/** Chunk was on web.js **/
"use strict";
n.d(t, {
  Z: () => N,
  d: () => P
}), n(47120);
var r = n(200651),
  i = n(192379),
  o = n(120356),
  a = n.n(o),
  s = n(481060),
  l = n(131388),
  c = n(686546),
  u = n(70097),
  d = n(221241),
  f = n(82965),
  _ = n(259580),
  p = n(937995),
  h = n(618158),
  m = n(362267),
  g = n(388032),
  E = n(35245);

function v(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function b(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      v(e, t, n[t])
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

function I(e, t) {
  if (null == e) return {};
  var n, r, i = S(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function S(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let T = "https://cdn.discordapp.com/assets/content/3988d11030317ce331a0b327cac18a9c02a693041f9a7695bb13b3d4cb486e11.webm";

function N(e) {
  let {
    label: t,
    onClick: n,
    onKeyDown: i,
    onMouseEnter: o,
    onMouseLeave: l,
    onContextMenu: c,
    className: u,
    wrapperClassName: d,
    iconClassName: f,
    iconColor: _ = "currentColor",
    iconComponent: p,
    themeable: m = !1,
    disabled: g = !1,
    isActive: v = !1,
    tooltipPosition: y = "top",
    shouldShowTooltip: S = !0,
    forceTooltipOpen: T = !1,
    buttonRef: N,
    grow: A,
    "aria-label": C,
    iconSize: R = "md",
    look: P,
    buttonText: w,
    size: D
  } = e;
  return (0, r.jsx)(h.Z, {
    children: (0, r.jsx)(s.ua7, {
      position: y,
      text: t,
      "aria-label": C,
      shouldShow: S,
      forceOpen: T,
      children: e => {
        var {
          onClick: t,
          onContextMenu: h,
          onMouseEnter: y,
          onMouseLeave: S
        } = e, T = I(e, ["onClick", "onContextMenu", "onMouseEnter", "onMouseLeave"]);
        return (0, r.jsxs)(s.zxk, O(b({
          look: null != P ? P : s.zxk.Looks.BLANK,
          size: null != D ? D : s.zxk.Sizes.NONE,
          onKeyDown: e => {
            null == i || i(e)
          },
          onClick: e => {
            null == t || t(), null == n || n(e)
          },
          onMouseEnter: e => {
            null == y || y(), null == o || o(e)
          },
          onMouseLeave: e => {
            null == S || S(), null == l || l(e)
          },
          onContextMenu: e => {
            null == h || h(), null == c || c(e)
          },
          onFocus: e => {
            null == y || y(), null == o || o(e)
          },
          onBlur: e => {
            null == S || S(), null == l || l(e)
          },
          disabled: g,
          innerClassName: a()(E.lineHeightReset, {
            [E.buttonInnerWithText]: null != w
          }),
          className: a()({
            [E.active]: v
          }, u),
          wrapperClassName: d,
          buttonRef: N,
          grow: A,
          "aria-label": C
        }, T), {
          children: [(0, r.jsx)(p, {
            size: R,
            className: a()({
              [E.controlIconColor]: null == w,
              [E.themeable]: m,
              [E.active]: v
            }, f),
            color: _
          }), w]
        }))
      }
    })
  })
}
let A = {
    disconnect: E.disconnect,
    join: E.join,
    red: E.red,
    white: E.white,
    green: E.green,
    yellow: E.yellow,
    primaryDark: E.primaryDark,
    primaryLight: E.primaryLight,
    activeLight: E.activeLight,
    premiumGradient: E.premiumGradient
  },
  C = {
    disconnect: E.disconnect,
    join: E.join,
    red: E.experimentRed,
    white: E.white,
    green: E.green,
    yellow: E.yellow,
    primaryDark: E.experimentDark,
    primaryLight: E.experimentDark,
    activeLight: E.experimentActiveLight,
    premiumGradient: E.premiumGradient
  },
  R = {
    disconnect: E.disconnect,
    join: E.join,
    red: E.redGlow,
    white: E.white,
    green: E.greenGlow,
    yellow: E.yellow,
    primaryDark: E.experimentDark,
    primaryLight: E.experimentDark,
    activeLight: E.experimentActiveLight,
    premiumGradient: E.premiumGradient
  };

function P(e) {
  var {
    color: t,
    caretColor: n,
    isActive: o = !1,
    className: v,
    iconClassName: y,
    onPopoutClick: S,
    popoutOpen: P = !1,
    popoutDisabled: w = !1,
    premiumGlow: D = !1,
    fullRegionButton: L = !1,
    forceGroupedButtons: x = !1
  } = e, M = I(e, ["color", "caretColor", "isActive", "className", "iconClassName", "onPopoutClick", "popoutOpen", "popoutDisabled", "premiumGlow", "fullRegionButton", "forceGroupedButtons"]);
  let k = (0, m.Z)(t, o),
    j = null != n ? n : k,
    U = (0, l.Z)("(max-width: 456px)"),
    G = i.useRef(null),
    B = i.useContext(p.h9),
    {
      coloredIconsEnabled: V
    } = (0, d.Z)({
      location: "CenterControlButton"
    });
  i.useEffect(() => {
    null != G.current && (B ? G.current.pause() : G.current.play())
  }, [B]);
  let F = (0, f.Z)({
      location: "CenterControlButton"
    }),
    Z = x || F,
    H = Z ? [E.experimentButton, V ? R[k] : C[k], L && null == S && E.fullRegionButton, V && !L && null != S && E.attachedButton] : [A[k]],
    W = (0, r.jsx)(N, O(b({}, M), {
      grow: !1,
      onContextMenu: S,
      iconClassName: a()(y, E.centerIcon, Z && E.experimentControlIcon, Z && L && null == S && E.fullRegionIcon),
      className: a()(U ? v : null, E.staticButton, E.centerButton, o && E.active, ...H)
    }));
  return U ? W : Z ? (0, r.jsxs)("div", {
    className: a()(V ? E.attachedCaretButtonContainer : E.caretButtonContainer, V && P && E.popoutOpen, v, L && null != S && [E.fullRegionDropdownButton, C[k]]),
    children: [W, null != S ? (0, r.jsx)(h.Z, {
      children: (0, r.jsx)(s.P3F, {
        "aria-label": g.NW.string(g.t.PdRCRk),
        onClick: w ? void 0 : S,
        onContextMenu: w ? void 0 : S,
        className: a()(E.contextMenuNubExperiment, V && !L && E.attachedCaret, V ? R[j] : C[j], {
          [E.popoutOpen]: P && V,
          [E.active]: P,
          [E.disabled]: w
        }),
        children: (0, r.jsx)(_.Z, {
          className: a()(E.contextMenuCaretExperiment, {
            [E.open]: P
          }, w && E.disabled)
        })
      })
    }) : null]
  }) : (0, r.jsxs)("div", {
    className: a()(v, E.contextMenuContainer),
    children: [(0, r.jsx)(c.ZP, {
      className: E.buttonMask,
      mask: null == S ? null : c.QS.CHANNEL_CALL_CONTROL_BUTTON,
      width: 56,
      height: 56,
      children: W
    }), D && (0, r.jsx)("div", {
      className: E.glow,
      children: (0, r.jsx)(u.Z, {
        ref: G,
        loop: !0,
        autoPlay: !0,
        className: E.glowVideo,
        children: (0, r.jsx)("source", {
          src: T,
          type: "video/webm"
        })
      })
    }), null != S ? (0, r.jsx)(h.Z, {
      children: (0, r.jsx)(s.P3F, {
        "aria-label": g.NW.string(g.t.PdRCRk),
        onClick: S,
        onContextMenu: S,
        className: a()(E.contextMenuNub, A[k], {
          [E.active]: P
        }),
        children: (0, r.jsx)(_.Z, {
          className: a()(E.contextMenuCaret, {
            [E.open]: P
          })
        })
      })
    }) : null]
  })
}