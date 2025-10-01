/** Chunk was on 37786 **/
/** chunk id: 293858, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  b: () => L
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
  Chunk669079 = require("./669079.js"),
  Chunk296848 = require("./296848.js"),
  Chunk987209 = require("./987209.jsx"),
  Chunk563132 = require("./563132.jsx"),
  Chunk107998 = require("./107998.jsx"),
  Chunk614277 = require("./614277.jsx"),
  Chunk400981 = require("./400981.jsx"),
  Chunk435020 = require("./435020.js"),
  Chunk698708 = require("./698708.jsx"),
  Chunk921944 = require("./921944.js");

function L(e) {
  let t, {
      handleClose: n,
      planGroup: a,
      onSubscriptionConfirmation: L,
      renderPurchaseConfirmation: y,
      postSuccessGuild: v,
      followupSKUInfo: S,
      continueSessionToInitialStep: O
    } = e,
    {
      activeSubscription: E,
      paymentSources: I,
      paymentSourceId: P,
      selectedPlan: w,
      selectedSkuId: k,
      step: T,
      updatedSubscription: A,
      startingPremiumSubscriptionPlanIdRef: M,
      startingFractionalPremiumEndsAtRef: Z
    } = (0, f.JL)(),
    {
      isGift: N,
      giftRecipient: R,
      giftCode: F,
      hasSentMessage: B,
      isSendingMessage: U,
      sendGiftMessage: H,
      claimableRewards: G,
      selectedGiftingPromotionReward: D
    } = (0, _.wD)(),
    {
      confirmationFooter: z
    } = (0, h.zb)(),
    Y = null != z,
    K = (0, C.id)(w, N, G),
    W = (0, d.Z)(),
    V = (0, C.a5)(w),
    q = (0, C.tK)(null == D ? true : D.skuId),
    J = (0, j.$)(I, P),
    X = N && null != D && V;
  o()(null != w, "Expected plan to selected"), o()(null != k, "Expected selectedSkuId"), o()(null != T, "Step should be set");
  let Q = i.useCallback(() => {
    n(), null == L || L()
  }, [n, L]);
  return i.useEffect(() => {
    !N || null == R || null == F || B || U || (0, u.pO)(R) || H({
      onSubscriptionConfirmation: L
    })
  }, [H, N, R, F, B, U, L]), i.useEffect(() => {
    null != W && null != W.reminderNotice && K && (0, s.wH)(l.z.GIFTING_PROMOTION_REMINDER, W.dismissibleContentVersion, {
      dismissAction: b.L.INDIRECT_ACTION
    })
  }, [W, K]), t = null != y ? y(w, Q, A) : null != O ? (0, r.jsx)(c.VY, {}) : N ? (0, r.jsx)(c.TB, {
    planId: w.id,
    onClose: Q
  }) : M.current === w.id ? (0, r.jsx)(c.ZP, {
    planId: w.id,
    postSuccessGuild: v,
    onClose: Q,
    paymentSourceType: J,
    hideClose: Y,
    startingFractionalPremiumEndsAt: Z.current
  }) : (0, r.jsx)(c.ZP, {
    followupSKUInfo: S,
    startingPremiumSubscriptionPlanId: M.current,
    planId: w.id,
    onClose: Q,
    isDowngrade: null != E && (0, p.GY)(E, w.id, a),
    paymentSourceType: J,
    hideClose: Y,
    startingFractionalPremiumEndsAt: Z.current
  }), (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)(m.C3, {
      children: [(0, r.jsx)(g.Z, {}), t]
    }), null != z && z, X && null != q && (0, r.jsx)(x.Z, {
      onClose: Q,
      selectedPromotionalDecoPurchaseRecord: q,
      selectedGiftingPromotionReward: D
    })]
  })
}