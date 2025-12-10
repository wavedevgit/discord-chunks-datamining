/** Chunk was on web.js **/
/** chunk id: 563132, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  JL: () => J,
  Lq: () => X,
  PaymentContextProvider: () => ee
}), require("./388685.js"), require("./997841.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk575053 = require("./575053.js"),
  Chunk913527 = require("./913527.js"),
  s = require.n(Chunk913527),
  Chunk772848 = require("./772848.js"),
  Chunk95015 = require("./95015.js"),
  Chunk442837 = require("./442837.js"),
  Chunk211266 = require("./211266.js"),
  Chunk115130 = require("./115130.js"),
  Chunk566620 = require("./566620.js"),
  Chunk317381 = require("./317381.js"),
  Chunk728345 = require("./728345.js"),
  Chunk211242 = require("./211242.js"),
  Chunk975298 = require("./975298.js"),
  Chunk892041 = require("./892041.js"),
  Chunk453227 = require("./453227.js"),
  Chunk283066 = require("./283066.js"),
  Chunk695346 = require("./695346.js"),
  Chunk882712 = require("./882712.js"),
  Chunk855775 = require("./855775.js"),
  Chunk55563 = require("./55563.js"),
  Chunk551428 = require("./551428.js"),
  Chunk975104 = require("./975104.jsx"),
  Chunk74538 = require("./74538.js"),
  Chunk960048 = require("./960048.js"),
  Chunk735521 = require("./735521.js"),
  Chunk325100 = require("./325100.js"),
  Chunk659848 = require("./659848.js"),
  Chunk583046 = require("./583046.js"),
  Chunk897829 = require("./897829.js"),
  Chunk74179 = require("./74179.js"),
  Chunk896246 = require("./896246.js"),
  Chunk320317 = require("./320317.js"),
  Chunk994427 = require("./994427.js"),
  Chunk814076 = require("./814076.js"),
  Chunk712297 = require("./712297.js"),
  Chunk585686 = require("./585686.js"),
  Chunk771206 = require("./771206.js"),
  Chunk362755 = require("./362755.js"),
  Chunk283307 = require("./283307.js"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js"),
  Chunk876414 = require("./876414.js");

function K(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function z(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      K(e, t, n[t])
    })
  }
  return e
}

function q(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function Q(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : q(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let [X, J, $] = (0, Chunk975104.Z)();

function ee(e) {
  var t, n, o;
  let {
    loadId: C,
    activeSubscription: K,
    stepConfigs: q,
    breadcrumbs: J = [],
    skuIDs: $,
    isGift: ee = false,
    children: et,
    defaultPlanId: en,
    purchaseType: er = H.GZQ.SUBSCRIPTION,
    applicationId: ei,
    referralCode: ea,
    paymentGateway: eo,
    excludeSubscriptionPlansBySKU: es = false,
    excludeSKUPurchasePreviews: el = false,
    wasTier2PremiumBeforePurchase: ec = false
  } = e, eu = (0, B.Z)(), ed = (0, h.Q)(), ef = (0, x.Z)(), ep = $[0], e_ = (0, u.e7)([I.Z], () => I.Z.get(ep), [ep]), em = null == e_ ? true : e_.eligiblePaymentGateways, {
    paymentSources: eh,
    hasPaymentSources: eg,
    paymentSourceId: eE,
    setPaymentSourceId: eb,
    hasFetchedPaymentSources: ey
  } = (0, L.Z)({
    isGift: ee,
    activeSubscription: K,
    eligiblePaymentGateways: em
  }), eO = i.useRef(eg), {
    hasFetchedSubscriptionPlans: ev,
    priceOptions: eS,
    setCurrency: eI,
    currencyLoading: eT,
    currencies: eC
  } = (0, w.Z)({
    activeSubscription: K,
    skuIDs: $,
    paymentSourceId: eE,
    isGift: ee,
    excludeSubscriptionPlansBySKU: es
  }), eA = (0, U.Z)(), [eN, eP] = i.useState(false), {
    step: eR,
    setStep: eD,
    steps: ew,
    breadcrumbsData: ex,
    previousStepRef: eL
  } = (0, Z.Z)({
    stepConfigs: q,
    breadcrumbs: J
  }), [ej, eM] = (0, k.Z)(eR), {
    paymentError: ek,
    paymentAuthenticationState: eU
  } = (0, j.Z)(), {
    purchaseError: eG,
    purchaseErrorBlockRef: eZ,
    setPurchaseError: eB
  } = (0, M.Z)(), eF = (0, d.Z)(() => {
    let e = null != C ? C : (0, l.Z)();
    return N.Z.addBreadcrumb({
      message: "Checkout session ID: ".concat(e)
    }), {
      loadId: e,
      startTime: Date.now()
    }
  }), {
    selectedSkuId: eV,
    selectedPlan: eH,
    selectedPlanNotification: eY,
    setSelectedSkuId: eW,
    setSelectedPlanId: eK,
    setSelectedPlanNotification: ez
  } = (0, P.Z)(), [eq, eQ] = (0, u.Wu)([v.Z], () => [v.Z.purchaseTokenAuthState, v.Z.purchaseTokenHash]), [eX, eJ, e$, e0] = (0, u.Wu)([F.Z], () => [F.Z.browserCheckoutState, F.Z.loadId, F.Z.skuId, F.Z.planId]), [e1, e3] = i.useState(null), [e2, e4] = i.useState(null), [e5, e8] = i.useState(null), [e6, e7] = i.useState(null), [e9, te] = i.useState(null), [tt, tn] = i.useState(true), [tr, ti] = i.useState([]), [ta, to] = i.useState([]), ts = i.useMemo(() => null == eH || (0, A.PV)(eH.id), [eH]), tl = i.useRef(null != K ? K.planId : null);
  i.useEffect(() => {
    null == tl.current && null != K && (tl.current = K.planId)
  }, [K]);
  let {
    endsAt: tc
  } = (0, g.Z)({
    forceFetch: false,
    excludeReverseTrial: true
  }), tu = i.useRef(tc.isSame(s()(0)) ? null : tc);
  i.useEffect(() => {
    null != tu.current || tc.isSame(s()(0)) || (tu.current = tc)
  }, [tc]);
  let td = i.useMemo(() => ({
    paymentSourceId: eE,
    paymentGateway: eo,
    loadId: C
  }), [eE, eo, C]);
  (0, D.m)(ep, td);
  let {
    skusById: tf,
    hasFetchedSkus: tp,
    skuPricePreviewsById: t_,
    previewErrorsById: tm
  } = (0, G.Z)({
    applicationId: null != ei ? ei : Y.CL,
    skuIDs: $,
    currentPaymentSourceId: eE,
    isGift: ee,
    excludeSKUPurchasePreviews: el
  }), th = tf[null != eV ? eV : ""], tg = null != eV ? tm[eV] : null, [tE, tb] = i.useState(tg), ty = i.useMemo(() => {
    if (null == eV) return null;
    let e = t_[eV];
    return null == e ? null : e[null != eE ? eE : S.c]
  }, [eV, t_, eE]), {
    data: tO
  } = (0, m.IX)(ei), tv = O.Sb.useSetting(), tS = (0, u.e7)([f.Z], () => f.Z.getFetchState());
  i.useEffect(() => {
    null != tO && (0, c.yE)(tO.flags, H.udG.EMBEDDED) && tv && null == tS && (0, p.$h)()
  }, [tO, tv, tS]);
  let tI = (0, c.yE)(null != (t = null == tO ? true : tO.flags) ? t : 0, H.udG.EMBEDDED) && (0, c.yE)(null != (n = null == tO ? true : tO.flags) ? n : 0, H.udG.EMBEDDED_IAP),
    tT = (0, u.e7)([_.ZP], () => Array.from(_.ZP.getSelfEmbeddedActivities().values()).find(e => {
      let {
        applicationId: t
      } = e;
      return t === ei
    })),
    tC = null == tT ? true : tT.compositeInstanceId,
    tA = (0, u.e7)([T.Z], () => null != eV ? T.Z.getForSKU(eV) : null, [eV]),
    [tN, tP] = i.useState(null),
    tR = null != (o = null == K ? true : K.inReverseTrial) && o && !ee,
    tD = (0, y.Z)({
      location: "PaymentModal"
    }) && ts,
    {
      isDisplayingWowMomentConfirmation: tw
    } = (0, u.cj)([b.Z], () => ({
      isDisplayingWowMomentConfirmation: b.Z.isDisplayingWowMomentConfirmation
    })),
    tx = tD ? W.premiumBrandRefreshBackground : true,
    {
      enabled: tL
    } = (0, E.l)({
      location: "PaymentContext"
    }),
    tj = (0, R.uH)({
      location: "PaymentModal"
    }),
    tM = i.useMemo(() => {
      if (tj) return V.cL.APPLE_PAYMENT_LINK
    }, [tj]),
    tk = i.useMemo(() => null != eH && eH.id === Y.Xh.PREMIUM_GROUP_MONTH, [eH]);
  return (0, r.jsx)(X.Provider, {
    value: Q(z({
      stripe: eu,
      paymentElementsEnabled: tL,
      contextMetadata: eF,
      blockedPayments: ed,
      activeSubscription: K,
      hasFetchedSubscriptions: ef,
      hasFetchedSubscriptionPlans: ev,
      updatedSubscription: e6,
      setUpdatedSubscription: e7,
      subscriptionMetadataRequest: e9,
      setSubscriptionMetadataRequest: te,
      hasFetchedPaymentSources: ey,
      paymentSources: eh,
      hasPaymentSources: eg,
      paymentSourceId: eE,
      setPaymentSourceId: eb,
      priceOptions: eS,
      setCurrency: eI,
      currencyLoading: eT,
      currencies: eC
    }, eA), {
      hasAcceptedTerms: eN,
      setHasAcceptedTerms: eP,
      step: eR,
      setStep: eD,
      steps: ew,
      stepConfigs: q,
      breadcrumbs: ex,
      previousStepRef: eL,
      purchaseState: ej,
      setPurchaseState: eM,
      paymentAuthenticationState: eU,
      paymentError: ek,
      purchaseError: eG,
      setPurchaseError: eB,
      purchasePreviewError: tE,
      setPurchasePreviewError: tb,
      purchaseErrorBlockRef: eZ,
      purchaseTokenAuthState: eq,
      purchaseTokenHash: eQ,
      browserCheckoutState: eX,
      browserCheckoutStateLoadId: eJ,
      browserCheckoutStateSkuId: e$,
      browserCheckoutStatePlanId: e0,
      bodyNode: e1,
      setBodyNode: e3,
      footerNode: e2,
      setFooterNode: e4,
      modalOverlayNode: e5,
      setModalOverlayNode: e8,
      selectedSkuId: eV,
      selectedSku: th,
      selectedStoreListing: tA,
      selectedPlan: eH,
      setSelectedSkuId: eW,
      setSelectedPlanId: eK,
      selectedPlanNotification: eY,
      setSelectedPlanNotification: ez,
      readySlideId: tt,
      setReadySlideId: tn,
      defaultPlanId: en,
      isPremium: ts,
      isGift: ee,
      startingFractionalPremiumEndsAtRef: tu,
      startedPaymentFlowWithPaymentSourcesRef: eO,
      startingPremiumSubscriptionPlanIdRef: tl,
      hasFetchedSkus: tp,
      skusById: tf,
      skuPricePreviewsById: t_,
      selectedSkuPricePreview: ty,
      application: tO,
      purchaseType: er,
      isEmbeddedIAP: tI,
      activitySessionId: tC,
      devShelfFetchState: tS,
      entitlementsGranted: tr,
      setEntitlementsGranted: ti,
      appliedUserDiscounts: ta,
      setAppliedUserDiscounts: to,
      referralCode: ea,
      invoicePreview: tN,
      setInvoicePreview: tP,
      inReverseTrial: tR,
      enablePremiumBrandRefresh: tD,
      isDisplayingWowMomentConfirmation: tw,
      premiumBrandRefreshBackgroundClassName: tx,
      wasTier2PremiumBeforePurchase: ec,
      customCheckoutFlow: tM,
      isPremiumGroupPurchase: tk
    }),
    children: (0, r.jsx)(a.Elements, {
      options: H.OBo,
      stripe: eu,
      children: et
    })
  })
}