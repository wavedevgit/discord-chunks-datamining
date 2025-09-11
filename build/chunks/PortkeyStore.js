/** Chunk was on 85683 **/
/** chunk id: 693587, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
});
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function s(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      o(e, t, n[t])
    })
  }
  return e
}

function l(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let c = {};

function d(e) {
  return null == c[e] && (c[e] = {
    catalog: {},
    instances: {},
    entitlements: {}
  }), c[e]
}
class u extends(r = Chunk442837.ZP.Store) {
  getState() {
    return c
  }
  getStateForGuild(e) {
    return null != e ? c[e] : true
  }
  shouldFetchCatalogForGuild(e) {
    var t;
    let n = null == (t = c[e]) ? true : t.catalogFetchCooldown;
    return null == n || n + 864e5 < Date.now()
  }
  shouldFetchInstancesForGuild(e) {
    var t;
    let n = null == (t = c[e]) ? true : t.instancesFetchCooldown;
    return null == n || n + 36e5 < Date.now()
  }
  hasFetchedCatalog(e) {
    var t;
    return null != e && (null == (t = c[e]) ? true : t.hasFetchedCatalog) === true
  }
  hasFetchedInstances(e) {
    var t;
    return null != e && (null == (t = c[e]) ? true : t.hasFetchedInstances) === true
  }
}
o(u, "displayName", "PortkeyStore");
let p = new u(Chunk570140.Z, {
  LOGOUT: function() {
    c = {}
  },
  PORTKEY_FETCH_CATALOG_SUCCESS: function(e) {
    let {
      guildId: t,
      catalog: n
    } = e;
    c = l(s({}, c), {
      [t]: l(s({}, d(t)), {
        catalog: n,
        hasFetchedCatalog: true
      })
    })
  },
  PORTKEY_FETCH_INSTANCES_SUCCESS: function(e) {
    let {
      guildId: t,
      instances: n
    } = e;
    c = l(s({}, c), {
      [t]: l(s({}, d(t)), {
        instances: n,
        hasFetchedInstances: true
      })
    })
  },
  GUILD_BOOST_ENTITLEMENTS_FETCH_SUCCESS: function(e) {
    let {
      guildId: t,
      unlockedGameServers: n
    } = e;
    c = l(s({}, c), {
      [t]: l(s({}, d(t)), {
        entitlements: n
      })
    })
  }
})