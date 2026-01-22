/** Chunk was on 90850 **/
/** chunk id: 258671, original params: e,l,t (module,exports,require) **/
require.d(exports, {
  A: () => a
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk857182 = require("./857182.js"),
  Chunk560010 = require("./560010.js");
let r = +require("./927813.js").A.Millis.HOUR;

function a(e) {
  let [l, t] = n.useState(false), a = (0, s.bG)([i.A], () => i.A.getFollowerStatsForChannel(e), [e]);
  return n.useEffect(() => {
    (null == a || Date.now() - a.lastFetched > r) && !l ? (t(true), o.A.fetchChannelFollowerStats(e)) : null != a && l && t(false)
  }, [e, a, l]), [a, l]
}