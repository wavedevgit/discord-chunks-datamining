/** Chunk was on 1272 **/
/** chunk id: 954709, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk664081 = require("./664081.js"),
  Chunk570140 = require("./570140.js"),
  Chunk317770 = require("./317770.js"),
  Chunk863750 = require("./863750.js"),
  Chunk335131 = require("./335131.js");
class s extends Chunk317770.Z {
  _initialize() {
    Chunk570140.Z.subscribe("POST_CONNECTION_OPEN", this.handlePostConnectionOpen)
  }
  _terminate() {
    Chunk570140.Z.unsubscribe("POST_CONNECTION_OPEN", this.handlePostConnectionOpen)
  }
  handlePostConnectionOpen() {
    let e = Chunk863750.Z.get("shop_include_unpublished");
    (0, Chunk335131.R2)({
      release: module ? Chunk664081.P.BETA : Chunk664081.P.PROD
    })
  }
}
let c = new s