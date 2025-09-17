/** Chunk was on 54400 **/
/** chunk id: 7305, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  STEPS: () => F,
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
  Chunk867983 = require("./867983.js");

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
let B = [Chunk409813.h8.PLAN_SELECT, Chunk409813.h8.ADD_PAYMENT_STEPS, Chunk409813.h8.REVIEW, Chunk409813.h8.CONFIRM];

function U(e) {
  let {
    analyticsLocation: t,
    analyticsObject: n,
    analyticsSourceLocation: l,
    onComplete: o,
    transitionState: d,
    initialPlanId: c,
    subscriptionTier: u,
    onClose: x,
    trialId: j,
    trialFooterMessageOverride: b,
    reviewWarningMessage: L,
    openInvoiceId: y,
    onSubscriptionConfirmation: S,
    renderPurchaseConfirmation: E,
    postSuccessGuild: O,
    followupSKUInfo: P,
    renderHeader: k,
    applicationId: w,
    guildId: M,
    referralTrialOfferId: I,
    skuId: Z,
    returnRef: N,
    skipConfirm: R = false,
    continueSessionToInitialStep: B
  } = e, {
    analyticsLocations: U
  } = (0, C.ZP)();
  i.useEffect(() => {
    p.Z.isLoadedForPremiumSKUs() || a.Z.wait(() => (0, s.Y2)())
  }, []);
  let {
    step: H
  } = (0, _.JL)(), {
    isGift: F,
    giftMessage: G,
    giftRecipient: D
  } = (0, f.wD)(), K = F && (0, h.pO)(D) && H === m.h8.PLAN_SELECT;
  return (0, r.jsx)(v.Z, {
    isConfirmationStep: H === m.h8.CONFIRM,
    children: (0, r.jsx)(g.PaymentModal, {
      analyticsLocations: U,
      analyticsLocation: t,
      analyticsObject: n,
      analyticsSourceLocation: l,
      analyticsSubscriptionType: T.NYc.PREMIUM,
      onComplete: o,
      transitionState: d,
      initialPlanId: c,
      giftMessage: G,
      subscriptionTier: u,
      onClose: x,
      trialId: j,
      isGift: F,
      trialFooterMessageOverride: b,
      reviewWarningMessage: L,
      planGroup: A.Y1,
      openInvoiceId: y,
      onSubscriptionConfirmation: S,
      renderPurchaseConfirmation: E,
      postSuccessGuild: O,
      followupSKUInfo: P,
      renderHeader: k,
      applicationId: w,
      guildId: M,
      referralTrialOfferId: I,
      skuId: Z,
      shakeWhilePurchasing: true,
      isDynamicModal: K,
      returnRef: N,
      skipConfirm: R,
      continueSessionToInitialStep: B
    })
  })
}

function H(e) {
  var t, n;
  let {
    initialPlanId: i,
    handleStepChange: l,
    referralTrialOfferId: a
  } = e, {
    paymentSources: s,
    selectedSkuId: o,
    selectedPlan: C
  } = (0, _.JL)(), {
    isGift: d,
    claimableRewards: c
  } = (0, f.wD)(), p = (0, I.Z)({
    isGift: d,
    skuId: o,
    referralTrialOfferId: a
  }), x = (0, P.Fv)(p), h = (0, u.id)(C, d, c);
  return (0, r.jsx)(b.J, (t = R({}, e), n = n = {
    breadcrumbSteps: B,
    onReturn: () => {
      let e = Object.values(s),
        t = e.length < 1 && null == i ? m.h8.PLAN_SELECT : m.h8.REVIEW;
      x && (t = m.h8.REVIEW), h && e.length < 1 && (t = m.h8.SELECT_FREE_SKU), l(t, {
        trackedFromStep: m.h8.PAYMENT_TYPE
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
let F = [{
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
  renderStep: e => (0, r.jsx)(M.x, R({}, e)),
  options: {
    renderHeader: false,
    hideSlider: true
  }
}, {
  key: Chunk409813.h8.PLAN_SELECT,
  renderStep: e => (0, r.jsx)(k.x, R({}, e)),
  options: {
    renderHeader: true,
    useBreadcrumbLabel: e => (0, P.Fv)(e) ? null : Z.intl.string(Z.t["r+SebW"]),
    sectionHeaderText: () => Chunk388032.intl.string(Chunk388032.t.UKbp1N)
  }
}, {
  key: Chunk409813.h8.ADD_PAYMENT_STEPS,
  renderStep: e => (0, r.jsx)(H, R({}, e)),
  options: {
    renderHeader: true,
    useBreadcrumbLabel: e => (0, P.Fv)(e) ? null : Z.intl.string(Z.t.Sb6wIy)
  }
}, {
  key: Chunk409813.h8.AWAITING_PURCHASE_TOKEN_AUTH,
  renderStep: () => (0, Chunk951288.jsx)(Chunk380898.Z, {})
}, {
  key: Chunk409813.h8.AWAITING_AUTHENTICATION,
  renderStep: () => (0, Chunk951288.jsx)(Chunk793541.Z, {})
}, {
  key: Chunk409813.h8.REVIEW,
  renderStep: e => (0, r.jsx)(S.l, R({}, e)),
  options: {
    renderHeader: true,
    useBreadcrumbLabel: e => (0, P.Fv)(e) ? Z.intl.string(Z.t.UKbp1N) : Z.intl.string(Z.t.QBnNHh)
  }
}, {
  key: Chunk409813.h8.CONFIRM,
  renderStep: e => (0, r.jsx)(E.b, R({}, e))
}, {
  key: Chunk409813.h8.SELECT_FREE_SKU,
  renderStep: e => (0, r.jsx)(O.S, R({}, e)),
  options: {
    bodyClassName: Chunk867983.selectFreeSku,
    isDynamicModal: true
  }
}];

function G(e) {
  let t = (0, l.e7)([x.Z], () => x.Z.getPremiumTypeSubscription()),
    n = (0, c.Vi)() ? A.Xh.PREMIUM_MONTH_TIER_2 : true,
    {
      analyticsLocations: i
    } = (0, C.ZP)(e.analyticsLocations, o.Z.PREMIUM_PAYMENT_MODAL),
    a = (0, d.r)(),
    {
      confirmationFooter: s,
      defaultPlanId: u,
      giftingOrigin: p,
      giftMessage: h,
      giftRecipient: m,
      giftStyle: g,
      isGift: b,
      loadId: L,
      paymentModalBanner: y,
      referralCode: S,
      subscriptionTier: v
    } = e;
  if (null != v && !Object.values(A.Si).includes(v)) throw Error("subscriptionTier must be a premium subscription");
  return (0, r.jsx)(C.Gt, {
    value: i,
    children: (0, r.jsx)(_.PaymentContextProvider, {
      loadId: L,
      activeSubscription: null != e.subscription ? e.subscription : t,
      stepConfigs: F,
      skuIDs: [...A.YQ],
      isGift: b,
      defaultPlanId: null != n ? n : u,
      referralCode: S,
      wasTier2PremiumBeforePurchase: e.wasTier2PremiumBeforePurchase,
      children: (0, r.jsx)(j.c1, {
        confirmationFooter: s,
        maybeOpenMarketingMomentRewardsModal: a,
        paymentModalBanner: y,
        children: (0, r.jsx)(f.KB, {
          isGift: b,
          giftRecipient: null == m ? true : m,
          giftMessage: h,
          giftStyle: g,
          giftingOrigin: p,
          children: (0, r.jsx)(U, R({}, e))
        })
      })
    })
  })
}