/** Chunk was on 86513 **/
/** chunk id: 883419, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => S
}), require("./388685.js"), require("./997841.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  Chunk27034 = require("./27034.jsx"),
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
    reviewWarningMessage: T,
    planGroup: _,
    openInvoiceId: k,
    analyticsData: E,
    analyticsLocation: w,
    handleClose: Z
  } = e, {
    activeSubscription: A,
    application: D,
    setUpdatedSubscription: I,
    contextMetadata: B,
    currencies: L,
    paymentSources: F,
    priceOptions: R,
    purchaseError: H,
    purchaseTokenAuthState: M,
    selectedPlan: W,
    selectedSku: G,
    setCurrency: z,
    setPaymentSourceId: V,
    setPurchaseState: q,
    setPurchaseError: K,
    purchaseState: Q,
    subscriptionMetadataRequest: Y,
    setHasAcceptedTerms: J
  } = (0, f.JL)();
  a()(null != W, "Expected plan to be selected");
  let X = r.useRef(null),
    [U, $] = (0, c.Z)(false, 500),
    ee = null == Y ? true : Y.guild_id,
    et = (0, o.e7)([p.Z], () => p.Z.getGuild(ee), [ee]),
    [en, ei] = r.useState(null),
    er = (0, m.KW)(null != (t = null == G ? true : G.flags) ? t : 0);
  r.useEffect(() => {
    null != H && null != X.current && X.current.scrollIntoView({
      behavior: "smooth"
    })
  }, [H]);
  let el = r.useCallback(e => {
      I(e), P(b.h8.CONFIRM)
    }, [P, I]),
    ea = r.useRef(null);
  if (Q === h.A.PURCHASING) return (0, i.jsx)(v.Z, {});
  let eo = () => {
    P(b.h8.ADD_PAYMENT_STEPS)
  };
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(g.Z, {
      className: C.breadcrumbs
    }), (0, i.jsxs)(j.C3, {
      children: [(0, i.jsx)(y.Z, {}), er && (0, i.jsxs)("div", {
        className: C.userSubscriptionDetailsContainer,
        children: [(0, i.jsx)(s.Text, {
          variant: "eyebrow",
          color: "header-secondary",
          children: O.intl.string(O.t.nf5LOT)
        }), (0, i.jsx)(s.Text, {
          variant: "text-xs/medium",
          color: "interactive-normal",
          children: O.intl.format(O.t.y4n0GR, {
            applicationName: null == D ? true : D.name
          })
        })]
      }), !er && (0, i.jsxs)("div", {
        className: C.guildPickerContainer,
        children: [(0, i.jsx)(s.vwX, {
          tag: s.RB0.H5,
          children: O.intl.string(O.t["5qyruL"])
        }), (0, i.jsxs)("div", {
          className: C.guildNameContainer,
          children: [(0, i.jsx)(s.Text, {
            variant: "text-md/normal",
            children: O.intl.string(O.t.dBih7e)
          }), (0, i.jsx)(s.Text, {
            variant: "text-md/normal",
            lineClamp: 1,
            children: null != (n = null == et ? true : et.name) ? n : O.intl.string(O.t.dtwqPT)
          })]
        })]
      }), null == A ? (0, i.jsx)(u.Z, {
        selectedPlanId: W.id,
        planGroup: _,
        paymentSources: F,
        onPaymentSourceChange: e => V(null != e ? e.id : null),
        priceOptions: R,
        currencies: L,
        onCurrencyChange: e => z(e),
        handlePaymentSourceAdd: () => P(b.h8.ADD_PAYMENT_STEPS),
        setHasAcceptedTerms: J,
        legalTermsNodeRef: ea,
        hasLegalTermsFlash: U,
        trialFooterMessageOverride: N,
        reviewWarningMessage: T,
        metadata: er ? true : Y,
        purchaseState: Q,
        hideSubscriptionDetails: true,
        handleClose: Z
      }) : (0, i.jsx)(d.Z, {
        premiumSubscription: A,
        paymentSources: F,
        priceOptions: R,
        onPaymentSourceChange: e => V(null != e ? e.id : null),
        onPaymentSourceAdd: eo,
        planId: W.id,
        setHasAcceptedTerms: J,
        legalTermsNodeRef: ea,
        hasLegalTermsFlash: U,
        onInvoiceError: e => {
          ei(e)
        },
        planGroup: _,
        currencies: L,
        onCurrencyChange: e => z(e),
        hasOpenInvoice: null != k,
        purchaseState: Q,
        handleClose: Z
      })]
    }), (0, i.jsx)(j.O3, {
      children: (0, i.jsx)(x.Z, {
        premiumSubscription: null != A ? A : null,
        setPurchaseState: q,
        onBack: () => null != S && P(S),
        onNext: el,
        onPurchaseError: e => K(e),
        legalTermsNodeRef: ea,
        flashLegalTerms: () => $(true),
        analyticsLocation: w,
        baseAnalyticsData: E,
        flowStartTime: B.startTime,
        planGroup: _,
        purchaseTokenAuthState: M,
        openInvoiceId: k,
        metadata: er ? true : Y,
        backButtonEligible: l,
        invoiceError: en,
        disablePurchase: (null == Y ? true : Y.guild_id) == null && !er,
        onPaymentSourceAdd: eo
      })
    })]
  })
}