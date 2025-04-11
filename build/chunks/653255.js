/** Chunk was on 79887 **/
"use strict";
r.d(t, {
  Z: () => g
});
var n, l, o, i = r(442837),
  u = r(570140),
  c = r(358085),
  a = r(998502),
  s = r(869614),
  d = r(281083),
  f = r(672598);
let p = !1,
  b = !0,
  v = !1;
class O extends(o = i.ZP.Store) {
  initialize() {
    !c.isPlatformEmbedded || __OVERLAY__ || a.ZP.getGPUDriverVersions().then(e => {
      p = (0, f.Z)(e), b = (0, s.Z)(e), v = (0, d.Z)(e), this.emitChange()
    })
  }
  get GPUDriversOutdated() {
    return p
  }
  get canUseHardwareAcceleration() {
    return b
  }
  get problematicGPUDriver() {
    return v
  }
  getState() {
    return {
      GPUDriversOutdated: p,
      canUseHardwareAcceleration: b,
      problematicGPUDriver: v
    }
  }
}
l = "StreamingCapabilitiesStore", (n = "displayName") in O ? Object.defineProperty(O, n, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : O[n] = l;
let g = new O(u.Z, {
  OVERLAY_INITIALIZE: function(e) {
    let {
      streamingCapabilitiesStoreState: t
    } = e;
    p = t.GPUDriversOutdated, b = t.canUseHardwareAcceleration
  }
})