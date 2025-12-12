/** Chunk was on web.js **/
/** chunk id: 651941, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => m
}), require("./410992.js"), require("./227481.js"), require("./730884.js"), require("./20464.js"), require("./341884.js"), require("./364341.js"), require("./629680.js"), require("./505025.js"), require("./918970.js"), require("./121784.js"), require("./644351.js"), require("./146733.js"), require("./388685.js");
var r, Chunk442837 = require("./442837.js"),
  Chunk974167 = require("./974167.js"),
  Chunk570140 = require("./570140.js"),
  Chunk709054 = require("./709054.js");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let c = {};

function u(e) {
  var t;
  let n = null != (t = c[e]) ? t : {};
  return c[e] = n, n
}

function d(e) {
  let {
    userId: t,
    key: n
  } = e, r = u(t), i = new Uint8Array(n);
  r[(0, a.MK)(i)] = Date.now()
}

function f(e) {
  let {
    userId: t,
    serializedKey: n
  } = e, r = c[t];
  if (null == r) returnfalse;
  let i = delete r[n],
    a = false;
  return 0 === Object.keys(r).length && (delete c[t], a = true), i || a
}

function p(e) {
  let {
    userId: t
  } = e;
  return null != c[t] && delete c[t]
}
class _ extends(r = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    var t;
    c = null != (t = null == e ? true : e.users) ? t : {}
  }
  getState() {
    return {
      users: c
    }
  }
  getKeyTrustedAt(e, t) {
    var n;
    let r = (0, a.MK)(t);
    return null == (n = c[e]) ? true : n[r]
  }
  isKeyVerified(e, t) {
    return null != this.getKeyTrustedAt(e, t)
  }
  getUserIds() {
    return Chunk709054.default.keys(c)
  }
  getUserVerifiedKeys(e) {
    return c[e]
  }
}
l(_, "displayName", "VerifiedKeyStore"), l(_, "persistKey", "VerifiedKeyStore");
let m = new _(Chunk570140.Z, {
  SECURE_FRAMES_VERIFIED_KEY_CREATE: d,
  SECURE_FRAMES_VERIFIED_KEY_DELETE: f,
  SECURE_FRAMES_USER_VERIFIED_KEYS_DELETE: p
})