/** Chunk was on web (https://canary.discord.comweb.6d4953f88f353958.js.js) **/
"use strict";
n.d(t, {
  VF: () => w,
  WW: () => C,
  XO: () => N,
  Yp: () => T,
  hC: () => P,
  o9: () => R,
  zC: () => A
});
var r = n(692547),
  i = n(481060),
  o = n(15385),
  a = n(709586),
  s = n(123245),
  l = n(981631);
n(474936);
var c = n(388032);
let u = () => ({
    color: r.Z.unsafe_rawColors.PREMIUM_PERK_GREEN.css,
    icon: i.Ka2,
    description: c.NW.string(c.t.iGuEFR)
  }),
  d = function() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : r.Z.unsafe_rawColors.PREMIUM_PERK_ORANGE.css;
    return {
      color: e,
      icon: i.OUq,
      description: c.NW.string(c.t["94l3Ul"])
    }
  },
  f = () => ({
    color: r.Z.unsafe_rawColors.PREMIUM_PERK_GREEN.css,
    icon: i.Ka2,
    description: c.NW.string(c.t["n/HqCg"])
  }),
  p = () => ({
    color: r.Z.unsafe_rawColors.PREMIUM_PERK_GREEN.css,
    icon: i.OUq,
    description: c.NW.string(c.t.AU0zcX)
  }),
  _ = () => ({
    color: r.Z.unsafe_rawColors.PREMIUM_PERK_ORANGE.css,
    icon: i.lZ8,
    description: c.NW.string(c.t.zZe94u)
  }),
  h = function() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : r.Z.unsafe_rawColors.PREMIUM_PERK_PURPLE.css;
    return {
      color: e,
      icon: i.SlE,
      description: c.NW.string(c.t.ZwOSdn)
    }
  },
  m = function(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.Z.unsafe_rawColors.PREMIUM_PERK_PURPLE.css,
      n = 0,
      o = 0;
    switch (e) {
      case l.Eu4.TIER_1:
        n = 15, o = 100;
        break;
      case l.Eu4.TIER_2:
        n = 30, o = 150;
        break;
      case l.Eu4.TIER_3:
        n = 60, o = 250
    }
    return {
      color: t,
      icon: i.SlE,
      description: c.NW.formatToPlainString(c.t["12vFYG"], {
        numStickers: n,
        numEmojis: o
      })
    }
  },
  g = () => ({
    color: r.Z.unsafe_rawColors.PREMIUM_PERK_GOLD.css,
    icon: i.r7p,
    description: c.NW.string(c.t["ThRK/v"])
  }),
  E = () => ({
    icon: o.Z,
    description: c.NW.string(c.t.a7LWeH)
  }),
  v = () => ({
    icon: a.Z,
    color: r.Z.unsafe_rawColors.PREMIUM_PERK_PINK.css,
    description: c.NW.string(c.t.QouJkp)
  }),
  b = () => ({
    icon: i.lZ8,
    color: r.Z.unsafe_rawColors.PREMIUM_PERK_YELLOW.css,
    description: c.NW.string(c.t["3MpIx8"])
  }),
  y = () => ({
    color: r.Z.unsafe_rawColors.PREMIUM_PERK_BLUE.css,
    icon: i.EO4,
    description: c.NW.string(c.t.gAeHJS)
  }),
  O = function() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c.NW.string(c.t.SQV8g4);
    return {
      color: r.Z.unsafe_rawColors.PREMIUM_PERK_BLUE.css,
      icon: i.EO4,
      description: e
    }
  },
  S = () => ({
    color: r.Z.unsafe_rawColors.PREMIUM_PERK_PURPLE.css,
    icon: s.Z,
    description: c.NW.string(c.t.Tm40TU)
  }),
  I = function() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : r.Z.unsafe_rawColors.PREMIUM_PERK_GREEN.css;
    return {
      color: e,
      icon: i.hGI,
      description: c.NW.string(c.t.oIKhwc)
    }
  };

function T() {
  return [_(), f(), h(), O()]
}

function N() {
  return [_(), m(l.Eu4.TIER_2), I(), O()]
}

function A() {
  return [m(l.Eu4.TIER_3, r.Z.unsafe_rawColors.PREMIUM_PERK_GREEN.css), S(), g(), O()]
}

function C() {
  return [g(), p(), m(l.Eu4.TIER_3), O()]
}

function R() {
  return [u(), h(), d(), O()]
}

function P() {
  return [h(), O()]
}

function w() {
  return [v(), b(), E(), y()]
}