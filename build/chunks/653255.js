/** Chunk was on 50844 **/
"use strict";
n.d(t, {
  Z: () => P
});
var r, i, l, u = n(442837),
  o = n(570140),
  a = n(358085),
  s = n(998502),
  c = n(869614),
  f = n(281083),
  d = n(672598);
let v = !1,
  p = !0,
  h = !1;
class g extends(l = u.ZP.Store) {
  initialize() {
    !a.isPlatformEmbedded || __OVERLAY__ || s.ZP.getGPUDriverVersions().then(e => {
      v = (0, d.Z)(e), p = (0, c.Z)(e), h = (0, f.Z)(e), this.emitChange()
    })
  }
  get GPUDriversOutdated() {
    return v
  }
  get canUseHardwareAcceleration() {
    return p
  }
  get problematicGPUDriver() {
    return h
  }
  getState() {
    return {
      GPUDriversOutdated: v,
      canUseHardwareAcceleration: p,
      problematicGPUDriver: h
    }
  }
}
i = "StreamingCapabilitiesStore", (r = "displayName") in g ? Object.defineProperty(g, r, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : g[r] = i;
let P = new g(o.Z, {
  OVERLAY_INITIALIZE: function(e) {
    let {
      streamingCapabilitiesStoreState: t
    } = e;
    v = t.GPUDriversOutdated, p = t.canUseHardwareAcceleration
  }
})