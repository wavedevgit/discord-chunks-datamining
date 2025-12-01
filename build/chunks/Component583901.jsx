/** Chunk was on web.js **/
/** chunk id: 583901, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  DR: () => T,
  S4: () => S,
  bD: () => I,
  oK: () => v
}), require("./314940.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk278074 = require("./278074.js"),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk780384 = require("./780384.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk210887 = require("./210887.js"),
  Chunk47760 = require("./47760.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk750852 = require("./750852.js");

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

function v() {
  return (0, Chunk54381.jsx)("div", {
    className: Chunk750852.selectionCircle,
    children: (0, Chunk54381.jsx)(Chunk481060.owK, {
      size: "md",
      color: "currentColor",
      className: Chunk750852.checkmarkCircle,
      colorClass: Chunk750852.checkmark,
      secondaryColor: Chunk692547.Z.unsafe_rawColors.WHITE_500.css
    })
  })
}

function S(e) {
  let {
    name: t,
    className: n,
    style: i,
    onSelect: o,
    isSelected: s = false,
    tabIndex: l,
    children: u,
    showBadge: p,
    showLockedBadge: _,
    showSelectionCircle: h = false
  } = e, E = (0, d.jm)({
    label: t,
    isSelected: s
  });
  return (0, r.jsx)(c.u, {
    __unsupportedReactNodeAsText: t,
    children: (0, r.jsxs)("div", {
      className: g.themeSelectionContainer,
      children: [(0, r.jsx)(f.P3F, O(b({}, E), {
        tabIndex: null != l ? l : E.tabIndex,
        className: a()(g.themeSelection, {
          [g.selected]: s
        }, n),
        style: i,
        onClick: s ? m.dG4 : o,
        children: u
      })), (s || h) && (0, r.jsx)(v, {}), !s && p && (0, r.jsx)("div", {
        className: g.redCircle
      }), _ && (0, r.jsx)("div", {
        className: g.lockedBadgeContainer,
        children: (0, r.jsx)(f.mBM, {
          className: g.lockedBadge,
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
  } = e, l = (0, s.e7)([p.Z], () => p.Z.systemTheme), c = p.Z.themePreferenceForSystemTheme(l), u = (0, o.EQ)({
    theme: t,
    themePreferenceForSystemTheme: c
  }).with({
    theme: "system",
    themePreferenceForSystemTheme: m.BRd.LIGHT
  }, () => g.lightIcon).with({
    theme: "system",
    themePreferenceForSystemTheme: m.BRd.DARK
  }, () => g.darkIcon).with({
    theme: "system",
    themePreferenceForSystemTheme: m.BRd.DARKER
  }, () => g.darkerIcon).with({
    theme: "system",
    themePreferenceForSystemTheme: m.BRd.MIDNIGHT
  }, () => g.midnightIcon).with({
    theme: m.BRd.LIGHT
  }, () => g.lightIcon).with({
    theme: m.BRd.DARK
  }, () => g.darkIcon).with({
    theme: m.BRd.DARKER
  }, () => g.darkerIcon).with({
    theme: m.BRd.MIDNIGHT
  }, () => g.midnightIcon).otherwise(() => g.darkIcon), d = (0, o.EQ)(t).with(m.BRd.LIGHT, () => h.intl.string(h.t.K2sFfo)).with(m.BRd.DARK, () => h.intl.string(h.t.SMPT1k)).with(m.BRd.DARKER, () => h.intl.string(h.t.b8Cei3)).with(m.BRd.MIDNIGHT, () => h.intl.string(h.t.Do4ZJx)).with("system", () => h.intl.string(h.t["7rOU6j"])).exhaustive();
  return (0, r.jsx)(S, {
    onSelect: i,
    isSelected: n,
    name: d,
    className: a()(g.defaultThemeSelection, u),
    children: "system" === t && (0, r.jsx)("div", {
      className: g.iconWrapper,
      children: (0, r.jsx)(f.f6W, {
        theme: c,
        children: e => (0, r.jsx)(f.DuK, {
          className: e
        })
      })
    })
  })
}

function T(e) {
  let {
    preset: t,
    isSelected: n,
    disabled: i,
    tabIndex: o,
    onSelect: s,
    showBadge: l,
    showLockedBadge: c
  } = e, {
    colors: d,
    angle: f,
    theme: p
  } = t, m = (0, _.VK)({
    colors: d,
    angle: f
  });
  return (0, r.jsx)(S, {
    onSelect: i ? true : s,
    isSelected: n,
    name: t.getName(),
    className: a()([i ? g.disabled : null, (0, u.wj)(p) ? g.darkOverlay : g.lightOverlay]),
    style: {
      background: "var(--background-gradient), ".concat(m)
    },
    tabIndex: o,
    showBadge: l,
    showLockedBadge: c
  })
}