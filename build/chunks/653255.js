/** Chunk was on 69416 **/
"use strict";
r.d(t, {
  Z: () => v
});
var l, n, i, o = r(442837),
  s = r(570140),
  a = r(358085),
  f = r(998502),
  u = r(869614),
  c = r(281083),
  d = r(672598);
let p = !1,
  x = !0,
  h = !1;
class g extends(i = o.ZP.Store) {
  initialize() {
    !a.isPlatformEmbedded || __OVERLAY__ || f.ZP.getGPUDriverVersions().then(e => {
      p = (0, d.Z)(e), x = (0, u.Z)(e), h = (0, c.Z)(e), this.emitChange()
    })
  }
  get GPUDriversOutdated() {
    return p
  }
  get canUseHardwareAcceleration() {
    return x
  }
  get problematicGPUDriver() {
    return h
  }
  getState() {
    return {
      GPUDriversOutdated: p,
      canUseHardwareAcceleration: x,
      problematicGPUDriver: h
    }
  }
}
n = "StreamingCapabilitiesStore", (l = "displayName") in g ? Object.defineProperty(g, l, {
  value: n,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : g[l] = n;
let v = new g(s.Z, {
  OVERLAY_INITIALIZE: function(e) {
    let {
      streamingCapabilitiesStoreState: t
    } = e;
    p = t.GPUDriversOutdated, x = t.canUseHardwareAcceleration
  }
})