/** Chunk was on 54400 **/
/** chunk id: 174827, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  x: () => D
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk512722 = require("./512722.js"),
  i = require.n(Chunk512722),
  Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk975608 = require("./975608.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk711459 = require("./711459.js"),
  Chunk374649 = require("./374649.js"),
  Chunk347896 = require("./347896.js"),
  Chunk717401 = require("./717401.js"),
  Chunk572517 = require("./572517.jsx"),
  Chunk622909 = require("./622909.js"),
  Chunk639119 = require("./639119.js"),
  Chunk314404 = require("./314404.jsx"),
  Chunk594174 = require("./594174.js"),
  Chunk509545 = require("./509545.js"),
  Chunk669079 = require("./669079.js"),
  Chunk63063 = require("./63063.js"),
  Chunk74538 = require("./74538.js"),
  Chunk987209 = require("./987209.jsx"),
  Chunk563132 = require("./563132.jsx"),
  Chunk409813 = require("./409813.js"),
  Chunk51499 = require("./51499.jsx"),
  Chunk456251 = require("./456251.jsx"),
  Chunk614277 = require("./614277.jsx"),
  Chunk435020 = require("./435020.js"),
  Chunk809144 = require("./809144.jsx"),
  Chunk698708 = require("./698708.jsx"),
  Chunk844068 = require("./844068.jsx"),
  Chunk405685 = require("./405685.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk833271 = require("./833271.js");

function D(e) {
  var t, n, l, D;
  let {
    handleStepChange: F,
    initialPlanId: H,
    planGroup: G,
    subscriptionTier: U,
    trialId: z,
    referralTrialOfferId: K,
    handleClose: W
  } = e, {
    activeSubscription: Y,
    hasFetchedSubscriptions: V,
    paymentSourceId: q,
    paymentSources: J,
    selectedSkuId: Q,
    selectedPlan: X,
    step: $,
    defaultPlanId: ee,
    priceOptions: et,
    isPremium: en,
    premiumBrandRefreshBackgroundClassName: er
  } = (0, O.JL)(), {
    isGift: ea,
    giftRecipient: el,
    giftMessage: ei,
    claimableRewards: eo
  } = (0, _.wD)(), es = (0, h.a5)(X), ed = (null == (t = (0, m.Z)()) ? true : t.planSelectionBanner) != null, ec = ea && es && null != eo && eo.length > 0 && ed, eu = (0, I.m)(J, q), {
    newPlans: ep
  } = u.ZP.useExperiment({
    location: "d17fd6_3"
  }, {
    autoTrackExposure: false
  }), em = (0, o.e7)([x.default], () => x.default.getCurrentUser()), eh = !ea && null != Q && Q === Z.Si.TIER_2 && null != em && em.hasHadPremium() && V && null == Y && (0, u.aQ)(eu), ef = (0, g.N)(K), eb = !ea && null != ef && null != Q && Z.nG[ef.trial_id].skus.includes(Q), eg = (0, b.N)(), ev = null == eg || null == (n = eg.discount) ? true : n.plan_ids.some(e => Z.GP[e].skuId === Q), ex = !ea && null != eg && null != Q && ev, eP = null != (l = eb || ex) && l, ej = a.useMemo(() => (0, S.V7)({
    skuId: Q,
    isPremium: en,
    multiMonthPlans: eh ? ep : [],
    currentSubscription: Y,
    defaultPlanId: ee
  }), [Q, en, ep, Y, eh, ee]), ey = ex && ej.includes(Z.Xh.PREMIUM_MONTH_TIER_2) ? Z.Xh.PREMIUM_MONTH_TIER_2 : ej[0], eS = (0, o.e7)([P.Z], () => P.Z.get(ey)), e_ = [{
    planId: null == eS ? true : eS.id,
    quantity: 1
  }], [eO, eC] = a.useState(eP), [ew, ek] = (0, p.ED)({
    items: e_,
    renewal: false,
    preventFetch: !eP,
    applyEntitlements: true,
    trialId: z,
    paymentSourceId: et.paymentSourceId,
    currency: et.currency
  });
  a.useEffect(() => {
    eP && eC((null == ew ? true : ew.subscriptionPeriodEnd) == null)
  }, [ew, eP]), (0, d.Z)("Payment Modal Plan Select Step", eO, 5, {
    proratedInvoicePreview: ew,
    proratedInvoiceError: ek,
    isEligibleForOffer: eP
  }, {
    tags: {
      app_context: "billing"
    }
  });
  let eE = null != (D = null == ek ? true : ek.message) ? D : B.intl.string(B.t.R0RpRX),
    eI = eP && null == ek,
    eT = eP && null != ek;
  return eI && null == Y && eP && (null == ew ? true : ew.subscriptionPeriodEnd) == null ? (0, r.jsx)(k.Z, {}) : (i()(null != $, "Step should be set"), i()(ej.length > 0, "Premium plan options should be set"), (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(T.P, {
      giftMessage: ei
    }), !(ea && (0, j.pO)(el)) && (0, r.jsx)(w.Z, {
      isEligibleForTrial: eb
    }), (0, r.jsxs)(E.C3, {
      children: [eI && (0, r.jsx)("hr", {
        className: L.planSelectSeparatorUpper
      }), (0, r.jsx)(M.a, {
        planSkuId: null == eS ? true : eS.skuId,
        referralTrialOfferId: K
      }), (0, r.jsx)(R.Z, {}), (0, r.jsx)(N.Z, {}), eT ? (0, r.jsx)(s.M14, {
        type: "critical",
        children: eE
      }) : (0, r.jsx)(v.O, {
        planOptions: ej,
        eligibleForMultiMonthPlans: eh,
        referralTrialOfferId: K,
        selectedPlanId: null == X ? true : X.id,
        planGroup: G,
        subscriptionPeriodEnd: null == ew ? true : ew.subscriptionPeriodEnd,
        discountInvoiceItems: ex ? null == ew ? true : ew.invoiceItems : true,
        useCompactGiftComponents: ec,
        handleClose: W
      }), eI && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)("hr", {
          className: L.planSelectSeparatorLower
        }), (0, r.jsx)(s.Text, {
          variant: "text-xs/normal",
          children: B.intl.format(B.t.BHtnqA, {
            link: y.Z.getArticleURL(A.BhN.PREMIUM_DETAILS_CANCEL_SUB)
          })
        })]
      })]
    }), (0, r.jsxs)(E.O3, {
      children: [ec && (0, r.jsx)(f.c, {}), (0, r.jsx)(s.mzw, {
        "data-migration-pending": true,
        justify: c.Z.Justify.BETWEEN,
        align: c.Z.Align.CENTER,
        className: er,
        children: (0, r.jsx)(v.y, {
          onStepChange: F,
          onBackClick: () => F(C.h8.SKU_SELECT),
          showBackButton: null == H && null == U,
          planOptions: ej,
          shouldRenderUpdatedPaymentModal: eI,
          isTrial: eb
        })
      })]
    })]
  }))
}