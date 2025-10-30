/** Chunk was on 31029 **/
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
  Chunk717401 = require("./717401.js"),
  Chunk602733 = require("./602733.js"),
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

function F(e) {
  let {
    analyticsLocation: t,
    analyticsObject: n,
    analyticsSourceLocation: a,
    onComplete: s,
    transitionState: C,
    initialPlanId: c,
    subscriptionTier: u,
    onClose: _,
    trialId: g,
    trialFooterMessageOverride: j,
    reviewWarningMessage: L,
    openInvoiceId: v,
    onSubscriptionConfirmation: y,
    renderPurchaseConfirmation: I,
    postSuccessGuild: w,
    followupSKUInfo: O,
    renderHeader: P,
    applicationId: E,
    guildId: T,
    referralTrialOfferId: k,
    skuId: B,
    returnRef: Z,
    skipConfirm: N = false,
    continueSessionToInitialStep: R
  } = e, {
    analyticsLocations: F
  } = (0, d.ZP)();
  i.useEffect(() => {
    p.Z.isLoadedForPremiumSKUs() || l.Z.wait(() => (0, o.Y2)())
  }, []);
  let {
    step: H
  } = (0, f.JL)(), {
    isGift: G,
    giftMessage: U,
    giftRecipient: D
  } = (0, m.wD)(), z = G && (0, h.pO)(D) && H === x.h8.PLAN_SELECT;
  return (0, r.jsx)(S.Z, {
    isConfirmationStep: H === x.h8.CONFIRM && null == R && null == I,
    children: (0, r.jsx)(b.PaymentModal, {
      analyticsLocations: F,
      analyticsLocation: t,
      analyticsObject: n,
      analyticsSourceLocation: a,
      analyticsSubscriptionType: M.NYc.PREMIUM,
      onComplete: s,
      transitionState: C,
      initialPlanId: c,
      giftMessage: U,
      subscriptionTier: u,
      onClose: _,
      trialId: g,
      isGift: G,
      trialFooterMessageOverride: j,
      reviewWarningMessage: L,
      planGroup: A.Y1,
      openInvoiceId: v,
      onSubscriptionConfirmation: y,
      renderPurchaseConfirmation: I,
      postSuccessGuild: w,
      followupSKUInfo: O,
      renderHeader: P,
      applicationId: E,
      guildId: T,
      referralTrialOfferId: k,
      skuId: B,
      shakeWhilePurchasing: true,
      isDynamicModal: z,
      returnRef: Z,
      skipConfirm: N,
      continueSessionToInitialStep: R
    })
  })
}

function H(e) {
  var t, n;
  let {
    initialPlanId: i,
    handleStepChange: a,
    referralTrialOfferId: l
  } = e, {
    paymentSources: o,
    selectedSkuId: s,
    selectedPlan: d
  } = (0, f.JL)(), {
    isGift: C,
    claimableRewards: u
  } = (0, m.wD)(), p = (0, k.Z)({
    isGift: C,
    skuId: s,
    referralTrialOfferId: l
  }), _ = (0, O.Fv)(p), h = (0, c.id)(d, C, u);
  return (0, r.jsx)(j.J, (t = N({}, e), n = n = {
    breadcrumbSteps: R,
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
let G = function() {
    let e = arguments.length > 0 && true !== arguments[0] && arguments[0];
    return [{
      key: null,
      renderStep: e => (0, r.jsx)(b.I, N({}, e))
    }, {
      key: Chunk409813.h8.SKU_SELECT,
      renderStep: e => (0, r.jsx)(E.q, N({}, e)),
      options: {
        renderHeader: false,
        hideSlider: true,
        isDynamicModal: !module,
        isLargeModal: module
      }
    }, {
      key: Chunk409813.h8.WHAT_YOU_LOSE,
      renderStep: e => (0, r.jsx)(T.x, N({}, e)),
      options: {
        renderHeader: false,
        hideSlider: true
      }
    }, {
      key: Chunk409813.h8.PLAN_SELECT,
      renderStep: e => (0, r.jsx)(P.x, N({}, e)),
      options: {
        renderHeader: true,
        useBreadcrumbLabel: e => (0, O.Fv)(e) ? null : B.intl.string(B.t["r+SebU"]),
        sectionHeaderText: () => Chunk388032.intl.string(Chunk388032.t.UKbp1N)
      }
    }, {
      key: Chunk409813.h8.ADD_PAYMENT_STEPS,
      renderStep: e => (0, r.jsx)(H, N({}, e)),
      options: {
        renderHeader: true,
        useBreadcrumbLabel: e => (0, O.Fv)(e) ? null : B.intl.string(B.t.Sb6wI1)
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
        useBreadcrumbLabel: e => (0, O.Fv)(e) ? B.intl.string(B.t.UKbp1N) : B.intl.string(B.t.QBnNHq)
      }
    }, {
      key: Chunk409813.h8.CONFIRM,
      renderStep: e => (0, r.jsx)(I.b, N({}, e))
    }, {
      key: Chunk409813.h8.SELECT_FREE_SKU,
      renderStep: e => (0, r.jsx)(w.S, N({}, e)),
      options: {
        bodyClassName: Chunk867983.selectFreeSku,
        isDynamicModal: true
      }
    }]
  },
  U = G();

function D(e) {
  let t = (0, a.e7)([_.Z], () => _.Z.getPremiumTypeSubscription()),
    n = (0, C.Vi)() ? A.Xh.PREMIUM_MONTH_TIER_2 : true,
    {
      analyticsLocations: i
    } = (0, d.ZP)(e.analyticsLocations, s.Z.PREMIUM_PAYMENT_MODAL),
    {
      confirmationFooter: l,
      defaultPlanId: o,
      giftingOrigin: c,
      giftMessage: p,
      giftRecipient: h,
      giftStyle: x,
      isGift: b,
      loadId: j,
      paymentModalBanner: L,
      referralCode: v,
      subscriptionTier: y
    } = e;
  if (null != y && !Object.values(A.Si).includes(y)) throw Error("subscriptionTier must be a premium subscription");
  let S = (0, u.ao)({
    location: "PremiumPaymentSelect",
    giftRecipient: h,
    isGift: null != b && b
  });
  return (0, r.jsx)(d.Gt, {
    value: i,
    children: (0, r.jsx)(f.PaymentContextProvider, {
      loadId: j,
      activeSubscription: null != e.subscription ? e.subscription : t,
      stepConfigs: G(S),
      skuIDs: [...A.YQ],
      isGift: b,
      defaultPlanId: null != n ? n : o,
      referralCode: v,
      wasTier2PremiumBeforePurchase: e.wasTier2PremiumBeforePurchase,
      children: (0, r.jsx)(g.c1, {
        confirmationFooter: l,
        paymentModalBanner: L,
        children: (0, r.jsx)(m.KB, {
          isGift: b,
          giftRecipient: null == h ? true : h,
          giftMessage: p,
          giftStyle: x,
          giftingOrigin: c,
          children: (0, r.jsx)(F, N({}, e))
        })
      })
    })
  })
}