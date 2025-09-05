/** Chunk was on 4125 **/
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
  Chunk729005 = require("./729005.js");

function N(e) {
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
let B = [Chunk409813.h8.PLAN_SELECT, Chunk409813.h8.ADD_PAYMENT_STEPS, Chunk409813.h8.REVIEW, Chunk409813.h8.CONFIRM];

function R(e) {
  let {
    analyticsLocation: t,
    analyticsObject: n,
    analyticsSourceLocation: l,
    onComplete: o,
    transitionState: d,
    initialPlanId: c,
    subscriptionTier: p,
    onClose: m,
    trialId: L,
    trialFooterMessageOverride: g,
    reviewWarningMessage: b,
    openInvoiceId: y,
    onSubscriptionConfirmation: v,
    renderPurchaseConfirmation: E,
    postSuccessGuild: O,
    followupSKUInfo: P,
    renderHeader: w,
    applicationId: k,
    guildId: M,
    referralTrialOfferId: A,
    skuId: Z,
    returnRef: N,
    skipConfirm: B = false,
    continueSessionToInitialStep: R
  } = e, {
    analyticsLocations: U
  } = (0, C.ZP)();
  i.useEffect(() => {
    u.Z.isLoadedForPremiumSKUs() || a.Z.wait(() => (0, s.Y2)())
  }, []);
  let {
    step: H
  } = (0, h.JL)(), {
    isGift: F,
    giftMessage: G,
    giftRecipient: D
  } = (0, _.wD)(), K = F && (0, x.pO)(D) && H === f.h8.PLAN_SELECT;
  return (0, r.jsx)(S.Z, {
    isConfirmationStep: H === f.h8.CONFIRM,
    children: (0, r.jsx)(j.PaymentModal, {
      analyticsLocations: U,
      analyticsLocation: t,
      analyticsObject: n,
      analyticsSourceLocation: l,
      analyticsSubscriptionType: I.NYc.PREMIUM,
      onComplete: o,
      transitionState: d,
      initialPlanId: c,
      giftMessage: G,
      subscriptionTier: p,
      onClose: m,
      trialId: L,
      isGift: F,
      trialFooterMessageOverride: g,
      reviewWarningMessage: b,
      planGroup: T.Y1,
      openInvoiceId: y,
      onSubscriptionConfirmation: v,
      renderPurchaseConfirmation: E,
      postSuccessGuild: O,
      followupSKUInfo: P,
      renderHeader: w,
      applicationId: k,
      guildId: M,
      referralTrialOfferId: A,
      skuId: Z,
      shakeWhilePurchasing: true,
      isDynamicModal: K,
      returnRef: N,
      skipConfirm: B,
      continueSessionToInitialStep: R
    })
  })
}

function U(e) {
  var t, n;
  let {
    initialPlanId: i,
    handleStepChange: l,
    referralTrialOfferId: a
  } = e, {
    paymentSources: s,
    selectedSkuId: o,
    selectedPlan: C
  } = (0, h.JL)(), {
    isGift: d,
    claimableRewards: u
  } = (0, _.wD)(), p = (0, M.Z)({
    isGift: d,
    skuId: o,
    referralTrialOfferId: a
  }), x = (0, O.Fv)(p), m = (0, c.id)(C, d, u);
  return (0, r.jsx)(L.J, (t = N({}, e), n = n = {
    breadcrumbSteps: B,
    onReturn: () => {
      let e = Object.values(s),
        t = e.length < 1 && null == i ? f.h8.PLAN_SELECT : f.h8.REVIEW;
      x && (t = f.h8.REVIEW), m && e.length < 1 && (t = f.h8.SELECT_FREE_SKU), l(t, {
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
  renderStep: e => (0, r.jsx)(j.I, N({}, e))
}, {
  key: Chunk409813.h8.SKU_SELECT,
  renderStep: e => (0, r.jsx)(w.q, N({}, e)),
  options: {
    renderHeader: false,
    hideSlider: true,
    isDynamicModal: true
  }
}, {
  key: Chunk409813.h8.WHAT_YOU_LOSE,
  renderStep: e => (0, r.jsx)(k.x, N({}, e)),
  options: {
    renderHeader: false,
    hideSlider: true
  }
}, {
  key: Chunk409813.h8.PLAN_SELECT,
  renderStep: e => (0, r.jsx)(P.x, N({}, e)),
  options: {
    renderHeader: true,
    useBreadcrumbLabel: e => (0, O.Fv)(e) ? null : A.intl.string(A.t["r+SebW"]),
    sectionHeaderText: () => Chunk388032.intl.string(Chunk388032.t.UKbp1N)
  }
}, {
  key: Chunk409813.h8.ADD_PAYMENT_STEPS,
  renderStep: e => (0, r.jsx)(U, N({}, e)),
  options: {
    renderHeader: true,
    useBreadcrumbLabel: e => (0, O.Fv)(e) ? null : A.intl.string(A.t.Sb6wIy)
  }
}, {
  key: Chunk409813.h8.AWAITING_PURCHASE_TOKEN_AUTH,
  renderStep: () => (0, Chunk951288.jsx)(Chunk380898.Z, {})
}, {
  key: Chunk409813.h8.AWAITING_AUTHENTICATION,
  renderStep: () => (0, Chunk951288.jsx)(Chunk793541.Z, {})
}, {
  key: Chunk409813.h8.REVIEW,
  renderStep: e => (0, r.jsx)(y.l, N({}, e)),
  options: {
    renderHeader: true,
    useBreadcrumbLabel: e => (0, O.Fv)(e) ? A.intl.string(A.t.UKbp1N) : A.intl.string(A.t.QBnNHh)
  }
}, {
  key: Chunk409813.h8.CONFIRM,
  renderStep: e => (0, r.jsx)(v.b, N({}, e))
}, {
  key: Chunk409813.h8.SELECT_FREE_SKU,
  renderStep: e => (0, r.jsx)(E.S, N({}, e)),
  options: {
    bodyClassName: Chunk729005.selectFreeSku,
    isDynamicModal: true
  }
}];

function F(e) {
  let t = (0, l.e7)([p.Z], () => p.Z.getPremiumTypeSubscription()),
    n = (0, d.Vi)() ? T.Xh.PREMIUM_MONTH_TIER_2 : true,
    {
      analyticsLocations: i
    } = (0, C.ZP)(e.analyticsLocations, o.Z.PREMIUM_PAYMENT_MODAL),
    {
      confirmationFooter: a,
      defaultPlanId: s,
      giftingOrigin: c,
      giftMessage: u,
      giftRecipient: x,
      giftStyle: f,
      isGift: j,
      loadId: L,
      paymentModalBanner: g,
      referralCode: b,
      subscriptionTier: y,
      customCheckoutFlow: S
    } = e;
  if (null != y && !Object.values(T.Si).includes(y)) throw Error("subscriptionTier must be a premium subscription");
  return (0, r.jsx)(C.Gt, {
    value: i,
    children: (0, r.jsx)(h.PaymentContextProvider, {
      loadId: L,
      activeSubscription: null != e.subscription ? e.subscription : t,
      stepConfigs: H,
      skuIDs: [...T.YQ],
      isGift: j,
      defaultPlanId: null != n ? n : s,
      referralCode: b,
      wasTier2PremiumBeforePurchase: e.wasTier2PremiumBeforePurchase,
      customCheckoutFlow: S,
      children: (0, r.jsx)(m.c1, {
        confirmationFooter: a,
        paymentModalBanner: g,
        children: (0, r.jsx)(_.KB, {
          isGift: j,
          giftRecipient: null == x ? true : x,
          giftMessage: u,
          giftStyle: f,
          giftingOrigin: c,
          children: (0, r.jsx)(R, N({}, e))
        })
      })
    })
  })
}