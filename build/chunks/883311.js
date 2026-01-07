/** Chunk was on 1272 **/
/** chunk id: 883311, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk570140 = require("./570140.js"),
  Chunk317770 = require("./317770.js"),
  Chunk70956 = require("./70956.js"),
  Chunk948053 = require("./948053.js"),
  Chunk518929 = require("./518929.js");
let s = null;
class c extends Chunk317770.Z {
  _initialize() {
    r.Z.subscribe("POST_CONNECTION_OPEN", this.handlePostConnectionOpen)
  }
  _terminate() {
    r.Z.unsubscribe("POST_CONNECTION_OPEN", this.handlePostConnectionOpen)
  }
  handlePostConnectionOpen() {
    (0, o.VZ)("ICYMIManager", false) && (! function e() {
      let t = arguments.length > 0 && true !== arguments[0] && arguments[0];
      a.Z.fetchDehydrated({
        isInitialLoad: t
      }), null != s && clearTimeout(s), s = setTimeout(() => e(), 15 * l.Z.Millis.MINUTE)
    }(true), a.Z.getGuildChannelScores(), a.Z.getRecommendedGuilds())
  }
}
let u = new c