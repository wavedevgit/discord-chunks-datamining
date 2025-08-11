/** Chunk was on 1272 **/
/** chunk id: 306721, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => a
});
var Chunk401430 = require("./401430.js"),
  Chunk283595 = require("./283595.js"),
  Chunk695103 = require("./695103.js");
let a = {
  init() {
    Chunk283595.Z.whenInitialized(() => {
      null != Chunk695103.Z.testModeApplicationId && (0, Chunk401430.Wt)(Chunk695103.Z.testModeApplicationId, Chunk695103.Z.testModeOriginURL)
    })
  }
}