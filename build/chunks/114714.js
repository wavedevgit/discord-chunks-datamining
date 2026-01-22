/** Chunk was on 21738 **/
/** chunk id: 114714, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => u
});
var Chunk73153 = require("./73153.js"),
  Chunk272355 = require("./272355.js"),
  Chunk927813 = require("./927813.js"),
  Chunk4106 = require("./4106.js"),
  Chunk335934 = require("./335934.js");
let o = null;
class c extends Chunk272355.A {
  _initialize() {
    r.h.subscribe("POST_CONNECTION_OPEN", this.handlePostConnectionOpen)
  }
  _terminate() {
    r.h.unsubscribe("POST_CONNECTION_OPEN", this.handlePostConnectionOpen)
  }
  handlePostConnectionOpen() {
    (0, s.HF)("ICYMIManager", false) && (! function e() {
      let t = arguments.length > 0 && true !== arguments[0] && arguments[0];
      a.A.fetchDehydrated({
        isInitialLoad: t
      }), null != o && clearTimeout(o), o = setTimeout(() => e(), 15 * l.A.Millis.MINUTE)
    }(true), a.A.getGuildChannelScores(), a.A.getRecommendedGuilds())
  }
}
let u = new c