/** Chunk was on web.js **/
/** chunk id: 710094, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  l: () => L
}), require("./388685.js"), require("./415506.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
  Chunk481060 = require("./481060.js"),
  Chunk330726 = require("./330726.js"),
  Chunk711459 = require("./711459.js"),
  Chunk717401 = require("./717401.js"),
  Chunk622909 = require("./622909.js"),
  Chunk639119 = require("./639119.js"),
  Chunk716534 = require("./716534.jsx"),
  Chunk664891 = require("./664891.jsx"),
  Chunk669079 = require("./669079.js"),
  Chunk987209 = require("./987209.jsx"),
  Chunk563132 = require("./563132.jsx"),
  Chunk409813 = require("./409813.js"),
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
let x = 500;

function L(e) {
  var t, n;
  let o, {
      handleStepChange: L,
      trialId: j,
      trialFooterMessageOverride: M,
      reviewWarningMessage: k,
      planGroup: U,
      openInvoiceId: G,
      analyticsData: Z,
      analyticsLocation: F,
      referralTrialOfferId: B,
      initialPlanId: V,
      subscriptionTier: H,
      handleClose: Y
    } = e,
    {
      activeSubscription: W,
      setUpdatedSubscription: K,
      contextMetadata: z,
      currencies: q,
      paymentSourceId: Q,
      paymentSources: X,
      priceOptions: J,
      purchaseError: $,
      purchasePreviewError: ee,
      purchaseTokenAuthState: et,
      selectedPlan: en,
      selectedSkuId: er,
      selectedSkuPricePreview: ei,
      setCurrency: eo,
      setPaymentSourceId: ea,
      setPurchaseState: es,
      setPurchaseError: el,
      step: ec,
      purchaseState: eu,
      isPremium: ed,
      setHasAcceptedTerms: ef,
      purchaseType: ep,
      setEntitlementsGranted: e_,
      setAppliedUserDiscounts: em,
      startedPaymentFlowWithPaymentSourcesRef: eh,
      invoicePreview: eg,
      inReverseTrial: eE,
      enablePremiumBrandRefresh: eb,
      disablePurchasesForStorybook: ey,
      isPremiumGroupPurchase: eO
    } = (0, g.JL)(),
    {
      isGift: ev,
      giftMessage: eS,
      giftRecipient: eI,
      claimableRewards: eT
    } = (0, h.wD)();
  a()(null != ec, "Step should be set");
  let eC = i.useRef(null),
    [eA, eN] = (0, l.Z)(false, x),
    eP = null != (n = null != j ? j : B) ? n : null,
    eR = null != eP && (!ed || P.nG[eP].skus.includes(er)) ? eP : null,
    ew = (0, f.N)(B),
    eD = (0, d.N)(),
    ex = {
      user_trial_offer_id: null == ew ? true : ew.id
    };
  i.useEffect(() => {
    null != $ && null != eC.current && eC.current.scrollIntoView({
      behavior: "smooth"
    })
  }, [$]);
  let eL = i.useCallback((e, t, n) => {
      K(e), null != t && e_(t), null != n && em(n), L(E.h8.CONFIRM, {
        fulfillment: {
          subscription: e,
          entitlements: t
        }
      })
    }, [L, K, e_, em]),
    ej = (0, T.m)(X, Q),
    eM = null != en && P.o4.has(en.id) && null != ej && !(0, c.aQ)(ej) ? Error(w.intl.string(w.t["2ik8ih"])) : null,
    ek = i.useRef(null),
    [eU, eG] = i.useState(null),
    eZ = !ev && null != ew && null != er && P.nG[ew.trial_id].skus.includes(er),
    eF = null == eD || null == (t = eD.discount) ? true : t.plan_ids,
    eB = !ev && null != eD && null != eF && null != en && eF.includes(en.id),
    eV = ev && (0, m.pO)(eI),
    eH = null == V && null == H && ep === R.GZ.SUBSCRIPTION,
    eY = (0, S.Kp)({
      isTrial: eZ,
      isGift: ev,
      selectedSkuId: er,
      startedPaymentFlowWithPaymentSources: eh.current
    }),
    eW = ev && ep === R.GZ.ONE_TIME,
    eK = eW || (eY ? eH && ed : ed),
    ez = (0, u.id)(en, ev, eT),
    eq = i.useCallback(() => eY ? void L(E.h8.SKU_SELECT) : eO ? void L(E.h8.ADD_PAYMENT_STEPS) : ez ? void L(E.h8.SELECT_FREE_SKU) : eW ? L(E.h8.GIFT_CUSTOMIZATION) : L(E.h8.PLAN_SELECT), [L, eY, eW, ez, eO]),
    eQ = false,
    eX = () => {
      L(E.h8.ADD_PAYMENT_STEPS)
    };
  return ep === R.GZ.ONE_TIME ? (eQ = null == ei && null != Q || null != ee, o = (0, r.jsx)(I.Z, {
    hasLegalTermsFlash: eA,
    legalTermsNodeRef: ek,
    onPaymentSourceChange: e => ea(null != e ? e.id : null),
    handlePaymentSourceAdd: () => L(E.h8.ADD_PAYMENT_STEPS)
  })) : (eQ = null == eg || !ev && null != ej && ep === R.GZ.SUBSCRIPTION && eZ && !ej.canRedeemTrial(), null == W || eE || ev ? (a()(null != en, "Expected plan to be selected"), o = (0, r.jsx)(p.Z, {
    selectedPlanId: en.id,
    planGroup: U,
    paymentSources: X,
    onPaymentSourceChange: e => ea(null != e ? e.id : null),
    priceOptions: J,
    currencies: q,
    onCurrencyChange: e => eo(e),
    handlePaymentSourceAdd: () => L(E.h8.ADD_PAYMENT_STEPS),
    setHasAcceptedTerms: ef,
    legalTermsNodeRef: ek,
    hasLegalTermsFlash: eA,
    trialId: eR,
    trialFooterMessageOverride: M,
    reviewWarningMessage: k,
    purchaseState: eu,
    referralTrialOfferId: B,
    isTrial: eZ || null != j && null != M,
    isDiscount: eB,
    handleClose: Y
  })) : (a()(null != en, "Expected plan to be selected"), o = (0, r.jsx)(_.Z, {
    premiumSubscription: W,
    paymentSources: X,
    priceOptions: J,
    onPaymentSourceChange: e => {
      ea(null != e ? e.id : null)
    },
    onPaymentSourceAdd: eX,
    planId: en.id,
    setHasAcceptedTerms: ef,
    legalTermsNodeRef: ek,
    hasLegalTermsFlash: eA,
    onInvoiceError: e => eG(e),
    planGroup: U,
    currencies: q,
    onCurrencyChange: e => eo(e),
    hasOpenInvoice: null != G,
    purchaseState: eu,
    handleClose: Y
  }))), ey && (eQ = true), (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(b.P, {
      giftMessage: eS
    }), !eV && (0, r.jsx)(C.Z, {
      isEligibleForTrial: eZ
    }), (0, r.jsxs)(N.C3, {
      children: [eb && eY && !eO && (0, r.jsx)("div", {
        className: D.bodyGradientPadding
      }), (0, r.jsxs)(s.Kqy, {
        direction: "vertical",
        gap: 8,
        children: [(0, r.jsx)(O.Z, {}), (0, r.jsx)(y.Z, {}), (0, r.jsx)(v.Z, {})]
      }), o]
    }), (0, r.jsx)(N.O3, {
      children: (0, r.jsx)(A.Z, {
        premiumSubscription: null != W ? W : null,
        setPurchaseState: es,
        onBack: eq,
        onNext: eL,
        onPurchaseError: e => el(e),
        legalTermsNodeRef: ek,
        flashLegalTerms: () => eN(true),
        invoiceError: eU,
        planError: eM,
        analyticsLocation: F,
        baseAnalyticsData: Z,
        flowStartTime: z.startTime,
        trialId: eR,
        planGroup: U,
        purchaseTokenAuthState: et,
        openInvoiceId: G,
        backButtonEligible: eK,
        metadata: ex,
        isTrial: eZ,
        disablePurchase: eQ,
        onPaymentSourceAdd: eX
      })
    })]
  })
}