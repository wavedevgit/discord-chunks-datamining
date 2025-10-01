/** Chunk was on 37786 **/
/** chunk id: 293858, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  b: () => y
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

function y(e) {
  let t, {
      handleClose: n,
      planGroup: a,
      onSubscriptionConfirmation: y,
      renderPurchaseConfirmation: L,
      postSuccessGuild: v,
      followupSKUInfo: S,
      continueSessionToInitialStep: O
    } = e,
    {
      activeSubscription: E,
      paymentSources: P,
      paymentSourceId: I,
      selectedPlan: w,
      selectedSkuId: T,
      step: k,
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
    K = (0, C.id)(w, N, G),
    Y = (0, d.Z)(),
    W = (0, C.a5)(w),
    V = (0, C.tK)(null == D ? true : D.skuId),
    q = (0, g.$)(P, I),
    J = N && null != D && W;
  o()(null != w, "Expected plan to selected"), o()(null != T, "Expected selectedSkuId"), o()(null != k, "Step should be set");
  let X = i.useCallback(() => {
    n(), null == y || y()
  }, [n, y]);
  i.useEffect(() => {
    !N || null == R || null == F || B || U || (0, u.pO)(R) || H({
      onSubscriptionConfirmation: y
    })
  }, [H, N, R, F, B, U, y]), i.useEffect(() => {
    null != Y && null != Y.reminderNotice && K && (0, s.wH)(l.z.GIFTING_PROMOTION_REMINDER, Y.dismissibleContentVersion, {
      dismissAction: b.L.INDIRECT_ACTION
    })
  }, [Y, K]);
  let Q = null != O ? c.PI.DEEPLINK_TO_DESKTOP_APP : true;
  if (null != L) t = L(w, X, A);
  else if (N) t = (0, r.jsx)(c.TB, {
    planId: w.id,
    onClose: X
  });
  else {
    let e = M.current === w.id ? {
      postSuccessGuild: v
    } : {
      followupSKUInfo: S,
      startingPremiumSubscriptionPlanId: M.current,
      isDowngrade: null != E && (0, p.GY)(E, w.id, a)
    };
    t = (0, r.jsx)(c.ZP, function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
          var r;
          r = n[t], t in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[t] = r
        })
      }
      return e
    }({
      planId: w.id,
      onClose: X,
      paymentSourceType: q,
      hideClose: null != z,
      startingFractionalPremiumEndsAt: Z.current,
      customCTAType: Q
    }, e))
  }
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)(m.C3, {
      children: [(0, r.jsx)(j.Z, {}), t]
    }), null != z && z, J && null != V && (0, r.jsx)(x.Z, {
      onClose: X,
      selectedPromotionalDecoPurchaseRecord: V,
      selectedGiftingPromotionReward: D
    })]
  })
}