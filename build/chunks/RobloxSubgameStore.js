/** Chunk was on web.js **/
/** chunk id: 802512, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => h
});
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk973616 = require("./973616.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function l(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      s(e, t, n[t])
    })
  }
  return e
}
let c = {},
  u = {
    application: null,
    subgameInfo: null
  };

function d(e) {
  let {
    subgameInfo: t
  } = e;
  if (null == t || null == t.universeId) {
    u = {
      application: null,
      subgameInfo: null
    };
    return
  }
  u.subgameInfo = t, null != c[t.universeId] && null != c[t.universeId].application && (u.application = c[t.universeId].application), u = l({}, u)
}

function f(e) {
  var t;
  let {
    universeId: n,
    application: r
  } = e;
  c[n] = {
    application: r,
    lastFetchedTime: Date.now()
  }, c = l({}, c), null != r && (null == (t = u.subgameInfo) ? true : t.universeId) === n && (u.application = r, u = l({}, u))
}

function _(e) {
  let {
    universeId: t
  } = e;
  c[t] = {
    application: null,
    lastFetchedTime: Date.now()
  }, c = l({}, c)
}
class p extends(r = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    var t;
    c = {}, Object.keys(null != (t = null == e ? true : e.universeIdToApplicationInfo) ? t : {}).forEach(t => {
      (null == e ? true : e.universeIdToApplicationInfo[t]) != null && (null == e ? true : e.universeIdToApplicationInfo[t].lastFetchedTime) != null && (c[t] = {
        application: (null == e ? true : e.universeIdToApplicationInfo[t].application) != null ? new a.ZP(null == e ? true : e.universeIdToApplicationInfo[t].application) : null,
        lastFetchedTime: null == e ? true : e.universeIdToApplicationInfo[t].lastFetchedTime
      })
    })
  }
  getCurrentSubgameInfo() {
    return u
  }
  getState() {
    return {
      universeIdToApplicationInfo: c
    }
  }
}
s(p, "displayName", "RobloxSubgameStore"), s(p, "persistKey", "robloxSubgame");
let h = new p(Chunk570140.Z, {
  ROBLOX_SUBGAME_UPDATE: d,
  ROBLOX_SUBGAME_APPLICATION_FETCH_SUCCESS: f,
  ROBLOX_SUBGAME_APPLICATION_FETCH_FAILURE: _
})