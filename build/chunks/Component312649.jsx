/** Chunk was on web.js **/
/** chunk id: 312649, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => k
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk284009 = require("./284009.js"),
  l = require.n(Chunk284009),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk608805 = require("./608805.js"),
  Chunk169797 = require("./169797.jsx"),
  Chunk235986 = require("./235986.jsx"),
  Chunk810498 = require("./810498.js"),
  Chunk155984 = require("./155984.js"),
  Chunk683433 = require("./683433.jsx"),
  Chunk344159 = require("./344159.js"),
  Chunk367921 = require("./367921.jsx"),
  Chunk79387 = require("./79387.js"),
  Chunk45938 = require("./45938.js"),
  Chunk927578 = require("./927578.js"),
  Chunk937008 = require("./937008.jsx"),
  Chunk156312 = require("./156312.jsx"),
  Chunk495263 = require("./495263.js"),
  Chunk62590 = require("./62590.js"),
  Chunk224949 = require("./224949.js"),
  Chunk216641 = require("./216641.js"),
  Chunk999784 = require("./999784.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk789129 = require("./789129.js");

function D(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function L(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      D(e, t, n[t])
    })
  }
  return e
}

function x(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function M(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : x(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let j = e => {
  let {
    showBackButton: t,
    onBackClick: n,
    selectedSkuId: i
  } = e, {
    premiumSubscription: a,
    isGift: o,
    planGroup: s,
    isPrepaid: l,
    inReverseTrial: c
  } = e, {
    buttonLabel: d,
    analyticsLocations: f,
    application: _,
    hasAcceptedTerms: h,
    paymentSourceId: m,
    activeSubscription: g,
    devShelfFetchState: E,
    hasPaymentSources: b
  } = (0, y.Ke)({
    premiumSubscription: a,
    isGift: o,
    planGroup: s,
    isPrepaid: l,
    inReverseTrial: c
  }), O = (0, y.X1)(e, {
    buttonLabel: d,
    analyticsLocations: f,
    application: _,
    hasAcceptedTerms: h,
    paymentSourceId: m,
    activeSubscription: g,
    devShelfFetchState: E,
    hasPaymentSources: b
  }), A = null != i && v.Ay.isPremiumSku(i) ? u.tvc : true;
  return (0, r.jsx)(p.cy, {
    onBackClick: t ? n : true,
    primaryButtonProps: M(L({}, O), {
      icon: A
    })
  })
};

function k(e) {
  let {
    premiumSubscription: t,
    setPurchaseState: n,
    onBack: a,
    onNext: s,
    legalTermsNodeRef: p,
    flashLegalTerms: D,
    invoiceError: x,
    planError: k,
    onPurchaseError: U,
    baseAnalyticsData: G,
    flowStartTime: F,
    trialId: V,
    planGroup: B,
    analyticsLocation: H,
    purchaseTokenAuthState: Y,
    openInvoiceId: W,
    metadata: K,
    backButtonEligible: z,
    disablePurchase: q,
    isTrial: Z = false,
    onPaymentSourceAdd: Q
  } = e, {
    selectedPlan: X,
    priceOptions: J,
    setHasAcceptedTerms: $,
    setPurchaseError: ee,
    purchaseType: et,
    paymentSourceId: en,
    paymentSources: er,
    selectedSkuId: ei,
    skusById: ea,
    skuPricePreviewsById: eo,
    referralCode: es,
    contextMetadata: el,
    invoicePreview: ec,
    inReverseTrial: eu,
    premiumBrandRefreshBackgroundClassName: ed
  } = (0, I.P5)(), {
    isGift: ef,
    selectedGiftStyle: ep,
    customGiftMessage: e_,
    emojiConfetti: eh,
    soundEffect: em,
    giftRecipient: eg,
    selectedGiftingPromotionReward: eE
  } = (0, A.Pv)(), ey = (0, h.Mq)(X), eb = (0, O.lo)(eg), eO = {};
  eO.gift_style = ep, eO.reward_sku_ids = ey && null != eE ? [eE] : [], eb === O.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD && (l()(null != eg, "Gift recipient must be set at purchase review step for these gift options."), eO.recipient_id = eg.id, eO.custom_message = e_, eO.emoji_id = null == eh ? true : eh.id, eO.emoji_name = (null == eh ? true : eh.id) == null ? null == eh ? true : eh.surrogates : true, eO.sound_id = null == em ? true : em.soundId);
  let ev = null == X ? true : X.id,
    eA = (0, T.$o)(V, J.paymentSourceId, ev),
    {
      analyticsLocations: eI
    } = (0, d.Ay)(),
    eS = (0, N.W)(er, en),
    [eT, eC] = i.useState(eA),
    [eN, ew] = i.useState(false),
    {
      hasEntitlements: eR
    } = (0, E.X)(ev, ef),
    eP = (0, v.J$)(J.paymentSourceId),
    eD = eR || eA,
    eL = (0, m.l)(),
    ex = (0, c.bG)([C.A], () => C.A.currentOrderId),
    eM = null,
    ej = null;
  if (et === R.VVm.ONE_TIME) {
    var ek, eU;
    l()(null != ei, "SKU must be selected for one-time purchases"), eM = null != (ek = ea[ei]) ? ek : null, l()(null != eM, "SKU must exist and be fetched.");
    let e = eo[ei],
      t = null != en ? en : b.B;
    ej = null != e ? null != (eU = e[t]) ? eU : e[b.B] : null
  }
  let eG = async () => {
    await (0, S.l)({
      setPurchaseState: n,
      setHasAcceptedTerms: $,
      setIsSubmitting: eC,
      setPurchaseError: ee,
      hasRedirectURL: eN,
      setHasRedirectURL: ew,
      isGift: ef,
      baseAnalyticsData: G,
      analyticsLocation: H,
      analyticsLocations: eI,
      flowStartTime: F,
      subscriptionPlan: X,
      planGroup: B,
      trialId: V,
      priceOptions: J,
      paymentSource: eS,
      isPrepaidPaymentPastDue: eL,
      openInvoiceId: W,
      premiumSubscription: t,
      onNext: s,
      metadata: K,
      sku: eM,
      skuPricePreview: ej,
      purchaseType: et,
      referralCode: es,
      loadId: el.loadId,
      giftInfoOptions: eO,
      invoicePreview: ec,
      orderId: ex
    })
  }, eF = {
    baseAnalyticsData: G,
    flowStartTime: F,
    makePurchase: eG,
    onNext: s,
    onPurchaseError: U,
    paymentSource: eS,
    paymentSourceId: en,
    purchaseTokenAuthState: Y,
    setPurchaseState: n
  }, eV = i.useRef(eF);
  i.useEffect(() => {
    eV.current = eF
  }), i.useEffect(() => {
    let {
      makePurchase: e
    } = eV.current;
    eA && !ef && null == t && e()
  }, [eA, ef, t]);
  let {
    enabled: eB
  } = (0, f.T0)({
    location: "PaymentModalReviewStepFooter"
  });
  if (eA) return null;
  let eH = null != W || et === R.VVm.ONE_TIME && !ef,
    eY = z && !eH,
    eW = {
      legalTermsNodeRef: p,
      invoiceError: x,
      planError: k,
      disablePurchase: q,
      flashLegalTerms: D,
      isSubmitting: eT,
      premiumSubscription: t,
      isGift: ef,
      planGroup: B,
      isPrepaid: eP,
      isTrial: Z,
      makePurchase: eG,
      needsPaymentSource: null == eS && !eD,
      onNext: s,
      inReverseTrial: eu,
      onPaymentSourceAdd: Q
    };
  return eB ? (0, r.jsx)(j, M(L({}, eW), {
    selectedSkuId: ei,
    showBackButton: eY,
    onBackClick: a
  })) : (0, r.jsxs)(u.jlY, {
    "data-migration-pending": true,
    align: _.A.Align.CENTER,
    className: o()(ed, P.H),
    children: [(0, r.jsx)(y.Ay, L({}, eW)), (0, r.jsx)(w.A, {}), eY ? (0, r.jsx)("div", {
      className: P.a,
      children: (0, r.jsx)(g.A, {
        onClick: a
      })
    }) : null]
  })
}