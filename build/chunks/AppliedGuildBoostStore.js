/** Chunk was on 14719 **/
/** chunk id: 899667, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => C
}), require("./388685.js");
var o, r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");
let a = {},
  _ = null,
  c = [],
  d = false,
  s = false,
  p = null,
  u = null;

function S() {
  s = true
}
class f extends(o = Chunk442837.ZP.Store) {
  getAppliedGuildBoostsForGuild(e) {
    return null != a[e] ? a[e].subscriptions : null
  }
  getLastFetchedAtForGuild(e) {
    return null != a[e] ? a[e].lastFetchedAt : null
  }
  getCurrentUserAppliedBoosts() {
    return c
  }
  getAppliedGuildBoost(e) {
    return c.find(t => t.id === e)
  }
  get isModifyingAppliedBoost() {
    return s
  }
  get applyBoostError() {
    return p
  }
  get unapplyBoostError() {
    return u
  }
  get cooldownEndsAt() {
    return _
  }
  get isFetchingCurrentUserAppliedBoosts() {
    return d
  }
}(r = "displayName") in f ? Object.defineProperty(f, r, {
  value: "AppliedGuildBoostStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : f[r] = "AppliedGuildBoostStore";
let C = new f(Chunk570140.Z, {
  GUILD_APPLIED_BOOSTS_FETCH_SUCCESS: function(e) {
    let {
      guildId: t,
      appliedBoosts: n
    } = e;
    a[t] = {
      subscriptions: n,
      lastFetchedAt: Date.now()
    }
  },
  USER_APPLIED_BOOSTS_FETCH_SUCCESS: function(e) {
    let {
      appliedGuildBoosts: t
    } = e;
    d = false, c = t
  },
  APPLIED_BOOSTS_COOLDOWN_FETCH_SUCCESS: function(e) {
    let {
      endsAt: t
    } = e;
    _ = t
  },
  GUILD_UNAPPLY_BOOST_START: S,
  GUILD_APPLY_BOOST_START: S,
  GUILD_APPLY_BOOST_SUCCESS: function(e) {
    let {
      appliedGuildBoost: t
    } = e, n = new Set(t.map(e => e.id));
    c = [...t, ...c.filter(e => !n.has(e.id))], p = null, s = false
  },
  GUILD_APPLY_BOOST_FAIL: function(e) {
    let {
      error: t
    } = e;
    s = false, p = t
  },
  GUILD_UNAPPLY_BOOST_SUCCESS: function(e) {
    let {
      boostId: t
    } = e;
    c = c.filter(e => e.id !== t), s = false
  },
  GUILD_UNAPPLY_BOOST_FAIL: function(e) {
    let {
      error: t
    } = e;
    s = false, u = t
  },
  USER_APPLIED_BOOSTS_FETCH_START: function() {
    d = true
  }
})