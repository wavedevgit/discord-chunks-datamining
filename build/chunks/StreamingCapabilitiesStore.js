/** Chunk was on 69416 **/
/** chunk id: 653255, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => g
});
var l, n, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk358085 = require("./358085.js"),
  Chunk998502 = require("./998502.js"),
  Chunk869614 = require("./869614.js"),
  Chunk281083 = require("./281083.js"),
  Chunk672598 = require("./672598.js");
let d = false,
  p = true,
  x = false;
class h extends(n = Chunk442837.ZP.Store) {
  initialize() {
    !Chunk358085.isPlatformEmbedded || __OVERLAY__ || Chunk998502.ZP.getGPUDriverVersions().then(e => {
      d = (0, c.Z)(e), p = (0, f.Z)(e), x = (0, u.Z)(e), this.emitChange()
    })
  }
  get GPUDriversOutdated() {
    return d
  }
  get canUseHardwareAcceleration() {
    return p
  }
  get problematicGPUDriver() {
    return x
  }
  getState() {
    return {
      GPUDriversOutdated: d,
      canUseHardwareAcceleration: p,
      problematicGPUDriver: x
    }
  }
}(l = "displayName") in h ? Object.defineProperty(h, l, {
  value: "StreamingCapabilitiesStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : h[l] = "StreamingCapabilitiesStore";
let g = new h(Chunk570140.Z, {
  OVERLAY_INITIALIZE: function(e) {
    let {
      streamingCapabilitiesStoreState: t
    } = e;
    d = t.GPUDriversOutdated, p = t.canUseHardwareAcceleration
  }
})