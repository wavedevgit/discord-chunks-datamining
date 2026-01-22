/** Chunk was on 21738 **/
/** chunk id: 567061, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  E: () => a
});
var Chunk64700 = require("./64700.js"),
  Chunk4106 = require("./4106.js"),
  Chunk105971 = require("./105971.js");

function a(e) {
  return r.useCallback(async () => {
    l.k.trackFeedShown({
      variant: null != e && e ? "DotShown" : "NoDotShown",
      homeSessionId: "gravity_refresh"
    }), await i.A.fetchDehydrated({
      isReloading: true
    }), await i.A.reloadICYMITab(), await i.A.getGuildChannelScores(), i.A.getRecommendedGuilds()
  }, [e])
}