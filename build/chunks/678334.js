/** Chunk was on web.js **/
"use strict";
n.d(t, {
  Z: () => T
}), n(47120);
var r = n(200651),
  i = n(192379),
  o = n(512722),
  a = n.n(o),
  s = n(481060),
  l = n(906732),
  c = n(600164),
  u = n(717401),
  d = n(160913),
  f = n(311821),
  _ = n(459965),
  p = n(858987),
  h = n(855775),
  m = n(669079),
  g = n(74538),
  E = n(987209),
  v = n(563132),
  b = n(632580),
  y = n(919778),
  O = n(612853),
  I = n(981631),
  S = n(218586);

function T(e) {
  let {
    premiumSubscription: t,
    setPurchaseState: n,
    onBack: o,
    onNext: T,
    legalTermsNodeRef: N,
    flashLegalTerms: A,
    invoiceError: C,
    planError: R,
    onPurchaseError: P,
    baseAnalyticsData: w,
    flowStartTime: D,
    trialId: L,
    planGroup: x,
    analyticsLocation: M,
    purchaseTokenAuthState: k,
    openInvoiceId: j,
    metadata: U,
    backButtonEligible: G,
    disablePurchase: B,
    isTrial: V = !1
  } = e, {
    selectedPlan: F,
    priceOptions: Z,
    setHasAcceptedTerms: H,
    setPurchaseError: W,
    purchaseType: Y,
    paymentSourceId: K,
    paymentSources: z,
    selectedSkuId: q,
    skusById: Q,
    skuPricePreviewsById: X,
    referralCode: J,
    contextMetadata: $,
    invoicePreview: ee,
    inReverseTrial: et
  } = (0, v.JL)(), {
    isGift: en,
    selectedGiftStyle: er,
    customGiftMessage: ei,
    emojiConfetti: eo,
    soundEffect: ea,
    giftRecipient: es,
    selectedGiftingPromotionReward: el
  } = (0, E.wD)(), ec = (0, u.a5)(F), eu = (0, m.MY)(es), ed = {};
  ed.gift_style = er, ed.reward_sku_ids = ec && (null == el ? void 0 : el.skuId) != null ? [null == el ? void 0 : el.skuId] : [], eu === m.xr.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD && (a()(null != es, "Gift recipient must be set at purchase review step for these gift options."), ed.recipient_id = es.id, ed.custom_message = ei, ed.emoji_id = null == eo ? void 0 : eo.id, ed.emoji_name = (null == eo ? void 0 : eo.id) == null ? null == eo ? void 0 : eo.surrogates : void 0, ed.sound_id = null == ea ? void 0 : ea.soundId);
  let ef = null == F ? void 0 : F.id,
    e_ = (0, y.sE)(L, Z.paymentSourceId, ef),
    {
      analyticsLocations: ep
    } = (0, l.ZP)(),
    eh = null != K ? z[K] : null,
    [em, eg] = i.useState(e_),
    [eE, ev] = i.useState(!1),
    {
      hasEntitlements: eb
    } = (0, _.H)(ef, en),
    ey = (0, g.Ap)(Z.paymentSourceId),
    eO = eb || e_,
    eI = (0, d.U)(),
    eS = null,
    eT = null;
  if (Y === I.GZQ.ONE_TIME) {
    var eN;
    a()(null != q, "SKU must be selected for one-time purchases"), eS = null !== (eN = Q[q]) && void 0 !== eN ? eN : null, a()(null != eS, "SKU must exist and be fetched.");
    let e = X[q],
      t = null != K ? K : h.c;
    eT = null != e ? e[t] : null
  }
  let eA = async () => {
    await (0, b.H)({
      setPurchaseState: n,
      setHasAcceptedTerms: H,
      setIsSubmitting: eg,
      setPurchaseError: W,
      hasRedirectURL: eE,
      setHasRedirectURL: ev,
      isGift: en,
      baseAnalyticsData: w,
      analyticsLocation: M,
      analyticsLocations: ep,
      flowStartTime: D,
      subscriptionPlan: F,
      planGroup: x,
      trialId: L,
      priceOptions: Z,
      paymentSource: eh,
      isPrepaidPaymentPastDue: eI,
      openInvoiceId: j,
      premiumSubscription: t,
      onNext: T,
      metadata: U,
      sku: eS,
      skuPricePreview: eT,
      purchaseType: Y,
      referralCode: J,
      loadId: $.loadId,
      giftInfoOptions: ed,
      invoicePreview: ee
    })
  }, eC = {
    baseAnalyticsData: w,
    flowStartTime: D,
    makePurchase: eA,
    onNext: T,
    onPurchaseError: P,
    paymentSource: eh,
    paymentSourceId: K,
    purchaseTokenAuthState: k,
    setPurchaseState: n
  }, eR = i.useRef(eC);
  i.useEffect(() => {
    eR.current = eC
  }), i.useEffect(() => {
    let {
      makePurchase: e
    } = eR.current;
    e_ && !en && null == t && e()
  }, [e_, en, t]);
  let eP = null != j || Y === I.GZQ.ONE_TIME && !en;
  return e_ ? null : (0, r.jsxs)(s.mzw, {
    align: c.Z.Align.CENTER,
    children: [(0, r.jsx)(p.Z, {
      legalTermsNodeRef: N,
      invoiceError: C,
      planError: R,
      disablePurchase: B,
      flashLegalTerms: A,
      isSubmitting: em,
      premiumSubscription: t,
      isGift: en,
      planGroup: x,
      isPrepaid: ey,
      isTrial: V,
      makePurchase: eA,
      needsPaymentSource: null == eh && !eO,
      onNext: T,
      inReverseTrial: et
    }), (0, r.jsx)(O.Z, {}), G && !eP ? (0, r.jsx)("div", {
      className: S.back,
      children: (0, r.jsx)(f.Z, {
        onClick: o
      })
    }) : null]
  })
}