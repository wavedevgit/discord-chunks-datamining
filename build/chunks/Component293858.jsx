/** Chunk was on 54433 **/
/** chunk id: 293858, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  b: () => y
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
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

function y(e) {
  let n, {
      handleClose: t,
      planGroup: l,
      onSubscriptionConfirmation: y,
      renderPurchaseConfirmation: E,
      postSuccessGuild: S,
      followupSKUInfo: v,
      continueSessionToInitialStep: P
    } = e,
    {
      activeSubscription: O,
      paymentSources: b,
      paymentSourceId: Z,
      selectedPlan: I,
      selectedSkuId: M,
      step: T,
      updatedSubscription: w,
      startingPremiumSubscriptionPlanIdRef: A,
      startingFractionalPremiumEndsAtRef: R
    } = (0, h.JL)(),
    {
      isGift: N,
      giftRecipient: U,
      giftCode: k,
      hasSentMessage: B,
      isSendingMessage: H,
      sendGiftMessage: F,
      claimableRewards: G,
      selectedGiftingPromotionReward: D
    } = (0, x.wD)(),
    {
      confirmationFooter: z
    } = (0, j.zb)(),
    W = null != z,
    Y = (0, d.id)(I, N, G),
    K = (0, C.Z)(),
    V = (0, d.a5)(I),
    q = (0, d.tK)(null == D ? true : D.skuId),
    J = (0, _.$)(b, Z),
    Q = N && null != D && V;
  s()(null != I, "Expected plan to selected"), s()(null != M, "Expected selectedSkuId"), s()(null != T, "Step should be set");
  let X = r.useCallback(() => {
    t(), null == y || y()
  }, [t, y]);
  return r.useEffect(() => {
    !N || null == U || null == k || B || H || (0, u.pO)(U) || F({
      onSubscriptionConfirmation: y
    })
  }, [F, N, U, k, B, H, y]), r.useEffect(() => {
    null != K && null != K.reminderNotice && Y && (0, o.wH)(a.z.GIFTING_PROMOTION_REMINDER, K.dismissibleContentVersion, {
      dismissAction: g.L.INDIRECT_ACTION
    })
  }, [K, Y]), n = null != E ? E(I, X, w) : null != P ? (0, i.jsx)(c.VY, {}) : N ? (0, i.jsx)(c.TB, {
    planId: I.id,
    onClose: X
  }) : A.current === I.id ? (0, i.jsx)(c.ZP, {
    planId: I.id,
    postSuccessGuild: S,
    onClose: X,
    paymentSourceType: J,
    hideClose: W,
    startingFractionalPremiumEndsAt: R.current
  }) : (0, i.jsx)(c.ZP, {
    followupSKUInfo: v,
    startingPremiumSubscriptionPlanId: A.current,
    planId: I.id,
    onClose: X,
    isDowngrade: null != O && (0, p.GY)(O, I.id, l),
    paymentSourceType: J,
    hideClose: W,
    startingFractionalPremiumEndsAt: R.current
  }), (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsxs)(f.C3, {
      children: [(0, i.jsx)(L.Z, {}), n]
    }), null != z && z, Q && null != q && (0, i.jsx)(m.Z, {
      onClose: X,
      selectedPromotionalDecoPurchaseRecord: q,
      selectedGiftingPromotionReward: D
    })]
  })
}