/** Chunk was on 1272 **/
/** chunk id: 390536, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  G: () => a
});
var Chunk473749 = require("./473749.js"),
  Chunk948053 = require("./948053.js"),
  Chunk944596 = require("./944596.js");

function a(e) {
  return r.useCallback(async () => {
    l.m.trackFeedShown({
      variant: null != e && e ? "DotShown" : "NoDotShown",
      homeSessionId: "gravity_refresh"
    }), await i.Z.fetchDehydrated({
      isReloading: true
    }), await i.Z.reloadICYMITab(), await i.Z.getGuildChannelScores(), i.Z.getRecommendedGuilds()
  }, [e])
}