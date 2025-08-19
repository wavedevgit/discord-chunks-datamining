/** Chunk was on 31930 **/
/** chunk id: 899667, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => m
}), require("./388685.js");
var i, r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");
let o = {},
  a = null,
  c = [],
  u = false,
  d = false,
  h = null,
  p = null;

function g() {
  d = true
}
class f extends(i = Chunk442837.ZP.Store) {
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
    return h
  }
  get unapplyBoostError() {
    return p
  }
  get cooldownEndsAt() {
    return a
  }
  get isFetchingCurrentUserAppliedBoosts() {
    return u
  }
}(r = "displayName") in f ? Object.defineProperty(f, r, {
  value: "AppliedGuildBoostStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : f[r] = "AppliedGuildBoostStore";
let m = new f(Chunk570140.Z, {
  GUILD_APPLIED_BOOSTS_FETCH_SUCCESS: function(e) {
    let {
      guildId: t,
      appliedBoosts: n
    } = e;
    o[t] = {
      subscriptions: n,
      lastFetchedAt: Date.now()
    }
  },
  USER_APPLIED_BOOSTS_FETCH_SUCCESS: function(e) {
    let {
      appliedGuildBoosts: t
    } = e;
    u = false, c = t
  },
  APPLIED_BOOSTS_COOLDOWN_FETCH_SUCCESS: function(e) {
    let {
      endsAt: t
    } = e;
    a = t
  },
  GUILD_UNAPPLY_BOOST_START: g,
  GUILD_APPLY_BOOST_START: g,
  GUILD_APPLY_BOOST_SUCCESS: function(e) {
    let {
      appliedGuildBoost: t
    } = e, n = new Set(t.map(e => e.id));
    c = [...t, ...c.filter(e => !n.has(e.id))], h = null, d = false
  },
  GUILD_APPLY_BOOST_FAIL: function(e) {
    let {
      error: t
    } = e;
    d = false, h = t
  },
  GUILD_UNAPPLY_BOOST_SUCCESS: function(e) {
    let {
      boostId: t
    } = e;
    c = c.filter(e => e.id !== t), d = false
  },
  GUILD_UNAPPLY_BOOST_FAIL: function(e) {
    let {
      error: t
    } = e;
    d = false, p = t
  },
  USER_APPLIED_BOOSTS_FETCH_START: function() {
    u = true
  }
})