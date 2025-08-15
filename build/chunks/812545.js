/** Chunk was on 6310 **/
/** chunk id: 812545, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => r
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk528963 = require("./528963.js"),
  Chunk606956 = require("./606956.js");
let a = +require("./70956.js").Z.Millis.HOUR;

function r(e) {
  let [n, t] = s.useState(false), r = (0, l.e7)([i.Z], () => i.Z.getFollowerStatsForChannel(e), [e]);
  return s.useEffect(() => {
    (null == r || Date.now() - r.lastFetched > a) && !n ? (t(true), o.Z.fetchChannelFollowerStats(e)) : null != r && n && t(false)
  }, [e, r, n]), [r, n]
}