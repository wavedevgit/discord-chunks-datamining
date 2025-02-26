/** Chunk was on web.js **/
"use strict";
n.d(t, {
  JL: () => V,
  PaymentContextProvider: () => Z
}), n(47120), n(789020);
var r = n(200651),
  i = n(192379),
  o = n(734530),
  a = n(772848),
  s = n(442837),
  l = n(211266),
  c = n(115130),
  u = n(566620),
  d = n(317381),
  f = n(728345),
  _ = n(211242),
  p = n(695346),
  h = n(882712),
  g = n(855775),
  m = n(551428),
  E = n(975104),
  v = n(630388),
  b = n(74538),
  y = n(960048),
  O = n(735521),
  S = n(583046),
  I = n(897829),
  T = n(74179),
  N = n(896246),
  A = n(320317),
  C = n(994427),
  R = n(814076),
  P = n(712297),
  D = n(585686),
  w = n(771206),
  L = n(362755),
  x = n(981631),
  M = n(474936);

function k(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function j(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      k(e, t, n[t])
    })
  }
  return e
}

function U(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function G(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : U(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let [B, V, F] = (0, E.Z)();

function Z(e) {
  var t, n, E;
  let {
    loadId: k,
    activeSubscription: U,
    stepConfigs: V,
    breadcrumbs: F = [],
    skuIDs: Z,
    isGift: H = !1,
    children: W,
    defaultPlanId: Y,
    purchaseType: K = x.GZQ.SUBSCRIPTION,
    applicationId: z,
    referralCode: q,
    repeatPurchase: Q = !1
  } = e, X = (0, w.Z)(), J = (0, _.Q)(), $ = (0, I.Z)(), {
    paymentSources: ee,
    hasPaymentSources: et,
    paymentSourceId: en,
    setPaymentSourceId: er,
    hasFetchedPaymentSources: ei
  } = (0, T.Z)({
    isGift: H,
    activeSubscription: U
  }), eo = i.useRef(et), {
    hasFetchedSubscriptionPlans: ea,
    priceOptions: es,
    setCurrency: el,
    currencyLoading: ec,
    currencies: eu
  } = (0, S.Z)({
    activeSubscription: U,
    skuIDs: Z,
    paymentSourceId: en,
    isGift: H
  }), ed = (0, R.Z)(), [ef, e_] = i.useState(!1), {
    step: ep,
    setStep: eh,
    steps: eg,
    breadcrumbsData: em,
    previousStepRef: eE
  } = (0, D.Z)({
    stepConfigs: V,
    breadcrumbs: F
  }), [ev, eb] = (0, C.Z)(ep), {
    paymentError: ey,
    paymentAuthenticationState: eO
  } = (0, N.Z)(), {
    purchaseError: eS,
    purchaseErrorBlockRef: eI,
    setPurchaseError: eT
  } = (0, A.Z)(), eN = (0, l.Z)(() => {
    let e = null != k ? k : (0, a.Z)();
    return y.Z.addBreadcrumb({
      message: "Checkout session ID: ".concat(e)
    }), {
      loadId: e,
      startTime: Date.now()
    }
  }), {
    selectedSkuId: eA,
    selectedPlan: eC,
    selectedPlanNotification: eR,
    setSelectedSkuId: eP,
    setSelectedPlanId: eD,
    setSelectedPlanNotification: ew
  } = (0, O.Z)(), [eL, ex] = (0, s.Wu)([h.Z], () => [h.Z.purchaseTokenAuthState, h.Z.purchaseTokenHash]), [eM, ek, ej, eU] = (0, s.Wu)([L.Z], () => [L.Z.browserCheckoutState, L.Z.loadId, L.Z.skuId, L.Z.planId]), [eG, eB] = i.useState(null), [eV, eF] = i.useState(null), [eZ, eH] = i.useState(null), [eW, eY] = i.useState(null), [eK, ez] = i.useState(null), [eq, eQ] = i.useState(void 0), [eX, eJ] = i.useState([]), e$ = i.useMemo(() => null == eC || (0, b.PV)(eC.id), [eC]), e0 = i.useRef(null != U ? U.planId : null);
  i.useEffect(() => {
    null == e0.current && null != U && (e0.current = U.planId)
  }, [U]);
  let {
    skusById: e1,
    hasFetchedSkus: e2,
    skuPricePreviewsById: e3,
    previewErrorsById: e4
  } = (0, P.Z)({
    applicationId: null != z ? z : M.CL,
    skuIDs: Z,
    currentPaymentSourceId: en,
    isGift: H
  }), e6 = null != eA ? e4[eA] : null, [e5, e7] = i.useState(e6), e8 = i.useMemo(() => {
    if (null == eA) return null;
    let e = e3[eA];
    return null == e ? null : e[null != en ? en : g.c]
  }, [eA, e3, en]), {
    data: e9
  } = (0, f.IX)(z), te = p.Sb.useSetting(), tt = (0, s.e7)([c.Z], () => c.Z.getFetchState());
  i.useEffect(() => {
    null != e9 && (0, v.yE)(e9.flags, x.udG.EMBEDDED) && te && null == tt && (0, u.$h)()
  }, [e9, te, tt]);
  let tn = (0, v.yE)(null !== (t = null == e9 ? void 0 : e9.flags) && void 0 !== t ? t : 0, x.udG.EMBEDDED) && (0, v.yE)(null !== (n = null == e9 ? void 0 : e9.flags) && void 0 !== n ? n : 0, x.udG.EMBEDDED_IAP),
    tr = (0, s.e7)([d.ZP], () => Array.from(d.ZP.getSelfEmbeddedActivities().values()).find(e => {
      let {
        applicationId: t
      } = e;
      return t === z
    })),
    ti = null == tr ? void 0 : tr.compositeInstanceId,
    to = (0, s.e7)([m.Z], () => null != eA ? m.Z.getForSKU(eA) : null, [eA]),
    ta = e1[null != eA ? eA : ""],
    [ts, tl] = i.useState(null),
    tc = null !== (E = null == U ? void 0 : U.inReverseTrial) && void 0 !== E && E && !H;
  return (0, r.jsx)(B.Provider, {
    value: G(j({
      stripe: X,
      contextMetadata: eN,
      blockedPayments: J,
      activeSubscription: U,
      hasFetchedSubscriptions: $,
      hasFetchedSubscriptionPlans: ea,
      updatedSubscription: eW,
      setUpdatedSubscription: eY,
      subscriptionMetadataRequest: eK,
      setSubscriptionMetadataRequest: ez,
      hasFetchedPaymentSources: ei,
      paymentSources: ee,
      hasPaymentSources: et,
      paymentSourceId: en,
      setPaymentSourceId: er,
      priceOptions: es,
      setCurrency: el,
      currencyLoading: ec,
      currencies: eu
    }, ed), {
      hasAcceptedTerms: ef,
      setHasAcceptedTerms: e_,
      step: ep,
      setStep: eh,
      steps: eg,
      stepConfigs: V,
      breadcrumbs: em,
      previousStepRef: eE,
      purchaseState: ev,
      setPurchaseState: eb,
      paymentAuthenticationState: eO,
      paymentError: ey,
      purchaseError: eS,
      setPurchaseError: eT,
      purchasePreviewError: e5,
      setPurchasePreviewError: e7,
      purchaseErrorBlockRef: eI,
      purchaseTokenAuthState: eL,
      purchaseTokenHash: ex,
      browserCheckoutState: eM,
      browserCheckoutStateLoadId: ek,
      browserCheckoutStateSkuId: ej,
      browserCheckoutStatePlanId: eU,
      bodyNode: eG,
      setBodyNode: eB,
      footerNode: eV,
      setFooterNode: eF,
      modalOverlayNode: eZ,
      setModalOverlayNode: eH,
      selectedSkuId: eA,
      selectedSku: ta,
      selectedStoreListing: to,
      selectedPlan: eC,
      setSelectedSkuId: eP,
      setSelectedPlanId: eD,
      selectedPlanNotification: eR,
      setSelectedPlanNotification: ew,
      readySlideId: eq,
      setReadySlideId: eQ,
      defaultPlanId: Y,
      isPremium: e$,
      startedPaymentFlowWithPaymentSourcesRef: eo,
      startingPremiumSubscriptionPlanIdRef: e0,
      hasFetchedSkus: e2,
      skusById: e1,
      skuPricePreviewsById: e3,
      selectedSkuPricePreview: e8,
      application: e9,
      purchaseType: K,
      isEmbeddedIAP: tn,
      activitySessionId: ti,
      devShelfFetchState: tt,
      entitlementsGranted: eX,
      setEntitlementsGranted: eJ,
      referralCode: q,
      invoicePreview: ts,
      setInvoicePreview: tl,
      repeatPurchase: Q,
      inReverseTrial: tc
    }),
    children: (0, r.jsx)(o.Elements, {
      options: x.OBo,
      stripe: X,
      children: W
    })
  })
}