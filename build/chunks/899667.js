/** Chunk was on 40580 **/
"use strict";
r.d(t, {
  Z: () => m
}), r(47120);
var n, s, i, o = r(442837),
  l = r(570140);
let a = {},
  c = null,
  u = [],
  d = !1,
  p = !1,
  f = null,
  b = null;

function g() {
  p = !0
}
class O extends(n = o.ZP.Store) {
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
    return p
  }
  get applyBoostError() {
    return f
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
i = "AppliedGuildBoostStore", (s = "displayName") in O ? Object.defineProperty(O, s, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : O[s] = i;
let m = new O(l.Z, {
  GUILD_APPLIED_BOOSTS_FETCH_SUCCESS: function(e) {
    let {
      guildId: t,
      appliedBoosts: r
    } = e;
    a[t] = {
      subscriptions: r,
      lastFetchedAt: Date.now()
    }
  },
  USER_APPLIED_BOOSTS_FETCH_SUCCESS: function(e) {
    let {
      appliedGuildBoosts: t
    } = e;
    d = !1, u = t
  },
  APPLIED_BOOSTS_COOLDOWN_FETCH_SUCCESS: function(e) {
    let {
      endsAt: t
    } = e;
    c = t
  },
  GUILD_UNAPPLY_BOOST_START: g,
  GUILD_APPLY_BOOST_START: g,
  GUILD_APPLY_BOOST_SUCCESS: function(e) {
    let {
      appliedGuildBoost: t
    } = e, r = new Set(t.map(e => e.id));
    u = [...t, ...u.filter(e => !r.has(e.id))], f = null, p = !1
  },
  GUILD_APPLY_BOOST_FAIL: function(e) {
    let {
      error: t
    } = e;
    p = !1, f = t
  },
  GUILD_UNAPPLY_BOOST_SUCCESS: function(e) {
    let {
      boostId: t
    } = e;
    u = u.filter(e => e.id !== t), p = !1
  },
  GUILD_UNAPPLY_BOOST_FAIL: function(e) {
    let {
      error: t
    } = e;
    p = !1, b = t
  },
  USER_APPLIED_BOOSTS_FETCH_START: function() {
    d = !0
  }
})