/** Chunk was on 97299 **/
n.d(t, {
  Z: () => d
});
var r, l, i, o = n(442837),
  a = n(570140);
let s = !1,
  u = !1;
class c extends(i = o.ZP.Store) {
  get keepOpen() {
    return u
  }
  get enabled() {
    return s
  }
}
l = "SoundboardOverlayStore", (r = "displayName") in c ? Object.defineProperty(c, r, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : c[r] = l;
let d = new c(a.Z, {
  SOUNDBOARD_SET_OVERLAY_ENABLED: function(e) {
    if (s = e.enabled, e.enabled) {
      var t;
      u = null != (t = e.keepOpen) && t
    }
  }
})