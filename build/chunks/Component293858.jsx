/** Chunk was on 54400 **/
/** chunk id: 293858, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  b: () => S
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
  Chunk704215 = require("./704215.js"),
  Chunk605236 = require("./605236.js"),
  Chunk347896 = require("./347896.js"),
  Chunk717401 = require("./717401.js"),
  Chunk317269 = require("./317269.jsx"),
  Chunk585483 = require("./585483.js"),
  Chunk669079 = require("./669079.js"),
  Chunk296848 = require("./296848.js"),
  Chunk987209 = require("./987209.jsx"),
  Chunk563132 = require("./563132.jsx"),
  Chunk107998 = require("./107998.jsx"),
  Chunk27034 = require("./27034.jsx"),
  Chunk400981 = require("./400981.jsx"),
  Chunk435020 = require("./435020.js"),
  Chunk698708 = require("./698708.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js");

function S(e) {
  let t, {
      handleClose: n,
      planGroup: l,
      onSubscriptionConfirmation: S,
      renderPurchaseConfirmation: v,
      postSuccessGuild: E,
      followupSKUInfo: O,
      continueSessionToInitialStep: P
    } = e,
    {
      activeSubscription: k,
      paymentSources: w,
      paymentSourceId: M,
      selectedPlan: I,
      selectedSkuId: T,
      step: A,
      updatedSubscription: Z,
      startingPremiumSubscriptionPlanIdRef: N,
      startingFractionalPremiumEndsAtRef: R
    } = (0, f.JL)(),
    {
      isGift: B,
      giftRecipient: U,
      giftCode: H,
      hasSentMessage: F,
      isSendingMessage: G,
      sendGiftMessage: D,
      claimableRewards: K,
      selectedGiftingPromotionReward: z
    } = (0, h.wD)(),
    {
      confirmationFooter: W,
      maybeOpenMarketingMomentRewardsModal: Y
    } = (0, _.zb)(),
    V = null != W,
    q = (0, d.id)(I, B, K),
    J = (0, C.Z)(),
    Q = (0, d.a5)(I),
    X = (0, d.tK)(null == z ? true : z.skuId),
    $ = (0, g.$)(w, M),
    ee = B && null != z && Q;
  a()(null != I, "Expected plan to selected"), a()(null != T, "Expected selectedSkuId"), a()(null != A, "Step should be set");
  let et = i.useCallback(() => {
    n(), null == S || S()
  }, [n, S]);
  return i.useEffect(() => {
    function e() {
      null == Y || Y()
    }
    return u.S.subscribe(L.CkL.PREMIUM_PAYMENT_MODAL_CLOSED, e), () => {
      u.S.unsubscribe(L.CkL.PREMIUM_PAYMENT_MODAL_CLOSED, e)
    }
  }, [Y]), i.useEffect(() => {
    !B || null == U || null == H || F || G || (0, p.pO)(U) || D({
      onSubscriptionConfirmation: S
    })
  }, [D, B, U, H, F, G, S]), i.useEffect(() => {
    null != J && null != J.reminderNotice && q && (0, o.wH)(s.z.GIFTING_PROMOTION_REMINDER, J.dismissibleContentVersion, {
      dismissAction: y.L.INDIRECT_ACTION
    })
  }, [J, q]), t = null != v ? v(I, et, Z) : null != P ? (0, r.jsx)(c.VY, {}) : B ? (0, r.jsx)(c.TB, {
    planId: I.id,
    onClose: et
  }) : N.current === I.id ? (0, r.jsx)(c.ZP, {
    planId: I.id,
    postSuccessGuild: E,
    onClose: et,
    paymentSourceType: $,
    hideClose: V,
    startingFractionalPremiumEndsAt: R.current
  }) : (0, r.jsx)(c.ZP, {
    followupSKUInfo: O,
    startingPremiumSubscriptionPlanId: N.current,
    planId: I.id,
    onClose: et,
    isDowngrade: null != k && (0, x.GY)(k, I.id, l),
    paymentSourceType: $,
    hideClose: V,
    startingFractionalPremiumEndsAt: R.current
  }), (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)(m.C3, {
      children: [(0, r.jsx)(b.Z, {}), t]
    }), null != W && W, ee && null != X && (0, r.jsx)(j.Z, {
      onClose: et,
      selectedPromotionalDecoPurchaseRecord: X,
      selectedGiftingPromotionReward: z
    })]
  })
}