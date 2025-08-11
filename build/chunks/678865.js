/** Chunk was on 31649 **/
/** chunk id: 678865, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => r
});
var Chunk481060 = require("./481060.js"),
  Chunk695346 = require("./695346.js");

function r() {
  switch (Chunk695346.co.getSetting()) {
    case Chunk481060.Skl.IDLE:
      return Chunk481060.Skl.IDLE;
    case Chunk481060.Skl.DND:
      return Chunk481060.Skl.DND;
    case Chunk481060.Skl.INVISIBLE:
      return Chunk481060.Skl.INVISIBLE;
    default:
      return Chunk481060.Skl.ONLINE
  }
}