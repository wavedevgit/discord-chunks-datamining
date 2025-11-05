/** Chunk was on 9452 **/
/** chunk id: 253595, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  W: () => d,
  Z: () => S
});
var Chunk818710 = require("./818710.js"),
  Chunk442837 = require("./442837.js"),
  Chunk579806 = require("./579806.js"),
  Chunk509613 = require("./509613.js"),
  Chunk131951 = require("./131951.js"),
  Chunk313789 = require("./313789.js"),
  Chunk710808 = require("./710808.jsx"),
  Chunk65154 = require("./65154.js"),
  Chunk388032 = require("./388032.jsx");

function d() {
  let t = (0, Chunk442837.e7)([Chunk131951.Z], () => Chunk131951.Z.supports(Chunk65154.AN.DEBUG_LOGGING));
  return Chunk818710.FB && module && null != Chunk579806.Z.fileManager.readLogFiles
}
let S = (0, Chunk509613.qs)(Chunk313789.n.VOICE_AND_VIDEO_DEBUG_LOGGING, {
  useTitle: () => Chunk388032.intl.string(Chunk388032.t["726JHL"]),
  useSubtitle: () => Chunk388032.intl.string(Chunk388032.t["/7ak9Q"]),
  usePredicate: d,
  useValue: function() {
    return (0, Chunk442837.e7)([Chunk131951.Z], () => Chunk131951.Z.getDebugLogging())
  },
  setValue: Chunk710808.rT
})