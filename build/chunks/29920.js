/** Chunk was on 59289 **/
/** chunk id: 29920, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  He: () => c,
  Ul: () => o
});
var Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk960048 = require("./960048.js"),
  Chunk981631 = require("./981631.js");
async function c(e) {
  let {
    userTrialOffer: t,
    userDiscount: n,
    userDiscountOffer: i
  } = e;
  try {
    let e = await r.tn.post({
      url: l.ANM.PREMIUM_MARKETING,
      body: {
        user_trial_offer: t,
        user_discount: n,
        user_discount_offer: i
      },
      rejectWithError: true
    });
    if (e.ok) return e.body;
    return a.Z.captureMessage("fetchPremiumMarketingContentWithUserOffer failed"), []
  } catch (e) {
    return []
  }
}
async function o(e) {
  let {
    subscriptionId: t
  } = e;
  try {
    let e = await r.tn.post({
      url: l.ANM.BILLING_SUBSCRIPTION_PROMOTION_REWARD(t),
      rejectWithError: true
    });
    return i.Z.dispatch({
      type: "ENTITLEMENT_CREATE",
      entitlement: e.body
    }), e.ok
  } catch (e) {
    returnfalse
  }
}