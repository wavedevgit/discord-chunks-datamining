/** Chunk was on 93886 **/
/** chunk id: 352527, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var r, i, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");
let o = false,
  s = false;
class d extends(i = Chunk442837.ZP.Store) {
  get keepOpen() {
    return s
  }
  get enabled() {
    return o
  }
}(r = "displayName") in d ? Object.defineProperty(d, r, {
  value: "SoundboardOverlayStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : d[r] = "SoundboardOverlayStore";
let c = new d(Chunk570140.Z, {
  SOUNDBOARD_SET_OVERLAY_ENABLED: function(e) {
    if (o = e.enabled, e.enabled) {
      var t;
      s = null != (t = e.keepOpen) && t
    }
  }
})