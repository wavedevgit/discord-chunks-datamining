/** Chunk was on 98098 **/
/** chunk id: 899667, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => C
}), require("./388685.js");
var l, o, r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");
let c = {},
  _ = null,
  d = [],
  s = false,
  u = false,
  p = null,
  S = null;

function f() {
  u = true
}
class m extends(l = Chunk442837.ZP.Store) {
  getAppliedGuildBoostsForGuild(e) {
    return null != c[e] ? c[e].subscriptions : null
  }
  getLastFetchedAtForGuild(e) {
    return null != c[e] ? c[e].lastFetchedAt : null
  }
  getCurrentUserAppliedBoosts() {
    return d
  }
  getAppliedGuildBoost(e) {
    return d.find(t => t.id === e)
  }
  get isModifyingAppliedBoost() {
    return u
  }
  get applyBoostError() {
    return p
  }
  get unapplyBoostError() {
    return S
  }
  get cooldownEndsAt() {
    return _
  }
  get isFetchingCurrentUserAppliedBoosts() {
    return s
  }
}
r = "AppliedGuildBoostStore", (o = "displayName") in m ? Object.defineProperty(m, o, {
  value: r,
  enumerable: true,
  configurable: true,
  writable: true
}) : m[o] = r;
let C = new m(Chunk570140.Z, {
  GUILD_APPLIED_BOOSTS_FETCH_SUCCESS: function(e) {
    let {
      guildId: t,
      appliedBoosts: n
    } = e;
    c[t] = {
      subscriptions: n,
      lastFetchedAt: Date.now()
    }
  },
  USER_APPLIED_BOOSTS_FETCH_SUCCESS: function(e) {
    let {
      appliedGuildBoosts: t
    } = e;
    s = false, d = t
  },
  APPLIED_BOOSTS_COOLDOWN_FETCH_SUCCESS: function(e) {
    let {
      endsAt: t
    } = e;
    _ = t
  },
  GUILD_UNAPPLY_BOOST_START: f,
  GUILD_APPLY_BOOST_START: f,
  GUILD_APPLY_BOOST_SUCCESS: function(e) {
    let {
      appliedGuildBoost: t
    } = e, n = new Set(t.map(e => e.id));
    d = [...t, ...d.filter(e => !n.has(e.id))], p = null, u = false
  },
  GUILD_APPLY_BOOST_FAIL: function(e) {
    let {
      error: t
    } = e;
    u = false, p = t
  },
  GUILD_UNAPPLY_BOOST_SUCCESS: function(e) {
    let {
      boostId: t
    } = e;
    d = d.filter(e => e.id !== t), u = false
  },
  GUILD_UNAPPLY_BOOST_FAIL: function(e) {
    let {
      error: t
    } = e;
    u = false, S = t
  },
  USER_APPLIED_BOOSTS_FETCH_START: function() {
    s = true
  }
})