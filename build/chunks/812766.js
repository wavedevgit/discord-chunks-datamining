/** Chunk was on 77069 **/
/** chunk id: 812766, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  s: () => o
});
var Chunk442837 = require("./442837.js"),
  Chunk846027 = require("./846027.js"),
  Chunk509613 = require("./509613.js"),
  Chunk131951 = require("./131951.js"),
  Chunk313789 = require("./313789.js"),
  Chunk388032 = require("./388032.jsx");
let o = (0, Chunk509613.qs)(Chunk313789.n.STREAMING_ADVANCED_SCREENSHARE, {
  useTitle: () => Chunk388032.intl.string(Chunk388032.t.GmWk2E),
  useSearchTerms: () => [Chunk388032.intl.string(Chunk388032.t["Fj/xn1"])],
  useSubtitle: () => Chunk388032.intl.string(Chunk388032.t["Fj/xn1"]),
  useValue: function() {
    return (0, Chunk442837.e7)([Chunk131951.Z], () => Chunk131951.Z.getVideoHook())
  },
  setValue: Chunk846027.Z.setVideoHook,
  usePredicate: function() {
    return (0, Chunk442837.e7)([Chunk131951.Z], () => Chunk131951.Z.supportsVideoHook())
  }
})