/** Chunk was on 50243 **/
/** chunk id: 758655, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => O
}), require("./896048.js"), require("./938796.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk284009 = require("./284009.js"),
  a = require.n(Chunk284009),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk304072 = require("./304072.js"),
  Chunk494230 = require("./494230.jsx"),
  Chunk369280 = require("./369280.jsx"),
  Chunk163437 = require("./163437.js"),
  Chunk71393 = require("./71393.js"),
  Chunk156312 = require("./156312.jsx"),
  Chunk166532 = require("./166532.js"),
  Chunk566980 = require("./566980.js"),
  Chunk69494 = require("./69494.jsx"),
  Chunk312649 = require("./312649.jsx"),
  Chunk534479 = require("./534479.jsx"),
  Chunk482132 = require("./482132.jsx"),
  Chunk921925 = require("./921925.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk820970 = require("./820970.js");

function O(e) {
  var t, n;
  let {
    backButtonEligible: l,
    prevStep: O,
    handleStepChange: A,
    trialFooterMessageOverride: C,
    reviewWarningMessage: E,
    planGroup: T,
    openInvoiceId: N,
    analyticsData: _,
    analyticsLocation: w,
    handleClose: k
  } = e, {
    activeSubscription: D,
    application: I,
    setUpdatedSubscription: R,
    contextMetadata: B,
    currencies: F,
    paymentSources: U,
    priceOptions: M,
    purchaseError: G,
    purchaseTokenAuthState: H,
    selectedPlan: L,
    selectedSku: Y,
    setCurrency: W,
    setPaymentSourceId: q,
    setPurchaseState: V,
    setPurchaseError: Z,
    purchaseState: Q,
    subscriptionMetadataRequest: X,
    setHasAcceptedTerms: $
  } = (0, f.P5)();
  a()(null != L, "Expected plan to be selected");
  let z = i.useRef(null),
    [K, J] = (0, c.A)(false, 500),
    ee = null == X ? true : X.guild_id,
    et = (0, s.bG)([m.A], () => m.A.getGuild(ee), [ee]),
    [en, er] = i.useState(null),
    ei = (0, p.bg)(null != (t = null == Y ? true : Y.flags) ? t : 0);
  i.useEffect(() => {
    null != G && null != z.current && z.current.scrollIntoView({
      behavior: "smooth"
    })
  }, [G]);
  let el = i.useCallback(e => {
      R(e), A(b.pn.CONFIRM)
    }, [A, R]),
    ea = i.useRef(null);
  if (Q === g.h.PURCHASING) return (0, r.jsx)(h.A, {});
  let es = () => {
    A(b.pn.ADD_PAYMENT_STEPS)
  };
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(x.A, {
      className: S.jD
    }), (0, r.jsxs)(v.dZ, {
      children: [(0, r.jsx)(y.A, {}), ei && (0, r.jsxs)("div", {
        className: S.Uq,
        children: [(0, r.jsx)(o.Text, {
          variant: "eyebrow",
          color: "text-default",
          children: P.intl.string(P.t.nf5LOU)
        }), (0, r.jsx)(o.Text, {
          variant: "text-xs/medium",
          color: "interactive-text-default",
          children: P.intl.format(P.t.y4n0GS, {
            applicationName: null == I ? true : I.name
          })
        })]
      }), !ei && (0, r.jsx)("div", {
        className: S.Vw,
        children: (0, r.jsx)(o.D0$, {
          label: P.intl.string(P.t["5qyruI"]),
          children: (0, r.jsxs)("div", {
            className: S.YS,
            children: [(0, r.jsx)(o.Text, {
              variant: "text-md/normal",
              children: P.intl.string(P.t.dBih7e)
            }), (0, r.jsx)(o.Text, {
              variant: "text-md/normal",
              lineClamp: 1,
              children: null != (n = null == et ? true : et.name) ? n : P.intl.string(P.t.dtwqPR)
            })]
          })
        })
      }), null == D ? (0, r.jsx)(u.A, {
        selectedPlanId: L.id,
        planGroup: T,
        paymentSources: U,
        onPaymentSourceChange: e => q(null != e ? e.id : null),
        priceOptions: M,
        currencies: F,
        onCurrencyChange: e => W(e),
        handlePaymentSourceAdd: () => A(b.pn.ADD_PAYMENT_STEPS),
        setHasAcceptedTerms: $,
        legalTermsNodeRef: ea,
        hasLegalTermsFlash: K,
        trialFooterMessageOverride: C,
        reviewWarningMessage: E,
        metadata: ei ? true : X,
        purchaseState: Q,
        hideSubscriptionDetails: true,
        handleClose: k
      }) : (0, r.jsx)(d.A, {
        premiumSubscription: D,
        paymentSources: U,
        priceOptions: M,
        onPaymentSourceChange: e => q(null != e ? e.id : null),
        onPaymentSourceAdd: es,
        planId: L.id,
        setHasAcceptedTerms: $,
        legalTermsNodeRef: ea,
        hasLegalTermsFlash: K,
        onInvoiceError: e => {
          er(e)
        },
        planGroup: T,
        currencies: F,
        onCurrencyChange: e => W(e),
        hasOpenInvoice: null != N,
        purchaseState: Q,
        handleClose: k
      })]
    }), (0, r.jsx)(v.UX, {
      children: (0, r.jsx)(j.A, {
        premiumSubscription: null != D ? D : null,
        setPurchaseState: V,
        onBack: () => null != O && A(O),
        onNext: el,
        onPurchaseError: e => Z(e),
        legalTermsNodeRef: ea,
        flashLegalTerms: () => J(true),
        analyticsLocation: w,
        baseAnalyticsData: _,
        flowStartTime: B.startTime,
        planGroup: T,
        purchaseTokenAuthState: H,
        openInvoiceId: N,
        metadata: ei ? true : X,
        backButtonEligible: l,
        invoiceError: en,
        disablePurchase: (null == X ? true : X.guild_id) == null && !ei,
        onPaymentSourceAdd: es
      })
    })]
  })
}