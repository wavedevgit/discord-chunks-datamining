/** Chunk was on 28979 **/
/** chunk id: 790337, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  K: () => T
});
var Chunk827343 = require("./827343.js"),
  Chunk793574 = require("./793574.js"),
  Chunk419954 = require("./419954.js"),
  Chunk430452 = require("./430452.js"),
  Chunk780964 = require("./780964.js"),
  Chunk731854 = require("./731854.js"),
  Chunk985018 = require("./985018.jsx");
let T = (0, Chunk419954.sN)(Chunk780964.X.STREAMING_STREAM_ATTENUATION_STRENGTH, {
  useTitle: () => o.intl.string(o.t.fhEzfj),
  setValue: function(t) {
    let e = [l.A.USER_SETTINGS_VOICE_AND_VIDEO];
    n.A.setSidechainCompressionStrength(t, {
      analyticsLocations: e
    })
  },
  minValue: 1,
  maxValue: 100,
  getInitialValue: Chunk430452.A.getSidechainCompressionStrength,
  usePredicate: function() {
    return r.A.supports(a.O5.SIDECHAIN_COMPRESSION)
  }
})