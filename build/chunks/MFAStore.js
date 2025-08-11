/** Chunk was on 75708 **/
/** chunk id: 325067, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
});
var i, r, s, Chunk392711 = require("./392711.js"),
  l = require.n(Chunk392711),
  Chunk213919 = require("./213919.js"),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");
let u = false,
  m = [],
  p = "",
  g = false,
  h = {
    viewNonce: "",
    regenerateNonce: ""
  };
class f extends(s = Chunk442837.ZP.Store) {
  getVerificationKey() {
    return p
  }
  getBackupCodes() {
    return m
  }
  get togglingSMS() {
    return u
  }
  getNonces() {
    return h
  }
  get hasSeenBackupPrompt() {
    return g
  }
}
r = "MFAStore", (i = "displayName") in f ? Object.defineProperty(f, i, {
  value: r,
  enumerable: true,
  configurable: true,
  writable: true
}) : f[i] = r;
let b = new f(Chunk570140.Z, {
  MFA_ENABLE_SUCCESS: function(e) {
    let {
      token: t,
      codes: n
    } = e;
    true !== t && o.setToken(t), m = n
  },
  MFA_DISABLE_SUCCESS: function(e) {
    let {
      token: t
    } = e;
    o.setToken(t)
  },
  MFA_SMS_TOGGLE: function() {
    u = true
  },
  MFA_SMS_TOGGLE_COMPLETE: function() {
    u = false
  },
  MFA_CLEAR_BACKUP_CODES: function() {
    m = []
  },
  MFA_VIEW_BACKUP_CODES: function(e) {
    let {
      codes: t,
      key: n
    } = e;
    m = l().sortBy(t, "code"), p = n
  },
  MFA_SEND_VERIFICATION_KEY: function(e) {
    let {
      nonces: t
    } = e;
    h = t
  },
  MFA_SEEN_BACKUP_CODE_PROMPT: function() {
    g = true
  },
  CONNECTION_OPEN: () => {}
})