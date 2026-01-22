/** Chunk was on 83898 **/
/** chunk id: 528772, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  A: () => s
});
var n, o, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js");
let l = false,
  a = false;
class c extends(o = Chunk311907.Ay.Store) {
  get keepOpen() {
    return a
  }
  get enabled() {
    return l
  }
}(n = "displayName") in c ? Object.defineProperty(c, n, {
  value: "SoundboardOverlayStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : c[n] = "SoundboardOverlayStore";
let s = new c(Chunk73153.h, {
  SOUNDBOARD_SET_OVERLAY_ENABLED: function(e) {
    if (l = e.enabled, e.enabled) {
      var t;
      a = null != (t = e.keepOpen) && t
    }
  }
})