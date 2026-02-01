/** Chunk was on 9753 **/
/** chunk id: 664654, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  J: () => c,
  Z: () => o
});
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk803306 = require("./803306.js"),
  Chunk287809 = require("./287809.js"),
  Chunk851746 = require("./851746.js");
let o = 3;

function c() {
  let e = (0, i.yK)([s.A], () => s.A.getSentUserIds()),
    t = (0, i.yK)([a.default], () => e.map(e => a.default.getUser(e)).filter(e => null != e));
  return r.useEffect(() => {
    e.forEach(e => {
      (0, l.wz)(e)
    })
  }, [e]), {
    referralSentUsers: t,
    hasSentAllReferrals: e.length === o,
    refreshAt: (0, i.bG)([s.A], () => s.A.getRefreshAt())
  }
}