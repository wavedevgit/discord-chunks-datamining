/** Chunk was on 59416 **/
/** chunk id: 653255, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => g
});
var n, l, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk358085 = require("./358085.js"),
  Chunk998502 = require("./998502.js"),
  Chunk869614 = require("./869614.js"),
  Chunk281083 = require("./281083.js"),
  Chunk672598 = require("./672598.js");
let f = false,
  p = true,
  v = false;
class b extends(l = Chunk442837.ZP.Store) {
  initialize() {
    !Chunk358085.isPlatformEmbedded || __OVERLAY__ || Chunk998502.ZP.getGPUDriverVersions().then(e => {
      f = (0, d.Z)(e), p = (0, s.Z)(e), v = (0, c.Z)(e), this.emitChange()
    })
  }
  get GPUDriversOutdated() {
    return f
  }
  get canUseHardwareAcceleration() {
    return p
  }
  get problematicGPUDriver() {
    return v
  }
  getState() {
    return {
      GPUDriversOutdated: f,
      canUseHardwareAcceleration: p,
      problematicGPUDriver: v
    }
  }
}(n = "displayName") in b ? Object.defineProperty(b, n, {
  value: "StreamingCapabilitiesStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : b[n] = "StreamingCapabilitiesStore";
let g = new b(Chunk570140.Z, {
  OVERLAY_INITIALIZE: function(e) {
    let {
      streamingCapabilitiesStoreState: t
    } = e;
    f = t.GPUDriversOutdated, p = t.canUseHardwareAcceleration
  }
})