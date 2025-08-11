/** Chunk was on 93886 **/
/** chunk id: 352527, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var n, r, l, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");
let o = false,
  c = false;
class d extends(l = Chunk442837.ZP.Store) {
  get keepOpen() {
    return c
  }
  get enabled() {
    return o
  }
}
r = "SoundboardOverlayStore", (n = "displayName") in d ? Object.defineProperty(d, n, {
  value: r,
  enumerable: true,
  configurable: true,
  writable: true
}) : d[n] = r;
let u = new d(Chunk570140.Z, {
  SOUNDBOARD_SET_OVERLAY_ENABLED: function(e) {
    if (o = e.enabled, e.enabled) {
      var t;
      c = null != (t = e.keepOpen) && t
    }
  }
})