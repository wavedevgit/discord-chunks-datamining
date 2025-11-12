/** Chunk was on web.js **/
/** chunk id: 30513, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  WW: () => v,
  XO: () => y,
  Yp: () => b,
  hC: () => T,
  o9: () => I,
  zC: () => O
});
var Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js");
require("./15385.jsx");
var Chunk123245 = require("./123245.jsx"),
  Chunk981631 = require("./981631.js");
require("./474936.js");
var Chunk388032 = require("./388032.jsx");
let l = () => ({
    color: Chunk692547.Z.unsafe_rawColors.PREMIUM_PERK_GREEN.css,
    icon: Chunk481060.Ka2,
    description: Chunk388032.intl.string(Chunk388032.t.iGuEFe)
  }),
  c = function() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk692547.Z.unsafe_rawColors.PREMIUM_PERK_ORANGE.css;
    return {
      color: module,
      icon: Chunk481060.OUq,
      description: Chunk388032.intl.string(Chunk388032.t["94l3Ul"])
    }
  },
  u = () => ({
    color: Chunk692547.Z.unsafe_rawColors.PREMIUM_PERK_GREEN.css,
    icon: Chunk481060.Ka2,
    description: Chunk388032.intl.string(Chunk388032.t["n/HqCh"])
  }),
  d = () => ({
    color: Chunk692547.Z.unsafe_rawColors.PREMIUM_PERK_GREEN.css,
    icon: Chunk481060.OUq,
    description: Chunk388032.intl.string(Chunk388032.t.AU0zcQ)
  }),
  f = () => ({
    color: Chunk692547.Z.unsafe_rawColors.PREMIUM_PERK_ORANGE.css,
    icon: Chunk481060.lZ8,
    description: Chunk388032.intl.string(Chunk388032.t.zZe94m)
  }),
  _ = function() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk692547.Z.unsafe_rawColors.PREMIUM_PERK_PURPLE.css;
    return {
      color: module,
      icon: Chunk481060.SlE,
      description: Chunk388032.intl.string(Chunk388032.t.ZwOSdn)
    }
  },
  p = function(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : r.Z.unsafe_rawColors.PREMIUM_PERK_PURPLE.css,
      n = 0,
      a = 0;
    switch (e) {
      case o.Eu4.TIER_1:
        n = 15, a = 100;
        break;
      case o.Eu4.TIER_2:
        n = 30, a = 150;
        break;
      case o.Eu4.TIER_3:
        n = 60, a = 250
    }
    return {
      color: t,
      icon: i.SlE,
      description: s.intl.formatToPlainString(s.t["12vFYK"], {
        numStickers: n,
        numEmojis: a
      })
    }
  },
  h = () => ({
    color: Chunk692547.Z.unsafe_rawColors.PREMIUM_PERK_GOLD.css,
    icon: Chunk481060.r7p,
    description: Chunk388032.intl.string(Chunk388032.t["ThRK/u"])
  }),
  m = function() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk388032.intl.string(Chunk388032.t.SQV8g6);
    return {
      color: Chunk692547.Z.unsafe_rawColors.PREMIUM_PERK_BLUE.css,
      icon: Chunk481060.EO4,
      description: module
    }
  },
  g = () => ({
    color: Chunk692547.Z.unsafe_rawColors.PREMIUM_PERK_PURPLE.css,
    icon: Chunk123245.Z,
    description: Chunk388032.intl.string(Chunk388032.t.Tm40TZ)
  }),
  E = function() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk692547.Z.unsafe_rawColors.PREMIUM_PERK_GREEN.css;
    return {
      color: module,
      icon: Chunk481060.hGI,
      description: Chunk388032.intl.string(Chunk388032.t.oIKhwT)
    }
  };

function b() {
  return [f(), u(), _(), m()]
}

function y() {
  return [f(), p(Chunk981631.Eu4.TIER_2), E(), m()]
}

function O() {
  return [p(Chunk981631.Eu4.TIER_3, Chunk692547.Z.unsafe_rawColors.PREMIUM_PERK_GREEN.css), g(), h(), m()]
}

function v() {
  return [h(), d(), p(Chunk981631.Eu4.TIER_3), m()]
}

function I() {
  return [l(), _(), c(), m()]
}

function T() {
  return [_(), m()]
}