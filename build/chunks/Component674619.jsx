/** Chunk was on 2824 **/
/** chunk id: 674619, original params: e,t,n (module,exports,require) **/
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

function U(e) {
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
    onClose: f,
    trialId: v,
    trialFooterMessageOverride: E,
    reviewWarningMessage: x,
    openInvoiceId: S,
    onSubscriptionConfirmation: T,
    renderPurchaseConfirmation: A,
    postSuccessGuild: k,
    followupSKUInfo: C,
    renderHeader: w,
    applicationId: _,
    guildId: M,
    referralTrialOfferId: N,
    skuId: L,
    returnRef: G,
    skipConfirm: U = false,
    continueSessionToInitialStep: H
  } = e, {
    analyticsLocations: B
  } = (0, u.Ay)();
  l.useEffect(() => {
    g.A.isLoadedForPremiumSKUs() || s.h.wait(() => (0, a.zS)())
  }, []);
  let {
    step: F,
    selectedSkuId: W,
    purchaseState: K
  } = (0, b.P5)(), {
    isGift: V,
    giftMessage: z,
    giftRecipient: Y
  } = (0, j.Pv)(), Z = V && (0, y.Ik)(Y) && F === h.pn.PLAN_SELECT, Q = (0, p.T)(V, W), q = K === O.h.PURCHASING;
  return (0, r.jsx)(I.A, {
    isConfirmationStep: F === h.pn.CONFIRM && null == H && null == A,
    isEligibleForWowMoment: Q,
    shouldPrefetchWowMoment: q,
    children: (0, r.jsx)(P.PaymentModal, {
      analyticsLocations: B,
      analyticsLocation: t,
      analyticsObject: n,
      analyticsSourceLocation: i,
      analyticsSubscriptionType: R.rzx.PREMIUM,
      onComplete: o,
      transitionState: c,
      initialPlanId: d,
      giftMessage: z,
      subscriptionTier: m,
      onClose: f,
      trialId: v,
      isGift: V,
      trialFooterMessageOverride: E,
      reviewWarningMessage: x,
      planGroup: D.LE,
      openInvoiceId: S,
      onSubscriptionConfirmation: T,
      renderPurchaseConfirmation: A,
      postSuccessGuild: k,
      followupSKUInfo: C,
      renderHeader: w,
      applicationId: _,
      guildId: M,
      referralTrialOfferId: N,
      skuId: L,
      shakeWhilePurchasing: true,
      isDynamicModal: Z,
      returnRef: G,
      skipConfirm: U,
      continueSessionToInitialStep: H
    })
  })
}

function F(e) {
  var t, n;
  let {
    initialPlanId: l,
    handleStepChange: i,
    referralTrialOfferId: s
  } = e, {
    paymentSources: a,
    selectedSkuId: o,
    selectedPlan: u
  } = (0, b.P5)(), {
    isGift: c,
    claimableRewards: p
  } = (0, j.Pv)(), m = (0, N.A)({
    isGift: c,
    skuId: o,
    referralTrialOfferId: s
  }), g = (0, C.lp)(m), f = (0, d.px)(u, c, p);
  return (0, r.jsx)(E.x, (t = U({}, e), n = n = {
    breadcrumbSteps: H,
    onReturn: () => {
      let e = Object.values(a),
        t = e.length < 1 && null == l ? h.pn.PLAN_SELECT : h.pn.REVIEW;
      g && (t = h.pn.REVIEW), f && e.length < 1 && (t = h.pn.SELECT_FREE_SKU), i(t, {
        trackedFromStep: h.pn.PAYMENT_TYPE
      })
    }
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
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
      renderStep: e => (0, r.jsx)(P.I, U({}, e))
    }, {
      key: h.pn.SKU_SELECT,
      renderStep: e => (0, r.jsx)(_.F, U({}, e)),
      options: {
        renderHeader: false,
        hideSlider: true,
        isDynamicModal: !e,
        isLargeModal: e
      }
    }, {
      key: h.pn.WHAT_YOU_LOSE,
      renderStep: e => (0, r.jsx)(M.K, U({}, e)),
      options: {
        renderHeader: false,
        hideSlider: true
      }
    }, {
      key: h.pn.PLAN_SELECT,
      renderStep: e => (0, r.jsx)(w.Z, U({}, e)),
      options: {
        renderHeader: true,
        useBreadcrumbLabel: e => (0, C.lp)(e) ? null : L.intl.string(L.t["r+SebU"]),
        sectionHeaderText: () => L.intl.string(L.t.UKbp1N)
      }
    }, {
      key: h.pn.ADD_PAYMENT_STEPS,
      renderStep: e => (0, r.jsx)(F, U({}, e)),
      options: {
        renderHeader: true,
        useBreadcrumbLabel: e => (0, C.lp)(e) ? null : L.intl.string(L.t.Sb6wI1)
      }
    }, {
      key: h.pn.AWAITING_PURCHASE_TOKEN_AUTH,
      renderStep: () => (0, r.jsx)(S.A, {})
    }, {
      key: h.pn.AWAITING_AUTHENTICATION,
      renderStep: () => (0, r.jsx)(x.A, {})
    }, {
      key: h.pn.REVIEW,
      renderStep: e => (0, r.jsx)(T._M, U({}, e)),
      options: {
        renderHeader: true,
        useBreadcrumbLabel: e => (0, C.lp)(e) ? L.intl.string(L.t.UKbp1N) : L.intl.string(L.t.QBnNHq)
      }
    }, {
      key: h.pn.CONFIRM,
      renderStep: e => (0, r.jsx)(A._, U({}, e))
    }, {
      key: h.pn.SELECT_FREE_SKU,
      renderStep: e => (0, r.jsx)(k.j, U({}, e)),
      options: {
        bodyClassName: G.aw,
        isMediumModal: true
      }
    }]
  },
  K = W();

function V(e) {
  let t = (0, i.bG)([f.A], () => f.A.getPremiumTypeSubscription()),
    n = (0, c.cg)() ? D.gD.PREMIUM_MONTH_TIER_2 : true,
    {
      analyticsLocations: l
    } = (0, u.Ay)(e.analyticsLocations, o.A.PREMIUM_PAYMENT_MODAL),
    {
      confirmationFooter: s,
      defaultPlanId: a,
      giftingOrigin: d,
      giftMessage: p,
      giftRecipient: g,
      giftStyle: y,
      isGift: h,
      loadId: O,
      referralCode: P,
      subscriptionTier: E,
      referralTrialOfferId: x
    } = e;
  if (null != E && !Object.values(D.pe).includes(E)) throw Error("subscriptionTier must be a premium subscription");
  let S = (0, m.tA)({
    location: "PremiumPaymentSelect",
    giftRecipient: g,
    isGift: null != h && h
  });
  return (0, r.jsx)(u.f5, {
    value: l,
    children: (0, r.jsx)(b.PaymentContextProvider, {
      loadId: O,
      activeSubscription: null != e.subscription ? e.subscription : t,
      stepConfigs: W(S),
      skuIDs: [...D.oz],
      isGift: h,
      defaultPlanId: null != n ? n : a,
      referralCode: P,
      wasTier2PremiumBeforePurchase: e.wasTier2PremiumBeforePurchase,
      referralTrialOfferId: x,
      children: (0, r.jsx)(v.Qt, {
        confirmationFooter: s,
        children: (0, r.jsx)(j.dX, {
          isGift: h,
          giftRecipient: null == g ? true : g,
          giftMessage: p,
          giftStyle: y,
          giftingOrigin: d,
          children: (0, r.jsx)(B, U({}, e))
        })
      })
    })
  })
}