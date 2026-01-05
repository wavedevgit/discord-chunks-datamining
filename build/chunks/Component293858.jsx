/** Chunk was on 23242 **/
/** chunk id: 293858, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  b: () => T
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
  Chunk704215 = require("./704215.js"),
  Chunk481060 = require("./481060.js"),
  Chunk223143 = require("./223143.js"),
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

function T(e) {
  let t, {
      handleClose: i,
      planGroup: T,
      onSubscriptionConfirmation: k,
      renderPurchaseConfirmation: C,
      postSuccessGuild: N,
      followupSKUInfo: M,
      continueSessionToInitialStep: _
    } = e,
    {
      activeSubscription: A,
      paymentSources: R,
      paymentSourceId: L,
      selectedPlan: Z,
      selectedSkuId: D,
      step: F,
      updatedSubscription: B,
      startingPremiumSubscriptionPlanIdRef: G,
      startingFractionalPremiumEndsAtRef: U,
      isPremiumGroupPurchase: H
    } = (0, v.JL)(),
    {
      isGift: z,
      giftRecipient: K,
      giftCode: W,
      hasSentMessage: V,
      isSendingMessage: Y,
      sendGiftMessage: q,
      claimableRewards: J,
      selectedGiftingPromotionReward: Q
    } = (0, j.wD)(),
    {
      confirmationFooter: X
    } = (0, b.zb)(),
    $ = (0, p.id)(Z, z, J),
    ee = (0, d.Z)(),
    et = (0, p.a5)(Z),
    en = (0, u.QJ)(null == Q ? true : Q.skuId),
    er = (0, x.$)(R, L),
    el = z && null != Q && et;
  a()(null != Z, "Expected plan to selected"), a()(null != D, "Expected selectedSkuId"), a()(null != F, "Step should be set");
  let ei = l.useCallback(() => {
    i(), null == k || k()
  }, [i, k]);
  l.useEffect(() => {
    function e() {
      H && null != B && B.hasAnyPremiumGroup && (0, o.ZDy)(async () => {
        let {
          default: e
        } = await n.e("86948").then(n.bind(n, 153241));
        return t => {
          var n, l;
          return (0, r.jsx)(e, (n = I({}, t), l = l = {
            subscription: B
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
    return f.S.subscribe(E.CkL.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED, e), () => {
      f.S.unsubscribe(E.CkL.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED, e)
    }
  }, [H, B]), l.useEffect(() => {
    !z || null == K || null == W || V || Y || (0, g.pO)(K) || q({
      onSubscriptionConfirmation: k
    })
  }, [q, z, K, W, V, Y, k]), l.useEffect(() => {
    null != ee && null != ee.reminderNotice && $ && (0, c.wH)(s.z.GIFTING_PROMOTION_REMINDER, (0, m.m)(), {
      dismissAction: w.L.INDIRECT_ACTION
    })
  }, [ee, $]);
  let ea = null != _ ? h.PI.DEEPLINK_TO_DESKTOP_APP : true;
  if (null != C) t = C(Z, ei, B);
  else if (z) t = (0, r.jsx)(h.TB, {
    planId: Z.id,
    onClose: ei
  });
  else {
    let e = G.current === Z.id ? {
      postSuccessGuild: N
    } : {
      followupSKUInfo: M,
      startingPremiumSubscriptionPlanId: G.current,
      isDowngrade: null != A && (0, y.GY)(A, Z.id, T)
    };
    t = (0, r.jsx)(h.ZP, I({
      planId: Z.id,
      onClose: ei,
      paymentSourceType: er,
      hideClose: null != X,
      startingFractionalPremiumEndsAt: U.current,
      customCTAType: ea
    }, e))
  }
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)(O.C3, {
      children: [(0, r.jsx)(P.Z, {}), t]
    }), null != X && X, el && null != en && (0, r.jsx)(S.Z, {
      reward: Q,
      purchase: en,
      onClose: ei
    })]
  })
}