/** Chunk was on 79839 **/
/** chunk id: 653255, original params: e,t,r (module,exports,require) **/
"use strict";
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
let d = false,
  v = true,
  h = false;
class p extends(l = Chunk442837.ZP.Store) {
  initialize() {
    !Chunk358085.isPlatformEmbedded || __OVERLAY__ || Chunk998502.ZP.getGPUDriverVersions().then(e => {
      d = (0, c.Z)(e), v = (0, s.Z)(e), h = (0, f.Z)(e), this.emitChange()
    })
  }
  get GPUDriversOutdated() {
    return d
  }
  get canUseHardwareAcceleration() {
    return v
  }
  get problematicGPUDriver() {
    return h
  }
  getState() {
    return {
      GPUDriversOutdated: d,
      canUseHardwareAcceleration: v,
      problematicGPUDriver: h
    }
  }
}(n = "displayName") in p ? Object.defineProperty(p, n, {
  value: "StreamingCapabilitiesStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : p[n] = "StreamingCapabilitiesStore";
let g = new p(Chunk570140.Z, {
  OVERLAY_INITIALIZE: function(e) {
    let {
      streamingCapabilitiesStoreState: t
    } = e;
    d = t.GPUDriversOutdated, v = t.canUseHardwareAcceleration
  }
})