/** Chunk was on 86642 **/
/** chunk id: 729303, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
}), require("./388685.js"), require("./410992.js"), require("./227481.js"), require("./730884.js"), require("./20464.js"), require("./341884.js"), require("./364341.js"), require("./629680.js"), require("./505025.js"), require("./918970.js"), require("./121784.js"), require("./644351.js"), require("./146733.js");
var i, r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");
let o = new Map;
class s extends(i = Chunk442837.ZP.Store) {
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
}(r = "displayName") in s ? Object.defineProperty(s, r, {
  value: "TransientKeyStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : s[r] = "TransientKeyStore";
let c = new s(Chunk570140.Z, {
  CONNECTION_OPEN: function() {
    o.clear()
  },
  SECURE_FRAMES_TRANSIENT_KEY_CREATE: function(e) {
    let {
      userId: t,
      key: n
    } = e, i = new Uint8Array(n);
    o.set(t, i)
  },
  SECURE_FRAMES_TRANSIENT_KEY_DELETE: function(e) {
    let {
      userId: t
    } = e;
    return o.delete(t)
  }
})