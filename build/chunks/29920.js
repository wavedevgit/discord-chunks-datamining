/** Chunk was on 1272 **/
/** chunk id: 29920, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  He: () => a
});
var Chunk544891 = require("./544891.js");
require("./570140.js");
var Chunk960048 = require("./960048.js"),
  Chunk981631 = require("./981631.js");
async function a(e) {
  let {
    userTrialOffer: t,
    userDiscount: n,
    userDiscountOffer: a
  } = e;
  try {
    let e = await r.tn.post({
      url: l.ANM.PREMIUM_MARKETING,
      body: {
        user_trial_offer: t,
        user_discount: n,
        user_discount_offer: a
      },
      rejectWithError: true
    });
    if (e.ok) return e.body;
    return i.Z.captureMessage("fetchPremiumMarketingContentWithUserOffer failed"), []
  } catch (e) {
    return []
  }
}