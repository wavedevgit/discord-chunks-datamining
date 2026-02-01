/** Chunk was on 30485 **/
/** chunk id: 783440, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  n: () => T
});
var Chunk311907 = require("./311907.js"),
  Chunk827343 = require("./827343.js"),
  Chunk793574 = require("./793574.js"),
  Chunk419954 = require("./419954.js"),
  Chunk430452 = require("./430452.js"),
  Chunk780964 = require("./780964.js"),
  Chunk731854 = require("./731854.js"),
  Chunk985018 = require("./985018.jsx");
let T = (0, Chunk419954.zD)(Chunk780964.X.STREAMING_STREAM_ATTENUATION, {
  useTitle: () => d.intl.string(d.t["/jwMtn"]),
  useSubtitle: () => d.intl.string(d.t.zlA23F),
  useValue: function() {
    return (0, n.bG)([u.A], () => u.A.getSidechainCompression())
  },
  setValue: function(t) {
    let e = [s.A.USER_SETTINGS_VOICE_AND_VIDEO];
    l.A.setSidechainCompression(t, {
      analyticsLocations: e
    })
  },
  usePredicate: function() {
    return u.A.supports(o.O5.SIDECHAIN_COMPRESSION)
  }
})