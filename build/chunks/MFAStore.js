/** Chunk was on 77720 **/
/** chunk id: 325067, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => m
});
var r, o, i, Chunk392711 = require("./392711.js"),
  s = require.n(Chunk392711),
  Chunk213919 = require("./213919.js"),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");
let u = false,
  p = [],
  h = "",
  f = false,
  _ = {
    viewNonce: "",
    regenerateNonce: ""
  };
class S extends(i = Chunk442837.ZP.Store) {
  getVerificationKey() {
    return h
  }
  getBackupCodes() {
    return p
  }
  get togglingSMS() {
    return u
  }
  getNonces() {
    return _
  }
  get hasSeenBackupPrompt() {
    return f
  }
}
o = "MFAStore", (r = "displayName") in S ? Object.defineProperty(S, r, {
  value: o,
  enumerable: true,
  configurable: true,
  writable: true
}) : S[r] = o;
let m = new S(Chunk570140.Z, {
  MFA_ENABLE_SUCCESS: function(e) {
    let {
      token: t,
      codes: n
    } = e;
    true !== t && l.setToken(t), p = n
  },
  MFA_DISABLE_SUCCESS: function(e) {
    let {
      token: t
    } = e;
    l.setToken(t)
  },
  MFA_SMS_TOGGLE: function() {
    u = true
  },
  MFA_SMS_TOGGLE_COMPLETE: function() {
    u = false
  },
  MFA_CLEAR_BACKUP_CODES: function() {
    p = []
  },
  MFA_VIEW_BACKUP_CODES: function(e) {
    let {
      codes: t,
      key: n
    } = e;
    p = s().sortBy(t, "code"), h = n
  },
  MFA_SEND_VERIFICATION_KEY: function(e) {
    let {
      nonces: t
    } = e;
    _ = t
  },
  MFA_SEEN_BACKUP_CODE_PROMPT: function() {
    f = true
  },
  CONNECTION_OPEN: () => {}
})