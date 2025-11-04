/** Chunk was on 9452 **/
/** chunk id: 652278, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk442837 = require("./442837.js"),
  Chunk846027 = require("./846027.js"),
  Chunk509613 = require("./509613.js"),
  Chunk131951 = require("./131951.js"),
  Chunk998502 = require("./998502.js"),
  Chunk313789 = require("./313789.js"),
  Chunk388032 = require("./388032.jsx");
let c = (0, Chunk509613.qs)(Chunk313789.n.STREAMING_OPENH264_CODEC, {
  useTitle: () => Chunk388032.intl.string(Chunk388032.t.AxnPm1),
  useSearchTerms: () => [Chunk388032.intl.string(Chunk388032.t.AxnPm1)],
  usePredicate: function() {
    return (0, Chunk442837.e7)([Chunk131951.Z], () => "stable" !== Chunk998502.ZP.releaseChannel && Chunk131951.Z.isExperimentalEncodersSupported())
  },
  useValue: function() {
    return (0, Chunk442837.e7)([Chunk131951.Z], () => Chunk131951.Z.getExperimentalEncoders())
  },
  setValue: Chunk846027.Z.setExperimentalEncoders
})