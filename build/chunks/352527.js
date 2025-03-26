/** Chunk was on 21091 **/
n.d(t, {
  Z: () => u
});
var e, o, l, a = n(442837),
  s = n(570140);
let r = !1,
  c = !1;
class d extends(l = a.ZP.Store) {
  get keepOpen() {
    return c
  }
  get enabled() {
    return r
  }
}
o = "SoundboardOverlayStore", (e = "displayName") in d ? Object.defineProperty(d, e, {
  value: o,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : d[e] = o;
let u = new d(s.Z, {
  SOUNDBOARD_SET_OVERLAY_ENABLED: function(i) {
    if (r = i.enabled, i.enabled) {
      var t;
      c = null !== (t = i.keepOpen) && void 0 !== t && t
    }
  }
})