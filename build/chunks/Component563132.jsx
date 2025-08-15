/** Chunk was on web.js **/
/** chunk id: 563132, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  JL: () => X,
  PaymentContextProvider: () => J
}), require("./388685.js"), require("./997841.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk245364 = require("./245364.js"),
  Chunk913527 = require("./913527.js"),
  s = require.n(Chunk913527),
  Chunk772848 = require("./772848.js"),
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
  Chunk47280 = require("./47280.js"),
  Chunk695346 = require("./695346.js"),
  Chunk882712 = require("./882712.js"),
  Chunk855775 = require("./855775.js"),
  Chunk55563 = require("./55563.js"),
  Chunk551428 = require("./551428.js"),
  Chunk975104 = require("./975104.jsx"),
  Chunk630388 = require("./630388.js"),
  Chunk74538 = require("./74538.js"),
  Chunk960048 = require("./960048.js"),
  Chunk735521 = require("./735521.js"),
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
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js"),
  Chunk876414 = require("./876414.js");

function Y(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function W(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      Y(e, t, n[t])
    })
  }
  return e
}

function K(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function z(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : K(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let [q, X, Q] = (0, Chunk975104.Z)();

function J(e) {
  var t, n, o;
  let {
    loadId: S,
    activeSubscription: Y,
    stepConfigs: K,
    breadcrumbs: X = [],
    skuIDs: Q,
    isGift: J = false,
    children: $,
    defaultPlanId: ee,
    purchaseType: et = F.GZQ.SUBSCRIPTION,
    applicationId: en,
    referralCode: er,
    excludeSubscriptionPlansBySKU: ei = false,
    excludeSKUPurchasePreviews: ea = false,
    wasTier2PremiumBeforePurchase: eo = false
  } = e, es = (0, B.Z)(), el = (0, h.Q)(), ec = (0, D.Z)(), eu = Q[0], ed = (0, c.e7)([I.Z], () => I.Z.get(eu), [eu]), ef = null == ed ? true : ed.eligiblePaymentGateways, {
    paymentSources: e_,
    hasPaymentSources: ep,
    paymentSourceId: eh,
    setPaymentSourceId: em,
    hasFetchedPaymentSources: eg
  } = (0, L.Z)({
    isGift: J,
    activeSubscription: Y,
    eligiblePaymentGateways: ef
  }), eE = i.useRef(ep), {
    hasFetchedSubscriptionPlans: eb,
    priceOptions: ey,
    setCurrency: eO,
    currencyLoading: ev,
    currencies: eI
  } = (0, w.Z)({
    activeSubscription: Y,
    skuIDs: Q,
    paymentSourceId: eh,
    isGift: J,
    excludeSubscriptionPlansBySKU: ei
  }), eT = (0, j.Z)(), [eS, eA] = i.useState(false), {
    step: eN,
    setStep: eC,
    steps: eR,
    breadcrumbsData: eP,
    previousStepRef: ew
  } = (0, G.Z)({
    stepConfigs: K,
    breadcrumbs: X
  }), [eD, eL] = (0, k.Z)(eN), {
    paymentError: ex,
    paymentAuthenticationState: eM
  } = (0, x.Z)(), {
    purchaseError: ek,
    purchaseErrorBlockRef: ej,
    setPurchaseError: eU
  } = (0, M.Z)(), eG = (0, u.Z)(() => {
    let e = null != S ? S : (0, l.Z)();
    return C.Z.addBreadcrumb({
      message: "Checkout session ID: ".concat(e)
    }), {
      loadId: e,
      startTime: Date.now()
    }
  }), {
    selectedSkuId: eB,
    selectedPlan: eV,
    selectedPlanNotification: eF,
    setSelectedSkuId: eZ,
    setSelectedPlanId: eH,
    setSelectedPlanNotification: eY
  } = (0, R.Z)(), [eW, eK] = (0, c.Wu)([O.Z], () => [O.Z.purchaseTokenAuthState, O.Z.purchaseTokenHash]), [ez, eq, eX, eQ] = (0, c.Wu)([V.Z], () => [V.Z.browserCheckoutState, V.Z.loadId, V.Z.skuId, V.Z.planId]), [eJ, e$] = i.useState(null), [e0, e1] = i.useState(null), [e2, e3] = i.useState(null), [e4, e5] = i.useState(null), [e6, e8] = i.useState(null), [e7, e9] = i.useState(true), [te, tt] = i.useState([]), [tn, tr] = i.useState([]), ti = i.useMemo(() => null == eV || (0, N.PV)(eV.id), [eV]), ta = i.useRef(null != Y ? Y.planId : null);
  i.useEffect(() => {
    null == ta.current && null != Y && (ta.current = Y.planId)
  }, [Y]);
  let {
    endsAt: to
  } = (0, m.Z)({
    forceFetch: false,
    excludeReverseTrial: true
  }), ts = i.useRef(to.isSame(s()(0)) ? null : to);
  i.useEffect(() => {
    null != ts.current || to.isSame(s()(0)) || (ts.current = to)
  }, [to]), (0, P.m)(eu, eh);
  let {
    skusById: tl,
    hasFetchedSkus: tc,
    skuPricePreviewsById: tu,
    previewErrorsById: td
  } = (0, U.Z)({
    applicationId: null != en ? en : Z.CL,
    skuIDs: Q,
    currentPaymentSourceId: eh,
    isGift: J,
    excludeSKUPurchasePreviews: ea
  }), tf = tl[null != eB ? eB : ""], t_ = null != eB ? td[eB] : null, [tp, th] = i.useState(t_), tm = i.useMemo(() => {
    if (null == eB) return null;
    let e = tu[eB];
    return null == e ? null : e[null != eh ? eh : v.c]
  }, [eB, tu, eh]), {
    data: tg
  } = (0, p.IX)(en), tE = y.Sb.useSetting(), tb = (0, c.e7)([d.Z], () => d.Z.getFetchState());
  i.useEffect(() => {
    null != tg && (0, A.yE)(tg.flags, F.udG.EMBEDDED) && tE && null == tb && (0, f.$h)()
  }, [tg, tE, tb]);
  let ty = (0, A.yE)(null != (t = null == tg ? true : tg.flags) ? t : 0, F.udG.EMBEDDED) && (0, A.yE)(null != (n = null == tg ? true : tg.flags) ? n : 0, F.udG.EMBEDDED_IAP),
    tO = (0, c.e7)([_.ZP], () => Array.from(_.ZP.getSelfEmbeddedActivities().values()).find(e => {
      let {
        applicationId: t
      } = e;
      return t === en
    })),
    tv = null == tO ? true : tO.compositeInstanceId,
    tI = (0, c.e7)([T.Z], () => null != eB ? T.Z.getForSKU(eB) : null, [eB]),
    [tT, tS] = i.useState(null),
    tA = null != (o = null == Y ? true : Y.inReverseTrial) && o && !J,
    tN = (0, b.ZP)({
      location: "PaymentModal"
    }) && ti,
    {
      isDisplayingWowMomentConfirmation: tC
    } = (0, c.cj)([E.Z], () => ({
      isDisplayingWowMomentConfirmation: E.Z.isDisplayingWowMomentConfirmation
    })),
    tR = tN ? H.premiumBrandRefreshBackground : true,
    {
      enabled: tP
    } = (0, g.l)({
      location: "PaymentModal"
    });
  return (0, r.jsx)(q.Provider, {
    value: z(W({
      stripe: es,
      paymentElementsEnabled: tP,
      contextMetadata: eG,
      blockedPayments: el,
      activeSubscription: Y,
      hasFetchedSubscriptions: ec,
      hasFetchedSubscriptionPlans: eb,
      updatedSubscription: e4,
      setUpdatedSubscription: e5,
      subscriptionMetadataRequest: e6,
      setSubscriptionMetadataRequest: e8,
      hasFetchedPaymentSources: eg,
      paymentSources: e_,
      hasPaymentSources: ep,
      paymentSourceId: eh,
      setPaymentSourceId: em,
      priceOptions: ey,
      setCurrency: eO,
      currencyLoading: ev,
      currencies: eI
    }, eT), {
      hasAcceptedTerms: eS,
      setHasAcceptedTerms: eA,
      step: eN,
      setStep: eC,
      steps: eR,
      stepConfigs: K,
      breadcrumbs: eP,
      previousStepRef: ew,
      purchaseState: eD,
      setPurchaseState: eL,
      paymentAuthenticationState: eM,
      paymentError: ex,
      purchaseError: ek,
      setPurchaseError: eU,
      purchasePreviewError: tp,
      setPurchasePreviewError: th,
      purchaseErrorBlockRef: ej,
      purchaseTokenAuthState: eW,
      purchaseTokenHash: eK,
      browserCheckoutState: ez,
      browserCheckoutStateLoadId: eq,
      browserCheckoutStateSkuId: eX,
      browserCheckoutStatePlanId: eQ,
      bodyNode: eJ,
      setBodyNode: e$,
      footerNode: e0,
      setFooterNode: e1,
      modalOverlayNode: e2,
      setModalOverlayNode: e3,
      selectedSkuId: eB,
      selectedSku: tf,
      selectedStoreListing: tI,
      selectedPlan: eV,
      setSelectedSkuId: eZ,
      setSelectedPlanId: eH,
      selectedPlanNotification: eF,
      setSelectedPlanNotification: eY,
      readySlideId: e7,
      setReadySlideId: e9,
      defaultPlanId: ee,
      isPremium: ti,
      isGift: J,
      startingFractionalPremiumEndsAtRef: ts,
      startedPaymentFlowWithPaymentSourcesRef: eE,
      startingPremiumSubscriptionPlanIdRef: ta,
      hasFetchedSkus: tc,
      skusById: tl,
      skuPricePreviewsById: tu,
      selectedSkuPricePreview: tm,
      application: tg,
      purchaseType: et,
      isEmbeddedIAP: ty,
      activitySessionId: tv,
      devShelfFetchState: tb,
      entitlementsGranted: te,
      setEntitlementsGranted: tt,
      appliedUserDiscounts: tn,
      setAppliedUserDiscounts: tr,
      referralCode: er,
      invoicePreview: tT,
      setInvoicePreview: tS,
      inReverseTrial: tA,
      enablePremiumBrandRefresh: tN,
      isDisplayingWowMomentConfirmation: tC,
      premiumBrandRefreshBackgroundClassName: tR,
      wasTier2PremiumBeforePurchase: eo
    }),
    children: (0, r.jsx)(a.Elements, {
      options: F.OBo,
      stripe: es,
      children: $
    })
  })
}