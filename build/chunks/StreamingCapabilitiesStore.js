/** Chunk was on 39173 **/
/** chunk id: 653255, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => g
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
  p = false;
class h extends(i = Chunk442837.ZP.Store) {
  initialize() {
    !Chunk358085.isPlatformEmbedded || __OVERLAY__ || Chunk998502.ZP.getGPUDriverVersions().then(e => {
      f = (0, c.Z)(e), v = (0, s.Z)(e), p = (0, d.Z)(e), this.emitChange()
    })
  }
  get GPUDriversOutdated() {
    return f
  }
  get canUseHardwareAcceleration() {
    return v
  }
  get problematicGPUDriver() {
    return p
  }
  getState() {
    return {
      GPUDriversOutdated: f,
      canUseHardwareAcceleration: v,
      problematicGPUDriver: p
    }
  }
}(r = "displayName") in h ? Object.defineProperty(h, r, {
  value: "StreamingCapabilitiesStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : h[r] = "StreamingCapabilitiesStore";
let g = new h(Chunk570140.Z, {
  OVERLAY_INITIALIZE: function(e) {
    let {
      streamingCapabilitiesStoreState: t
    } = e;
    f = t.GPUDriversOutdated, v = t.canUseHardwareAcceleration
  }
})