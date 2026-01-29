/** Chunk was on 4670 **/
/** chunk id: 790337, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  K: () => d
});
var Chunk827343 = require("./827343.js"),
  Chunk793574 = require("./793574.js"),
  Chunk419954 = require("./419954.js"),
  Chunk430452 = require("./430452.js"),
  Chunk780964 = require("./780964.js"),
  Chunk731854 = require("./731854.js"),
  Chunk985018 = require("./985018.jsx");
let d = (0, Chunk419954.sN)(Chunk780964.X.STREAMING_STREAM_ATTENUATION_STRENGTH, {
  useTitle: () => o.intl.string(o.t.fhEzfj),
  setValue: function(e) {
    let t = [l.A.USER_SETTINGS_VOICE_AND_VIDEO];
    n.A.setSidechainCompressionStrength(e, {
      analyticsLocations: t
    })
  },
  minValue: 1,
  maxValue: 100,
  getInitialValue: Chunk430452.A.getSidechainCompressionStrength,
  usePredicate: function() {
    return r.A.supports(u.O5.SIDECHAIN_COMPRESSION)
  }
})