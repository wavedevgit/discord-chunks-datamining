/** Chunk was on web.js **/
/** chunk id: 15980, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => b
}), require("./388685.js");
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk911969 = require("./911969.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let l = false,
  c = [],
  u = false;

function d() {
  c = [], l = false, u = false
}

function f() {
  if (u) returnfalse;
  u = true
}

function p() {
  if (!u) returnfalse;
  u = false
}

function _(e) {
  let {
    credentials: t
  } = e, n = false;
  return c !== t && (c = t, n = true), l || (l = true, n = true), n
}

function m(e) {
  let {
    credential: t
  } = e;
  if (t.type !== a.Pi.WEBAUTHN || true !== c.find(e => e.id === t.id)) returnfalse;
  c = [...c, t]
}

function h(e) {
  let {
    credential: t
  } = e;
  if (t.type !== a.Pi.WEBAUTHN) returnfalse;
  c = c.map(e => e.id === t.id ? t : e)
}

function g(e) {
  let {
    credential: t
  } = e;
  if (t.type !== a.Pi.WEBAUTHN) returnfalse;
  c = c.filter(e => e.id !== t.id)
}
class E extends(r = Chunk442837.ZP.Store) {
  hasFetchedCredentials() {
    return l
  }
  get hasCredentials() {
    return c.length > 0
  }
  getCredentials() {
    return c
  }
  hasPendingRegisterTrigger() {
    return u
  }
}
s(E, "displayName", "WebAuthnStore");
let b = new E(Chunk570140.Z, {
  LOGOUT: d,
  MFA_WEBAUTHN_CREDENTIALS_LOADED: _,
  AUTHENTICATOR_CREATE: m,
  AUTHENTICATOR_UPDATE: h,
  AUTHENTICATOR_DELETE: g,
  WEBAUTHN_TRIGGER_REGISTER: f,
  WEBAUTHN_CLEAR_REGISTER_TRIGGER: p
})