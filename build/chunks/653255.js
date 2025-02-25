/** Chunk was on 63354 **/
"use strict";
n.d(t, {
  Z: () => b
});
var o, r, c, i = n(442837),
  _ = n(570140),
  d = n(358085),
  a = n(998502),
  l = n(869614),
  s = n(281083),
  u = n(672598);
let f = !1,
  g = !0,
  h = !1;
class p extends(c = i.ZP.Store) {
  initialize() {
    !d.isPlatformEmbedded || __OVERLAY__ || a.ZP.getGPUDriverVersions().then(e => {
      f = (0, u.Z)(e), g = (0, l.Z)(e), h = (0, s.Z)(e), this.emitChange()
    })
  }
  get GPUDriversOutdated() {
    return f
  }
  get canUseHardwareAcceleration() {
    return g
  }
  get problematicGPUDriver() {
    return h
  }
  getState() {
    return {
      GPUDriversOutdated: f,
      canUseHardwareAcceleration: g,
      problematicGPUDriver: h
    }
  }
}
r = "StreamingCapabilitiesStore", (o = "displayName") in p ? Object.defineProperty(p, o, {
  value: r,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : p[o] = r;
let b = new p(_.Z, {
  OVERLAY_INITIALIZE: function(e) {
    let {
      streamingCapabilitiesStoreState: t
    } = e;
    f = t.GPUDriversOutdated, g = t.canUseHardwareAcceleration
  }
})