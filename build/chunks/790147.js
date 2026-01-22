/** Chunk was on 28979 **/
/** chunk id: 790147, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  z: () => A
});
var Chunk311907 = require("./311907.js"),
  Chunk926919 = require("./926919.js"),
  Chunk419954 = require("./419954.js"),
  Chunk111162 = require("./111162.js"),
  Chunk253932 = require("./253932.js"),
  Chunk780964 = require("./780964.js"),
  Chunk698723 = require("./698723.js"),
  Chunk985018 = require("./985018.jsx");
let A = (0, Chunk419954.zD)(Chunk780964.X.VOICE_AND_VIDEO_STREAM_INFO_OVERLAY, {
  useTitle: () => T.intl.string(T.t["0CEP6e"]),
  useSubtitle: () => T.intl.string(T.t["kBXuW+"]),
  useValue: function() {
    return (0, n.bG)([r.default], () => r.default.isStreamInfoOverlayEnabled)
  },
  setValue: function(t) {
    let e = r.default.isStreamInfoOverlayEnabled;
    (0, o.A)("stream_info_overlay_enabled", t, e), (0, l.x)({
      isStreamInfoOverlayEnabled: t
    })
  },
  usePredicate: function() {
    return u.Q_.useSetting()
  }
})