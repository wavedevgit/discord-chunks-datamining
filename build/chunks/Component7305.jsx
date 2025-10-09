/** Chunk was on 84071 **/
/** chunk id: 7305, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  STEPS: () => U,
  default: () => D
}), require("./415506.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk821849 = require("./821849.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk367074 = require("./367074.js"),
  Chunk998030 = require("./998030.js"),
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

function F(e) {
  let {
    analyticsLocation: t,
    analyticsObject: n,
    analyticsSourceLocation: a,
    onComplete: s,
    transitionState: c,
    initialPlanId: C,
    subscriptionTier: u,
    onClose: _,
    trialId: g,
    trialFooterMessageOverride: b,
    reviewWarningMessage: v,
    openInvoiceId: y,
    onSubscriptionConfirmation: S,
    renderPurchaseConfirmation: I,
    postSuccessGuild: w,
    followupSKUInfo: P,
    renderHeader: O,
    applicationId: E,
    guildId: k,
    referralTrialOfferId: T,
    skuId: N,
    returnRef: M,
    skipConfirm: R = false,
    continueSessionToInitialStep: B
  } = e, {
    analyticsLocations: F
  } = (0, d.ZP)();
  i.useEffect(() => {
    p.Z.isLoadedForPremiumSKUs() || l.Z.wait(() => (0, o.Y2)())
  }, []);
  let {
    step: G
  } = (0, m.JL)(), {
    isGift: H,
    giftMessage: U,
    giftRecipient: D
  } = (0, f.wD)(), z = H && (0, h.pO)(D) && G === x.h8.PLAN_SELECT;
  return (0, r.jsx)(L.Z, {
    isConfirmationStep: G === x.h8.CONFIRM && null == B && null == I,
    children: (0, r.jsx)(j.PaymentModal, {
      analyticsLocations: F,
      analyticsLocation: t,
      analyticsObject: n,
      analyticsSourceLocation: a,
      analyticsSubscriptionType: Z.NYc.PREMIUM,
      onComplete: s,
      transitionState: c,
      initialPlanId: C,
      giftMessage: U,
      subscriptionTier: u,
      onClose: _,
      trialId: g,
      isGift: H,
      trialFooterMessageOverride: b,
      reviewWarningMessage: v,
      planGroup: A.Y1,
      openInvoiceId: y,
      onSubscriptionConfirmation: S,
      renderPurchaseConfirmation: I,
      postSuccessGuild: w,
      followupSKUInfo: P,
      renderHeader: O,
      applicationId: E,
      guildId: k,
      referralTrialOfferId: T,
      skuId: N,
      shakeWhilePurchasing: true,
      isDynamicModal: z,
      returnRef: M,
      skipConfirm: R,
      continueSessionToInitialStep: B
    })
  })
}

function G(e) {
  var t, n;
  let {
    initialPlanId: i,
    handleStepChange: a,
    referralTrialOfferId: l
  } = e, {
    paymentSources: o,
    selectedSkuId: s,
    selectedPlan: d
  } = (0, m.JL)(), {
    isGift: c,
    claimableRewards: C
  } = (0, f.wD)(), p = (0, T.Z)({
    isGift: c,
    skuId: s,
    referralTrialOfferId: l
  }), _ = (0, P.Fv)(p), h = (0, u.id)(d, c, C);
  return (0, r.jsx)(b.J, (t = R({}, e), n = n = {
    breadcrumbSteps: B,
    onReturn: () => {
      let e = Object.values(o),
        t = e.length < 1 && null == i ? x.h8.PLAN_SELECT : x.h8.REVIEW;
      _ && (t = x.h8.REVIEW), h && e.length < 1 && (t = x.h8.SELECT_FREE_SKU), a(t, {
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
let H = function() {
    let e = arguments.length > 0 && true !== arguments[0] && arguments[0];
    return [{
      key: null,
      renderStep: e => (0, r.jsx)(j.I, R({}, e))
    }, {
      key: Chunk409813.h8.SKU_SELECT,
      renderStep: e => (0, r.jsx)(E.q, R({}, e)),
      options: {
        renderHeader: false,
        hideSlider: true,
        isDynamicModal: !module,
        isLargeModal: module
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
      renderStep: e => (0, r.jsx)(O.x, R({}, e)),
      options: {
        renderHeader: true,
        useBreadcrumbLabel: e => (0, P.Fv)(e) ? null : N.intl.string(N.t["r+SebW"]),
        sectionHeaderText: () => Chunk388032.intl.string(Chunk388032.t.UKbp1N)
      }
    }, {
      key: Chunk409813.h8.ADD_PAYMENT_STEPS,
      renderStep: e => (0, r.jsx)(G, R({}, e)),
      options: {
        renderHeader: true,
        useBreadcrumbLabel: e => (0, P.Fv)(e) ? null : N.intl.string(N.t.Sb6wIy)
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
        useBreadcrumbLabel: e => (0, P.Fv)(e) ? N.intl.string(N.t.UKbp1N) : N.intl.string(N.t.QBnNHh)
      }
    }, {
      key: Chunk409813.h8.CONFIRM,
      renderStep: e => (0, r.jsx)(I.b, R({}, e))
    }, {
      key: Chunk409813.h8.SELECT_FREE_SKU,
      renderStep: e => (0, r.jsx)(w.S, R({}, e)),
      options: {
        bodyClassName: Chunk867983.selectFreeSku,
        isDynamicModal: true
      }
    }]
  },
  U = H();

function D(e) {
  let t = (0, a.e7)([_.Z], () => _.Z.getPremiumTypeSubscription()),
    n = (0, c.Vi)() ? A.Xh.PREMIUM_MONTH_TIER_2 : true,
    {
      analyticsLocations: i
    } = (0, d.ZP)(e.analyticsLocations, s.Z.PREMIUM_PAYMENT_MODAL),
    {
      confirmationFooter: l,
      defaultPlanId: o,
      giftingOrigin: u,
      giftMessage: p,
      giftRecipient: h,
      giftStyle: x,
      isGift: j,
      loadId: b,
      paymentModalBanner: v,
      referralCode: y,
      subscriptionTier: S
    } = e;
  if (null != S && !Object.values(A.Si).includes(S)) throw Error("subscriptionTier must be a premium subscription");
  let L = (0, C.y)({
    location: "PremiumPaymentSelect"
  }) && null != h && j;
  return (0, r.jsx)(d.Gt, {
    value: i,
    children: (0, r.jsx)(m.PaymentContextProvider, {
      loadId: b,
      activeSubscription: null != e.subscription ? e.subscription : t,
      stepConfigs: H(L),
      skuIDs: [...A.YQ],
      isGift: j,
      defaultPlanId: null != n ? n : o,
      referralCode: y,
      wasTier2PremiumBeforePurchase: e.wasTier2PremiumBeforePurchase,
      children: (0, r.jsx)(g.c1, {
        confirmationFooter: l,
        paymentModalBanner: v,
        children: (0, r.jsx)(f.KB, {
          isGift: j,
          giftRecipient: null == h ? true : h,
          giftMessage: p,
          giftStyle: x,
          giftingOrigin: u,
          children: (0, r.jsx)(F, R({}, e))
        })
      })
    })
  })
}