/** Chunk was on 74304 **/
/** chunk id: 653255, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => x
});
var l, n, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk358085 = require("./358085.js"),
  Chunk998502 = require("./998502.js"),
  Chunk869614 = require("./869614.js"),
  Chunk281083 = require("./281083.js"),
  Chunk672598 = require("./672598.js");
let c = false,
  p = true,
  h = false;
class g extends(n = Chunk442837.ZP.Store) {
  initialize() {
    !Chunk358085.isPlatformEmbedded || __OVERLAY__ || Chunk998502.ZP.getGPUDriverVersions().then(e => {
      c = (0, d.Z)(e), p = (0, f.Z)(e), h = (0, u.Z)(e), this.emitChange()
    })
  }
  get GPUDriversOutdated() {
    return c
  }
  get canUseHardwareAcceleration() {
    return p
  }
  get problematicGPUDriver() {
    return h
  }
  getState() {
    return {
      GPUDriversOutdated: c,
      canUseHardwareAcceleration: p,
      problematicGPUDriver: h
    }
  }
}(l = "displayName") in g ? Object.defineProperty(g, l, {
  value: "StreamingCapabilitiesStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : g[l] = "StreamingCapabilitiesStore";
let x = new g(Chunk570140.Z, {
  OVERLAY_INITIALIZE: function(e) {
    let {
      streamingCapabilitiesStoreState: t
    } = e;
    c = t.GPUDriversOutdated, p = t.canUseHardwareAcceleration
  }
})