/** Chunk was on 1272 **/
/** chunk id: 620360, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => l
});
var Chunk570140 = require("./570140.js"),
  Chunk211644 = require("./211644.js");
let l = {
  init() {
    Chunk570140.Z.subscribe("CONNECTION_OPEN", () => {
      (0, Chunk211644.mc)()
    }), Chunk570140.Z.subscribe("LOGOUT", () => {
      (0, Chunk211644.mc)()
    })
  }
}