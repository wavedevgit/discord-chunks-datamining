/** Chunk was on web.js **/
/** chunk id: 156312, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  P5: () => ee,
  PaymentContextProvider: () => en,
  Qv: () => J
}), require("./896048.js"), require("./938796.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk342393 = require("./342393.js"),
  Chunk989349 = require("./989349.js"),
  o = require.n(Chunk989349),
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
  Chunk26279 = require("./26279.js"),
  Chunk652215 = require("./652215.js"),
  Chunk788868 = require("./788868.js"),
  Chunk898772 = require("./898772.js");

function X(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function Z(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      X(e, t, n[t])
    })
  }
  return e
}

function Q(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Q(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let [J, ee, et] = (0, Chunk786300.A)();

function en(e) {
  var t, n, s, N;
  let {
    loadId: X,
    activeSubscription: Q,
    stepConfigs: ee,
    breadcrumbs: et = [],
    skuIDs: en,
    isGift: er = false,
    children: ei,
    defaultPlanId: ea,
    purchaseType: es = K.VVm.SUBSCRIPTION,
    applicationId: eo,
    referralCode: el,
    paymentGateway: ec,
    excludeSubscriptionPlansBySKU: eu = false,
    excludeSKUPurchasePreviews: ed = false,
    wasTier2PremiumBeforePurchase: ef = false,
    referralTrialOfferId: ep
  } = e, e_ = (0, H.A)(), eh = (0, m.H)(), em = (0, j.A)(), eg = en[0], eE = (0, u.bG)([T.A], () => T.A.get(eg), [eg]), eb = null == eE ? true : eE.eligiblePaymentGateways, {
    paymentSources: ey,
    hasPaymentSources: eO,
    paymentSourceId: eA,
    setPaymentSourceId: ev,
    hasFetchedPaymentSources: eS
  } = (0, M.A)({
    isGift: er,
    activeSubscription: Q,
    eligiblePaymentGateways: eb
  }), eI = i.useRef(eO), {
    hasFetchedSubscriptionPlans: eT,
    priceOptions: eC,
    setCurrency: eN,
    currencyLoading: eR,
    currencies: ew
  } = (0, L.A)({
    activeSubscription: Q,
    skuIDs: en,
    paymentSourceId: eA,
    isGift: er,
    excludeSubscriptionPlansBySKU: eu
  }), eP = (0, V.A)(), [eD, ex] = i.useState(false), {
    step: eL,
    setStep: ej,
    steps: eM,
    breadcrumbsData: ek,
    previousStepRef: eU
  } = (0, B.A)({
    stepConfigs: ee,
    breadcrumbs: et
  }), [eG, eV] = (0, G.A)(eL), {
    paymentError: eF,
    paymentAuthenticationState: eB
  } = (0, k.A)(), {
    purchaseError: eH,
    purchaseErrorBlockRef: eY,
    setPurchaseError: eW
  } = (0, U.A)(), eK = (0, d.A)(() => {
    let e = null != X ? X : (0, l.A)();
    return w.A.addBreadcrumb({
      message: "Checkout session ID: ".concat(e)
    }), {
      loadId: e,
      startTime: Date.now()
    }
  }), {
    selectedSkuId: ez,
    selectedPlan: eq,
    selectedPlanNotification: eX,
    setSelectedSkuId: eZ,
    setSelectedPlanId: eQ,
    setSelectedPlanNotification: e$
  } = (0, P.A)(), [eJ, e0] = (0, u.yK)([S.A], () => [S.A.purchaseTokenAuthState, S.A.purchaseTokenHash]), [e1, e2, e3, e6] = (0, u.yK)([Y.A], () => [Y.A.browserCheckoutState, Y.A.loadId, Y.A.skuId, Y.A.planId]), [e4, e5] = i.useState(null), [e7, e8] = i.useState(null), [e9, te] = i.useState(null), [tt, tn] = i.useState(null), [tr, ti] = i.useState(null), [ta, ts] = i.useState(true), [to, tl] = i.useState([]), [tc, tu] = i.useState([]), td = i.useMemo(() => null == eq || (0, R.ys)(eq.id), [eq]), tf = i.useRef(null != Q ? Q.planId : null);
  i.useEffect(() => {
    null == tf.current && null != Q && (tf.current = Q.planId)
  }, [Q]);
  let {
    endsAt: tp
  } = (0, g.A)({
    forceFetch: false,
    excludeReverseTrial: true
  }), t_ = i.useRef(tp.isSame(o()(0)) ? null : tp);
  i.useEffect(() => {
    null != t_.current || tp.isSame(o()(0)) || (t_.current = tp)
  }, [tp]);
  let th = i.useMemo(() => ({
    paymentSourceId: eA,
    paymentGateway: ec,
    loadId: X
  }), [eA, ec, X]);
  (0, x.A)(eg, th);
  let {
    skusById: tm,
    hasFetchedSkus: tg,
    skuPricePreviewsById: tE,
    previewErrorsById: tb
  } = (0, F.A)({
    applicationId: null != eo ? eo : z.tv,
    skuIDs: en,
    currentPaymentSourceId: eA,
    isGift: er,
    excludeSKUPurchasePreviews: ed
  }), ty = tm[null != ez ? ez : ""], tO = null != ez ? tb[ez] : null, [tA, tv] = i.useState(tO), tS = i.useMemo(() => {
    if (null == ez) return null;
    let e = tE[ez];
    return null == e ? null : e[null != eA ? eA : I.B]
  }, [ez, tE, eA]), {
    data: tI
  } = (0, h.YY)(eo), tT = v.Q_.useSetting(), tC = (0, u.bG)([f.A], () => f.A.getFetchState());
  i.useEffect(() => {
    null != tI && (0, c.Lt)(tI.flags, K.gfo.EMBEDDED) && tT && null == tC && (0, p.SE)()
  }, [tI, tT, tC]);
  let tN = (0, c.Lt)(null != (t = null == tI ? true : tI.flags) ? t : 0, K.gfo.EMBEDDED) && (0, c.Lt)(null != (n = null == tI ? true : tI.flags) ? n : 0, K.gfo.EMBEDDED_IAP),
    tR = (0, u.bG)([_.Ay], () => Array.from(_.Ay.getSelfEmbeddedActivities().values()).find(e => {
      let {
        applicationId: t
      } = e;
      return t === eo
    })),
    tw = null == tR ? true : tR.compositeInstanceId,
    tP = (0, u.bG)([C.A], () => null != ez ? C.A.getForSKU(ez) : null, [ez]),
    [tD, tx] = i.useState(null),
    tL = null != (s = null == Q ? true : Q.inReverseTrial) && s && !er,
    tj = (0, y.A)({
      location: "PaymentModal"
    }) && td,
    {
      isDisplayingWowMomentConfirmation: tM
    } = (0, u.cf)([b.A], () => ({
      isDisplayingWowMomentConfirmation: b.A.isDisplayingWowMomentConfirmation
    })),
    tk = tj ? q.Ot : true,
    {
      enabled: tU
    } = (0, E.Y)({
      location: "PaymentContext"
    }),
    tG = (0, D.uR)({
      location: "PaymentModal"
    }),
    tV = i.useMemo(() => {
      if (tG) return W.uH.APPLE_PAYMENT_LINK
    }, [tG]),
    tF = i.useMemo(() => null != eq && eq.id === z.gD.PREMIUM_GROUP_MONTH, [eq]),
    tB = (0, A.V)(null != ep ? ep : true),
    tH = !tF && !er && null != tB && null != ez && z.TP[tB.trial_id].skus.includes(ez),
    tY = (0, O.O)(),
    tW = null == tY || null == (N = tY.discount) ? true : N.plan_ids.some(e => z.hd[e].skuId === ez),
    tK = !!(!tF && !er && null != tY && null != ez && tW);
  return (0, r.jsx)(J.Provider, {
    value: $(Z({
      stripe: e_,
      paymentElementsEnabled: tU,
      contextMetadata: eK,
      blockedPayments: eh,
      activeSubscription: Q,
      hasFetchedSubscriptions: em,
      hasFetchedSubscriptionPlans: eT,
      updatedSubscription: tt,
      setUpdatedSubscription: tn,
      subscriptionMetadataRequest: tr,
      setSubscriptionMetadataRequest: ti,
      hasFetchedPaymentSources: eS,
      paymentSources: ey,
      hasPaymentSources: eO,
      paymentSourceId: eA,
      setPaymentSourceId: ev,
      priceOptions: eC,
      setCurrency: eN,
      currencyLoading: eR,
      currencies: ew
    }, eP), {
      hasAcceptedTerms: eD,
      setHasAcceptedTerms: ex,
      step: eL,
      setStep: ej,
      steps: eM,
      stepConfigs: ee,
      breadcrumbs: ek,
      previousStepRef: eU,
      purchaseState: eG,
      setPurchaseState: eV,
      paymentAuthenticationState: eB,
      paymentError: eF,
      purchaseError: eH,
      setPurchaseError: eW,
      purchasePreviewError: tA,
      setPurchasePreviewError: tv,
      purchaseErrorBlockRef: eY,
      purchaseTokenAuthState: eJ,
      purchaseTokenHash: e0,
      browserCheckoutState: e1,
      browserCheckoutStateLoadId: e2,
      browserCheckoutStateSkuId: e3,
      browserCheckoutStatePlanId: e6,
      bodyNode: e4,
      setBodyNode: e5,
      footerNode: e7,
      setFooterNode: e8,
      modalOverlayNode: e9,
      setModalOverlayNode: te,
      selectedSkuId: ez,
      selectedSku: ty,
      selectedStoreListing: tP,
      selectedPlan: eq,
      setSelectedSkuId: eZ,
      setSelectedPlanId: eQ,
      selectedPlanNotification: eX,
      setSelectedPlanNotification: e$,
      readySlideId: ta,
      setReadySlideId: ts,
      defaultPlanId: ea,
      isPremium: td,
      isGift: er,
      startingFractionalPremiumEndsAtRef: t_,
      startedPaymentFlowWithPaymentSourcesRef: eI,
      startingPremiumSubscriptionPlanIdRef: tf,
      hasFetchedSkus: tg,
      skusById: tm,
      skuPricePreviewsById: tE,
      selectedSkuPricePreview: tS,
      application: tI,
      purchaseType: es,
      isEmbeddedIAP: tN,
      activitySessionId: tw,
      devShelfFetchState: tC,
      entitlementsGranted: to,
      setEntitlementsGranted: tl,
      appliedUserDiscounts: tc,
      setAppliedUserDiscounts: tu,
      referralCode: el,
      invoicePreview: tD,
      setInvoicePreview: tx,
      inReverseTrial: tL,
      enablePremiumBrandRefresh: tj,
      isDisplayingWowMomentConfirmation: tM,
      premiumBrandRefreshBackgroundClassName: tk,
      wasTier2PremiumBeforePurchase: ef,
      customCheckoutFlow: tV,
      isPremiumGroupPurchase: tF,
      isEligibleForTrial: tH,
      isEligibleForDiscount: tK,
      userTrialOffer: tB,
      referralTrialOfferId: ep,
      discountOffer: tY
    }),
    children: (0, r.jsx)(a.Elements, {
      options: K.XL8,
      stripe: e_,
      children: ei
    })
  })
}