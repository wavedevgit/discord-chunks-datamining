/** Chunk was on 7384 **/
/** chunk id: 15980, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
}), require("./388685.js");
var i, r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk911969 = require("./911969.js");
let o = false,
  c = [];
class d extends(i = Chunk442837.ZP.Store) {
  hasFetchedCredentials() {
    return o
  }
  get hasCredentials() {
    return c.length > 0
  }
  getCredentials() {
    return c
  }
}(r = "displayName") in d ? Object.defineProperty(d, r, {
  value: "WebAuthnStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : d[r] = "WebAuthnStore";
let u = new d(Chunk570140.Z, {
  LOGOUT: function() {
    c = [], o = false
  },
  MFA_WEBAUTHN_CREDENTIALS_LOADED(e) {
    c = e.credentials, o = true
  },
  AUTHENTICATOR_CREATE(e) {
    let {
      credential: t
    } = e;
    t.type === l.Pi.WEBAUTHN && true === c.find(e => e.id === t.id) && (c = [...c, t])
  },
  AUTHENTICATOR_UPDATE(e) {
    let {
      credential: t
    } = e;
    t.type === l.Pi.WEBAUTHN && (c = c.map(e => e.id === t.id ? t : e))
  },
  AUTHENTICATOR_DELETE(e) {
    let {
      credential: t
    } = e;
    t.type === l.Pi.WEBAUTHN && (c = c.filter(e => e.id !== t.id))
  }
})