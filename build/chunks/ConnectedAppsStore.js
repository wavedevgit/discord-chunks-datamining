/** Chunk was on web.js **/
/** chunk id: 134861, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => m
}), require("./896048.js");
var r, Chunk735438 = require("./735438.js"),
  a = require.n(Chunk735438),
  Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function c(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      l(e, t, n[t])
    })
  }
  return e
}
let u = {};

function d(e) {
  let {
    application: t
  } = e;
  if (null == t.id) returnfalse;
  let n = t.id;
  null == u[n] && (u[n] = {
    count: 0,
    id: t.id,
    name: t.name,
    icon: t.icon,
    coverImage: t.coverImage,
    authenticated: false
  }), u[n].count++
}

function f(e) {
  let {
    application: t
  } = e;
  null != t.id && null != u[t.id] && (u[t.id].authenticated = true)
}

function p(e) {
  let {
    application: t
  } = e;
  null != t.id && null != u[t.id] && (u[t.id].count--, 0 === u[t.id].count && delete u[t.id])
}

function _(e) {
  let {
    connectedApps: t
  } = e;
  u = c({}, t)
}
class h extends(r = Chunk311907.Ay.Store) {
  isConnected(e) {
    return null != u[e]
  }
  get connections() {
    return a().values(u)
  }
  getApplication(e) {
    return u[e]
  }
  getAllConnections() {
    return u
  }
}
l(h, "displayName", "ConnectedAppsStore");
let m = new h(Chunk73153.h, {
  OVERLAY_INITIALIZE: _,
  RPC_APP_CONNECTED: d,
  RPC_APP_AUTHENTICATED: f,
  RPC_APP_DISCONNECTED: p
})