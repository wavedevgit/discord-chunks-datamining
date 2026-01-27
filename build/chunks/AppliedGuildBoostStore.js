/** Chunk was on 40543 **/
/** chunk id: 859241, original params: e,t,_ (module,exports,require) **/
require.d(exports, {
  A: () => C
}), require("./896048.js");
var n, l, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js");
let i = {},
  a = null,
  d = [],
  c = false,
  s = false,
  p = null,
  u = null;

function S() {
  s = true
}
class b extends(n = Chunk311907.Ay.Store) {
  getAppliedGuildBoostsForGuild(e) {
    return null != i[e] ? i[e].subscriptions : null
  }
  getLastFetchedAtForGuild(e) {
    return null != i[e] ? i[e].lastFetchedAt : null
  }
  getCurrentUserAppliedBoosts() {
    return d
  }
  getAppliedGuildBoost(e) {
    return d.find(t => t.id === e)
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
    return a
  }
  get isFetchingCurrentUserAppliedBoosts() {
    return c
  }
}(l = "displayName") in b ? Object.defineProperty(b, l, {
  value: "AppliedGuildBoostStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : b[l] = "AppliedGuildBoostStore";
let C = new b(Chunk73153.h, {
  GUILD_APPLIED_BOOSTS_FETCH_SUCCESS: function(e) {
    let {
      guildId: t,
      appliedBoosts: _
    } = e;
    i[t] = {
      subscriptions: _,
      lastFetchedAt: Date.now()
    }
  },
  USER_APPLIED_BOOSTS_FETCH_SUCCESS: function(e) {
    let {
      appliedGuildBoosts: t
    } = e;
    c = false, d = t
  },
  APPLIED_BOOSTS_COOLDOWN_FETCH_SUCCESS: function(e) {
    let {
      endsAt: t
    } = e;
    a = t
  },
  GUILD_UNAPPLY_BOOST_START: S,
  GUILD_APPLY_BOOST_START: S,
  GUILD_APPLY_BOOST_SUCCESS: function(e) {
    let {
      appliedGuildBoost: t
    } = e, _ = new Set(t.map(e => e.id));
    d = [...t, ...d.filter(e => !_.has(e.id))], p = null, s = false
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
    d = d.filter(e => e.id !== t), s = false
  },
  GUILD_UNAPPLY_BOOST_FAIL: function(e) {
    let {
      error: t
    } = e;
    s = false, u = t
  },
  USER_APPLIED_BOOSTS_FETCH_START: function() {
    c = true
  }
})