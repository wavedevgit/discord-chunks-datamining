/** Chunk was on web.js **/
/** chunk id: 715130, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  H: () => c
});
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk431 = require("./431.js"),
  Chunk748770 = require("./748770.js"),
  Chunk1844 = require("./1844.js"),
  Chunk397047 = require("./397047.js");

function c(e) {
  return r.useEffect(() => {
    (0, o.Pu)()
  }, []), (0, i.e7)([s.Z, a.Z], () => {
    let t = s.Z.getMarketingComponentByType(e);
    if (null == t) return null;
    let n = t.promotionId,
      r = s.Z.getPromotionByTypeAndId(l.$k.MARKETING_MOMENT, n);
    if ((null == r ? true : r.trialId) != null) {
      let e = a.Z.getUserTrialOffer(r.trialId);
      if (null == e || null != e.expires_at && Date.parse(e.expires_at) < Date.now()) return null
    }
    return t
  })
}