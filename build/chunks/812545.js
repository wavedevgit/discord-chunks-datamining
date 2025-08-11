/** Chunk was on 6310 **/
/** chunk id: 812545, original params: n,t,l (module,exports,require) **/
require.d(exports, {
  Z: () => r
}), require("./388685.js");
var Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk528963 = require("./528963.js"),
  Chunk606956 = require("./606956.js");
let a = +require("./70956.js").Z.Millis.HOUR;

function r(n) {
  let [t, l] = e.useState(false), r = (0, i.e7)([s.Z], () => s.Z.getFollowerStatsForChannel(n), [n]);
  return e.useEffect(() => {
    (null == r || Date.now() - r.lastFetched > a) && !t ? (l(true), o.Z.fetchChannelFollowerStats(n)) : null != r && t && l(false)
  }, [n, r, t]), [r, t]
}