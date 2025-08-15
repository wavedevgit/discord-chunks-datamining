/** Chunk was on 54433 **/
/** chunk id: 7305, original params: e,n,t (module,exports,require) **/
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

function N(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = null != arguments[n] ? arguments[n] : {},
      i = Object.keys(t);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
      return Object.getOwnPropertyDescriptor(t, e).enumerable
    }))), i.forEach(function(n) {
      var i;
      i = t[n], n in e ? Object.defineProperty(e, n, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[n] = i
    })
  }
  return e
}
let U = [Chunk409813.h8.PLAN_SELECT, Chunk409813.h8.ADD_PAYMENT_STEPS, Chunk409813.h8.REVIEW, Chunk409813.h8.CONFIRM];

function k(e) {
  let {
    analyticsLocation: n,
    analyticsObject: t,
    analyticsSourceLocation: l,
    onComplete: o,
    transitionState: d,
    initialPlanId: c,
    subscriptionTier: p,
    onClose: m,
    trialId: L,
    trialFooterMessageOverride: g,
    reviewWarningMessage: y,
    openInvoiceId: E,
    onSubscriptionConfirmation: v,
    renderPurchaseConfirmation: P,
    postSuccessGuild: O,
    followupSKUInfo: b,
    renderHeader: Z,
    applicationId: I,
    guildId: M,
    referralTrialOfferId: A,
    skuId: R,
    returnRef: N,
    skipConfirm: U = false,
    continueSessionToInitialStep: k
  } = e, {
    analyticsLocations: B
  } = (0, C.ZP)();
  r.useEffect(() => {
    u.Z.isLoadedForPremiumSKUs() || s.Z.wait(() => (0, a.Y2)())
  }, []);
  let {
    step: H
  } = (0, j.JL)(), {
    isGift: F,
    giftMessage: G,
    giftRecipient: D
  } = (0, h.wD)(), z = F && (0, x.pO)(D) && H === f.h8.PLAN_SELECT;
  return (0, i.jsx)(S.Z, {
    isConfirmationStep: H === f.h8.CONFIRM,
    children: (0, i.jsx)(_.PaymentModal, {
      analyticsLocations: B,
      analyticsLocation: n,
      analyticsObject: t,
      analyticsSourceLocation: l,
      analyticsSubscriptionType: T.NYc.PREMIUM,
      onComplete: o,
      transitionState: d,
      initialPlanId: c,
      giftMessage: G,
      subscriptionTier: p,
      onClose: m,
      trialId: L,
      isGift: F,
      trialFooterMessageOverride: g,
      reviewWarningMessage: y,
      planGroup: w.Y1,
      openInvoiceId: E,
      onSubscriptionConfirmation: v,
      renderPurchaseConfirmation: P,
      postSuccessGuild: O,
      followupSKUInfo: b,
      renderHeader: Z,
      applicationId: I,
      guildId: M,
      referralTrialOfferId: A,
      skuId: R,
      shakeWhilePurchasing: true,
      isDynamicModal: z,
      returnRef: N,
      skipConfirm: U,
      continueSessionToInitialStep: k
    })
  })
}

function B(e) {
  var n, t;
  let {
    initialPlanId: r,
    handleStepChange: l,
    referralTrialOfferId: s
  } = e, {
    paymentSources: a,
    selectedSkuId: o,
    selectedPlan: C
  } = (0, j.JL)(), {
    isGift: d,
    claimableRewards: u
  } = (0, h.wD)(), p = (0, M.Z)({
    isGift: d,
    skuId: o,
    referralTrialOfferId: s
  }), x = (0, O.Fv)(p), m = (0, c.id)(C, d, u);
  return (0, i.jsx)(L.J, (n = N({}, e), t = t = {
    breadcrumbSteps: U,
    onReturn: () => {
      let e = Object.values(a),
        n = e.length < 1 && null == r ? f.h8.PLAN_SELECT : f.h8.REVIEW;
      x && (n = f.h8.REVIEW), m && e.length < 1 && (n = f.h8.SELECT_FREE_SKU), l(n, {
        trackedFromStep: f.h8.PAYMENT_TYPE
      })
    }
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : (function(e, n) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      t.push.apply(t, i)
    }
    return t
  })(Object(t)).forEach(function(e) {
    Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(t, e))
  }), n))
}
let H = [{
  key: null,
  renderStep: e => (0, i.jsx)(_.I, N({}, e))
}, {
  key: Chunk409813.h8.SKU_SELECT,
  renderStep: e => (0, i.jsx)(Z.q, N({}, e)),
  options: {
    renderHeader: false,
    hideSlider: true,
    isDynamicModal: true
  }
}, {
  key: Chunk409813.h8.WHAT_YOU_LOSE,
  renderStep: e => (0, i.jsx)(I.x, N({}, e)),
  options: {
    renderHeader: false,
    hideSlider: true
  }
}, {
  key: Chunk409813.h8.PLAN_SELECT,
  renderStep: e => (0, i.jsx)(b.x, N({}, e)),
  options: {
    renderHeader: true,
    useBreadcrumbLabel: e => (0, O.Fv)(e) ? null : A.intl.string(A.t["r+SebW"]),
    sectionHeaderText: () => Chunk388032.intl.string(Chunk388032.t.UKbp1N)
  }
}, {
  key: Chunk409813.h8.ADD_PAYMENT_STEPS,
  renderStep: e => (0, i.jsx)(B, N({}, e)),
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
  renderStep: e => (0, i.jsx)(E.l, N({}, e)),
  options: {
    renderHeader: true,
    useBreadcrumbLabel: e => (0, O.Fv)(e) ? A.intl.string(A.t.UKbp1N) : A.intl.string(A.t.QBnNHh)
  }
}, {
  key: Chunk409813.h8.CONFIRM,
  renderStep: e => (0, i.jsx)(v.b, N({}, e))
}, {
  key: Chunk409813.h8.SELECT_FREE_SKU,
  renderStep: e => (0, i.jsx)(P.S, N({}, e)),
  options: {
    bodyClassName: Chunk867983.selectFreeSku,
    isDynamicModal: true
  }
}];

function F(e) {
  let n = (0, l.e7)([p.Z], () => p.Z.getPremiumTypeSubscription()),
    t = (0, d.Vi)() ? w.Xh.PREMIUM_MONTH_TIER_2 : true,
    {
      analyticsLocations: r
    } = (0, C.ZP)(e.analyticsLocations, o.Z.PREMIUM_PAYMENT_MODAL),
    {
      confirmationFooter: s,
      defaultPlanId: a,
      giftingOrigin: c,
      giftMessage: u,
      giftRecipient: x,
      giftStyle: f,
      isGift: _,
      loadId: L,
      paymentModalBanner: g,
      referralCode: y,
      subscriptionTier: E
    } = e;
  if (null != E && !Object.values(w.Si).includes(E)) throw Error("subscriptionTier must be a premium subscription");
  return (0, i.jsx)(C.Gt, {
    value: r,
    children: (0, i.jsx)(j.PaymentContextProvider, {
      loadId: L,
      activeSubscription: null != e.subscription ? e.subscription : n,
      stepConfigs: H,
      skuIDs: [...w.YQ],
      isGift: _,
      defaultPlanId: null != t ? t : a,
      referralCode: y,
      wasTier2PremiumBeforePurchase: e.wasTier2PremiumBeforePurchase,
      children: (0, i.jsx)(m.c1, {
        confirmationFooter: s,
        paymentModalBanner: g,
        children: (0, i.jsx)(h.KB, {
          isGift: _,
          giftRecipient: null == x ? true : x,
          giftMessage: u,
          giftStyle: f,
          giftingOrigin: c,
          children: (0, i.jsx)(k, N({}, e))
        })
      })
    })
  })
}