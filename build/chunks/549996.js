/** Chunk was on web.js **/
/** chunk id: 549996, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  c: () => c
});
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk816733 = require("./816733.js"),
  Chunk597758 = require("./597758.js"),
  Chunk412260 = require("./412260.js"),
  Chunk852218 = require("./852218.js");

function c(e) {
  return r.useEffect(() => {
    (0, s.BE)()
  }, []), (0, i.bG)([o.A, a.A], () => {
    let t = o.A.getMarketingComponentByType(e);
    if (null == t) return null;
    let n = t.promotionId,
      r = o.A.getPromotionByTypeAndId(l.pt.MARKETING_MOMENT, n);
    if ((null == r ? true : r.trialId) != null) {
      let e = a.A.getUserTrialOffer(r.trialId);
      if (null == e || null != e.expires_at && Date.parse(e.expires_at) < Date.now()) return null
    }
    return t
  })
}