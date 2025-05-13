/** Chunk was on 79887 **/
"use strict";
r.d(t, {
  Z: () => O
});
var n, l, o, i = r(442837),
  u = r(570140),
  a = r(358085),
  s = r(998502),
  c = r(869614),
  d = r(281083),
  f = r(672598);
let p = !1,
  b = !0,
  v = !1;
class g extends(o = i.ZP.Store) {
  initialize() {
    !a.isPlatformEmbedded || __OVERLAY__ || s.ZP.getGPUDriverVersions().then(e => {
      p = (0, f.Z)(e), b = (0, c.Z)(e), v = (0, d.Z)(e), this.emitChange()
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
l = "StreamingCapabilitiesStore", (n = "displayName") in g ? Object.defineProperty(g, n, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : g[n] = l;
let O = new g(u.Z, {
  OVERLAY_INITIALIZE: function(e) {
    let {
      streamingCapabilitiesStoreState: t
    } = e;
    p = t.GPUDriversOutdated, b = t.canUseHardwareAcceleration
  }
})