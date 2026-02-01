/** Chunk was on 30485 **/
/** chunk id: 327474, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  W: () => o
});
var Chunk311907 = require("./311907.js"),
  Chunk827343 = require("./827343.js"),
  Chunk419954 = require("./419954.js"),
  Chunk430452 = require("./430452.js"),
  Chunk780964 = require("./780964.js"),
  Chunk985018 = require("./985018.jsx");
let o = (0, Chunk419954.zD)(Chunk780964.X.VOICE_AND_VIDEO_AUDIO_RECORDING, {
  useTitle: () => a.intl.string(a.t["r6K+TL"]),
  useSubtitle: () => a.intl.string(a.t["xl9+I6"]),
  useValue: function() {
    return (0, n.bG)([r.A], () => r.A.getAecDump())
  },
  setValue: Chunk827343.A.setAecDump,
  usePredicate: function() {
    return (0, n.bG)([r.A], () => r.A.isAecDumpSupported())
  }
})