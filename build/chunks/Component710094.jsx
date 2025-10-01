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
  Chunk614277 = require("./614277.jsx"),
  Chunk474936 = require("./474936.js"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk491881 = require("./491881.js");
let j = 500;

function M(e) {
  var t, n;
  let a, {
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
      selectedSkuId: ea,
      selectedSkuPricePreview: eo,
      setCurrency: es,
      setPaymentSourceId: el,
      setPurchaseState: ec,
      setPurchaseError: eu,
      step: ed,
      purchaseState: ef,
      isPremium: e_,
      setHasAcceptedTerms: ep,
      purchaseType: eh,
      setEntitlementsGranted: em,
      setAppliedUserDiscounts: eg,
      startedPaymentFlowWithPaymentSourcesRef: eE,
      invoicePreview: eb,
      inReverseTrial: ey,
      enablePremiumBrandRefresh: eO
    } = (0, E.JL)(),
    {
      isGift: ev,
      giftMessage: eI,
      giftRecipient: eT,
      claimableRewards: eS
    } = (0, g.wD)(),
    {
      paymentModalBanner: eA
    } = (0, y.zb)();
  o()(null != ed, "Step should be set");
  let eC = i.useRef(null),
    [eN, eR] = (0, l.Z)(false, j);
  i.useEffect(() => {
    (0, h.t)()
  }, []);
  let eP = null != (n = null != k ? k : H) ? n : null,
    ew = null != eP && (!e_ || w.nG[eP].skus.includes(ea)) ? eP : null,
    eD = (0, f.N)(H),
    eL = (0, d.Ng)(),
    ex = {
      user_trial_offer_id: null == eD ? true : eD.id
    };
  i.useEffect(() => {
    null != et && null != eC.current && eC.current.scrollIntoView({
      behavior: "smooth"
    })
  }, [et]);
  let ej = i.useCallback((e, t, n) => {
      q(e), null != t && em(t), null != n && eg(n), M(b.h8.CONFIRM, {
        fulfillment: {
          subscription: e,
          entitlements: t
        }
      })
    }, [M, q, em, eg]),
    eM = (0, C.m)($, J),
    ek = null != ei && w.o4.has(ei.id) && null != eM && !(0, c.aQ)(eM) ? Error(L.intl.string(L.t["2ik8io"])) : null,
    eU = i.useRef(null),
    [eG, eB] = i.useState(null),
    eZ = !ev && null != eD && null != ea && w.nG[eD.trial_id].skus.includes(ea),
    eF = null == eL || null == (t = eL.discount) ? true : t.plan_ids,
    eV = !ev && null != eL && null != eF && null != ei && eF.includes(ei.id),
    eH = ev && (0, m.pO)(eT),
    eY = null == Y && null == W && eh === D.GZ.SUBSCRIPTION,
    eW = (0, S.Kp)({
      isTrial: eZ,
      isGift: ev,
      selectedSkuId: ea,
      startedPaymentFlowWithPaymentSources: eE.current
    }),
    eK = ev && eh === D.GZ.ONE_TIME,
    ez = eK || (eW ? eY && e_ : e_),
    eq = (0, u.id)(ei, ev, eS),
    eX = i.useCallback(() => eW ? void M(b.h8.SKU_SELECT) : eq ? void M(b.h8.SELECT_FREE_SKU) : eK ? M(b.h8.GIFT_CUSTOMIZATION) : M(b.h8.PLAN_SELECT), [M, eW, eK, eq]),
    eQ = false,
    eJ = () => {
      M(b.h8.ADD_PAYMENT_STEPS)
    };
  return eh === D.GZ.ONE_TIME ? (eQ = null == eo && null != J || null != en, a = (0, r.jsx)(A.Z, {
    hasLegalTermsFlash: eN,
    legalTermsNodeRef: eU,
    onPaymentSourceChange: e => el(null != e ? e.id : null),
    handlePaymentSourceAdd: () => M(b.h8.ADD_PAYMENT_STEPS)
  })) : (eQ = null == eb || !ev && null != eM && eh === D.GZ.SUBSCRIPTION && eZ && !eM.canRedeemTrial(), null == z || ey || ev ? (o()(null != ei, "Expected plan to be selected"), a = (0, r.jsx)(_.Z, {
    selectedPlanId: ei.id,
    planGroup: B,
    paymentSources: $,
    onPaymentSourceChange: e => el(null != e ? e.id : null),
    priceOptions: ee,
    currencies: Q,
    onCurrencyChange: e => es(e),
    handlePaymentSourceAdd: () => M(b.h8.ADD_PAYMENT_STEPS),
    setHasAcceptedTerms: ep,
    legalTermsNodeRef: eU,
    hasLegalTermsFlash: eN,
    trialId: ew,
    trialFooterMessageOverride: U,
    reviewWarningMessage: G,
    purchaseState: ef,
    referralTrialOfferId: H,
    isTrial: eZ || null != k && null != U,
    isDiscount: eV,
    handleClose: K
  })) : (o()(null != ei, "Expected plan to be selected"), a = (0, r.jsx)(p.Z, {
    premiumSubscription: z,
    paymentSources: $,
    priceOptions: ee,
    onPaymentSourceChange: e => {
      el(null != e ? e.id : null)
    },
    onPaymentSourceAdd: eJ,
    planId: ei.id,
    setHasAcceptedTerms: ep,
    legalTermsNodeRef: eU,
    hasLegalTermsFlash: eN,
    onInvoiceError: e => eB(e),
    planGroup: B,
    currencies: Q,
    onCurrencyChange: e => es(e),
    hasOpenInvoice: null != Z,
    purchaseState: ef,
    handleClose: K
  }))), (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(O.P, {
      giftMessage: eI
    }), !eH && (0, r.jsx)(N.Z, {
      isEligibleForTrial: eZ
    }), (0, r.jsxs)(P.C3, {
      children: [eO && eW && (0, r.jsx)("div", {
        className: x.bodyGradientPadding
      }), null != eA && eA, (0, r.jsxs)(s.Kqy, {
        direction: "vertical",
        gap: 8,
        children: [(0, r.jsx)(I.Z, {}), (0, r.jsx)(v.Z, {}), (0, r.jsx)(T.Z, {})]
      }), a]
    }), (0, r.jsx)(P.O3, {
      children: (0, r.jsx)(R.Z, {
        premiumSubscription: null != z ? z : null,
        setPurchaseState: ec,
        onBack: eX,
        onNext: ej,
        onPurchaseError: e => eu(e),
        legalTermsNodeRef: eU,
        flashLegalTerms: () => eR(true),
        invoiceError: eG,
        planError: ek,
        analyticsLocation: V,
        baseAnalyticsData: F,
        flowStartTime: X.startTime,
        trialId: ew,
        planGroup: B,
        purchaseTokenAuthState: er,
        openInvoiceId: Z,
        backButtonEligible: ez,
        metadata: ex,
        isTrial: eZ,
        disablePurchase: eQ,
        onPaymentSourceAdd: eJ
      })
    })]
  })
}