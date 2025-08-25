/** Chunk was on web.js **/
/** chunk id: 563132, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  JL: () => X,
  PaymentContextProvider: () => J
}), require("./388685.js"), require("./997841.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk289008 = require("./289008.js"),
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
  var t, n, a;
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
    excludeSKUPurchasePreviews: eo = false,
    wasTier2PremiumBeforePurchase: ea = false,
    customCheckoutFlow: es
  } = e, el = (0, B.Z)(), ec = (0, h.Q)(), eu = (0, D.Z)(), ed = Q[0], ef = (0, c.e7)([I.Z], () => I.Z.get(ed), [ed]), e_ = null == ef ? true : ef.eligiblePaymentGateways, {
    paymentSources: ep,
    hasPaymentSources: eh,
    paymentSourceId: em,
    setPaymentSourceId: eg,
    hasFetchedPaymentSources: eE
  } = (0, x.Z)({
    isGift: J,
    activeSubscription: Y,
    eligiblePaymentGateways: e_
  }), eb = i.useRef(eh), {
    hasFetchedSubscriptionPlans: ey,
    priceOptions: eO,
    setCurrency: ev,
    currencyLoading: eI,
    currencies: eT
  } = (0, w.Z)({
    activeSubscription: Y,
    skuIDs: Q,
    paymentSourceId: em,
    isGift: J,
    excludeSubscriptionPlansBySKU: ei
  }), eS = (0, M.Z)(), [eA, eC] = i.useState(false), {
    step: eN,
    setStep: eR,
    steps: eP,
    breadcrumbsData: ew,
    previousStepRef: eD
  } = (0, G.Z)({
    stepConfigs: K,
    breadcrumbs: X
  }), [ex, eL] = (0, k.Z)(eN), {
    paymentError: ej,
    paymentAuthenticationState: ek
  } = (0, L.Z)(), {
    purchaseError: eM,
    purchaseErrorBlockRef: eU,
    setPurchaseError: eG
  } = (0, j.Z)(), eB = (0, u.Z)(() => {
    let e = null != S ? S : (0, l.Z)();
    return N.Z.addBreadcrumb({
      message: "Checkout session ID: ".concat(e)
    }), {
      loadId: e,
      startTime: Date.now()
    }
  }), {
    selectedSkuId: eZ,
    selectedPlan: eF,
    selectedPlanNotification: eV,
    setSelectedSkuId: eH,
    setSelectedPlanId: eY,
    setSelectedPlanNotification: eW
  } = (0, R.Z)(), [eK, ez] = (0, c.Wu)([O.Z], () => [O.Z.purchaseTokenAuthState, O.Z.purchaseTokenHash]), [eq, eX, eQ, eJ] = (0, c.Wu)([Z.Z], () => [Z.Z.browserCheckoutState, Z.Z.loadId, Z.Z.skuId, Z.Z.planId]), [e$, e0] = i.useState(null), [e1, e2] = i.useState(null), [e3, e4] = i.useState(null), [e8, e6] = i.useState(null), [e5, e7] = i.useState(null), [e9, te] = i.useState(true), [tt, tn] = i.useState([]), [tr, ti] = i.useState([]), to = i.useMemo(() => null == eF || (0, C.PV)(eF.id), [eF]), ta = i.useRef(null != Y ? Y.planId : null);
  i.useEffect(() => {
    null == ta.current && null != Y && (ta.current = Y.planId)
  }, [Y]);
  let {
    endsAt: ts
  } = (0, m.Z)({
    forceFetch: false,
    excludeReverseTrial: true
  }), tl = i.useRef(ts.isSame(s()(0)) ? null : ts);
  i.useEffect(() => {
    null != tl.current || ts.isSame(s()(0)) || (tl.current = ts)
  }, [ts]), (0, P.m)(ed, em);
  let {
    skusById: tc,
    hasFetchedSkus: tu,
    skuPricePreviewsById: td,
    previewErrorsById: tf
  } = (0, U.Z)({
    applicationId: null != en ? en : V.CL,
    skuIDs: Q,
    currentPaymentSourceId: em,
    isGift: J,
    excludeSKUPurchasePreviews: eo
  }), t_ = tc[null != eZ ? eZ : ""], tp = null != eZ ? tf[eZ] : null, [th, tm] = i.useState(tp), tg = i.useMemo(() => {
    if (null == eZ) return null;
    let e = td[eZ];
    return null == e ? null : e[null != em ? em : v.c]
  }, [eZ, td, em]), {
    data: tE
  } = (0, p.IX)(en), tb = y.Sb.useSetting(), ty = (0, c.e7)([d.Z], () => d.Z.getFetchState());
  i.useEffect(() => {
    null != tE && (0, A.yE)(tE.flags, F.udG.EMBEDDED) && tb && null == ty && (0, f.$h)()
  }, [tE, tb, ty]);
  let tO = (0, A.yE)(null != (t = null == tE ? true : tE.flags) ? t : 0, F.udG.EMBEDDED) && (0, A.yE)(null != (n = null == tE ? true : tE.flags) ? n : 0, F.udG.EMBEDDED_IAP),
    tv = (0, c.e7)([_.ZP], () => Array.from(_.ZP.getSelfEmbeddedActivities().values()).find(e => {
      let {
        applicationId: t
      } = e;
      return t === en
    })),
    tI = null == tv ? true : tv.compositeInstanceId,
    tT = (0, c.e7)([T.Z], () => null != eZ ? T.Z.getForSKU(eZ) : null, [eZ]),
    [tS, tA] = i.useState(null),
    tC = null != (a = null == Y ? true : Y.inReverseTrial) && a && !J,
    tN = (0, b.ZP)({
      location: "PaymentModal"
    }) && to,
    {
      isDisplayingWowMomentConfirmation: tR
    } = (0, c.cj)([E.Z], () => ({
      isDisplayingWowMomentConfirmation: E.Z.isDisplayingWowMomentConfirmation
    })),
    tP = tN ? H.premiumBrandRefreshBackground : true,
    {
      enabled: tw
    } = (0, g.l)({
      location: "PaymentModal"
    });
  return (0, r.jsx)(q.Provider, {
    value: z(W({
      stripe: el,
      paymentElementsEnabled: tw,
      contextMetadata: eB,
      blockedPayments: ec,
      activeSubscription: Y,
      hasFetchedSubscriptions: eu,
      hasFetchedSubscriptionPlans: ey,
      updatedSubscription: e8,
      setUpdatedSubscription: e6,
      subscriptionMetadataRequest: e5,
      setSubscriptionMetadataRequest: e7,
      hasFetchedPaymentSources: eE,
      paymentSources: ep,
      hasPaymentSources: eh,
      paymentSourceId: em,
      setPaymentSourceId: eg,
      priceOptions: eO,
      setCurrency: ev,
      currencyLoading: eI,
      currencies: eT
    }, eS), {
      hasAcceptedTerms: eA,
      setHasAcceptedTerms: eC,
      step: eN,
      setStep: eR,
      steps: eP,
      stepConfigs: K,
      breadcrumbs: ew,
      previousStepRef: eD,
      purchaseState: ex,
      setPurchaseState: eL,
      paymentAuthenticationState: ek,
      paymentError: ej,
      purchaseError: eM,
      setPurchaseError: eG,
      purchasePreviewError: th,
      setPurchasePreviewError: tm,
      purchaseErrorBlockRef: eU,
      purchaseTokenAuthState: eK,
      purchaseTokenHash: ez,
      browserCheckoutState: eq,
      browserCheckoutStateLoadId: eX,
      browserCheckoutStateSkuId: eQ,
      browserCheckoutStatePlanId: eJ,
      bodyNode: e$,
      setBodyNode: e0,
      footerNode: e1,
      setFooterNode: e2,
      modalOverlayNode: e3,
      setModalOverlayNode: e4,
      selectedSkuId: eZ,
      selectedSku: t_,
      selectedStoreListing: tT,
      selectedPlan: eF,
      setSelectedSkuId: eH,
      setSelectedPlanId: eY,
      selectedPlanNotification: eV,
      setSelectedPlanNotification: eW,
      readySlideId: e9,
      setReadySlideId: te,
      defaultPlanId: ee,
      isPremium: to,
      isGift: J,
      startingFractionalPremiumEndsAtRef: tl,
      startedPaymentFlowWithPaymentSourcesRef: eb,
      startingPremiumSubscriptionPlanIdRef: ta,
      hasFetchedSkus: tu,
      skusById: tc,
      skuPricePreviewsById: td,
      selectedSkuPricePreview: tg,
      application: tE,
      purchaseType: et,
      isEmbeddedIAP: tO,
      activitySessionId: tI,
      devShelfFetchState: ty,
      entitlementsGranted: tt,
      setEntitlementsGranted: tn,
      appliedUserDiscounts: tr,
      setAppliedUserDiscounts: ti,
      referralCode: er,
      invoicePreview: tS,
      setInvoicePreview: tA,
      inReverseTrial: tC,
      enablePremiumBrandRefresh: tN,
      isDisplayingWowMomentConfirmation: tR,
      premiumBrandRefreshBackgroundClassName: tP,
      wasTier2PremiumBeforePurchase: ea,
      customCheckoutFlow: es
    }),
    children: (0, r.jsx)(o.Elements, {
      options: F.OBo,
      stripe: el,
      children: $
    })
  })
}