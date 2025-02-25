/** Chunk was on 63141 **/
"use strict";
n.d(t, {
  Z: () => u
});
var i, r, o, a = n(442837),
  s = n(570140);
let l = !1,
  c = !1;
class d extends(o = a.ZP.Store) {
  get keepOpen() {
    return c
  }
  get enabled() {
    return l
  }
}
r = "SoundboardOverlayStore", (i = "displayName") in d ? Object.defineProperty(d, i, {
  value: r,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : d[i] = r;
let u = new d(s.Z, {
  SOUNDBOARD_SET_OVERLAY_ENABLED: function(e) {
    if (l = e.enabled, e.enabled) {
      var t;
      c = null !== (t = e.keepOpen) && void 0 !== t && t
    }
  }
})