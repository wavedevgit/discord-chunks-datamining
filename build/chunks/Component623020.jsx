/** Chunk was on web.js **/
/** chunk id: 623020, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  _M: () => G
}), require("./896048.js"), require("./65821.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk284009 = require("./284009.js"),
  o = require.n(Chunk284009),
  Chunk397927 = require("./397927.js"),
  Chunk304072 = require("./304072.js"),
  Chunk608805 = require("./608805.js"),
  Chunk666468 = require("./666468.js"),
  Chunk810498 = require("./810498.js"),
  Chunk367921 = require("./367921.jsx"),
  Chunk494230 = require("./494230.jsx"),
  Chunk369280 = require("./369280.jsx"),
  Chunk45938 = require("./45938.js"),
  Chunk927578 = require("./927578.js"),
  Chunk937008 = require("./937008.jsx"),
  Chunk156312 = require("./156312.jsx"),
  Chunk166532 = require("./166532.js");
require("./566980.js");
var Chunk50956 = require("./50956.jsx"),
  Chunk921925 = require("./921925.jsx"),
  Chunk592362 = require("./592362.jsx"),
  Chunk520796 = require("./520796.jsx"),
  Chunk800471 = require("./800471.js"),
  Chunk367160 = require("./367160.jsx"),
  Chunk112242 = require("./112242.jsx"),
  Chunk216641 = require("./216641.js"),
  Chunk69494 = require("./69494.jsx"),
  Chunk312649 = require("./312649.jsx"),
  Chunk482132 = require("./482132.jsx"),
  Chunk788868 = require("./788868.js"),
  Chunk818348 = require("./818348.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk763979 = require("./763979.js");

function M(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function j(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      M(e, t, n[t])
    })
  }
  return e
}
let k = 500;

function U() {
  let {
    activeSubscription: e,
    hasPaymentSources: t,
    paymentSourceId: n,
    paymentSources: r,
    priceOptions: a,
    selectedPlan: o,
    selectedSkuPricePreview: s,
    purchasePreviewError: l,
    purchaseType: c,
    invoicePreview: u,
    inReverseTrial: d,
    isEligibleForTrial: p,
    userTrialOffer: _
  } = (0, E.P5)(), {
    isGift: h
  } = (0, g.Pv)(), y = (0, C.W)(r, n), b = i.useMemo(() => {
    if (null != o) {
      if ((0, m.xq)(o.id)) return P.LE;
      if ((0, m.z4)(o.id)) return P.DA
    }
    return []
  }, [o]), O = i.useMemo(() => c === D.VV.ONE_TIME ? null == s && null != n || null != l : null == u || !h && null != y && c === D.VV.SUBSCRIPTION && p && !y.canRedeemTrial(), [c, s, n, l, u, h, y, p]), v = (0, m.J$)(a.paymentSourceId), A = c === D.VV.SUBSCRIPTION && null == o ? L.intl.string(L.t.YScQSF) : (0, f.Ro)({
    purchaseType: c,
    plan: o,
    premiumSubscription: e,
    isGift: h,
    planGroup: b,
    isPrepaidPaymentSource: v,
    inReverseTrial: d,
    paymentSourceId: n,
    hasPaymentSources: t
  });
  return {
    paymentSource: y,
    isEligibleForTrial: p,
    planGroup: b,
    disablePurchase: O,
    buttonText: A,
    userTrialOffer: _
  }
}

function G(e) {
  var t, n;
  let a, {
      handleStepChange: f,
      trialId: m,
      trialFooterMessageOverride: C,
      reviewWarningMessage: M,
      planGroup: G,
      openInvoiceId: V,
      analyticsData: F,
      analyticsLocation: B,
      referralTrialOfferId: H,
      initialPlanId: Y,
      subscriptionTier: W,
      handleClose: K
    } = e,
    {
      enabled: z
    } = (0, c.T0)({
      location: "payment_modal_review_step"
    }),
    {
      activeSubscription: q,
      setUpdatedSubscription: Z,
      contextMetadata: Q,
      currencies: X,
      paymentSources: J,
      priceOptions: $,
      purchaseError: ee,
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
      setEntitlementsGranted: ep,
      setAppliedUserDiscounts: e_,
      startedPaymentFlowWithPaymentSourcesRef: eh,
      inReverseTrial: em,
      enablePremiumBrandRefresh: eg,
      disablePurchasesForStorybook: eE,
      isPremiumGroupPurchase: ey,
      isEligibleForDiscount: eb,
      discountOffer: eO
    } = (0, E.P5)(),
    {
      isGift: ev,
      giftMessage: eA,
      giftRecipient: eI,
      claimableRewards: eS
    } = (0, g.Pv)();
  o()(null != el, "Step should be set");
  let eT = i.useRef(null),
    [eC, eN] = (0, l.A)(false, k),
    {
      paymentSource: ew,
      isEligibleForTrial: eR,
      planGroup: eP,
      disablePurchase: eD,
      userTrialOffer: eL
    } = U(),
    ex = null != (t = null != m ? m : H) ? t : null,
    eM = null != ex && (!eu || P.TP[ex].skus.includes(er)) ? ex : null,
    ej = {
      user_trial_offer_id: null == eL ? true : eL.id
    };
  i.useEffect(() => {
    null != ee && null != eT.current && eT.current.scrollIntoView({
      behavior: "smooth"
    })
  }, [ee]);
  let ek = i.useCallback((e, t, n) => {
      Z(e), null != t && ep(t), null != n && e_(n), f(y.pn.CONFIRM, {
        fulfillment: {
          subscription: e,
          entitlements: t
        }
      })
    }, [f, Z, ep, e_]),
    eU = null != en && P.Er.has(en.id) && null != ew && !(0, u.j2)(ew) ? Error(L.intl.string(L.t["2ik8ih"])) : null,
    eG = i.useRef(null),
    [eV, eF] = i.useState(null),
    eB = null == eO || null == (n = eO.discount) ? true : n.plan_ids,
    eH = eb && null != eO && null != eB && null != en && eB.includes(en.id),
    eY = ev && (0, h.Ik)(eI),
    eW = null == Y && null == W && ef === D.VV.SUBSCRIPTION,
    eK = (0, I.vT)({
      isTrial: eR,
      isGift: ev,
      selectedSkuId: er,
      startedPaymentFlowWithPaymentSources: eh.current
    }),
    ez = ev && ef === D.VV.ONE_TIME,
    eq = ez || (eK ? eW && eu : eu),
    eZ = (0, d.px)(en, ev, eS),
    eQ = i.useCallback(() => eK ? void f(y.pn.SKU_SELECT) : ey ? void f(y.pn.ADD_PAYMENT_STEPS) : eZ ? void f(y.pn.SELECT_FREE_SKU) : ez ? f(y.pn.GIFT_CUSTOMIZATION) : f(y.pn.PLAN_SELECT), [f, eK, ez, eZ, ey]),
    eX = () => {
      f(y.pn.ADD_PAYMENT_STEPS)
    },
    eJ = eD;
  eE && (eJ = true);
  let e$ = null != G ? G : eP;
  if (ef === D.VV.ONE_TIME) a = (0, r.jsx)(T.A, {
    hasLegalTermsFlash: eC,
    legalTermsNodeRef: eG,
    onPaymentSourceChange: e => ea(null != e ? e.id : null),
    handlePaymentSourceAdd: () => f(y.pn.ADD_PAYMENT_STEPS)
  });
  else if (null == q || em || ev) {
    o()(null != en, "Expected plan to be selected");
    let e = {
      selectedPlanId: en.id,
      planGroup: e$,
      paymentSources: J,
      onPaymentSourceChange: e => ea(null != e ? e.id : null),
      priceOptions: $,
      currencies: X,
      onCurrencyChange: e => ei(e),
      handlePaymentSourceAdd: () => f(y.pn.ADD_PAYMENT_STEPS),
      setHasAcceptedTerms: ed,
      legalTermsNodeRef: eG,
      hasLegalTermsFlash: eC,
      trialId: eM,
      trialFooterMessageOverride: C,
      reviewWarningMessage: M,
      purchaseState: ec,
      referralTrialOfferId: H,
      isTrial: eR || null != m && null != C,
      isDiscount: eH,
      handleClose: K
    };
    a = z ? (0, r.jsx)(S._, j({}, e)) : (0, r.jsx)(p.A, j({}, e))
  } else o()(null != en, "Expected plan to be selected"), a = (0, r.jsx)(_.A, {
    premiumSubscription: q,
    paymentSources: J,
    priceOptions: $,
    onPaymentSourceChange: e => {
      ea(null != e ? e.id : null)
    },
    onPaymentSourceAdd: eX,
    planId: en.id,
    setHasAcceptedTerms: ed,
    legalTermsNodeRef: eG,
    hasLegalTermsFlash: eC,
    onInvoiceError: e => eF(e),
    planGroup: e$,
    currencies: X,
    onCurrencyChange: e => ei(e),
    hasOpenInvoice: null != V,
    purchaseState: ec,
    handleClose: K
  });
  let e0 = eg && eK && !ey && !z;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(b.Z, {
      giftMessage: eA
    }), !eY && (0, r.jsx)(N.A, {
      isEligibleForTrial: eR
    }), (0, r.jsxs)(R.dZ, {
      children: [e0 && (0, r.jsx)("div", {
        className: x.AC
      }), (0, r.jsxs)(s.BJc, {
        direction: "vertical",
        gap: 8,
        children: [(0, r.jsx)(v.A, {}), (0, r.jsx)(O.A, {}), (0, r.jsx)(A.A, {})]
      }), a]
    }), (0, r.jsx)(R.UX, {
      children: (0, r.jsx)(w.A, {
        premiumSubscription: null != q ? q : null,
        setPurchaseState: eo,
        onBack: eQ,
        onNext: ek,
        onPurchaseError: e => es(e),
        legalTermsNodeRef: eG,
        flashLegalTerms: () => eN(true),
        invoiceError: eV,
        planError: eU,
        analyticsLocation: B,
        baseAnalyticsData: F,
        flowStartTime: Q.startTime,
        trialId: eM,
        planGroup: e$,
        purchaseTokenAuthState: et,
        openInvoiceId: V,
        backButtonEligible: eq,
        metadata: ej,
        isTrial: eR,
        disablePurchase: eJ,
        onPaymentSourceAdd: eX
      })
    })]
  })
}