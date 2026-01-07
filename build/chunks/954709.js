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
    i.Z.subscribe("POST_CONNECTION_OPEN", this.handlePostConnectionOpen)
  }
  _terminate() {
    i.Z.unsubscribe("POST_CONNECTION_OPEN", this.handlePostConnectionOpen)
  }
  handlePostConnectionOpen() {
    let e = a.Z.get("shop_include_unpublished");
    (0, o.R2)({
      release: e ? r.P.BETA : r.P.PROD
    })
  }
}
let c = new s