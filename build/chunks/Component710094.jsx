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
      trialId: k,
      trialFooterMessageOverride: j,
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
      enablePremiumBrandRefresh: ey
    } = (0, g.JL)(),
    {
      isGift: eO,
      giftMessage: ev,
      giftRecipient: eI,
      claimableRewards: eT
    } = (0, m.wD)(),
    {
      paymentModalBanner: eS
    } = (0, b.zb)();
  o()(null != eu, "Step should be set");
  let eA = i.useRef(null),
    [eC, eN] = (0, l.Z)(false, L),
    eR = null != (n = null != k ? k : V) ? n : null,
    eP = null != eR && (!ef || P.nG[eR].skus.includes(ei)) ? eR : null,
    ew = (0, f.N)(V),
    eD = (0, d.Ng)(),
    ex = {
      user_trial_offer_id: null == ew ? true : ew.id
    };
  i.useEffect(() => {
    null != ee && null != eA.current && eA.current.scrollIntoView({
      behavior: "smooth"
    })
  }, [ee]);
  let eL = i.useCallback((e, t, n) => {
      z(e), null != t && eh(t), null != n && em(n), M(E.h8.CONFIRM, {
        fulfillment: {
          subscription: e,
          entitlements: t
        }
      })
    }, [M, z, eh, em]),
    eM = (0, A.m)(J, Q),
    ek = null != er && P.o4.has(er.id) && null != eM && !(0, c.aQ)(eM) ? Error(D.intl.string(D.t["2ik8ih"])) : null,
    ej = i.useRef(null),
    [eU, eG] = i.useState(null),
    eB = !eO && null != ew && null != ei && P.nG[ew.trial_id].skus.includes(ei),
    eZ = null == eD || null == (t = eD.discount) ? true : t.plan_ids,
    eF = !eO && null != eD && null != eZ && null != er && eZ.includes(er.id),
    eV = eO && (0, h.pO)(eI),
    eH = null == H && null == Y && ep === w.GZ.SUBSCRIPTION,
    eY = (0, T.Kp)({
      isTrial: eB,
      isGift: eO,
      selectedSkuId: ei,
      startedPaymentFlowWithPaymentSources: eg.current
    }),
    eW = eO && ep === w.GZ.ONE_TIME,
    eK = eW || (eY ? eH && ef : ef),
    ez = (0, u.id)(er, eO, eT),
    eq = i.useCallback(() => eY ? void M(E.h8.SKU_SELECT) : ez ? void M(E.h8.SELECT_FREE_SKU) : eW ? M(E.h8.GIFT_CUSTOMIZATION) : M(E.h8.PLAN_SELECT), [M, eY, eW, ez]),
    eX = false,
    eQ = () => {
      M(E.h8.ADD_PAYMENT_STEPS)
    };
  return ep === w.GZ.ONE_TIME ? (eX = null == ea && null != Q || null != et, a = (0, r.jsx)(S.Z, {
    hasLegalTermsFlash: eC,
    legalTermsNodeRef: ej,
    onPaymentSourceChange: e => es(null != e ? e.id : null),
    handlePaymentSourceAdd: () => M(E.h8.ADD_PAYMENT_STEPS)
  })) : (eX = null == eE || !eO && null != eM && ep === w.GZ.SUBSCRIPTION && eB && !eM.canRedeemTrial(), null == K || eb || eO ? (o()(null != er, "Expected plan to be selected"), a = (0, r.jsx)(_.Z, {
    selectedPlanId: er.id,
    planGroup: G,
    paymentSources: J,
    onPaymentSourceChange: e => es(null != e ? e.id : null),
    priceOptions: $,
    currencies: X,
    onCurrencyChange: e => eo(e),
    handlePaymentSourceAdd: () => M(E.h8.ADD_PAYMENT_STEPS),
    setHasAcceptedTerms: e_,
    legalTermsNodeRef: ej,
    hasLegalTermsFlash: eC,
    trialId: eP,
    trialFooterMessageOverride: j,
    reviewWarningMessage: U,
    purchaseState: ed,
    referralTrialOfferId: V,
    isTrial: eB || null != k && null != j,
    isDiscount: eF,
    handleClose: W
  })) : (o()(null != er, "Expected plan to be selected"), a = (0, r.jsx)(p.Z, {
    premiumSubscription: K,
    paymentSources: J,
    priceOptions: $,
    onPaymentSourceChange: e => {
      es(null != e ? e.id : null)
    },
    onPaymentSourceAdd: eQ,
    planId: er.id,
    setHasAcceptedTerms: e_,
    legalTermsNodeRef: ej,
    hasLegalTermsFlash: eC,
    onInvoiceError: e => eG(e),
    planGroup: G,
    currencies: X,
    onCurrencyChange: e => eo(e),
    hasOpenInvoice: null != B,
    purchaseState: ed,
    handleClose: W
  }))), (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(y.P, {
      giftMessage: ev
    }), !eV && (0, r.jsx)(C.Z, {
      isEligibleForTrial: eB
    }), (0, r.jsxs)(R.C3, {
      children: [ey && eY && (0, r.jsx)("div", {
        className: x.bodyGradientPadding
      }), null != eS && eS, (0, r.jsxs)(s.Kqy, {
        direction: "vertical",
        gap: 8,
        children: [(0, r.jsx)(v.Z, {}), (0, r.jsx)(O.Z, {}), (0, r.jsx)(I.Z, {})]
      }), a]
    }), (0, r.jsx)(R.O3, {
      children: (0, r.jsx)(N.Z, {
        premiumSubscription: null != K ? K : null,
        setPurchaseState: el,
        onBack: eq,
        onNext: eL,
        onPurchaseError: e => ec(e),
        legalTermsNodeRef: ej,
        flashLegalTerms: () => eN(true),
        invoiceError: eU,
        planError: ek,
        analyticsLocation: F,
        baseAnalyticsData: Z,
        flowStartTime: q.startTime,
        trialId: eP,
        planGroup: G,
        purchaseTokenAuthState: en,
        openInvoiceId: B,
        backButtonEligible: eK,
        metadata: ex,
        isTrial: eB,
        disablePurchase: eX,
        onPaymentSourceAdd: eQ
      })
    })]
  })
}