/** Chunk was on 69422 **/
"use strict";
n.d(t, {
  Z: () => S
});
var r, o, i, a = n(392711),
  s = n.n(a),
  l = n(213919),
  c = n(442837),
  d = n(570140);
let u = !1,
  p = [],
  h = "",
  _ = !1,
  E = {
    viewNonce: "",
    regenerateNonce: ""
  };
class f extends(i = c.ZP.Store) {
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
    return E
  }
  get hasSeenBackupPrompt() {
    return _
  }
}
o = "MFAStore", (r = "displayName") in f ? Object.defineProperty(f, r, {
  value: o,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : f[r] = o;
let S = new f(d.Z, {
  MFA_ENABLE_SUCCESS: function(e) {
    let {
      token: t,
      codes: n
    } = e;
    void 0 !== t && l.setToken(t), p = n
  },
  MFA_DISABLE_SUCCESS: function(e) {
    let {
      token: t
    } = e;
    l.setToken(t)
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
      key: n
    } = e;
    p = s().sortBy(t, "code"), h = n
  },
  MFA_SEND_VERIFICATION_KEY: function(e) {
    let {
      nonces: t
    } = e;
    E = t
  },
  MFA_SEEN_BACKUP_CODE_PROMPT: function() {
    _ = !0
  },
  CONNECTION_OPEN: () => {}
})