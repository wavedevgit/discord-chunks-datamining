/** Chunk was on web.js **/
/** chunk id: 710094, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  l: () => M
}), require("./388685.js"), require("./415506.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
  Chunk481060 = require("./481060.js"),
  Chunk330726 = require("./330726.js"),
  Chunk711459 = require("./711459.js"),
  Chunk717401 = require("./717401.js"),
  Chunk104494 = require("./104494.js"),
  Chunk639119 = require("./639119.js"),
  Chunk716534 = require("./716534.jsx"),
  Chunk664891 = require("./664891.jsx"),
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
  Chunk614277 = require("./614277.jsx"),
  Chunk474936 = require("./474936.js"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk491881 = require("./491881.js");
let L = 500;

function M(e) {
  var t, n;
  let a, {
      handleStepChange: M,
      trialId: j,
      trialFooterMessageOverride: k,
      reviewWarningMessage: U,
      planGroup: G,
      openInvoiceId: B,
      analyticsData: Z,
      analyticsLocation: F,
      referralTrialOfferId: V,
      initialPlanId: H,
      subscriptionTier: Y,
      handleClose: W
    } = e,
    {
      activeSubscription: K,
      setUpdatedSubscription: z,
      contextMetadata: q,
      currencies: X,
      paymentSourceId: Q,
      paymentSources: J,
      priceOptions: $,
      purchaseError: ee,
      purchasePreviewError: et,
      purchaseTokenAuthState: en,
      selectedPlan: er,
      selectedSkuId: ei,
      selectedSkuPricePreview: ea,
      setCurrency: eo,
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
      enablePremiumBrandRefresh: ey,
      disablePurchasesForStorybook: eO
    } = (0, g.JL)(),
    {
      isGift: ev,
      giftMessage: eI,
      giftRecipient: eS,
      claimableRewards: eT
    } = (0, m.wD)(),
    {
      paymentModalBanner: eA
    } = (0, b.zb)();
  o()(null != eu, "Step should be set");
  let eC = i.useRef(null),
    [eN, eR] = (0, l.Z)(false, L),
    eP = null != (n = null != j ? j : V) ? n : null,
    ew = null != eP && (!ef || P.nG[eP].skus.includes(ei)) ? eP : null,
    eD = (0, f.N)(V),
    ex = (0, d.Ng)(),
    eL = {
      user_trial_offer_id: null == eD ? true : eD.id
    };
  i.useEffect(() => {
    null != ee && null != eC.current && eC.current.scrollIntoView({
      behavior: "smooth"
    })
  }, [ee]);
  let eM = i.useCallback((e, t, n) => {
      z(e), null != t && eh(t), null != n && em(n), M(E.h8.CONFIRM, {
        fulfillment: {
          subscription: e,
          entitlements: t
        }
      })
    }, [M, z, eh, em]),
    ej = (0, A.m)(J, Q),
    ek = null != er && P.o4.has(er.id) && null != ej && !(0, c.aQ)(ej) ? Error(D.intl.string(D.t["2ik8ih"])) : null,
    eU = i.useRef(null),
    [eG, eB] = i.useState(null),
    eZ = !ev && null != eD && null != ei && P.nG[eD.trial_id].skus.includes(ei),
    eF = null == ex || null == (t = ex.discount) ? true : t.plan_ids,
    eV = !ev && null != ex && null != eF && null != er && eF.includes(er.id),
    eH = ev && (0, h.pO)(eS),
    eY = null == H && null == Y && ep === w.GZ.SUBSCRIPTION,
    eW = (0, S.Kp)({
      isTrial: eZ,
      isGift: ev,
      selectedSkuId: ei,
      startedPaymentFlowWithPaymentSources: eg.current
    }),
    eK = ev && ep === w.GZ.ONE_TIME,
    ez = eK || (eW ? eY && ef : ef),
    eq = (0, u.id)(er, ev, eT),
    eX = i.useCallback(() => eW ? void M(E.h8.SKU_SELECT) : eq ? void M(E.h8.SELECT_FREE_SKU) : eK ? M(E.h8.GIFT_CUSTOMIZATION) : M(E.h8.PLAN_SELECT), [M, eW, eK, eq]),
    eQ = false,
    eJ = () => {
      M(E.h8.ADD_PAYMENT_STEPS)
    };
  return ep === w.GZ.ONE_TIME ? (eQ = null == ea && null != Q || null != et, a = (0, r.jsx)(T.Z, {
    hasLegalTermsFlash: eN,
    legalTermsNodeRef: eU,
    onPaymentSourceChange: e => es(null != e ? e.id : null),
    handlePaymentSourceAdd: () => M(E.h8.ADD_PAYMENT_STEPS)
  })) : (eQ = null == eE || !ev && null != ej && ep === w.GZ.SUBSCRIPTION && eZ && !ej.canRedeemTrial(), null == K || eb || ev ? (o()(null != er, "Expected plan to be selected"), a = (0, r.jsx)(_.Z, {
    selectedPlanId: er.id,
    planGroup: G,
    paymentSources: J,
    onPaymentSourceChange: e => es(null != e ? e.id : null),
    priceOptions: $,
    currencies: X,
    onCurrencyChange: e => eo(e),
    handlePaymentSourceAdd: () => M(E.h8.ADD_PAYMENT_STEPS),
    setHasAcceptedTerms: e_,
    legalTermsNodeRef: eU,
    hasLegalTermsFlash: eN,
    trialId: ew,
    trialFooterMessageOverride: k,
    reviewWarningMessage: U,
    purchaseState: ed,
    referralTrialOfferId: V,
    isTrial: eZ || null != j && null != k,
    isDiscount: eV,
    handleClose: W
  })) : (o()(null != er, "Expected plan to be selected"), a = (0, r.jsx)(p.Z, {
    premiumSubscription: K,
    paymentSources: J,
    priceOptions: $,
    onPaymentSourceChange: e => {
      es(null != e ? e.id : null)
    },
    onPaymentSourceAdd: eJ,
    planId: er.id,
    setHasAcceptedTerms: e_,
    legalTermsNodeRef: eU,
    hasLegalTermsFlash: eN,
    onInvoiceError: e => eB(e),
    planGroup: G,
    currencies: X,
    onCurrencyChange: e => eo(e),
    hasOpenInvoice: null != B,
    purchaseState: ed,
    handleClose: W
  }))), eO && (eQ = true), (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(y.P, {
      giftMessage: eI
    }), !eH && (0, r.jsx)(C.Z, {
      isEligibleForTrial: eZ
    }), (0, r.jsxs)(R.C3, {
      children: [ey && eW && (0, r.jsx)("div", {
        className: x.bodyGradientPadding
      }), null != eA && eA, (0, r.jsxs)(s.Kqy, {
        direction: "vertical",
        gap: 8,
        children: [(0, r.jsx)(v.Z, {}), (0, r.jsx)(O.Z, {}), (0, r.jsx)(I.Z, {})]
      }), a]
    }), (0, r.jsx)(R.O3, {
      children: (0, r.jsx)(N.Z, {
        premiumSubscription: null != K ? K : null,
        setPurchaseState: el,
        onBack: eX,
        onNext: eM,
        onPurchaseError: e => ec(e),
        legalTermsNodeRef: eU,
        flashLegalTerms: () => eR(true),
        invoiceError: eG,
        planError: ek,
        analyticsLocation: F,
        baseAnalyticsData: Z,
        flowStartTime: q.startTime,
        trialId: ew,
        planGroup: G,
        purchaseTokenAuthState: en,
        openInvoiceId: B,
        backButtonEligible: ez,
        metadata: eL,
        isTrial: eZ,
        disablePurchase: eQ,
        onPaymentSourceAdd: eJ
      })
    })]
  })
}