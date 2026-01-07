/** Chunk was on 77069 **/
/** chunk id: 49658, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  P: () => o
});
var Chunk442837 = require("./442837.js"),
  Chunk846027 = require("./846027.js"),
  Chunk509613 = require("./509613.js"),
  Chunk131951 = require("./131951.js"),
  Chunk313789 = require("./313789.js"),
  Chunk388032 = require("./388032.jsx");
let o = (0, Chunk509613.qs)(Chunk313789.n.VOICE_AND_VIDEO_AUDIO_RECORDING, {
  useTitle: () => a.intl.string(a.t["r6K+TL"]),
  useSubtitle: () => a.intl.string(a.t["xl9+I6"]),
  useValue: function() {
    return (0, i.e7)([u.Z], () => u.Z.getAecDump())
  },
  setValue: Chunk846027.Z.setAecDump,
  usePredicate: function() {
    return (0, i.e7)([u.Z], () => u.Z.isAecDumpSupported())
  }
})