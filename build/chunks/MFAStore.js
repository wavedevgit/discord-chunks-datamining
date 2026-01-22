/** Chunk was on web.js **/
/** chunk id: 670492, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => S
});
var r, Chunk735438 = require("./735438.js"),
  a = require.n(Chunk735438),
  Chunk247775 = require("./247775.js"),
  Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js");

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
  true !== t && s.setToken(t), d = n
}

function g(e) {
  let {
    token: t
  } = e;
  s.setToken(t)
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

function A() {
  d = []
}
class v extends(r = Chunk311907.Ay.Store) {
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
c(v, "displayName", "MFAStore");
let S = new v(Chunk73153.h, {
  MFA_ENABLE_SUCCESS: m,
  MFA_DISABLE_SUCCESS: g,
  MFA_SMS_TOGGLE: E,
  MFA_SMS_TOGGLE_COMPLETE: b,
  MFA_CLEAR_BACKUP_CODES: A,
  MFA_VIEW_BACKUP_CODES: O,
  MFA_SEND_VERIFICATION_KEY: y,
  MFA_SEEN_BACKUP_CODE_PROMPT: h,
  CONNECTION_OPEN: () => {}
})