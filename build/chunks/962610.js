/** Chunk was on 9452 **/
/** chunk id: 962610, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => E
});
var Chunk442837 = require("./442837.js"),
  Chunk179658 = require("./179658.js"),
  Chunk509613 = require("./509613.js"),
  Chunk857192 = require("./857192.js"),
  Chunk695346 = require("./695346.js"),
  Chunk313789 = require("./313789.js"),
  Chunk569550 = require("./569550.js"),
  Chunk388032 = require("./388032.jsx");
let E = (0, Chunk509613.qs)(Chunk313789.n.VOICE_AND_VIDEO_STREAM_INFO_OVERLAY, {
  useTitle: () => Chunk388032.intl.string(Chunk388032.t["0CEP6e"]),
  useSubtitle: () => Chunk388032.intl.string(Chunk388032.t["kBXuW+"]),
  usePredicate: function() {
    return Chunk695346.Sb.useSetting()
  },
  useValue: function() {
    return (0, Chunk442837.e7)([Chunk857192.default], () => Chunk857192.default.isStreamInfoOverlayEnabled)
  },
  setValue: function(t) {
    let e = r.default.isStreamInfoOverlayEnabled;
    (0, o.Z)("stream_info_overlay_enabled", t, e), (0, l.y)({
      isStreamInfoOverlayEnabled: t
    })
  }
})