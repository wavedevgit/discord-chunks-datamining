/** Chunk was on web.js **/
/** chunk id: 678334, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => R
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  l = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk906732 = require("./906732.jsx"),
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
  Chunk62868 = require("./62868.js");

function R(e) {
  let {
    premiumSubscription: t,
    setPurchaseState: n,
    onBack: a,
    onNext: s,
    legalTermsNodeRef: R,
    flashLegalTerms: D,
    invoiceError: w,
    planError: x,
    onPurchaseError: L,
    baseAnalyticsData: j,
    flowStartTime: M,
    trialId: k,
    planGroup: U,
    analyticsLocation: G,
    purchaseTokenAuthState: Z,
    openInvoiceId: B,
    metadata: F,
    backButtonEligible: V,
    disablePurchase: H,
    isTrial: Y = false,
    onPaymentSourceAdd: W
  } = e, {
    selectedPlan: K,
    priceOptions: z,
    setHasAcceptedTerms: q,
    setPurchaseError: Q,
    purchaseType: X,
    paymentSourceId: J,
    paymentSources: $,
    selectedSkuId: ee,
    skusById: et,
    skuPricePreviewsById: en,
    referralCode: er,
    contextMetadata: ei,
    invoicePreview: ea,
    inReverseTrial: eo,
    premiumBrandRefreshBackgroundClassName: es
  } = (0, v.JL)(), {
    isGift: el,
    selectedGiftStyle: ec,
    customGiftMessage: eu,
    emojiConfetti: ed,
    soundEffect: ef,
    giftRecipient: ep,
    selectedGiftingPromotionReward: e_
  } = (0, O.wD)(), em = (0, p.a5)(K), eh = (0, b.MY)(ep), eg = {};
  eg.gift_style = ec, eg.reward_sku_ids = em && (null == e_ ? true : e_.skuId) != null ? [null == e_ ? true : e_.skuId] : [], eh === b.xr.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD && (l()(null != ep, "Gift recipient must be set at purchase review step for these gift options."), eg.recipient_id = ep.id, eg.custom_message = eu, eg.emoji_id = null == ed ? true : ed.id, eg.emoji_name = (null == ed ? true : ed.id) == null ? null == ed ? true : ed.surrogates : true, eg.sound_id = null == ef ? true : ef.soundId);
  let eE = null == K ? true : K.id,
    eb = (0, I.sE)(k, z.paymentSourceId, eE),
    {
      analyticsLocations: ey
    } = (0, d.ZP)(),
    eO = (0, C.m)($, J),
    [ev, eS] = i.useState(eb),
    [eI, eT] = i.useState(false),
    {
      hasEntitlements: eC
    } = (0, h.H)(eE, el),
    eA = (0, y.Ap)(z.paymentSourceId),
    eN = eC || eb,
    eP = (0, _.U)(),
    eR = (0, c.e7)([T.Z], () => T.Z.currentOrderId),
    eD = null,
    ew = null;
  if (X === N.GZQ.ONE_TIME) {
    var ex;
    l()(null != ee, "SKU must be selected for one-time purchases"), eD = null != (ex = et[ee]) ? ex : null, l()(null != eD, "SKU must exist and be fetched.");
    let e = en[ee],
      t = null != J ? J : E.c;
    ew = null != e ? e[t] : null
  }
  let eL = async () => {
    await (0, S.H)({
      setPurchaseState: n,
      setHasAcceptedTerms: q,
      setIsSubmitting: eS,
      setPurchaseError: Q,
      hasRedirectURL: eI,
      setHasRedirectURL: eT,
      isGift: el,
      baseAnalyticsData: j,
      analyticsLocation: G,
      analyticsLocations: ey,
      flowStartTime: M,
      subscriptionPlan: K,
      planGroup: U,
      trialId: k,
      priceOptions: z,
      paymentSource: eO,
      isPrepaidPaymentPastDue: eP,
      openInvoiceId: B,
      premiumSubscription: t,
      onNext: s,
      metadata: F,
      sku: eD,
      skuPricePreview: ew,
      purchaseType: X,
      referralCode: er,
      loadId: ei.loadId,
      giftInfoOptions: eg,
      invoicePreview: ea,
      orderId: eR
    })
  }, ej = {
    baseAnalyticsData: j,
    flowStartTime: M,
    makePurchase: eL,
    onNext: s,
    onPurchaseError: L,
    paymentSource: eO,
    paymentSourceId: J,
    purchaseTokenAuthState: Z,
    setPurchaseState: n
  }, eM = i.useRef(ej);
  i.useEffect(() => {
    eM.current = ej
  }), i.useEffect(() => {
    let {
      makePurchase: e
    } = eM.current;
    eb && !el && null == t && e()
  }, [eb, el, t]);
  let ek = null != B || X === N.GZQ.ONE_TIME && !el,
    eU = V && !ek;
  return eb ? null : (0, r.jsxs)(u.mzw, {
    "data-migration-pending": true,
    align: f.Z.Align.CENTER,
    className: o()(es, P.modalFooter),
    children: [(0, r.jsx)(g.Z, {
      legalTermsNodeRef: R,
      invoiceError: w,
      planError: x,
      disablePurchase: H,
      flashLegalTerms: D,
      isSubmitting: ev,
      premiumSubscription: t,
      isGift: el,
      planGroup: U,
      isPrepaid: eA,
      isTrial: Y,
      makePurchase: eL,
      needsPaymentSource: null == eO && !eN,
      onNext: s,
      inReverseTrial: eo,
      onPaymentSourceAdd: W
    }), (0, r.jsx)(A.Z, {}), eU ? (0, r.jsx)("div", {
      className: P.back,
      children: (0, r.jsx)(m.Z, {
        onClick: a
      })
    }) : null]
  })
}