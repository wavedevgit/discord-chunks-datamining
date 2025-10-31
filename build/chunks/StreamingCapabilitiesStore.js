/** Chunk was on 56784 **/
/** chunk id: 653255, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
});
var r, i, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk358085 = require("./358085.js"),
  Chunk998502 = require("./998502.js"),
  Chunk869614 = require("./869614.js"),
  Chunk281083 = require("./281083.js"),
  Chunk672598 = require("./672598.js");
let f = false,
  v = true,
  h = false;
class p extends(i = Chunk442837.ZP.Store) {
  initialize() {
    !Chunk358085.isPlatformEmbedded || __OVERLAY__ || Chunk998502.ZP.getGPUDriverVersions().then(e => {
      f = (0, c.Z)(e), v = (0, s.Z)(e), h = (0, d.Z)(e), this.emitChange()
    })
  }
  get GPUDriversOutdated() {
    return f
  }
  get canUseHardwareAcceleration() {
    return v
  }
  get problematicGPUDriver() {
    return h
  }
  getState() {
    return {
      GPUDriversOutdated: f,
      canUseHardwareAcceleration: v,
      problematicGPUDriver: h
    }
  }
}(r = "displayName") in p ? Object.defineProperty(p, r, {
  value: "StreamingCapabilitiesStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : p[r] = "StreamingCapabilitiesStore";
let m = new p(Chunk570140.Z, {
  OVERLAY_INITIALIZE: function(e) {
    let {
      streamingCapabilitiesStoreState: t
    } = e;
    f = t.GPUDriversOutdated, v = t.canUseHardwareAcceleration
  }
})