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
      continueSessionToInitialStep: O
    } = e,
    {
      activeSubscription: P,
      paymentSources: v,
      paymentSourceId: I,
      selectedPlan: w,
      selectedSkuId: M,
      step: Z,
      updatedSubscription: k,
      startingPremiumSubscriptionPlanIdRef: A,
      startingFractionalPremiumEndsAtRef: T
    } = (0, h.JL)(),
    {
      isGift: B,
      giftRecipient: U,
      giftCode: R,
      hasSentMessage: N,
      isSendingMessage: H,
      sendGiftMessage: F,
      claimableRewards: G,
      selectedGiftingPromotionReward: D
    } = (0, x.wD)(),
    {
      confirmationFooter: z
    } = (0, _.zb)(),
    W = null != z,
    Y = (0, d.id)(w, B, G),
    V = (0, C.Z)(),
    K = (0, d.a5)(w),
    q = (0, d.tK)(null == D ? true : D.skuId),
    J = (0, m.$)(v, I),
    X = B && null != D && K;
  s()(null != w, "Expected plan to selected"), s()(null != M, "Expected selectedSkuId"), s()(null != Z, "Step should be set");
  let Q = i.useCallback(() => {
    n(), null == b || b()
  }, [n, b]);
  return i.useEffect(() => {
    !B || null == U || null == R || N || H || (0, p.pO)(U) || F({
      onSubscriptionConfirmation: b
    })
  }, [F, B, U, R, N, H, b]), i.useEffect(() => {
    null != V && null != V.reminderNotice && Y && (0, o.wH)(a.z.GIFTING_PROMOTION_REMINDER, V.dismissibleContentVersion, {
      dismissAction: g.L.INDIRECT_ACTION
    })
  }, [V, Y]), t = null != y ? y(w, Q, k) : null != O ? (0, r.jsx)(c.VY, {}) : B ? (0, r.jsx)(c.TB, {
    planId: w.id,
    onClose: Q
  }) : A.current === w.id ? (0, r.jsx)(c.ZP, {
    planId: w.id,
    postSuccessGuild: S,
    onClose: Q,
    paymentSourceType: J,
    hideClose: W,
    startingFractionalPremiumEndsAt: T.current
  }) : (0, r.jsx)(c.ZP, {
    followupSKUInfo: E,
    startingPremiumSubscriptionPlanId: A.current,
    planId: w.id,
    onClose: Q,
    isDowngrade: null != P && (0, u.GY)(P, w.id, l),
    paymentSourceType: J,
    hideClose: W,
    startingFractionalPremiumEndsAt: T.current
  }), (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)(f.C3, {
      children: [(0, r.jsx)(L.Z, {}), t]
    }), null != z && z, X && null != q && (0, r.jsx)(j.Z, {
      onClose: Q,
      selectedPromotionalDecoPurchaseRecord: q,
      selectedGiftingPromotionReward: D
    })]
  })
}