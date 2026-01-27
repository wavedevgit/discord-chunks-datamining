/** Chunk was on 78811 **/
/** chunk id: 670492, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => y
});
var n, o, Chunk735438 = require("./735438.js"),
  i = require.n(Chunk735438),
  Chunk247775 = require("./247775.js"),
  Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js");
let d = false,
  u = [],
  p = "",
  h = false,
  f = {
    viewNonce: "",
    regenerateNonce: ""
  };
class _ extends(o = Chunk311907.Ay.Store) {
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
}(n = "displayName") in _ ? Object.defineProperty(_, n, {
  value: "MFAStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : _[n] = "MFAStore";
let y = new _(Chunk73153.h, {
  MFA_ENABLE_SUCCESS: function(e) {
    let {
      token: t,
      codes: r
    } = e;
    true !== t && a.setToken(t), u = r
  },
  MFA_DISABLE_SUCCESS: function(e) {
    let {
      token: t
    } = e;
    a.setToken(t)
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
      key: r
    } = e;
    u = i().sortBy(t, "code"), p = r
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