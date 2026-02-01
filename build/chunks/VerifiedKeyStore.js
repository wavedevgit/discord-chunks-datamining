/** Chunk was on 88474 **/
/** chunk id: 787392, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => d
}), require("./927092.js"), require("./212978.js"), require("./201528.js"), require("./393431.js"), require("./752391.js"), require("./532706.js"), require("./42231.js"), require("./232424.js"), require("./757074.js"), require("./949626.js"), require("./767709.js"), require("./65162.js"), require("./896048.js");
var r, Chunk311907 = require("./311907.js"),
  Chunk149597 = require("./149597.js"),
  Chunk73153 = require("./73153.js"),
  Chunk661191 = require("./661191.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let c = {};
class u extends(r = Chunk311907.Ay.PersistedStore) {
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
    let r = (0, i.uo)(t);
    return null == (n = c[e]) ? true : n[r]
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
o(u, "displayName", "VerifiedKeyStore"), o(u, "persistKey", "VerifiedKeyStore");
let d = new u(Chunk73153.h, {
  SECURE_FRAMES_VERIFIED_KEY_CREATE: function(e) {
    var t;
    let n, {
        userId: r,
        key: l
      } = e,
      a = (n = null != (t = c[r]) ? t : {}, c[r] = n, n),
      s = new Uint8Array(l);
    a[(0, i.uo)(s)] = Date.now()
  },
  SECURE_FRAMES_VERIFIED_KEY_DELETE: function(e) {
    let {
      userId: t,
      serializedKey: n
    } = e, r = c[t];
    if (null == r) returnfalse;
    let l = delete r[n],
      i = false;
    return 0 === Object.keys(r).length && (delete c[t], i = true), l || i
  },
  SECURE_FRAMES_USER_VERIFIED_KEYS_DELETE: function(e) {
    let {
      userId: t
    } = e;
    return null != c[t] && delete c[t]
  }
})