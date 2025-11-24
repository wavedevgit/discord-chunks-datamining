/** Chunk was on 54400 **/
/** chunk id: 7305, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  STEPS: () => K,
  default: () => z
}), require("./415506.js"), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk821849 = require("./821849.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk367074 = require("./367074.js"),
  Chunk717401 = require("./717401.js"),
  Chunk164275 = require("./164275.js"),
  Chunk602733 = require("./602733.js"),
  Chunk509545 = require("./509545.js"),
  Chunk78839 = require("./78839.js"),
  Chunk669079 = require("./669079.js"),
  Chunk987209 = require("./987209.jsx"),
  Chunk563132 = require("./563132.jsx"),
  Chunk409813 = require("./409813.js"),
  Chunk107998 = require("./107998.jsx"),
  Chunk45572 = require("./45572.js"),
  Chunk791785 = require("./791785.jsx"),
  Chunk276442 = require("./276442.js"),
  Chunk793541 = require("./793541.jsx"),
  Chunk380898 = require("./380898.jsx"),
  Chunk710094 = require("./710094.jsx"),
  Chunk518727 = require("./518727.jsx"),
  Chunk293858 = require("./293858.jsx"),
  Chunk183813 = require("./183813.jsx"),
  Chunk614223 = require("./614223.js"),
  Chunk174827 = require("./174827.jsx"),
  Chunk846464 = require("./846464.jsx"),
  Chunk184160 = require("./184160.jsx"),
  Chunk48175 = require("./48175.js"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk867983 = require("./867983.js");

function D(e) {
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
let F = [Chunk409813.h8.PLAN_SELECT, Chunk409813.h8.ADD_PAYMENT_STEPS, Chunk409813.h8.REVIEW, Chunk409813.h8.CONFIRM];

function H(e) {
  let {
    analyticsLocation: t,
    analyticsObject: n,
    analyticsSourceLocation: a,
    onComplete: s,
    transitionState: c,
    initialPlanId: u,
    subscriptionTier: m,
    onClose: f,
    trialId: P,
    trialFooterMessageOverride: S,
    reviewWarningMessage: _,
    openInvoiceId: w,
    onSubscriptionConfirmation: C,
    renderPurchaseConfirmation: E,
    postSuccessGuild: k,
    followupSKUInfo: I,
    renderHeader: T,
    applicationId: N,
    guildId: R,
    referralTrialOfferId: M,
    skuId: L,
    returnRef: B,
    skipConfirm: D = false,
    continueSessionToInitialStep: F
  } = e, {
    analyticsLocations: H
  } = (0, d.ZP)();
  l.useEffect(() => {
    h.Z.isLoadedForPremiumSKUs() || i.Z.wait(() => (0, o.Y2)())
  }, []);
  let {
    step: G,
    wasTier2PremiumBeforePurchase: U,
    selectedSkuId: K,
    purchaseState: z
  } = (0, v.JL)(), {
    isGift: W,
    giftMessage: V,
    giftRecipient: Y
  } = (0, g.wD)(), q = W && (0, b.pO)(Y) && G === x.h8.PLAN_SELECT, J = (0, p.P)(W, !!U, K), Q = z === y.A.PURCHASING;
  return (0, r.jsx)(O.Z, {
    isConfirmationStep: G === x.h8.CONFIRM && null == F && null == E,
    isEligibleForWowMoment: J,
    shouldPrefetchWowMoment: Q,
    children: (0, r.jsx)(j.PaymentModal, {
      analyticsLocations: H,
      analyticsLocation: t,
      analyticsObject: n,
      analyticsSourceLocation: a,
      analyticsSubscriptionType: A.NYc.PREMIUM,
      onComplete: s,
      transitionState: c,
      initialPlanId: u,
      giftMessage: V,
      subscriptionTier: m,
      onClose: f,
      trialId: P,
      isGift: W,
      trialFooterMessageOverride: S,
      reviewWarningMessage: _,
      planGroup: Z.Y1,
      openInvoiceId: w,
      onSubscriptionConfirmation: C,
      renderPurchaseConfirmation: E,
      postSuccessGuild: k,
      followupSKUInfo: I,
      renderHeader: T,
      applicationId: N,
      guildId: R,
      referralTrialOfferId: M,
      skuId: L,
      shakeWhilePurchasing: true,
      isDynamicModal: q,
      returnRef: B,
      skipConfirm: D,
      continueSessionToInitialStep: F
    })
  })
}

function G(e) {
  var t, n;
  let {
    initialPlanId: l,
    handleStepChange: a,
    referralTrialOfferId: i
  } = e, {
    paymentSources: o,
    selectedSkuId: s,
    selectedPlan: d
  } = (0, v.JL)(), {
    isGift: c,
    claimableRewards: p
  } = (0, g.wD)(), m = (0, M.Z)({
    isGift: c,
    skuId: s,
    referralTrialOfferId: i
  }), h = (0, I.Fv)(m), f = (0, u.id)(d, c, p);
  return (0, r.jsx)(S.J, (t = D({}, e), n = n = {
    breadcrumbSteps: F,
    onReturn: () => {
      let e = Object.values(o),
        t = e.length < 1 && null == l ? x.h8.PLAN_SELECT : x.h8.REVIEW;
      h && (t = x.h8.REVIEW), f && e.length < 1 && (t = x.h8.SELECT_FREE_SKU), a(t, {
        trackedFromStep: x.h8.PAYMENT_TYPE
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
let U = function() {
    let e = arguments.length > 0 && true !== arguments[0] && arguments[0];
    return [{
      key: null,
      renderStep: e => (0, r.jsx)(j.I, D({}, e))
    }, {
      key: Chunk409813.h8.SKU_SELECT,
      renderStep: e => (0, r.jsx)(N.q, D({}, e)),
      options: {
        renderHeader: false,
        hideSlider: true,
        isDynamicModal: !module,
        isLargeModal: module
      }
    }, {
      key: Chunk409813.h8.WHAT_YOU_LOSE,
      renderStep: e => (0, r.jsx)(R.x, D({}, e)),
      options: {
        renderHeader: false,
        hideSlider: true
      }
    }, {
      key: Chunk409813.h8.PLAN_SELECT,
      renderStep: e => (0, r.jsx)(T.x, D({}, e)),
      options: {
        renderHeader: true,
        useBreadcrumbLabel: e => (0, I.Fv)(e) ? null : L.intl.string(L.t["r+SebU"]),
        sectionHeaderText: () => Chunk388032.intl.string(Chunk388032.t.UKbp1N)
      }
    }, {
      key: Chunk409813.h8.ADD_PAYMENT_STEPS,
      renderStep: e => (0, r.jsx)(G, D({}, e)),
      options: {
        renderHeader: true,
        useBreadcrumbLabel: e => (0, I.Fv)(e) ? null : L.intl.string(L.t.Sb6wI1)
      }
    }, {
      key: Chunk409813.h8.AWAITING_PURCHASE_TOKEN_AUTH,
      renderStep: () => (0, Chunk54381.jsx)(Chunk380898.Z, {})
    }, {
      key: Chunk409813.h8.AWAITING_AUTHENTICATION,
      renderStep: () => (0, Chunk54381.jsx)(Chunk793541.Z, {})
    }, {
      key: Chunk409813.h8.REVIEW,
      renderStep: e => (0, r.jsx)(C.l, D({}, e)),
      options: {
        renderHeader: true,
        useBreadcrumbLabel: e => (0, I.Fv)(e) ? L.intl.string(L.t.UKbp1N) : L.intl.string(L.t.QBnNHq)
      }
    }, {
      key: Chunk409813.h8.CONFIRM,
      renderStep: e => (0, r.jsx)(E.b, D({}, e))
    }, {
      key: Chunk409813.h8.SELECT_FREE_SKU,
      renderStep: e => (0, r.jsx)(k.S, D({}, e)),
      options: {
        bodyClassName: Chunk867983.selectFreeSku,
        isMediumModal: true
      }
    }]
  },
  K = U();

function z(e) {
  let t = (0, a.e7)([f.Z], () => f.Z.getPremiumTypeSubscription()),
    n = (0, c.Vi)() ? Z.Xh.PREMIUM_MONTH_TIER_2 : true,
    {
      analyticsLocations: l
    } = (0, d.ZP)(e.analyticsLocations, s.Z.PREMIUM_PAYMENT_MODAL),
    {
      confirmationFooter: i,
      defaultPlanId: o,
      giftingOrigin: u,
      giftMessage: p,
      giftRecipient: h,
      giftStyle: b,
      isGift: x,
      loadId: y,
      referralCode: j,
      subscriptionTier: S
    } = e;
  if (null != S && !Object.values(Z.Si).includes(S)) throw Error("subscriptionTier must be a premium subscription");
  let _ = (0, m.ao)({
    location: "PremiumPaymentSelect",
    giftRecipient: h,
    isGift: null != x && x
  });
  return (0, r.jsx)(d.Gt, {
    value: l,
    children: (0, r.jsx)(v.PaymentContextProvider, {
      loadId: y,
      activeSubscription: null != e.subscription ? e.subscription : t,
      stepConfigs: U(_),
      skuIDs: [...Z.YQ],
      isGift: x,
      defaultPlanId: null != n ? n : o,
      referralCode: j,
      wasTier2PremiumBeforePurchase: e.wasTier2PremiumBeforePurchase,
      children: (0, r.jsx)(P.c1, {
        confirmationFooter: i,
        children: (0, r.jsx)(g.KB, {
          isGift: x,
          giftRecipient: null == h ? true : h,
          giftMessage: p,
          giftStyle: b,
          giftingOrigin: u,
          children: (0, r.jsx)(H, D({}, e))
        })
      })
    })
  })
}