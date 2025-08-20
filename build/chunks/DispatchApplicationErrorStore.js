/** Chunk was on 26434 **/
/** chunk id: 922156, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
});
var r, i, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk186901 = require("./186901.js");
let s = null,
  c = [Chunk186901.ff.REDISTRIBUTABLE_INSTALL_FAILED, Chunk186901.ff.POST_INSTALL_FAILED, Chunk186901.ff.POST_INSTALL_CANCELLED],
  u = [Chunk186901.ff.APPLICATION_NOT_FOUND, Chunk186901.ff.APPLICATION_LOAD_FAILED, Chunk186901.ff.INTERRUPTED, Chunk186901.ff.DESERIALIZATION_FAILED];
class d extends(i = Chunk442837.ZP.Store) {
  getLastError() {
    return s
  }
}(r = "displayName") in d ? Object.defineProperty(d, r, {
  value: "DispatchApplicationErrorStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : d[r] = "DispatchApplicationErrorStore";
let p = new d(Chunk570140.Z, {
  DISPATCH_APPLICATION_LAUNCH_SETUP_START: function() {
    null != s && null != s.code && c.includes(s.code) && (s = null)
  },
  DISPATCH_APPLICATION_ERROR: function(e) {
    let {
      error: t
    } = e;
    s = null != t.code && u.includes(t.code) ? null : t
  }
})