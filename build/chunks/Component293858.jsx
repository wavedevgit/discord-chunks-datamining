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

function v(e) {
  let t, {
      handleClose: n,
      planGroup: l,
      onSubscriptionConfirmation: v,
      renderPurchaseConfirmation: L,
      postSuccessGuild: S,
      followupSKUInfo: O,
      continueSessionToInitialStep: P
    } = e,
    {
      activeSubscription: E,
      paymentSources: w,
      paymentSourceId: I,
      selectedPlan: M,
      selectedSkuId: k,
      step: A,
      updatedSubscription: T,
      startingPremiumSubscriptionPlanIdRef: Z,
      startingFractionalPremiumEndsAtRef: N
    } = (0, f.JL)(),
    {
      isGift: R,
      giftRecipient: B,
      giftCode: U,
      hasSentMessage: H,
      isSendingMessage: F,
      sendGiftMessage: G,
      claimableRewards: D,
      selectedGiftingPromotionReward: K
    } = (0, m.wD)(),
    {
      confirmationFooter: z
    } = (0, x.zb)(),
    V = (0, C.id)(M, R, D),
    W = (0, d.Z)(),
    Y = (0, C.a5)(M),
    q = (0, C.tK)(null == K ? true : K.skuId),
    J = (0, g.$)(w, I),
    Q = R && null != K && Y;
  a()(null != M, "Expected plan to selected"), a()(null != k, "Expected selectedSkuId"), a()(null != A, "Step should be set");
  let X = i.useCallback(() => {
    n(), null == v || v()
  }, [n, v]);
  i.useEffect(() => {
    !R || null == B || null == U || H || F || (0, p.pO)(B) || G({
      onSubscriptionConfirmation: v
    })
  }, [G, R, B, U, H, F, v]), i.useEffect(() => {
    null != W && null != W.reminderNotice && V && (0, o.wH)(s.z.GIFTING_PROMOTION_REMINDER, (0, c.m)(), {
      dismissAction: y.L.INDIRECT_ACTION
    })
  }, [W, V]);
  let $ = null != P ? u.PI.DEEPLINK_TO_DESKTOP_APP : true;
  if (null != L) t = L(M, X, T);
  else if (R) t = (0, r.jsx)(u.TB, {
    planId: M.id,
    onClose: X
  });
  else {
    let e = Z.current === M.id ? {
      postSuccessGuild: S
    } : {
      followupSKUInfo: O,
      startingPremiumSubscriptionPlanId: Z.current,
      isDowngrade: null != E && (0, h.GY)(E, M.id, l)
    };
    t = (0, r.jsx)(u.ZP, function(e) {
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
      planId: M.id,
      onClose: X,
      paymentSourceType: J,
      hideClose: null != z,
      startingFractionalPremiumEndsAt: N.current,
      customCTAType: $
    }, e))
  }
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)(_.C3, {
      children: [(0, r.jsx)(b.Z, {}), t]
    }), null != z && z, Q && null != q && (0, r.jsx)(j.Z, {
      onClose: X,
      selectedPromotionalDecoPurchaseRecord: q,
      selectedGiftingPromotionReward: K
    })]
  })
}