/** Chunk was on 61947 **/
"use strict";
r.d(t, {
  Z: () => g
});
var n, o, l, i = r(442837),
  u = r(570140),
  a = r(358085),
  c = r(998502),
  s = r(869614),
  d = r(281083),
  f = r(672598);
let p = !1,
  b = !0,
  v = !1;
class O extends(l = i.ZP.Store) {
  initialize() {
    !a.isPlatformEmbedded || __OVERLAY__ || c.ZP.getGPUDriverVersions().then(e => {
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
o = "StreamingCapabilitiesStore", (n = "displayName") in O ? Object.defineProperty(O, n, {
  value: o,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : O[n] = o;
let g = new O(u.Z, {
  OVERLAY_INITIALIZE: function(e) {
    let {
      streamingCapabilitiesStoreState: t
    } = e;
    p = t.GPUDriversOutdated, b = t.canUseHardwareAcceleration
  }
})