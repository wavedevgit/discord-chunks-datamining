/** Chunk was on web.js **/
/** chunk id: 710094, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  lZ: () => k
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
  Chunk858987 = require("./858987.jsx"),
  Chunk669079 = require("./669079.js"),
  Chunk74538 = require("./74538.js"),
  Chunk987209 = require("./987209.jsx"),
  Chunk563132 = require("./563132.jsx"),
  Chunk409813 = require("./409813.js");
require("./45572.js");
var Chunk809144 = require("./809144.jsx"),
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
  Chunk267180 = require("./267180.js");
let j = 500;

function M(e) {
  let {
    activeSubscription: t,
    hasPaymentSources: n,
    paymentSourceId: r,
    paymentSources: a,
    priceOptions: o,
    selectedPlan: s,
    selectedSkuId: l,
    selectedSkuPricePreview: c,
    purchasePreviewError: u,
    purchaseType: d,
    invoicePreview: p,
    inReverseTrial: _
  } = (0, b.JL)(), {
    isGift: h
  } = (0, E.wD)(), y = (0, A.m)(a, r), O = (0, f.N)(null != e ? e : true), v = !h && null != O && null != l && w.nG[O.trial_id].skus.includes(l), S = i.useMemo(() => {
    if (null != s) {
      if ((0, g.uZ)(s.id)) return w.Y1;
      if ((0, g.Z8)(s.id)) return w.j4
    }
    return []
  }, [s]), I = i.useMemo(() => d === D.GZ.ONE_TIME ? null == c && null != r || null != u : null == p || !h && null != y && d === D.GZ.SUBSCRIPTION && v && !y.canRedeemTrial(), [d, c, r, u, p, h, y, v]), T = (0, g.Ap)(o.paymentSourceId), C = (0, m.K)({
    purchaseType: d,
    plan: s,
    premiumSubscription: t,
    isGift: h,
    planGroup: S,
    isPrepaidPaymentSource: T,
    inReverseTrial: _,
    paymentSourceId: r,
    hasPaymentSources: n
  });
  return {
    paymentSource: y,
    isEligibleForTrial: v,
    planGroup: S,
    disablePurchase: I,
    buttonText: C,
    userTrialOffer: O
  }
}

function k(e) {
  var t, n;
  let a, {
      handleStepChange: f,
      trialId: m,
      trialFooterMessageOverride: g,
      reviewWarningMessage: A,
      planGroup: k,
      openInvoiceId: U,
      analyticsData: G,
      analyticsLocation: Z,
      referralTrialOfferId: F,
      initialPlanId: B,
      subscriptionTier: V,
      handleClose: H
    } = e,
    {
      activeSubscription: Y,
      setUpdatedSubscription: W,
      contextMetadata: K,
      currencies: z,
      paymentSources: q,
      priceOptions: Q,
      purchaseError: X,
      purchaseTokenAuthState: J,
      selectedPlan: $,
      selectedSkuId: ee,
      setCurrency: et,
      setPaymentSourceId: en,
      setPurchaseState: er,
      setPurchaseError: ei,
      step: ea,
      purchaseState: eo,
      isPremium: es,
      setHasAcceptedTerms: el,
      purchaseType: ec,
      setEntitlementsGranted: eu,
      setAppliedUserDiscounts: ed,
      startedPaymentFlowWithPaymentSourcesRef: ef,
      inReverseTrial: ep,
      enablePremiumBrandRefresh: e_,
      disablePurchasesForStorybook: em,
      isPremiumGroupPurchase: eh
    } = (0, b.JL)(),
    {
      isGift: eg,
      giftMessage: eE,
      giftRecipient: eb,
      claimableRewards: ey
    } = (0, E.wD)();
  o()(null != ea, "Step should be set");
  let eO = i.useRef(null),
    [ev, eS] = (0, l.Z)(false, j),
    {
      paymentSource: eI,
      isEligibleForTrial: eT,
      planGroup: eC,
      disablePurchase: eA,
      userTrialOffer: eN
    } = M(F),
    eP = null != (n = null != m ? m : F) ? n : null,
    eR = null != eP && (!es || w.nG[eP].skus.includes(ee)) ? eP : null,
    ew = (0, d.N)(),
    eD = {
      user_trial_offer_id: null == eN ? true : eN.id
    };
  i.useEffect(() => {
    null != X && null != eO.current && eO.current.scrollIntoView({
      behavior: "smooth"
    })
  }, [X]);
  let ex = i.useCallback((e, t, n) => {
      W(e), null != t && eu(t), null != n && ed(n), f(y.h8.CONFIRM, {
        fulfillment: {
          subscription: e,
          entitlements: t
        }
      })
    }, [f, W, eu, ed]),
    eL = null != $ && w.o4.has($.id) && null != eI && !(0, c.aQ)(eI) ? Error(x.intl.string(x.t["2ik8ih"])) : null,
    ej = i.useRef(null),
    [eM, ek] = i.useState(null),
    eU = null == ew || null == (t = ew.discount) ? true : t.plan_ids,
    eG = !eg && null != ew && null != eU && null != $ && eU.includes($.id),
    eZ = eg && (0, h.pO)(eb),
    eF = null == B && null == V && ec === D.GZ.SUBSCRIPTION,
    eB = (0, T.Kp)({
      isTrial: eT,
      isGift: eg,
      selectedSkuId: ee,
      startedPaymentFlowWithPaymentSources: ef.current
    }),
    eV = eg && ec === D.GZ.ONE_TIME,
    eH = eV || (eB ? eF && es : es),
    eY = (0, u.id)($, eg, ey),
    eW = i.useCallback(() => eB ? void f(y.h8.SKU_SELECT) : eh ? void f(y.h8.ADD_PAYMENT_STEPS) : eY ? void f(y.h8.SELECT_FREE_SKU) : eV ? f(y.h8.GIFT_CUSTOMIZATION) : f(y.h8.PLAN_SELECT), [f, eB, eV, eY, eh]),
    eK = () => {
      f(y.h8.ADD_PAYMENT_STEPS)
    },
    ez = eA;
  em && (ez = true);
  let eq = null != k ? k : eC;
  return ec === D.GZ.ONE_TIME ? a = (0, r.jsx)(C.Z, {
    hasLegalTermsFlash: ev,
    legalTermsNodeRef: ej,
    onPaymentSourceChange: e => en(null != e ? e.id : null),
    handlePaymentSourceAdd: () => f(y.h8.ADD_PAYMENT_STEPS)
  }) : null == Y || ep || eg ? (o()(null != $, "Expected plan to be selected"), a = (0, r.jsx)(p.Z, {
    selectedPlanId: $.id,
    planGroup: eq,
    paymentSources: q,
    onPaymentSourceChange: e => en(null != e ? e.id : null),
    priceOptions: Q,
    currencies: z,
    onCurrencyChange: e => et(e),
    handlePaymentSourceAdd: () => f(y.h8.ADD_PAYMENT_STEPS),
    setHasAcceptedTerms: el,
    legalTermsNodeRef: ej,
    hasLegalTermsFlash: ev,
    trialId: eR,
    trialFooterMessageOverride: g,
    reviewWarningMessage: A,
    purchaseState: eo,
    referralTrialOfferId: F,
    isTrial: eT || null != m && null != g,
    isDiscount: eG,
    handleClose: H
  })) : (o()(null != $, "Expected plan to be selected"), a = (0, r.jsx)(_.Z, {
    premiumSubscription: Y,
    paymentSources: q,
    priceOptions: Q,
    onPaymentSourceChange: e => {
      en(null != e ? e.id : null)
    },
    onPaymentSourceAdd: eK,
    planId: $.id,
    setHasAcceptedTerms: el,
    legalTermsNodeRef: ej,
    hasLegalTermsFlash: ev,
    onInvoiceError: e => ek(e),
    planGroup: eq,
    currencies: z,
    onCurrencyChange: e => et(e),
    hasOpenInvoice: null != U,
    purchaseState: eo,
    handleClose: H
  })), (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(O.P, {
      giftMessage: eE
    }), !eZ && (0, r.jsx)(N.Z, {
      isEligibleForTrial: eT
    }), (0, r.jsxs)(R.C3, {
      children: [e_ && eB && !eh && (0, r.jsx)("div", {
        className: L.bodyGradientPadding
      }), (0, r.jsxs)(s.Kqy, {
        direction: "vertical",
        gap: 8,
        children: [(0, r.jsx)(S.Z, {}), (0, r.jsx)(v.Z, {}), (0, r.jsx)(I.Z, {})]
      }), a]
    }), (0, r.jsx)(R.O3, {
      children: (0, r.jsx)(P.Z, {
        premiumSubscription: null != Y ? Y : null,
        setPurchaseState: er,
        onBack: eW,
        onNext: ex,
        onPurchaseError: e => ei(e),
        legalTermsNodeRef: ej,
        flashLegalTerms: () => eS(true),
        invoiceError: eM,
        planError: eL,
        analyticsLocation: Z,
        baseAnalyticsData: G,
        flowStartTime: K.startTime,
        trialId: eR,
        planGroup: eq,
        purchaseTokenAuthState: J,
        openInvoiceId: U,
        backButtonEligible: eH,
        metadata: eD,
        isTrial: eT,
        disablePurchase: ez,
        onPaymentSourceAdd: eK
      })
    })]
  })
}