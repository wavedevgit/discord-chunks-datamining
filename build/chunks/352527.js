/** Chunk was on 63141 **/
"use strict";
n.d(t, {
  Z: () => u
});
var i, r, o, l = n(442837),
  a = n(570140);
let s = !1,
  c = !1;
class d extends(o = l.ZP.Store) {
  get keepOpen() {
    return c
  }
  get enabled() {
    return s
  }
}
r = "SoundboardOverlayStore", (i = "displayName") in d ? Object.defineProperty(d, i, {
  value: r,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : d[i] = r;
let u = new d(a.Z, {
  SOUNDBOARD_SET_OVERLAY_ENABLED: function(e) {
    if (s = e.enabled, e.enabled) {
      var t;
      c = null !== (t = e.keepOpen) && void 0 !== t && t
    }
  }
})