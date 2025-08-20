/** Chunk was on web.js **/
/** chunk id: 710094, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  l: () => L
}), require("./388685.js"), require("./415506.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
  Chunk330726 = require("./330726.js"),
  Chunk711459 = require("./711459.js"),
  Chunk717401 = require("./717401.js"),
  Chunk104494 = require("./104494.js"),
  Chunk639119 = require("./639119.js"),
  Chunk716534 = require("./716534.jsx"),
  Chunk664891 = require("./664891.jsx"),
  Chunk365943 = require("./365943.js"),
  Chunk669079 = require("./669079.js"),
  Chunk987209 = require("./987209.jsx"),
  Chunk563132 = require("./563132.jsx"),
  Chunk409813 = require("./409813.js"),
  Chunk107998 = require("./107998.jsx"),
  Chunk809144 = require("./809144.jsx"),
  Chunk698708 = require("./698708.jsx"),
  Chunk844068 = require("./844068.jsx"),
  Chunk614223 = require("./614223.js"),
  Chunk481595 = require("./481595.jsx"),
  Chunk435020 = require("./435020.js"),
  Chunk51499 = require("./51499.jsx"),
  Chunk678334 = require("./678334.jsx"),
  Chunk27034 = require("./27034.jsx"),
  Chunk474936 = require("./474936.js"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk108626 = require("./108626.js");
let x = 500;

function L(e) {
  var t, n;
  let a, {
      handleStepChange: L,
      trialId: j,
      trialFooterMessageOverride: M,
      reviewWarningMessage: k,
      planGroup: U,
      openInvoiceId: G,
      analyticsData: B,
      analyticsLocation: Z,
      referralTrialOfferId: V,
      initialPlanId: F,
      subscriptionTier: H,
      handleClose: Y
    } = e,
    {
      activeSubscription: W,
      setUpdatedSubscription: K,
      contextMetadata: z,
      currencies: q,
      paymentSourceId: X,
      paymentSources: Q,
      priceOptions: J,
      purchaseError: $,
      purchasePreviewError: ee,
      purchaseTokenAuthState: et,
      selectedPlan: en,
      selectedSkuId: er,
      setCurrency: ei,
      setPaymentSourceId: ea,
      setPurchaseState: eo,
      setPurchaseError: es,
      step: el,
      purchaseState: ec,
      isPremium: eu,
      setHasAcceptedTerms: ed,
      purchaseType: ef,
      setEntitlementsGranted: e_,
      setAppliedUserDiscounts: ep,
      startedPaymentFlowWithPaymentSourcesRef: eh,
      invoicePreview: em,
      inReverseTrial: eg,
      enablePremiumBrandRefresh: eE
    } = (0, g.JL)(),
    {
      isGift: eb,
      giftMessage: ey,
      giftRecipient: eO,
      claimableRewards: ev
    } = (0, m.wD)(),
    {
      paymentModalBanner: eI
    } = (0, b.zb)();
  o()(null != el, "Step should be set");
  let eT = i.useRef(null),
    [eS, eA] = (0, s.Z)(false, x);
  i.useEffect(() => {
    (0, p.t)()
  }, []);
  let eC = null != (n = null != j ? j : V) ? n : null,
    eN = null != eC && (!eu || R.nG[eC].skus.includes(er)) ? eC : null,
    eR = (0, d.N)(V),
    eP = (0, u.Ng)(),
    ew = {
      user_trial_offer_id: null == eR ? true : eR.id
    };
  i.useEffect(() => {
    null != $ && null != eT.current && eT.current.scrollIntoView({
      behavior: "smooth"
    })
  }, [$]);
  let eD = i.useCallback((e, t, n) => {
      K(e), null != t && e_(t), null != n && ep(n), L(E.h8.CONFIRM, {
        fulfillment: {
          subscription: e,
          entitlements: t
        }
      })
    }, [L, K, e_, ep]),
    ex = (0, S.m)(Q, X),
    eL = null != en && R.o4.has(en.id) && null != ex && !(0, l.aQ)(ex) ? Error(w.intl.string(w.t["2ik8io"])) : null,
    ej = i.useRef(null),
    [eM, ek] = i.useState(null),
    eU = !eb && null != eR && null != er && R.nG[eR.trial_id].skus.includes(er),
    eG = null == eP || null == (t = eP.discount) ? true : t.plan_ids,
    eB = !eb && null != eP && null != eG && null != en && eG.includes(en.id),
    eZ = eb && (0, h.pO)(eO),
    eV = null == F && null == H && ef === P.GZ.SUBSCRIPTION,
    eF = (0, I.Kp)({
      isTrial: eU,
      isGift: eb,
      selectedSkuId: er,
      startedPaymentFlowWithPaymentSources: eh.current
    }),
    eH = eb && ef === P.GZ.ONE_TIME,
    eY = eH || (eF ? eV && eu : eu),
    eW = (0, c.id)(en, eb, ev),
    eK = i.useCallback(() => eF ? void L(E.h8.SKU_SELECT) : eW ? void L(E.h8.SELECT_FREE_SKU) : eH ? L(E.h8.GIFT_CUSTOMIZATION) : L(E.h8.PLAN_SELECT), [L, eF, eH, eW]),
    ez = false,
    eq = () => {
      L(E.h8.ADD_PAYMENT_STEPS)
    };
  return ef === P.GZ.ONE_TIME ? (ez = null != ee, a = (0, r.jsx)(T.Z, {
    hasLegalTermsFlash: eS,
    legalTermsNodeRef: ej,
    onPaymentSourceChange: e => ea(null != e ? e.id : null),
    handlePaymentSourceAdd: () => L(E.h8.ADD_PAYMENT_STEPS)
  })) : (ez = null == em || !eb && null != ex && ef === P.GZ.SUBSCRIPTION && eU && !ex.canRedeemTrial(), null == W || eg || eb ? (o()(null != en, "Expected plan to be selected"), a = (0, r.jsx)(f.Z, {
    selectedPlanId: en.id,
    planGroup: U,
    paymentSources: Q,
    onPaymentSourceChange: e => ea(null != e ? e.id : null),
    priceOptions: J,
    currencies: q,
    onCurrencyChange: e => ei(e),
    handlePaymentSourceAdd: () => L(E.h8.ADD_PAYMENT_STEPS),
    setHasAcceptedTerms: ed,
    legalTermsNodeRef: ej,
    hasLegalTermsFlash: eS,
    trialId: eN,
    trialFooterMessageOverride: M,
    reviewWarningMessage: k,
    purchaseState: ec,
    referralTrialOfferId: V,
    isTrial: eU || null != j && null != M,
    isDiscount: eB,
    handleClose: Y
  })) : (o()(null != en, "Expected plan to be selected"), a = (0, r.jsx)(_.Z, {
    premiumSubscription: W,
    paymentSources: Q,
    priceOptions: J,
    onPaymentSourceChange: e => {
      ea(null != e ? e.id : null)
    },
    onPaymentSourceAdd: eq,
    planId: en.id,
    setHasAcceptedTerms: ed,
    legalTermsNodeRef: ej,
    hasLegalTermsFlash: eS,
    onInvoiceError: e => ek(e),
    planGroup: U,
    currencies: q,
    onCurrencyChange: e => ei(e),
    hasOpenInvoice: null != G,
    purchaseState: ec,
    handleClose: Y
  }))), (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(y.P, {
      giftMessage: ey
    }), !eZ && (0, r.jsx)(A.Z, {
      isEligibleForTrial: eU
    }), (0, r.jsxs)(N.C3, {
      children: [eE && eF && (0, r.jsx)("div", {
        className: D.bodyGradientPadding
      }), null != eI && eI, (0, r.jsx)(v.Z, {}), (0, r.jsx)(O.Z, {}), a]
    }), (0, r.jsx)(N.O3, {
      children: (0, r.jsx)(C.Z, {
        premiumSubscription: null != W ? W : null,
        setPurchaseState: eo,
        onBack: eK,
        onNext: eD,
        onPurchaseError: e => es(e),
        legalTermsNodeRef: ej,
        flashLegalTerms: () => eA(true),
        invoiceError: eM,
        planError: eL,
        analyticsLocation: Z,
        baseAnalyticsData: B,
        flowStartTime: z.startTime,
        trialId: eN,
        planGroup: U,
        purchaseTokenAuthState: et,
        openInvoiceId: G,
        backButtonEligible: eY,
        metadata: ew,
        isTrial: eU,
        disablePurchase: ez,
        onPaymentSourceAdd: eq
      })
    })]
  })
}