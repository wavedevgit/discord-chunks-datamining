/** Chunk was on 6310 **/
/** chunk id: 812545, original params: e,n,s (module,exports,require) **/
require.d(exports, {
  Z: () => r
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk528963 = require("./528963.js"),
  Chunk606956 = require("./606956.js");
let a = +require("./70956.js").Z.Millis.HOUR;

function r(e) {
  let [n, s] = t.useState(false), r = (0, l.e7)([o.Z], () => o.Z.getFollowerStatsForChannel(e), [e]);
  return t.useEffect(() => {
    (null == r || Date.now() - r.lastFetched > a) && !n ? (s(true), i.Z.fetchChannelFollowerStats(e)) : null != r && n && s(false)
  }, [e, r, n]), [r, n]
}