/** Chunk was on web.js **/
/** chunk id: 15980, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
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
  c = [];

function u() {
  c = [], l = false
}
class d extends(r = Chunk442837.ZP.Store) {
  hasFetchedCredentials() {
    return l
  }
  get hasCredentials() {
    return c.length > 0
  }
  getCredentials() {
    return c
  }
}
s(d, "displayName", "WebAuthnStore");
let f = new d(Chunk570140.Z, {
  LOGOUT: u,
  MFA_WEBAUTHN_CREDENTIALS_LOADED(e) {
    c = e.credentials, l = true
  },
  AUTHENTICATOR_CREATE(e) {
    let {
      credential: t
    } = e;
    t.type === a.Pi.WEBAUTHN && true === c.find(e => e.id === t.id) && (c = [...c, t])
  },
  AUTHENTICATOR_UPDATE(e) {
    let {
      credential: t
    } = e;
    t.type === a.Pi.WEBAUTHN && (c = c.map(e => e.id === t.id ? t : e))
  },
  AUTHENTICATOR_DELETE(e) {
    let {
      credential: t
    } = e;
    t.type === a.Pi.WEBAUTHN && (c = c.filter(e => e.id !== t.id))
  }
})