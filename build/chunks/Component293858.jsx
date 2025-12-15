/** Chunk was on 23242 **/
/** chunk id: 293858, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  b: () => I
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

function w(e) {
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
}

function I(e) {
  let t, {
      handleClose: i,
      planGroup: I,
      onSubscriptionConfirmation: T,
      renderPurchaseConfirmation: k,
      postSuccessGuild: C,
      followupSKUInfo: N,
      continueSessionToInitialStep: M
    } = e,
    {
      activeSubscription: _,
      paymentSources: R,
      paymentSourceId: A,
      selectedPlan: L,
      selectedSkuId: Z,
      step: D,
      updatedSubscription: F,
      startingPremiumSubscriptionPlanIdRef: G,
      startingFractionalPremiumEndsAtRef: B,
      isPremiumGroupPurchase: U
    } = (0, j.JL)(),
    {
      isGift: H,
      giftRecipient: z,
      giftCode: K,
      hasSentMessage: W,
      isSendingMessage: V,
      sendGiftMessage: Y,
      claimableRewards: q,
      selectedGiftingPromotionReward: J
    } = (0, y.wD)(),
    {
      confirmationFooter: Q
    } = (0, v.zb)(),
    X = (0, d.id)(L, H, q),
    $ = (0, c.Z)(),
    ee = (0, d.a5)(L),
    et = (0, d.tK)(null == J ? true : J.skuId),
    en = (0, S.$)(R, A),
    er = H && null != J && ee;
  a()(null != L, "Expected plan to selected"), a()(null != Z, "Expected selectedSkuId"), a()(null != D, "Step should be set");
  let el = l.useCallback(() => {
    i(), null == T || T()
  }, [i, T]);
  l.useEffect(() => {
    function e() {
      U && null != F && F.hasAnyPremiumGroup && (0, s.ZDy)(async () => {
        let {
          default: e
        } = await n.e("86948").then(n.bind(n, 153241));
        return t => {
          var n, l;
          return (0, r.jsx)(e, (n = w({}, t), l = l = {
            subscription: F
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              n.push.apply(n, r)
            }
            return n
          })(Object(l)).forEach(function(e) {
            Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(l, e))
          }), n))
        }
      })
    }
    return f.S.subscribe(x.CkL.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED, e), () => {
      f.S.unsubscribe(x.CkL.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED, e)
    }
  }, [U, F]), l.useEffect(() => {
    !H || null == z || null == K || W || V || (0, h.pO)(z) || Y({
      onSubscriptionConfirmation: T
    })
  }, [Y, H, z, K, W, V, T]), l.useEffect(() => {
    null != $ && null != $.reminderNotice && X && (0, u.wH)(o.z.GIFTING_PROMOTION_REMINDER, (0, p.m)(), {
      dismissAction: E.L.INDIRECT_ACTION
    })
  }, [$, X]);
  let ei = null != M ? m.PI.DEEPLINK_TO_DESKTOP_APP : true;
  if (null != k) t = k(L, el, F);
  else if (H) t = (0, r.jsx)(m.TB, {
    planId: L.id,
    onClose: el
  });
  else {
    let e = G.current === L.id ? {
      postSuccessGuild: C
    } : {
      followupSKUInfo: N,
      startingPremiumSubscriptionPlanId: G.current,
      isDowngrade: null != _ && (0, g.GY)(_, L.id, I)
    };
    t = (0, r.jsx)(m.ZP, w({
      planId: L.id,
      onClose: el,
      paymentSourceType: en,
      hideClose: null != Q,
      startingFractionalPremiumEndsAt: B.current,
      customCTAType: ei
    }, e))
  }
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)(b.C3, {
      children: [(0, r.jsx)(P.Z, {}), t]
    }), null != Q && Q, er && null != et && (0, r.jsx)(O.Z, {
      onClose: el,
      selectedPromotionalDecoPurchaseRecord: et,
      selectedGiftingPromotionReward: J
    })]
  })
}