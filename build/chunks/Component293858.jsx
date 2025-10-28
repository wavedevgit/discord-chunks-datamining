/** Chunk was on 31029 **/
/** chunk id: 293858, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  b: () => y
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

function y(e) {
  let t, {
      handleClose: n,
      planGroup: a,
      onSubscriptionConfirmation: y,
      renderPurchaseConfirmation: L,
      postSuccessGuild: v,
      followupSKUInfo: S,
      continueSessionToInitialStep: w
    } = e,
    {
      activeSubscription: I,
      paymentSources: O,
      paymentSourceId: P,
      selectedPlan: E,
      selectedSkuId: T,
      step: k,
      updatedSubscription: M,
      startingPremiumSubscriptionPlanIdRef: A,
      startingFractionalPremiumEndsAtRef: B
    } = (0, h.JL)(),
    {
      isGift: Z,
      giftRecipient: N,
      giftCode: R,
      hasSentMessage: F,
      isSendingMessage: G,
      sendGiftMessage: H,
      claimableRewards: U,
      selectedGiftingPromotionReward: D
    } = (0, _.wD)(),
    {
      confirmationFooter: z
    } = (0, m.zb)(),
    W = (0, C.id)(E, Z, U),
    K = (0, d.Z)(),
    Y = (0, C.a5)(E),
    V = (0, C.tK)(null == D ? true : D.skuId),
    q = (0, g.$)(O, P),
    J = Z && null != D && Y;
  l()(null != E, "Expected plan to selected"), l()(null != T, "Expected selectedSkuId"), l()(null != k, "Step should be set");
  let Q = i.useCallback(() => {
    n(), null == y || y()
  }, [n, y]);
  i.useEffect(() => {
    !Z || null == N || null == R || F || G || (0, u.pO)(N) || H({
      onSubscriptionConfirmation: y
    })
  }, [H, Z, N, R, F, G, y]), i.useEffect(() => {
    null != K && null != K.reminderNotice && W && (0, s.wH)(o.z.GIFTING_PROMOTION_REMINDER, K.dismissibleContentVersion, {
      dismissAction: b.L.INDIRECT_ACTION
    })
  }, [K, W]);
  let X = null != w ? c.PI.DEEPLINK_TO_DESKTOP_APP : true;
  if (null != L) t = L(E, Q, M);
  else if (Z) t = (0, r.jsx)(c.TB, {
    planId: E.id,
    onClose: Q
  });
  else {
    let e = A.current === E.id ? {
      postSuccessGuild: v
    } : {
      followupSKUInfo: S,
      startingPremiumSubscriptionPlanId: A.current,
      isDowngrade: null != I && (0, p.GY)(I, E.id, a)
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
      planId: E.id,
      onClose: Q,
      paymentSourceType: q,
      hideClose: null != z,
      startingFractionalPremiumEndsAt: B.current,
      customCTAType: X
    }, e))
  }
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)(f.C3, {
      children: [(0, r.jsx)(j.Z, {}), t]
    }), null != z && z, J && null != V && (0, r.jsx)(x.Z, {
      onClose: Q,
      selectedPromotionalDecoPurchaseRecord: V,
      selectedGiftingPromotionReward: D
    })]
  })
}