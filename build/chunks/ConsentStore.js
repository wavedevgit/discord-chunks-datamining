/** Chunk was on web.js **/
/** chunk id: 480294, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => E
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
let l = false,
  c = false,
  u = {},
  d = null;

function f(e) {
  let {
    consents: t
  } = e;
  null != t && (u = s({}, u, t), c = true)
}

function p(e) {
  let {
    consents: t
  } = e;
  u = s({}, t), l = true
}

function _(e) {
  let {
    consents: t
  } = e;
  u = s({}, t), l = true
}

function m(e) {
  d = e.consentRequired
}

function h() {
  d = null
}
class g extends(r = Chunk442837.ZP.Store) {
  hasConsented(e) {
    return null != u[e] && u[e].consented
  }
  get consents() {
    return u
  }
  get fetchedConsents() {
    return l
  }
  get receivedConsentsInConnectionOpen() {
    return c
  }
  getAuthenticationConsentRequired() {
    return d
  }
}
o(g, "displayName", "ConsentStore");
let E = new g(Chunk570140.Z, {
  CONNECTION_OPEN: f,
  OVERLAY_INITIALIZE: p,
  UPDATE_CONSENTS: _,
  SET_CONSENT_REQUIRED: m,
  LOGOUT: h
})