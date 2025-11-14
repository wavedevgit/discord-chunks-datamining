/** Chunk was on 54400 **/
/** chunk id: 293858, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  b: () => S
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk512722 = require("./512722.js"),
  i = require.n(Chunk512722),
  Chunk704215 = require("./704215.js"),
  Chunk605236 = require("./605236.js"),
  Chunk347896 = require("./347896.js"),
  Chunk717401 = require("./717401.js"),
  Chunk885472 = require("./885472.js"),
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

function S(e) {
  let t, {
      handleClose: n,
      planGroup: a,
      onSubscriptionConfirmation: S,
      renderPurchaseConfirmation: _,
      postSuccessGuild: O,
      followupSKUInfo: w,
      continueSessionToInitialStep: C
    } = e,
    {
      activeSubscription: k,
      paymentSources: E,
      paymentSourceId: I,
      selectedPlan: T,
      selectedSkuId: N,
      step: R,
      updatedSubscription: M,
      startingPremiumSubscriptionPlanIdRef: A,
      startingFractionalPremiumEndsAtRef: Z
    } = (0, b.JL)(),
    {
      isGift: L,
      giftRecipient: B,
      giftCode: D,
      hasSentMessage: F,
      isSendingMessage: H,
      sendGiftMessage: G,
      claimableRewards: U,
      selectedGiftingPromotionReward: z
    } = (0, f.wD)(),
    {
      confirmationFooter: K
    } = (0, g.zb)(),
    W = (0, c.id)(T, L, U),
    Y = (0, d.Z)(),
    V = (0, c.a5)(T),
    q = (0, c.tK)(null == z ? true : z.skuId),
    J = (0, x.$)(E, I),
    Q = L && null != z && V;
  i()(null != T, "Expected plan to selected"), i()(null != N, "Expected selectedSkuId"), i()(null != R, "Step should be set");
  let X = l.useCallback(() => {
    n(), null == S || S()
  }, [n, S]);
  l.useEffect(() => {
    !L || null == B || null == D || F || H || (0, m.pO)(B) || G({
      onSubscriptionConfirmation: S
    })
  }, [G, L, B, D, F, H, S]), l.useEffect(() => {
    null != Y && null != Y.reminderNotice && W && (0, s.wH)(o.z.GIFTING_PROMOTION_REMINDER, (0, u.m)(), {
      dismissAction: j.L.INDIRECT_ACTION
    })
  }, [Y, W]);
  let $ = null != C ? p.PI.DEEPLINK_TO_DESKTOP_APP : true;
  if (null != _) t = _(T, X, M);
  else if (L) t = (0, r.jsx)(p.TB, {
    planId: T.id,
    onClose: X
  });
  else {
    let e = A.current === T.id ? {
      postSuccessGuild: O
    } : {
      followupSKUInfo: w,
      startingPremiumSubscriptionPlanId: A.current,
      isDowngrade: null != k && (0, h.GY)(k, T.id, a)
    };
    t = (0, r.jsx)(p.ZP, function(e) {
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
      planId: T.id,
      onClose: X,
      paymentSourceType: J,
      hideClose: null != K,
      startingFractionalPremiumEndsAt: Z.current,
      customCTAType: $
    }, e))
  }
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)(v.C3, {
      children: [(0, r.jsx)(y.Z, {}), t]
    }), null != K && K, Q && null != q && (0, r.jsx)(P.Z, {
      onClose: X,
      selectedPromotionalDecoPurchaseRecord: q,
      selectedGiftingPromotionReward: z
    })]
  })
}