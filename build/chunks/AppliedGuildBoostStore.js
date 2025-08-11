/** Chunk was on 72762 **/
/** chunk id: 899667, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
}), require("./388685.js");
var r, i, l, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");
let a = {},
  c = null,
  u = [],
  d = false,
  f = false,
  p = null,
  b = null;

function O() {
  f = true
}
class h extends(r = Chunk442837.ZP.Store) {
  getAppliedGuildBoostsForGuild(e) {
    return null != a[e] ? a[e].subscriptions : null
  }
  getLastFetchedAtForGuild(e) {
    return null != a[e] ? a[e].lastFetchedAt : null
  }
  getCurrentUserAppliedBoosts() {
    return u
  }
  getAppliedGuildBoost(e) {
    return u.find(t => t.id === e)
  }
  get isModifyingAppliedBoost() {
    return f
  }
  get applyBoostError() {
    return p
  }
  get unapplyBoostError() {
    return b
  }
  get cooldownEndsAt() {
    return c
  }
  get isFetchingCurrentUserAppliedBoosts() {
    return d
  }
}
l = "AppliedGuildBoostStore", (i = "displayName") in h ? Object.defineProperty(h, i, {
  value: l,
  enumerable: true,
  configurable: true,
  writable: true
}) : h[i] = l;
let m = new h(Chunk570140.Z, {
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
    d = false, u = t
  },
  APPLIED_BOOSTS_COOLDOWN_FETCH_SUCCESS: function(e) {
    let {
      endsAt: t
    } = e;
    c = t
  },
  GUILD_UNAPPLY_BOOST_START: O,
  GUILD_APPLY_BOOST_START: O,
  GUILD_APPLY_BOOST_SUCCESS: function(e) {
    let {
      appliedGuildBoost: t
    } = e, n = new Set(t.map(e => e.id));
    u = [...t, ...u.filter(e => !n.has(e.id))], p = null, f = false
  },
  GUILD_APPLY_BOOST_FAIL: function(e) {
    let {
      error: t
    } = e;
    f = false, p = t
  },
  GUILD_UNAPPLY_BOOST_SUCCESS: function(e) {
    let {
      boostId: t
    } = e;
    u = u.filter(e => e.id !== t), f = false
  },
  GUILD_UNAPPLY_BOOST_FAIL: function(e) {
    let {
      error: t
    } = e;
    f = false, b = t
  },
  USER_APPLIED_BOOSTS_FETCH_START: function() {
    d = true
  }
})