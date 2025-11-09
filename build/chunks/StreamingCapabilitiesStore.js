/** Chunk was on 74957 **/
/** chunk id: 653255, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => h
});
var r, o, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk358085 = require("./358085.js"),
  Chunk998502 = require("./998502.js"),
  Chunk869614 = require("./869614.js"),
  Chunk281083 = require("./281083.js"),
  Chunk672598 = require("./672598.js");
let u = false,
  f = true,
  p = false;
class m extends(o = Chunk442837.ZP.Store) {
  initialize() {
    !Chunk358085.isPlatformEmbedded || __OVERLAY__ || Chunk998502.ZP.getGPUDriverVersions().then(e => {
      u = (0, s.Z)(e), f = (0, d.Z)(e), p = (0, _.Z)(e), this.emitChange()
    })
  }
  get GPUDriversOutdated() {
    return u
  }
  get canUseHardwareAcceleration() {
    return f
  }
  get problematicGPUDriver() {
    return p
  }
  getState() {
    return {
      GPUDriversOutdated: u,
      canUseHardwareAcceleration: f,
      problematicGPUDriver: p
    }
  }
}(r = "displayName") in m ? Object.defineProperty(m, r, {
  value: "StreamingCapabilitiesStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : m[r] = "StreamingCapabilitiesStore";
let h = new m(Chunk570140.Z, {
  OVERLAY_INITIALIZE: function(e) {
    let {
      streamingCapabilitiesStoreState: n
    } = e;
    u = n.GPUDriversOutdated, f = n.canUseHardwareAcceleration
  }
})