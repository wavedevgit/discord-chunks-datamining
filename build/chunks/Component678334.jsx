/** Chunk was on web.js **/
/** chunk id: 678334, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => P
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

function P(e) {
  let {
    premiumSubscription: t,
    setPurchaseState: n,
    onBack: a,
    onNext: s,
    legalTermsNodeRef: P,
    flashLegalTerms: D,
    invoiceError: w,
    planError: L,
    onPurchaseError: x,
    baseAnalyticsData: M,
    flowStartTime: k,
    trialId: j,
    planGroup: U,
    analyticsLocation: G,
    purchaseTokenAuthState: B,
    openInvoiceId: Z,
    metadata: F,
    backButtonEligible: V,
    disablePurchase: H,
    isTrial: Y = false,
    onPaymentSourceAdd: W
  } = e, {
    selectedPlan: K,
    priceOptions: z,
    setHasAcceptedTerms: q,
    setPurchaseError: X,
    purchaseType: Q,
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
    giftRecipient: e_,
    selectedGiftingPromotionReward: ep
  } = (0, O.wD)(), eh = (0, _.a5)(K), em = (0, b.MY)(e_), eg = {};
  eg.gift_style = ec, eg.reward_sku_ids = eh && (null == ep ? true : ep.skuId) != null ? [null == ep ? true : ep.skuId] : [], em === b.xr.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD && (l()(null != e_, "Gift recipient must be set at purchase review step for these gift options."), eg.recipient_id = e_.id, eg.custom_message = eu, eg.emoji_id = null == ed ? true : ed.id, eg.emoji_name = (null == ed ? true : ed.id) == null ? null == ed ? true : ed.surrogates : true, eg.sound_id = null == ef ? true : ef.soundId);
  let eE = null == K ? true : K.id,
    eb = (0, T.sE)(j, z.paymentSourceId, eE),
    {
      analyticsLocations: ey
    } = (0, d.ZP)(),
    eO = (0, A.m)($, J),
    [ev, eI] = i.useState(eb),
    [eT, eS] = i.useState(false),
    {
      hasEntitlements: eA
    } = (0, m.H)(eE, el),
    eC = (0, y.Ap)(z.paymentSourceId),
    eN = eA || eb,
    eR = (0, p.U)(),
    eP = (0, c.e7)([S.Z], () => S.Z.currentOrderId),
    eD = null,
    ew = null;
  if (Q === N.GZQ.ONE_TIME) {
    var eL;
    l()(null != ee, "SKU must be selected for one-time purchases"), eD = null != (eL = et[ee]) ? eL : null, l()(null != eD, "SKU must exist and be fetched.");
    let e = en[ee],
      t = null != J ? J : E.c;
    ew = null != e ? e[t] : null
  }
  let ex = async () => {
    await (0, I.H)({
      setPurchaseState: n,
      setHasAcceptedTerms: q,
      setIsSubmitting: eI,
      setPurchaseError: X,
      hasRedirectURL: eT,
      setHasRedirectURL: eS,
      isGift: el,
      baseAnalyticsData: M,
      analyticsLocation: G,
      analyticsLocations: ey,
      flowStartTime: k,
      subscriptionPlan: K,
      planGroup: U,
      trialId: j,
      priceOptions: z,
      paymentSource: eO,
      isPrepaidPaymentPastDue: eR,
      openInvoiceId: Z,
      premiumSubscription: t,
      onNext: s,
      metadata: F,
      sku: eD,
      skuPricePreview: ew,
      purchaseType: Q,
      referralCode: er,
      loadId: ei.loadId,
      giftInfoOptions: eg,
      invoicePreview: ea,
      orderId: eP
    })
  }, eM = {
    baseAnalyticsData: M,
    flowStartTime: k,
    makePurchase: ex,
    onNext: s,
    onPurchaseError: x,
    paymentSource: eO,
    paymentSourceId: J,
    purchaseTokenAuthState: B,
    setPurchaseState: n
  }, ek = i.useRef(eM);
  i.useEffect(() => {
    ek.current = eM
  }), i.useEffect(() => {
    let {
      makePurchase: e
    } = ek.current;
    eb && !el && null == t && e()
  }, [eb, el, t]);
  let ej = null != Z || Q === N.GZQ.ONE_TIME && !el,
    eU = V && !ej;
  return eb ? null : (0, r.jsxs)(u.mzw, {
    "data-migration-pending": true,
    align: f.Z.Align.CENTER,
    className: o()(es, R.modalFooter),
    children: [(0, r.jsx)(g.Z, {
      legalTermsNodeRef: P,
      invoiceError: w,
      planError: L,
      disablePurchase: H,
      flashLegalTerms: D,
      isSubmitting: ev,
      premiumSubscription: t,
      isGift: el,
      planGroup: U,
      isPrepaid: eC,
      isTrial: Y,
      makePurchase: ex,
      needsPaymentSource: null == eO && !eN,
      onNext: s,
      inReverseTrial: eo,
      onPaymentSourceAdd: W
    }), (0, r.jsx)(C.Z, {}), eU ? (0, r.jsx)("div", {
      className: R.back,
      children: (0, r.jsx)(h.Z, {
        onClick: a
      })
    }) : null]
  })
}