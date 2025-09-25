/** Chunk was on 37786 **/
/** chunk id: 293858, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  b: () => v
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
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
  Chunk614277 = require("./614277.jsx"),
  Chunk400981 = require("./400981.jsx"),
  Chunk435020 = require("./435020.js"),
  Chunk698708 = require("./698708.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js");

function v(e) {
  let t, {
      handleClose: n,
      planGroup: a,
      onSubscriptionConfirmation: v,
      renderPurchaseConfirmation: S,
      postSuccessGuild: O,
      followupSKUInfo: E,
      continueSessionToInitialStep: I
    } = e,
    {
      activeSubscription: P,
      paymentSources: w,
      paymentSourceId: k,
      selectedPlan: M,
      selectedSkuId: T,
      step: A,
      updatedSubscription: Z,
      startingPremiumSubscriptionPlanIdRef: N,
      startingFractionalPremiumEndsAtRef: R
    } = (0, h.JL)(),
    {
      isGift: F,
      giftRecipient: B,
      giftCode: U,
      hasSentMessage: H,
      isSendingMessage: G,
      sendGiftMessage: D,
      claimableRewards: z,
      selectedGiftingPromotionReward: Y
    } = (0, f.wD)(),
    {
      confirmationFooter: K,
      maybeOpenMarketingMomentRewardsModal: W
    } = (0, m.zb)(),
    V = null != K,
    q = (0, C.id)(M, F, z),
    J = (0, d.Z)(),
    X = (0, C.a5)(M),
    Q = (0, C.tK)(null == Y ? true : Y.skuId),
    $ = (0, g.$)(w, k),
    ee = F && null != Y && X;
  o()(null != M, "Expected plan to selected"), o()(null != T, "Expected selectedSkuId"), o()(null != A, "Step should be set");
  let et = i.useCallback(() => {
    n(), null == v || v()
  }, [n, v]);
  return i.useEffect(() => {
    function e() {
      null == W || W()
    }
    return u.S.subscribe(L.CkL.PREMIUM_PAYMENT_MODAL_CLOSED, e), () => {
      u.S.unsubscribe(L.CkL.PREMIUM_PAYMENT_MODAL_CLOSED, e)
    }
  }, [W]), i.useEffect(() => {
    !F || null == B || null == U || H || G || (0, p.pO)(B) || D({
      onSubscriptionConfirmation: v
    })
  }, [D, F, B, U, H, G, v]), i.useEffect(() => {
    null != J && null != J.reminderNotice && q && (0, s.wH)(l.z.GIFTING_PROMOTION_REMINDER, J.dismissibleContentVersion, {
      dismissAction: y.L.INDIRECT_ACTION
    })
  }, [J, q]), t = null != S ? S(M, et, Z) : null != I ? (0, r.jsx)(c.VY, {}) : F ? (0, r.jsx)(c.TB, {
    planId: M.id,
    onClose: et
  }) : N.current === M.id ? (0, r.jsx)(c.ZP, {
    planId: M.id,
    postSuccessGuild: O,
    onClose: et,
    paymentSourceType: $,
    hideClose: V,
    startingFractionalPremiumEndsAt: R.current
  }) : (0, r.jsx)(c.ZP, {
    followupSKUInfo: E,
    startingPremiumSubscriptionPlanId: N.current,
    planId: M.id,
    onClose: et,
    isDowngrade: null != P && (0, _.GY)(P, M.id, a),
    paymentSourceType: $,
    hideClose: V,
    startingFractionalPremiumEndsAt: R.current
  }), (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)(x.C3, {
      children: [(0, r.jsx)(b.Z, {}), t]
    }), null != K && K, ee && null != Q && (0, r.jsx)(j.Z, {
      onClose: et,
      selectedPromotionalDecoPurchaseRecord: Q,
      selectedGiftingPromotionReward: Y
    })]
  })
}