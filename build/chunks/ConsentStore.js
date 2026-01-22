/** Chunk was on web.js **/
/** chunk id: 153488, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => E
});
var r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function o(e) {
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
let l = false,
  c = false,
  u = {},
  d = null;

function f(e) {
  let {
    consents: t
  } = e;
  null != t && (u = o({}, u, t), c = true)
}

function p(e) {
  let {
    consents: t
  } = e;
  u = o({}, t), l = true
}

function _(e) {
  let {
    consents: t
  } = e;
  u = o({}, t), l = true
}

function h(e) {
  d = e.consentRequired
}

function m() {
  d = null
}
class g extends(r = Chunk311907.Ay.Store) {
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
s(g, "displayName", "ConsentStore");
let E = new g(Chunk73153.h, {
  CONNECTION_OPEN: f,
  OVERLAY_INITIALIZE: p,
  UPDATE_CONSENTS: _,
  SET_CONSENT_REQUIRED: h,
  LOGOUT: m
})