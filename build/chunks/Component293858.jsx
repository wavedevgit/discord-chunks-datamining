/** Chunk was on 84071 **/
/** chunk id: 293858, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  b: () => v
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk512722 = require("./512722.js"),
  l = require.n(Chunk512722),
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

function v(e) {
  let t, {
      handleClose: n,
      planGroup: a,
      onSubscriptionConfirmation: v,
      renderPurchaseConfirmation: y,
      postSuccessGuild: S,
      followupSKUInfo: L,
      continueSessionToInitialStep: I
    } = e,
    {
      activeSubscription: w,
      paymentSources: P,
      paymentSourceId: O,
      selectedPlan: E,
      selectedSkuId: k,
      step: T,
      updatedSubscription: Z,
      startingPremiumSubscriptionPlanIdRef: A,
      startingFractionalPremiumEndsAtRef: N
    } = (0, h.JL)(),
    {
      isGift: M,
      giftRecipient: R,
      giftCode: B,
      hasSentMessage: F,
      isSendingMessage: G,
      sendGiftMessage: H,
      claimableRewards: U,
      selectedGiftingPromotionReward: D
    } = (0, _.wD)(),
    {
      confirmationFooter: z
    } = (0, f.zb)(),
    W = (0, c.id)(E, M, U),
    K = (0, d.Z)(),
    V = (0, c.a5)(E),
    Y = (0, c.tK)(null == D ? true : D.skuId),
    q = (0, g.$)(P, O),
    X = M && null != D && V;
  l()(null != E, "Expected plan to selected"), l()(null != k, "Expected selectedSkuId"), l()(null != T, "Step should be set");
  let Q = i.useCallback(() => {
    n(), null == v || v()
  }, [n, v]);
  i.useEffect(() => {
    !M || null == R || null == B || F || G || (0, u.pO)(R) || H({
      onSubscriptionConfirmation: v
    })
  }, [H, M, R, B, F, G, v]), i.useEffect(() => {
    null != K && null != K.reminderNotice && W && (0, s.wH)(o.z.GIFTING_PROMOTION_REMINDER, K.dismissibleContentVersion, {
      dismissAction: b.L.INDIRECT_ACTION
    })
  }, [K, W]);
  let J = null != I ? C.PI.DEEPLINK_TO_DESKTOP_APP : true;
  if (null != y) t = y(E, Q, Z);
  else if (M) t = (0, r.jsx)(C.TB, {
    planId: E.id,
    onClose: Q
  });
  else {
    let e = A.current === E.id ? {
      postSuccessGuild: S
    } : {
      followupSKUInfo: L,
      startingPremiumSubscriptionPlanId: A.current,
      isDowngrade: null != w && (0, p.GY)(w, E.id, a)
    };
    t = (0, r.jsx)(C.ZP, function(e) {
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
      planId: E.id,
      onClose: Q,
      paymentSourceType: q,
      hideClose: null != z,
      startingFractionalPremiumEndsAt: N.current,
      customCTAType: J
    }, e))
  }
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)(m.C3, {
      children: [(0, r.jsx)(j.Z, {}), t]
    }), null != z && z, X && null != Y && (0, r.jsx)(x.Z, {
      onClose: Q,
      selectedPromotionalDecoPurchaseRecord: Y,
      selectedGiftingPromotionReward: D
    })]
  })
}