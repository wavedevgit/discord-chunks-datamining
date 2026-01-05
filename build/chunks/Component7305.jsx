/** Chunk was on 23242 **/
/** chunk id: 7305, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  O: () => H,
  STEPS: () => z,
  default: () => K
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
  Chunk164275 = require("./164275.js"),
  Chunk602733 = require("./602733.js"),
  Chunk509545 = require("./509545.js"),
  Chunk78839 = require("./78839.js"),
  Chunk669079 = require("./669079.js"),
  Chunk987209 = require("./987209.jsx"),
  Chunk563132 = require("./563132.jsx"),
  Chunk409813 = require("./409813.js"),
  Chunk107998 = require("./107998.jsx"),
  Chunk45572 = require("./45572.js"),
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
  Chunk400005 = require("./400005.js");

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
let B = [Chunk409813.h8.PLAN_SELECT, Chunk409813.h8.ADD_PAYMENT_STEPS, Chunk409813.h8.REVIEW, Chunk409813.h8.CONFIRM];

function G(e) {
  let {
    analyticsLocation: t,
    analyticsObject: n,
    analyticsSourceLocation: i,
    onComplete: o,
    transitionState: c,
    initialPlanId: d,
    subscriptionTier: m,
    onClose: f,
    trialId: b,
    trialFooterMessageOverride: x,
    reviewWarningMessage: P,
    openInvoiceId: E,
    onSubscriptionConfirmation: w,
    renderPurchaseConfirmation: T,
    postSuccessGuild: k,
    followupSKUInfo: C,
    renderHeader: N,
    applicationId: M,
    guildId: _,
    referralTrialOfferId: A,
    skuId: Z,
    returnRef: D,
    skipConfirm: F = false,
    continueSessionToInitialStep: B
  } = e, {
    analyticsLocations: G
  } = (0, u.ZP)();
  l.useEffect(() => {
    h.Z.isLoadedForPremiumSKUs() || a.Z.wait(() => (0, s.Y2)())
  }, []);
  let {
    step: U,
    selectedSkuId: H,
    purchaseState: z
  } = (0, j.JL)(), {
    isGift: K,
    giftMessage: W,
    giftRecipient: V
  } = (0, y.wD)(), Y = K && (0, g.pO)(V) && U === v.h8.PLAN_SELECT, q = (0, p.I)(K, H), J = z === O.A.PURCHASING;
  return (0, r.jsx)(I.Z, {
    isConfirmationStep: U === v.h8.CONFIRM && null == B && null == T,
    isEligibleForWowMoment: q,
    shouldPrefetchWowMoment: J,
    children: (0, r.jsx)(S.PaymentModal, {
      analyticsLocations: G,
      analyticsLocation: t,
      analyticsObject: n,
      analyticsSourceLocation: i,
      analyticsSubscriptionType: R.NYc.PREMIUM,
      onComplete: o,
      transitionState: c,
      initialPlanId: d,
      giftMessage: W,
      subscriptionTier: m,
      onClose: f,
      trialId: b,
      isGift: K,
      trialFooterMessageOverride: x,
      reviewWarningMessage: P,
      planGroup: L.Y1,
      openInvoiceId: E,
      onSubscriptionConfirmation: w,
      renderPurchaseConfirmation: T,
      postSuccessGuild: k,
      followupSKUInfo: C,
      renderHeader: N,
      applicationId: M,
      guildId: _,
      referralTrialOfferId: A,
      skuId: Z,
      shakeWhilePurchasing: true,
      isDynamicModal: Y,
      returnRef: D,
      skipConfirm: F,
      continueSessionToInitialStep: B
    })
  })
}

function U(e) {
  var t, n;
  let {
    initialPlanId: l,
    handleStepChange: i,
    referralTrialOfferId: a
  } = e, {
    paymentSources: s,
    selectedSkuId: o,
    selectedPlan: u
  } = (0, j.JL)(), {
    isGift: c,
    claimableRewards: p
  } = (0, y.wD)(), m = (0, A.Z)({
    isGift: c,
    skuId: o,
    referralTrialOfferId: a
  }), h = (0, C.Fv)(m), f = (0, d.id)(u, c, p);
  return (0, r.jsx)(x.J, (t = F({}, e), n = n = {
    breadcrumbSteps: B,
    onReturn: () => {
      let e = Object.values(s),
        t = e.length < 1 && null == l ? v.h8.PLAN_SELECT : v.h8.REVIEW;
      h && (t = v.h8.REVIEW), f && e.length < 1 && (t = v.h8.SELECT_FREE_SKU), i(t, {
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
      renderStep: e => (0, r.jsx)(S.I, F({}, e))
    }, {
      key: Chunk409813.h8.SKU_SELECT,
      renderStep: e => (0, r.jsx)(M.q, F({}, e)),
      options: {
        renderHeader: false,
        hideSlider: true,
        isDynamicModal: !module,
        isLargeModal: module
      }
    }, {
      key: Chunk409813.h8.WHAT_YOU_LOSE,
      renderStep: e => (0, r.jsx)(_.x, F({}, e)),
      options: {
        renderHeader: false,
        hideSlider: true
      }
    }, {
      key: Chunk409813.h8.PLAN_SELECT,
      renderStep: e => (0, r.jsx)(N.x, F({}, e)),
      options: {
        renderHeader: true,
        useBreadcrumbLabel: e => (0, C.Fv)(e) ? null : Z.intl.string(Z.t["r+SebU"]),
        sectionHeaderText: () => Chunk388032.intl.string(Chunk388032.t.UKbp1N)
      }
    }, {
      key: Chunk409813.h8.ADD_PAYMENT_STEPS,
      renderStep: e => (0, r.jsx)(U, F({}, e)),
      options: {
        renderHeader: true,
        useBreadcrumbLabel: e => (0, C.Fv)(e) ? null : Z.intl.string(Z.t.Sb6wI1)
      }
    }, {
      key: Chunk409813.h8.AWAITING_PURCHASE_TOKEN_AUTH,
      renderStep: () => (0, Chunk54381.jsx)(Chunk380898.Z, {})
    }, {
      key: Chunk409813.h8.AWAITING_AUTHENTICATION,
      renderStep: () => (0, Chunk54381.jsx)(Chunk793541.Z, {})
    }, {
      key: Chunk409813.h8.REVIEW,
      renderStep: e => (0, r.jsx)(w.lZ, F({}, e)),
      options: {
        renderHeader: true,
        useBreadcrumbLabel: e => (0, C.Fv)(e) ? Z.intl.string(Z.t.UKbp1N) : Z.intl.string(Z.t.QBnNHq)
      }
    }, {
      key: Chunk409813.h8.CONFIRM,
      renderStep: e => (0, r.jsx)(T.b, F({}, e))
    }, {
      key: Chunk409813.h8.SELECT_FREE_SKU,
      renderStep: e => (0, r.jsx)(k.S, F({}, e)),
      options: {
        bodyClassName: Chunk400005.selectFreeSku,
        isMediumModal: true
      }
    }]
  },
  z = H();

function K(e) {
  let t = (0, i.e7)([f.Z], () => f.Z.getPremiumTypeSubscription()),
    n = (0, c.Vi)() ? L.Xh.PREMIUM_MONTH_TIER_2 : true,
    {
      analyticsLocations: l
    } = (0, u.ZP)(e.analyticsLocations, o.Z.PREMIUM_PAYMENT_MODAL),
    {
      confirmationFooter: a,
      defaultPlanId: s,
      giftingOrigin: d,
      giftMessage: p,
      giftRecipient: h,
      giftStyle: g,
      isGift: v,
      loadId: O,
      referralCode: S,
      subscriptionTier: x,
      referralTrialOfferId: P
    } = e;
  if (null != x && !Object.values(L.Si).includes(x)) throw Error("subscriptionTier must be a premium subscription");
  let E = (0, m.ao)({
    location: "PremiumPaymentSelect",
    giftRecipient: h,
    isGift: null != v && v
  });
  return (0, r.jsx)(u.Gt, {
    value: l,
    children: (0, r.jsx)(j.PaymentContextProvider, {
      loadId: O,
      activeSubscription: null != e.subscription ? e.subscription : t,
      stepConfigs: H(E),
      skuIDs: [...L.YQ],
      isGift: v,
      defaultPlanId: null != n ? n : s,
      referralCode: S,
      wasTier2PremiumBeforePurchase: e.wasTier2PremiumBeforePurchase,
      referralTrialOfferId: P,
      children: (0, r.jsx)(b.c1, {
        confirmationFooter: a,
        children: (0, r.jsx)(y.KB, {
          isGift: v,
          giftRecipient: null == h ? true : h,
          giftMessage: p,
          giftStyle: g,
          giftingOrigin: d,
          children: (0, r.jsx)(G, F({}, e))
        })
      })
    })
  })
}