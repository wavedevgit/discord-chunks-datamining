/** Chunk was on 93886 **/
/** chunk id: 352527, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var n, r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");
let s = false,
  o = false;
class c extends(r = Chunk442837.ZP.Store) {
  get keepOpen() {
    return o
  }
  get enabled() {
    return s
  }
}(n = "displayName") in c ? Object.defineProperty(c, n, {
  value: "SoundboardOverlayStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : c[n] = "SoundboardOverlayStore";
let d = new c(Chunk570140.Z, {
  SOUNDBOARD_SET_OVERLAY_ENABLED: function(e) {
    if (s = e.enabled, e.enabled) {
      var t;
      o = null != (t = e.keepOpen) && t
    }
  }
})