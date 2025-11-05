/** Chunk was on 9452 **/
/** chunk id: 49658, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk442837 = require("./442837.js"),
  Chunk846027 = require("./846027.js"),
  Chunk509613 = require("./509613.js"),
  Chunk131951 = require("./131951.js"),
  Chunk313789 = require("./313789.js"),
  Chunk388032 = require("./388032.jsx");
let o = (0, Chunk509613.qs)(Chunk313789.n.VOICE_AND_VIDEO_AUDIO_RECORDING, {
  useTitle: () => Chunk388032.intl.string(Chunk388032.t["r6K+TL"]),
  useSubtitle: () => Chunk388032.intl.string(Chunk388032.t["xl9+I6"]),
  usePredicate: function() {
    return (0, Chunk442837.e7)([Chunk131951.Z], () => Chunk131951.Z.isAecDumpSupported())
  },
  useValue: function() {
    return (0, Chunk442837.e7)([Chunk131951.Z], () => Chunk131951.Z.getAecDump())
  },
  setValue: Chunk846027.Z.setAecDump
})