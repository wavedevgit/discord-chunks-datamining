/** Chunk was on 6164 **/
/** chunk id: 352527, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var n, o, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");
let l = false,
  c = false;
class a extends(o = Chunk442837.ZP.Store) {
  get keepOpen() {
    return c
  }
  get enabled() {
    return l
  }
}(n = "displayName") in a ? Object.defineProperty(a, n, {
  value: "SoundboardOverlayStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : a[n] = "SoundboardOverlayStore";
let s = new a(Chunk570140.Z, {
  SOUNDBOARD_SET_OVERLAY_ENABLED: function(e) {
    if (l = e.enabled, e.enabled) {
      var t;
      c = null != (t = e.keepOpen) && t
    }
  }
})