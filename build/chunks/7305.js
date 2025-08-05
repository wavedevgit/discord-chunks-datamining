/** Chunk was on 54433 **/
n.d(t, {
  STEPS: () => H,
  default: () => F
}), n(415506), n(388685);
var i = n(255367),
  l = n(73800),
  r = n(442837),
  s = n(570140),
  a = n(821849),
  o = n(100527),
  C = n(906732),
  d = n(367074),
  c = n(619067),
  u = n(717401),
  p = n(509545),
  x = n(78839),
  f = n(669079),
  h = n(987209),
  j = n(563132),
  m = n(409813),
  _ = n(107998),
  L = n(791785),
  y = n(276442),
  E = n(793541),
  g = n(380898),
  S = n(710094),
  b = n(518727),
  v = n(293858),
  O = n(183813),
  w = n(614223),
  I = n(174827),
  Z = n(846464),
  P = n(184160),
  M = n(48175),
  T = n(981631),
  N = n(474936),
  R = n(388032),
  A = n(236691);

function U(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      var i;
      i = n[t], t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = i
    })
  }
  return e
}
let k = [m.h8.PLAN_SELECT, m.h8.ADD_PAYMENT_STEPS, m.h8.REVIEW, m.h8.CONFIRM];

function G(e) {
  let {
    analyticsLocation: t,
    analyticsObject: n,
    analyticsSourceLocation: r,
    onComplete: o,
    transitionState: d,
    initialPlanId: u,
    subscriptionTier: x,
    onClose: _,
    trialId: y,
    trialFooterMessageOverride: E,
    reviewWarningMessage: g,
    openInvoiceId: S,
    onSubscriptionConfirmation: v,
    renderPurchaseConfirmation: O,
    postSuccessGuild: w,
    followupSKUInfo: I,
    renderHeader: Z,
    applicationId: P,
    guildId: M,
    referralTrialOfferId: R,
    skuId: A,
    returnRef: U,
    skipConfirm: k = !1,
    continueSessionToInitialStep: G
  } = e, {
    analyticsLocations: B
  } = (0, C.ZP)();
  l.useEffect(() => {
    p.Z.isLoadedForPremiumSKUs() || s.Z.wait(() => (0, a.Y2)())
  }, []);
  let {
    step: H,
    selectedSkuId: F
  } = (0, j.JL)(), {
    isGift: D,
    giftMessage: W,
    giftRecipient: z
  } = (0, h.wD)(), Y = D && (0, f.pO)(z) && H === m.h8.PLAN_SELECT, K = (0, c.a)(D, !1, F);
  return (0, i.jsx)(b.Z, {
    isWowMomentConfirmationEligible: K,
    isConfirmationStep: H === m.h8.CONFIRM,
    children: (0, i.jsx)(L.PaymentModal, {
      analyticsLocations: B,
      analyticsLocation: t,
      analyticsObject: n,
      analyticsSourceLocation: r,
      analyticsSubscriptionType: T.NYc.PREMIUM,
      onComplete: o,
      transitionState: d,
      initialPlanId: u,
      giftMessage: W,
      subscriptionTier: x,
      onClose: _,
      trialId: y,
      isGift: D,
      trialFooterMessageOverride: E,
      reviewWarningMessage: g,
      planGroup: N.Y1,
      openInvoiceId: S,
      onSubscriptionConfirmation: v,
      renderPurchaseConfirmation: O,
      postSuccessGuild: w,
      followupSKUInfo: I,
      renderHeader: Z,
      applicationId: P,
      guildId: M,
      referralTrialOfferId: R,
      skuId: A,
      shakeWhilePurchasing: !0,
      isDynamicModal: Y,
      returnRef: U,
      skipConfirm: k,
      continueSessionToInitialStep: G
    })
  })
}

function B(e) {
  var t, n;
  let {
    initialPlanId: l,
    handleStepChange: r,
    referralTrialOfferId: s
  } = e, {
    paymentSources: a,
    selectedSkuId: o,
    selectedPlan: C
  } = (0, j.JL)(), {
    isGift: d,
    claimableRewards: c
  } = (0, h.wD)(), p = (0, M.Z)({
    isGift: d,
    skuId: o,
    referralTrialOfferId: s
  }), x = (0, w.Fv)(p), f = (0, u.id)(C, d, c);
  return (0, i.jsx)(y.J, (t = U({}, e), n = n = {
    breadcrumbSteps: k,
    onReturn: () => {
      let e = Object.values(a),
        t = e.length < 1 && null == l ? m.h8.PLAN_SELECT : m.h8.REVIEW;
      x && (t = m.h8.REVIEW), f && e.length < 1 && (t = m.h8.SELECT_FREE_SKU), r(t, {
        trackedFromStep: m.h8.PAYMENT_TYPE
      })
    }
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      n.push.apply(n, i)
    }
    return n
  })(Object(n)).forEach(function(e) {
    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
  }), t))
}
let H = [{
  key: null,
  renderStep: e => (0, i.jsx)(L.I, U({}, e))
}, {
  key: m.h8.SKU_SELECT,
  renderStep: e => (0, i.jsx)(Z.q, U({}, e)),
  options: {
    renderHeader: !1,
    hideSlider: !0,
    isDynamicModal: !0
  }
}, {
  key: m.h8.WHAT_YOU_LOSE,
  renderStep: e => (0, i.jsx)(P.x, U({}, e)),
  options: {
    renderHeader: !1,
    hideSlider: !0
  }
}, {
  key: m.h8.PLAN_SELECT,
  renderStep: e => (0, i.jsx)(I.x, U({}, e)),
  options: {
    renderHeader: !0,
    useBreadcrumbLabel: e => (0, w.Fv)(e) ? null : R.intl.string(R.t["r+SebW"]),
    sectionHeaderText: () => R.intl.string(R.t.UKbp1N)
  }
}, {
  key: m.h8.ADD_PAYMENT_STEPS,
  renderStep: e => (0, i.jsx)(B, U({}, e)),
  options: {
    renderHeader: !0,
    useBreadcrumbLabel: e => (0, w.Fv)(e) ? null : R.intl.string(R.t.Sb6wIy)
  }
}, {
  key: m.h8.AWAITING_PURCHASE_TOKEN_AUTH,
  renderStep: () => (0, i.jsx)(g.Z, {})
}, {
  key: m.h8.AWAITING_AUTHENTICATION,
  renderStep: () => (0, i.jsx)(E.Z, {})
}, {
  key: m.h8.REVIEW,
  renderStep: e => (0, i.jsx)(S.l, U({}, e)),
  options: {
    renderHeader: !0,
    useBreadcrumbLabel: e => (0, w.Fv)(e) ? R.intl.string(R.t.UKbp1N) : R.intl.string(R.t.QBnNHh)
  }
}, {
  key: m.h8.CONFIRM,
  renderStep: e => (0, i.jsx)(v.b, U({}, e))
}, {
  key: m.h8.SELECT_FREE_SKU,
  renderStep: e => (0, i.jsx)(O.S, U({}, e)),
  options: {
    bodyClassName: A.selectFreeSku,
    isDynamicModal: !0
  }
}];

function F(e) {
  let t = (0, r.e7)([x.Z], () => x.Z.getPremiumTypeSubscription()),
    n = (0, d.Vi)() ? N.Xh.PREMIUM_MONTH_TIER_2 : void 0,
    {
      analyticsLocations: l
    } = (0, C.ZP)(e.analyticsLocations, o.Z.PREMIUM_PAYMENT_MODAL),
    {
      confirmationFooter: s,
      defaultPlanId: a,
      giftingOrigin: c,
      giftMessage: u,
      giftRecipient: p,
      giftStyle: f,
      isGift: m,
      loadId: L,
      paymentModalBanner: y,
      referralCode: E,
      subscriptionTier: g
    } = e;
  if (null != g && !Object.values(N.Si).includes(g)) throw Error("subscriptionTier must be a premium subscription");
  return (0, i.jsx)(C.Gt, {
    value: l,
    children: (0, i.jsx)(j.PaymentContextProvider, {
      loadId: L,
      activeSubscription: null != e.subscription ? e.subscription : t,
      stepConfigs: H,
      skuIDs: [...N.YQ],
      isGift: m,
      defaultPlanId: null != n ? n : a,
      referralCode: E,
      children: (0, i.jsx)(_.c1, {
        confirmationFooter: s,
        paymentModalBanner: y,
        children: (0, i.jsx)(h.KB, {
          isGift: m,
          giftRecipient: null == p ? void 0 : p,
          giftMessage: u,
          giftStyle: f,
          giftingOrigin: c,
          children: (0, i.jsx)(G, U({}, e))
        })
      })
    })
  })
}