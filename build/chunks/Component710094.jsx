/** Chunk was on web.js **/
/** chunk id: 710094, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  l: () => k
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
  Chunk657517 = require("./657517.jsx"),
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
  Chunk108626 = require("./108626.js");
let M = 500;

function k(e) {
  var t, n;
  let a, {
      handleStepChange: k,
      trialId: U,
      trialFooterMessageOverride: G,
      reviewWarningMessage: B,
      planGroup: Z,
      openInvoiceId: F,
      analyticsData: V,
      analyticsLocation: H,
      referralTrialOfferId: Y,
      initialPlanId: W,
      subscriptionTier: K,
      handleClose: z
    } = e,
    {
      activeSubscription: q,
      setUpdatedSubscription: X,
      contextMetadata: Q,
      currencies: J,
      paymentSourceId: $,
      paymentSources: ee,
      priceOptions: et,
      purchaseError: en,
      purchasePreviewError: er,
      purchaseTokenAuthState: ei,
      selectedPlan: ea,
      selectedSkuId: eo,
      selectedSkuPricePreview: es,
      setCurrency: el,
      setPaymentSourceId: ec,
      setPurchaseState: eu,
      setPurchaseError: ed,
      step: ef,
      purchaseState: e_,
      isPremium: ep,
      setHasAcceptedTerms: eh,
      purchaseType: em,
      setEntitlementsGranted: eg,
      setAppliedUserDiscounts: eE,
      startedPaymentFlowWithPaymentSourcesRef: eb,
      invoicePreview: ey,
      inReverseTrial: eO,
      enablePremiumBrandRefresh: ev,
      shouldShowSeptemberMarketingMomentBanner: eI
    } = (0, b.JL)(),
    {
      isGift: eT,
      giftMessage: eS,
      giftRecipient: eA,
      claimableRewards: eC
    } = (0, E.wD)(),
    {
      paymentModalBanner: eN
    } = (0, O.zb)();
  o()(null != ef, "Step should be set");
  let eR = i.useRef(null),
    [eP, ew] = (0, l.Z)(false, M);
  i.useEffect(() => {
    (0, m.t)()
  }, []);
  let eD = null != (n = null != U ? U : Y) ? n : null,
    eL = null != eD && (!ep || D.nG[eD].skus.includes(eo)) ? eD : null,
    ex = (0, f.N)(Y),
    ej = (0, d.Ng)(),
    eM = {
      user_trial_offer_id: null == ex ? true : ex.id
    };
  i.useEffect(() => {
    null != en && null != eR.current && eR.current.scrollIntoView({
      behavior: "smooth"
    })
  }, [en]);
  let ek = i.useCallback((e, t, n) => {
      X(e), null != t && eg(t), null != n && eE(n), k(y.h8.CONFIRM, {
        fulfillment: {
          subscription: e,
          entitlements: t
        }
      })
    }, [k, X, eg, eE]),
    eU = (0, N.m)(ee, $),
    eG = null != ea && D.o4.has(ea.id) && null != eU && !(0, c.aQ)(eU) ? Error(x.intl.string(x.t["2ik8io"])) : null,
    eB = i.useRef(null),
    [eZ, eF] = i.useState(null),
    eV = !eT && null != ex && null != eo && D.nG[ex.trial_id].skus.includes(eo),
    eH = null == ej || null == (t = ej.discount) ? true : t.plan_ids,
    eY = !eT && null != ej && null != eH && null != ea && eH.includes(ea.id),
    eW = eT && (0, g.pO)(eA),
    eK = null == W && null == K && em === L.GZ.SUBSCRIPTION,
    ez = (0, A.Kp)({
      isTrial: eV,
      isGift: eT,
      selectedSkuId: eo,
      startedPaymentFlowWithPaymentSources: eb.current
    }),
    eq = eT && em === L.GZ.ONE_TIME,
    eX = eq || (ez ? eK && ep : ep),
    eQ = (0, u.id)(ea, eT, eC),
    eJ = i.useCallback(() => ez ? void k(y.h8.SKU_SELECT) : eQ ? void k(y.h8.SELECT_FREE_SKU) : eq ? k(y.h8.GIFT_CUSTOMIZATION) : k(y.h8.PLAN_SELECT), [k, ez, eq, eQ]),
    e$ = false,
    e0 = () => {
      k(y.h8.ADD_PAYMENT_STEPS)
    };
  return em === L.GZ.ONE_TIME ? (e$ = null == es && null != $ || null != er, a = (0, r.jsx)(C.Z, {
    hasLegalTermsFlash: eP,
    legalTermsNodeRef: eB,
    onPaymentSourceChange: e => ec(null != e ? e.id : null),
    handlePaymentSourceAdd: () => k(y.h8.ADD_PAYMENT_STEPS)
  })) : (e$ = null == ey || !eT && null != eU && em === L.GZ.SUBSCRIPTION && eV && !eU.canRedeemTrial(), null == q || eO || eT ? (o()(null != ea, "Expected plan to be selected"), a = (0, r.jsx)(_.Z, {
    selectedPlanId: ea.id,
    planGroup: Z,
    paymentSources: ee,
    onPaymentSourceChange: e => ec(null != e ? e.id : null),
    priceOptions: et,
    currencies: J,
    onCurrencyChange: e => el(e),
    handlePaymentSourceAdd: () => k(y.h8.ADD_PAYMENT_STEPS),
    setHasAcceptedTerms: eh,
    legalTermsNodeRef: eB,
    hasLegalTermsFlash: eP,
    trialId: eL,
    trialFooterMessageOverride: G,
    reviewWarningMessage: B,
    purchaseState: e_,
    referralTrialOfferId: Y,
    isTrial: eV || null != U && null != G,
    isDiscount: eY,
    handleClose: z
  })) : (o()(null != ea, "Expected plan to be selected"), a = (0, r.jsx)(p.Z, {
    premiumSubscription: q,
    paymentSources: ee,
    priceOptions: et,
    onPaymentSourceChange: e => {
      ec(null != e ? e.id : null)
    },
    onPaymentSourceAdd: e0,
    planId: ea.id,
    setHasAcceptedTerms: eh,
    legalTermsNodeRef: eB,
    hasLegalTermsFlash: eP,
    onInvoiceError: e => eF(e),
    planGroup: Z,
    currencies: J,
    onCurrencyChange: e => el(e),
    hasOpenInvoice: null != F,
    purchaseState: e_,
    handleClose: z
  }))), (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(v.P, {
      giftMessage: eS
    }), !eW && (0, r.jsx)(R.Z, {
      isEligibleForTrial: eV
    }), (0, r.jsxs)(w.C3, {
      children: [ev && ez && (0, r.jsx)("div", {
        className: j.bodyGradientPadding
      }), null != eN && eN, true === eI && (0, r.jsx)(h.Y, {}), (0, r.jsxs)(s.Kqy, {
        direction: "vertical",
        gap: 8,
        children: [(0, r.jsx)(T.Z, {}), (0, r.jsx)(I.Z, {}), (0, r.jsx)(S.Z, {})]
      }), a]
    }), (0, r.jsx)(w.O3, {
      children: (0, r.jsx)(P.Z, {
        premiumSubscription: null != q ? q : null,
        setPurchaseState: eu,
        onBack: eJ,
        onNext: ek,
        onPurchaseError: e => ed(e),
        legalTermsNodeRef: eB,
        flashLegalTerms: () => ew(true),
        invoiceError: eZ,
        planError: eG,
        analyticsLocation: H,
        baseAnalyticsData: V,
        flowStartTime: Q.startTime,
        trialId: eL,
        planGroup: Z,
        purchaseTokenAuthState: ei,
        openInvoiceId: F,
        backButtonEligible: eX,
        metadata: eM,
        isTrial: eV,
        disablePurchase: e$,
        onPaymentSourceAdd: e0
      })
    })]
  })
}