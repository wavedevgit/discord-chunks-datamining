/** Chunk was on 74824 **/
n.d(t, {
  Ei: () => c,
  He: () => a,
  es: () => s
});
var r = n(544891),
  l = n(570140),
  i = n(960048),
  o = n(981631);

function s(e) {
  l.Z.dispatch({
    type: "BILLING_SUBSCRIPTION_REWARD_ELIGIBILITY_FETCH_SUCCESS",
    eligible: e
  })
}
async function a(e) {
  let {
    userTrialOffer: t,
    userDiscount: n,
    userDiscountOffer: l
  } = e;
  try {
    let e = await r.tn.post({
      url: o.ANM.PREMIUM_MARKETING,
      body: {
        user_trial_offer: t,
        user_discount: n,
        user_discount_offer: l
      },
      rejectWithError: !0
    });
    if (e.ok) return e.body;
    return i.Z.captureMessage("fetchPremiumMarketingContentWithUserOffer failed"), []
  } catch (e) {
    return []
  }
}
async function c(e) {
  let {
    subscriptionId: t,
    rewardSkuIds: n
  } = e;
  try {
    let e = await r.tn.post({
      url: o.ANM.BILLING_SUBSCRIPTION_REWARDS(t),
      body: {
        reward_sku_ids: n
      },
      rejectWithError: !0
    });
    return l.Z.dispatch({
      type: "ENTITLEMENT_CREATE",
      entitlement: e.body
    }), e.ok
  } catch (e) {
    return !1
  }
}