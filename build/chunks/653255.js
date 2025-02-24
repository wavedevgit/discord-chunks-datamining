/** Chunk was on 80237 **/
"use strict";
n.d(t, {
  Z: () => h
});
var r, o, c, i = n(442837),
  l = n(570140),
  a = n(358085),
  d = n(998502),
  u = n(869614),
  s = n(281083),
  _ = n(672598);
let f = !1,
  b = !0,
  p = !1;
class g extends(c = i.ZP.Store) {
  initialize() {
    !a.isPlatformEmbedded || __OVERLAY__ || d.ZP.getGPUDriverVersions().then(e => {
      f = (0, _.Z)(e), b = (0, u.Z)(e), p = (0, s.Z)(e), this.emitChange()
    })
  }
  get GPUDriversOutdated() {
    return f
  }
  get canUseHardwareAcceleration() {
    return b
  }
  get problematicGPUDriver() {
    return p
  }
  getState() {
    return {
      GPUDriversOutdated: f,
      canUseHardwareAcceleration: b,
      problematicGPUDriver: p
    }
  }
}
o = "StreamingCapabilitiesStore", (r = "displayName") in g ? Object.defineProperty(g, r, {
  value: o,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : g[r] = o;
let h = new g(l.Z, {
  OVERLAY_INITIALIZE: function(e) {
    let {
      streamingCapabilitiesStoreState: t
    } = e;
    f = t.GPUDriversOutdated, b = t.canUseHardwareAcceleration
  }
})