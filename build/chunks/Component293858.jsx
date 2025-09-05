/** Chunk was on 4125 **/
/** chunk id: 293858, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  b: () => b
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
      followupSKUInfo: v,
      continueSessionToInitialStep: E
    } = e,
    {
      activeSubscription: O,
      paymentSources: P,
      paymentSourceId: w,
      selectedPlan: k,
      selectedSkuId: M,
      step: I,
      updatedSubscription: T,
      startingPremiumSubscriptionPlanIdRef: A,
      startingFractionalPremiumEndsAtRef: Z
    } = (0, _.JL)(),
    {
      isGift: N,
      giftRecipient: B,
      giftCode: R,
      hasSentMessage: U,
      isSendingMessage: H,
      sendGiftMessage: F,
      claimableRewards: G,
      selectedGiftingPromotionReward: D
    } = (0, x.wD)(),
    {
      confirmationFooter: K
    } = (0, h.zb)(),
    z = null != K,
    W = (0, d.id)(k, N, G),
    Y = (0, C.Z)(),
    V = (0, d.a5)(k),
    q = (0, d.tK)(null == D ? true : D.skuId),
    J = (0, j.$)(P, w),
    X = N && null != D && V;
  a()(null != k, "Expected plan to selected"), a()(null != M, "Expected selectedSkuId"), a()(null != I, "Step should be set");
  let Q = i.useCallback(() => {
    n(), null == b || b()
  }, [n, b]);
  return i.useEffect(() => {
    !N || null == B || null == R || U || H || (0, u.pO)(B) || F({
      onSubscriptionConfirmation: b
    })
  }, [F, N, B, R, U, H, b]), i.useEffect(() => {
    null != Y && null != Y.reminderNotice && W && (0, o.wH)(s.z.GIFTING_PROMOTION_REMINDER, Y.dismissibleContentVersion, {
      dismissAction: g.L.INDIRECT_ACTION
    })
  }, [Y, W]), t = null != y ? y(k, Q, T) : null != E ? (0, r.jsx)(c.VY, {}) : N ? (0, r.jsx)(c.TB, {
    planId: k.id,
    onClose: Q
  }) : A.current === k.id ? (0, r.jsx)(c.ZP, {
    planId: k.id,
    postSuccessGuild: S,
    onClose: Q,
    paymentSourceType: J,
    hideClose: z,
    startingFractionalPremiumEndsAt: Z.current
  }) : (0, r.jsx)(c.ZP, {
    followupSKUInfo: v,
    startingPremiumSubscriptionPlanId: A.current,
    planId: k.id,
    onClose: Q,
    isDowngrade: null != O && (0, p.GY)(O, k.id, l),
    paymentSourceType: J,
    hideClose: z,
    startingFractionalPremiumEndsAt: Z.current
  }), (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)(f.C3, {
      children: [(0, r.jsx)(L.Z, {}), t]
    }), null != K && K, X && null != q && (0, r.jsx)(m.Z, {
      onClose: Q,
      selectedPromotionalDecoPurchaseRecord: q,
      selectedGiftingPromotionReward: D
    })]
  })
}