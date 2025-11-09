/** Chunk was on 4125 **/
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
let B = [Chunk409813.h8.PLAN_SELECT, Chunk409813.h8.ADD_PAYMENT_STEPS, Chunk409813.h8.REVIEW, Chunk409813.h8.CONFIRM];

function H(e) {
  let {
    analyticsLocation: t,
    analyticsObject: n,
    analyticsSourceLocation: l,
    onComplete: s,
    transitionState: d,
    initialPlanId: c,
    subscriptionTier: u,
    onClose: f,
    trialId: j,
    trialFooterMessageOverride: b,
    reviewWarningMessage: y,
    openInvoiceId: L,
    onSubscriptionConfirmation: v,
    renderPurchaseConfirmation: O,
    postSuccessGuild: E,
    followupSKUInfo: P,
    renderHeader: w,
    applicationId: k,
    guildId: M,
    referralTrialOfferId: I,
    skuId: Z,
    returnRef: N,
    skipConfirm: R = false,
    continueSessionToInitialStep: B
  } = e, {
    analyticsLocations: H
  } = (0, C.ZP)();
  i.useEffect(() => {
    p.Z.isLoadedForPremiumSKUs() || a.Z.wait(() => (0, o.Y2)())
  }, []);
  let {
    step: U
  } = (0, m.JL)(), {
    isGift: F,
    giftMessage: G,
    giftRecipient: D
  } = (0, x.wD)(), K = F && (0, h.pO)(D) && U === _.h8.PLAN_SELECT;
  return (0, r.jsx)(S.Z, {
    isConfirmationStep: U === _.h8.CONFIRM && null == B && null == O,
    children: (0, r.jsx)(g.PaymentModal, {
      analyticsLocations: H,
      analyticsLocation: t,
      analyticsObject: n,
      analyticsSourceLocation: l,
      analyticsSubscriptionType: T.NYc.PREMIUM,
      onComplete: s,
      transitionState: d,
      initialPlanId: c,
      giftMessage: G,
      subscriptionTier: u,
      onClose: f,
      trialId: j,
      isGift: F,
      trialFooterMessageOverride: b,
      reviewWarningMessage: y,
      planGroup: A.Y1,
      openInvoiceId: L,
      onSubscriptionConfirmation: v,
      renderPurchaseConfirmation: O,
      postSuccessGuild: E,
      followupSKUInfo: P,
      renderHeader: w,
      applicationId: k,
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

function U(e) {
  var t, n;
  let {
    initialPlanId: i,
    handleStepChange: l,
    referralTrialOfferId: a
  } = e, {
    paymentSources: o,
    selectedSkuId: s,
    selectedPlan: C
  } = (0, m.JL)(), {
    isGift: d,
    claimableRewards: u
  } = (0, x.wD)(), p = (0, I.Z)({
    isGift: d,
    skuId: s,
    referralTrialOfferId: a
  }), f = (0, P.Fv)(p), h = (0, c.id)(C, d, u);
  return (0, r.jsx)(b.J, (t = R({}, e), n = n = {
    breadcrumbSteps: B,
    onReturn: () => {
      let e = Object.values(o),
        t = e.length < 1 && null == i ? _.h8.PLAN_SELECT : _.h8.REVIEW;
      f && (t = _.h8.REVIEW), h && e.length < 1 && (t = _.h8.SELECT_FREE_SKU), l(t, {
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
let F = function() {
    let e = arguments.length > 0 && true !== arguments[0] && arguments[0];
    return [{
      key: null,
      renderStep: e => (0, r.jsx)(g.I, R({}, e))
    }, {
      key: Chunk409813.h8.SKU_SELECT,
      renderStep: e => (0, r.jsx)(k.q, R({}, e)),
      options: {
        renderHeader: false,
        hideSlider: true,
        isDynamicModal: !module,
        isLargeModal: module
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
      renderStep: e => (0, r.jsx)(w.x, R({}, e)),
      options: {
        renderHeader: true,
        useBreadcrumbLabel: e => (0, P.Fv)(e) ? null : Z.intl.string(Z.t["r+SebU"]),
        sectionHeaderText: () => Chunk388032.intl.string(Chunk388032.t.UKbp1N)
      }
    }, {
      key: Chunk409813.h8.ADD_PAYMENT_STEPS,
      renderStep: e => (0, r.jsx)(U, R({}, e)),
      options: {
        renderHeader: true,
        useBreadcrumbLabel: e => (0, P.Fv)(e) ? null : Z.intl.string(Z.t.Sb6wI1)
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
        useBreadcrumbLabel: e => (0, P.Fv)(e) ? Z.intl.string(Z.t.UKbp1N) : Z.intl.string(Z.t.QBnNHq)
      }
    }, {
      key: Chunk409813.h8.CONFIRM,
      renderStep: e => (0, r.jsx)(O.b, R({}, e))
    }, {
      key: Chunk409813.h8.SELECT_FREE_SKU,
      renderStep: e => (0, r.jsx)(E.S, R({}, e)),
      options: {
        bodyClassName: Chunk729005.selectFreeSku,
        isMediumModal: true
      }
    }]
  },
  G = F();

function D(e) {
  let t = (0, l.e7)([f.Z], () => f.Z.getPremiumTypeSubscription()),
    n = (0, d.Vi)() ? A.Xh.PREMIUM_MONTH_TIER_2 : true,
    {
      analyticsLocations: i
    } = (0, C.ZP)(e.analyticsLocations, s.Z.PREMIUM_PAYMENT_MODAL),
    {
      confirmationFooter: a,
      defaultPlanId: o,
      giftingOrigin: c,
      giftMessage: p,
      giftRecipient: h,
      giftStyle: _,
      isGift: g,
      loadId: b,
      paymentModalBanner: y,
      referralCode: L,
      subscriptionTier: v
    } = e;
  if (null != v && !Object.values(A.Si).includes(v)) throw Error("subscriptionTier must be a premium subscription");
  let S = (0, u.ao)({
    location: "PremiumPaymentSelect",
    giftRecipient: h,
    isGift: null != g && g
  });
  return (0, r.jsx)(C.Gt, {
    value: i,
    children: (0, r.jsx)(m.PaymentContextProvider, {
      loadId: b,
      activeSubscription: null != e.subscription ? e.subscription : t,
      stepConfigs: F(S),
      skuIDs: [...A.YQ],
      isGift: g,
      defaultPlanId: null != n ? n : o,
      referralCode: L,
      wasTier2PremiumBeforePurchase: e.wasTier2PremiumBeforePurchase,
      children: (0, r.jsx)(j.c1, {
        confirmationFooter: a,
        paymentModalBanner: y,
        children: (0, r.jsx)(x.KB, {
          isGift: g,
          giftRecipient: null == h ? true : h,
          giftMessage: p,
          giftStyle: _,
          giftingOrigin: c,
          children: (0, r.jsx)(H, R({}, e))
        })
      })
    })
  })
}