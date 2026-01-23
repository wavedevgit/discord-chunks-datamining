/** Chunk was on web.js **/
/** chunk id: 494230, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => Z,
  L: () => q
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk284009 = require("./284009.js"),
  l = require.n(Chunk284009),
  Chunk997101 = require("./997101.js"),
  Chunk311907 = require("./311907.js"),
  Chunk827734 = require("./827734.js"),
  Chunk397927 = require("./397927.js"),
  Chunk821189 = require("./821189.jsx"),
  Chunk821891 = require("./821891.jsx"),
  Chunk637141 = require("./637141.jsx"),
  Chunk953689 = require("./953689.jsx"),
  Chunk531260 = require("./531260.js"),
  Chunk937008 = require("./937008.jsx"),
  Chunk156312 = require("./156312.jsx"),
  Chunk566980 = require("./566980.js"),
  Chunk62590 = require("./62590.js"),
  Chunk800471 = require("./800471.js"),
  Chunk104745 = require("./104745.jsx"),
  Chunk216641 = require("./216641.js"),
  Chunk351906 = require("./351906.js"),
  Chunk615405 = require("./615405.js"),
  Chunk97352 = require("./97352.js"),
  Chunk79387 = require("./79387.js"),
  Chunk67480 = require("./67480.js"),
  Chunk45938 = require("./45938.js"),
  Chunk927578 = require("./927578.js"),
  Chunk242874 = require("./242874.js"),
  Chunk543767 = require("./543767.js"),
  Chunk735164 = require("./735164.jsx"),
  Chunk778307 = require("./778307.jsx"),
  Chunk75825 = require("./75825.jsx"),
  Chunk218075 = require("./218075.jsx"),
  Chunk446929 = require("./446929.jsx"),
  Chunk344159 = require("./344159.js"),
  Chunk285719 = require("./285719.jsx"),
  Chunk299301 = require("./299301.jsx"),
  Chunk788868 = require("./788868.js"),
  Chunk88001 = require("./88001.js"),
  Chunk818348 = require("./818348.js"),
  Chunk519412 = require("./519412.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk982571 = require("./982571.js");
let q = e => {
  var t, n;
  let {
    selectedPlanId: r,
    paymentSources: a,
    priceOptions: s,
    trialId: o,
    metadata: c,
    purchaseState: d,
    isTrial: f = false
  } = e, {
    isEmbeddedIAP: p,
    activeSubscription: _,
    selectedSkuId: h,
    defaultPlanId: m,
    isPremium: A,
    startedPaymentFlowWithPaymentSourcesRef: T,
    setInvoicePreview: N,
    contextMetadata: D,
    inReverseTrial: L,
    setPurchasePreviewError: j,
    hasPaymentSources: M,
    enablePremiumBrandRefresh: k,
    premiumBrandRefreshBackgroundClassName: U,
    isPremiumGroupPurchase: V,
    isEligibleForDiscount: F
  } = (0, y.P5)(), {
    isGift: H,
    giftRecipient: Y,
    selectedGiftStyle: W
  } = (0, E.Pv)(), K = (0, u.bG)([C.A], () => C.A.get(r));
  l()(null != K, "Missing plan");
  let z = [{
      planId: K.id,
      quantity: 1
    }],
    q = d === b.h.PURCHASING || d === b.h.COMPLETED,
    Z = null != h ? h : "",
    X = (0, u.bG)([w.A], () => w.A.get(Z), [Z]),
    Q = null == X ? true : X.eligiblePaymentGateways,
    [J, $] = (0, x.Kq)({
      items: z,
      renewal: false,
      preventFetch: L || H || q,
      applyEntitlements: true,
      paymentSourceId: s.paymentSourceId,
      currency: s.currency,
      trialId: o,
      metadata: c
    }),
    [ee, et] = (0, x.Kq)({
      subscriptionId: null == _ ? true : _.id,
      items: z,
      renewal: true,
      preventFetch: H || q,
      trialId: o,
      paymentSourceId: s.paymentSourceId,
      currency: s.currency,
      metadata: c
    }),
    [en, er] = (0, x.Kq)({
      items: [{
        planId: B.gD.PREMIUM_MONTH_TIER_2,
        quantity: 1
      }],
      renewal: true,
      preventFetch: !F,
      trialId: o,
      paymentSourceId: s.paymentSourceId,
      currency: s.currency,
      metadata: c
    }),
    [ei, ea] = (0, x.FP)({
      paymentSourceId: s.paymentSourceId,
      skuId: h,
      subscriptionPlanId: r,
      currency: s.currency,
      preventFetch: !H || q,
      loadId: D.loadId
    }),
    es = H && (0, R.Ik)(Y),
    eo = null != (t = null != (n = null != $ ? $ : et) ? n : er) ? t : ea;
  i.useEffect(() => {
    j(eo)
  }, [eo, j]);
  let el = (0, u.bG)([S.A], () => S.A.enabled),
    ec = s.paymentSourceId,
    eu = (0, I.g)(a, ec),
    {
      hasEntitlements: ed,
      entitlements: ef
    } = (0, G.X)(K.id, H),
    ep = (0, P.J$)(s.paymentSourceId),
    e_ = (0, O.$o)(o, ec, r),
    eh = (0, v.vT)({
      isTrial: f,
      isGift: H,
      selectedSkuId: h,
      startedPaymentFlowWithPaymentSources: T.current,
      inReverseTrial: L
    }),
    [em, eg] = i.useState(null == J ? true : J.subscriptionPeriodEnd);
  i.useEffect(() => {
    null == em && eg(null == J ? true : J.subscriptionPeriodEnd)
  }, [null == J ? true : J.subscriptionPeriodEnd, em]);
  let eE = (0, g.A)({
      forceFetch: false,
      excludeReverseTrial: false,
      excludeReverseTrialFromCountdown: true
    }),
    ey = !eh && eE.isFractionalPremiumActive && B.JM.has(r),
    eb = i.useMemo(() => (0, P.Tm)({
      skuId: h,
      isPremium: A,
      multiMonthPlans: [],
      currentSubscription: _,
      defaultPlanId: m
    }), [h, _, m, A]),
    eO = (0, v.UB)(eh, J, K),
    ev = i.useMemo(() => f && null != J ? J : L && null != ee ? ee : true, [L, f, J, ee]);
  return i.useEffect(() => {
    H ? N(ei) : N(J)
  }, [H, N, ei, J]), {
    disabled: q,
    activeSubscription: _,
    subscriptionPeriodEnd: em,
    plan: K,
    premiumPlanOptions: eb,
    discountInvoicePreview: en,
    oneTimePurchaseNitroGiftInvoicePreview: ei,
    trialInvoicePreview: ev,
    proratedInvoicePreview: J,
    renewalInvoicePreview: ee,
    error: eo,
    isGift: H,
    isEmbeddedIAP: p,
    paymentSourceType: eu,
    hidePersonalInformation: el,
    giftRecipient: Y,
    selectedGiftStyle: W,
    isInOneStepSubscriptionCheckout: eh,
    shouldAllowPlanSelect: eh && !V,
    enableNoPaymentTrial: e_,
    hasPaymentSources: M,
    paymentSourceId: ec,
    eligiblePaymentGateways: Q,
    inReverseTrial: L,
    fractionalPremiumInfo: eE,
    planSwitchLoading: eO,
    showFractionalPremiumBanner: ey,
    isPrepaid: ep,
    isCustomGift: es,
    enablePremiumBrandRefresh: k,
    premiumBrandRefreshBackgroundClassName: U,
    isPremiumGroupPurchase: V,
    isEligibleForDiscount: F,
    discountInvoiceItems: F ? null == en ? true : en.invoiceItems : true,
    hasEntitlements: ed,
    entitlements: ef
  }
};

function Z(e) {
  var t;
  let {
    selectedPlanId: n,
    planGroup: i,
    paymentSources: a,
    priceOptions: o,
    currencies: l,
    onCurrencyChange: u,
    onPaymentSourceChange: g,
    handlePaymentSourceAdd: E,
    setHasAcceptedTerms: y,
    legalTermsNodeRef: b,
    hasLegalTermsFlash: O,
    trialId: v,
    trialFooterMessageOverride: I,
    reviewWarningMessage: S,
    metadata: C,
    purchaseState: w,
    hideSubscriptionDetails: R,
    referralTrialOfferId: x,
    isTrial: G = false,
    isDiscount: B = false,
    handleClose: Z
  } = e, {
    activeSubscription: X,
    disabled: Q,
    isEmbeddedIAP: J,
    paymentSourceType: $,
    hidePersonalInformation: ee,
    giftRecipient: et,
    selectedGiftStyle: en,
    subscriptionPeriodEnd: er,
    premiumPlanOptions: ei,
    shouldAllowPlanSelect: ea,
    enableNoPaymentTrial: es,
    hasPaymentSources: eo,
    paymentSourceId: el,
    eligiblePaymentGateways: ec,
    inReverseTrial: eu,
    fractionalPremiumInfo: ed,
    plan: ef,
    error: ep,
    isGift: e_,
    oneTimePurchaseNitroGiftInvoicePreview: eh,
    trialInvoicePreview: em,
    proratedInvoicePreview: eg,
    renewalInvoicePreview: eE,
    planSwitchLoading: ey,
    showFractionalPremiumBanner: eb,
    isPrepaid: eO,
    isCustomGift: ev,
    enablePremiumBrandRefresh: eA,
    premiumBrandRefreshBackgroundClassName: eI,
    isPremiumGroupPurchase: eS,
    discountInvoiceItems: eT,
    hasEntitlements: eC,
    entitlements: eN
  } = q({
    selectedPlanId: n,
    paymentSources: a,
    priceOptions: o,
    trialId: v,
    metadata: C,
    purchaseState: w,
    isTrial: G
  }), ew = (0, F.yf)({
    error: ep,
    isGift: e_,
    oneTimePurchaseNitroGiftInvoicePreview: eh,
    trialInvoicePreview: em,
    proratedInvoicePreview: eg,
    renewalInvoicePreview: eE,
    planSwitchLoading: ey
  });
  if (null != ew && ew.type === F.N$.LOADING) return (0, r.jsx)("div", {
    className: z.zp,
    children: (0, r.jsx)(f.y$y, {})
  });
  let eR = (0, r.jsx)(F.eb, {
      invoiceSummaryTypeWithPreview: ew,
      priceOptions: o,
      trialFooterMessageOverride: I,
      hideSubscriptionDetails: R,
      referralTrialOfferId: x,
      isTrial: G,
      inReverseTrial: eu,
      fractionalPremiumInfo: ed,
      plan: ef,
      showFractionalPremiumBanner: eb,
      isPrepaid: eO,
      isCustomGift: ev,
      enablePremiumBrandRefresh: eA,
      premiumBrandRefreshBackgroundClassName: eI
    }),
    eP = c.M.EEA_COUNTRIES.has(T.A.ipCountryCodeWithFallback),
    eD = K.intl.formatToPlainString(K.t["sBpy9/"], {
      planName: ef.name
    });
  e_ && !ev ? eD = K.intl.string(K.t.J5a0eb) : e_ && ev ? eD = "" : (0, P.ys)(ef.id) && (eD = P.Ay.getBillingReviewSubheader(null, ef));
  let ex = null != ec && ec.length > 0 && (el === N.B || null === $) && eo ? k.f.SELECT_PAYMENT_METHOD : true;
  return es ? null : (0, r.jsxs)("div", {
    className: z.Du,
    children: [(0, r.jsx)(k.j, {
      paymentRestrictionBannerType: ex
    }), null != S && (0, r.jsxs)("div", {
      className: z.Je,
      children: [(0, r.jsx)(f.mir, {
        size: "custom",
        color: d.A.unsafe_rawColors.YELLOW_300.css,
        width: 20,
        height: 20
      }), (0, r.jsx)(f.Text, {
        className: z.CJ,
        variant: "text-sm/normal",
        children: S
      })]
    }), eS && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(f.Text, {
        variant: "text-md/medium",
        children: K.intl.formatToPlainString(W.default["h1i+H8"], {
          premiumGroupProductName: (0, H.DP)(),
          cooldownMonths: H.wl
        })
      }), (0, r.jsx)(L.pK, {})]
    }), ea && (0, r.jsxs)("div", {
      children: [(0, r.jsx)(L.pK, {
        negativeMarginTop: true,
        negativeMarginBottom: true
      }), (0, r.jsx)(A.P, {
        planSkuId: null == ef ? true : ef.skuId,
        referralTrialOfferId: x
      }), (0, r.jsx)(U.$p, {
        planOptions: ei,
        eligibleForMultiMonthPlans: false,
        selectedPlanId: n,
        planGroup: i,
        subscriptionPeriodEnd: er,
        showTotal: false,
        discountInvoiceItems: eT,
        handleClose: Z
      }), (0, r.jsx)(L.pK, {})]
    }), eu && (0, r.jsx)(f.Heading, {
      variant: "heading-md/normal",
      color: "always-white",
      className: z.KB,
      children: K.intl.format(K.t["7ZS2m1"], {
        trialEnd: null == X ? true : X.currentPeriodEnd
      })
    }), !G && "" !== eD && (0, r.jsx)(f.Heading, {
      variant: "heading-md/semibold",
      className: z.wx,
      children: eD
    }), ev && null != en && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(M.A, {
        defaultAnimationState: D.oA.LOOP,
        giftStyle: en,
        shouldAnimate: true,
        className: z.Os
      }), (0, r.jsx)(V.Z, {
        giftRecipient: et
      })]
    }), eR, (0, r.jsxs)("div", {
      className: z.LC,
      children: [(0, r.jsx)(h.Ay, {
        label: G ? K.intl.string(K.t["YH7B+D"]) : K.intl.string(K.t["mmDvV+"]),
        paymentSources: Object.values(a),
        selectedPaymentSourceId: el,
        prependOption: eC && !G ? {
          label: K.intl.string(K.t.IGU7El),
          value: null
        } : null,
        onChange: g,
        onPaymentSourceAdd: E,
        hidePersonalInformation: ee,
        isTrial: G,
        paymentGatewayRestrictions: ec,
        className: s()({
          [z.E4]: eA
        })
      }), eC && null == el ? (0, r.jsx)("div", {
        className: z.QN,
        children: K.intl.format(K.t["2wPRSF"], {
          months: eN.length
        })
      }) : null, B ? null : (0, r.jsx)(p.f, {
        currencies: l,
        className: z.p2,
        children: (0, r.jsx)(p.A, {
          label: K.intl.string(K.t["/AAR02"]),
          selectedCurrency: o.currency,
          currencies: l,
          onChange: u
        })
      })]
    }), (0, r.jsx)(j.A, {
      isActive: O,
      ref: b,
      children: (0, r.jsx)(m.A, {
        onChange: y,
        forceShow: true,
        finePrint: null != (t = !eu && I) ? t : (0, r.jsx)(_.A, {
          hide: G || B,
          subscriptionPlan: ef,
          renewalInvoice: eE,
          isGift: e_,
          paymentSourceType: $,
          isEmbeddedIAP: J,
          basePrice: (0, P.y8)(ef.id, false, e_, o)
        }),
        showPricingLink: ef.currency !== Y.Yr.USD,
        showWithdrawalWaiver: eP,
        disabled: Q,
        isTrial: G && null == I,
        inReverseTrial: eu,
        isDiscount: B,
        subscriptionPlan: ef,
        isGift: e_
      })
    })]
  })
}