/** Chunk was on web.js **/
/** chunk id: 623020, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  _M: () => G
}), require("./896048.js"), require("./65821.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk284009 = require("./284009.js"),
  s = require.n(Chunk284009),
  Chunk397927 = require("./397927.js"),
  Chunk304072 = require("./304072.js"),
  Chunk608805 = require("./608805.js"),
  Chunk666468 = require("./666468.js"),
  Chunk810498 = require("./810498.js"),
  Chunk494230 = require("./494230.jsx"),
  Chunk369280 = require("./369280.jsx"),
  Chunk658679 = require("./658679.jsx"),
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
  Chunk412090 = require("./412090.jsx"),
  Chunk112242 = require("./112242.jsx"),
  Chunk216641 = require("./216641.js"),
  Chunk69494 = require("./69494.jsx"),
  Chunk312649 = require("./312649.jsx"),
  Chunk482132 = require("./482132.jsx"),
  Chunk788868 = require("./788868.js"),
  Chunk818348 = require("./818348.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk763979 = require("./763979.js");

function j(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function M(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      j(e, t, n[t])
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
    selectedPlan: s,
    selectedSkuPricePreview: o,
    purchasePreviewError: l,
    purchaseType: c,
    invoicePreview: u,
    inReverseTrial: d,
    isEligibleForTrial: f,
    userTrialOffer: p
  } = (0, E.P5)(), {
    isGift: h
  } = (0, g.Pv)(), b = (0, C.W)(r, n), y = i.useMemo(() => {
    if (null != s) {
      if ((0, m.xq)(s.id)) return P.LE;
      if ((0, m.z4)(s.id)) return P.DA
    }
    return []
  }, [s]), O = i.useMemo(() => c === D.VV.ONE_TIME ? null == o && null != n || null != l : null == u || !h && null != b && c === D.VV.SUBSCRIPTION && f && !b.canRedeemTrial(), [c, o, n, l, u, h, b, f]), A = (0, m.J$)(a.paymentSourceId), v = c === D.VV.SUBSCRIPTION && null == s ? x.intl.string(x.t.YScQSF) : (0, _.R)({
    purchaseType: c,
    plan: s,
    premiumSubscription: e,
    isGift: h,
    planGroup: y,
    isPrepaidPaymentSource: A,
    inReverseTrial: d,
    paymentSourceId: n,
    hasPaymentSources: t
  });
  return {
    paymentSource: b,
    isEligibleForTrial: f,
    planGroup: y,
    disablePurchase: O,
    buttonText: v,
    userTrialOffer: p
  }
}

function G(e) {
  var t, n;
  let a, {
      handleStepChange: _,
      trialId: m,
      trialFooterMessageOverride: C,
      reviewWarningMessage: j,
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
      setUpdatedSubscription: X,
      contextMetadata: Z,
      currencies: Q,
      paymentSources: $,
      priceOptions: J,
      purchaseError: ee,
      purchaseTokenAuthState: et,
      selectedPlan: en,
      selectedSkuId: er,
      setCurrency: ei,
      setPaymentSourceId: ea,
      setPurchaseState: es,
      setPurchaseError: eo,
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
      isPremiumGroupPurchase: eb,
      isEligibleForDiscount: ey,
      discountOffer: eO
    } = (0, E.P5)(),
    {
      isGift: eA,
      giftMessage: ev,
      giftRecipient: eS,
      claimableRewards: eI
    } = (0, g.Pv)();
  s()(null != el, "Step should be set");
  let eT = i.useRef(null),
    [eC, eN] = (0, l.A)(false, k),
    {
      paymentSource: eR,
      isEligibleForTrial: ew,
      planGroup: eP,
      disablePurchase: eD,
      userTrialOffer: ex
    } = U(),
    eL = null != (t = null != m ? m : H) ? t : null,
    ej = null != eL && (!eu || P.TP[eL].skus.includes(er)) ? eL : null,
    eM = {
      user_trial_offer_id: null == ex ? true : ex.id
    };
  i.useEffect(() => {
    null != ee && null != eT.current && eT.current.scrollIntoView({
      behavior: "smooth"
    })
  }, [ee]);
  let ek = i.useCallback((e, t, n) => {
      X(e), null != t && ep(t), null != n && e_(n), _(b.pn.CONFIRM, {
        fulfillment: {
          subscription: e,
          entitlements: t
        }
      })
    }, [_, X, ep, e_]),
    eU = null != en && P.Er.has(en.id) && null != eR && !(0, u.j2)(eR) ? Error(x.intl.string(x.t["2ik8ih"])) : null,
    eG = i.useRef(null),
    [eV, eF] = i.useState(null),
    eB = null == eO || null == (n = eO.discount) ? true : n.plan_ids,
    eH = ey && null != eO && null != eB && null != en && eB.includes(en.id),
    eY = eA && (0, h.Ik)(eS),
    eW = null == Y && null == W && ef === D.VV.SUBSCRIPTION,
    eK = (0, S.vT)({
      isTrial: ew,
      isGift: eA,
      selectedSkuId: er,
      startedPaymentFlowWithPaymentSources: eh.current
    }),
    ez = eA && ef === D.VV.ONE_TIME,
    eq = ez || (eK ? eW && eu : eu),
    eX = (0, d.px)(en, eA, eI),
    eZ = i.useCallback(() => eK ? void _(b.pn.SKU_SELECT) : eb ? void _(b.pn.ADD_PAYMENT_STEPS) : eX ? void _(b.pn.SELECT_FREE_SKU) : ez ? _(b.pn.GIFT_CUSTOMIZATION) : _(b.pn.PLAN_SELECT), [_, eK, ez, eX, eb]),
    eQ = () => {
      _(b.pn.ADD_PAYMENT_STEPS)
    },
    e$ = eD;
  eE && (e$ = true);
  let eJ = null != G ? G : eP;
  if (ef === D.VV.ONE_TIME) a = (0, r.jsx)(T.A, {
    hasLegalTermsFlash: eC,
    legalTermsNodeRef: eG,
    onPaymentSourceChange: e => ea(null != e ? e.id : null),
    handlePaymentSourceAdd: () => _(b.pn.ADD_PAYMENT_STEPS)
  });
  else if (null == q || em || eA) {
    s()(null != en, "Expected plan to be selected");
    let e = {
      selectedPlanId: en.id,
      planGroup: eJ,
      paymentSources: $,
      onPaymentSourceChange: e => ea(null != e ? e.id : null),
      priceOptions: J,
      currencies: Q,
      onCurrencyChange: e => ei(e),
      handlePaymentSourceAdd: () => _(b.pn.ADD_PAYMENT_STEPS),
      setHasAcceptedTerms: ed,
      legalTermsNodeRef: eG,
      hasLegalTermsFlash: eC,
      trialId: ej,
      trialFooterMessageOverride: C,
      reviewWarningMessage: j,
      purchaseState: ec,
      referralTrialOfferId: H,
      isTrial: ew || null != m && null != C,
      isDiscount: eH,
      handleClose: K
    };
    a = z ? (0, r.jsx)(I._, M({}, e)) : (0, r.jsx)(f.A, M({}, e))
  } else s()(null != en, "Expected plan to be selected"), a = (0, r.jsx)(p.A, {
    premiumSubscription: q,
    paymentSources: $,
    priceOptions: J,
    onPaymentSourceChange: e => {
      ea(null != e ? e.id : null)
    },
    onPaymentSourceAdd: eQ,
    planId: en.id,
    setHasAcceptedTerms: ed,
    legalTermsNodeRef: eG,
    hasLegalTermsFlash: eC,
    onInvoiceError: e => eF(e),
    planGroup: eJ,
    currencies: Q,
    onCurrencyChange: e => ei(e),
    hasOpenInvoice: null != V,
    purchaseState: ec,
    handleClose: K
  });
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(y.Z, {
      giftMessage: ev
    }), !eY && (0, r.jsx)(N.A, {
      isEligibleForTrial: ew
    }), (0, r.jsxs)(w.dZ, {
      children: [eg && eK && !eb && (0, r.jsx)("div", {
        className: L.AC
      }), (0, r.jsxs)(o.BJc, {
        direction: "vertical",
        gap: 8,
        children: [(0, r.jsx)(A.A, {}), (0, r.jsx)(O.A, {}), (0, r.jsx)(v.A, {})]
      }), a]
    }), (0, r.jsx)(w.UX, {
      children: (0, r.jsx)(R.A, {
        premiumSubscription: null != q ? q : null,
        setPurchaseState: es,
        onBack: eZ,
        onNext: ek,
        onPurchaseError: e => eo(e),
        legalTermsNodeRef: eG,
        flashLegalTerms: () => eN(true),
        invoiceError: eV,
        planError: eU,
        analyticsLocation: B,
        baseAnalyticsData: F,
        flowStartTime: Z.startTime,
        trialId: ej,
        planGroup: eJ,
        purchaseTokenAuthState: et,
        openInvoiceId: V,
        backButtonEligible: eq,
        metadata: eM,
        isTrial: ew,
        disablePurchase: e$,
        onPaymentSourceAdd: eQ
      })
    })]
  })
}