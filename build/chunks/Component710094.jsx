/** Chunk was on web.js **/
/** chunk id: 710094, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  l: () => x
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
let L = 500;

function x(e) {
  var t, n;
  let a, {
      handleStepChange: x,
      trialId: M,
      trialFooterMessageOverride: k,
      reviewWarningMessage: j,
      planGroup: U,
      openInvoiceId: G,
      analyticsData: B,
      analyticsLocation: V,
      referralTrialOfferId: F,
      initialPlanId: Z,
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
    [eS, eA] = (0, s.Z)(false, L);
  i.useEffect(() => {
    (0, p.t)()
  }, []);
  let eN = null != (n = null != M ? M : F) ? n : null,
    eC = null != eN && (!eu || R.nG[eN].skus.includes(er)) ? eN : null,
    eR = (0, d.N)(F),
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
      K(e), null != t && e_(t), null != n && ep(n), x(E.h8.CONFIRM, {
        fulfillment: {
          subscription: e,
          entitlements: t
        }
      })
    }, [x, K, e_, ep]),
    eL = (0, S.m)(Q, X),
    ex = null != en && R.o4.has(en.id) && null != eL && !(0, l.aQ)(eL) ? Error(w.intl.string(w.t["2ik8io"])) : null,
    eM = i.useRef(null),
    [ek, ej] = i.useState(null),
    eU = !eb && null != eR && null != er && R.nG[eR.trial_id].skus.includes(er),
    eG = null == eP || null == (t = eP.discount) ? true : t.plan_ids,
    eB = !eb && null != eP && null != eG && null != en && eG.includes(en.id),
    eV = eb && (0, h.pO)(eO),
    eF = null == Z && null == H && ef === P.GZ.SUBSCRIPTION,
    eZ = (0, I.Kp)({
      isTrial: eU,
      isGift: eb,
      selectedSkuId: er,
      startedPaymentFlowWithPaymentSources: eh.current
    }),
    eH = eb && ef === P.GZ.ONE_TIME,
    eY = eH || (eZ ? eF && eu : eu),
    eW = (0, c.id)(en, eb, ev),
    eK = i.useCallback(() => eZ ? void x(E.h8.SKU_SELECT) : eW ? void x(E.h8.SELECT_FREE_SKU) : eH ? x(E.h8.GIFT_CUSTOMIZATION) : x(E.h8.PLAN_SELECT), [x, eZ, eH, eW]),
    ez = false,
    eq = () => {
      x(E.h8.ADD_PAYMENT_STEPS)
    };
  return ef === P.GZ.ONE_TIME ? (ez = null != ee, a = (0, r.jsx)(T.Z, {
    hasLegalTermsFlash: eS,
    legalTermsNodeRef: eM,
    onPaymentSourceChange: e => ea(null != e ? e.id : null),
    handlePaymentSourceAdd: () => x(E.h8.ADD_PAYMENT_STEPS)
  })) : (ez = null == em || !eb && null != eL && ef === P.GZ.SUBSCRIPTION && eU && !eL.canRedeemTrial(), null == W || eg || eb ? (o()(null != en, "Expected plan to be selected"), a = (0, r.jsx)(f.Z, {
    selectedPlanId: en.id,
    planGroup: U,
    paymentSources: Q,
    onPaymentSourceChange: e => ea(null != e ? e.id : null),
    priceOptions: J,
    currencies: q,
    onCurrencyChange: e => ei(e),
    handlePaymentSourceAdd: () => x(E.h8.ADD_PAYMENT_STEPS),
    setHasAcceptedTerms: ed,
    legalTermsNodeRef: eM,
    hasLegalTermsFlash: eS,
    trialId: eC,
    trialFooterMessageOverride: k,
    reviewWarningMessage: j,
    purchaseState: ec,
    referralTrialOfferId: F,
    isTrial: eU || null != M && null != k,
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
    legalTermsNodeRef: eM,
    hasLegalTermsFlash: eS,
    onInvoiceError: e => ej(e),
    planGroup: U,
    currencies: q,
    onCurrencyChange: e => ei(e),
    hasOpenInvoice: null != G,
    purchaseState: ec,
    handleClose: Y
  }))), (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(y.P, {
      giftMessage: ey
    }), !eV && (0, r.jsx)(A.Z, {
      isEligibleForTrial: eU
    }), (0, r.jsxs)(C.C3, {
      children: [eE && eZ && (0, r.jsx)("div", {
        className: D.bodyGradientPadding
      }), null != eI && eI, (0, r.jsx)(v.Z, {}), (0, r.jsx)(O.Z, {}), a]
    }), (0, r.jsx)(C.O3, {
      children: (0, r.jsx)(N.Z, {
        premiumSubscription: null != W ? W : null,
        setPurchaseState: eo,
        onBack: eK,
        onNext: eD,
        onPurchaseError: e => es(e),
        legalTermsNodeRef: eM,
        flashLegalTerms: () => eA(true),
        invoiceError: ek,
        planError: ex,
        analyticsLocation: V,
        baseAnalyticsData: B,
        flowStartTime: z.startTime,
        trialId: eC,
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