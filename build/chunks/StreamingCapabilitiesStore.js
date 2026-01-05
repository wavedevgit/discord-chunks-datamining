/** Chunk was on 27601 **/
/** chunk id: 653255, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  Z: () => S
});
var n, l, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk358085 = require("./358085.js"),
  Chunk998502 = require("./998502.js"),
  Chunk869614 = require("./869614.js"),
  Chunk281083 = require("./281083.js"),
  Chunk672598 = require("./672598.js");
let g = false,
  Z = true,
  f = false;
class m extends(l = Chunk442837.ZP.Store) {
  initialize() {
    !Chunk358085.isPlatformEmbedded || __OVERLAY__ || Chunk998502.ZP.getGPUDriverVersions().then(e => {
      g = (0, c.Z)(e), Z = (0, o.Z)(e), f = (0, d.Z)(e), this.emitChange()
    })
  }
  get GPUDriversOutdated() {
    return g
  }
  get canUseHardwareAcceleration() {
    return Z
  }
  get problematicGPUDriver() {
    return f
  }
  getState() {
    return {
      GPUDriversOutdated: g,
      canUseHardwareAcceleration: Z,
      problematicGPUDriver: f
    }
  }
}(n = "displayName") in m ? Object.defineProperty(m, n, {
  value: "StreamingCapabilitiesStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : m[n] = "StreamingCapabilitiesStore";
let S = new m(Chunk570140.Z, {
  OVERLAY_INITIALIZE: function(e) {
    let {
      streamingCapabilitiesStoreState: t
    } = e;
    g = t.GPUDriversOutdated, Z = t.canUseHardwareAcceleration
  }
})