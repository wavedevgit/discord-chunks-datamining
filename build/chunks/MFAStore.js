/** Chunk was on 82411 **/
/** chunk id: 325067, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => S
});
var r, o, Chunk392711 = require("./392711.js"),
  a = require.n(Chunk392711),
  Chunk213919 = require("./213919.js"),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");
let d = false,
  u = [],
  p = "",
  h = false,
  f = {
    viewNonce: "",
    regenerateNonce: ""
  };
class _ extends(o = Chunk442837.ZP.Store) {
  getVerificationKey() {
    return p
  }
  getBackupCodes() {
    return u
  }
  get togglingSMS() {
    return d
  }
  getNonces() {
    return f
  }
  get hasSeenBackupPrompt() {
    return h
  }
}(r = "displayName") in _ ? Object.defineProperty(_, r, {
  value: "MFAStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : _[r] = "MFAStore";
let S = new _(Chunk570140.Z, {
  MFA_ENABLE_SUCCESS: function(e) {
    let {
      token: t,
      codes: n
    } = e;
    true !== t && s.setToken(t), u = n
  },
  MFA_DISABLE_SUCCESS: function(e) {
    let {
      token: t
    } = e;
    s.setToken(t)
  },
  MFA_SMS_TOGGLE: function() {
    d = true
  },
  MFA_SMS_TOGGLE_COMPLETE: function() {
    d = false
  },
  MFA_CLEAR_BACKUP_CODES: function() {
    u = []
  },
  MFA_VIEW_BACKUP_CODES: function(e) {
    let {
      codes: t,
      key: n
    } = e;
    u = a().sortBy(t, "code"), p = n
  },
  MFA_SEND_VERIFICATION_KEY: function(e) {
    let {
      nonces: t
    } = e;
    f = t
  },
  MFA_SEEN_BACKUP_CODE_PROMPT: function() {
    h = true
  },
  CONNECTION_OPEN: () => {}
})