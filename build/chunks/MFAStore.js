/** Chunk was on web.js **/
/** chunk id: 325067, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => I
});
var r, Chunk392711 = require("./392711.js"),
  a = require.n(Chunk392711),
  Chunk213919 = require("./213919.js"),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let u = false,
  d = [],
  f = "",
  p = false,
  _ = {
    viewNonce: "",
    regenerateNonce: ""
  };

function h() {
  p = true
}

function m(e) {
  let {
    token: t,
    codes: n
  } = e;
  true !== t && o.setToken(t), d = n
}

function g(e) {
  let {
    token: t
  } = e;
  o.setToken(t)
}

function E() {
  u = true
}

function b() {
  u = false
}

function y(e) {
  let {
    nonces: t
  } = e;
  _ = t
}

function O(e) {
  let {
    codes: t,
    key: n
  } = e;
  d = a().sortBy(t, "code"), f = n
}

function v() {
  d = []
}
class S extends(r = Chunk442837.ZP.Store) {
  getVerificationKey() {
    return f
  }
  getBackupCodes() {
    return d
  }
  get togglingSMS() {
    return u
  }
  getNonces() {
    return _
  }
  get hasSeenBackupPrompt() {
    return p
  }
}
c(S, "displayName", "MFAStore");
let I = new S(Chunk570140.Z, {
  MFA_ENABLE_SUCCESS: m,
  MFA_DISABLE_SUCCESS: g,
  MFA_SMS_TOGGLE: E,
  MFA_SMS_TOGGLE_COMPLETE: b,
  MFA_CLEAR_BACKUP_CODES: v,
  MFA_VIEW_BACKUP_CODES: O,
  MFA_SEND_VERIFICATION_KEY: y,
  MFA_SEEN_BACKUP_CODE_PROMPT: h,
  CONNECTION_OPEN: () => {}
})