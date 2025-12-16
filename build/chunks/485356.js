/** Chunk was on 77069 **/
/** chunk id: 485356, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  r: () => T
});
var Chunk846027 = require("./846027.js"),
  Chunk100527 = require("./100527.js"),
  Chunk509613 = require("./509613.js"),
  Chunk131951 = require("./131951.js"),
  Chunk313789 = require("./313789.js"),
  Chunk65154 = require("./65154.js"),
  Chunk388032 = require("./388032.jsx");
let T = (0, Chunk509613.UO)(Chunk313789.n.STREAMING_STREAM_ATTENUATION_STRENGTH, {
  useTitle: () => Chunk388032.intl.string(Chunk388032.t.fhEzfj),
  setValue: function(t) {
    let e = [l.Z.USER_SETTINGS_VOICE_AND_VIDEO];
    i.Z.setSidechainCompressionStrength(t, {
      analyticsLocations: e
    })
  },
  minValue: 1,
  maxValue: 100,
  getInitialValue: Chunk131951.Z.getSidechainCompressionStrength,
  usePredicate: function() {
    return Chunk131951.Z.supports(Chunk65154.AN.SIDECHAIN_COMPRESSION)
  }
})