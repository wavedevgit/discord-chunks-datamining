/** Chunk was on 79839 **/
"use strict";
r.d(t, {
  Z: () => m
});
var l, o, n, i = r(442837),
  a = r(570140),
  s = r(358085),
  u = r(998502),
  d = r(869614),
  f = r(281083),
  c = r(672598);
let h = !1,
  p = !0,
  v = !1;
class w extends(n = i.ZP.Store) {
  initialize() {
    !s.isPlatformEmbedded || __OVERLAY__ || u.ZP.getGPUDriverVersions().then(e => {
      h = (0, c.Z)(e), p = (0, d.Z)(e), v = (0, f.Z)(e), this.emitChange()
    })
  }
  get GPUDriversOutdated() {
    return h
  }
  get canUseHardwareAcceleration() {
    return p
  }
  get problematicGPUDriver() {
    return v
  }
  getState() {
    return {
      GPUDriversOutdated: h,
      canUseHardwareAcceleration: p,
      problematicGPUDriver: v
    }
  }
}
o = "StreamingCapabilitiesStore", (l = "displayName") in w ? Object.defineProperty(w, l, {
  value: o,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : w[l] = o;
let m = new w(a.Z, {
  OVERLAY_INITIALIZE: function(e) {
    let {
      streamingCapabilitiesStoreState: t
    } = e;
    h = t.GPUDriversOutdated, p = t.canUseHardwareAcceleration
  }
})