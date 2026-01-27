/** Chunk was on 92917 **/
/** chunk id: 755439, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => p
});
var r, i, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk613057 = require("./613057.js");
let o = null,
  c = [Chunk613057.Hi.REDISTRIBUTABLE_INSTALL_FAILED, Chunk613057.Hi.POST_INSTALL_FAILED, Chunk613057.Hi.POST_INSTALL_CANCELLED],
  u = [Chunk613057.Hi.APPLICATION_NOT_FOUND, Chunk613057.Hi.APPLICATION_LOAD_FAILED, Chunk613057.Hi.INTERRUPTED, Chunk613057.Hi.DESERIALIZATION_FAILED];
class d extends(i = Chunk311907.Ay.Store) {
  getLastError() {
    return o
  }
}(r = "displayName") in d ? Object.defineProperty(d, r, {
  value: "DispatchApplicationErrorStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : d[r] = "DispatchApplicationErrorStore";
let p = new d(Chunk73153.h, {
  DISPATCH_APPLICATION_LAUNCH_SETUP_START: function() {
    null != o && null != o.code && c.includes(o.code) && (o = null)
  },
  DISPATCH_APPLICATION_ERROR: function(e) {
    let {
      error: t
    } = e;
    o = null != t.code && u.includes(t.code) ? null : t
  }
})