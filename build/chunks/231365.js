/** Chunk was on 9452 **/
/** chunk id: 231365, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk442837 = require("./442837.js"),
  Chunk846027 = require("./846027.js"),
  Chunk100527 = require("./100527.js"),
  Chunk509613 = require("./509613.js"),
  Chunk131951 = require("./131951.js"),
  Chunk313789 = require("./313789.js"),
  Chunk65154 = require("./65154.js"),
  Chunk388032 = require("./388032.jsx");
let d = (0, Chunk509613.qs)(Chunk313789.n.STREAMING_STREAM_ATTENUATION, {
  useTitle: () => Chunk388032.intl.string(Chunk388032.t["/jwMtn"]),
  useSubtitle: () => Chunk388032.intl.string(Chunk388032.t.zlA23F),
  usePredicate: function() {
    return Chunk131951.Z.supports(Chunk65154.AN.SIDECHAIN_COMPRESSION)
  },
  useValue: function() {
    return (0, Chunk442837.e7)([Chunk131951.Z], () => Chunk131951.Z.getSidechainCompression())
  },
  setValue: function(t) {
    let e = [r.Z.USER_SETTINGS_VOICE_AND_VIDEO];
    l.Z.setSidechainCompression(t, {
      analyticsLocations: e
    })
  }
})