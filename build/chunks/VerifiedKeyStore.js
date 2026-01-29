/** Chunk was on 16674 **/
/** chunk id: 787392, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  A: () => f
}), require("./927092.js"), require("./212978.js"), require("./201528.js"), require("./393431.js"), require("./752391.js"), require("./532706.js"), require("./42231.js"), require("./232424.js"), require("./757074.js"), require("./949626.js"), require("./767709.js"), require("./65162.js"), require("./896048.js");
var n, Chunk311907 = require("./311907.js"),
  Chunk149597 = require("./149597.js"),
  Chunk73153 = require("./73153.js"),
  Chunk661191 = require("./661191.js");

function a(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = r, e
}
let c = {};
class o extends(n = Chunk311907.Ay.PersistedStore) {
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
    var r;
    let n = (0, u.uo)(t);
    return null == (r = c[e]) ? true : r[n]
  }
  isKeyVerified(e, t) {
    return null != this.getKeyTrustedAt(e, t)
  }
  getUserIds() {
    return s.default.keys(c)
  }
  getUserVerifiedKeys(e) {
    return c[e]
  }
}
a(o, "displayName", "VerifiedKeyStore"), a(o, "persistKey", "VerifiedKeyStore");
let f = new o(Chunk73153.h, {
  SECURE_FRAMES_VERIFIED_KEY_CREATE: function(e) {
    var t;
    let r, {
        userId: n,
        key: l
      } = e,
      i = (r = null != (t = c[n]) ? t : {}, c[n] = r, r),
      s = new Uint8Array(l);
    i[(0, u.uo)(s)] = Date.now()
  },
  SECURE_FRAMES_VERIFIED_KEY_DELETE: function(e) {
    let {
      userId: t,
      serializedKey: r
    } = e, n = c[t];
    if (null == n) returnfalse;
    let l = delete n[r],
      u = false;
    return 0 === Object.keys(n).length && (delete c[t], u = true), l || u
  },
  SECURE_FRAMES_USER_VERIFIED_KEYS_DELETE: function(e) {
    let {
      userId: t
    } = e;
    return null != c[t] && delete c[t]
  }
})