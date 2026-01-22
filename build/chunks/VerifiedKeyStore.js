/** Chunk was on web.js **/
/** chunk id: 787392, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => h
}), require("./927092.js"), require("./212978.js"), require("./201528.js"), require("./393431.js"), require("./752391.js"), require("./532706.js"), require("./42231.js"), require("./232424.js"), require("./757074.js"), require("./949626.js"), require("./767709.js"), require("./65162.js"), require("./896048.js");
var r, Chunk311907 = require("./311907.js"),
  Chunk149597 = require("./149597.js"),
  Chunk73153 = require("./73153.js"),
  Chunk661191 = require("./661191.js");

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
  r[(0, a.uo)(i)] = Date.now()
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
class _ extends(r = Chunk311907.Ay.PersistedStore) {
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
    let r = (0, a.uo)(t);
    return null == (n = c[e]) ? true : n[r]
  }
  isKeyVerified(e, t) {
    return null != this.getKeyTrustedAt(e, t)
  }
  getUserIds() {
    return o.default.keys(c)
  }
  getUserVerifiedKeys(e) {
    return c[e]
  }
}
l(_, "displayName", "VerifiedKeyStore"), l(_, "persistKey", "VerifiedKeyStore");
let h = new _(Chunk73153.h, {
  SECURE_FRAMES_VERIFIED_KEY_CREATE: d,
  SECURE_FRAMES_VERIFIED_KEY_DELETE: f,
  SECURE_FRAMES_USER_VERIFIED_KEYS_DELETE: p
})