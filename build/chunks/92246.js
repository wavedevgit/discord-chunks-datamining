/** Chunk was on web.js **/
/** chunk id: 92246, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $5: () => _,
  $s: () => P,
  HG: () => b,
  JX: () => v,
  K9: () => m,
  Y7: () => S,
  _Z: () => A,
  cg: () => R,
  f: () => O,
  k5: () => h,
  kr: () => w,
  ks: () => g,
  mH: () => N,
  mq: () => C,
  nj: () => p,
  r7: () => y,
  sn: () => I,
  tU: () => E
}), require("./896048.js");
var Chunk194537 = require("./194537.js"),
  Chunk430019 = require("./430019.js"),
  Chunk444212 = require("./444212.js"),
  Chunk440703 = require("./440703.js");
require("./590180.js");
var Chunk341915 = require("./341915.js"),
  Chunk884877 = require("./884877.js"),
  Chunk651892 = require("./651892.js"),
  Chunk710969 = require("./710969.js"),
  Chunk985018 = require("./985018.jsx");
let f = new Set([Chunk444212.E.PREMIUM_EXTENSION, Chunk444212.E.PREMIUM_PERMANENT]);

function p(e) {
  let t = e.rewardsConfig.rewards.find(e => e.type === s.l.COLLECTIBLE);
  return (null == t ? true : t.type) === s.l.COLLECTIBLE ? t : null
}

function _(e) {
  let t = p(e);
  return null != t && "expiresAtPremium" in t && null != t.expiresAtPremium ? (0, u.ZG)(t.expiresAtPremium) : null
}

function h(e) {
  let t = p(e);
  if (null == t || !("expiresAt" in t) || null == t.expiresAt) return null;
  let n = new Date(e.expiresAt),
    i = new Date(t.expiresAt),
    a = (0, r.A)(i, n),
    s = Math.floor(a / 30) + +(a % 30 >= 25);
  if (s >= 12) {
    let e = Math.floor(s / 12);
    return d.intl.formatToPlainString(d.t.PClsrw, {
      years: e
    })
  } {
    if (s > 0) return d.intl.formatToPlainString(d.t.kridzK, {
      months: s
    });
    let e = (0, r.A)(i, n);
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

function m(e) {
  return e.rewardsConfig.rewards.some(e => e.type === s.l.FRACTIONAL_PREMIUM)
}

function g(e) {
  return e.rewardsConfig.rewards.some(e => e.type === s.l.VIRTUAL_CURRENCY)
}

function E(e) {
  return null != p(e)
}

function b(e) {
  return e.rewardsConfig.rewards.some(e => e.type === s.l.IN_GAME)
}

function y(e) {
  return e.rewardsConfig.rewards.some(e => e.type === s.l.REWARD_CODE)
}

function O(e) {
  var t;
  return null != (t = e.rewardsConfig.rewards.find(e => e.type === s.l.IN_GAME)) ? t : null
}

function A(e) {
  let t = e.rewardsConfig.rewards.find(e => e.type === s.l.VIRTUAL_CURRENCY);
  return null == t ? true : t.orbQuantity
}

function v(e) {
  var t;
  let n = null == (t = p(e)) ? true : t.expirationMode;
  return null != n && f.has(n)
}

function S(e) {
  var t;
  return v(e) && (null == (t = p(e)) ? true : t.expirationMode) === a.E.PREMIUM_PERMANENT
}

function I(e) {
  var t, n;
  let r = null != (t = null == (n = e.userStatus) ? true : n.claimedTier) ? t : 0;
  return "rewardsConfig" in e.config ? e.config.rewardsConfig.rewards[r] : e.config.rewards[r]
}

function T(e, t) {
  if (m(e)) return (0, l.xM)(e);
  let n = (0, c.xv)(e);
  return t ? n.messages.nameWithArticle : n.messages.name
}

function C(e) {
  return T(e, false)
}

function N(e) {
  return T(e, true)
}

function R(e) {
  let {
    quest: t,
    idx: n
  } = e;
  if (null == n) return null;
  let r = t.config.rewardsConfig.rewards[n];
  return r.type === s.l.REWARD_CODE ? r : null
}

function w(e) {
  let {
    quest: {
      config: t
    }
  } = e, n = t.rewardsConfig;
  return n.assignmentMethod === i.T.TIERED && n.rewards.length > 0 && n.rewards.every(e => e.type === s.l.REWARD_CODE)
}

function P(e) {
  let t = e.rewardsConfig.platforms;
  return t.length > 0 ? t[0] : o.pY.CROSS_PLATFORM
}