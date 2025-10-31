/** Chunk was on 3270 **/
/** chunk id: 7305, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  STEPS: () => G,
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

function H(e) {
  let {
    analyticsLocation: t,
    analyticsObject: n,
    analyticsSourceLocation: l,
    onComplete: o,
    transitionState: C,
    initialPlanId: c,
    subscriptionTier: u,
    onClose: h,
    trialId: j,
    trialFooterMessageOverride: b,
    reviewWarningMessage: L,
    openInvoiceId: v,
    onSubscriptionConfirmation: y,
    renderPurchaseConfirmation: w,
    postSuccessGuild: O,
    followupSKUInfo: I,
    renderHeader: P,
    applicationId: E,
    guildId: k,
    referralTrialOfferId: M,
    skuId: A,
    returnRef: B,
    skipConfirm: N = false,
    continueSessionToInitialStep: R
  } = e, {
    analyticsLocations: H
  } = (0, d.ZP)();
  i.useEffect(() => {
    p.Z.isLoadedForPremiumSKUs() || a.Z.wait(() => (0, s.Y2)())
  }, []);
  let {
    step: U
  } = (0, f.JL)(), {
    isGift: F,
    giftMessage: G,
    giftRecipient: D
  } = (0, _.wD)(), W = F && (0, m.pO)(D) && U === x.h8.PLAN_SELECT;
  return (0, r.jsx)(S.Z, {
    isConfirmationStep: U === x.h8.CONFIRM && null == R && null == w,
    children: (0, r.jsx)(g.PaymentModal, {
      analyticsLocations: H,
      analyticsLocation: t,
      analyticsObject: n,
      analyticsSourceLocation: l,
      analyticsSubscriptionType: T.NYc.PREMIUM,
      onComplete: o,
      transitionState: C,
      initialPlanId: c,
      giftMessage: G,
      subscriptionTier: u,
      onClose: h,
      trialId: j,
      isGift: F,
      trialFooterMessageOverride: b,
      reviewWarningMessage: L,
      planGroup: Z.Y1,
      openInvoiceId: v,
      onSubscriptionConfirmation: y,
      renderPurchaseConfirmation: w,
      postSuccessGuild: O,
      followupSKUInfo: I,
      renderHeader: P,
      applicationId: E,
      guildId: k,
      referralTrialOfferId: M,
      skuId: A,
      shakeWhilePurchasing: true,
      isDynamicModal: W,
      returnRef: B,
      skipConfirm: N,
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
    selectedPlan: d
  } = (0, f.JL)(), {
    isGift: C,
    claimableRewards: u
  } = (0, _.wD)(), p = (0, M.Z)({
    isGift: C,
    skuId: o,
    referralTrialOfferId: a
  }), h = (0, I.Fv)(p), m = (0, c.id)(d, C, u);
  return (0, r.jsx)(b.J, (t = N({}, e), n = n = {
    breadcrumbSteps: R,
    onReturn: () => {
      let e = Object.values(s),
        t = e.length < 1 && null == i ? x.h8.PLAN_SELECT : x.h8.REVIEW;
      h && (t = x.h8.REVIEW), m && e.length < 1 && (t = x.h8.SELECT_FREE_SKU), l(t, {
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
let F = function() {
    let e = arguments.length > 0 && true !== arguments[0] && arguments[0];
    return [{
      key: null,
      renderStep: e => (0, r.jsx)(g.I, N({}, e))
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
        useBreadcrumbLabel: e => (0, I.Fv)(e) ? null : A.intl.string(A.t["r+SebU"]),
        sectionHeaderText: () => Chunk388032.intl.string(Chunk388032.t.UKbp1N)
      }
    }, {
      key: Chunk409813.h8.ADD_PAYMENT_STEPS,
      renderStep: e => (0, r.jsx)(U, N({}, e)),
      options: {
        renderHeader: true,
        useBreadcrumbLabel: e => (0, I.Fv)(e) ? null : A.intl.string(A.t.Sb6wI1)
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
        useBreadcrumbLabel: e => (0, I.Fv)(e) ? A.intl.string(A.t.UKbp1N) : A.intl.string(A.t.QBnNHq)
      }
    }, {
      key: Chunk409813.h8.CONFIRM,
      renderStep: e => (0, r.jsx)(w.b, N({}, e))
    }, {
      key: Chunk409813.h8.SELECT_FREE_SKU,
      renderStep: e => (0, r.jsx)(O.S, N({}, e)),
      options: {
        bodyClassName: Chunk867983.selectFreeSku,
        isDynamicModal: true
      }
    }]
  },
  G = F();

function D(e) {
  let t = (0, l.e7)([h.Z], () => h.Z.getPremiumTypeSubscription()),
    n = (0, C.Vi)() ? Z.Xh.PREMIUM_MONTH_TIER_2 : true,
    {
      analyticsLocations: i
    } = (0, d.ZP)(e.analyticsLocations, o.Z.PREMIUM_PAYMENT_MODAL),
    {
      confirmationFooter: a,
      defaultPlanId: s,
      giftingOrigin: c,
      giftMessage: p,
      giftRecipient: m,
      giftStyle: x,
      isGift: g,
      loadId: b,
      paymentModalBanner: L,
      referralCode: v,
      subscriptionTier: y
    } = e;
  if (null != y && !Object.values(Z.Si).includes(y)) throw Error("subscriptionTier must be a premium subscription");
  let S = (0, u.ao)({
    location: "PremiumPaymentSelect",
    giftRecipient: m,
    isGift: null != g && g
  });
  return (0, r.jsx)(d.Gt, {
    value: i,
    children: (0, r.jsx)(f.PaymentContextProvider, {
      loadId: b,
      activeSubscription: null != e.subscription ? e.subscription : t,
      stepConfigs: F(S),
      skuIDs: [...Z.YQ],
      isGift: g,
      defaultPlanId: null != n ? n : s,
      referralCode: v,
      wasTier2PremiumBeforePurchase: e.wasTier2PremiumBeforePurchase,
      children: (0, r.jsx)(j.c1, {
        confirmationFooter: a,
        paymentModalBanner: L,
        children: (0, r.jsx)(_.KB, {
          isGift: g,
          giftRecipient: null == m ? true : m,
          giftMessage: p,
          giftStyle: x,
          giftingOrigin: c,
          children: (0, r.jsx)(H, N({}, e))
        })
      })
    })
  })
}