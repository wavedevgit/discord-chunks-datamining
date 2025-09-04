/** Chunk was on web.js **/
/** chunk id: 905128, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => R
}), require("./388685.js"), require("./467055.js");
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk430824 = require("./430824.js"),
  Chunk693587 = require("./693587.js"),
  Chunk535396 = require("./535396.js"),
  Chunk981631 = require("./981631.js");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function d(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      u(e, t, n[t])
    })
  }
  return e
}

function f(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function _(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : f(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let p = 864e5,
  h = 36e5,
  m = {};

function g() {
  return {
    allPowerups: {},
    powerupCatalog: {},
    unlockedPowerups: {}
  }
}

function E(e) {
  let {
    guild: {
      id: t
    }
  } = e;
  m[t] = _(d({}, O(t)), {
    appliedBoosts: y(t)
  })
}

function b(e) {
  let {
    guildId: t
  } = e;
  m[t] = _(d({}, O(t)), {
    appliedBoosts: y(t)
  })
}

function y(e) {
  var t, n;
  let r = o.Z.getGuild(e),
    i = (null == r ? true : r.features.has(c.oNc.PREMIUM_TIER_3_OVERRIDE)) === true ? 0 : c.oCV[null != (t = null == r ? true : r.premiumTier) ? t : c.Eu4.NONE];
  for (let [e, t] of Object.entries(l.Hk)) {
    let a = e;
    (null == r || null == (n = r.premiumFeatures) ? true : n.features.includes(a)) && (null == t.includedInLevel || r.premiumTier < t.includedInLevel) && (i += t.boostPrice)
  }
  let a = s.Z.getStateForGuild(e);
  if ((null == a ? true : a.instances) != null && Object.keys(a.instances).length > 0)
    for (let e of Object.values(a.instances)) i += e.plan.cost;
  return i
}

function O(e) {
  if (null == m[e]) {
    let t = y(e);
    m[e] = _(d({}, g()), {
      appliedBoosts: t
    })
  }
  return m[e]
}

function v(e) {
  let {
    guildId: t,
    allPowerups: n,
    powerupCatalog: r
  } = e, i = O(t);
  m = _(d({}, m), {
    [t]: _(d({}, i), {
      allPowerups: n,
      powerupCatalog: r,
      catalogFetchCooldown: Date.now(),
      hasFetchedPowerupCatalog: true
    })
  })
}

function I(e) {
  let {
    guildId: t,
    unlockedPowerups: n
  } = e, r = O(t), i = y(t);
  m = _(d({}, m), {
    [t]: _(d({}, r), {
      unlockedPowerups: n,
      appliedBoosts: i,
      unlockedPowerupsFetchCooldown: Date.now(),
      hasFetchedUnlockedPowerups: true
    })
  })
}

function T(e, t) {
  let {
    guildId: n,
    entitlements: r
  } = e, i = O(n);
  r.forEach(e => {
    t ? i.unlockedPowerups[e.sku_id] = e : delete i.unlockedPowerups[e.sku_id]
  }), m = _(d({}, m), {
    [n]: _(d({}, i), {
      appliedBoosts: y(n)
    })
  })
}

function S(e) {
  T(e, true)
}

function A(e) {
  T(e, false)
}

function C() {
  m = {}
}
class N extends(r = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    null != e && (m = e)
  }
  getState() {
    return m
  }
  getStateForGuild(e) {
    return null != e ? m[e] : true
  }
  shouldFetchCatalogForGuild(e) {
    var t;
    let n = null == (t = m[e]) ? true : t.catalogFetchCooldown;
    return null == n || n + p < Date.now()
  }
  shouldFetchPowerupsForGuild(e) {
    var t;
    let n = null == (t = m[e]) ? true : t.unlockedPowerupsFetchCooldown;
    return null == n || n + h < Date.now()
  }
  hasFetchedPowerupCatalog(e) {
    var t;
    return null != e && (null == (t = m[e]) ? true : t.hasFetchedPowerupCatalog) === true
  }
  hasFetchedUnlockedPowerups(e) {
    var t;
    return null != e && (null == (t = m[e]) ? true : t.hasFetchedUnlockedPowerups) === true
  }
}
u(N, "displayName", "GuildPowerupsStore"), u(N, "persistKey", "GuildPowerupsStore"), u(N, "migrations", [e => null == e ? e : Object.fromEntries(Object.entries(e).filter(e => {
  let [t, n] = e;
  return null != n && "object" == typeof n
}).map(e => {
  var t, n, r;
  let [i, a] = e, o = a;
  return [i, _(d({}, o), {
    allPowerups: null != (t = o.allPowerups) ? t : {},
    powerupCatalog: null != (n = o.powerupCatalog) ? n : {},
    unlockedPowerups: null != (r = o.unlockedPowerups) ? r : {}
  })]
}))]);
let R = new N(Chunk570140.Z, {
  LOGOUT: C,
  GUILD_POWERUP_CATALOG_FETCH_SUCCESS: v,
  GUILD_UNLOCKED_POWERUPS_FETCH_SUCCESS: I,
  GUILD_POWERUP_ENTITLEMENTS_CREATE: S,
  GUILD_POWERUP_ENTITLEMENTS_DELETE: A,
  GUILD_UPDATE: E,
  PORTKEY_FETCH_INSTANCES_SUCCESS: b
})