/** Chunk was on 13478 **/
/** chunk id: 352527, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var r, i, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");
let a = false,
  s = false;
class c extends(i = Chunk442837.ZP.Store) {
  get keepOpen() {
    return s
  }
  get enabled() {
    return a
  }
}(r = "displayName") in c ? Object.defineProperty(c, r, {
  value: "SoundboardOverlayStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : c[r] = "SoundboardOverlayStore";
let u = new c(Chunk570140.Z, {
  SOUNDBOARD_SET_OVERLAY_ENABLED: function(e) {
    if (a = e.enabled, e.enabled) {
      var t;
      s = null != (t = e.keepOpen) && t
    }
  }
})