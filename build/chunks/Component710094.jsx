/** Chunk was on web.js **/
/** chunk id: 710094, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  l: () => x
}), require("./388685.js"), require("./415506.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
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
  Chunk491881 = require("./491881.js");
let L = 500;

function x(e) {
  var t, n;
  let a, {
      handleStepChange: x,
      trialId: M,
      trialFooterMessageOverride: j,
      reviewWarningMessage: k,
      planGroup: U,
      openInvoiceId: G,
      analyticsData: B,
      analyticsLocation: Z,
      referralTrialOfferId: F,
      initialPlanId: V,
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
      selectedSkuPricePreview: ei,
      setCurrency: ea,
      setPaymentSourceId: eo,
      setPurchaseState: es,
      setPurchaseError: el,
      step: ec,
      purchaseState: eu,
      isPremium: ed,
      setHasAcceptedTerms: ef,
      purchaseType: e_,
      setEntitlementsGranted: ep,
      setAppliedUserDiscounts: eh,
      startedPaymentFlowWithPaymentSourcesRef: em,
      invoicePreview: eg,
      inReverseTrial: eE,
      enablePremiumBrandRefresh: eb,
      disablePurchasesForStorybook: ey
    } = (0, g.JL)(),
    {
      isGift: eO,
      giftMessage: ev,
      giftRecipient: eI,
      claimableRewards: eT
    } = (0, m.wD)();
  o()(null != ec, "Step should be set");
  let eS = i.useRef(null),
    [eA, eC] = (0, l.Z)(false, L),
    eN = null != (n = null != M ? M : F) ? n : null,
    eR = null != eN && (!ed || R.nG[eN].skus.includes(er)) ? eN : null,
    eP = (0, f.N)(F),
    eD = (0, d.N)(),
    ew = {
      user_trial_offer_id: null == eP ? true : eP.id
    };
  i.useEffect(() => {
    null != $ && null != eS.current && eS.current.scrollIntoView({
      behavior: "smooth"
    })
  }, [$]);
  let eL = i.useCallback((e, t, n) => {
      K(e), null != t && ep(t), null != n && eh(n), x(E.h8.CONFIRM, {
        fulfillment: {
          subscription: e,
          entitlements: t
        }
      })
    }, [x, K, ep, eh]),
    ex = (0, S.m)(Q, X),
    eM = null != en && R.o4.has(en.id) && null != ex && !(0, c.aQ)(ex) ? Error(D.intl.string(D.t["2ik8ih"])) : null,
    ej = i.useRef(null),
    [ek, eU] = i.useState(null),
    eG = !eO && null != eP && null != er && R.nG[eP.trial_id].skus.includes(er),
    eB = null == eD || null == (t = eD.discount) ? true : t.plan_ids,
    eZ = !eO && null != eD && null != eB && null != en && eB.includes(en.id),
    eF = eO && (0, h.pO)(eI),
    eV = null == V && null == H && e_ === P.GZ.SUBSCRIPTION,
    eH = (0, I.Kp)({
      isTrial: eG,
      isGift: eO,
      selectedSkuId: er,
      startedPaymentFlowWithPaymentSources: em.current
    }),
    eY = eO && e_ === P.GZ.ONE_TIME,
    eW = eY || (eH ? eV && ed : ed),
    eK = (0, u.id)(en, eO, eT),
    ez = i.useCallback(() => eH ? void x(E.h8.SKU_SELECT) : eK ? void x(E.h8.SELECT_FREE_SKU) : eY ? x(E.h8.GIFT_CUSTOMIZATION) : x(E.h8.PLAN_SELECT), [x, eH, eY, eK]),
    eq = false,
    eX = () => {
      x(E.h8.ADD_PAYMENT_STEPS)
    };
  return e_ === P.GZ.ONE_TIME ? (eq = null == ei && null != X || null != ee, a = (0, r.jsx)(T.Z, {
    hasLegalTermsFlash: eA,
    legalTermsNodeRef: ej,
    onPaymentSourceChange: e => eo(null != e ? e.id : null),
    handlePaymentSourceAdd: () => x(E.h8.ADD_PAYMENT_STEPS)
  })) : (eq = null == eg || !eO && null != ex && e_ === P.GZ.SUBSCRIPTION && eG && !ex.canRedeemTrial(), null == W || eE || eO ? (o()(null != en, "Expected plan to be selected"), a = (0, r.jsx)(_.Z, {
    selectedPlanId: en.id,
    planGroup: U,
    paymentSources: Q,
    onPaymentSourceChange: e => eo(null != e ? e.id : null),
    priceOptions: J,
    currencies: q,
    onCurrencyChange: e => ea(e),
    handlePaymentSourceAdd: () => x(E.h8.ADD_PAYMENT_STEPS),
    setHasAcceptedTerms: ef,
    legalTermsNodeRef: ej,
    hasLegalTermsFlash: eA,
    trialId: eR,
    trialFooterMessageOverride: j,
    reviewWarningMessage: k,
    purchaseState: eu,
    referralTrialOfferId: F,
    isTrial: eG || null != M && null != j,
    isDiscount: eZ,
    handleClose: Y
  })) : (o()(null != en, "Expected plan to be selected"), a = (0, r.jsx)(p.Z, {
    premiumSubscription: W,
    paymentSources: Q,
    priceOptions: J,
    onPaymentSourceChange: e => {
      eo(null != e ? e.id : null)
    },
    onPaymentSourceAdd: eX,
    planId: en.id,
    setHasAcceptedTerms: ef,
    legalTermsNodeRef: ej,
    hasLegalTermsFlash: eA,
    onInvoiceError: e => eU(e),
    planGroup: U,
    currencies: q,
    onCurrencyChange: e => ea(e),
    hasOpenInvoice: null != G,
    purchaseState: eu,
    handleClose: Y
  }))), ey && (eq = true), (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(b.P, {
      giftMessage: ev
    }), !eF && (0, r.jsx)(A.Z, {
      isEligibleForTrial: eG
    }), (0, r.jsxs)(N.C3, {
      children: [eb && eH && (0, r.jsx)("div", {
        className: w.bodyGradientPadding
      }), (0, r.jsxs)(s.Kqy, {
        direction: "vertical",
        gap: 8,
        children: [(0, r.jsx)(O.Z, {}), (0, r.jsx)(y.Z, {}), (0, r.jsx)(v.Z, {})]
      }), a]
    }), (0, r.jsx)(N.O3, {
      children: (0, r.jsx)(C.Z, {
        premiumSubscription: null != W ? W : null,
        setPurchaseState: es,
        onBack: ez,
        onNext: eL,
        onPurchaseError: e => el(e),
        legalTermsNodeRef: ej,
        flashLegalTerms: () => eC(true),
        invoiceError: ek,
        planError: eM,
        analyticsLocation: Z,
        baseAnalyticsData: B,
        flowStartTime: z.startTime,
        trialId: eR,
        planGroup: U,
        purchaseTokenAuthState: et,
        openInvoiceId: G,
        backButtonEligible: eW,
        metadata: ew,
        isTrial: eG,
        disablePurchase: eq,
        onPaymentSourceAdd: eX
      })
    })]
  })
}