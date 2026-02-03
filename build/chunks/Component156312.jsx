/** Chunk was on web.js **/
/** chunk id: 156312, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  P5: () => et,
  PaymentContextProvider: () => er,
  Qv: () => ee
}), require("./896048.js"), require("./938796.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk342393 = require("./342393.js"),
  Chunk989349 = require("./989349.js"),
  s = require.n(Chunk989349),
  Chunk835245 = require("./835245.js"),
  Chunk665260 = require("./665260.js"),
  Chunk311907 = require("./311907.js"),
  Chunk444927 = require("./444927.js"),
  Chunk10716 = require("./10716.js"),
  Chunk795816 = require("./795816.js"),
  Chunk933958 = require("./933958.js"),
  Chunk627363 = require("./627363.js"),
  Chunk86379 = require("./86379.js"),
  Chunk531260 = require("./531260.js"),
  Chunk446044 = require("./446044.js"),
  Chunk573359 = require("./573359.js"),
  Chunk170887 = require("./170887.js"),
  Chunk422936 = require("./422936.js"),
  Chunk234419 = require("./234419.js"),
  Chunk253932 = require("./253932.js"),
  Chunk293700 = require("./293700.js"),
  Chunk79387 = require("./79387.js"),
  Chunk67480 = require("./67480.js"),
  Chunk328968 = require("./328968.js"),
  Chunk786300 = require("./786300.jsx"),
  Chunk927578 = require("./927578.js"),
  Chunk728458 = require("./728458.js"),
  Chunk955529 = require("./955529.js"),
  Chunk483827 = require("./483827.js"),
  Chunk543027 = require("./543027.js"),
  Chunk853398 = require("./853398.js"),
  Chunk121005 = require("./121005.js"),
  Chunk369827 = require("./369827.js"),
  Chunk552574 = require("./552574.js"),
  Chunk935630 = require("./935630.js"),
  Chunk988023 = require("./988023.js"),
  Chunk289333 = require("./289333.js"),
  Chunk252293 = require("./252293.js"),
  Chunk615310 = require("./615310.js"),
  Chunk87952 = require("./87952.js"),
  Chunk814626 = require("./814626.js"),
  Chunk305114 = require("./305114.js"),
  Chunk26279 = require("./26279.js"),
  Chunk652215 = require("./652215.js"),
  Chunk788868 = require("./788868.js"),
  Chunk898772 = require("./898772.js");

function Q(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function X(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      Q(e, t, n[t])
    })
  }
  return e
}

function J(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function $(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : J(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let [ee, et, en] = (0, Chunk786300.A)();

function er(e) {
  var t, n, o, N;
  let {
    loadId: Q,
    activeSubscription: J,
    stepConfigs: et,
    breadcrumbs: en = [],
    skuIDs: er,
    isGift: ei = false,
    children: ea,
    defaultPlanId: eo,
    purchaseType: es = z.VVm.SUBSCRIPTION,
    applicationId: el,
    referralCode: ec,
    paymentGateway: eu,
    excludeSubscriptionPlansBySKU: ed = false,
    excludeSKUPurchasePreviews: ef = false,
    wasTier2PremiumBeforePurchase: ep = false,
    referralTrialOfferId: e_
  } = e, eh = (0, H.A)(), em = (0, m.H)(), eg = (0, M.A)(), eE = er[0], ey = (0, u.bG)([T.A], () => T.A.get(eE), [eE]), eb = null == ey ? true : ey.eligiblePaymentGateways, {
    paymentSources: eO,
    hasPaymentSources: ev,
    paymentSourceId: eA,
    setPaymentSourceId: eI,
    hasFetchedPaymentSources: eS
  } = (0, j.A)({
    isGift: ei,
    activeSubscription: J,
    eligiblePaymentGateways: eb
  }), eT = i.useRef(ev), {
    hasFetchedSubscriptionPlans: eC,
    priceOptions: eN,
    setCurrency: ew,
    currencyLoading: eR,
    currencies: eP
  } = (0, x.A)({
    activeSubscription: J,
    skuIDs: er,
    paymentSourceId: eA,
    isGift: ei,
    excludeSubscriptionPlansBySKU: ed
  }), eD = (0, F.A)(), [eL, ex] = i.useState(false), {
    step: eM,
    setStep: ej,
    steps: ek,
    breadcrumbsData: eU,
    previousStepRef: eG
  } = (0, B.A)({
    stepConfigs: et,
    breadcrumbs: en
  }), [eF, eV] = (0, G.A)(eM), {
    paymentError: eB,
    paymentAuthenticationState: eH
  } = (0, k.A)(), {
    purchaseError: eY,
    purchaseErrorBlockRef: eW,
    setPurchaseError: eK
  } = (0, U.A)(), ez = (0, d.A)(() => {
    let e = null != Q ? Q : (0, l.A)();
    return R.A.addBreadcrumb({
      message: "Checkout session ID: ".concat(e)
    }), {
      loadId: e,
      startTime: Date.now()
    }
  }), {
    selectedSkuId: eq,
    selectedPlan: eZ,
    selectedPlanNotification: eQ,
    setSelectedSkuId: eX,
    setSelectedPlanId: eJ,
    setSelectedPlanNotification: e$
  } = (0, P.A)(), [e0, e1] = (0, u.yK)([I.A], () => [I.A.purchaseTokenAuthState, I.A.purchaseTokenHash]), [e2, e3, e6, e4] = (0, u.yK)([Y.A], () => [Y.A.browserCheckoutState, Y.A.loadId, Y.A.skuId, Y.A.planId]), [e5, e7] = i.useState(null), [e8, e9] = i.useState(null), [te, tt] = i.useState(null), [tn, tr] = i.useState(null), [ti, ta] = i.useState(null), [to, ts] = i.useState(true), [tl, tc] = i.useState([]), [tu, td] = i.useState([]), tf = i.useMemo(() => null == eZ || (0, w.ys)(eZ.id), [eZ]), tp = i.useRef(null != J ? J.planId : null);
  i.useEffect(() => {
    null == tp.current && null != J && (tp.current = J.planId)
  }, [J]);
  let {
    endsAt: t_
  } = (0, g.A)({
    forceFetch: false,
    excludeReverseTrial: true
  }), th = i.useRef(t_.isSame(s()(0)) ? null : t_);
  i.useEffect(() => {
    null != th.current || t_.isSame(s()(0)) || (th.current = t_)
  }, [t_]);
  let tm = i.useMemo(() => ({
    paymentSourceId: eA,
    paymentGateway: eu,
    loadId: Q
  }), [eA, eu, Q]);
  (0, L.A)(eE, tm);
  let {
    skusById: tg,
    hasFetchedSkus: tE,
    skuPricePreviewsById: ty,
    previewErrorsById: tb
  } = (0, V.A)({
    applicationId: null != el ? el : q.tv,
    skuIDs: er,
    currentPaymentSourceId: eA,
    isGift: ei,
    excludeSKUPurchasePreviews: ef,
    loadId: ez.loadId
  }), tO = tg[null != eq ? eq : ""], tv = null != eq ? tb[eq] : null, [tA, tI] = i.useState(tv), tS = i.useMemo(() => {
    var e;
    if (null == eq) return null;
    let t = ty[eq];
    return null == t ? null : null != (e = t[null != eA ? eA : S.B]) ? e : t[S.B]
  }, [eq, ty, eA]), tT = (0, u.bG)([W.A], () => W.A.getPaymentSourceRecords()), tC = (0, u.bG)([W.A], () => W.A.hasCheckoutContextForSession(ez.loadId)), {
    data: tN
  } = (0, h.YY)(el), tw = A.Q_.useSetting(), tR = (0, u.bG)([f.A], () => f.A.getFetchState());
  i.useEffect(() => {
    null != tN && (0, c.Lt)(tN.flags, z.gfo.EMBEDDED) && tw && null == tR && (0, p.SE)()
  }, [tN, tw, tR]);
  let tP = (0, c.Lt)(null != (t = null == tN ? true : tN.flags) ? t : 0, z.gfo.EMBEDDED) && (0, c.Lt)(null != (n = null == tN ? true : tN.flags) ? n : 0, z.gfo.EMBEDDED_IAP),
    tD = (0, u.bG)([_.Ay], () => Array.from(_.Ay.getSelfEmbeddedActivities().values()).find(e => {
      let {
        applicationId: t
      } = e;
      return t === el
    })),
    tL = null == tD ? true : tD.compositeInstanceId,
    tx = (0, u.bG)([C.A], () => null != eq ? C.A.getForSKU(eq) : null, [eq]),
    [tM, tj] = i.useState(null),
    tk = null != (o = null == J ? true : J.inReverseTrial) && o && !ei,
    tU = (0, b.A)({
      location: "PaymentModal"
    }) && tf,
    {
      isDisplayingWowMomentConfirmation: tG
    } = (0, u.cf)([y.A], () => ({
      isDisplayingWowMomentConfirmation: y.A.isDisplayingWowMomentConfirmation
    })),
    tF = tU ? Z.Ot : true,
    {
      enabled: tV
    } = (0, E.Y)({
      location: "PaymentContext"
    }),
    tB = (0, D.uR)({
      location: "PaymentModal"
    }),
    tH = i.useMemo(() => {
      if (tB) return K.uH.APPLE_PAYMENT_LINK
    }, [tB]),
    tY = i.useMemo(() => null != eZ && eZ.id === q.gD.PREMIUM_GROUP_MONTH, [eZ]),
    tW = (0, v.V)(null != e_ ? e_ : true),
    tK = !tY && !ei && null != tW && null != eq && q.TP[tW.trial_id].skus.includes(eq),
    tz = (0, O.O)(),
    tq = null == tz || null == (N = tz.discount) ? true : N.plan_ids.some(e => q.hd[e].skuId === eq),
    tZ = !!(!tY && !ei && null != tz && null != eq && tq);
  return (0, r.jsx)(ee.Provider, {
    value: $(X({
      stripe: eh,
      paymentElementsEnabled: tV,
      contextMetadata: ez,
      blockedPayments: em,
      activeSubscription: J,
      hasFetchedSubscriptions: eg,
      hasFetchedSubscriptionPlans: eC,
      updatedSubscription: tn,
      setUpdatedSubscription: tr,
      subscriptionMetadataRequest: ti,
      setSubscriptionMetadataRequest: ta,
      hasFetchedPaymentSources: eS,
      paymentSources: eO,
      hasPaymentSources: ev,
      paymentSourceId: eA,
      setPaymentSourceId: eI,
      priceOptions: eN,
      setCurrency: ew,
      currencyLoading: eR,
      currencies: eP
    }, eD), {
      hasAcceptedTerms: eL,
      setHasAcceptedTerms: ex,
      step: eM,
      setStep: ej,
      steps: ek,
      stepConfigs: et,
      breadcrumbs: eU,
      previousStepRef: eG,
      purchaseState: eF,
      setPurchaseState: eV,
      paymentAuthenticationState: eH,
      paymentError: eB,
      purchaseError: eY,
      setPurchaseError: eK,
      purchasePreviewError: tA,
      setPurchasePreviewError: tI,
      purchaseErrorBlockRef: eW,
      purchaseTokenAuthState: e0,
      purchaseTokenHash: e1,
      browserCheckoutState: e2,
      browserCheckoutStateLoadId: e3,
      browserCheckoutStateSkuId: e6,
      browserCheckoutStatePlanId: e4,
      bodyNode: e5,
      setBodyNode: e7,
      footerNode: e8,
      setFooterNode: e9,
      modalOverlayNode: te,
      setModalOverlayNode: tt,
      selectedSkuId: eq,
      selectedSku: tO,
      selectedStoreListing: tx,
      selectedPlan: eZ,
      setSelectedSkuId: eX,
      setSelectedPlanId: eJ,
      selectedPlanNotification: eQ,
      setSelectedPlanNotification: e$,
      readySlideId: to,
      setReadySlideId: ts,
      defaultPlanId: eo,
      isPremium: tf,
      isGift: ei,
      startingFractionalPremiumEndsAtRef: th,
      startedPaymentFlowWithPaymentSourcesRef: eT,
      startingPremiumSubscriptionPlanIdRef: tp,
      hasFetchedSkus: tE,
      skusById: tg,
      skuPricePreviewsById: ty,
      selectedSkuPricePreview: tS,
      checkoutPaymentSources: tT,
      hasCheckoutContextLoaded: tC,
      application: tN,
      purchaseType: es,
      isEmbeddedIAP: tP,
      activitySessionId: tL,
      devShelfFetchState: tR,
      entitlementsGranted: tl,
      setEntitlementsGranted: tc,
      appliedUserDiscounts: tu,
      setAppliedUserDiscounts: td,
      referralCode: ec,
      invoicePreview: tM,
      setInvoicePreview: tj,
      inReverseTrial: tk,
      enablePremiumBrandRefresh: tU,
      isDisplayingWowMomentConfirmation: tG,
      premiumBrandRefreshBackgroundClassName: tF,
      wasTier2PremiumBeforePurchase: ep,
      customCheckoutFlow: tH,
      isPremiumGroupPurchase: tY,
      isEligibleForTrial: tK,
      isEligibleForDiscount: tZ,
      userTrialOffer: tW,
      referralTrialOfferId: e_,
      discountOffer: tz
    }),
    children: (0, r.jsx)(a.Elements, {
      options: z.XL8,
      stripe: eh,
      children: ea
    })
  })
}