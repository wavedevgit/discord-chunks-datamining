/** Chunk was on web.js **/
/** chunk id: 710094, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  l: () => M
}), require("./388685.js"), require("./415506.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
  Chunk481060 = require("./481060.js"),
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
  Chunk709113 = require("./709113.jsx"),
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
let j = 500;

function M(e) {
  var t, n;
  let o, {
      handleStepChange: M,
      trialId: k,
      trialFooterMessageOverride: U,
      reviewWarningMessage: G,
      planGroup: B,
      openInvoiceId: Z,
      analyticsData: F,
      analyticsLocation: V,
      referralTrialOfferId: H,
      initialPlanId: Y,
      subscriptionTier: W,
      handleClose: K
    } = e,
    {
      activeSubscription: z,
      setUpdatedSubscription: q,
      contextMetadata: X,
      currencies: Q,
      paymentSourceId: J,
      paymentSources: $,
      priceOptions: ee,
      purchaseError: et,
      purchasePreviewError: en,
      purchaseTokenAuthState: er,
      selectedPlan: ei,
      selectedSkuId: eo,
      setCurrency: ea,
      setPaymentSourceId: es,
      setPurchaseState: el,
      setPurchaseError: ec,
      step: eu,
      purchaseState: ed,
      isPremium: ef,
      setHasAcceptedTerms: e_,
      purchaseType: ep,
      setEntitlementsGranted: eh,
      setAppliedUserDiscounts: em,
      startedPaymentFlowWithPaymentSourcesRef: eg,
      invoicePreview: eE,
      inReverseTrial: eb,
      enablePremiumBrandRefresh: ey
    } = (0, E.JL)(),
    {
      isGift: eO,
      giftMessage: ev,
      giftRecipient: eI,
      claimableRewards: eT
    } = (0, g.wD)(),
    {
      paymentModalBanner: eS
    } = (0, y.zb)();
  a()(null != eu, "Step should be set");
  let eA = i.useRef(null),
    [eC, eN] = (0, l.Z)(false, j);
  i.useEffect(() => {
    (0, h.t)()
  }, []);
  let eR = null != (n = null != k ? k : H) ? n : null,
    eP = null != eR && (!ef || w.nG[eR].skus.includes(eo)) ? eR : null,
    ew = (0, f.N)(H),
    eD = (0, d.Ng)(),
    ex = {
      user_trial_offer_id: null == ew ? true : ew.id
    };
  i.useEffect(() => {
    null != et && null != eA.current && eA.current.scrollIntoView({
      behavior: "smooth"
    })
  }, [et]);
  let eL = i.useCallback((e, t, n) => {
      q(e), null != t && eh(t), null != n && em(n), M(b.h8.CONFIRM, {
        fulfillment: {
          subscription: e,
          entitlements: t
        }
      })
    }, [M, q, eh, em]),
    ej = (0, C.m)($, J),
    eM = null != ei && w.o4.has(ei.id) && null != ej && !(0, c.aQ)(ej) ? Error(x.intl.string(x.t["2ik8io"])) : null,
    ek = i.useRef(null),
    [eU, eG] = i.useState(null),
    eB = !eO && null != ew && null != eo && w.nG[ew.trial_id].skus.includes(eo),
    eZ = null == eD || null == (t = eD.discount) ? true : t.plan_ids,
    eF = !eO && null != eD && null != eZ && null != ei && eZ.includes(ei.id),
    eV = eO && (0, m.pO)(eI),
    eH = null == Y && null == W && ep === D.GZ.SUBSCRIPTION,
    eY = (0, S.Kp)({
      isTrial: eB,
      isGift: eO,
      selectedSkuId: eo,
      startedPaymentFlowWithPaymentSources: eg.current
    }),
    eW = eO && ep === D.GZ.ONE_TIME,
    eK = eW || (eY ? eH && ef : ef),
    ez = (0, u.id)(ei, eO, eT),
    eq = i.useCallback(() => eY ? void M(b.h8.SKU_SELECT) : ez ? void M(b.h8.SELECT_FREE_SKU) : eW ? M(b.h8.GIFT_CUSTOMIZATION) : M(b.h8.PLAN_SELECT), [M, eY, eW, ez]),
    eX = false,
    eQ = () => {
      M(b.h8.ADD_PAYMENT_STEPS)
    };
  return ep === D.GZ.ONE_TIME ? (eX = null != en, o = (0, r.jsx)(A.Z, {
    hasLegalTermsFlash: eC,
    legalTermsNodeRef: ek,
    onPaymentSourceChange: e => es(null != e ? e.id : null),
    handlePaymentSourceAdd: () => M(b.h8.ADD_PAYMENT_STEPS)
  })) : (eX = null == eE || !eO && null != ej && ep === D.GZ.SUBSCRIPTION && eB && !ej.canRedeemTrial(), null == z || eb || eO ? (a()(null != ei, "Expected plan to be selected"), o = (0, r.jsx)(_.Z, {
    selectedPlanId: ei.id,
    planGroup: B,
    paymentSources: $,
    onPaymentSourceChange: e => es(null != e ? e.id : null),
    priceOptions: ee,
    currencies: Q,
    onCurrencyChange: e => ea(e),
    handlePaymentSourceAdd: () => M(b.h8.ADD_PAYMENT_STEPS),
    setHasAcceptedTerms: e_,
    legalTermsNodeRef: ek,
    hasLegalTermsFlash: eC,
    trialId: eP,
    trialFooterMessageOverride: U,
    reviewWarningMessage: G,
    purchaseState: ed,
    referralTrialOfferId: H,
    isTrial: eB || null != k && null != U,
    isDiscount: eF,
    handleClose: K
  })) : (a()(null != ei, "Expected plan to be selected"), o = (0, r.jsx)(p.Z, {
    premiumSubscription: z,
    paymentSources: $,
    priceOptions: ee,
    onPaymentSourceChange: e => {
      es(null != e ? e.id : null)
    },
    onPaymentSourceAdd: eQ,
    planId: ei.id,
    setHasAcceptedTerms: e_,
    legalTermsNodeRef: ek,
    hasLegalTermsFlash: eC,
    onInvoiceError: e => eG(e),
    planGroup: B,
    currencies: Q,
    onCurrencyChange: e => ea(e),
    hasOpenInvoice: null != Z,
    purchaseState: ed,
    handleClose: K
  }))), (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(O.P, {
      giftMessage: ev
    }), !eV && (0, r.jsx)(N.Z, {
      isEligibleForTrial: eB
    }), (0, r.jsxs)(P.C3, {
      children: [ey && eY && (0, r.jsx)("div", {
        className: L.bodyGradientPadding
      }), null != eS && eS, (0, r.jsxs)(s.Kqy, {
        direction: "vertical",
        gap: 8,
        children: [(0, r.jsx)(I.Z, {}), (0, r.jsx)(v.Z, {}), (0, r.jsx)(T.Z, {})]
      }), o]
    }), (0, r.jsx)(P.O3, {
      children: (0, r.jsx)(R.Z, {
        premiumSubscription: null != z ? z : null,
        setPurchaseState: el,
        onBack: eq,
        onNext: eL,
        onPurchaseError: e => ec(e),
        legalTermsNodeRef: ek,
        flashLegalTerms: () => eN(true),
        invoiceError: eU,
        planError: eM,
        analyticsLocation: V,
        baseAnalyticsData: F,
        flowStartTime: X.startTime,
        trialId: eP,
        planGroup: B,
        purchaseTokenAuthState: er,
        openInvoiceId: Z,
        backButtonEligible: eK,
        metadata: ex,
        isTrial: eB,
        disablePurchase: eX,
        onPaymentSourceAdd: eQ
      })
    })]
  })
}