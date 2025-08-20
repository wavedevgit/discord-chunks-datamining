/** Chunk was on 79839 **/
/** chunk id: 653255, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => m
});
var l, o, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk358085 = require("./358085.js"),
  Chunk998502 = require("./998502.js"),
  Chunk869614 = require("./869614.js"),
  Chunk281083 = require("./281083.js"),
  Chunk672598 = require("./672598.js");
let c = false,
  p = true,
  h = false;
class v extends(o = Chunk442837.ZP.Store) {
  initialize() {
    !Chunk358085.isPlatformEmbedded || __OVERLAY__ || Chunk998502.ZP.getGPUDriverVersions().then(e => {
      c = (0, f.Z)(e), p = (0, u.Z)(e), h = (0, d.Z)(e), this.emitChange()
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
}(l = "displayName") in v ? Object.defineProperty(v, l, {
  value: "StreamingCapabilitiesStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : v[l] = "StreamingCapabilitiesStore";
let m = new v(Chunk570140.Z, {
  OVERLAY_INITIALIZE: function(e) {
    let {
      streamingCapabilitiesStoreState: t
    } = e;
    c = t.GPUDriversOutdated, p = t.canUseHardwareAcceleration
  }
})