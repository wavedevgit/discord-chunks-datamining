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
let R = [Chunk409813.h8.PLAN_SELECT, Chunk409813.h8.ADD_PAYMENT_STEPS, Chunk409813.h8.REVIEW, Chunk409813.h8.CONFIRM];

function U(e) {
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
    trialFooterMessageOverride: b,
    reviewWarningMessage: g,
    openInvoiceId: y,
    onSubscriptionConfirmation: v,
    renderPurchaseConfirmation: E,
    postSuccessGuild: O,
    followupSKUInfo: P,
    renderHeader: w,
    applicationId: I,
    guildId: Z,
    referralTrialOfferId: k,
    skuId: T,
    returnRef: B,
    skipConfirm: R = false,
    continueSessionToInitialStep: U
  } = e, {
    analyticsLocations: N
  } = (0, C.ZP)();
  i.useEffect(() => {
    p.Z.isLoadedForPremiumSKUs() || a.Z.wait(() => (0, s.Y2)())
  }, []);
  let {
    step: H
  } = (0, h.JL)(), {
    isGift: F,
    giftMessage: G,
    giftRecipient: D
  } = (0, f.wD)(), z = F && (0, x.pO)(D) && H === _.h8.PLAN_SELECT;
  return (0, r.jsx)(S.Z, {
    isConfirmationStep: H === _.h8.CONFIRM,
    children: (0, r.jsx)(m.PaymentModal, {
      analyticsLocations: N,
      analyticsLocation: t,
      analyticsObject: n,
      analyticsSourceLocation: l,
      analyticsSubscriptionType: M.NYc.PREMIUM,
      onComplete: o,
      transitionState: d,
      initialPlanId: c,
      giftMessage: G,
      subscriptionTier: u,
      onClose: j,
      trialId: L,
      isGift: F,
      trialFooterMessageOverride: b,
      reviewWarningMessage: g,
      planGroup: A.Y1,
      openInvoiceId: y,
      onSubscriptionConfirmation: v,
      renderPurchaseConfirmation: E,
      postSuccessGuild: O,
      followupSKUInfo: P,
      renderHeader: w,
      applicationId: I,
      guildId: Z,
      referralTrialOfferId: k,
      skuId: T,
      shakeWhilePurchasing: true,
      isDynamicModal: z,
      returnRef: B,
      skipConfirm: R,
      continueSessionToInitialStep: U
    })
  })
}

function N(e) {
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
    claimableRewards: p
  } = (0, f.wD)(), u = (0, Z.Z)({
    isGift: d,
    skuId: o,
    referralTrialOfferId: a
  }), x = (0, O.Fv)(u), j = (0, c.id)(C, d, p);
  return (0, r.jsx)(L.J, (t = B({}, e), n = n = {
    breadcrumbSteps: R,
    onReturn: () => {
      let e = Object.values(s),
        t = e.length < 1 && null == i ? _.h8.PLAN_SELECT : _.h8.REVIEW;
      x && (t = _.h8.REVIEW), j && e.length < 1 && (t = _.h8.SELECT_FREE_SKU), l(t, {
        trackedFromStep: _.h8.PAYMENT_TYPE
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
  renderStep: e => (0, r.jsx)(P.x, B({}, e)),
  options: {
    renderHeader: true,
    useBreadcrumbLabel: e => (0, O.Fv)(e) ? null : k.intl.string(k.t["r+SebW"]),
    sectionHeaderText: () => Chunk388032.intl.string(Chunk388032.t.UKbp1N)
  }
}, {
  key: Chunk409813.h8.ADD_PAYMENT_STEPS,
  renderStep: e => (0, r.jsx)(N, B({}, e)),
  options: {
    renderHeader: true,
    useBreadcrumbLabel: e => (0, O.Fv)(e) ? null : k.intl.string(k.t.Sb6wIy)
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
    useBreadcrumbLabel: e => (0, O.Fv)(e) ? k.intl.string(k.t.UKbp1N) : k.intl.string(k.t.QBnNHh)
  }
}, {
  key: Chunk409813.h8.CONFIRM,
  renderStep: e => (0, r.jsx)(v.b, B({}, e))
}, {
  key: Chunk409813.h8.SELECT_FREE_SKU,
  renderStep: e => (0, r.jsx)(E.S, B({}, e)),
  options: {
    bodyClassName: Chunk867983.selectFreeSku,
    isDynamicModal: true
  }
}];

function F(e) {
  let t = (0, l.e7)([u.Z], () => u.Z.getPremiumTypeSubscription()),
    n = (0, d.Vi)() ? A.Xh.PREMIUM_MONTH_TIER_2 : true,
    {
      analyticsLocations: i
    } = (0, C.ZP)(e.analyticsLocations, o.Z.PREMIUM_PAYMENT_MODAL),
    {
      confirmationFooter: a,
      defaultPlanId: s,
      giftingOrigin: c,
      giftMessage: p,
      giftRecipient: x,
      giftStyle: _,
      isGift: m,
      loadId: L,
      paymentModalBanner: b,
      referralCode: g,
      subscriptionTier: y
    } = e;
  if (null != y && !Object.values(A.Si).includes(y)) throw Error("subscriptionTier must be a premium subscription");
  return (0, r.jsx)(C.Gt, {
    value: i,
    children: (0, r.jsx)(h.PaymentContextProvider, {
      loadId: L,
      activeSubscription: null != e.subscription ? e.subscription : t,
      stepConfigs: H,
      skuIDs: [...A.YQ],
      isGift: m,
      defaultPlanId: null != n ? n : s,
      referralCode: g,
      wasTier2PremiumBeforePurchase: e.wasTier2PremiumBeforePurchase,
      children: (0, r.jsx)(j.c1, {
        confirmationFooter: a,
        paymentModalBanner: b,
        children: (0, r.jsx)(f.KB, {
          isGift: m,
          giftRecipient: null == x ? true : x,
          giftMessage: p,
          giftStyle: _,
          giftingOrigin: c,
          children: (0, r.jsx)(U, B({}, e))
        })
      })
    })
  })
}