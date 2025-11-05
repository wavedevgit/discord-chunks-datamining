/** Chunk was on 54400 **/
/** chunk id: 293858, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  b: () => y
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
  Chunk614277 = require("./614277.jsx"),
  Chunk400981 = require("./400981.jsx"),
  Chunk435020 = require("./435020.js"),
  Chunk698708 = require("./698708.jsx"),
  Chunk921944 = require("./921944.js");

function y(e) {
  let t, {
      handleClose: n,
      planGroup: l,
      onSubscriptionConfirmation: y,
      renderPurchaseConfirmation: L,
      postSuccessGuild: v,
      followupSKUInfo: S,
      continueSessionToInitialStep: O
    } = e,
    {
      activeSubscription: E,
      paymentSources: P,
      paymentSourceId: w,
      selectedPlan: k,
      selectedSkuId: M,
      step: I,
      updatedSubscription: T,
      startingPremiumSubscriptionPlanIdRef: A,
      startingFractionalPremiumEndsAtRef: Z
    } = (0, h.JL)(),
    {
      isGift: N,
      giftRecipient: R,
      giftCode: B,
      hasSentMessage: H,
      isSendingMessage: U,
      sendGiftMessage: F,
      claimableRewards: G,
      selectedGiftingPromotionReward: D
    } = (0, x.wD)(),
    {
      confirmationFooter: K
    } = (0, f.zb)(),
    z = (0, d.id)(k, N, G),
    V = (0, C.Z)(),
    W = (0, d.a5)(k),
    Y = (0, d.tK)(null == D ? true : D.skuId),
    q = (0, j.$)(P, w),
    J = N && null != D && W;
  a()(null != k, "Expected plan to selected"), a()(null != M, "Expected selectedSkuId"), a()(null != I, "Step should be set");
  let Q = i.useCallback(() => {
    n(), null == y || y()
  }, [n, y]);
  i.useEffect(() => {
    !N || null == R || null == B || H || U || (0, u.pO)(R) || F({
      onSubscriptionConfirmation: y
    })
  }, [F, N, R, B, H, U, y]), i.useEffect(() => {
    null != V && null != V.reminderNotice && z && (0, o.wH)(s.z.GIFTING_PROMOTION_REMINDER, V.dismissibleContentVersion, {
      dismissAction: b.L.INDIRECT_ACTION
    })
  }, [V, z]);
  let X = null != O ? c.PI.DEEPLINK_TO_DESKTOP_APP : true;
  if (null != L) t = L(k, Q, T);
  else if (N) t = (0, r.jsx)(c.TB, {
    planId: k.id,
    onClose: Q
  });
  else {
    let e = A.current === k.id ? {
      postSuccessGuild: v
    } : {
      followupSKUInfo: S,
      startingPremiumSubscriptionPlanId: A.current,
      isDowngrade: null != E && (0, p.GY)(E, k.id, l)
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
      planId: k.id,
      onClose: Q,
      paymentSourceType: q,
      hideClose: null != K,
      startingFractionalPremiumEndsAt: Z.current,
      customCTAType: X
    }, e))
  }
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)(_.C3, {
      children: [(0, r.jsx)(g.Z, {}), t]
    }), null != K && K, J && null != Y && (0, r.jsx)(m.Z, {
      onClose: Q,
      selectedPromotionalDecoPurchaseRecord: Y,
      selectedGiftingPromotionReward: D
    })]
  })
}