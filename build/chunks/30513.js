/** Chunk was on web.js **/
/** chunk id: 30513, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  VF: () => P,
  WW: () => N,
  XO: () => S,
  Yp: () => T,
  hC: () => R,
  o9: () => C,
  zC: () => A
});
var Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk15385 = require("./15385.jsx"),
  Chunk123245 = require("./123245.jsx"),
  Chunk981631 = require("./981631.js");
require("./474936.js");
var Chunk388032 = require("./388032.jsx");
let c = () => ({
    color: Chunk692547.Z.unsafe_rawColors.PREMIUM_PERK_GREEN.css,
    icon: Chunk481060.Ka2,
    description: Chunk388032.intl.string(Chunk388032.t.iGuEFR)
  }),
  u = function() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk692547.Z.unsafe_rawColors.PREMIUM_PERK_ORANGE.css;
    return {
      color: module,
      icon: Chunk481060.OUq,
      description: Chunk388032.intl.string(Chunk388032.t["94l3Ul"])
    }
  },
  d = () => ({
    color: Chunk692547.Z.unsafe_rawColors.PREMIUM_PERK_GREEN.css,
    icon: Chunk481060.Ka2,
    description: Chunk388032.intl.string(Chunk388032.t["n/HqCg"])
  }),
  f = () => ({
    color: Chunk692547.Z.unsafe_rawColors.PREMIUM_PERK_GREEN.css,
    icon: Chunk481060.OUq,
    description: Chunk388032.intl.string(Chunk388032.t.AU0zcX)
  }),
  _ = () => ({
    color: Chunk692547.Z.unsafe_rawColors.PREMIUM_PERK_ORANGE.css,
    icon: Chunk481060.lZ8,
    description: Chunk388032.intl.string(Chunk388032.t.zZe94u)
  }),
  p = function() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk692547.Z.unsafe_rawColors.PREMIUM_PERK_PURPLE.css;
    return {
      color: module,
      icon: Chunk481060.SlE,
      description: Chunk388032.intl.string(Chunk388032.t.ZwOSdn)
    }
  },
  h = function(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : r.Z.unsafe_rawColors.PREMIUM_PERK_PURPLE.css,
      n = 0,
      o = 0;
    switch (e) {
      case s.Eu4.TIER_1:
        n = 15, o = 100;
        break;
      case s.Eu4.TIER_2:
        n = 30, o = 150;
        break;
      case s.Eu4.TIER_3:
        n = 60, o = 250
    }
    return {
      color: t,
      icon: i.SlE,
      description: l.intl.formatToPlainString(l.t["12vFYG"], {
        numStickers: n,
        numEmojis: o
      })
    }
  },
  m = () => ({
    color: Chunk692547.Z.unsafe_rawColors.PREMIUM_PERK_GOLD.css,
    icon: Chunk481060.r7p,
    description: Chunk388032.intl.string(Chunk388032.t["ThRK/v"])
  }),
  g = () => ({
    icon: Chunk15385.Z,
    description: Chunk388032.intl.string(Chunk388032.t.a7LWeH)
  }),
  E = () => ({
    icon: Chunk481060.$Eu,
    color: Chunk692547.Z.unsafe_rawColors.PREMIUM_PERK_PINK.css,
    description: Chunk388032.intl.string(Chunk388032.t.QouJkp)
  }),
  b = () => ({
    icon: Chunk481060.lZ8,
    color: Chunk692547.Z.unsafe_rawColors.PREMIUM_PERK_YELLOW.css,
    description: Chunk388032.intl.string(Chunk388032.t["3MpIx8"])
  }),
  y = () => ({
    color: Chunk692547.Z.unsafe_rawColors.PREMIUM_PERK_BLUE.css,
    icon: Chunk481060.EO4,
    description: Chunk388032.intl.string(Chunk388032.t.gAeHJS)
  }),
  O = function() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk388032.intl.string(Chunk388032.t.SQV8g4);
    return {
      color: Chunk692547.Z.unsafe_rawColors.PREMIUM_PERK_BLUE.css,
      icon: Chunk481060.EO4,
      description: module
    }
  },
  v = () => ({
    color: Chunk692547.Z.unsafe_rawColors.PREMIUM_PERK_PURPLE.css,
    icon: Chunk123245.Z,
    description: Chunk388032.intl.string(Chunk388032.t.Tm40TU)
  }),
  I = function() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk692547.Z.unsafe_rawColors.PREMIUM_PERK_GREEN.css;
    return {
      color: module,
      icon: Chunk481060.hGI,
      description: Chunk388032.intl.string(Chunk388032.t.oIKhwc)
    }
  };

function T() {
  return [_(), d(), p(), O()]
}

function S() {
  return [_(), h(Chunk981631.Eu4.TIER_2), I(), O()]
}

function A() {
  return [h(Chunk981631.Eu4.TIER_3, Chunk692547.Z.unsafe_rawColors.PREMIUM_PERK_GREEN.css), v(), m(), O()]
}

function N() {
  return [m(), f(), h(Chunk981631.Eu4.TIER_3), O()]
}

function C() {
  return [c(), p(), u(), O()]
}

function R() {
  return [p(), O()]
}

function P() {
  return [E(), b(), g(), y()]
}