/** Chunk was on web.js **/
/** chunk id: 563132, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  JL: () => J,
  Lq: () => Q,
  PaymentContextProvider: () => ee
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
  Chunk283066 = require("./283066.js"),
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

function X(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : q(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let [Q, J, $] = (0, Chunk975104.Z)();

function ee(e) {
  var t, n, o;
  let {
    loadId: S,
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
    excludeSubscriptionPlansBySKU: eo = false,
    excludeSKUPurchasePreviews: es = false,
    wasTier2PremiumBeforePurchase: el = false
  } = e, ec = (0, Z.Z)(), eu = (0, h.Q)(), ed = (0, x.Z)(), ef = $[0], e_ = (0, c.e7)([I.Z], () => I.Z.get(ef), [ef]), ep = null == e_ ? true : e_.eligiblePaymentGateways, {
    paymentSources: eh,
    hasPaymentSources: em,
    paymentSourceId: eg,
    setPaymentSourceId: eE,
    hasFetchedPaymentSources: eb
  } = (0, L.Z)({
    isGift: ee,
    activeSubscription: K,
    eligiblePaymentGateways: ep
  }), ey = i.useRef(em), {
    hasFetchedSubscriptionPlans: eO,
    priceOptions: ev,
    setCurrency: eI,
    currencyLoading: eT,
    currencies: eS
  } = (0, w.Z)({
    activeSubscription: K,
    skuIDs: $,
    paymentSourceId: eg,
    isGift: ee,
    excludeSubscriptionPlansBySKU: eo
  }), eA = (0, U.Z)(), [eC, eN] = i.useState(false), {
    step: eR,
    setStep: eP,
    steps: eD,
    breadcrumbsData: ew,
    previousStepRef: ex
  } = (0, B.Z)({
    stepConfigs: q,
    breadcrumbs: J
  }), [eL, eM] = (0, j.Z)(eR), {
    paymentError: ek,
    paymentAuthenticationState: ej
  } = (0, M.Z)(), {
    purchaseError: eU,
    purchaseErrorBlockRef: eG,
    setPurchaseError: eB
  } = (0, k.Z)(), eZ = (0, u.Z)(() => {
    let e = null != S ? S : (0, l.Z)();
    return N.Z.addBreadcrumb({
      message: "Checkout session ID: ".concat(e)
    }), {
      loadId: e,
      startTime: Date.now()
    }
  }), {
    selectedSkuId: eF,
    selectedPlan: eV,
    selectedPlanNotification: eH,
    setSelectedSkuId: eY,
    setSelectedPlanId: eW,
    setSelectedPlanNotification: eK
  } = (0, R.Z)(), [ez, eq] = (0, c.Wu)([O.Z], () => [O.Z.purchaseTokenAuthState, O.Z.purchaseTokenHash]), [eX, eQ, eJ, e$] = (0, c.Wu)([F.Z], () => [F.Z.browserCheckoutState, F.Z.loadId, F.Z.skuId, F.Z.planId]), [e0, e1] = i.useState(null), [e2, e3] = i.useState(null), [e4, e8] = i.useState(null), [e5, e6] = i.useState(null), [e7, e9] = i.useState(null), [te, tt] = i.useState(true), [tn, tr] = i.useState([]), [ti, ta] = i.useState([]), to = i.useMemo(() => null == eV || (0, C.PV)(eV.id), [eV]), ts = i.useRef(null != K ? K.planId : null);
  i.useEffect(() => {
    null == ts.current && null != K && (ts.current = K.planId)
  }, [K]);
  let {
    endsAt: tl
  } = (0, m.Z)({
    forceFetch: false,
    excludeReverseTrial: true
  }), tc = i.useRef(tl.isSame(s()(0)) ? null : tl);
  i.useEffect(() => {
    null != tc.current || tl.isSame(s()(0)) || (tc.current = tl)
  }, [tl]), (0, D.m)(ef, eg);
  let {
    skusById: tu,
    hasFetchedSkus: td,
    skuPricePreviewsById: tf,
    previewErrorsById: t_
  } = (0, G.Z)({
    applicationId: null != ei ? ei : Y.CL,
    skuIDs: $,
    currentPaymentSourceId: eg,
    isGift: ee,
    excludeSKUPurchasePreviews: es
  }), tp = tu[null != eF ? eF : ""], th = null != eF ? t_[eF] : null, [tm, tg] = i.useState(th), tE = i.useMemo(() => {
    if (null == eF) return null;
    let e = tf[eF];
    return null == e ? null : e[null != eg ? eg : v.c]
  }, [eF, tf, eg]), {
    data: tb
  } = (0, p.IX)(ei), ty = y.Sb.useSetting(), tO = (0, c.e7)([d.Z], () => d.Z.getFetchState());
  i.useEffect(() => {
    null != tb && (0, A.yE)(tb.flags, H.udG.EMBEDDED) && ty && null == tO && (0, f.$h)()
  }, [tb, ty, tO]);
  let tv = (0, A.yE)(null != (t = null == tb ? true : tb.flags) ? t : 0, H.udG.EMBEDDED) && (0, A.yE)(null != (n = null == tb ? true : tb.flags) ? n : 0, H.udG.EMBEDDED_IAP),
    tI = (0, c.e7)([_.ZP], () => Array.from(_.ZP.getSelfEmbeddedActivities().values()).find(e => {
      let {
        applicationId: t
      } = e;
      return t === ei
    })),
    tT = null == tI ? true : tI.compositeInstanceId,
    tS = (0, c.e7)([T.Z], () => null != eF ? T.Z.getForSKU(eF) : null, [eF]),
    [tA, tC] = i.useState(null),
    tN = null != (o = null == K ? true : K.inReverseTrial) && o && !ee,
    tR = (0, b.Z)({
      location: "PaymentModal"
    }) && to,
    {
      isDisplayingWowMomentConfirmation: tP
    } = (0, c.cj)([E.Z], () => ({
      isDisplayingWowMomentConfirmation: E.Z.isDisplayingWowMomentConfirmation
    })),
    tD = tR ? W.premiumBrandRefreshBackground : true,
    {
      enabled: tw
    } = (0, g.l)({
      location: "PaymentContext"
    }),
    tx = (0, P.uH)({
      location: "PaymentModal"
    }),
    tL = i.useMemo(() => {
      if (tx) return V.cL.APPLE_PAYMENT_LINK
    }, [tx]);
  return (0, r.jsx)(Q.Provider, {
    value: X(z({
      stripe: ec,
      paymentElementsEnabled: tw,
      contextMetadata: eZ,
      blockedPayments: eu,
      activeSubscription: K,
      hasFetchedSubscriptions: ed,
      hasFetchedSubscriptionPlans: eO,
      updatedSubscription: e5,
      setUpdatedSubscription: e6,
      subscriptionMetadataRequest: e7,
      setSubscriptionMetadataRequest: e9,
      hasFetchedPaymentSources: eb,
      paymentSources: eh,
      hasPaymentSources: em,
      paymentSourceId: eg,
      setPaymentSourceId: eE,
      priceOptions: ev,
      setCurrency: eI,
      currencyLoading: eT,
      currencies: eS
    }, eA), {
      hasAcceptedTerms: eC,
      setHasAcceptedTerms: eN,
      step: eR,
      setStep: eP,
      steps: eD,
      stepConfigs: q,
      breadcrumbs: ew,
      previousStepRef: ex,
      purchaseState: eL,
      setPurchaseState: eM,
      paymentAuthenticationState: ej,
      paymentError: ek,
      purchaseError: eU,
      setPurchaseError: eB,
      purchasePreviewError: tm,
      setPurchasePreviewError: tg,
      purchaseErrorBlockRef: eG,
      purchaseTokenAuthState: ez,
      purchaseTokenHash: eq,
      browserCheckoutState: eX,
      browserCheckoutStateLoadId: eQ,
      browserCheckoutStateSkuId: eJ,
      browserCheckoutStatePlanId: e$,
      bodyNode: e0,
      setBodyNode: e1,
      footerNode: e2,
      setFooterNode: e3,
      modalOverlayNode: e4,
      setModalOverlayNode: e8,
      selectedSkuId: eF,
      selectedSku: tp,
      selectedStoreListing: tS,
      selectedPlan: eV,
      setSelectedSkuId: eY,
      setSelectedPlanId: eW,
      selectedPlanNotification: eH,
      setSelectedPlanNotification: eK,
      readySlideId: te,
      setReadySlideId: tt,
      defaultPlanId: en,
      isPremium: to,
      isGift: ee,
      startingFractionalPremiumEndsAtRef: tc,
      startedPaymentFlowWithPaymentSourcesRef: ey,
      startingPremiumSubscriptionPlanIdRef: ts,
      hasFetchedSkus: td,
      skusById: tu,
      skuPricePreviewsById: tf,
      selectedSkuPricePreview: tE,
      application: tb,
      purchaseType: er,
      isEmbeddedIAP: tv,
      activitySessionId: tT,
      devShelfFetchState: tO,
      entitlementsGranted: tn,
      setEntitlementsGranted: tr,
      appliedUserDiscounts: ti,
      setAppliedUserDiscounts: ta,
      referralCode: ea,
      invoicePreview: tA,
      setInvoicePreview: tC,
      inReverseTrial: tN,
      enablePremiumBrandRefresh: tR,
      isDisplayingWowMomentConfirmation: tP,
      premiumBrandRefreshBackgroundClassName: tD,
      wasTier2PremiumBeforePurchase: el,
      customCheckoutFlow: tL
    }),
    children: (0, r.jsx)(a.Elements, {
      options: H.OBo,
      stripe: ec,
      children: et
    })
  })
}