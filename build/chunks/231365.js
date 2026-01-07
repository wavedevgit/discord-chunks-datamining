/** Chunk was on 77069 **/
/** chunk id: 231365, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  b: () => S
});
var Chunk442837 = require("./442837.js"),
  Chunk846027 = require("./846027.js"),
  Chunk100527 = require("./100527.js"),
  Chunk509613 = require("./509613.js"),
  Chunk131951 = require("./131951.js"),
  Chunk313789 = require("./313789.js"),
  Chunk65154 = require("./65154.js"),
  Chunk388032 = require("./388032.jsx");
let S = (0, Chunk509613.qs)(Chunk313789.n.STREAMING_STREAM_ATTENUATION, {
  useTitle: () => T.intl.string(T.t["/jwMtn"]),
  useSubtitle: () => T.intl.string(T.t.zlA23F),
  useValue: function() {
    return (0, i.e7)([r.Z], () => r.Z.getSidechainCompression())
  },
  setValue: function(t) {
    let e = [s.Z.USER_SETTINGS_VOICE_AND_VIDEO];
    l.Z.setSidechainCompression(t, {
      analyticsLocations: e
    })
  },
  usePredicate: function() {
    return r.Z.supports(o.AN.SIDECHAIN_COMPRESSION)
  }
})