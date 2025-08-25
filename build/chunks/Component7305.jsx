/** Chunk was on 54400 **/
/** chunk id: 7305, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  STEPS: () => H,
  default: () => F
}), require("./415506.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk821849 = require("./821849.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk367074 = require("./367074.js"),
  Chunk717401 = require("./717401.js"),
  Chunk509545 = require("./509545.js"),
  Chunk78839 = require("./78839.js"),
  Chunk669079 = require("./669079.js"),
  Chunk987209 = require("./987209.jsx"),
  Chunk563132 = require("./563132.jsx"),
  Chunk409813 = require("./409813.js"),
  Chunk107998 = require("./107998.jsx"),
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
let U = [Chunk409813.h8.PLAN_SELECT, Chunk409813.h8.ADD_PAYMENT_STEPS, Chunk409813.h8.REVIEW, Chunk409813.h8.CONFIRM];

function R(e) {
  let {
    analyticsLocation: t,
    analyticsObject: n,
    analyticsSourceLocation: l,
    onComplete: o,
    transitionState: d,
    initialPlanId: c,
    subscriptionTier: u,
    onClose: j,
    trialId: L,
    trialFooterMessageOverride: g,
    reviewWarningMessage: b,
    openInvoiceId: y,
    onSubscriptionConfirmation: E,
    renderPurchaseConfirmation: O,
    postSuccessGuild: P,
    followupSKUInfo: v,
    renderHeader: w,
    applicationId: I,
    guildId: M,
    referralTrialOfferId: A,
    skuId: T,
    returnRef: B,
    skipConfirm: U = false,
    continueSessionToInitialStep: R
  } = e, {
    analyticsLocations: N
  } = (0, C.ZP)();
  i.useEffect(() => {
    p.Z.isLoadedForPremiumSKUs() || s.Z.wait(() => (0, a.Y2)())
  }, []);
  let {
    step: H
  } = (0, _.JL)(), {
    isGift: F,
    giftMessage: G,
    giftRecipient: D
  } = (0, h.wD)(), W = F && (0, x.pO)(D) && H === f.h8.PLAN_SELECT;
  return (0, r.jsx)(S.Z, {
    isConfirmationStep: H === f.h8.CONFIRM,
    children: (0, r.jsx)(m.PaymentModal, {
      analyticsLocations: N,
      analyticsLocation: t,
      analyticsObject: n,
      analyticsSourceLocation: l,
      analyticsSubscriptionType: Z.NYc.PREMIUM,
      onComplete: o,
      transitionState: d,
      initialPlanId: c,
      giftMessage: G,
      subscriptionTier: u,
      onClose: j,
      trialId: L,
      isGift: F,
      trialFooterMessageOverride: g,
      reviewWarningMessage: b,
      planGroup: k.Y1,
      openInvoiceId: y,
      onSubscriptionConfirmation: E,
      renderPurchaseConfirmation: O,
      postSuccessGuild: P,
      followupSKUInfo: v,
      renderHeader: w,
      applicationId: I,
      guildId: M,
      referralTrialOfferId: A,
      skuId: T,
      shakeWhilePurchasing: true,
      isDynamicModal: W,
      returnRef: B,
      skipConfirm: U,
      continueSessionToInitialStep: R
    })
  })
}

function N(e) {
  var t, n;
  let {
    initialPlanId: i,
    handleStepChange: l,
    referralTrialOfferId: s
  } = e, {
    paymentSources: a,
    selectedSkuId: o,
    selectedPlan: C
  } = (0, _.JL)(), {
    isGift: d,
    claimableRewards: p
  } = (0, h.wD)(), u = (0, M.Z)({
    isGift: d,
    skuId: o,
    referralTrialOfferId: s
  }), x = (0, P.Fv)(u), j = (0, c.id)(C, d, p);
  return (0, r.jsx)(L.J, (t = B({}, e), n = n = {
    breadcrumbSteps: U,
    onReturn: () => {
      let e = Object.values(a),
        t = e.length < 1 && null == i ? f.h8.PLAN_SELECT : f.h8.REVIEW;
      x && (t = f.h8.REVIEW), j && e.length < 1 && (t = f.h8.SELECT_FREE_SKU), l(t, {
        trackedFromStep: f.h8.PAYMENT_TYPE
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
let H = [{
  key: null,
  renderStep: e => (0, r.jsx)(m.I, B({}, e))
}, {
  key: Chunk409813.h8.SKU_SELECT,
  renderStep: e => (0, r.jsx)(w.q, B({}, e)),
  options: {
    renderHeader: false,
    hideSlider: true,
    isDynamicModal: true
  }
}, {
  key: Chunk409813.h8.WHAT_YOU_LOSE,
  renderStep: e => (0, r.jsx)(I.x, B({}, e)),
  options: {
    renderHeader: false,
    hideSlider: true
  }
}, {
  key: Chunk409813.h8.PLAN_SELECT,
  renderStep: e => (0, r.jsx)(v.x, B({}, e)),
  options: {
    renderHeader: true,
    useBreadcrumbLabel: e => (0, P.Fv)(e) ? null : A.intl.string(A.t["r+SebW"]),
    sectionHeaderText: () => Chunk388032.intl.string(Chunk388032.t.UKbp1N)
  }
}, {
  key: Chunk409813.h8.ADD_PAYMENT_STEPS,
  renderStep: e => (0, r.jsx)(N, B({}, e)),
  options: {
    renderHeader: true,
    useBreadcrumbLabel: e => (0, P.Fv)(e) ? null : A.intl.string(A.t.Sb6wIy)
  }
}, {
  key: Chunk409813.h8.AWAITING_PURCHASE_TOKEN_AUTH,
  renderStep: () => (0, Chunk951288.jsx)(Chunk380898.Z, {})
}, {
  key: Chunk409813.h8.AWAITING_AUTHENTICATION,
  renderStep: () => (0, Chunk951288.jsx)(Chunk793541.Z, {})
}, {
  key: Chunk409813.h8.REVIEW,
  renderStep: e => (0, r.jsx)(y.l, B({}, e)),
  options: {
    renderHeader: true,
    useBreadcrumbLabel: e => (0, P.Fv)(e) ? A.intl.string(A.t.UKbp1N) : A.intl.string(A.t.QBnNHh)
  }
}, {
  key: Chunk409813.h8.CONFIRM,
  renderStep: e => (0, r.jsx)(E.b, B({}, e))
}, {
  key: Chunk409813.h8.SELECT_FREE_SKU,
  renderStep: e => (0, r.jsx)(O.S, B({}, e)),
  options: {
    bodyClassName: Chunk867983.selectFreeSku,
    isDynamicModal: true
  }
}];

function F(e) {
  let t = (0, l.e7)([u.Z], () => u.Z.getPremiumTypeSubscription()),
    n = (0, d.Vi)() ? k.Xh.PREMIUM_MONTH_TIER_2 : true,
    {
      analyticsLocations: i
    } = (0, C.ZP)(e.analyticsLocations, o.Z.PREMIUM_PAYMENT_MODAL),
    {
      confirmationFooter: s,
      defaultPlanId: a,
      giftingOrigin: c,
      giftMessage: p,
      giftRecipient: x,
      giftStyle: f,
      isGift: m,
      loadId: L,
      paymentModalBanner: g,
      referralCode: b,
      subscriptionTier: y,
      customCheckoutFlow: S
    } = e;
  if (null != y && !Object.values(k.Si).includes(y)) throw Error("subscriptionTier must be a premium subscription");
  return (0, r.jsx)(C.Gt, {
    value: i,
    children: (0, r.jsx)(_.PaymentContextProvider, {
      loadId: L,
      activeSubscription: null != e.subscription ? e.subscription : t,
      stepConfigs: H,
      skuIDs: [...k.YQ],
      isGift: m,
      defaultPlanId: null != n ? n : a,
      referralCode: b,
      wasTier2PremiumBeforePurchase: e.wasTier2PremiumBeforePurchase,
      customCheckoutFlow: S,
      children: (0, r.jsx)(j.c1, {
        confirmationFooter: s,
        paymentModalBanner: g,
        children: (0, r.jsx)(h.KB, {
          isGift: m,
          giftRecipient: null == x ? true : x,
          giftMessage: p,
          giftStyle: f,
          giftingOrigin: c,
          children: (0, r.jsx)(R, B({}, e))
        })
      })
    })
  })
}