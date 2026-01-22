/** Chunk was on web.js **/
/** chunk id: 312649, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => w
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk284009 = require("./284009.js"),
  l = require.n(Chunk284009),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk235986 = require("./235986.jsx"),
  Chunk810498 = require("./810498.js"),
  Chunk155984 = require("./155984.js"),
  Chunk683433 = require("./683433.jsx"),
  Chunk344159 = require("./344159.js"),
  Chunk658679 = require("./658679.jsx"),
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

function w(e) {
  let {
    premiumSubscription: t,
    setPurchaseState: n,
    onBack: a,
    onNext: o,
    legalTermsNodeRef: w,
    flashLegalTerms: P,
    invoiceError: D,
    planError: x,
    onPurchaseError: L,
    baseAnalyticsData: j,
    flowStartTime: M,
    trialId: k,
    planGroup: U,
    analyticsLocation: G,
    purchaseTokenAuthState: V,
    openInvoiceId: F,
    metadata: B,
    backButtonEligible: H,
    disablePurchase: Y,
    isTrial: W = false,
    onPaymentSourceAdd: K
  } = e, {
    selectedPlan: z,
    priceOptions: q,
    setHasAcceptedTerms: X,
    setPurchaseError: Z,
    purchaseType: Q,
    paymentSourceId: $,
    paymentSources: J,
    selectedSkuId: ee,
    skusById: et,
    skuPricePreviewsById: en,
    referralCode: er,
    contextMetadata: ei,
    invoicePreview: ea,
    inReverseTrial: es,
    premiumBrandRefreshBackgroundClassName: eo
  } = (0, A.P5)(), {
    isGift: el,
    selectedGiftStyle: ec,
    customGiftMessage: eu,
    emojiConfetti: ed,
    soundEffect: ef,
    giftRecipient: ep,
    selectedGiftingPromotionReward: e_
  } = (0, O.Pv)(), eh = (0, p.Mq)(z), em = (0, b.lo)(ep), eg = {};
  eg.gift_style = ec, eg.reward_sku_ids = eh && (null == e_ ? true : e_.skuId) != null ? [null == e_ ? true : e_.skuId] : [], em === b.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD && (l()(null != ep, "Gift recipient must be set at purchase review step for these gift options."), eg.recipient_id = ep.id, eg.custom_message = eu, eg.emoji_id = null == ed ? true : ed.id, eg.emoji_name = (null == ed ? true : ed.id) == null ? null == ed ? true : ed.surrogates : true, eg.sound_id = null == ef ? true : ef.soundId);
  let eE = null == z ? true : z.id,
    eb = (0, S.$o)(k, q.paymentSourceId, eE),
    {
      analyticsLocations: ey
    } = (0, d.Ay)(),
    eO = (0, T.W)(J, $),
    [eA, ev] = i.useState(eb),
    [eS, eI] = i.useState(false),
    {
      hasEntitlements: eT
    } = (0, m.X)(eE, el),
    eC = (0, y.J$)(q.paymentSourceId),
    eN = eT || eb,
    eR = (0, _.l)(),
    ew = (0, c.bG)([I.A], () => I.A.currentOrderId),
    eP = null,
    eD = null;
  if (Q === N.VVm.ONE_TIME) {
    var ex;
    l()(null != ee, "SKU must be selected for one-time purchases"), eP = null != (ex = et[ee]) ? ex : null, l()(null != eP, "SKU must exist and be fetched.");
    let e = en[ee],
      t = null != $ ? $ : E.B;
    eD = null != e ? e[t] : null
  }
  let eL = async () => {
    await (0, v.l)({
      setPurchaseState: n,
      setHasAcceptedTerms: X,
      setIsSubmitting: ev,
      setPurchaseError: Z,
      hasRedirectURL: eS,
      setHasRedirectURL: eI,
      isGift: el,
      baseAnalyticsData: j,
      analyticsLocation: G,
      analyticsLocations: ey,
      flowStartTime: M,
      subscriptionPlan: z,
      planGroup: U,
      trialId: k,
      priceOptions: q,
      paymentSource: eO,
      isPrepaidPaymentPastDue: eR,
      openInvoiceId: F,
      premiumSubscription: t,
      onNext: o,
      metadata: B,
      sku: eP,
      skuPricePreview: eD,
      purchaseType: Q,
      referralCode: er,
      loadId: ei.loadId,
      giftInfoOptions: eg,
      invoicePreview: ea,
      orderId: ew
    })
  }, ej = {
    baseAnalyticsData: j,
    flowStartTime: M,
    makePurchase: eL,
    onNext: o,
    onPurchaseError: L,
    paymentSource: eO,
    paymentSourceId: $,
    purchaseTokenAuthState: V,
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
  let ek = null != F || Q === N.VVm.ONE_TIME && !el,
    eU = H && !ek;
  return eb ? null : (0, r.jsxs)(u.jlY, {
    "data-migration-pending": true,
    align: f.A.Align.CENTER,
    className: s()(eo, R.H),
    children: [(0, r.jsx)(g.A, {
      legalTermsNodeRef: w,
      invoiceError: D,
      planError: x,
      disablePurchase: Y,
      flashLegalTerms: P,
      isSubmitting: eA,
      premiumSubscription: t,
      isGift: el,
      planGroup: U,
      isPrepaid: eC,
      isTrial: W,
      makePurchase: eL,
      needsPaymentSource: null == eO && !eN,
      onNext: o,
      inReverseTrial: es,
      onPaymentSourceAdd: K
    }), (0, r.jsx)(C.A, {}), eU ? (0, r.jsx)("div", {
      className: R.a,
      children: (0, r.jsx)(h.A, {
        onClick: a
      })
    }) : null]
  })
}