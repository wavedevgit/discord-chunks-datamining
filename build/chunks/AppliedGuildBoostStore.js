/** Chunk was on web.js **/
/** chunk id: 859241, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => S
}), require("./896048.js");
var r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let o = {},
  l = null,
  c = [],
  u = false,
  d = false,
  f = null,
  p = null;

function _(e) {
  let {
    guildId: t,
    appliedBoosts: n
  } = e;
  o[t] = {
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
  d = false, p = t
}

function A() {
  u = true
}
class v extends(r = Chunk311907.Ay.Store) {
  getAppliedGuildBoostsForGuild(e) {
    return null != o[e] ? o[e].subscriptions : null
  }
  getLastFetchedAtForGuild(e) {
    return null != o[e] ? o[e].lastFetchedAt : null
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
    return p
  }
  get cooldownEndsAt() {
    return l
  }
  get isFetchingCurrentUserAppliedBoosts() {
    return u
  }
}
s(v, "displayName", "AppliedGuildBoostStore");
let S = new v(Chunk73153.h, {
  GUILD_APPLIED_BOOSTS_FETCH_SUCCESS: _,
  USER_APPLIED_BOOSTS_FETCH_SUCCESS: h,
  APPLIED_BOOSTS_COOLDOWN_FETCH_SUCCESS: m,
  GUILD_UNAPPLY_BOOST_START: g,
  GUILD_APPLY_BOOST_START: g,
  GUILD_APPLY_BOOST_SUCCESS: E,
  GUILD_APPLY_BOOST_FAIL: b,
  GUILD_UNAPPLY_BOOST_SUCCESS: y,
  GUILD_UNAPPLY_BOOST_FAIL: O,
  USER_APPLIED_BOOSTS_FETCH_START: A
})