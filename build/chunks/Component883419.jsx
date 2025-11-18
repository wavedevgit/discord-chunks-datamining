/** Chunk was on 86513 **/
/** chunk id: 883419, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => S
}), require("./388685.js"), require("./997841.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk330726 = require("./330726.js"),
  Chunk716534 = require("./716534.jsx"),
  Chunk664891 = require("./664891.jsx"),
  Chunk171246 = require("./171246.js"),
  Chunk430824 = require("./430824.js"),
  Chunk563132 = require("./563132.jsx"),
  Chunk409813 = require("./409813.js"),
  Chunk45572 = require("./45572.js"),
  Chunk51499 = require("./51499.jsx"),
  Chunk678334 = require("./678334.jsx"),
  Chunk456251 = require("./456251.jsx"),
  Chunk614277 = require("./614277.jsx"),
  Chunk698708 = require("./698708.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk384048 = require("./384048.js");

function S(e) {
  var t, n;
  let {
    backButtonEligible: l,
    prevStep: S,
    handleStepChange: P,
    trialFooterMessageOverride: N,
    reviewWarningMessage: E,
    planGroup: T,
    openInvoiceId: k,
    analyticsData: _,
    analyticsLocation: w,
    handleClose: Z
  } = e, {
    activeSubscription: A,
    application: D,
    setUpdatedSubscription: I,
    contextMetadata: B,
    currencies: F,
    paymentSources: L,
    priceOptions: R,
    purchaseError: H,
    purchaseTokenAuthState: M,
    selectedPlan: W,
    selectedSku: z,
    setCurrency: G,
    setPaymentSourceId: Y,
    setPurchaseState: q,
    setPurchaseError: J,
    purchaseState: Q,
    subscriptionMetadataRequest: V,
    setHasAcceptedTerms: K
  } = (0, f.JL)();
  a()(null != W, "Expected plan to be selected");
  let U = i.useRef(null),
    [X, $] = (0, c.Z)(false, 500),
    ee = null == V ? true : V.guild_id,
    et = (0, o.e7)([p.Z], () => p.Z.getGuild(ee), [ee]),
    [en, er] = i.useState(null),
    ei = (0, m.KW)(null != (t = null == z ? true : z.flags) ? t : 0);
  i.useEffect(() => {
    null != H && null != U.current && U.current.scrollIntoView({
      behavior: "smooth"
    })
  }, [H]);
  let el = i.useCallback(e => {
      I(e), P(b.h8.CONFIRM)
    }, [P, I]),
    ea = i.useRef(null);
  if (Q === h.A.PURCHASING) return (0, r.jsx)(j.Z, {});
  let eo = () => {
    P(b.h8.ADD_PAYMENT_STEPS)
  };
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(g.Z, {
      className: C.breadcrumbs
    }), (0, r.jsxs)(v.C3, {
      children: [(0, r.jsx)(y.Z, {}), ei && (0, r.jsxs)("div", {
        className: C.userSubscriptionDetailsContainer,
        children: [(0, r.jsx)(s.Text, {
          variant: "eyebrow",
          color: "header-secondary",
          children: O.intl.string(O.t.nf5LOU)
        }), (0, r.jsx)(s.Text, {
          variant: "text-xs/medium",
          color: "interactive-normal",
          children: O.intl.format(O.t.y4n0GS, {
            applicationName: null == D ? true : D.name
          })
        })]
      }), !ei && (0, r.jsx)("div", {
        className: C.guildPickerContainer,
        children: (0, r.jsx)(s.gNt, {
          label: O.intl.string(O.t["5qyruI"]),
          children: (0, r.jsxs)("div", {
            className: C.guildNameContainer,
            children: [(0, r.jsx)(s.Text, {
              variant: "text-md/normal",
              children: O.intl.string(O.t.dBih7e)
            }), (0, r.jsx)(s.Text, {
              variant: "text-md/normal",
              lineClamp: 1,
              children: null != (n = null == et ? true : et.name) ? n : O.intl.string(O.t.dtwqPR)
            })]
          })
        })
      }), null == A ? (0, r.jsx)(u.Z, {
        selectedPlanId: W.id,
        planGroup: T,
        paymentSources: L,
        onPaymentSourceChange: e => Y(null != e ? e.id : null),
        priceOptions: R,
        currencies: F,
        onCurrencyChange: e => G(e),
        handlePaymentSourceAdd: () => P(b.h8.ADD_PAYMENT_STEPS),
        setHasAcceptedTerms: K,
        legalTermsNodeRef: ea,
        hasLegalTermsFlash: X,
        trialFooterMessageOverride: N,
        reviewWarningMessage: E,
        metadata: ei ? true : V,
        purchaseState: Q,
        hideSubscriptionDetails: true,
        handleClose: Z
      }) : (0, r.jsx)(d.Z, {
        premiumSubscription: A,
        paymentSources: L,
        priceOptions: R,
        onPaymentSourceChange: e => Y(null != e ? e.id : null),
        onPaymentSourceAdd: eo,
        planId: W.id,
        setHasAcceptedTerms: K,
        legalTermsNodeRef: ea,
        hasLegalTermsFlash: X,
        onInvoiceError: e => {
          er(e)
        },
        planGroup: T,
        currencies: F,
        onCurrencyChange: e => G(e),
        hasOpenInvoice: null != k,
        purchaseState: Q,
        handleClose: Z
      })]
    }), (0, r.jsx)(v.O3, {
      children: (0, r.jsx)(x.Z, {
        premiumSubscription: null != A ? A : null,
        setPurchaseState: q,
        onBack: () => null != S && P(S),
        onNext: el,
        onPurchaseError: e => J(e),
        legalTermsNodeRef: ea,
        flashLegalTerms: () => $(true),
        analyticsLocation: w,
        baseAnalyticsData: _,
        flowStartTime: B.startTime,
        planGroup: T,
        purchaseTokenAuthState: M,
        openInvoiceId: k,
        metadata: ei ? true : V,
        backButtonEligible: l,
        invoiceError: en,
        disablePurchase: (null == V ? true : V.guild_id) == null && !ei,
        onPaymentSourceAdd: eo
      })
    })]
  })
}