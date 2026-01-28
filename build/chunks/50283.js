/** Chunk was on 21738 **/
/** chunk id: 50283, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  _: () => a
});
var Chunk562465 = require("./562465.js");
require("./73153.js");
var Chunk728458 = require("./728458.js"),
  Chunk652215 = require("./652215.js");
async function a(e) {
  let {
    userTrialOffer: t,
    userDiscount: n,
    userDiscountOffer: a
  } = e;
  try {
    let e = await r.Bo.post({
      url: l.Rsh.PREMIUM_MARKETING,
      body: {
        user_trial_offer: t,
        user_discount: n,
        user_discount_offer: a
      },
      rejectWithError: true
    });
    if (e.ok) return e.body;
    return i.A.captureMessage("fetchPremiumMarketingContentWithUserOffer failed"), []
  } catch (e) {
    return []
  }
}