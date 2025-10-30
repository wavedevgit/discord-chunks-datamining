/** Chunk was on web.js **/
/** chunk id: 905128, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => N
}), require("./388685.js"), require("./467055.js");
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk430824 = require("./430824.js"),
  Chunk535396 = require("./535396.js"),
  Chunk981631 = require("./981631.js");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function u(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      c(e, t, n[t])
    })
  }
  return e
}

function d(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function f(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : d(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let _ = 864e5,
  p = 36e5,
  h = {};

function m() {
  return {
    allPowerups: {},
    powerupCatalog: {},
    unlockedPowerups: {}
  }
}

function g(e) {
  let {
    guild: {
      id: t
    }
  } = e;
  h[t] = f(u({}, y(t)), {
    appliedBoosts: b(t)
  })
}

function E(e) {
  let {
    guildId: t
  } = e;
  h[t] = f(u({}, y(t)), {
    appliedBoosts: b(t)
  })
}

function b(e) {
  var t, n, r, i;
  let a = o.Z.getGuild(e),
    c = (null == a ? true : a.features.has(l.GuildFeatures.PREMIUM_TIER_3_OVERRIDE)) === true ? 0 : l.oCV[null != (t = null == a ? true : a.premiumTier) ? t : l.Eu4.NONE];
  for (let [t, o] of Object.entries(s.Hk)) {
    let s = t;
    (null == a || null == (n = a.premiumFeatures) ? true : n.features.includes(s)) && (null == (i = null == (r = o.isEnabled) ? true : r.call(o, e)) || i) && (null == o.includedInLevel || a.premiumTier < o.includedInLevel) && (c += o.boostPrice)
  }
  return c
}

function y(e) {
  if (null == h[e]) {
    let t = b(e);
    h[e] = f(u({}, m()), {
      appliedBoosts: t
    })
  }
  return h[e]
}

function O(e) {
  let {
    guildId: t,
    allPowerups: n,
    powerupCatalog: r
  } = e, i = y(t);
  h = f(u({}, h), {
    [t]: f(u({}, i), {
      allPowerups: n,
      powerupCatalog: r,
      catalogFetchCooldown: Date.now(),
      hasFetchedPowerupCatalog: true
    })
  })
}

function v(e) {
  let {
    guildId: t,
    unlockedPowerups: n
  } = e, r = y(t), i = b(t);
  h = f(u({}, h), {
    [t]: f(u({}, r), {
      unlockedPowerups: n,
      appliedBoosts: i,
      unlockedPowerupsFetchCooldown: Date.now(),
      hasFetchedUnlockedPowerups: true
    })
  })
}

function I(e, t) {
  let {
    guildId: n,
    entitlements: r
  } = e, i = y(n);
  r.forEach(e => {
    t ? i.unlockedPowerups[e.sku_id] = e : delete i.unlockedPowerups[e.sku_id]
  }), h = f(u({}, h), {
    [n]: f(u({}, i), {
      appliedBoosts: b(n)
    })
  })
}

function S(e) {
  I(e, true)
}

function T(e) {
  I(e, false)
}

function A() {
  h = {}
}
class C extends(r = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    this.waitFor(o.Z), null != e && (h = e)
  }
  getState() {
    return h
  }
  getStateForGuild(e) {
    return null != e ? h[e] : true
  }
  shouldFetchCatalogForGuild(e) {
    var t;
    let n = null == (t = h[e]) ? true : t.catalogFetchCooldown;
    return null == n || n + _ < Date.now()
  }
  shouldFetchPowerupsForGuild(e) {
    var t;
    let n = null == (t = h[e]) ? true : t.unlockedPowerupsFetchCooldown;
    return null == n || n + p < Date.now()
  }
  hasFetchedPowerupCatalog(e) {
    var t;
    return null != e && (null == (t = h[e]) ? true : t.hasFetchedPowerupCatalog) === true
  }
  hasFetchedUnlockedPowerups(e) {
    var t;
    return null != e && (null == (t = h[e]) ? true : t.hasFetchedUnlockedPowerups) === true
  }
}
c(C, "displayName", "GuildPowerupsStore"), c(C, "persistKey", "GuildPowerupsStore"), c(C, "migrations", [e => null == e ? e : Object.fromEntries(Object.entries(e).filter(e => {
  let [t, n] = e;
  return null != n && "object" == typeof n
}).map(e => {
  var t, n, r;
  let [i, a] = e, o = a;
  return [i, f(u({}, o), {
    allPowerups: null != (t = o.allPowerups) ? t : {},
    powerupCatalog: null != (n = o.powerupCatalog) ? n : {},
    unlockedPowerups: null != (r = o.unlockedPowerups) ? r : {}
  })]
}))]);
let N = new C(Chunk570140.Z, {
  LOGOUT: A,
  GUILD_POWERUP_CATALOG_FETCH_SUCCESS: O,
  GUILD_BOOST_ENTITLEMENTS_FETCH_SUCCESS: v,
  GUILD_POWERUP_ENTITLEMENTS_CREATE: S,
  GUILD_POWERUP_ENTITLEMENTS_DELETE: T,
  GUILD_UPDATE: g,
  GAME_SERVER_FETCH_INSTANCES_SUCCESS: E
})