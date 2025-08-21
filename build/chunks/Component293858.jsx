/** Chunk was on 54400 **/
/** chunk id: 293858, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  b: () => g
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

function g(e) {
  let t, {
      handleClose: n,
      planGroup: l,
      onSubscriptionConfirmation: g,
      renderPurchaseConfirmation: y,
      postSuccessGuild: S,
      followupSKUInfo: v,
      continueSessionToInitialStep: E
    } = e,
    {
      activeSubscription: O,
      paymentSources: P,
      paymentSourceId: w,
      selectedPlan: I,
      selectedSkuId: Z,
      step: M,
      updatedSubscription: A,
      startingPremiumSubscriptionPlanIdRef: k,
      startingFractionalPremiumEndsAtRef: T
    } = (0, f.JL)(),
    {
      isGift: B,
      giftRecipient: R,
      giftCode: U,
      hasSentMessage: N,
      isSendingMessage: H,
      sendGiftMessage: F,
      claimableRewards: G,
      selectedGiftingPromotionReward: D
    } = (0, x.wD)(),
    {
      confirmationFooter: z
    } = (0, h.zb)(),
    W = null != z,
    Y = (0, d.id)(I, B, G),
    V = (0, C.Z)(),
    K = (0, d.a5)(I),
    q = (0, d.tK)(null == D ? true : D.skuId),
    X = (0, m.$)(P, w),
    J = B && null != D && K;
  a()(null != I, "Expected plan to selected"), a()(null != Z, "Expected selectedSkuId"), a()(null != M, "Step should be set");
  let Q = i.useCallback(() => {
    n(), null == g || g()
  }, [n, g]);
  return i.useEffect(() => {
    !B || null == R || null == U || N || H || (0, p.pO)(R) || F({
      onSubscriptionConfirmation: g
    })
  }, [F, B, R, U, N, H, g]), i.useEffect(() => {
    null != V && null != V.reminderNotice && Y && (0, o.wH)(s.z.GIFTING_PROMOTION_REMINDER, V.dismissibleContentVersion, {
      dismissAction: b.L.INDIRECT_ACTION
    })
  }, [V, Y]), t = null != y ? y(I, Q, A) : null != E ? (0, r.jsx)(c.VY, {}) : B ? (0, r.jsx)(c.TB, {
    planId: I.id,
    onClose: Q
  }) : k.current === I.id ? (0, r.jsx)(c.ZP, {
    planId: I.id,
    postSuccessGuild: S,
    onClose: Q,
    paymentSourceType: X,
    hideClose: W,
    startingFractionalPremiumEndsAt: T.current
  }) : (0, r.jsx)(c.ZP, {
    followupSKUInfo: v,
    startingPremiumSubscriptionPlanId: k.current,
    planId: I.id,
    onClose: Q,
    isDowngrade: null != O && (0, u.GY)(O, I.id, l),
    paymentSourceType: X,
    hideClose: W,
    startingFractionalPremiumEndsAt: T.current
  }), (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)(_.C3, {
      children: [(0, r.jsx)(L.Z, {}), t]
    }), null != z && z, J && null != q && (0, r.jsx)(j.Z, {
      onClose: Q,
      selectedPromotionalDecoPurchaseRecord: q,
      selectedGiftingPromotionReward: D
    })]
  })
}