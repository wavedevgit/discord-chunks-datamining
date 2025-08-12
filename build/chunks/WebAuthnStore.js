/** Chunk was on 20501 **/
/** chunk id: 15980, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
}), require("./388685.js");
var i, r, s, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk911969 = require("./911969.js");
let c = false,
  d = [];
class u extends(i = Chunk442837.ZP.Store) {
  hasFetchedCredentials() {
    return c
  }
  get hasCredentials() {
    return d.length > 0
  }
  getCredentials() {
    return d
  }
}
s = "WebAuthnStore", (r = "displayName") in u ? Object.defineProperty(u, r, {
  value: s,
  enumerable: true,
  configurable: true,
  writable: true
}) : u[r] = s;
let m = new u(Chunk570140.Z, {
  LOGOUT: function() {
    d = [], c = false
  },
  MFA_WEBAUTHN_CREDENTIALS_LOADED(e) {
    d = e.credentials, c = true
  },
  AUTHENTICATOR_CREATE(e) {
    let {
      credential: t
    } = e;
    t.type === o.Pi.WEBAUTHN && true === d.find(e => e.id === t.id) && (d = [...d, t])
  },
  AUTHENTICATOR_UPDATE(e) {
    let {
      credential: t
    } = e;
    t.type === o.Pi.WEBAUTHN && (d = d.map(e => e.id === t.id ? t : e))
  },
  AUTHENTICATOR_DELETE(e) {
    let {
      credential: t
    } = e;
    t.type === o.Pi.WEBAUTHN && (d = d.filter(e => e.id !== t.id))
  }
})