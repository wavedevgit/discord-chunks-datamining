/** Chunk was on 84071 **/
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
  Chunk867983 = require("./867983.js");

function F(e) {
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

function B(e) {
  let {
    analyticsLocation: t,
    analyticsObject: n,
    analyticsSourceLocation: l,
    onComplete: s,
    transitionState: d,
    initialPlanId: c,
    subscriptionTier: u,
    onClose: _,
    trialId: j,
    trialFooterMessageOverride: g,
    reviewWarningMessage: L,
    openInvoiceId: y,
    onSubscriptionConfirmation: S,
    renderPurchaseConfirmation: E,
    postSuccessGuild: O,
    followupSKUInfo: I,
    renderHeader: P,
    applicationId: w,
    guildId: k,
    referralTrialOfferId: M,
    skuId: Z,
    returnRef: N,
    skipConfirm: F = false,
    continueSessionToInitialStep: R
  } = e, {
    analyticsLocations: B
  } = (0, C.ZP)();
  i.useEffect(() => {
    p.Z.isLoadedForPremiumSKUs() || o.Z.wait(() => (0, a.Y2)())
  }, []);
  let {
    step: U
  } = (0, x.JL)(), {
    isGift: H,
    giftMessage: G,
    giftRecipient: D
  } = (0, f.wD)(), Y = H && (0, h.pO)(D) && U === m.h8.PLAN_SELECT;
  return (0, r.jsx)(v.Z, {
    isConfirmationStep: U === m.h8.CONFIRM && null == R && null == E,
    children: (0, r.jsx)(b.PaymentModal, {
      analyticsLocations: B,
      analyticsLocation: t,
      analyticsObject: n,
      analyticsSourceLocation: l,
      analyticsSubscriptionType: T.NYc.PREMIUM,
      onComplete: s,
      transitionState: d,
      initialPlanId: c,
      giftMessage: G,
      subscriptionTier: u,
      onClose: _,
      trialId: j,
      isGift: H,
      trialFooterMessageOverride: g,
      reviewWarningMessage: L,
      planGroup: A.Y1,
      openInvoiceId: y,
      onSubscriptionConfirmation: S,
      renderPurchaseConfirmation: E,
      postSuccessGuild: O,
      followupSKUInfo: I,
      renderHeader: P,
      applicationId: w,
      guildId: k,
      referralTrialOfferId: M,
      skuId: Z,
      shakeWhilePurchasing: true,
      isDynamicModal: Y,
      returnRef: N,
      skipConfirm: F,
      continueSessionToInitialStep: R
    })
  })
}

function U(e) {
  var t, n;
  let {
    initialPlanId: i,
    handleStepChange: l,
    referralTrialOfferId: o
  } = e, {
    paymentSources: a,
    selectedSkuId: s,
    selectedPlan: C
  } = (0, x.JL)(), {
    isGift: d,
    claimableRewards: c
  } = (0, f.wD)(), p = (0, M.Z)({
    isGift: d,
    skuId: s,
    referralTrialOfferId: o
  }), _ = (0, I.Fv)(p), h = (0, u.id)(C, d, c);
  return (0, r.jsx)(g.J, (t = F({}, e), n = n = {
    breadcrumbSteps: R,
    onReturn: () => {
      let e = Object.values(a),
        t = e.length < 1 && null == i ? m.h8.PLAN_SELECT : m.h8.REVIEW;
      _ && (t = m.h8.REVIEW), h && e.length < 1 && (t = m.h8.SELECT_FREE_SKU), l(t, {
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
let H = [{
  key: null,
  renderStep: e => (0, r.jsx)(b.I, F({}, e))
}, {
  key: Chunk409813.h8.SKU_SELECT,
  renderStep: e => (0, r.jsx)(w.q, F({}, e)),
  options: {
    renderHeader: false,
    hideSlider: true,
    isDynamicModal: true
  }
}, {
  key: Chunk409813.h8.WHAT_YOU_LOSE,
  renderStep: e => (0, r.jsx)(k.x, F({}, e)),
  options: {
    renderHeader: false,
    hideSlider: true
  }
}, {
  key: Chunk409813.h8.PLAN_SELECT,
  renderStep: e => (0, r.jsx)(P.x, F({}, e)),
  options: {
    renderHeader: true,
    useBreadcrumbLabel: e => (0, I.Fv)(e) ? null : Z.intl.string(Z.t["r+SebW"]),
    sectionHeaderText: () => Chunk388032.intl.string(Chunk388032.t.UKbp1N)
  }
}, {
  key: Chunk409813.h8.ADD_PAYMENT_STEPS,
  renderStep: e => (0, r.jsx)(U, F({}, e)),
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
  renderStep: e => (0, r.jsx)(S.l, F({}, e)),
  options: {
    renderHeader: true,
    useBreadcrumbLabel: e => (0, I.Fv)(e) ? Z.intl.string(Z.t.UKbp1N) : Z.intl.string(Z.t.QBnNHh)
  }
}, {
  key: Chunk409813.h8.CONFIRM,
  renderStep: e => (0, r.jsx)(E.b, F({}, e))
}, {
  key: Chunk409813.h8.SELECT_FREE_SKU,
  renderStep: e => (0, r.jsx)(O.S, F({}, e)),
  options: {
    bodyClassName: Chunk867983.selectFreeSku,
    isDynamicModal: true
  }
}];

function G(e) {
  let t = (0, l.e7)([_.Z], () => _.Z.getPremiumTypeSubscription()),
    n = (0, c.Vi)() ? A.Xh.PREMIUM_MONTH_TIER_2 : true,
    {
      analyticsLocations: i
    } = (0, C.ZP)(e.analyticsLocations, s.Z.PREMIUM_PAYMENT_MODAL),
    o = (0, d.r)(),
    {
      confirmationFooter: a,
      defaultPlanId: u,
      giftingOrigin: p,
      giftMessage: h,
      giftRecipient: m,
      giftStyle: b,
      isGift: g,
      loadId: L,
      paymentModalBanner: y,
      referralCode: S,
      subscriptionTier: v
    } = e;
  if (null != v && !Object.values(A.Si).includes(v)) throw Error("subscriptionTier must be a premium subscription");
  return (0, r.jsx)(C.Gt, {
    value: i,
    children: (0, r.jsx)(x.PaymentContextProvider, {
      loadId: L,
      activeSubscription: null != e.subscription ? e.subscription : t,
      stepConfigs: H,
      skuIDs: [...A.YQ],
      isGift: g,
      defaultPlanId: null != n ? n : u,
      referralCode: S,
      wasTier2PremiumBeforePurchase: e.wasTier2PremiumBeforePurchase,
      children: (0, r.jsx)(j.c1, {
        confirmationFooter: a,
        maybeOpenMarketingMomentRewardsModal: o,
        paymentModalBanner: y,
        children: (0, r.jsx)(f.KB, {
          isGift: g,
          giftRecipient: null == m ? true : m,
          giftMessage: h,
          giftStyle: b,
          giftingOrigin: p,
          children: (0, r.jsx)(B, F({}, e))
        })
      })
    })
  })
}