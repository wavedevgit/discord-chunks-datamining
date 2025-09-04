/** Chunk was on web.js **/
/** chunk id: 583901, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  DR: () => S,
  S4: () => v,
  bD: () => I,
  oK: () => O
}), require("./314940.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk278074 = require("./278074.js"),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk780384 = require("./780384.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk210887 = require("./210887.js"),
  Chunk47760 = require("./47760.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk750852 = require("./750852.js");

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

function O() {
  return (0, Chunk951288.jsx)("div", {
    className: Chunk750852.selectionCircle,
    children: (0, Chunk951288.jsx)(Chunk481060.owK, {
      size: "md",
      color: "currentColor",
      className: Chunk750852.checkmarkCircle,
      colorClass: Chunk750852.checkmark,
      secondaryColor: Chunk692547.Z.unsafe_rawColors.WHITE_500.css
    })
  })
}

function v(e) {
  let {
    name: t,
    className: n,
    style: i,
    onSelect: o,
    isSelected: s = false,
    tabIndex: l,
    children: c,
    showBadge: f,
    showLockedBadge: _,
    showSelectionCircle: h = false
  } = e, g = (0, u.jm)({
    label: t,
    isSelected: s
  });
  return (0, r.jsx)(d.ua7, {
    text: t,
    children: e => (0, r.jsxs)("div", {
      className: m.themeSelectionContainer,
      children: [(0, r.jsx)(d.P3F, y(E({}, e, g), {
        tabIndex: null != l ? l : g.tabIndex,
        className: a()(m.themeSelection, {
          [m.selected]: s
        }, n),
        style: i,
        onClick: s ? p.dG4 : o,
        children: c
      })), (s || h) && (0, r.jsx)(O, {}), !s && f && (0, r.jsx)("div", {
        className: m.redCircle
      }), _ && (0, r.jsx)("div", {
        className: m.lockedBadgeContainer,
        children: (0, r.jsx)(d.mBM, {
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
  } = e, l = (0, s.e7)([f.Z], () => f.Z.systemTheme), c = f.Z.themePreferenceForSystemTheme(l), u = (0, o.EQ)({
    theme: t,
    themePreferenceForSystemTheme: c
  }).with({
    theme: "system",
    themePreferenceForSystemTheme: p.BRd.LIGHT
  }, () => m.lightIcon).with({
    theme: "system",
    themePreferenceForSystemTheme: p.BRd.DARK
  }, () => m.darkIcon).with({
    theme: "system",
    themePreferenceForSystemTheme: p.BRd.DARKER
  }, () => m.darkerIcon).with({
    theme: "system",
    themePreferenceForSystemTheme: p.BRd.MIDNIGHT
  }, () => m.midnightIcon).with({
    theme: p.BRd.LIGHT
  }, () => m.lightIcon).with({
    theme: p.BRd.DARK
  }, () => m.darkIcon).with({
    theme: p.BRd.DARKER
  }, () => m.darkerIcon).with({
    theme: p.BRd.MIDNIGHT
  }, () => m.midnightIcon).otherwise(() => m.darkIcon), _ = (0, o.EQ)(t).with(p.BRd.LIGHT, () => h.intl.string(h.t.K2sFfn)).with(p.BRd.DARK, () => h.intl.string(h.t.SMPT1t)).with(p.BRd.DARKER, () => h.intl.string(h.t.b8Cei4)).with(p.BRd.MIDNIGHT, () => h.intl.string(h.t.Do4ZJy)).with("system", () => h.intl.string(h.t["7rOU6u"])).exhaustive();
  return (0, r.jsx)(v, {
    onSelect: i,
    isSelected: n,
    name: _,
    className: a()(m.defaultThemeSelection, u),
    children: "system" === t && (0, r.jsx)("div", {
      className: m.iconWrapper,
      children: (0, r.jsx)(d.f6W, {
        theme: c,
        children: e => (0, r.jsx)(d.DuK, {
          className: e
        })
      })
    })
  })
}

function S(e) {
  let {
    preset: t,
    isSelected: n,
    disabled: i,
    tabIndex: o,
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
  return (0, r.jsx)(v, {
    onSelect: i ? true : s,
    isSelected: n,
    name: t.getName(),
    className: a()([i ? m.disabled : null, (0, c.wj)(p) ? m.darkOverlay : m.lightOverlay]),
    style: {
      background: "var(--background-gradient), ".concat(h)
    },
    tabIndex: o,
    showBadge: l,
    showLockedBadge: u
  })
}