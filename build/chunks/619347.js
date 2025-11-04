/** Chunk was on 9452 **/
/** chunk id: 619347, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk442837 = require("./442837.js"),
  Chunk846027 = require("./846027.js"),
  Chunk509613 = require("./509613.js"),
  Chunk131951 = require("./131951.js"),
  Chunk313789 = require("./313789.js"),
  Chunk65154 = require("./65154.js"),
  Chunk388032 = require("./388032.jsx");
let c = (0, Chunk509613.qs)(Chunk313789.n.STREAMING_OPENH264_CODEC, {
  useTitle: () => Chunk388032.intl.string(Chunk388032.t["71Ve1y"]),
  usePredicate: function() {
    return (0, Chunk442837.e7)([Chunk131951.Z], () => Chunk131951.Z.supports(Chunk65154.AN.OPEN_H264))
  },
  useValue: function() {
    return (0, Chunk442837.e7)([Chunk131951.Z], () => Chunk131951.Z.getOpenH264())
  },
  setValue: Chunk846027.Z.setOpenH264
})