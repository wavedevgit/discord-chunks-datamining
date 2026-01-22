/** Chunk was on 45565 **/
/** chunk id: 2866, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  A: () => S
});
var l, r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk723702 = require("./723702.js"),
  Chunk837921 = require("./837921.js"),
  Chunk857275 = require("./857275.js"),
  Chunk214335 = require("./214335.js"),
  Chunk625002 = require("./625002.js");
let g = false,
  c = true,
  f = false;
class m extends(r = Chunk311907.Ay.Store) {
  initialize() {
    !s.isPlatformEmbedded || __OVERLAY__ || u.Ay.getGPUDriverVersions().then(e => {
      g = (0, d.A)(e), c = (0, o.A)(e), f = (0, A.A)(e), this.emitChange()
    })
  }
  get GPUDriversOutdated() {
    return g
  }
  get canUseHardwareAcceleration() {
    return c
  }
  get problematicGPUDriver() {
    return f
  }
  getState() {
    return {
      GPUDriversOutdated: g,
      canUseHardwareAcceleration: c,
      problematicGPUDriver: f
    }
  }
}(l = "displayName") in m ? Object.defineProperty(m, l, {
  value: "StreamingCapabilitiesStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : m[l] = "StreamingCapabilitiesStore";
let S = new m(Chunk73153.h, {
  OVERLAY_INITIALIZE: function(e) {
    let {
      streamingCapabilitiesStoreState: t
    } = e;
    g = t.GPUDriversOutdated, c = t.canUseHardwareAcceleration
  }
})