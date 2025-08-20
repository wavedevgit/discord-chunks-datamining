/** Chunk was on 54400 **/
/** chunk id: 7305, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  STEPS: () => F,
  default: () => N
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

function U(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = null != arguments[n] ? arguments[n] : {},
      r = Object.keys(t);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
      return Object.getOwnPropertyDescriptor(t, e).enumerable
    }))), r.forEach(function(n) {
      var r;
      r = t[n], n in e ? Object.defineProperty(e, n, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[n] = r
    })
  }
  return e
}
let k = [Chunk409813.h8.PLAN_SELECT, Chunk409813.h8.ADD_PAYMENT_STEPS, Chunk409813.h8.REVIEW, Chunk409813.h8.CONFIRM];

function R(e) {
  let {
    analyticsLocation: n,
    analyticsObject: t,
    analyticsSourceLocation: l,
    onComplete: o,
    transitionState: d,
    initialPlanId: p,
    subscriptionTier: u,
    onClose: j,
    trialId: m,
    trialFooterMessageOverride: g,
    reviewWarningMessage: S,
    openInvoiceId: y,
    onSubscriptionConfirmation: b,
    renderPurchaseConfirmation: P,
    postSuccessGuild: O,
    followupSKUInfo: I,
    renderHeader: v,
    applicationId: Z,
    guildId: M,
    referralTrialOfferId: B,
    skuId: T,
    returnRef: U,
    skipConfirm: k = false,
    continueSessionToInitialStep: R
  } = e, {
    analyticsLocations: H
  } = (0, C.ZP)();
  i.useEffect(() => {
    c.Z.isLoadedForPremiumSKUs() || s.Z.wait(() => (0, a.Y2)())
  }, []);
  let {
    step: F
  } = (0, f.JL)(), {
    isGift: N,
    giftMessage: G,
    giftRecipient: D
  } = (0, _.wD)(), W = N && (0, x.pO)(D) && F === h.h8.PLAN_SELECT;
  return (0, r.jsx)(E.Z, {
    isConfirmationStep: F === h.h8.CONFIRM,
    children: (0, r.jsx)(L.PaymentModal, {
      analyticsLocations: H,
      analyticsLocation: n,
      analyticsObject: t,
      analyticsSourceLocation: l,
      analyticsSubscriptionType: w.NYc.PREMIUM,
      onComplete: o,
      transitionState: d,
      initialPlanId: p,
      giftMessage: G,
      subscriptionTier: u,
      onClose: j,
      trialId: m,
      isGift: N,
      trialFooterMessageOverride: g,
      reviewWarningMessage: S,
      planGroup: A.Y1,
      openInvoiceId: y,
      onSubscriptionConfirmation: b,
      renderPurchaseConfirmation: P,
      postSuccessGuild: O,
      followupSKUInfo: I,
      renderHeader: v,
      applicationId: Z,
      guildId: M,
      referralTrialOfferId: B,
      skuId: T,
      shakeWhilePurchasing: true,
      isDynamicModal: W,
      returnRef: U,
      skipConfirm: k,
      continueSessionToInitialStep: R
    })
  })
}

function H(e) {
  var n, t;
  let {
    initialPlanId: i,
    handleStepChange: l,
    referralTrialOfferId: s
  } = e, {
    paymentSources: a,
    selectedSkuId: o,
    selectedPlan: C
  } = (0, f.JL)(), {
    isGift: d,
    claimableRewards: c
  } = (0, _.wD)(), u = (0, M.Z)({
    isGift: d,
    skuId: o,
    referralTrialOfferId: s
  }), x = (0, O.Fv)(u), j = (0, p.id)(C, d, c);
  return (0, r.jsx)(m.J, (n = U({}, e), t = t = {
    breadcrumbSteps: k,
    onReturn: () => {
      let e = Object.values(a),
        n = e.length < 1 && null == i ? h.h8.PLAN_SELECT : h.h8.REVIEW;
      x && (n = h.h8.REVIEW), j && e.length < 1 && (n = h.h8.SELECT_FREE_SKU), l(n, {
        trackedFromStep: h.h8.PAYMENT_TYPE
      })
    }
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : (function(e, n) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t.push.apply(t, r)
    }
    return t
  })(Object(t)).forEach(function(e) {
    Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(t, e))
  }), n))
}
let F = [{
  key: null,
  renderStep: e => (0, r.jsx)(L.I, U({}, e))
}, {
  key: Chunk409813.h8.SKU_SELECT,
  renderStep: e => (0, r.jsx)(v.q, U({}, e)),
  options: {
    renderHeader: false,
    hideSlider: true,
    isDynamicModal: true
  }
}, {
  key: Chunk409813.h8.WHAT_YOU_LOSE,
  renderStep: e => (0, r.jsx)(Z.x, U({}, e)),
  options: {
    renderHeader: false,
    hideSlider: true
  }
}, {
  key: Chunk409813.h8.PLAN_SELECT,
  renderStep: e => (0, r.jsx)(I.x, U({}, e)),
  options: {
    renderHeader: true,
    useBreadcrumbLabel: e => (0, O.Fv)(e) ? null : B.intl.string(B.t["r+SebW"]),
    sectionHeaderText: () => Chunk388032.intl.string(Chunk388032.t.UKbp1N)
  }
}, {
  key: Chunk409813.h8.ADD_PAYMENT_STEPS,
  renderStep: e => (0, r.jsx)(H, U({}, e)),
  options: {
    renderHeader: true,
    useBreadcrumbLabel: e => (0, O.Fv)(e) ? null : B.intl.string(B.t.Sb6wIy)
  }
}, {
  key: Chunk409813.h8.AWAITING_PURCHASE_TOKEN_AUTH,
  renderStep: () => (0, Chunk951288.jsx)(Chunk380898.Z, {})
}, {
  key: Chunk409813.h8.AWAITING_AUTHENTICATION,
  renderStep: () => (0, Chunk951288.jsx)(Chunk793541.Z, {})
}, {
  key: Chunk409813.h8.REVIEW,
  renderStep: e => (0, r.jsx)(y.l, U({}, e)),
  options: {
    renderHeader: true,
    useBreadcrumbLabel: e => (0, O.Fv)(e) ? B.intl.string(B.t.UKbp1N) : B.intl.string(B.t.QBnNHh)
  }
}, {
  key: Chunk409813.h8.CONFIRM,
  renderStep: e => (0, r.jsx)(b.b, U({}, e))
}, {
  key: Chunk409813.h8.SELECT_FREE_SKU,
  renderStep: e => (0, r.jsx)(P.S, U({}, e)),
  options: {
    bodyClassName: Chunk867983.selectFreeSku,
    isDynamicModal: true
  }
}];

function N(e) {
  let n = (0, l.e7)([u.Z], () => u.Z.getPremiumTypeSubscription()),
    t = (0, d.Vi)() ? A.Xh.PREMIUM_MONTH_TIER_2 : true,
    {
      analyticsLocations: i
    } = (0, C.ZP)(e.analyticsLocations, o.Z.PREMIUM_PAYMENT_MODAL),
    {
      confirmationFooter: s,
      defaultPlanId: a,
      giftingOrigin: p,
      giftMessage: c,
      giftRecipient: x,
      giftStyle: h,
      isGift: L,
      loadId: m,
      paymentModalBanner: g,
      referralCode: S,
      subscriptionTier: y
    } = e;
  if (null != y && !Object.values(A.Si).includes(y)) throw Error("subscriptionTier must be a premium subscription");
  return (0, r.jsx)(C.Gt, {
    value: i,
    children: (0, r.jsx)(f.PaymentContextProvider, {
      loadId: m,
      activeSubscription: null != e.subscription ? e.subscription : n,
      stepConfigs: F,
      skuIDs: [...A.YQ],
      isGift: L,
      defaultPlanId: null != t ? t : a,
      referralCode: S,
      wasTier2PremiumBeforePurchase: e.wasTier2PremiumBeforePurchase,
      children: (0, r.jsx)(j.c1, {
        confirmationFooter: s,
        paymentModalBanner: g,
        children: (0, r.jsx)(_.KB, {
          isGift: L,
          giftRecipient: null == x ? true : x,
          giftMessage: c,
          giftStyle: h,
          giftingOrigin: p,
          children: (0, r.jsx)(R, U({}, e))
        })
      })
    })
  })
}