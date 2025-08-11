/** Chunk was on 74304 **/
/** chunk id: 653255, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => v
});
var l, n, i, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk358085 = require("./358085.js"),
  Chunk998502 = require("./998502.js"),
  Chunk869614 = require("./869614.js"),
  Chunk281083 = require("./281083.js"),
  Chunk672598 = require("./672598.js");
let p = false,
  h = true,
  g = false;
class x extends(i = Chunk442837.ZP.Store) {
  initialize() {
    !Chunk358085.isPlatformEmbedded || __OVERLAY__ || Chunk998502.ZP.getGPUDriverVersions().then(e => {
      p = (0, c.Z)(e), h = (0, u.Z)(e), g = (0, d.Z)(e), this.emitChange()
    })
  }
  get GPUDriversOutdated() {
    return p
  }
  get canUseHardwareAcceleration() {
    return h
  }
  get problematicGPUDriver() {
    return g
  }
  getState() {
    return {
      GPUDriversOutdated: p,
      canUseHardwareAcceleration: h,
      problematicGPUDriver: g
    }
  }
}
n = "StreamingCapabilitiesStore", (l = "displayName") in x ? Object.defineProperty(x, l, {
  value: n,
  enumerable: true,
  configurable: true,
  writable: true
}) : x[l] = n;
let v = new x(Chunk570140.Z, {
  OVERLAY_INITIALIZE: function(e) {
    let {
      streamingCapabilitiesStoreState: t
    } = e;
    p = t.GPUDriversOutdated, h = t.canUseHardwareAcceleration
  }
})