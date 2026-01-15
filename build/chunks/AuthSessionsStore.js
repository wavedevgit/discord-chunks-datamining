/** Chunk was on web.js **/
/** chunk id: 673096, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => h
}), require("./388685.js");
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
let u = [];

function d() {
  u = []
}

function f(e) {
  let {
    sessions: t
  } = e;
  u = t.map(e => c(s({}, e), {
    approx_last_used_time: new Date(e.approx_last_used_time)
  }))
}

function p(e) {
  let {
    sessionIdHashes: t
  } = e, n = [...u], r = false;
  for (let e of t) {
    let t = n.findIndex(t => t.id_hash === e);
    t >= 0 && (n.splice(t, 1), r = true)
  }
  if (!r) returnfalse;
  u = n
}
class _ extends(r = Chunk442837.ZP.Store) {
  getSessions() {
    return u
  }
}
o(_, "displayName", "AuthSessionsStore");
let h = new _(Chunk570140.Z, {
  LOGOUT: d,
  LOGIN_SUCCESS: d,
  FETCH_AUTH_SESSIONS_SUCCESS: f,
  LOGOUT_AUTH_SESSIONS_SUCCESS: p
})