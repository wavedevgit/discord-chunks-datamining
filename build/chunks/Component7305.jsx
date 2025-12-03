/** Chunk was on 54400 **/
/** chunk id: 7305, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  STEPS: () => z,
  default: () => K
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

function B(e) {
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
    initialPlanId: d,
    subscriptionTier: m,
    onClose: f,
    trialId: y,
    trialFooterMessageOverride: j,
    reviewWarningMessage: _,
    openInvoiceId: O,
    onSubscriptionConfirmation: w,
    renderPurchaseConfirmation: E,
    postSuccessGuild: k,
    followupSKUInfo: I,
    renderHeader: T,
    applicationId: N,
    guildId: M,
    referralTrialOfferId: R,
    skuId: Z,
    returnRef: D,
    skipConfirm: B = false,
    continueSessionToInitialStep: F
  } = e, {
    analyticsLocations: H
  } = (0, u.ZP)();
  l.useEffect(() => {
    h.Z.isLoadedForPremiumSKUs() || i.Z.wait(() => (0, o.Y2)())
  }, []);
  let {
    step: G,
    wasTier2PremiumBeforePurchase: U,
    selectedSkuId: z,
    purchaseState: K
  } = (0, v.JL)(), {
    isGift: W,
    giftMessage: V,
    giftRecipient: Y
  } = (0, g.wD)(), q = W && (0, b.pO)(Y) && G === S.h8.PLAN_SELECT, J = (0, p.P)(W, !!U, z), Q = K === x.A.PURCHASING;
  return (0, r.jsx)(C.Z, {
    isConfirmationStep: G === S.h8.CONFIRM && null == F && null == E,
    isEligibleForWowMoment: J,
    shouldPrefetchWowMoment: Q,
    children: (0, r.jsx)(P.PaymentModal, {
      analyticsLocations: H,
      analyticsLocation: t,
      analyticsObject: n,
      analyticsSourceLocation: a,
      analyticsSubscriptionType: A.NYc.PREMIUM,
      onComplete: s,
      transitionState: c,
      initialPlanId: d,
      giftMessage: V,
      subscriptionTier: m,
      onClose: f,
      trialId: y,
      isGift: W,
      trialFooterMessageOverride: j,
      reviewWarningMessage: _,
      planGroup: L.Y1,
      openInvoiceId: O,
      onSubscriptionConfirmation: w,
      renderPurchaseConfirmation: E,
      postSuccessGuild: k,
      followupSKUInfo: I,
      renderHeader: T,
      applicationId: N,
      guildId: M,
      referralTrialOfferId: R,
      skuId: Z,
      shakeWhilePurchasing: true,
      isDynamicModal: q,
      returnRef: D,
      skipConfirm: B,
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
    selectedPlan: u
  } = (0, v.JL)(), {
    isGift: c,
    claimableRewards: p
  } = (0, g.wD)(), m = (0, R.Z)({
    isGift: c,
    skuId: s,
    referralTrialOfferId: i
  }), h = (0, I.Fv)(m), f = (0, d.id)(u, c, p);
  return (0, r.jsx)(j.J, (t = B({}, e), n = n = {
    breadcrumbSteps: F,
    onReturn: () => {
      let e = Object.values(o),
        t = e.length < 1 && null == l ? S.h8.PLAN_SELECT : S.h8.REVIEW;
      h && (t = S.h8.REVIEW), f && e.length < 1 && (t = S.h8.SELECT_FREE_SKU), a(t, {
        trackedFromStep: S.h8.PAYMENT_TYPE
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
      renderStep: e => (0, r.jsx)(P.I, B({}, e))
    }, {
      key: Chunk409813.h8.SKU_SELECT,
      renderStep: e => (0, r.jsx)(N.q, B({}, e)),
      options: {
        renderHeader: false,
        hideSlider: true,
        isDynamicModal: !module,
        isLargeModal: module
      }
    }, {
      key: Chunk409813.h8.WHAT_YOU_LOSE,
      renderStep: e => (0, r.jsx)(M.x, B({}, e)),
      options: {
        renderHeader: false,
        hideSlider: true
      }
    }, {
      key: Chunk409813.h8.PLAN_SELECT,
      renderStep: e => (0, r.jsx)(T.x, B({}, e)),
      options: {
        renderHeader: true,
        useBreadcrumbLabel: e => (0, I.Fv)(e) ? null : Z.intl.string(Z.t["r+SebU"]),
        sectionHeaderText: () => Chunk388032.intl.string(Chunk388032.t.UKbp1N)
      }
    }, {
      key: Chunk409813.h8.ADD_PAYMENT_STEPS,
      renderStep: e => (0, r.jsx)(G, B({}, e)),
      options: {
        renderHeader: true,
        useBreadcrumbLabel: e => (0, I.Fv)(e) ? null : Z.intl.string(Z.t.Sb6wI1)
      }
    }, {
      key: Chunk409813.h8.AWAITING_PURCHASE_TOKEN_AUTH,
      renderStep: () => (0, Chunk54381.jsx)(Chunk380898.Z, {})
    }, {
      key: Chunk409813.h8.AWAITING_AUTHENTICATION,
      renderStep: () => (0, Chunk54381.jsx)(Chunk793541.Z, {})
    }, {
      key: Chunk409813.h8.REVIEW,
      renderStep: e => (0, r.jsx)(w.l, B({}, e)),
      options: {
        renderHeader: true,
        useBreadcrumbLabel: e => (0, I.Fv)(e) ? Z.intl.string(Z.t.UKbp1N) : Z.intl.string(Z.t.QBnNHq)
      }
    }, {
      key: Chunk409813.h8.CONFIRM,
      renderStep: e => (0, r.jsx)(E.b, B({}, e))
    }, {
      key: Chunk409813.h8.SELECT_FREE_SKU,
      renderStep: e => (0, r.jsx)(k.S, B({}, e)),
      options: {
        bodyClassName: Chunk867983.selectFreeSku,
        isMediumModal: true
      }
    }]
  },
  z = U();

function K(e) {
  let t = (0, a.e7)([f.Z], () => f.Z.getPremiumTypeSubscription()),
    n = (0, c.Vi)() ? L.Xh.PREMIUM_MONTH_TIER_2 : true,
    {
      analyticsLocations: l
    } = (0, u.ZP)(e.analyticsLocations, s.Z.PREMIUM_PAYMENT_MODAL),
    {
      confirmationFooter: i,
      defaultPlanId: o,
      giftingOrigin: d,
      giftMessage: p,
      giftRecipient: h,
      giftStyle: b,
      isGift: S,
      loadId: x,
      referralCode: P,
      subscriptionTier: j
    } = e;
  if (null != j && !Object.values(L.Si).includes(j)) throw Error("subscriptionTier must be a premium subscription");
  let _ = (0, m.ao)({
    location: "PremiumPaymentSelect",
    giftRecipient: h,
    isGift: null != S && S
  });
  return (0, r.jsx)(u.Gt, {
    value: l,
    children: (0, r.jsx)(v.PaymentContextProvider, {
      loadId: x,
      activeSubscription: null != e.subscription ? e.subscription : t,
      stepConfigs: U(_),
      skuIDs: [...L.YQ],
      isGift: S,
      defaultPlanId: null != n ? n : o,
      referralCode: P,
      wasTier2PremiumBeforePurchase: e.wasTier2PremiumBeforePurchase,
      children: (0, r.jsx)(y.c1, {
        confirmationFooter: i,
        children: (0, r.jsx)(g.KB, {
          isGift: S,
          giftRecipient: null == h ? true : h,
          giftMessage: p,
          giftStyle: b,
          giftingOrigin: d,
          children: (0, r.jsx)(H, B({}, e))
        })
      })
    })
  })
}