/** Chunk was on 84071 **/
/** chunk id: 293858, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  b: () => S
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
      startingFractionalPremiumEndsAtRef: F
    } = (0, f.JL)(),
    {
      isGift: R,
      giftRecipient: B,
      giftCode: U,
      hasSentMessage: H,
      isSendingMessage: G,
      sendGiftMessage: D,
      claimableRewards: Y,
      selectedGiftingPromotionReward: z
    } = (0, h.wD)(),
    {
      confirmationFooter: K,
      maybeOpenMarketingMomentRewardsModal: W
    } = (0, x.zb)(),
    V = null != K,
    q = (0, d.id)(M, R, Y),
    J = (0, C.Z)(),
    Q = (0, d.a5)(M),
    X = (0, d.tK)(null == z ? true : z.skuId),
    $ = (0, b.$)(w, k),
    ee = R && null != z && Q;
  o()(null != M, "Expected plan to selected"), o()(null != T, "Expected selectedSkuId"), o()(null != A, "Step should be set");
  let et = i.useCallback(() => {
    n(), null == S || S()
  }, [n, S]);
  return i.useEffect(() => {
    function e() {
      null == W || W()
    }
    return u.S.subscribe(L.CkL.PREMIUM_PAYMENT_MODAL_CLOSED, e), () => {
      u.S.unsubscribe(L.CkL.PREMIUM_PAYMENT_MODAL_CLOSED, e)
    }
  }, [W]), i.useEffect(() => {
    !R || null == B || null == U || H || G || (0, p.pO)(B) || D({
      onSubscriptionConfirmation: S
    })
  }, [D, R, B, U, H, G, S]), i.useEffect(() => {
    null != J && null != J.reminderNotice && q && (0, s.wH)(a.z.GIFTING_PROMOTION_REMINDER, J.dismissibleContentVersion, {
      dismissAction: y.L.INDIRECT_ACTION
    })
  }, [J, q]), t = null != v ? v(M, et, Z) : null != I ? (0, r.jsx)(c.VY, {}) : R ? (0, r.jsx)(c.TB, {
    planId: M.id,
    onClose: et
  }) : N.current === M.id ? (0, r.jsx)(c.ZP, {
    planId: M.id,
    postSuccessGuild: E,
    onClose: et,
    paymentSourceType: $,
    hideClose: V,
    startingFractionalPremiumEndsAt: F.current
  }) : (0, r.jsx)(c.ZP, {
    followupSKUInfo: O,
    startingPremiumSubscriptionPlanId: N.current,
    planId: M.id,
    onClose: et,
    isDowngrade: null != P && (0, _.GY)(P, M.id, l),
    paymentSourceType: $,
    hideClose: V,
    startingFractionalPremiumEndsAt: F.current
  }), (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)(m.C3, {
      children: [(0, r.jsx)(g.Z, {}), t]
    }), null != K && K, ee && null != X && (0, r.jsx)(j.Z, {
      onClose: et,
      selectedPromotionalDecoPurchaseRecord: X,
      selectedGiftingPromotionReward: z
    })]
  })
}