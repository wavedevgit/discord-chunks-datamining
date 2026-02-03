/** Chunk was on 2824 **/
/** chunk id: 674619, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  E: () => W,
  STEPS: () => K,
  default: () => V
}), require("./65821.js"), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk73825 = require("./73825.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk40185 = require("./40185.js"),
  Chunk810498 = require("./810498.js"),
  Chunk117945 = require("./117945.js"),
  Chunk594832 = require("./594832.js"),
  Chunk97352 = require("./97352.js"),
  Chunk166403 = require("./166403.js"),
  Chunk45938 = require("./45938.js"),
  Chunk937008 = require("./937008.jsx"),
  Chunk156312 = require("./156312.jsx"),
  Chunk166532 = require("./166532.js"),
  Chunk491057 = require("./491057.jsx"),
  Chunk566980 = require("./566980.js"),
  Chunk546042 = require("./546042.jsx"),
  Chunk735305 = require("./735305.js"),
  Chunk343834 = require("./343834.jsx"),
  Chunk467122 = require("./467122.jsx"),
  Chunk623020 = require("./623020.jsx"),
  Chunk639289 = require("./639289.jsx"),
  Chunk838462 = require("./838462.jsx"),
  Chunk641819 = require("./641819.jsx"),
  Chunk800471 = require("./800471.js"),
  Chunk939665 = require("./939665.jsx"),
  Chunk957489 = require("./957489.jsx"),
  Chunk822426 = require("./822426.jsx"),
  Chunk169801 = require("./169801.js"),
  Chunk652215 = require("./652215.js"),
  Chunk788868 = require("./788868.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk982571 = require("./982571.js");

function G(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = null != arguments[n] ? arguments[n] : {},
      l = Object.keys(t);
    "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
      return Object.getOwnPropertyDescriptor(t, e).enumerable
    }))), l.forEach(function(n) {
      var l;
      l = t[n], n in e ? Object.defineProperty(e, n, {
        value: l,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[n] = l
    })
  }
  return e
}
let H = [Chunk166532.pn.PLAN_SELECT, Chunk166532.pn.ADD_PAYMENT_STEPS, Chunk166532.pn.REVIEW, Chunk166532.pn.CONFIRM];

function F(e) {
  let {
    analyticsLocation: n,
    analyticsObject: t,
    analyticsSourceLocation: i,
    onComplete: o,
    transitionState: c,
    initialPlanId: d,
    subscriptionTier: m,
    onClose: g,
    trialId: _,
    trialFooterMessageOverride: A,
    reviewWarningMessage: O,
    openInvoiceId: S,
    onSubscriptionConfirmation: I,
    renderPurchaseConfirmation: y,
    postSuccessGuild: v,
    followupSKUInfo: R,
    renderHeader: C,
    applicationId: M,
    guildId: N,
    referralTrialOfferId: k,
    skuId: U,
    returnRef: L,
    skipConfirm: G = false,
    continueSessionToInitialStep: H
  } = e, {
    analyticsLocations: F
  } = (0, u.Ay)();
  r.useEffect(() => {
    E.A.isLoadedForPremiumSKUs() || s.h.wait(() => (0, a.zS)())
  }, []);
  let {
    step: B,
    selectedSkuId: W,
    purchaseState: K
  } = (0, j.P5)(), {
    isGift: V,
    giftMessage: Y,
    giftRecipient: z
  } = (0, P.Pv)(), q = V && (0, f.Ik)(z) && B === h.pn.PLAN_SELECT, Z = (0, p.T)(V, W), Q = K === x.h.PURCHASING;
  return (0, l.jsx)(b.A, {
    isConfirmationStep: B === h.pn.CONFIRM && null == H && null == y,
    isEligibleForWowMoment: Z,
    shouldPrefetchWowMoment: Q,
    children: (0, l.jsx)(T.PaymentModal, {
      analyticsLocations: F,
      analyticsLocation: n,
      analyticsObject: t,
      analyticsSourceLocation: i,
      analyticsSubscriptionType: w.rzx.PREMIUM,
      onComplete: o,
      transitionState: c,
      initialPlanId: d,
      giftMessage: Y,
      subscriptionTier: m,
      onClose: g,
      trialId: _,
      isGift: V,
      trialFooterMessageOverride: A,
      reviewWarningMessage: O,
      planGroup: D.LE,
      openInvoiceId: S,
      onSubscriptionConfirmation: I,
      renderPurchaseConfirmation: y,
      postSuccessGuild: v,
      followupSKUInfo: R,
      renderHeader: C,
      applicationId: M,
      guildId: N,
      referralTrialOfferId: k,
      skuId: U,
      shakeWhilePurchasing: true,
      isDynamicModal: q,
      returnRef: L,
      skipConfirm: G,
      continueSessionToInitialStep: H
    })
  })
}

function B(e) {
  var n, t;
  let {
    initialPlanId: r,
    handleStepChange: i,
    referralTrialOfferId: s
  } = e, {
    paymentSources: a,
    selectedSkuId: o,
    selectedPlan: u
  } = (0, j.P5)(), {
    isGift: c,
    claimableRewards: p
  } = (0, P.Pv)(), m = (0, k.A)({
    isGift: c,
    skuId: o,
    referralTrialOfferId: s
  }), E = (0, R.lp)(m), g = (0, d.px)(u, c, p);
  return (0, l.jsx)(A.x, (n = G({}, e), t = t = {
    breadcrumbSteps: H,
    onReturn: () => {
      let e = Object.values(a),
        n = e.length < 1 && null == r ? h.pn.PLAN_SELECT : h.pn.REVIEW;
      E && (n = h.pn.REVIEW), g && e.length < 1 && (n = h.pn.SELECT_FREE_SKU), i(n, {
        trackedFromStep: h.pn.PAYMENT_TYPE
      })
    }
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : (function(e, n) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      t.push.apply(t, l)
    }
    return t
  })(Object(t)).forEach(function(e) {
    Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(t, e))
  }), n))
}
let W = function() {
    let e = arguments.length > 0 && true !== arguments[0] && arguments[0];
    return [{
      key: null,
      renderStep: e => (0, l.jsx)(T.I, G({}, e))
    }, {
      key: h.pn.SKU_SELECT,
      renderStep: e => (0, l.jsx)(M.F, G({}, e)),
      options: {
        renderHeader: false,
        hideSlider: true,
        isDynamicModal: !e,
        isLargeModal: e
      }
    }, {
      key: h.pn.WHAT_YOU_LOSE,
      renderStep: e => (0, l.jsx)(N.K, G({}, e)),
      options: {
        renderHeader: false,
        hideSlider: true
      }
    }, {
      key: h.pn.PLAN_SELECT,
      renderStep: e => (0, l.jsx)(C.Z, G({}, e)),
      options: {
        renderHeader: true,
        useBreadcrumbLabel: e => (0, R.lp)(e) ? null : U.intl.string(U.t["r+SebU"]),
        sectionHeaderText: () => U.intl.string(U.t.UKbp1N)
      }
    }, {
      key: h.pn.ADD_PAYMENT_STEPS,
      renderStep: e => (0, l.jsx)(B, G({}, e)),
      options: {
        renderHeader: true,
        useBreadcrumbLabel: e => (0, R.lp)(e) ? null : U.intl.string(U.t.Sb6wI1)
      }
    }, {
      key: h.pn.AWAITING_PURCHASE_TOKEN_AUTH,
      renderStep: () => (0, l.jsx)(S.A, {})
    }, {
      key: h.pn.AWAITING_AUTHENTICATION,
      renderStep: () => (0, l.jsx)(O.A, {})
    }, {
      key: h.pn.REVIEW,
      renderStep: e => (0, l.jsx)(I._M, G({}, e)),
      options: {
        renderHeader: true,
        useBreadcrumbLabel: e => (0, R.lp)(e) ? U.intl.string(U.t.UKbp1N) : U.intl.string(U.t.QBnNHq)
      }
    }, {
      key: h.pn.CONFIRM,
      renderStep: e => (0, l.jsx)(y._, G({}, e))
    }, {
      key: h.pn.SELECT_FREE_SKU,
      renderStep: e => (0, l.jsx)(v.j, G({}, e)),
      options: {
        bodyClassName: L.aw,
        isMediumModal: true
      }
    }]
  },
  K = W();

function V(e) {
  let n = (0, i.bG)([g.A], () => g.A.getPremiumTypeSubscription()),
    t = (0, c.cg)() ? D.gD.PREMIUM_MONTH_TIER_2 : true,
    {
      analyticsLocations: r
    } = (0, u.Ay)(e.analyticsLocations, o.A.PREMIUM_PAYMENT_MODAL),
    {
      confirmationFooter: s,
      defaultPlanId: a,
      giftingOrigin: d,
      giftMessage: p,
      giftRecipient: E,
      giftStyle: f,
      isGift: h,
      loadId: x,
      referralCode: T,
      subscriptionTier: A,
      referralTrialOfferId: O
    } = e;
  if (null != A && !Object.values(D.pe).includes(A)) throw Error("subscriptionTier must be a premium subscription");
  let S = (0, m.tA)({
    location: "PremiumPaymentSelect",
    giftRecipient: E,
    isGift: null != h && h
  });
  return (0, l.jsx)(u.f5, {
    value: r,
    children: (0, l.jsx)(j.PaymentContextProvider, {
      loadId: x,
      activeSubscription: null != e.subscription ? e.subscription : n,
      stepConfigs: W(S),
      skuIDs: [...D.oz],
      isGift: h,
      defaultPlanId: null != t ? t : a,
      referralCode: T,
      wasTier2PremiumBeforePurchase: e.wasTier2PremiumBeforePurchase,
      referralTrialOfferId: O,
      children: (0, l.jsx)(_.Qt, {
        confirmationFooter: s,
        children: (0, l.jsx)(P.dX, {
          isGift: h,
          giftRecipient: null == E ? true : E,
          giftMessage: p,
          giftStyle: f,
          giftingOrigin: d,
          children: (0, l.jsx)(F, G({}, e))
        })
      })
    })
  })
}