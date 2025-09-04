/** Chunk was on web.js **/
/** chunk id: 693587, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => g
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
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function c(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : l(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let u = 864e5,
  d = 36e5,
  f = {};

function _() {
  f = {}
}

function p(e) {
  let {
    guildId: t,
    catalog: n
  } = e;
  f[t] = c(s({}, f[t]), {
    catalog: n,
    hasFetchedCatalog: true
  })
}

function h(e) {
  let {
    guildId: t,
    instances: n
  } = e;
  f[t] = c(s({}, f[t]), {
    instances: n,
    hasFetchedInstances: true
  })
}
class m extends(r = Chunk442837.ZP.Store) {
  getState() {
    return f
  }
  getStateForGuild(e) {
    return null != e ? f[e] : true
  }
  shouldFetchCatalogForGuild(e) {
    var t;
    let n = null == (t = f[e]) ? true : t.catalogFetchCooldown;
    return null == n || n + u < Date.now()
  }
  shouldFetchInstancesForGuild(e) {
    var t;
    let n = null == (t = f[e]) ? true : t.instancesFetchCooldown;
    return null == n || n + d < Date.now()
  }
  hasFetchedCatalog(e) {
    var t;
    return null != e && (null == (t = f[e]) ? true : t.hasFetchedCatalog) === true
  }
  hasFetchedInstances(e) {
    var t;
    return null != e && (null == (t = f[e]) ? true : t.hasFetchedInstances) === true
  }
}
o(m, "displayName", "PortkeyStore");
let g = new m(Chunk570140.Z, {
  LOGOUT: _,
  PORTKEY_FETCH_CATALOG_SUCCESS: p,
  PORTKEY_FETCH_INSTANCES_SUCCESS: h
})