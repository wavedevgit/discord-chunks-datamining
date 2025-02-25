/** Chunk was on 94698 **/
"use strict";
n.d(t, {
  Z: () => h
});
var r, o, c, i = n(442837),
  a = n(570140),
  l = n(358085),
  d = n(998502),
  s = n(869614),
  u = n(281083),
  _ = n(672598);
let f = !1,
  b = !0,
  p = !1;
class g extends(c = i.ZP.Store) {
  initialize() {
    !l.isPlatformEmbedded || __OVERLAY__ || d.ZP.getGPUDriverVersions().then(e => {
      f = (0, _.Z)(e), b = (0, s.Z)(e), p = (0, u.Z)(e), this.emitChange()
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
let h = new g(a.Z, {
  OVERLAY_INITIALIZE: function(e) {
    let {
      streamingCapabilitiesStoreState: t
    } = e;
    f = t.GPUDriversOutdated, b = t.canUseHardwareAcceleration
  }
})