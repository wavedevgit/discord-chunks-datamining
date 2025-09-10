/** Chunk was on web.js **/
/** chunk id: 563132, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  JL: () => $,
  PaymentContextProvider: () => et
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
  Chunk951570 = require("./951570.jsx"),
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

function z(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function q(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      z(e, t, n[t])
    })
  }
  return e
}

function X(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : X(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let [J, $, ee] = (0, Chunk975104.Z)();

function et(e) {
  var t, n, o;
  let {
    loadId: A,
    activeSubscription: z,
    stepConfigs: X,
    breadcrumbs: $ = [],
    skuIDs: ee,
    isGift: et = false,
    children: en,
    defaultPlanId: er,
    purchaseType: ei = Y.GZQ.SUBSCRIPTION,
    applicationId: ea,
    referralCode: eo,
    excludeSubscriptionPlansBySKU: es = false,
    excludeSKUPurchasePreviews: el = false,
    wasTier2PremiumBeforePurchase: ec = false
  } = e, eu = (0, F.Z)(), ed = (0, h.Q)(), ef = (0, L.Z)(), e_ = ee[0], ep = (0, c.e7)([T.Z], () => T.Z.get(e_), [e_]), eh = null == ep ? true : ep.eligiblePaymentGateways, {
    paymentSources: em,
    hasPaymentSources: eg,
    paymentSourceId: eE,
    setPaymentSourceId: eb,
    hasFetchedPaymentSources: ey
  } = (0, j.Z)({
    isGift: et,
    activeSubscription: z,
    eligiblePaymentGateways: eh
  }), eO = i.useRef(eg), {
    hasFetchedSubscriptionPlans: ev,
    priceOptions: eI,
    setCurrency: eT,
    currencyLoading: eS,
    currencies: eA
  } = (0, x.Z)({
    activeSubscription: z,
    skuIDs: ee,
    paymentSourceId: eE,
    isGift: et,
    excludeSubscriptionPlansBySKU: es
  }), eC = (0, G.Z)(), [eN, eR] = i.useState(false), {
    step: eP,
    setStep: ew,
    steps: eD,
    breadcrumbsData: ex,
    previousStepRef: eL
  } = (0, Z.Z)({
    stepConfigs: X,
    breadcrumbs: $
  }), [ej, eM] = (0, U.Z)(eP), {
    paymentError: ek,
    paymentAuthenticationState: eU
  } = (0, M.Z)(), {
    purchaseError: eG,
    purchaseErrorBlockRef: eB,
    setPurchaseError: eZ
  } = (0, k.Z)(), eF = (0, u.Z)(() => {
    let e = null != A ? A : (0, l.Z)();
    return R.Z.addBreadcrumb({
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
  } = (0, P.Z)(), [eq, eX] = (0, c.Wu)([v.Z], () => [v.Z.purchaseTokenAuthState, v.Z.purchaseTokenHash]), [eQ, eJ, e$, e0] = (0, c.Wu)([V.Z], () => [V.Z.browserCheckoutState, V.Z.loadId, V.Z.skuId, V.Z.planId]), [e1, e2] = i.useState(null), [e3, e4] = i.useState(null), [e8, e6] = i.useState(null), [e5, e7] = i.useState(null), [e9, te] = i.useState(null), [tt, tn] = i.useState(true), [tr, ti] = i.useState([]), [ta, to] = i.useState([]), ts = i.useMemo(() => null == eH || (0, N.PV)(eH.id), [eH]), tl = i.useRef(null != z ? z.planId : null);
  i.useEffect(() => {
    null == tl.current && null != z && (tl.current = z.planId)
  }, [z]);
  let {
    endsAt: tc
  } = (0, m.Z)({
    forceFetch: false,
    excludeReverseTrial: true
  }), tu = i.useRef(tc.isSame(s()(0)) ? null : tc);
  i.useEffect(() => {
    null != tu.current || tc.isSame(s()(0)) || (tu.current = tc)
  }, [tc]), (0, D.m)(e_, eE);
  let {
    skusById: td,
    hasFetchedSkus: tf,
    skuPricePreviewsById: t_,
    previewErrorsById: tp
  } = (0, B.Z)({
    applicationId: null != ea ? ea : W.CL,
    skuIDs: ee,
    currentPaymentSourceId: eE,
    isGift: et,
    excludeSKUPurchasePreviews: el
  }), th = td[null != eV ? eV : ""], tm = null != eV ? tp[eV] : null, [tg, tE] = i.useState(tm), tb = i.useMemo(() => {
    if (null == eV) return null;
    let e = t_[eV];
    return null == e ? null : e[null != eE ? eE : I.c]
  }, [eV, t_, eE]), {
    data: ty
  } = (0, p.IX)(ea), tO = O.Sb.useSetting(), tv = (0, c.e7)([d.Z], () => d.Z.getFetchState());
  i.useEffect(() => {
    null != ty && (0, C.yE)(ty.flags, Y.udG.EMBEDDED) && tO && null == tv && (0, f.$h)()
  }, [ty, tO, tv]);
  let tI = (0, C.yE)(null != (t = null == ty ? true : ty.flags) ? t : 0, Y.udG.EMBEDDED) && (0, C.yE)(null != (n = null == ty ? true : ty.flags) ? n : 0, Y.udG.EMBEDDED_IAP),
    tT = (0, c.e7)([_.ZP], () => Array.from(_.ZP.getSelfEmbeddedActivities().values()).find(e => {
      let {
        applicationId: t
      } = e;
      return t === ea
    })),
    tS = null == tT ? true : tT.compositeInstanceId,
    tA = (0, c.e7)([S.Z], () => null != eV ? S.Z.getForSKU(eV) : null, [eV]),
    [tC, tN] = i.useState(null),
    tR = null != (o = null == z ? true : z.inReverseTrial) && o && !et,
    tP = (0, b.ZP)({
      location: "PaymentModal"
    }) && ts,
    {
      isDisplayingWowMomentConfirmation: tw
    } = (0, c.cj)([E.Z], () => ({
      isDisplayingWowMomentConfirmation: E.Z.isDisplayingWowMomentConfirmation
    })),
    tD = tP ? K.premiumBrandRefreshBackground : true,
    {
      enabled: tx
    } = (0, g.l)({
      location: "PaymentModal"
    }),
    {
      isEligible: tL
    } = (0, y.Q1)(),
    tj = tL && eV === W.Si.TIER_2,
    tM = (0, w.uH)({
      location: "PaymentModal"
    }),
    tk = i.useMemo(() => {
      if (tM) return H.cL.APPLE_PAYMENT_LINK
    }, [tM]);
  return (0, r.jsx)(J.Provider, {
    value: Q(q({
      stripe: eu,
      paymentElementsEnabled: tx,
      contextMetadata: eF,
      blockedPayments: ed,
      activeSubscription: z,
      hasFetchedSubscriptions: ef,
      hasFetchedSubscriptionPlans: ev,
      updatedSubscription: e5,
      setUpdatedSubscription: e7,
      subscriptionMetadataRequest: e9,
      setSubscriptionMetadataRequest: te,
      hasFetchedPaymentSources: ey,
      paymentSources: em,
      hasPaymentSources: eg,
      paymentSourceId: eE,
      setPaymentSourceId: eb,
      priceOptions: eI,
      setCurrency: eT,
      currencyLoading: eS,
      currencies: eA
    }, eC), {
      hasAcceptedTerms: eN,
      setHasAcceptedTerms: eR,
      step: eP,
      setStep: ew,
      steps: eD,
      stepConfigs: X,
      breadcrumbs: ex,
      previousStepRef: eL,
      purchaseState: ej,
      setPurchaseState: eM,
      paymentAuthenticationState: eU,
      paymentError: ek,
      purchaseError: eG,
      setPurchaseError: eZ,
      purchasePreviewError: tg,
      setPurchasePreviewError: tE,
      purchaseErrorBlockRef: eB,
      purchaseTokenAuthState: eq,
      purchaseTokenHash: eX,
      browserCheckoutState: eQ,
      browserCheckoutStateLoadId: eJ,
      browserCheckoutStateSkuId: e$,
      browserCheckoutStatePlanId: e0,
      bodyNode: e1,
      setBodyNode: e2,
      footerNode: e3,
      setFooterNode: e4,
      modalOverlayNode: e8,
      setModalOverlayNode: e6,
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
      defaultPlanId: er,
      isPremium: ts,
      isGift: et,
      startingFractionalPremiumEndsAtRef: tu,
      startedPaymentFlowWithPaymentSourcesRef: eO,
      startingPremiumSubscriptionPlanIdRef: tl,
      hasFetchedSkus: tf,
      skusById: td,
      skuPricePreviewsById: t_,
      selectedSkuPricePreview: tb,
      application: ty,
      purchaseType: ei,
      isEmbeddedIAP: tI,
      activitySessionId: tS,
      devShelfFetchState: tv,
      entitlementsGranted: tr,
      setEntitlementsGranted: ti,
      appliedUserDiscounts: ta,
      setAppliedUserDiscounts: to,
      referralCode: eo,
      invoicePreview: tC,
      setInvoicePreview: tN,
      inReverseTrial: tR,
      enablePremiumBrandRefresh: tP,
      isDisplayingWowMomentConfirmation: tw,
      premiumBrandRefreshBackgroundClassName: tD,
      wasTier2PremiumBeforePurchase: ec,
      customCheckoutFlow: tk,
      shouldShowSeptemberMarketingMomentBanner: tj
    }),
    children: (0, r.jsx)(a.Elements, {
      options: Y.OBo,
      stripe: eu,
      children: en
    })
  })
}