/** Chunk was on 54400 **/
/** chunk id: 293858, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  b: () => S
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

function S(e) {
  let n, {
      handleClose: t,
      planGroup: l,
      onSubscriptionConfirmation: S,
      renderPurchaseConfirmation: y,
      postSuccessGuild: E,
      followupSKUInfo: b,
      continueSessionToInitialStep: P
    } = e,
    {
      activeSubscription: O,
      paymentSources: I,
      paymentSourceId: v,
      selectedPlan: Z,
      selectedSkuId: M,
      step: w,
      updatedSubscription: A,
      startingPremiumSubscriptionPlanIdRef: B,
      startingFractionalPremiumEndsAtRef: T
    } = (0, _.JL)(),
    {
      isGift: U,
      giftRecipient: k,
      giftCode: R,
      hasSentMessage: H,
      isSendingMessage: F,
      sendGiftMessage: N,
      claimableRewards: G,
      selectedGiftingPromotionReward: D
    } = (0, x.wD)(),
    {
      confirmationFooter: W
    } = (0, f.zb)(),
    z = null != W,
    Y = (0, d.id)(Z, U, G),
    K = (0, C.Z)(),
    V = (0, d.a5)(Z),
    q = (0, d.tK)(null == D ? true : D.skuId),
    J = (0, L.$)(I, v),
    Q = U && null != D && V;
  s()(null != Z, "Expected plan to selected"), s()(null != M, "Expected selectedSkuId"), s()(null != w, "Step should be set");
  let X = i.useCallback(() => {
    t(), null == S || S()
  }, [t, S]);
  return i.useEffect(() => {
    !U || null == k || null == R || H || F || (0, c.pO)(k) || N({
      onSubscriptionConfirmation: S
    })
  }, [N, U, k, R, H, F, S]), i.useEffect(() => {
    null != K && null != K.reminderNotice && Y && (0, o.wH)(a.z.GIFTING_PROMOTION_REMINDER, K.dismissibleContentVersion, {
      dismissAction: g.L.INDIRECT_ACTION
    })
  }, [K, Y]), n = null != y ? y(Z, X, A) : null != P ? (0, r.jsx)(p.VY, {}) : U ? (0, r.jsx)(p.TB, {
    planId: Z.id,
    onClose: X
  }) : B.current === Z.id ? (0, r.jsx)(p.ZP, {
    planId: Z.id,
    postSuccessGuild: E,
    onClose: X,
    paymentSourceType: J,
    hideClose: z,
    startingFractionalPremiumEndsAt: T.current
  }) : (0, r.jsx)(p.ZP, {
    followupSKUInfo: b,
    startingPremiumSubscriptionPlanId: B.current,
    planId: Z.id,
    onClose: X,
    isDowngrade: null != O && (0, u.GY)(O, Z.id, l),
    paymentSourceType: J,
    hideClose: z,
    startingFractionalPremiumEndsAt: T.current
  }), (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)(h.C3, {
      children: [(0, r.jsx)(m.Z, {}), n]
    }), null != W && W, Q && null != q && (0, r.jsx)(j.Z, {
      onClose: X,
      selectedPromotionalDecoPurchaseRecord: q,
      selectedGiftingPromotionReward: D
    })]
  })
}