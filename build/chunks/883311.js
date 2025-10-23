/** Chunk was on 1272 **/
/** chunk id: 883311, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk570140 = require("./570140.js"),
  Chunk317770 = require("./317770.js"),
  Chunk479313 = require("./479313.js"),
  Chunk70956 = require("./70956.js"),
  Chunk948053 = require("./948053.js"),
  Chunk518929 = require("./518929.js");
let c = null;
class u extends Chunk317770.Z {
  _initialize() {
    Chunk570140.Z.subscribe("POST_CONNECTION_OPEN", this.handlePostConnectionOpen)
  }
  _terminate() {
    Chunk570140.Z.unsubscribe("POST_CONNECTION_OPEN", this.handlePostConnectionOpen)
  }
  handlePostConnectionOpen() {
    (0, Chunk518929.VZ)("ICYMIManager", false) && (! function e() {
      let t = arguments.length > 0 && true !== arguments[0] && arguments[0];
      Chunk948053.Z.fetchDehydrated({
        isInitialLoad: exports
      }), null != c && clearTimeout(c), c = setTimeout(() => module(), 15 * Chunk70956.Z.Millis.MINUTE)
    }(true), Chunk948053.Z.getGuildChannelScores(), Chunk948053.Z.getRecommendedGuilds(), (0, Chunk479313.Fc)())
  }
}
let d = new u