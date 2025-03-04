/** Chunk was on web.js **/
"use strict";
n.d(t, {
  DR: () => T,
  S4: () => S,
  bD: () => I,
  oK: () => O
}), n(627341);
var r = n(200651);
n(192379);
var i = n(120356),
  o = n.n(i),
  a = n(278074),
  s = n(442837),
  l = n(692547),
  c = n(780384),
  u = n(481060),
  d = n(540059),
  f = n(210887),
  _ = n(47760),
  p = n(798728),
  h = n(981631),
  g = n(388032),
  m = n(789303);

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function v(e) {
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

function O() {
  return (0, r.jsx)("div", {
    className: m.selectionCircle,
    children: (0, r.jsx)(u.owK, {
      size: "md",
      color: "currentColor",
      className: m.checkmarkCircle,
      colorClass: m.checkmark,
      secondaryColor: l.Z.unsafe_rawColors.WHITE_500.css
    })
  })
}

function S(e) {
  let {
    name: t,
    className: n,
    style: i,
    onSelect: a,
    isSelected: s = !1,
    tabIndex: l,
    children: c,
    showBadge: d,
    showLockedBadge: f
  } = e, _ = (0, u.xUy)({
    label: t,
    isSelected: s
  });
  return (0, r.jsx)(u.ua7, {
    text: t,
    children: e => (0, r.jsxs)("div", {
      className: m.themeSelectionContainer,
      children: [(0, r.jsx)(u.P3F, y(v({}, e, _), {
        tabIndex: null != l ? l : _.tabIndex,
        className: o()(m.themeSelection, {
          [m.selected]: s
        }, n),
        style: i,
        onClick: s ? h.dG4 : a,
        children: c
      })), s && (0, r.jsx)(O, {}), !s && d && (0, r.jsx)("div", {
        className: m.redCircle
      }), f && (0, r.jsx)("div", {
        className: m.lockedBadgeContainer,
        children: (0, r.jsx)(u.mBM, {
          className: m.lockedBadge,
          color: "currentColor"
        })
      })]
    })
  })
}

function I(e) {
  let {
    theme: t,
    isSelected: n,
    onSelect: i
  } = e, _ = (0, s.e7)([f.Z], () => f.Z.systemPrefersColorScheme), E = e => (0, c.ap)(e) ? l.Z.unsafe_rawColors.PRIMARY_600.css : l.Z.unsafe_rawColors.WHITE_500.css, v = (0, d.Q3)("DefaultThemeSelection"), b = (0, a.EQ)({
    theme: t,
    systemPrefersColorScheme: _
  }).with({
    theme: "system",
    systemPrefersColorScheme: h.BRd.LIGHT
  }, () => m.lightIcon).with({
    theme: h.BRd.LIGHT
  }, () => m.lightIcon).with({
    theme: h.BRd.DARK
  }, () => m.darkIcon).with({
    theme: h.BRd.DARKER
  }, () => m.darkerIcon).with({
    theme: h.BRd.MIDNIGHT
  }, () => m.midnightIcon).otherwise(() => m.darkIcon), y = (0, a.EQ)(t).with(h.BRd.LIGHT, () => g.NW.string(g.t.K2sFfn)).with(h.BRd.DARK, () => v ? g.NW.string(g.t.GEaO9P) : g.NW.string(g.t.b8Cei4)).with(h.BRd.DARKER, () => g.NW.string(g.t.b8Cei4)).with(h.BRd.MIDNIGHT, () => g.NW.string(g.t.pQwSpa)).with("system", () => g.NW.string(g.t["7rOU6u"])).exhaustive(), O = (0, u.bWb)().enabled;
  return (0, r.jsx)(S, {
    onSelect: i,
    isSelected: n,
    name: y,
    className: o()(m.defaultThemeSelection, b),
    children: "system" === t && (0, r.jsx)("div", {
      className: m.iconWrapper,
      children: O ? (0, r.jsx)(u.DuK, {
        color: E(_)
      }) : (0, r.jsx)(p.Z, {
        fill: E(_)
      })
    })
  })
}

function T(e) {
  let {
    preset: t,
    isSelected: n,
    disabled: i,
    tabIndex: a,
    onSelect: s,
    showBadge: l,
    showLockedBadge: u
  } = e, {
    colors: d,
    angle: f,
    theme: p
  } = t, h = (0, _.VK)({
    colors: d,
    angle: f
  });
  return (0, r.jsx)(S, {
    onSelect: i ? void 0 : s,
    isSelected: n,
    name: t.getName(),
    className: o()([i ? m.disabled : null, (0, c.wj)(p) ? m.darkOverlay : m.lightOverlay]),
    style: {
      background: "var(--bg-overlay), ".concat(h)
    },
    tabIndex: a,
    showBadge: l,
    showLockedBadge: u
  })
}