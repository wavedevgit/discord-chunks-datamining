/** Chunk was on web.js **/
/** chunk id: 678334, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => x
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  l = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk597688 = require("./597688.js"),
  Chunk445794 = require("./445794.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk717401 = require("./717401.js"),
  Chunk160913 = require("./160913.js"),
  Chunk311821 = require("./311821.jsx"),
  Chunk459965 = require("./459965.js"),
  Chunk858987 = require("./858987.jsx"),
  Chunk855775 = require("./855775.js"),
  Chunk669079 = require("./669079.js"),
  Chunk74538 = require("./74538.js"),
  Chunk987209 = require("./987209.jsx"),
  Chunk563132 = require("./563132.jsx"),
  Chunk632580 = require("./632580.js"),
  Chunk919778 = require("./919778.js"),
  Chunk877820 = require("./877820.js"),
  Chunk435020 = require("./435020.js"),
  Chunk612853 = require("./612853.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk62868 = require("./62868.js"),
  Chunk133529 = require("./133529.js");

function x(e) {
  let {
    premiumSubscription: t,
    setPurchaseState: n,
    onBack: a,
    onNext: s,
    legalTermsNodeRef: x,
    flashLegalTerms: M,
    invoiceError: k,
    planError: j,
    onPurchaseError: U,
    baseAnalyticsData: G,
    flowStartTime: B,
    trialId: Z,
    planGroup: F,
    analyticsLocation: V,
    purchaseTokenAuthState: H,
    openInvoiceId: Y,
    metadata: W,
    backButtonEligible: K,
    disablePurchase: z,
    isTrial: q = false,
    onPaymentSourceAdd: X
  } = e, {
    selectedPlan: Q,
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
  } = (0, T.JL)(), {
    isGift: ef,
    selectedGiftStyle: e_,
    customGiftMessage: ep,
    emojiConfetti: eh,
    soundEffect: em,
    giftRecipient: eg,
    selectedGiftingPromotionReward: eE
  } = (0, I.wD)(), eb = (0, h.a5)(Q), ey = (0, O.MY)(eg), eO = {};
  eO.gift_style = e_, eO.reward_sku_ids = eb && (null == eE ? true : eE.skuId) != null ? [null == eE ? true : eE.skuId] : [], ey === O.xr.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD && (l()(null != eg, "Gift recipient must be set at purchase review step for these gift options."), eO.recipient_id = eg.id, eO.custom_message = ep, eO.emoji_id = null == eh ? true : eh.id, eO.emoji_name = (null == eh ? true : eh.id) == null ? null == eh ? true : eh.surrogates : true, eO.sound_id = null == em ? true : em.soundId);
  let ev = null == Q ? true : Q.id,
    eI = (0, A.sE)(Z, J.paymentSourceId, ev),
    {
      analyticsLocations: eT
    } = (0, d.ZP)(),
    eS = (0, N.m)(er, en),
    [eA, eC] = i.useState(eI),
    [eN, eR] = i.useState(false),
    {
      hasEntitlements: eP
    } = (0, E.H)(ev, ef),
    ew = (0, v.Ap)(J.paymentSourceId),
    eD = eP || eI,
    eL = (0, m.U)(),
    ex = (0, c.e7)([C.Z], () => C.Z.currentOrderId),
    eM = null,
    ek = null;
  if (et === P.GZQ.ONE_TIME) {
    var ej;
    l()(null != ei, "SKU must be selected for one-time purchases"), eM = null != (ej = ea[ei]) ? ej : null, l()(null != eM, "SKU must exist and be fetched.");
    let e = eo[ei],
      t = null != en ? en : y.c;
    ek = null != e ? e[t] : null
  }
  let eU = (0, _.Iw)(et === P.GZQ.ONE_TIME ? f.Z.getProduct(ei) : true),
    eG = null !== eU,
    eB = async () => {
      await (0, S.H)({
        setPurchaseState: n,
        setHasAcceptedTerms: $,
        setIsSubmitting: eC,
        setPurchaseError: ee,
        hasRedirectURL: eN,
        setHasRedirectURL: eR,
        isGift: ef,
        baseAnalyticsData: G,
        analyticsLocation: V,
        analyticsLocations: eT,
        flowStartTime: B,
        subscriptionPlan: Q,
        planGroup: F,
        trialId: Z,
        priceOptions: J,
        paymentSource: eS,
        isPrepaidPaymentPastDue: eL,
        openInvoiceId: Y,
        premiumSubscription: t,
        onNext: s,
        metadata: W,
        sku: eM,
        skuPricePreview: ek,
        purchaseType: et,
        referralCode: es,
        loadId: el.loadId,
        giftInfoOptions: eO,
        invoicePreview: ec,
        orderId: ex
      })
    }, eZ = {
      baseAnalyticsData: G,
      flowStartTime: B,
      makePurchase: eB,
      onNext: s,
      onPurchaseError: U,
      paymentSource: eS,
      paymentSourceId: en,
      purchaseTokenAuthState: H,
      setPurchaseState: n
    }, eF = i.useRef(eZ);
  i.useEffect(() => {
    eF.current = eZ
  }), i.useEffect(() => {
    let {
      makePurchase: e
    } = eF.current;
    eI && !ef && null == t && e()
  }, [eI, ef, t]);
  let eV = null != Y || et === P.GZQ.ONE_TIME && !ef,
    eH = K && !eV;
  return eI ? null : (0, r.jsxs)(u.mzw, {
    "data-migration-pending": true,
    align: p.Z.Align.CENTER,
    className: o()({
      [D.modalFooterDiscount]: eG
    }, ed, D.modalFooter),
    children: [eG && (0, r.jsx)("img", {
      src: L.Z,
      alt: "",
      className: D.discountFooterBackground
    }), (0, r.jsx)(b.Z, {
      legalTermsNodeRef: x,
      invoiceError: k,
      planError: j,
      disablePurchase: z,
      flashLegalTerms: M,
      isSubmitting: eA,
      premiumSubscription: t,
      isGift: ef,
      planGroup: F,
      isPrepaid: ew,
      isTrial: q,
      makePurchase: eB,
      needsPaymentSource: null == eS && !eD,
      onNext: s,
      inReverseTrial: eu,
      onPaymentSourceAdd: X
    }), (0, r.jsx)(R.Z, {
      iconClassName: eG ? D.discountColor : null,
      textClassName: eG ? D.discountColor : null
    }), eH ? (0, r.jsx)("div", {
      className: D.back,
      children: (0, r.jsx)(g.Z, {
        onClick: a,
        className: o()({
          [D.discountColor]: eG
        })
      })
    }) : null, eG && !eH && (0, r.jsx)(u.Text, {
      variant: "text-xs/semibold",
      className: D.discountFooterText,
      lineClamp: 2,
      children: w.intl.formatToPlainString(w.t.IhKBNX, {
        discountOfferAmount: eU
      })
    })]
  })
}