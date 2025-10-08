/** Chunk was on 37786 **/
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
      renderPurchaseConfirmation: v,
      postSuccessGuild: L,
      followupSKUInfo: S,
      continueSessionToInitialStep: O
    } = e,
    {
      activeSubscription: P,
      paymentSources: w,
      paymentSourceId: E,
      selectedPlan: I,
      selectedSkuId: k,
      step: T,
      updatedSubscription: A,
      startingPremiumSubscriptionPlanIdRef: M,
      startingFractionalPremiumEndsAtRef: Z
    } = (0, f.JL)(),
    {
      isGift: N,
      giftRecipient: R,
      giftCode: B,
      hasSentMessage: F,
      isSendingMessage: U,
      sendGiftMessage: G,
      claimableRewards: H,
      selectedGiftingPromotionReward: D
    } = (0, _.wD)(),
    {
      confirmationFooter: z
    } = (0, h.zb)(),
    K = (0, C.id)(I, N, H),
    W = (0, d.Z)(),
    Y = (0, C.a5)(I),
    V = (0, C.tK)(null == D ? true : D.skuId),
    q = (0, j.$)(w, E),
    J = N && null != D && Y;
  l()(null != I, "Expected plan to selected"), l()(null != k, "Expected selectedSkuId"), l()(null != T, "Step should be set");
  let X = i.useCallback(() => {
    n(), null == y || y()
  }, [n, y]);
  i.useEffect(() => {
    !N || null == R || null == B || F || U || (0, u.pO)(R) || G({
      onSubscriptionConfirmation: y
    })
  }, [G, N, R, B, F, U, y]), i.useEffect(() => {
    null != W && null != W.reminderNotice && K && (0, s.wH)(o.z.GIFTING_PROMOTION_REMINDER, W.dismissibleContentVersion, {
      dismissAction: b.L.INDIRECT_ACTION
    })
  }, [W, K]);
  let Q = null != O ? c.PI.DEEPLINK_TO_DESKTOP_APP : true;
  if (null != v) t = v(I, X, A);
  else if (N) t = (0, r.jsx)(c.TB, {
    planId: I.id,
    onClose: X
  });
  else {
    let e = M.current === I.id ? {
      postSuccessGuild: L
    } : {
      followupSKUInfo: S,
      startingPremiumSubscriptionPlanId: M.current,
      isDowngrade: null != P && (0, p.GY)(P, I.id, a)
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
      planId: I.id,
      onClose: X,
      paymentSourceType: q,
      hideClose: null != z,
      startingFractionalPremiumEndsAt: Z.current,
      customCTAType: Q
    }, e))
  }
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)(m.C3, {
      children: [(0, r.jsx)(g.Z, {}), t]
    }), null != z && z, J && null != V && (0, r.jsx)(x.Z, {
      onClose: X,
      selectedPromotionalDecoPurchaseRecord: V,
      selectedGiftingPromotionReward: D
    })]
  })
}