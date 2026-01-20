/** Chunk was on 33397 **/
/** chunk id: 729303, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => s
}), require("./388685.js"), require("./410992.js"), require("./227481.js"), require("./730884.js"), require("./20464.js"), require("./341884.js"), require("./364341.js"), require("./629680.js"), require("./505025.js"), require("./918970.js"), require("./121784.js"), require("./644351.js"), require("./146733.js");
var n, l, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");
let c = new Map;
class o extends(n = Chunk442837.ZP.Store) {
  getUsers() {
    return c
  }
  isKeyVerified(e, t) {
    let r = c.get(e);
    if (null == t || null == r || r.length !== t.length) returnfalse;
    for (let e = 0; e < t.length; e++)
      if (t[e] !== r[e]) returnfalse;
    returntrue
  }
}(l = "displayName") in o ? Object.defineProperty(o, l, {
  value: "TransientKeyStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : o[l] = "TransientKeyStore";
let s = new o(Chunk570140.Z, {
  CONNECTION_OPEN: function() {
    c.clear()
  },
  SECURE_FRAMES_TRANSIENT_KEY_CREATE: function(e) {
    let {
      userId: t,
      key: r
    } = e, n = new Uint8Array(r);
    c.set(t, n)
  },
  SECURE_FRAMES_TRANSIENT_KEY_DELETE: function(e) {
    let {
      userId: t
    } = e;
    return c.delete(t)
  }
})