/** Chunk was on 69422 **/
"use strict";
r.d(t, {
  Z: () => S
});
var n, o, i, a = r(392711),
  s = r.n(a),
  c = r(213919),
  l = r(442837),
  d = r(570140);
let u = !1,
  p = [],
  h = "",
  _ = !1,
  f = {
    viewNonce: "",
    regenerateNonce: ""
  };
class E extends(i = l.ZP.Store) {
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
    return f
  }
  get hasSeenBackupPrompt() {
    return _
  }
}
o = "MFAStore", (n = "displayName") in E ? Object.defineProperty(E, n, {
  value: o,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : E[n] = o;
let S = new E(d.Z, {
  MFA_ENABLE_SUCCESS: function(e) {
    let {
      token: t,
      codes: r
    } = e;
    void 0 !== t && c.setToken(t), p = r
  },
  MFA_DISABLE_SUCCESS: function(e) {
    let {
      token: t
    } = e;
    c.setToken(t)
  },
  MFA_SMS_TOGGLE: function() {
    u = !0
  },
  MFA_SMS_TOGGLE_COMPLETE: function() {
    u = !1
  },
  MFA_CLEAR_BACKUP_CODES: function() {
    p = []
  },
  MFA_VIEW_BACKUP_CODES: function(e) {
    let {
      codes: t,
      key: r
    } = e;
    p = s().sortBy(t, "code"), h = r
  },
  MFA_SEND_VERIFICATION_KEY: function(e) {
    let {
      nonces: t
    } = e;
    f = t
  },
  MFA_SEEN_BACKUP_CODE_PROMPT: function() {
    _ = !0
  }
})