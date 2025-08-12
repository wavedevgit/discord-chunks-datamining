/** Chunk was on web.js **/
/** chunk id: 583901, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  DR: () => I,
  S4: () => O,
  bD: () => v,
  oK: () => y
}), require("./314940.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk278074 = require("./278074.js"),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk210887 = require("./210887.js"),
  Chunk47760 = require("./47760.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk302567 = require("./302567.js");

function m(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function g(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      m(e, t, n[t])
    })
  }
  return e
}

function E(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function b(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : E(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function y() {
  return (0, Chunk255367.jsx)("div", {
    className: Chunk302567.selectionCircle,
    children: (0, Chunk255367.jsx)(Chunk481060.owK, {
      size: "md",
      color: "currentColor",
      className: Chunk302567.checkmarkCircle,
      colorClass: Chunk302567.checkmark,
      secondaryColor: Chunk692547.Z.unsafe_rawColors.WHITE_500.css
    })
  })
}

function O(e) {
  let {
    name: t,
    className: n,
    style: i,
    onSelect: a,
    isSelected: s = false,
    tabIndex: l,
    children: c,
    showBadge: d,
    showLockedBadge: f,
    showSelectionCircle: p = false
  } = e, m = (0, u.xUy)({
    label: t,
    isSelected: s
  });
  return (0, r.jsx)(u.ua7, {
    text: t,
    children: e => (0, r.jsxs)("div", {
      className: h.themeSelectionContainer,
      children: [(0, r.jsx)(u.P3F, b(g({}, e, m), {
        tabIndex: null != l ? l : m.tabIndex,
        className: o()(h.themeSelection, {
          [h.selected]: s
        }, n),
        style: i,
        onClick: s ? _.dG4 : a,
        children: c
      })), (s || p) && (0, r.jsx)(y, {}), !s && d && (0, r.jsx)("div", {
        className: h.redCircle
      }), f && (0, r.jsx)("div", {
        className: h.lockedBadgeContainer,
        children: (0, r.jsx)(u.mBM, {
          className: h.lockedBadge,
          color: "currentColor"
        })
      })]
    })
  })
}

function v(e) {
  let {
    theme: t,
    isSelected: n,
    onSelect: i
  } = e, l = (0, s.e7)([d.Z], () => d.Z.systemTheme), c = d.Z.themePreferenceForSystemTheme(l), f = (0, a.EQ)({
    theme: t,
    themePreferenceForSystemTheme: c
  }).with({
    theme: "system",
    themePreferenceForSystemTheme: _.BRd.LIGHT
  }, () => h.lightIcon).with({
    theme: "system",
    themePreferenceForSystemTheme: _.BRd.DARK
  }, () => h.darkIcon).with({
    theme: "system",
    themePreferenceForSystemTheme: _.BRd.DARKER
  }, () => h.darkerIcon).with({
    theme: "system",
    themePreferenceForSystemTheme: _.BRd.MIDNIGHT
  }, () => h.midnightIcon).with({
    theme: _.BRd.LIGHT
  }, () => h.lightIcon).with({
    theme: _.BRd.DARK
  }, () => h.darkIcon).with({
    theme: _.BRd.DARKER
  }, () => h.darkerIcon).with({
    theme: _.BRd.MIDNIGHT
  }, () => h.midnightIcon).otherwise(() => h.darkIcon), m = (0, a.EQ)(t).with(_.BRd.LIGHT, () => p.intl.string(p.t.K2sFfn)).with(_.BRd.DARK, () => p.intl.string(p.t.SMPT1t)).with(_.BRd.DARKER, () => p.intl.string(p.t.b8Cei4)).with(_.BRd.MIDNIGHT, () => p.intl.string(p.t.Do4ZJy)).with("system", () => p.intl.string(p.t["7rOU6u"])).exhaustive();
  return (0, r.jsx)(O, {
    onSelect: i,
    isSelected: n,
    name: m,
    className: o()(h.defaultThemeSelection, f),
    children: "system" === t && (0, r.jsx)("div", {
      className: h.iconWrapper,
      children: (0, r.jsx)(u.f6W, {
        theme: c,
        children: e => (0, r.jsx)(u.DuK, {
          className: e
        })
      })
    })
  })
}

function I(e) {
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
    angle: _,
    theme: p
  } = t, m = (0, f.VK)({
    colors: d,
    angle: _
  });
  return (0, r.jsx)(O, {
    onSelect: i ? true : s,
    isSelected: n,
    name: t.getName(),
    className: o()([i ? h.disabled : null, (0, c.wj)(p) ? h.darkOverlay : h.lightOverlay]),
    style: {
      background: "var(--background-gradient), ".concat(m)
    },
    tabIndex: a,
    showBadge: l,
    showLockedBadge: u
  })
}