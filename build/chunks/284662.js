/** Chunk was on web.js **/
/** chunk id: 284662, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  d: () => l
});
var Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk538981 = require("./538981.jsx"),
  Chunk654588 = require("./654588.js"),
  Chunk266198 = require("./266198.js");
let l = () => {
  var e;
  let t = (0, Chunk442837.e7)([Chunk654588.Z], () => Chunk654588.Z.state);
  return (0, Chunk647438.useEffect)(() => {
    exports.shouldRefetchCampaignEligibility && !exports.isFetchingCampaignEligibility && (0, Chunk538981.f)({
      campaignId: Chunk266198.w_
    })
  }, [exports.shouldRefetchCampaignEligibility, exports.isFetchingCampaignEligibility]), {
    isEligible: null != (e = exports.isEligibleForCampaign) && module,
    isLoading: exports.isFetchingCampaignEligibility
  }
}