/** Chunk was on 90850 **/
/** chunk id: 258671, original params: e,l,t (module,exports,require) **/
require.d(exports, {
  A: () => r
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk857182 = require("./857182.js"),
  Chunk560010 = require("./560010.js");
let a = +require("./927813.js").A.Millis.HOUR;

function r(e) {
  let [l, t] = s.useState(false), r = (0, n.bG)([o.A], () => o.A.getFollowerStatsForChannel(e), [e]);
  return s.useEffect(() => {
    (null == r || Date.now() - r.lastFetched > a) && !l ? (t(true), i.A.fetchChannelFollowerStats(e)) : null != r && l && t(false)
  }, [e, r, l]), [r, l]
}