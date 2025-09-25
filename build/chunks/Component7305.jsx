/** Chunk was on 37786 **/
/** chunk id: 7305, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  STEPS: () => H,
  default: () => G
}), require("./415506.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk821849 = require("./821849.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk538981 = require("./538981.jsx"),
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

function R(e) {
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

function B(e) {
  let {
    analyticsLocation: t,
    analyticsObject: n,
    analyticsSourceLocation: a,
    onComplete: s,
    transitionState: C,
    initialPlanId: c,
    subscriptionTier: u,
    onClose: _,
    trialId: j,
    trialFooterMessageOverride: b,
    reviewWarningMessage: L,
    openInvoiceId: y,
    onSubscriptionConfirmation: v,
    renderPurchaseConfirmation: O,
    postSuccessGuild: E,
    followupSKUInfo: I,
    renderHeader: P,
    applicationId: w,
    guildId: k,
    referralTrialOfferId: M,
    skuId: Z,
    returnRef: N,
    skipConfirm: R = false,
    continueSessionToInitialStep: F
  } = e, {
    analyticsLocations: B
  } = (0, d.ZP)();
  i.useEffect(() => {
    p.Z.isLoadedForPremiumSKUs() || o.Z.wait(() => (0, l.Y2)())
  }, []);
  let {
    step: U
  } = (0, m.JL)(), {
    isGift: H,
    giftMessage: G,
    giftRecipient: D
  } = (0, h.wD)(), z = H && (0, f.pO)(D) && U === x.h8.PLAN_SELECT;
  return (0, r.jsx)(S.Z, {
    isConfirmationStep: U === x.h8.CONFIRM && null == F && null == O,
    children: (0, r.jsx)(g.PaymentModal, {
      analyticsLocations: B,
      analyticsLocation: t,
      analyticsObject: n,
      analyticsSourceLocation: a,
      analyticsSubscriptionType: T.NYc.PREMIUM,
      onComplete: s,
      transitionState: C,
      initialPlanId: c,
      giftMessage: G,
      subscriptionTier: u,
      onClose: _,
      trialId: j,
      isGift: H,
      trialFooterMessageOverride: b,
      reviewWarningMessage: L,
      planGroup: A.Y1,
      openInvoiceId: y,
      onSubscriptionConfirmation: v,
      renderPurchaseConfirmation: O,
      postSuccessGuild: E,
      followupSKUInfo: I,
      renderHeader: P,
      applicationId: w,
      guildId: k,
      referralTrialOfferId: M,
      skuId: Z,
      shakeWhilePurchasing: true,
      isDynamicModal: z,
      returnRef: N,
      skipConfirm: R,
      continueSessionToInitialStep: F
    })
  })
}

function U(e) {
  var t, n;
  let {
    initialPlanId: i,
    handleStepChange: a,
    referralTrialOfferId: o
  } = e, {
    paymentSources: l,
    selectedSkuId: s,
    selectedPlan: d
  } = (0, m.JL)(), {
    isGift: C,
    claimableRewards: c
  } = (0, h.wD)(), p = (0, M.Z)({
    isGift: C,
    skuId: s,
    referralTrialOfferId: o
  }), _ = (0, I.Fv)(p), f = (0, u.id)(d, C, c);
  return (0, r.jsx)(b.J, (t = R({}, e), n = n = {
    breadcrumbSteps: F,
    onReturn: () => {
      let e = Object.values(l),
        t = e.length < 1 && null == i ? x.h8.PLAN_SELECT : x.h8.REVIEW;
      _ && (t = x.h8.REVIEW), f && e.length < 1 && (t = x.h8.SELECT_FREE_SKU), a(t, {
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
let H = [{
  key: null,
  renderStep: e => (0, r.jsx)(g.I, R({}, e))
}, {
  key: Chunk409813.h8.SKU_SELECT,
  renderStep: e => (0, r.jsx)(w.q, R({}, e)),
  options: {
    renderHeader: false,
    hideSlider: true,
    isDynamicModal: true
  }
}, {
  key: Chunk409813.h8.WHAT_YOU_LOSE,
  renderStep: e => (0, r.jsx)(k.x, R({}, e)),
  options: {
    renderHeader: false,
    hideSlider: true
  }
}, {
  key: Chunk409813.h8.PLAN_SELECT,
  renderStep: e => (0, r.jsx)(P.x, R({}, e)),
  options: {
    renderHeader: true,
    useBreadcrumbLabel: e => (0, I.Fv)(e) ? null : Z.intl.string(Z.t["r+SebW"]),
    sectionHeaderText: () => Chunk388032.intl.string(Chunk388032.t.UKbp1N)
  }
}, {
  key: Chunk409813.h8.ADD_PAYMENT_STEPS,
  renderStep: e => (0, r.jsx)(U, R({}, e)),
  options: {
    renderHeader: true,
    useBreadcrumbLabel: e => (0, I.Fv)(e) ? null : Z.intl.string(Z.t.Sb6wIy)
  }
}, {
  key: Chunk409813.h8.AWAITING_PURCHASE_TOKEN_AUTH,
  renderStep: () => (0, Chunk951288.jsx)(Chunk380898.Z, {})
}, {
  key: Chunk409813.h8.AWAITING_AUTHENTICATION,
  renderStep: () => (0, Chunk951288.jsx)(Chunk793541.Z, {})
}, {
  key: Chunk409813.h8.REVIEW,
  renderStep: e => (0, r.jsx)(v.l, R({}, e)),
  options: {
    renderHeader: true,
    useBreadcrumbLabel: e => (0, I.Fv)(e) ? Z.intl.string(Z.t.UKbp1N) : Z.intl.string(Z.t.QBnNHh)
  }
}, {
  key: Chunk409813.h8.CONFIRM,
  renderStep: e => (0, r.jsx)(O.b, R({}, e))
}, {
  key: Chunk409813.h8.SELECT_FREE_SKU,
  renderStep: e => (0, r.jsx)(E.S, R({}, e)),
  options: {
    bodyClassName: Chunk729005.selectFreeSku,
    isDynamicModal: true
  }
}];

function G(e) {
  let t = (0, a.e7)([_.Z], () => _.Z.getPremiumTypeSubscription()),
    n = (0, c.Vi)() ? A.Xh.PREMIUM_MONTH_TIER_2 : true,
    {
      analyticsLocations: i
    } = (0, d.ZP)(e.analyticsLocations, s.Z.PREMIUM_PAYMENT_MODAL),
    o = (0, C.r)(),
    {
      confirmationFooter: l,
      defaultPlanId: u,
      giftingOrigin: p,
      giftMessage: f,
      giftRecipient: x,
      giftStyle: g,
      isGift: b,
      loadId: L,
      paymentModalBanner: y,
      referralCode: v,
      subscriptionTier: S
    } = e;
  if (null != S && !Object.values(A.Si).includes(S)) throw Error("subscriptionTier must be a premium subscription");
  return (0, r.jsx)(d.Gt, {
    value: i,
    children: (0, r.jsx)(m.PaymentContextProvider, {
      loadId: L,
      activeSubscription: null != e.subscription ? e.subscription : t,
      stepConfigs: H,
      skuIDs: [...A.YQ],
      isGift: b,
      defaultPlanId: null != n ? n : u,
      referralCode: v,
      wasTier2PremiumBeforePurchase: e.wasTier2PremiumBeforePurchase,
      children: (0, r.jsx)(j.c1, {
        confirmationFooter: l,
        maybeOpenMarketingMomentRewardsModal: o,
        paymentModalBanner: y,
        children: (0, r.jsx)(h.KB, {
          isGift: b,
          giftRecipient: null == x ? true : x,
          giftMessage: f,
          giftStyle: g,
          giftingOrigin: p,
          children: (0, r.jsx)(B, R({}, e))
        })
      })
    })
  })
}