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
  _ = n(664891),
  p = n(911367),
  h = n(669079),
  m = n(987209),
  g = n(563132),
  E = n(409813),
  v = n(107998),
  b = n(809144),
  y = n(698708),
  O = n(844068),
  I = n(614223),
  S = n(481595),
  T = n(51499),
  N = n(678334),
  A = n(614277),
  C = n(474936),
  R = n(231338),
  P = n(388032);
let w = 500;

function D(e) {
  var t, n;
  let o, {
      handleStepChange: D,
      trialId: L,
      trialFooterMessageOverride: x,
      reviewWarningMessage: M,
      planGroup: k,
      openInvoiceId: j,
      analyticsData: U,
      analyticsLocation: G,
      referralTrialOfferId: B,
      initialPlanId: V,
      subscriptionTier: F,
      handleClose: Z
    } = e,
    {
      activeSubscription: H,
      setUpdatedSubscription: W,
      contextMetadata: Y,
      currencies: K,
      paymentSourceId: z,
      paymentSources: q,
      priceOptions: Q,
      purchaseError: X,
      purchasePreviewError: J,
      purchaseTokenAuthState: $,
      selectedPlan: ee,
      selectedSkuId: et,
      setCurrency: en,
      setPaymentSourceId: er,
      setPurchaseState: ei,
      setPurchaseError: eo,
      step: ea,
      purchaseState: es,
      isPremium: el,
      setHasAcceptedTerms: ec,
      purchaseType: eu,
      setEntitlementsGranted: ed,
      startedPaymentFlowWithPaymentSourcesRef: ef,
      invoicePreview: e_,
      inReverseTrial: ep
    } = (0, g.JL)(),
    {
      isGift: eh,
      giftMessage: em,
      giftRecipient: eg,
      claimableRewards: eE
    } = (0, m.wD)(),
    {
      planSelectBanner: ev
    } = (0, v.zb)();
  a()(null != ea, "Step should be set");
  let eb = i.useRef(null),
    [ey, eO] = (0, s.Z)(!1, w);
  (0, p.t)();
  let eI = null !== (n = null != L ? L : B) && void 0 !== n ? n : null,
    eS = null != eI && (!el || C.nG[eI].skus.includes(et)) ? eI : null,
    eT = (0, d.N)(B),
    eN = (0, u.Ng)(),
    eA = {
      user_trial_offer_id: null == eT ? void 0 : eT.id
    };
  i.useEffect(() => {
    null != X && null != eb.current && eb.current.scrollIntoView({
      behavior: "smooth"
    })
  }, [X]);
  let eC = i.useCallback((e, t) => {
      W(e), null != t && ed(t), D(E.h8.CONFIRM, {
        fulfillment: {
          subscription: e,
          entitlements: t
        }
      })
    }, [D, W, ed]),
    eR = null != z ? q[z] : null,
    eP = null != ee && C.o4.has(ee.id) && null != eR && !(0, l.aQ)(eR) ? Error(P.NW.string(P.t["2ik8io"])) : null,
    ew = i.useRef(null),
    [eD, eL] = i.useState(null),
    ex = !eh && null != eT && null != et && C.nG[eT.trial_id].skus.includes(et),
    eM = null == eN ? void 0 : null === (t = eN.discount) || void 0 === t ? void 0 : t.plan_ids,
    ek = !eh && null != eN && null != eM && null != ee && eM.includes(ee.id),
    ej = eh && (0, h.pO)(eg),
    eU = null == V && null == F && eu === R.GZ.SUBSCRIPTION,
    eG = (0, I.Kp)({
      isTrial: ex,
      isGift: eh,
      selectedSkuId: et,
      startedPaymentFlowWithPaymentSources: ef.current
    }),
    eB = eh && eu === R.GZ.ONE_TIME,
    eV = eB || (eG ? eU && el : el),
    eF = (0, c.id)(ee, eh, eE),
    eZ = i.useCallback(() => {
      if (eG) {
        D(E.h8.SKU_SELECT);
        return
      }
      if (eF) {
        D(E.h8.SELECT_FREE_SKU);
        return
      }
      return eB ? D(E.h8.GIFT_CUSTOMIZATION) : D(E.h8.PLAN_SELECT)
    }, [D, eG, eB, eF]),
    eH = !1;
  return eu === R.GZ.ONE_TIME ? (eH = null != J, o = (0, r.jsx)(S.Z, {
    hasLegalTermsFlash: ey,
    legalTermsNodeRef: ew,
    onPaymentSourceChange: e => er(null != e ? e.id : null),
    handlePaymentSourceAdd: () => D(E.h8.ADD_PAYMENT_STEPS)
  })) : (eH = eh ? null == e_ : null != eR && eu === R.GZ.SUBSCRIPTION && ex && !eR.canRedeemTrial(), null == H || ep || eh ? (a()(null != ee, "Expected plan to be selected"), o = (0, r.jsx)(f.Z, {
    selectedPlanId: ee.id,
    paymentSources: q,
    onPaymentSourceChange: e => er(null != e ? e.id : null),
    priceOptions: Q,
    currencies: K,
    onCurrencyChange: e => en(e),
    handlePaymentSourceAdd: () => D(E.h8.ADD_PAYMENT_STEPS),
    setHasAcceptedTerms: ec,
    legalTermsNodeRef: ew,
    hasLegalTermsFlash: ey,
    trialId: eS,
    trialFooterMessageOverride: x,
    reviewWarningMessage: M,
    purchaseState: es,
    referralTrialOfferId: B,
    isTrial: ex || null != L && null != x,
    isDiscount: ek,
    handleClose: Z
  })) : (a()(null != ee, "Expected plan to be selected"), o = (0, r.jsx)(_.Z, {
    premiumSubscription: H,
    paymentSources: q,
    priceOptions: Q,
    onPaymentSourceChange: e => {
      er(null != e ? e.id : null)
    },
    onPaymentSourceAdd: () => {
      D(E.h8.ADD_PAYMENT_STEPS)
    },
    planId: ee.id,
    setHasAcceptedTerms: ec,
    legalTermsNodeRef: ew,
    hasLegalTermsFlash: ey,
    onInvoiceError: e => eL(e),
    planGroup: k,
    currencies: K,
    onCurrencyChange: e => en(e),
    hasOpenInvoice: null != j,
    purchaseState: es,
    handleClose: Z
  }))), (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(b.P, {
      giftMessage: em
    }), !ej && (0, r.jsx)(T.Z, {
      isEligibleForTrial: ex
    }), (0, r.jsxs)(A.C3, {
      children: [null != ev && ev, (0, r.jsx)(O.Z, {}), (0, r.jsx)(y.Z, {}), o]
    }), (0, r.jsx)(A.O3, {
      children: (0, r.jsx)(N.Z, {
        premiumSubscription: null != H ? H : null,
        setPurchaseState: ei,
        onBack: eZ,
        onNext: eC,
        onPurchaseError: e => eo(e),
        legalTermsNodeRef: ew,
        flashLegalTerms: () => eO(!0),
        invoiceError: eD,
        planError: eP,
        analyticsLocation: G,
        baseAnalyticsData: U,
        flowStartTime: Y.startTime,
        trialId: eS,
        planGroup: k,
        purchaseTokenAuthState: $,
        openInvoiceId: j,
        backButtonEligible: eV,
        metadata: eA,
        isTrial: ex,
        disablePurchase: eH
      })
    })]
  })
}