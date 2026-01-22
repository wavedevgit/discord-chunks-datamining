/** Chunk was on web.js **/
/** chunk id: 664654, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  J: () => c,
  Z: () => l
});
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk803306 = require("./803306.js"),
  Chunk287809 = require("./287809.js"),
  Chunk851746 = require("./851746.js");
let l = 3;

function c() {
  let e = (0, i.yK)([o.A], () => o.A.getSentUserIds()),
    t = (0, i.yK)([s.default], () => e.map(e => s.default.getUser(e)).filter(e => null != e));
  return r.useEffect(() => {
    e.forEach(e => {
      (0, a.wz)(e)
    })
  }, [e]), {
    referralSentUsers: t,
    hasSentAllReferrals: e.length === l,
    refreshAt: (0, i.bG)([o.A], () => o.A.getRefreshAt())
  }
}