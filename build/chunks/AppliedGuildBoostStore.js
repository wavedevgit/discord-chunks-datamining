/** Chunk was on 77512 **/
/** chunk id: 899667, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
}), require("./388685.js");
var r, i, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");
let s = {},
  c = null,
  a = [],
  u = false,
  d = false,
  f = null,
  p = null;

function b() {
  d = true
}
class O extends(r = Chunk442837.ZP.Store) {
  getAppliedGuildBoostsForGuild(e) {
    return null != s[e] ? s[e].subscriptions : null
  }
  getLastFetchedAtForGuild(e) {
    return null != s[e] ? s[e].lastFetchedAt : null
  }
  getCurrentUserAppliedBoosts() {
    return a
  }
  getAppliedGuildBoost(e) {
    return a.find(t => t.id === e)
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
    return c
  }
  get isFetchingCurrentUserAppliedBoosts() {
    return u
  }
}(i = "displayName") in O ? Object.defineProperty(O, i, {
  value: "AppliedGuildBoostStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : O[i] = "AppliedGuildBoostStore";
let m = new O(Chunk570140.Z, {
  GUILD_APPLIED_BOOSTS_FETCH_SUCCESS: function(e) {
    let {
      guildId: t,
      appliedBoosts: n
    } = e;
    s[t] = {
      subscriptions: n,
      lastFetchedAt: Date.now()
    }
  },
  USER_APPLIED_BOOSTS_FETCH_SUCCESS: function(e) {
    let {
      appliedGuildBoosts: t
    } = e;
    u = false, a = t
  },
  APPLIED_BOOSTS_COOLDOWN_FETCH_SUCCESS: function(e) {
    let {
      endsAt: t
    } = e;
    c = t
  },
  GUILD_UNAPPLY_BOOST_START: b,
  GUILD_APPLY_BOOST_START: b,
  GUILD_APPLY_BOOST_SUCCESS: function(e) {
    let {
      appliedGuildBoost: t
    } = e, n = new Set(t.map(e => e.id));
    a = [...t, ...a.filter(e => !n.has(e.id))], f = null, d = false
  },
  GUILD_APPLY_BOOST_FAIL: function(e) {
    let {
      error: t
    } = e;
    d = false, f = t
  },
  GUILD_UNAPPLY_BOOST_SUCCESS: function(e) {
    let {
      boostId: t
    } = e;
    a = a.filter(e => e.id !== t), d = false
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