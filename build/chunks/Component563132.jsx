/** Chunk was on web.js **/
/** chunk id: 563132, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  JL: () => Q,
  PaymentContextProvider: () => $
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
  Chunk951570 = require("./951570.js"),
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

function W(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function K(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      W(e, t, n[t])
    })
  }
  return e
}

function z(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function q(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : z(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let [X, Q, J] = (0, Chunk975104.Z)();

function $(e) {
  var t, n, o;
  let {
    loadId: A,
    activeSubscription: W,
    stepConfigs: z,
    breadcrumbs: Q = [],
    skuIDs: J,
    isGift: $ = false,
    children: ee,
    defaultPlanId: et,
    purchaseType: en = V.GZQ.SUBSCRIPTION,
    applicationId: er,
    referralCode: ei,
    excludeSubscriptionPlansBySKU: ea = false,
    excludeSKUPurchasePreviews: eo = false,
    wasTier2PremiumBeforePurchase: es = false,
    customCheckoutFlow: el
  } = e, ec = (0, Z.Z)(), eu = (0, h.Q)(), ed = (0, x.Z)(), ef = J[0], e_ = (0, c.e7)([T.Z], () => T.Z.get(ef), [ef]), ep = null == e_ ? true : e_.eligiblePaymentGateways, {
    paymentSources: eh,
    hasPaymentSources: em,
    paymentSourceId: eg,
    setPaymentSourceId: eE,
    hasFetchedPaymentSources: eb
  } = (0, L.Z)({
    isGift: $,
    activeSubscription: W,
    eligiblePaymentGateways: ep
  }), ey = i.useRef(em), {
    hasFetchedSubscriptionPlans: eO,
    priceOptions: ev,
    setCurrency: eI,
    currencyLoading: eT,
    currencies: eS
  } = (0, D.Z)({
    activeSubscription: W,
    skuIDs: J,
    paymentSourceId: eg,
    isGift: $,
    excludeSubscriptionPlansBySKU: ea
  }), eA = (0, U.Z)(), [eC, eN] = i.useState(false), {
    step: eR,
    setStep: eP,
    steps: ew,
    breadcrumbsData: eD,
    previousStepRef: ex
  } = (0, B.Z)({
    stepConfigs: z,
    breadcrumbs: Q
  }), [eL, ej] = (0, k.Z)(eR), {
    paymentError: eM,
    paymentAuthenticationState: ek
  } = (0, j.Z)(), {
    purchaseError: eU,
    purchaseErrorBlockRef: eG,
    setPurchaseError: eB
  } = (0, M.Z)(), eZ = (0, u.Z)(() => {
    let e = null != A ? A : (0, l.Z)();
    return R.Z.addBreadcrumb({
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
  } = (0, P.Z)(), [ez, eq] = (0, c.Wu)([v.Z], () => [v.Z.purchaseTokenAuthState, v.Z.purchaseTokenHash]), [eX, eQ, eJ, e$] = (0, c.Wu)([F.Z], () => [F.Z.browserCheckoutState, F.Z.loadId, F.Z.skuId, F.Z.planId]), [e0, e1] = i.useState(null), [e2, e3] = i.useState(null), [e4, e8] = i.useState(null), [e6, e5] = i.useState(null), [e7, e9] = i.useState(null), [te, tt] = i.useState(true), [tn, tr] = i.useState([]), [ti, ta] = i.useState([]), to = i.useMemo(() => null == eV || (0, N.PV)(eV.id), [eV]), ts = i.useRef(null != W ? W.planId : null);
  i.useEffect(() => {
    null == ts.current && null != W && (ts.current = W.planId)
  }, [W]);
  let {
    endsAt: tl
  } = (0, m.Z)({
    forceFetch: false,
    excludeReverseTrial: true
  }), tc = i.useRef(tl.isSame(s()(0)) ? null : tl);
  i.useEffect(() => {
    null != tc.current || tl.isSame(s()(0)) || (tc.current = tl)
  }, [tl]), (0, w.m)(ef, eg);
  let {
    skusById: tu,
    hasFetchedSkus: td,
    skuPricePreviewsById: tf,
    previewErrorsById: t_
  } = (0, G.Z)({
    applicationId: null != er ? er : H.CL,
    skuIDs: J,
    currentPaymentSourceId: eg,
    isGift: $,
    excludeSKUPurchasePreviews: eo
  }), tp = tu[null != eF ? eF : ""], th = null != eF ? t_[eF] : null, [tm, tg] = i.useState(th), tE = i.useMemo(() => {
    if (null == eF) return null;
    let e = tf[eF];
    return null == e ? null : e[null != eg ? eg : I.c]
  }, [eF, tf, eg]), {
    data: tb
  } = (0, p.IX)(er), ty = O.Sb.useSetting(), tO = (0, c.e7)([d.Z], () => d.Z.getFetchState());
  i.useEffect(() => {
    null != tb && (0, C.yE)(tb.flags, V.udG.EMBEDDED) && ty && null == tO && (0, f.$h)()
  }, [tb, ty, tO]);
  let tv = (0, C.yE)(null != (t = null == tb ? true : tb.flags) ? t : 0, V.udG.EMBEDDED) && (0, C.yE)(null != (n = null == tb ? true : tb.flags) ? n : 0, V.udG.EMBEDDED_IAP),
    tI = (0, c.e7)([_.ZP], () => Array.from(_.ZP.getSelfEmbeddedActivities().values()).find(e => {
      let {
        applicationId: t
      } = e;
      return t === er
    })),
    tT = null == tI ? true : tI.compositeInstanceId,
    tS = (0, c.e7)([S.Z], () => null != eF ? S.Z.getForSKU(eF) : null, [eF]),
    [tA, tC] = i.useState(null),
    tN = null != (o = null == W ? true : W.inReverseTrial) && o && !$,
    tR = (0, b.ZP)({
      location: "PaymentModal"
    }) && to,
    {
      isDisplayingWowMomentConfirmation: tP
    } = (0, c.cj)([E.Z], () => ({
      isDisplayingWowMomentConfirmation: E.Z.isDisplayingWowMomentConfirmation
    })),
    tw = tR ? Y.premiumBrandRefreshBackground : true,
    {
      enabled: tD
    } = (0, g.l)({
      location: "PaymentModal"
    }),
    {
      isEligible: tx
    } = (0, y.Q1)(),
    tL = tx && eF === H.Si.TIER_2;
  return (0, r.jsx)(X.Provider, {
    value: q(K({
      stripe: ec,
      paymentElementsEnabled: tD,
      contextMetadata: eZ,
      blockedPayments: eu,
      activeSubscription: W,
      hasFetchedSubscriptions: ed,
      hasFetchedSubscriptionPlans: eO,
      updatedSubscription: e6,
      setUpdatedSubscription: e5,
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
      steps: ew,
      stepConfigs: z,
      breadcrumbs: eD,
      previousStepRef: ex,
      purchaseState: eL,
      setPurchaseState: ej,
      paymentAuthenticationState: ek,
      paymentError: eM,
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
      defaultPlanId: et,
      isPremium: to,
      isGift: $,
      startingFractionalPremiumEndsAtRef: tc,
      startedPaymentFlowWithPaymentSourcesRef: ey,
      startingPremiumSubscriptionPlanIdRef: ts,
      hasFetchedSkus: td,
      skusById: tu,
      skuPricePreviewsById: tf,
      selectedSkuPricePreview: tE,
      application: tb,
      purchaseType: en,
      isEmbeddedIAP: tv,
      activitySessionId: tT,
      devShelfFetchState: tO,
      entitlementsGranted: tn,
      setEntitlementsGranted: tr,
      appliedUserDiscounts: ti,
      setAppliedUserDiscounts: ta,
      referralCode: ei,
      invoicePreview: tA,
      setInvoicePreview: tC,
      inReverseTrial: tN,
      enablePremiumBrandRefresh: tR,
      isDisplayingWowMomentConfirmation: tP,
      premiumBrandRefreshBackgroundClassName: tw,
      wasTier2PremiumBeforePurchase: es,
      customCheckoutFlow: el,
      shouldShowSeptemberMarketingMomentBanner: tL
    }),
    children: (0, r.jsx)(a.Elements, {
      options: V.OBo,
      stripe: ec,
      children: ee
    })
  })
}