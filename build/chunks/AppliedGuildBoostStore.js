/** Chunk was on web.js **/
/** chunk id: 899667, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => S
}), require("./388685.js");
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let s = {},
  l = null,
  c = [],
  u = false,
  d = false,
  f = null,
  _ = null;

function p(e) {
  let {
    guildId: t,
    appliedBoosts: n
  } = e;
  s[t] = {
    subscriptions: n,
    lastFetchedAt: Date.now()
  }
}

function h(e) {
  let {
    appliedGuildBoosts: t
  } = e;
  u = false, c = t
}

function m(e) {
  let {
    endsAt: t
  } = e;
  l = t
}

function g() {
  d = true
}

function E(e) {
  let {
    appliedGuildBoost: t
  } = e, n = new Set(t.map(e => e.id));
  c = [...t, ...c.filter(e => !n.has(e.id))], f = null, d = false
}

function b(e) {
  let {
    error: t
  } = e;
  d = false, f = t
}

function y(e) {
  let {
    boostId: t
  } = e;
  c = c.filter(e => e.id !== t), d = false
}

function O(e) {
  let {
    error: t
  } = e;
  d = false, _ = t
}

function v() {
  u = true
}
class I extends(r = Chunk442837.ZP.Store) {
  getAppliedGuildBoostsForGuild(e) {
    return null != s[e] ? s[e].subscriptions : null
  }
  getLastFetchedAtForGuild(e) {
    return null != s[e] ? s[e].lastFetchedAt : null
  }
  getCurrentUserAppliedBoosts() {
    return c
  }
  getAppliedGuildBoost(e) {
    return c.find(t => t.id === e)
  }
  get isModifyingAppliedBoost() {
    return d
  }
  get applyBoostError() {
    return f
  }
  get unapplyBoostError() {
    return _
  }
  get cooldownEndsAt() {
    return l
  }
  get isFetchingCurrentUserAppliedBoosts() {
    return u
  }
}
o(I, "displayName", "AppliedGuildBoostStore");
let S = new I(Chunk570140.Z, {
  GUILD_APPLIED_BOOSTS_FETCH_SUCCESS: p,
  USER_APPLIED_BOOSTS_FETCH_SUCCESS: h,
  APPLIED_BOOSTS_COOLDOWN_FETCH_SUCCESS: m,
  GUILD_UNAPPLY_BOOST_START: g,
  GUILD_APPLY_BOOST_START: g,
  GUILD_APPLY_BOOST_SUCCESS: E,
  GUILD_APPLY_BOOST_FAIL: b,
  GUILD_UNAPPLY_BOOST_SUCCESS: y,
  GUILD_UNAPPLY_BOOST_FAIL: O,
  USER_APPLIED_BOOSTS_FETCH_START: v
})