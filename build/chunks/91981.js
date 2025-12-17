/** Chunk was on 77069 **/
/** chunk id: 91981, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  W: () => S
});
var Chunk818710 = require("./818710.js"),
  Chunk442837 = require("./442837.js"),
  Chunk509613 = require("./509613.js"),
  Chunk131951 = require("./131951.js"),
  Chunk313789 = require("./313789.js"),
  Chunk546997 = require("./546997.jsx"),
  Chunk388032 = require("./388032.jsx");
let S = (0, Chunk509613.qs)(Chunk313789.n.STREAMING_OS_MENU_SCREEN_CAPTURE, {
  useTitle: () => Chunk388032.intl.string(Chunk388032.t.lt8rRx),
  useSubtitle: () => Chunk388032.intl.string(Chunk388032.t.ie1mgY),
  useValue: function() {
    return (0, Chunk442837.e7)([Chunk131951.Z], () => Chunk131951.Z.getUseSystemScreensharePicker())
  },
  setValue: Chunk546997.E,
  usePredicate: function() {
    return (0, Chunk442837.e7)([Chunk131951.Z], () => Chunk131951.Z.supportsSystemScreensharePicker() && (0, Chunk818710.V5)())
  }
})