/** Chunk was on web.js **/
/** chunk id: 645619, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => N
}), require("./896048.js"), require("./446912.js");
var r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk71393 = require("./71393.js"),
  Chunk568065 = require("./568065.js"),
  Chunk652215 = require("./652215.js");

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
let p = 864e5,
  _ = 36e5,
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
  h[t] = f(u({}, b(t)), {
    appliedBoosts: y(t)
  })
}

function E(e) {
  let {
    guildId: t
  } = e;
  h[t] = f(u({}, b(t)), {
    appliedBoosts: y(t)
  })
}

function y(e) {
  var t, n, r, i;
  let a = o.A.getGuild(e),
    c = (null == a ? true : a.features.has(l.GuildFeatures.PREMIUM_TIER_3_OVERRIDE)) === true ? 0 : l.M2T[null != (t = null == a ? true : a.premiumTier) ? t : l.TVA.NONE];
  for (let [t, o] of Object.entries(s.sy)) {
    let s = t;
    (null == a || null == (r = a.premiumFeatures) ? true : r.features.includes(s)) && (null == (n = null == (i = o.isEnabled) ? true : i.call(o, e)) || n) && (null == o.includedInLevel || a.premiumTier < o.includedInLevel) && (c += o.boostPrice)
  }
  return c
}

function b(e) {
  if (null == h[e]) {
    let t = y(e);
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
  } = e, i = b(t);
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
  } = e, r = b(t), i = y(t);
  h = f(u({}, h), {
    [t]: f(u({}, r), {
      unlockedPowerups: n,
      appliedBoosts: i,
      unlockedPowerupsFetchCooldown: Date.now(),
      hasFetchedUnlockedPowerups: true
    })
  })
}

function A(e, t) {
  let {
    guildId: n,
    entitlements: r
  } = e, i = b(n);
  r.forEach(e => {
    t ? i.unlockedPowerups[e.sku_id] = e : delete i.unlockedPowerups[e.sku_id]
  }), h = f(u({}, h), {
    [n]: f(u({}, i), {
      appliedBoosts: y(n)
    })
  })
}

function I(e) {
  A(e, true)
}

function S(e) {
  A(e, false)
}

function T() {
  h = {}
}
class C extends(r = Chunk311907.Ay.PersistedStore) {
  initialize(e) {
    this.waitFor(o.A), null != e && (h = e)
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
    return null == n || n + p < Date.now()
  }
  shouldFetchPowerupsForGuild(e) {
    var t;
    let n = null == (t = h[e]) ? true : t.unlockedPowerupsFetchCooldown;
    return null == n || n + _ < Date.now()
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
let N = new C(Chunk73153.h, {
  LOGOUT: T,
  GUILD_POWERUP_CATALOG_FETCH_SUCCESS: O,
  GUILD_BOOST_ENTITLEMENTS_FETCH_SUCCESS: v,
  GUILD_POWERUP_ENTITLEMENTS_CREATE: I,
  GUILD_POWERUP_ENTITLEMENTS_DELETE: S,
  GUILD_UPDATE: g,
  GAME_SERVER_FETCH_INSTANCES_SUCCESS: E
})