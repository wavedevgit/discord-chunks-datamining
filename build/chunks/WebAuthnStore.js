/** Chunk was on web.js **/
/** chunk id: 976910, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => y
}), require("./896048.js");
var r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk155718 = require("./155718.js");

function o(e, t, n) {
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

function h(e) {
  let {
    credential: t
  } = e;
  if (t.type !== s.Wq.WEBAUTHN || true !== c.find(e => e.id === t.id)) returnfalse;
  c = [...c, t]
}

function m(e) {
  let {
    credential: t
  } = e;
  if (t.type !== s.Wq.WEBAUTHN) returnfalse;
  c = c.map(e => e.id === t.id ? t : e)
}

function g(e) {
  let {
    credential: t
  } = e;
  if (t.type !== s.Wq.WEBAUTHN) returnfalse;
  c = c.filter(e => e.id !== t.id)
}
class E extends(r = Chunk311907.Ay.Store) {
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
o(E, "displayName", "WebAuthnStore");
let y = new E(Chunk73153.h, {
  LOGOUT: d,
  MFA_WEBAUTHN_CREDENTIALS_LOADED: _,
  AUTHENTICATOR_CREATE: h,
  AUTHENTICATOR_UPDATE: m,
  AUTHENTICATOR_DELETE: g,
  WEBAUTHN_TRIGGER_REGISTER: f,
  WEBAUTHN_CLEAR_REGISTER_TRIGGER: p
})