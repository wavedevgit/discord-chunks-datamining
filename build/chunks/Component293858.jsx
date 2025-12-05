/** Chunk was on 23242 **/
/** chunk id: 293858, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  b: () => w
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
  Chunk704215 = require("./704215.js"),
  Chunk481060 = require("./481060.js"),
  Chunk605236 = require("./605236.js"),
  Chunk347896 = require("./347896.js"),
  Chunk717401 = require("./717401.js"),
  Chunk885472 = require("./885472.js"),
  Chunk317269 = require("./317269.jsx"),
  Chunk585483 = require("./585483.js"),
  Chunk669079 = require("./669079.js"),
  Chunk296848 = require("./296848.js"),
  Chunk987209 = require("./987209.jsx"),
  Chunk563132 = require("./563132.jsx"),
  Chunk107998 = require("./107998.jsx"),
  Chunk614277 = require("./614277.jsx"),
  Chunk400981 = require("./400981.jsx"),
  Chunk435020 = require("./435020.js"),
  Chunk698708 = require("./698708.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js");

function I(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      l = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), l.forEach(function(t) {
      var l;
      l = n[t], t in e ? Object.defineProperty(e, t, {
        value: l,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = l
    })
  }
  return e
}

function w(e) {
  let t, {
      handleClose: i,
      planGroup: w,
      onSubscriptionConfirmation: T,
      renderPurchaseConfirmation: k,
      postSuccessGuild: C,
      followupSKUInfo: N,
      continueSessionToInitialStep: M
    } = e,
    {
      activeSubscription: R,
      paymentSources: _,
      paymentSourceId: A,
      selectedPlan: L,
      selectedSkuId: Z,
      step: D,
      updatedSubscription: F,
      startingPremiumSubscriptionPlanIdRef: B,
      startingFractionalPremiumEndsAtRef: G,
      isPremiumGroupPurchase: H
    } = (0, j.JL)(),
    {
      isGift: U,
      giftRecipient: z,
      giftCode: K,
      hasSentMessage: W,
      isSendingMessage: V,
      sendGiftMessage: Y,
      claimableRewards: q,
      selectedGiftingPromotionReward: J
    } = (0, v.wD)(),
    {
      confirmationFooter: Q
    } = (0, y.zb)(),
    X = (0, d.id)(L, U, q),
    $ = (0, c.Z)(),
    ee = (0, d.a5)(L),
    et = (0, d.tK)(null == J ? true : J.skuId),
    en = (0, x.$)(_, A),
    el = U && null != J && ee;
  a()(null != L, "Expected plan to selected"), a()(null != Z, "Expected selectedSkuId"), a()(null != D, "Step should be set");
  let er = r.useCallback(() => {
    i(), null == T || T()
  }, [i, T]);
  r.useEffect(() => {
    function e() {
      H && (0, o.ZDy)(async () => {
        let {
          default: e
        } = await n.e("86948").then(n.bind(n, 153241));
        return t => (0, l.jsx)(e, I({}, t))
      })
    }
    return h.S.subscribe(O.CkL.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED, e), () => {
      h.S.unsubscribe(O.CkL.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED, e)
    }
  }, [H]), r.useEffect(() => {
    !U || null == z || null == K || W || V || (0, f.pO)(z) || Y({
      onSubscriptionConfirmation: T
    })
  }, [Y, U, z, K, W, V, T]), r.useEffect(() => {
    null != $ && null != $.reminderNotice && X && (0, u.wH)(s.z.GIFTING_PROMOTION_REMINDER, (0, m.m)(), {
      dismissAction: E.L.INDIRECT_ACTION
    })
  }, [$, X]);
  let ei = null != M ? p.PI.DEEPLINK_TO_DESKTOP_APP : true;
  if (null != k) t = k(L, er, F);
  else if (U) t = (0, l.jsx)(p.TB, {
    planId: L.id,
    onClose: er
  });
  else {
    let e = B.current === L.id ? {
      postSuccessGuild: C
    } : {
      followupSKUInfo: N,
      startingPremiumSubscriptionPlanId: B.current,
      isDowngrade: null != R && (0, g.GY)(R, L.id, w)
    };
    t = (0, l.jsx)(p.ZP, I({
      planId: L.id,
      onClose: er,
      paymentSourceType: en,
      hideClose: null != Q,
      startingFractionalPremiumEndsAt: G.current,
      customCTAType: ei
    }, e))
  }
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsxs)(b.C3, {
      children: [(0, l.jsx)(P.Z, {}), t]
    }), null != Q && Q, el && null != et && (0, l.jsx)(S.Z, {
      onClose: er,
      selectedPromotionalDecoPurchaseRecord: et,
      selectedGiftingPromotionReward: J
    })]
  })
}