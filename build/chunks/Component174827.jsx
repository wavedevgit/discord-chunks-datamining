/** Chunk was on 54400 **/
/** chunk id: 174827, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  x: () => B
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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

function B(e) {
  var t, n, a, B;
  let {
    handleStepChange: F,
    initialPlanId: H,
    planGroup: G,
    subscriptionTier: U,
    trialId: z,
    referralTrialOfferId: K,
    handleClose: W
  } = e, {
    activeSubscription: V,
    hasFetchedSubscriptions: Y,
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
    isGift: el,
    giftRecipient: ea,
    giftMessage: ei,
    claimableRewards: eo
  } = (0, _.wD)(), es = (0, h.a5)(X), eu = (null == (t = (0, m.Z)()) ? true : t.planSelectionBanner) != null, ec = el && es && null != eo && eo.length > 0 && eu, ed = (0, I.m)(J, q), {
    newPlans: ep
  } = d.ZP.useExperiment({
    location: "d17fd6_3"
  }, {
    autoTrackExposure: false
  }), em = (0, o.e7)([S.default], () => S.default.getCurrentUser()), eh = !el && null != Q && Q === L.Si.TIER_2 && null != em && em.hasHadPremium() && Y && null == V && (0, d.aQ)(ed), ef = (0, g.N)(K), eb = !el && null != ef && null != Q && L.nG[ef.trial_id].skus.includes(Q), eg = (0, b.N)(), ev = null == eg || null == (n = eg.discount) ? true : n.plan_ids.some(e => L.GP[e].skuId === Q), eS = !el && null != eg && null != Q && ev, ey = null != (a = eb || eS) && a, ex = l.useMemo(() => (0, j.V7)({
    skuId: Q,
    isPremium: en,
    multiMonthPlans: eh ? ep : [],
    currentSubscription: V,
    defaultPlanId: ee
  }), [Q, en, ep, V, eh, ee]), eP = eS && ex.includes(L.Xh.PREMIUM_MONTH_TIER_2) ? L.Xh.PREMIUM_MONTH_TIER_2 : ex[0], ej = (0, o.e7)([y.Z], () => y.Z.get(eP)), e_ = [{
    planId: null == ej ? true : ej.id,
    quantity: 1
  }], [eO, ew] = l.useState(ey), [eC, eE] = (0, p.ED)({
    items: e_,
    renewal: false,
    preventFetch: !ey,
    applyEntitlements: true,
    trialId: z,
    paymentSourceId: et.paymentSourceId,
    currency: et.currency
  });
  l.useEffect(() => {
    ey && ew((null == eC ? true : eC.subscriptionPeriodEnd) == null)
  }, [eC, ey]), (0, u.Z)("Payment Modal Plan Select Step", eO, 5, {
    proratedInvoicePreview: eC,
    proratedInvoiceError: eE,
    isEligibleForOffer: ey
  }, {
    tags: {
      app_context: "billing"
    }
  });
  let ek = null != (B = null == eE ? true : eE.message) ? B : Z.intl.string(Z.t.R0RpRX),
    eI = ey && null == eE,
    eT = ey && null != eE;
  return eI && null == V && ey && (null == eC ? true : eC.subscriptionPeriodEnd) == null ? (0, r.jsx)(E.Z, {}) : (i()(null != $, "Step should be set"), i()(ex.length > 0, "Premium plan options should be set"), (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(T.P, {
      giftMessage: ei
    }), !(el && (0, x.pO)(ea)) && (0, r.jsx)(C.Z, {
      isEligibleForTrial: eb
    }), (0, r.jsxs)(k.C3, {
      children: [eI && (0, r.jsx)("hr", {
        className: D.planSelectSeparatorUpper
      }), (0, r.jsx)(R.a, {
        planSkuId: null == ej ? true : ej.skuId,
        referralTrialOfferId: K
      }), (0, r.jsx)(M.Z, {}), (0, r.jsx)(N.Z, {}), eT ? (0, r.jsx)(s.M14, {
        type: "critical",
        children: ek
      }) : (0, r.jsx)(v.O, {
        planOptions: ex,
        eligibleForMultiMonthPlans: eh,
        referralTrialOfferId: K,
        selectedPlanId: null == X ? true : X.id,
        planGroup: G,
        subscriptionPeriodEnd: null == eC ? true : eC.subscriptionPeriodEnd,
        discountInvoiceItems: eS ? null == eC ? true : eC.invoiceItems : true,
        useCompactGiftComponents: ec,
        handleClose: W
      }), eI && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)("hr", {
          className: D.planSelectSeparatorLower
        }), (0, r.jsx)(s.Text, {
          variant: "text-xs/normal",
          children: Z.intl.format(Z.t.BHtnqA, {
            link: P.Z.getArticleURL(A.BhN.PREMIUM_DETAILS_CANCEL_SUB)
          })
        })]
      })]
    }), (0, r.jsxs)(k.O3, {
      children: [ec && (0, r.jsx)(f.c, {}), (0, r.jsx)(s.mzw, {
        "data-migration-pending": true,
        justify: c.Z.Justify.BETWEEN,
        align: c.Z.Align.CENTER,
        className: er,
        children: (0, r.jsx)(v.y, {
          onStepChange: F,
          onBackClick: () => F(w.h8.SKU_SELECT),
          showBackButton: null == H && null == U,
          planOptions: ex,
          shouldRenderUpdatedPaymentModal: eI,
          isTrial: eb
        })
      })]
    })]
  }))
}