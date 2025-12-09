/** Chunk was on web.js **/
/** chunk id: 115179, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  B3: () => N,
  Bg: () => h,
  FX: () => _,
  K: () => O,
  Kr: () => m,
  LM: () => v,
  Xv: () => E,
  _p: () => I,
  f$: () => S,
  hF: () => T,
  o9: () => P,
  oo: () => R,
  vQ: () => b,
  w8: () => C,
  wj: () => y,
  xN: () => g,
  xn: () => p,
  zG: () => D
}), require("./388685.js");
var Chunk991998 = require("./991998.js"),
  Chunk551910 = require("./551910.js"),
  Chunk34738 = require("./34738.js"),
  Chunk887003 = require("./887003.js");
require("./597688.js");
var Chunk49436 = require("./49436.js"),
  Chunk502288 = require("./502288.js"),
  Chunk304696 = require("./304696.js"),
  Chunk862657 = require("./862657.js"),
  Chunk388032 = require("./388032.jsx");
let f = new Set([Chunk34738.n.PREMIUM_EXTENSION, Chunk34738.n.PREMIUM_PERMANENT]);

function p(e) {
  let t = e.rewardsConfig.rewards.find(e => e.type === o.w.COLLECTIBLE);
  return (null == t ? true : t.type) === o.w.COLLECTIBLE ? t : null
}

function _(e) {
  let t = p(e);
  return null != t && "expiresAtPremium" in t && null != t.expiresAtPremium ? (0, u.E8)(t.expiresAtPremium) : null
}

function m(e) {
  let t = p(e);
  if (null == t || !("expiresAt" in t) || null == t.expiresAt) return null;
  let n = new Date(e.expiresAt),
    i = new Date(t.expiresAt),
    a = (0, r.Z)(i, n),
    o = Math.floor(a / 30) + +(a % 30 >= 25);
  if (o >= 12) {
    let e = Math.floor(o / 12);
    return d.intl.formatToPlainString(d.t.PClsrw, {
      years: e
    })
  } {
    if (o > 0) return d.intl.formatToPlainString(d.t.kridzK, {
      months: o
    });
    let e = (0, r.Z)(i, n);
    if (!(e >= 7)) return d.intl.formatToPlainString(d.t["k2UNz+"], {
      days: e
    });
    {
      let t = Math.ceil(e / 7);
      return d.intl.formatToPlainString(d.t.EmoBD2, {
        weeks: t
      })
    }
  }
}

function h(e) {
  return e.rewardsConfig.rewards.some(e => e.type === o.w.FRACTIONAL_PREMIUM)
}

function g(e) {
  return e.rewardsConfig.rewards.some(e => e.type === o.w.VIRTUAL_CURRENCY)
}

function E(e) {
  return null != p(e)
}

function b(e) {
  return e.rewardsConfig.rewards.some(e => e.type === o.w.IN_GAME)
}

function y(e) {
  return e.rewardsConfig.rewards.some(e => e.type === o.w.REWARD_CODE)
}

function O(e) {
  var t;
  return null != (t = e.rewardsConfig.rewards.find(e => e.type === o.w.IN_GAME)) ? t : null
}

function v(e) {
  let t = e.rewardsConfig.rewards.find(e => e.type === o.w.VIRTUAL_CURRENCY);
  return null == t ? true : t.orbQuantity
}

function S(e) {
  var t;
  let n = null == (t = p(e)) ? true : t.expirationMode;
  return null != n && f.has(n)
}

function I(e) {
  var t;
  return S(e) && (null == (t = p(e)) ? true : t.expirationMode) === a.n.PREMIUM_PERMANENT
}

function T(e) {
  var t, n;
  let r = null != (n = null == (t = e.userStatus) ? true : t.claimedTier) ? n : 0;
  return "rewardsConfig" in e.config ? e.config.rewardsConfig.rewards[r] : e.config.rewards[r]
}

function A(e, t) {
  if (h(e)) return (0, l.o8)(e);
  let n = (0, c.M1)(e);
  return t ? n.messages.nameWithArticle : n.messages.name
}

function C(e) {
  return A(e, false)
}

function N(e) {
  return A(e, true)
}

function P(e) {
  let {
    quest: t,
    idx: n
  } = e;
  if (null == n) return null;
  let r = t.config.rewardsConfig.rewards[n];
  return r.type === o.w.REWARD_CODE ? r : null
}

function R(e) {
  let {
    quest: {
      config: t
    }
  } = e, n = t.rewardsConfig;
  return n.assignmentMethod === i.j.TIERED && n.rewards.length > 0 && n.rewards.every(e => e.type === o.w.REWARD_CODE)
}

function D(e) {
  let t = e.rewardsConfig.platforms;
  return t.length > 0 ? t[0] : s.y$.CROSS_PLATFORM
}