/** Chunk was on web.js **/
"use strict";
n.d(t, {
  l: () => D
}), n(47120), n(411104);
var r = n(200651),
  i = n(192379),
  o = n(512722),
  a = n.n(o),
  s = n(330726),
  l = n(711459),
  c = n(717401),
  u = n(104494),
  d = n(639119),
  f = n(716534),
  p = n(664891),
  _ = n(911367),
  h = n(669079),
  m = n(987209),
  g = n(563132),
  E = n(409813),
  v = n(809144),
  b = n(698708),
  y = n(844068),
  O = n(614223),
  S = n(481595),
  I = n(51499),
  T = n(678334),
  N = n(614277),
  A = n(474936),
  C = n(231338),
  R = n(388032);
let P = 500;

function D(e) {
  var t, n;
  let o, {
      handleStepChange: D,
      trialId: w,
      trialFooterMessageOverride: L,
      reviewWarningMessage: x,
      planGroup: M,
      openInvoiceId: k,
      analyticsData: j,
      analyticsLocation: U,
      referralTrialOfferId: G,
      initialPlanId: B,
      subscriptionTier: V,
      handleClose: F
    } = e,
    {
      activeSubscription: Z,
      setUpdatedSubscription: H,
      contextMetadata: W,
      currencies: Y,
      paymentSourceId: K,
      paymentSources: z,
      priceOptions: q,
      purchaseError: Q,
      purchasePreviewError: X,
      purchaseTokenAuthState: J,
      selectedPlan: $,
      selectedSkuId: ee,
      setCurrency: et,
      setPaymentSourceId: en,
      setPurchaseState: er,
      setPurchaseError: ei,
      step: eo,
      purchaseState: ea,
      isPremium: es,
      setHasAcceptedTerms: el,
      purchaseType: ec,
      setEntitlementsGranted: eu,
      startedPaymentFlowWithPaymentSourcesRef: ed,
      invoicePreview: ef,
      inReverseTrial: ep
    } = (0, g.JL)(),
    {
      isGift: e_,
      giftMessage: eh,
      giftRecipient: em,
      claimableRewards: eg
    } = (0, m.wD)();
  a()(null != eo, "Step should be set");
  let eE = i.useRef(null),
    [ev, eb] = (0, s.Z)(!1, P);
  (0, _.t)();
  let ey = null !== (n = null != w ? w : G) && void 0 !== n ? n : null,
    eO = null != ey && (!es || A.nG[ey].skus.includes(ee)) ? ey : null,
    eS = (0, d.N)(G),
    eI = (0, u.Ng)(),
    eT = {
      user_trial_offer_id: null == eS ? void 0 : eS.id
    };
  i.useEffect(() => {
    null != Q && null != eE.current && eE.current.scrollIntoView({
      behavior: "smooth"
    })
  }, [Q]);
  let eN = i.useCallback((e, t) => {
      H(e), null != t && eu(t), D(E.h8.CONFIRM, {
        fulfillment: {
          subscription: e,
          entitlements: t
        }
      })
    }, [D, H, eu]),
    eA = null != K ? z[K] : null,
    eC = null != $ && A.o4.has($.id) && null != eA && !(0, l.aQ)(eA) ? Error(R.NW.string(R.t["2ik8io"])) : null,
    eR = i.useRef(null),
    [eP, eD] = i.useState(null),
    ew = !e_ && null != eS && null != ee && A.nG[eS.trial_id].skus.includes(ee),
    eL = null == eI ? void 0 : null === (t = eI.discount) || void 0 === t ? void 0 : t.plan_ids,
    ex = !e_ && null != eI && null != eL && null != $ && eL.includes($.id),
    eM = e_ && (0, h.pO)(em),
    ek = null == B && null == V && ec === C.GZ.SUBSCRIPTION,
    ej = (0, O.Kp)({
      isTrial: ew,
      isGift: e_,
      selectedSkuId: ee,
      startedPaymentFlowWithPaymentSources: ed.current
    }),
    eU = e_ && ec === C.GZ.ONE_TIME,
    eG = eU || (ej ? ek && es : es),
    eB = (0, c.id)($, e_, eg),
    eV = i.useCallback(() => {
      if (ej) {
        D(E.h8.SKU_SELECT);
        return
      }
      if (eB) {
        D(E.h8.SELECT_FREE_SKU);
        return
      }
      return eU ? D(E.h8.GIFT_CUSTOMIZATION) : D(E.h8.PLAN_SELECT)
    }, [D, ej, eU, eB]),
    eF = !1;
  return ec === C.GZ.ONE_TIME ? (eF = null != X, o = (0, r.jsx)(S.Z, {
    hasLegalTermsFlash: ev,
    legalTermsNodeRef: eR,
    onPaymentSourceChange: e => en(null != e ? e.id : null),
    handlePaymentSourceAdd: () => D(E.h8.ADD_PAYMENT_STEPS)
  })) : (eF = e_ ? null == ef : null != eA && ec === C.GZ.SUBSCRIPTION && ew && !eA.canRedeemTrial(), null == Z || ep || e_ ? (a()(null != $, "Expected plan to be selected"), o = (0, r.jsx)(f.Z, {
    selectedPlanId: $.id,
    paymentSources: z,
    onPaymentSourceChange: e => en(null != e ? e.id : null),
    priceOptions: q,
    currencies: Y,
    onCurrencyChange: e => et(e),
    handlePaymentSourceAdd: () => D(E.h8.ADD_PAYMENT_STEPS),
    setHasAcceptedTerms: el,
    legalTermsNodeRef: eR,
    hasLegalTermsFlash: ev,
    trialId: eO,
    trialFooterMessageOverride: L,
    reviewWarningMessage: x,
    purchaseState: ea,
    referralTrialOfferId: G,
    isTrial: ew || null != w && null != L,
    isDiscount: ex,
    handleClose: F
  })) : (a()(null != $, "Expected plan to be selected"), o = (0, r.jsx)(p.Z, {
    premiumSubscription: Z,
    paymentSources: z,
    priceOptions: q,
    onPaymentSourceChange: e => {
      en(null != e ? e.id : null)
    },
    onPaymentSourceAdd: () => {
      D(E.h8.ADD_PAYMENT_STEPS)
    },
    planId: $.id,
    setHasAcceptedTerms: el,
    legalTermsNodeRef: eR,
    hasLegalTermsFlash: ev,
    onInvoiceError: e => eD(e),
    planGroup: M,
    currencies: Y,
    onCurrencyChange: e => et(e),
    hasOpenInvoice: null != k,
    purchaseState: ea,
    handleClose: F
  }))), (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(v.P, {
      giftMessage: eh
    }), !eM && (0, r.jsx)(I.Z, {
      isEligibleForTrial: ew
    }), (0, r.jsxs)(N.C3, {
      children: [(0, r.jsx)(y.Z, {}), (0, r.jsx)(b.Z, {}), o]
    }), (0, r.jsx)(N.O3, {
      children: (0, r.jsx)(T.Z, {
        premiumSubscription: null != Z ? Z : null,
        setPurchaseState: er,
        onBack: eV,
        onNext: eN,
        onPurchaseError: e => ei(e),
        legalTermsNodeRef: eR,
        flashLegalTerms: () => eb(!0),
        invoiceError: eP,
        planError: eC,
        analyticsLocation: U,
        baseAnalyticsData: j,
        flowStartTime: W.startTime,
        trialId: eO,
        planGroup: M,
        purchaseTokenAuthState: J,
        openInvoiceId: k,
        backButtonEligible: eG,
        metadata: eT,
        isTrial: ew,
        disablePurchase: eF
      })
    })]
  })
}