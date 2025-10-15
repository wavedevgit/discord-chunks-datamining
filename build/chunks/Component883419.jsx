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
  Chunk614277 = require("./614277.jsx"),
  Chunk698708 = require("./698708.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk633290 = require("./633290.js");

function S(e) {
  var t, n;
  let {
    backButtonEligible: l,
    prevStep: S,
    handleStepChange: P,
    trialFooterMessageOverride: N,
    reviewWarningMessage: T,
    planGroup: k,
    openInvoiceId: E,
    analyticsData: _,
    analyticsLocation: w,
    handleClose: Z
  } = e, {
    activeSubscription: D,
    application: A,
    setUpdatedSubscription: I,
    contextMetadata: F,
    currencies: L,
    paymentSources: B,
    priceOptions: R,
    purchaseError: H,
    purchaseTokenAuthState: M,
    selectedPlan: W,
    selectedSku: G,
    setCurrency: z,
    setPaymentSourceId: V,
    setPurchaseState: Q,
    setPurchaseError: Y,
    purchaseState: J,
    subscriptionMetadataRequest: K,
    setHasAcceptedTerms: q
  } = (0, f.JL)();
  a()(null != W, "Expected plan to be selected");
  let U = r.useRef(null),
    [X, $] = (0, c.Z)(false, 500),
    ee = null == K ? true : K.guild_id,
    et = (0, o.e7)([p.Z], () => p.Z.getGuild(ee), [ee]),
    [en, ei] = r.useState(null),
    er = (0, m.KW)(null != (t = null == G ? true : G.flags) ? t : 0);
  r.useEffect(() => {
    null != H && null != U.current && U.current.scrollIntoView({
      behavior: "smooth"
    })
  }, [H]);
  let el = r.useCallback(e => {
      I(e), P(b.h8.CONFIRM)
    }, [P, I]),
    ea = r.useRef(null);
  if (J === h.A.PURCHASING) return (0, i.jsx)(v.Z, {});
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
            applicationName: null == A ? true : A.name
          })
        })]
      }), !er && (0, i.jsx)("div", {
        className: C.guildPickerContainer,
        children: (0, i.jsx)(s.gNt, {
          label: O.intl.string(O.t["5qyruL"]),
          children: (0, i.jsxs)("div", {
            className: C.guildNameContainer,
            children: [(0, i.jsx)(s.Text, {
              variant: "text-md/normal",
              children: O.intl.string(O.t.dBih7e)
            }), (0, i.jsx)(s.Text, {
              variant: "text-md/normal",
              lineClamp: 1,
              children: null != (n = null == et ? true : et.name) ? n : O.intl.string(O.t.dtwqPT)
            })]
          })
        })
      }), null == D ? (0, i.jsx)(u.Z, {
        selectedPlanId: W.id,
        planGroup: k,
        paymentSources: B,
        onPaymentSourceChange: e => V(null != e ? e.id : null),
        priceOptions: R,
        currencies: L,
        onCurrencyChange: e => z(e),
        handlePaymentSourceAdd: () => P(b.h8.ADD_PAYMENT_STEPS),
        setHasAcceptedTerms: q,
        legalTermsNodeRef: ea,
        hasLegalTermsFlash: X,
        trialFooterMessageOverride: N,
        reviewWarningMessage: T,
        metadata: er ? true : K,
        purchaseState: J,
        hideSubscriptionDetails: true,
        handleClose: Z
      }) : (0, i.jsx)(d.Z, {
        premiumSubscription: D,
        paymentSources: B,
        priceOptions: R,
        onPaymentSourceChange: e => V(null != e ? e.id : null),
        onPaymentSourceAdd: eo,
        planId: W.id,
        setHasAcceptedTerms: q,
        legalTermsNodeRef: ea,
        hasLegalTermsFlash: X,
        onInvoiceError: e => {
          ei(e)
        },
        planGroup: k,
        currencies: L,
        onCurrencyChange: e => z(e),
        hasOpenInvoice: null != E,
        purchaseState: J,
        handleClose: Z
      })]
    }), (0, i.jsx)(j.O3, {
      children: (0, i.jsx)(x.Z, {
        premiumSubscription: null != D ? D : null,
        setPurchaseState: Q,
        onBack: () => null != S && P(S),
        onNext: el,
        onPurchaseError: e => Y(e),
        legalTermsNodeRef: ea,
        flashLegalTerms: () => $(true),
        analyticsLocation: w,
        baseAnalyticsData: _,
        flowStartTime: F.startTime,
        planGroup: k,
        purchaseTokenAuthState: M,
        openInvoiceId: E,
        metadata: er ? true : K,
        backButtonEligible: l,
        invoiceError: en,
        disablePurchase: (null == K ? true : K.guild_id) == null && !er,
        onPaymentSourceAdd: eo
      })
    })]
  })
}