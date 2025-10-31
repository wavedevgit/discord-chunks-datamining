/** Chunk was on 65174 **/
/** chunk id: 653255, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => m
});
var n, l, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk358085 = require("./358085.js"),
  Chunk998502 = require("./998502.js"),
  Chunk869614 = require("./869614.js"),
  Chunk281083 = require("./281083.js"),
  Chunk672598 = require("./672598.js");
let p = false,
  f = true,
  _ = false;
class h extends(l = Chunk442837.ZP.Store) {
  initialize() {
    !Chunk358085.isPlatformEmbedded || __OVERLAY__ || Chunk998502.ZP.getGPUDriverVersions().then(e => {
      p = (0, d.Z)(e), f = (0, c.Z)(e), _ = (0, s.Z)(e), this.emitChange()
    })
  }
  get GPUDriversOutdated() {
    return p
  }
  get canUseHardwareAcceleration() {
    return f
  }
  get problematicGPUDriver() {
    return _
  }
  getState() {
    return {
      GPUDriversOutdated: p,
      canUseHardwareAcceleration: f,
      problematicGPUDriver: _
    }
  }
}(n = "displayName") in h ? Object.defineProperty(h, n, {
  value: "StreamingCapabilitiesStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : h[n] = "StreamingCapabilitiesStore";
let m = new h(Chunk570140.Z, {
  OVERLAY_INITIALIZE: function(e) {
    let {
      streamingCapabilitiesStoreState: t
    } = e;
    p = t.GPUDriversOutdated, f = t.canUseHardwareAcceleration
  }
})