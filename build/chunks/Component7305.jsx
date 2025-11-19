/** Chunk was on 54400 **/
/** chunk id: 7305, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  STEPS: () => G,
  default: () => U
}), require("./415506.js"), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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

function L(e) {
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

function D(e) {
  let {
    analyticsLocation: t,
    analyticsObject: n,
    analyticsSourceLocation: a,
    onComplete: s,
    transitionState: c,
    initialPlanId: u,
    subscriptionTier: p,
    onClose: h,
    trialId: x,
    trialFooterMessageOverride: P,
    reviewWarningMessage: S,
    openInvoiceId: j,
    onSubscriptionConfirmation: _,
    renderPurchaseConfirmation: O,
    postSuccessGuild: C,
    followupSKUInfo: k,
    renderHeader: E,
    applicationId: I,
    guildId: T,
    referralTrialOfferId: N,
    skuId: A,
    returnRef: Z,
    skipConfirm: L = false,
    continueSessionToInitialStep: B
  } = e, {
    analyticsLocations: D
  } = (0, d.ZP)();
  l.useEffect(() => {
    m.Z.isLoadedForPremiumSKUs() || i.Z.wait(() => (0, o.Y2)())
  }, []);
  let {
    step: F
  } = (0, g.JL)(), {
    isGift: H,
    giftMessage: G,
    giftRecipient: U
  } = (0, b.wD)(), z = H && (0, f.pO)(U) && F === v.h8.PLAN_SELECT;
  return (0, r.jsx)(w.Z, {
    isConfirmationStep: F === v.h8.CONFIRM && null == B && null == O,
    children: (0, r.jsx)(y.PaymentModal, {
      analyticsLocations: D,
      analyticsLocation: t,
      analyticsObject: n,
      analyticsSourceLocation: a,
      analyticsSubscriptionType: R.NYc.PREMIUM,
      onComplete: s,
      transitionState: c,
      initialPlanId: u,
      giftMessage: G,
      subscriptionTier: p,
      onClose: h,
      trialId: x,
      isGift: H,
      trialFooterMessageOverride: P,
      reviewWarningMessage: S,
      planGroup: M.Y1,
      openInvoiceId: j,
      onSubscriptionConfirmation: _,
      renderPurchaseConfirmation: O,
      postSuccessGuild: C,
      followupSKUInfo: k,
      renderHeader: E,
      applicationId: I,
      guildId: T,
      referralTrialOfferId: N,
      skuId: A,
      shakeWhilePurchasing: true,
      isDynamicModal: z,
      returnRef: Z,
      skipConfirm: L,
      continueSessionToInitialStep: B
    })
  })
}

function F(e) {
  var t, n;
  let {
    initialPlanId: l,
    handleStepChange: a,
    referralTrialOfferId: i
  } = e, {
    paymentSources: o,
    selectedSkuId: s,
    selectedPlan: d
  } = (0, g.JL)(), {
    isGift: c,
    claimableRewards: p
  } = (0, b.wD)(), m = (0, N.Z)({
    isGift: c,
    skuId: s,
    referralTrialOfferId: i
  }), h = (0, k.Fv)(m), f = (0, u.id)(d, c, p);
  return (0, r.jsx)(P.J, (t = L({}, e), n = n = {
    breadcrumbSteps: B,
    onReturn: () => {
      let e = Object.values(o),
        t = e.length < 1 && null == l ? v.h8.PLAN_SELECT : v.h8.REVIEW;
      h && (t = v.h8.REVIEW), f && e.length < 1 && (t = v.h8.SELECT_FREE_SKU), a(t, {
        trackedFromStep: v.h8.PAYMENT_TYPE
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
      renderStep: e => (0, r.jsx)(y.I, L({}, e))
    }, {
      key: Chunk409813.h8.SKU_SELECT,
      renderStep: e => (0, r.jsx)(I.q, L({}, e)),
      options: {
        renderHeader: false,
        hideSlider: true,
        isDynamicModal: !module,
        isLargeModal: module
      }
    }, {
      key: Chunk409813.h8.WHAT_YOU_LOSE,
      renderStep: e => (0, r.jsx)(T.x, L({}, e)),
      options: {
        renderHeader: false,
        hideSlider: true
      }
    }, {
      key: Chunk409813.h8.PLAN_SELECT,
      renderStep: e => (0, r.jsx)(E.x, L({}, e)),
      options: {
        renderHeader: true,
        useBreadcrumbLabel: e => (0, k.Fv)(e) ? null : A.intl.string(A.t["r+SebU"]),
        sectionHeaderText: () => Chunk388032.intl.string(Chunk388032.t.UKbp1N)
      }
    }, {
      key: Chunk409813.h8.ADD_PAYMENT_STEPS,
      renderStep: e => (0, r.jsx)(F, L({}, e)),
      options: {
        renderHeader: true,
        useBreadcrumbLabel: e => (0, k.Fv)(e) ? null : A.intl.string(A.t.Sb6wI1)
      }
    }, {
      key: Chunk409813.h8.AWAITING_PURCHASE_TOKEN_AUTH,
      renderStep: () => (0, Chunk54381.jsx)(Chunk380898.Z, {})
    }, {
      key: Chunk409813.h8.AWAITING_AUTHENTICATION,
      renderStep: () => (0, Chunk54381.jsx)(Chunk793541.Z, {})
    }, {
      key: Chunk409813.h8.REVIEW,
      renderStep: e => (0, r.jsx)(_.l, L({}, e)),
      options: {
        renderHeader: true,
        useBreadcrumbLabel: e => (0, k.Fv)(e) ? A.intl.string(A.t.UKbp1N) : A.intl.string(A.t.QBnNHq)
      }
    }, {
      key: Chunk409813.h8.CONFIRM,
      renderStep: e => (0, r.jsx)(O.b, L({}, e))
    }, {
      key: Chunk409813.h8.SELECT_FREE_SKU,
      renderStep: e => (0, r.jsx)(C.S, L({}, e)),
      options: {
        bodyClassName: Chunk867983.selectFreeSku,
        isMediumModal: true
      }
    }]
  },
  G = H();

function U(e) {
  let t = (0, a.e7)([h.Z], () => h.Z.getPremiumTypeSubscription()),
    n = (0, c.Vi)() ? M.Xh.PREMIUM_MONTH_TIER_2 : true,
    {
      analyticsLocations: l
    } = (0, d.ZP)(e.analyticsLocations, s.Z.PREMIUM_PAYMENT_MODAL),
    {
      confirmationFooter: i,
      defaultPlanId: o,
      giftingOrigin: u,
      giftMessage: m,
      giftRecipient: f,
      giftStyle: v,
      isGift: y,
      loadId: P,
      referralCode: S,
      subscriptionTier: j
    } = e;
  if (null != j && !Object.values(M.Si).includes(j)) throw Error("subscriptionTier must be a premium subscription");
  let _ = (0, p.ao)({
    location: "PremiumPaymentSelect",
    giftRecipient: f,
    isGift: null != y && y
  });
  return (0, r.jsx)(d.Gt, {
    value: l,
    children: (0, r.jsx)(g.PaymentContextProvider, {
      loadId: P,
      activeSubscription: null != e.subscription ? e.subscription : t,
      stepConfigs: H(_),
      skuIDs: [...M.YQ],
      isGift: y,
      defaultPlanId: null != n ? n : o,
      referralCode: S,
      wasTier2PremiumBeforePurchase: e.wasTier2PremiumBeforePurchase,
      children: (0, r.jsx)(x.c1, {
        confirmationFooter: i,
        children: (0, r.jsx)(b.KB, {
          isGift: y,
          giftRecipient: null == f ? true : f,
          giftMessage: m,
          giftStyle: v,
          giftingOrigin: u,
          children: (0, r.jsx)(D, L({}, e))
        })
      })
    })
  })
}