/** Chunk was on 31748 **/
/** chunk id: 440976, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => c
}), require("./896048.js"), require("./927092.js"), require("./212978.js"), require("./201528.js"), require("./393431.js"), require("./752391.js"), require("./532706.js"), require("./42231.js"), require("./232424.js"), require("./757074.js"), require("./949626.js"), require("./767709.js"), require("./65162.js");
var r, l, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js");
let o = new Map;
class s extends(r = Chunk311907.Ay.Store) {
  getUsers() {
    return o
  }
  isKeyVerified(e, t) {
    let n = o.get(e);
    if (null == t || null == n || n.length !== t.length) returnfalse;
    for (let e = 0; e < t.length; e++)
      if (t[e] !== n[e]) returnfalse;
    returntrue
  }
}(l = "displayName") in s ? Object.defineProperty(s, l, {
  value: "TransientKeyStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : s[l] = "TransientKeyStore";
let c = new s(Chunk73153.h, {
  CONNECTION_OPEN: function() {
    o.clear()
  },
  SECURE_FRAMES_TRANSIENT_KEY_CREATE: function(e) {
    let {
      userId: t,
      key: n
    } = e, r = new Uint8Array(n);
    o.set(t, r)
  },
  SECURE_FRAMES_TRANSIENT_KEY_DELETE: function(e) {
    let {
      userId: t
    } = e;
    return o.delete(t)
  }
})