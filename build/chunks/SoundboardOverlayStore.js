/** Chunk was on 93886 **/
/** chunk id: 352527, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var r, i, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");
let o = false,
  c = false;
class s extends(i = Chunk442837.ZP.Store) {
  get keepOpen() {
    return c
  }
  get enabled() {
    return o
  }
}(r = "displayName") in s ? Object.defineProperty(s, r, {
  value: "SoundboardOverlayStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : s[r] = "SoundboardOverlayStore";
let d = new s(Chunk570140.Z, {
  SOUNDBOARD_SET_OVERLAY_ENABLED: function(e) {
    if (o = e.enabled, e.enabled) {
      var t;
      c = null != (t = e.keepOpen) && t
    }
  }
})