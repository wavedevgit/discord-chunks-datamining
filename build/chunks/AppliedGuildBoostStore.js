/** Chunk was on 44411 **/
/** chunk id: 859241, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => C
}), require("./896048.js");
var i, s, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js");
let o = {},
  a = null,
  d = [],
  u = false,
  c = false,
  h = null,
  p = null;

function g() {
  c = true
}
class f extends(i = Chunk311907.Ay.Store) {
  getAppliedGuildBoostsForGuild(e) {
    return null != o[e] ? o[e].subscriptions : null
  }
  getLastFetchedAtForGuild(e) {
    return null != o[e] ? o[e].lastFetchedAt : null
  }
  getCurrentUserAppliedBoosts() {
    return d
  }
  getAppliedGuildBoost(e) {
    return d.find(t => t.id === e)
  }
  get isModifyingAppliedBoost() {
    return c
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
}(s = "displayName") in f ? Object.defineProperty(f, s, {
  value: "AppliedGuildBoostStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : f[s] = "AppliedGuildBoostStore";
let C = new f(Chunk73153.h, {
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
    u = false, d = t
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
    d = [...t, ...d.filter(e => !n.has(e.id))], h = null, c = false
  },
  GUILD_APPLY_BOOST_FAIL: function(e) {
    let {
      error: t
    } = e;
    c = false, h = t
  },
  GUILD_UNAPPLY_BOOST_SUCCESS: function(e) {
    let {
      boostId: t
    } = e;
    d = d.filter(e => e.id !== t), c = false
  },
  GUILD_UNAPPLY_BOOST_FAIL: function(e) {
    let {
      error: t
    } = e;
    c = false, p = t
  },
  USER_APPLIED_BOOSTS_FETCH_START: function() {
    u = true
  }
})