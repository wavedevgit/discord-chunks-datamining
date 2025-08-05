/** Chunk was on 74304 **/
"use strict";
r.d(t, {
  Z: () => v
});
var l, n, i, o = r(442837),
  s = r(570140),
  a = r(358085),
  f = r(998502),
  u = r(869614),
  d = r(281083),
  c = r(672598);
let p = !1,
  h = !0,
  g = !1;
class x extends(i = o.ZP.Store) {
  initialize() {
    !a.isPlatformEmbedded || __OVERLAY__ || f.ZP.getGPUDriverVersions().then(e => {
      p = (0, c.Z)(e), h = (0, u.Z)(e), g = (0, d.Z)(e), this.emitChange()
    })
  }
  get GPUDriversOutdated() {
    return p
  }
  get canUseHardwareAcceleration() {
    return h
  }
  get problematicGPUDriver() {
    return g
  }
  getState() {
    return {
      GPUDriversOutdated: p,
      canUseHardwareAcceleration: h,
      problematicGPUDriver: g
    }
  }
}
n = "StreamingCapabilitiesStore", (l = "displayName") in x ? Object.defineProperty(x, l, {
  value: n,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : x[l] = n;
let v = new x(s.Z, {
  OVERLAY_INITIALIZE: function(e) {
    let {
      streamingCapabilitiesStoreState: t
    } = e;
    p = t.GPUDriversOutdated, h = t.canUseHardwareAcceleration
  }
})