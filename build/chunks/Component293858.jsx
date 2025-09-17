/** Chunk was on 54400 **/
/** chunk id: 293858, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  b: () => v
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
  Chunk704215 = require("./704215.js"),
  Chunk605236 = require("./605236.js"),
  Chunk538981 = require("./538981.jsx"),
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

function v(e) {
  let t, {
      handleClose: n,
      planGroup: l,
      onSubscriptionConfirmation: v,
      renderPurchaseConfirmation: E,
      postSuccessGuild: O,
      followupSKUInfo: P,
      continueSessionToInitialStep: k
    } = e,
    {
      activeSubscription: w,
      paymentSources: M,
      paymentSourceId: I,
      selectedPlan: T,
      selectedSkuId: A,
      step: Z,
      updatedSubscription: N,
      startingPremiumSubscriptionPlanIdRef: R,
      startingFractionalPremiumEndsAtRef: B
    } = (0, _.JL)(),
    {
      isGift: U,
      giftRecipient: H,
      giftCode: F,
      hasSentMessage: G,
      isSendingMessage: D,
      sendGiftMessage: K,
      claimableRewards: z,
      selectedGiftingPromotionReward: W
    } = (0, f.wD)(),
    {
      confirmationFooter: Y
    } = (0, m.zb)(),
    V = null != Y,
    q = (0, c.id)(T, U, z),
    J = (0, d.Z)(),
    Q = (0, c.a5)(T),
    X = (0, c.tK)(null == W ? true : W.skuId),
    $ = (0, C.r)(),
    ee = (0, b.$)(M, I),
    et = U && null != W && Q;
  a()(null != T, "Expected plan to selected"), a()(null != A, "Expected selectedSkuId"), a()(null != Z, "Step should be set");
  let en = i.useCallback(() => {
    n(), null == v || v()
  }, [n, v]);
  return i.useEffect(() => {
    function e() {
      null == $ || $()
    }
    return p.S.subscribe(y.CkL.PREMIUM_PAYMENT_MODAL_CLOSED, e), () => {
      p.S.unsubscribe(y.CkL.PREMIUM_PAYMENT_MODAL_CLOSED, e)
    }
  }, [$]), i.useEffect(() => {
    !U || null == H || null == F || G || D || (0, x.pO)(H) || K({
      onSubscriptionConfirmation: v
    })
  }, [K, U, H, F, G, D, v]), i.useEffect(() => {
    null != J && null != J.reminderNotice && q && (0, o.wH)(s.z.GIFTING_PROMOTION_REMINDER, J.dismissibleContentVersion, {
      dismissAction: S.L.INDIRECT_ACTION
    })
  }, [J, q]), t = null != E ? E(T, en, N) : null != k ? (0, r.jsx)(u.VY, {}) : U ? (0, r.jsx)(u.TB, {
    planId: T.id,
    onClose: en
  }) : R.current === T.id ? (0, r.jsx)(u.ZP, {
    planId: T.id,
    postSuccessGuild: O,
    onClose: en,
    paymentSourceType: ee,
    hideClose: V,
    startingFractionalPremiumEndsAt: B.current
  }) : (0, r.jsx)(u.ZP, {
    followupSKUInfo: P,
    startingPremiumSubscriptionPlanId: R.current,
    planId: T.id,
    onClose: en,
    isDowngrade: null != w && (0, h.GY)(w, T.id, l),
    paymentSourceType: ee,
    hideClose: V,
    startingFractionalPremiumEndsAt: B.current
  }), (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)(j.C3, {
      children: [(0, r.jsx)(L.Z, {}), t]
    }), null != Y && Y, et && null != X && (0, r.jsx)(g.Z, {
      onClose: en,
      selectedPromotionalDecoPurchaseRecord: X,
      selectedGiftingPromotionReward: W
    })]
  })
}