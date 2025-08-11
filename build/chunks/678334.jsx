/** Chunk was on web.js **/
/** chunk id: 678334, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => P
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  l = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk906732 = require("./906732.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk717401 = require("./717401.js"),
  Chunk160913 = require("./160913.js"),
  Chunk311821 = require("./311821.jsx"),
  Chunk459965 = require("./459965.js"),
  Chunk858987 = require("./858987.js"),
  Chunk855775 = require("./855775.js"),
  Chunk669079 = require("./669079.js"),
  Chunk74538 = require("./74538.js"),
  Chunk987209 = require("./987209.js"),
  Chunk563132 = require("./563132.jsx"),
  Chunk632580 = require("./632580.js"),
  Chunk919778 = require("./919778.js"),
  Chunk877820 = require("./877820.js"),
  Chunk435020 = require("./435020.js"),
  Chunk612853 = require("./612853.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk843856 = require("./843856.js");

function P(e) {
  let {
    premiumSubscription: t,
    setPurchaseState: n,
    onBack: o,
    onNext: s,
    legalTermsNodeRef: P,
    flashLegalTerms: w,
    invoiceError: D,
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
    invoicePreview: eo,
    inReverseTrial: ea,
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
    eN = (0, y.Ap)(z.paymentSourceId),
    eC = eA || eb,
    eR = (0, p.U)(),
    eP = (0, c.e7)([S.Z], () => S.Z.currentOrderId),
    ew = null,
    eD = null;
  if (Q === C.GZQ.ONE_TIME) {
    var eL;
    l()(null != ee, "SKU must be selected for one-time purchases"), ew = null != (eL = et[ee]) ? eL : null, l()(null != ew, "SKU must exist and be fetched.");
    let e = en[ee],
      t = null != J ? J : E.c;
    eD = null != e ? e[t] : null
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
      sku: ew,
      skuPricePreview: eD,
      purchaseType: Q,
      referralCode: er,
      loadId: ei.loadId,
      giftInfoOptions: eg,
      invoicePreview: eo,
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
  let ej = null != Z || Q === C.GZQ.ONE_TIME && !el;
  return eb ? null : <u.mzw data-migration-pending={true} align={f.Z.Align.CENTER} className={a()(es, R.modalFooter)}>{<g.Z legalTermsNodeRef={P} invoiceError={D} planError={L} disablePurchase={H} flashLegalTerms={w} isSubmitting={ev} premiumSubscription={t} isGift={el} planGroup={U} isPrepaid={eN} isTrial={Y} makePurchase={ex} needsPaymentSource={null == eO && !eC} onNext={s} inReverseTrial={ea} onPaymentSourceAdd={W} />}{<N.Z />}{V && !ej ? <div className={R.back}><h.Z onClick={o} /></div> : null}</u.mzw>
}