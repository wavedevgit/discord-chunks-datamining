/** Chunk was on 63141 **/
n.d(t, {
  Z: () => u
});
var i, r, o, l = n(442837),
  a = n(570140);
let s = !1,
  d = !1;
class c extends(o = l.ZP.Store) {
  get keepOpen() {
    return d
  }
  get enabled() {
    return s
  }
}
r = "SoundboardOverlayStore", (i = "displayName") in c ? Object.defineProperty(c, i, {
  value: r,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : c[i] = r;
let u = new c(a.Z, {
  SOUNDBOARD_SET_OVERLAY_ENABLED: function(e) {
    if (s = e.enabled, e.enabled) {
      var t;
      d = null !== (t = e.keepOpen) && void 0 !== t && t
    }
  }
})