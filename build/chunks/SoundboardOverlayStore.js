/** Chunk was on 93886 **/
/** chunk id: 352527, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var a, r, Chunk442837 = require("./442837.js"),
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
}(a = "displayName") in c ? Object.defineProperty(c, a, {
  value: "SoundboardOverlayStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : c[a] = "SoundboardOverlayStore";
let d = new c(Chunk570140.Z, {
  SOUNDBOARD_SET_OVERLAY_ENABLED: function(e) {
    if (s = e.enabled, e.enabled) {
      var t;
      o = null != (t = e.keepOpen) && t
    }
  }
})