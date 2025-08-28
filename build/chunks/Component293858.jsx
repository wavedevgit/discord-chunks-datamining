/** Chunk was on 54400 **/
/** chunk id: 293858, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  b: () => b
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk512722 = require("./512722.js"),
  s = require.n(Chunk512722),
  Chunk704215 = require("./704215.js"),
  Chunk605236 = require("./605236.js"),
  Chunk347896 = require("./347896.js"),
  Chunk717401 = require("./717401.js"),
  Chunk317269 = require("./317269.jsx"),
  Chunk669079 = require("./669079.js"),
  Chunk296848 = require("./296848.js"),
  Chunk987209 = require("./987209.jsx"),
  Chunk563132 = require("./563132.jsx"),
  Chunk107998 = require("./107998.jsx"),
  Chunk27034 = require("./27034.jsx"),
  Chunk400981 = require("./400981.jsx"),
  Chunk435020 = require("./435020.js"),
  Chunk698708 = require("./698708.jsx"),
  Chunk921944 = require("./921944.js");

function b(e) {
  let t, {
      handleClose: n,
      planGroup: l,
      onSubscriptionConfirmation: b,
      renderPurchaseConfirmation: y,
      postSuccessGuild: S,
      followupSKUInfo: E,
      continueSessionToInitialStep: v
    } = e,
    {
      activeSubscription: P,
      paymentSources: O,
      paymentSourceId: I,
      selectedPlan: w,
      selectedSkuId: k,
      step: M,
      updatedSubscription: Z,
      startingPremiumSubscriptionPlanIdRef: T,
      startingFractionalPremiumEndsAtRef: A
    } = (0, _.JL)(),
    {
      isGift: B,
      giftRecipient: N,
      giftCode: U,
      hasSentMessage: R,
      isSendingMessage: H,
      sendGiftMessage: F,
      claimableRewards: G,
      selectedGiftingPromotionReward: D
    } = (0, x.wD)(),
    {
      confirmationFooter: z
    } = (0, h.zb)(),
    W = null != z,
    Y = (0, d.id)(w, B, G),
    K = (0, C.Z)(),
    V = (0, d.a5)(w),
    q = (0, d.tK)(null == D ? true : D.skuId),
    X = (0, m.$)(O, I),
    J = B && null != D && V;
  s()(null != w, "Expected plan to selected"), s()(null != k, "Expected selectedSkuId"), s()(null != M, "Step should be set");
  let Q = i.useCallback(() => {
    n(), null == b || b()
  }, [n, b]);
  return i.useEffect(() => {
    !B || null == N || null == U || R || H || (0, p.pO)(N) || F({
      onSubscriptionConfirmation: b
    })
  }, [F, B, N, U, R, H, b]), i.useEffect(() => {
    null != K && null != K.reminderNotice && Y && (0, o.wH)(a.z.GIFTING_PROMOTION_REMINDER, K.dismissibleContentVersion, {
      dismissAction: g.L.INDIRECT_ACTION
    })
  }, [K, Y]), t = null != y ? y(w, Q, Z) : null != v ? (0, r.jsx)(c.VY, {}) : B ? (0, r.jsx)(c.TB, {
    planId: w.id,
    onClose: Q
  }) : T.current === w.id ? (0, r.jsx)(c.ZP, {
    planId: w.id,
    postSuccessGuild: S,
    onClose: Q,
    paymentSourceType: X,
    hideClose: W,
    startingFractionalPremiumEndsAt: A.current
  }) : (0, r.jsx)(c.ZP, {
    followupSKUInfo: E,
    startingPremiumSubscriptionPlanId: T.current,
    planId: w.id,
    onClose: Q,
    isDowngrade: null != P && (0, u.GY)(P, w.id, l),
    paymentSourceType: X,
    hideClose: W,
    startingFractionalPremiumEndsAt: A.current
  }), (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)(f.C3, {
      children: [(0, r.jsx)(L.Z, {}), t]
    }), null != z && z, J && null != q && (0, r.jsx)(j.Z, {
      onClose: Q,
      selectedPromotionalDecoPurchaseRecord: q,
      selectedGiftingPromotionReward: D
    })]
  })
}