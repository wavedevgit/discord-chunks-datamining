/** Chunk was on 2824 **/
/** chunk id: 674619, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  E: () => W,
  STEPS: () => z,
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
let H = [Chunk166532.pn.PLAN_SELECT, Chunk166532.pn.ADD_PAYMENT_STEPS, Chunk166532.pn.REVIEW, Chunk166532.pn.CONFIRM];

function B(e) {
  let {
    analyticsLocation: t,
    analyticsObject: n,
    analyticsSourceLocation: i,
    onComplete: o,
    transitionState: c,
    initialPlanId: d,
    subscriptionTier: m,
    onClose: g,
    trialId: b,
    trialFooterMessageOverride: P,
    reviewWarningMessage: S,
    openInvoiceId: E,
    onSubscriptionConfirmation: T,
    renderPurchaseConfirmation: A,
    postSuccessGuild: k,
    followupSKUInfo: w,
    renderHeader: _,
    applicationId: C,
    guildId: M,
    referralTrialOfferId: N,
    skuId: L,
    returnRef: U,
    skipConfirm: G = false,
    continueSessionToInitialStep: H
  } = e, {
    analyticsLocations: B
  } = (0, u.Ay)();
  r.useEffect(() => {
    f.A.isLoadedForPremiumSKUs() || s.h.wait(() => (0, a.zS)())
  }, []);
  let {
    step: F,
    selectedSkuId: W,
    purchaseState: z
  } = (0, h.P5)(), {
    isGift: V,
    giftMessage: K,
    giftRecipient: Y
  } = (0, y.Pv)(), Z = V && (0, j.Ik)(Y) && F === v.pn.PLAN_SELECT, Q = (0, p.T)(V, W), q = z === O.h.PURCHASING;
  return (0, l.jsx)(I.A, {
    isConfirmationStep: F === v.pn.CONFIRM && null == H && null == A,
    isEligibleForWowMoment: Q,
    shouldPrefetchWowMoment: q,
    children: (0, l.jsx)(x.PaymentModal, {
      analyticsLocations: B,
      analyticsLocation: t,
      analyticsObject: n,
      analyticsSourceLocation: i,
      analyticsSubscriptionType: R.rzx.PREMIUM,
      onComplete: o,
      transitionState: c,
      initialPlanId: d,
      giftMessage: K,
      subscriptionTier: m,
      onClose: g,
      trialId: b,
      isGift: V,
      trialFooterMessageOverride: P,
      reviewWarningMessage: S,
      planGroup: D.LE,
      openInvoiceId: E,
      onSubscriptionConfirmation: T,
      renderPurchaseConfirmation: A,
      postSuccessGuild: k,
      followupSKUInfo: w,
      renderHeader: _,
      applicationId: C,
      guildId: M,
      referralTrialOfferId: N,
      skuId: L,
      shakeWhilePurchasing: true,
      isDynamicModal: Z,
      returnRef: U,
      skipConfirm: G,
      continueSessionToInitialStep: H
    })
  })
}

function F(e) {
  var t, n;
  let {
    initialPlanId: r,
    handleStepChange: i,
    referralTrialOfferId: s
  } = e, {
    paymentSources: a,
    selectedSkuId: o,
    selectedPlan: u
  } = (0, h.P5)(), {
    isGift: c,
    claimableRewards: p
  } = (0, y.Pv)(), m = (0, N.A)({
    isGift: c,
    skuId: o,
    referralTrialOfferId: s
  }), f = (0, w.lp)(m), g = (0, d.px)(u, c, p);
  return (0, l.jsx)(P.x, (t = G({}, e), n = n = {
    breadcrumbSteps: H,
    onReturn: () => {
      let e = Object.values(a),
        t = e.length < 1 && null == r ? v.pn.PLAN_SELECT : v.pn.REVIEW;
      f && (t = v.pn.REVIEW), g && e.length < 1 && (t = v.pn.SELECT_FREE_SKU), i(t, {
        trackedFromStep: v.pn.PAYMENT_TYPE
      })
    }
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      n.push.apply(n, l)
    }
    return n
  })(Object(n)).forEach(function(e) {
    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
  }), t))
}
let W = function() {
    let e = arguments.length > 0 && true !== arguments[0] && arguments[0];
    return [{
      key: null,
      renderStep: e => (0, l.jsx)(x.I, G({}, e))
    }, {
      key: v.pn.SKU_SELECT,
      renderStep: e => (0, l.jsx)(C.F, G({}, e)),
      options: {
        renderHeader: false,
        hideSlider: true,
        isDynamicModal: !e,
        isLargeModal: e
      }
    }, {
      key: v.pn.WHAT_YOU_LOSE,
      renderStep: e => (0, l.jsx)(M.K, G({}, e)),
      options: {
        renderHeader: false,
        hideSlider: true
      }
    }, {
      key: v.pn.PLAN_SELECT,
      renderStep: e => (0, l.jsx)(_.Z, G({}, e)),
      options: {
        renderHeader: true,
        useBreadcrumbLabel: e => (0, w.lp)(e) ? null : L.intl.string(L.t["r+SebU"]),
        sectionHeaderText: () => L.intl.string(L.t.UKbp1N)
      }
    }, {
      key: v.pn.ADD_PAYMENT_STEPS,
      renderStep: e => (0, l.jsx)(F, G({}, e)),
      options: {
        renderHeader: true,
        useBreadcrumbLabel: e => (0, w.lp)(e) ? null : L.intl.string(L.t.Sb6wI1)
      }
    }, {
      key: v.pn.AWAITING_PURCHASE_TOKEN_AUTH,
      renderStep: () => (0, l.jsx)(E.A, {})
    }, {
      key: v.pn.AWAITING_AUTHENTICATION,
      renderStep: () => (0, l.jsx)(S.A, {})
    }, {
      key: v.pn.REVIEW,
      renderStep: e => (0, l.jsx)(T._M, G({}, e)),
      options: {
        renderHeader: true,
        useBreadcrumbLabel: e => (0, w.lp)(e) ? L.intl.string(L.t.UKbp1N) : L.intl.string(L.t.QBnNHq)
      }
    }, {
      key: v.pn.CONFIRM,
      renderStep: e => (0, l.jsx)(A._, G({}, e))
    }, {
      key: v.pn.SELECT_FREE_SKU,
      renderStep: e => (0, l.jsx)(k.j, G({}, e)),
      options: {
        bodyClassName: U.aw,
        isMediumModal: true
      }
    }]
  },
  z = W();

function V(e) {
  let t = (0, i.bG)([g.A], () => g.A.getPremiumTypeSubscription()),
    n = (0, c.cg)() ? D.gD.PREMIUM_MONTH_TIER_2 : true,
    {
      analyticsLocations: r
    } = (0, u.Ay)(e.analyticsLocations, o.A.PREMIUM_PAYMENT_MODAL),
    {
      confirmationFooter: s,
      defaultPlanId: a,
      giftingOrigin: d,
      giftMessage: p,
      giftRecipient: f,
      giftStyle: j,
      isGift: v,
      loadId: O,
      referralCode: x,
      subscriptionTier: P,
      referralTrialOfferId: S
    } = e;
  if (null != P && !Object.values(D.pe).includes(P)) throw Error("subscriptionTier must be a premium subscription");
  let E = (0, m.tA)({
    location: "PremiumPaymentSelect",
    giftRecipient: f,
    isGift: null != v && v
  });
  return (0, l.jsx)(u.f5, {
    value: r,
    children: (0, l.jsx)(h.PaymentContextProvider, {
      loadId: O,
      activeSubscription: null != e.subscription ? e.subscription : t,
      stepConfigs: W(E),
      skuIDs: [...D.oz],
      isGift: v,
      defaultPlanId: null != n ? n : a,
      referralCode: x,
      wasTier2PremiumBeforePurchase: e.wasTier2PremiumBeforePurchase,
      referralTrialOfferId: S,
      children: (0, l.jsx)(b.Qt, {
        confirmationFooter: s,
        children: (0, l.jsx)(y.dX, {
          isGift: v,
          giftRecipient: null == f ? true : f,
          giftMessage: p,
          giftStyle: j,
          giftingOrigin: d,
          children: (0, l.jsx)(B, G({}, e))
        })
      })
    })
  })
}