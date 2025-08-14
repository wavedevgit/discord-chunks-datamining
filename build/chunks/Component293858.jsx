/** Chunk was on 47238 **/
/** chunk id: 293858, original params: e,r,n (module,exports,require) **/
require.d(exports, {
  b: () => b
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
  Chunk704215 = require("./704215.js"),
  Chunk605236 = require("./605236.js"),
  Chunk717401 = require("./717401.js"),
  Chunk286961 = require("./286961.js"),
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
  let r, {
      handleClose: n,
      planGroup: o,
      onSubscriptionConfirmation: b,
      renderPurchaseConfirmation: y,
      postSuccessGuild: S,
      followupSKUInfo: v,
      continueSessionToInitialStep: E
    } = e,
    {
      activeSubscription: I,
      paymentSources: P,
      paymentSourceId: T,
      selectedPlan: O,
      selectedSkuId: w,
      step: Z,
      updatedSubscription: M,
      startingPremiumSubscriptionPlanIdRef: A,
      startingFractionalPremiumEndsAtRef: R
    } = (0, x.JL)(),
    {
      isGift: B,
      giftRecipient: N,
      giftCode: k,
      hasSentMessage: F,
      isSendingMessage: U,
      sendGiftMessage: H,
      claimableRewards: G,
      selectedGiftingPromotionReward: D
    } = (0, _.wD)(),
    {
      confirmationFooter: z
    } = (0, f.zb)(),
    Y = null != z,
    W = (0, C.id)(O, B, G),
    K = (0, d.Z)(),
    V = (0, C.a5)(O),
    q = (0, C.tK)(null == D ? true : D.skuId),
    J = (0, j.$)(P, T),
    Q = B && null != D && V;
  a()(null != O, "Expected plan to selected"), a()(null != w, "Expected selectedSkuId"), a()(null != Z, "Step should be set");
  let X = i.useCallback(() => {
    n(), null == b || b()
  }, [n, b]);
  return i.useEffect(() => {
    !B || null == N || null == k || F || U || (0, p.pO)(N) || H({
      onSubscriptionConfirmation: b
    })
  }, [H, B, N, k, F, U, b]), i.useEffect(() => {
    null != K && null != K.reminderNotice && W && (0, s.wH)(l.z.GIFTING_PROMOTION_REMINDER, K.dismissibleContentVersion, {
      dismissAction: g.L.INDIRECT_ACTION
    })
  }, [K, W]), r = null != y ? y(O, X, M) : null != E ? (0, t.jsx)(c.VY, {}) : B ? (0, t.jsx)(c.TB, {
    planId: O.id,
    onClose: X
  }) : A.current === O.id ? (0, t.jsx)(c.ZP, {
    planId: O.id,
    postSuccessGuild: S,
    onClose: X,
    paymentSourceType: J,
    hideClose: Y,
    startingFractionalPremiumEndsAt: R.current
  }) : (0, t.jsx)(c.ZP, {
    followupSKUInfo: v,
    startingPremiumSubscriptionPlanId: A.current,
    planId: O.id,
    onClose: X,
    isDowngrade: null != I && (0, u.GY)(I, O.id, o),
    paymentSourceType: J,
    hideClose: Y,
    startingFractionalPremiumEndsAt: R.current
  }), (0, t.jsxs)(t.Fragment, {
    children: [(0, t.jsxs)(m.C3, {
      children: [(0, t.jsx)(L.Z, {}), r]
    }), null != z && z, Q && null != q && (0, t.jsx)(h.Z, {
      onClose: X,
      selectedPromotionalDecoPurchaseRecord: q,
      selectedGiftingPromotionReward: D
    })]
  })
}