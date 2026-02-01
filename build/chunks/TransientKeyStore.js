/** Chunk was on 61344 **/
/** chunk id: 440976, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => c
}), require("./896048.js"), require("./927092.js"), require("./212978.js"), require("./201528.js"), require("./393431.js"), require("./752391.js"), require("./532706.js"), require("./42231.js"), require("./232424.js"), require("./757074.js"), require("./949626.js"), require("./767709.js"), require("./65162.js");
var l, r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js");
let s = new Map;
class o extends(l = Chunk311907.Ay.Store) {
  getUsers() {
    return s
  }
  isKeyVerified(e, t) {
    let n = s.get(e);
    if (null == t || null == n || n.length !== t.length) returnfalse;
    for (let e = 0; e < t.length; e++)
      if (t[e] !== n[e]) returnfalse;
    returntrue
  }
}(r = "displayName") in o ? Object.defineProperty(o, r, {
  value: "TransientKeyStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : o[r] = "TransientKeyStore";
let c = new o(Chunk73153.h, {
  CONNECTION_OPEN: function() {
    s.clear()
  },
  SECURE_FRAMES_TRANSIENT_KEY_CREATE: function(e) {
    let {
      userId: t,
      key: n
    } = e, l = new Uint8Array(n);
    s.set(t, l)
  },
  SECURE_FRAMES_TRANSIENT_KEY_DELETE: function(e) {
    let {
      userId: t
    } = e;
    return s.delete(t)
  }
})