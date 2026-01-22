/** Chunk was on 21738 **/
/** chunk id: 778830, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => c
});
var Chunk148803 = require("./148803.js"),
  Chunk73153 = require("./73153.js"),
  Chunk272355 = require("./272355.js"),
  Chunk115328 = require("./115328.js"),
  Chunk979286 = require("./979286.js");
class o extends Chunk272355.A {
  _initialize() {
    i.h.subscribe("POST_CONNECTION_OPEN", this.handlePostConnectionOpen)
  }
  _terminate() {
    i.h.unsubscribe("POST_CONNECTION_OPEN", this.handlePostConnectionOpen)
  }
  handlePostConnectionOpen() {
    let e = a.A.get("shop_include_unpublished");
    (0, s.LX)({
      release: e ? r.P.BETA : r.P.PROD
    })
  }
}
let c = new o