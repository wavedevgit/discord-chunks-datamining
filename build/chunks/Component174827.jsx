/** Chunk was on 31029 **/
/** chunk id: 174827, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  x: () => H
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk512722 = require("./512722.js"),
  l = require.n(Chunk512722),
  Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk975608 = require("./975608.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk711459 = require("./711459.js"),
  Chunk374649 = require("./374649.js"),
  Chunk347896 = require("./347896.js"),
  Chunk717401 = require("./717401.js"),
  Chunk572517 = require("./572517.jsx"),
  Chunk104494 = require("./104494.js"),
  Chunk639119 = require("./639119.js"),
  Chunk642530 = require("./642530.jsx"),
  Chunk381507 = require("./381507.jsx"),
  Chunk314404 = require("./314404.jsx"),
  Chunk594174 = require("./594174.js"),
  Chunk509545 = require("./509545.js"),
  Chunk669079 = require("./669079.js"),
  Chunk63063 = require("./63063.js"),
  Chunk74538 = require("./74538.js"),
  Chunk987209 = require("./987209.jsx"),
  Chunk563132 = require("./563132.jsx"),
  Chunk409813 = require("./409813.js"),
  Chunk107998 = require("./107998.jsx"),
  Chunk51499 = require("./51499.jsx"),
  Chunk456251 = require("./456251.jsx"),
  Chunk614277 = require("./614277.jsx"),
  Chunk435020 = require("./435020.js"),
  Chunk809144 = require("./809144.jsx"),
  Chunk698708 = require("./698708.jsx"),
  Chunk844068 = require("./844068.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk833271 = require("./833271.js");

function H(e) {
  var t, n, a, H;
  let {
    handleStepChange: U,
    initialPlanId: D,
    planGroup: z,
    subscriptionTier: W,
    trialId: K,
    referralTrialOfferId: Y,
    handleClose: V
  } = e, {
    activeSubscription: q,
    hasFetchedSubscriptions: J,
    paymentSourceId: Q,
    paymentSources: X,
    selectedSkuId: $,
    selectedPlan: ee,
    step: et,
    defaultPlanId: en,
    priceOptions: er,
    isPremium: ei,
    premiumBrandRefreshBackgroundClassName: ea
  } = (0, w.JL)(), {
    isGift: el,
    giftRecipient: eo,
    giftMessage: es,
    claimableRewards: ed
  } = (0, I.wD)(), {
    paymentModalBanner: eC
  } = (0, P.zb)(), ec = (0, _.a5)(ee), eu = (null == (t = (0, p.Z)()) ? true : t.planSelectionBanner) != null, ep = el && ec && null != ed && ed.length > 0 && eu, e_ = (0, M.m)(X, Q), {
    newPlans: eh
  } = c.ZP.useExperiment({
    location: "d17fd6_3"
  }, {
    autoTrackExposure: false
  }), em = (0, o.e7)([j.default], () => j.default.getCurrentUser()), ef = !el && null != $ && $ === R.Si.TIER_2 && null != em && em.hasHadPremium() && J && null == q && (0, c.aQ)(e_), ex = (0, f.N)(Y), eg = !el && null != ex && null != $ && R.nG[ex.trial_id].skus.includes($), eb = (0, m.Ng)(), ej = null == eb || null == (n = eb.discount) ? true : n.plan_ids.some(e => R.GP[e].skuId === $), eL = !el && null != eb && null != $ && ej, ev = null != (a = eg || eL) && a, ey = i.useMemo(() => (0, S.V7)({
    skuId: $,
    isPremium: ei,
    multiMonthPlans: ef ? eh : [],
    currentSubscription: q,
    defaultPlanId: en
  }), [$, ei, eh, q, ef, en]), eS = eL && ey.includes(R.Xh.PREMIUM_MONTH_TIER_2) ? R.Xh.PREMIUM_MONTH_TIER_2 : ey[0], eI = (0, o.e7)([L.Z], () => L.Z.get(eS)), ew = [{
    planId: null == eI ? true : eI.id,
    quantity: 1
  }], [eO, eP] = i.useState(ev), [eE, eT] = (0, u.ED)({
    items: ew,
    renewal: false,
    preventFetch: !ev,
    applyEntitlements: true,
    trialId: K,
    paymentSourceId: er.paymentSourceId,
    currency: er.currency
  });
  i.useEffect(() => {
    ev && eP((null == eE ? true : eE.subscriptionPeriodEnd) == null)
  }, [eE, ev]), (0, d.Z)("Payment Modal Plan Select Step", eO, 5, {
    proratedInvoicePreview: eE,
    proratedInvoiceError: eT,
    isEligibleForOffer: ev
  }, {
    tags: {
      app_context: "billing"
    }
  });
  let ek = null != (H = null == eT ? true : eT.message) ? H : F.intl.string(F.t.R0RpRX),
    eM = ev && null == eT,
    eA = ev && null != eT,
    eB = eM && null == q && !!ev && (null == eE ? true : eE.subscriptionPeriodEnd) == null,
    eZ = !el && (null == eI ? true : eI.skuId) === R.Si.TIER_2 && (null == ex ? true : ex.referrer_id) != null,
    eN = null;
  return (eN = null != eC ? eC : eZ ? (0, r.jsx)(g.Z, {}) : (0, r.jsx)(x.Z, {}), eB) ? (0, r.jsx)(T.Z, {}) : (l()(null != et, "Step should be set"), l()(ey.length > 0, "Premium plan options should be set"), (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(A.P, {
      giftMessage: es
    }), !(el && (0, v.pO)(eo)) && (0, r.jsx)(E.Z, {
      isEligibleForTrial: eg
    }), (0, r.jsxs)(k.C3, {
      children: [eM && (0, r.jsx)("hr", {
        className: G.planSelectSeparatorUpper
      }), eN, (0, r.jsx)(Z.Z, {}), (0, r.jsx)(B.Z, {}), eA ? (0, r.jsx)(s.M14, {
        type: "critical",
        children: ek
      }) : (0, r.jsx)(b.O, {
        planOptions: ey,
        eligibleForMultiMonthPlans: ef,
        referralTrialOfferId: Y,
        selectedPlanId: null == ee ? true : ee.id,
        planGroup: z,
        subscriptionPeriodEnd: null == eE ? true : eE.subscriptionPeriodEnd,
        discountInvoiceItems: eL ? null == eE ? true : eE.invoiceItems : true,
        useCompactGiftComponents: ep,
        handleClose: V
      }), eM && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)("hr", {
          className: G.planSelectSeparatorLower
        }), (0, r.jsx)(s.Text, {
          variant: "text-xs/normal",
          children: F.intl.format(F.t.BHtnqA, {
            link: y.Z.getArticleURL(N.BhN.PREMIUM_DETAILS_CANCEL_SUB)
          })
        })]
      })]
    }), (0, r.jsxs)(k.O3, {
      children: [ep && (0, r.jsx)(h.c, {}), (0, r.jsx)(s.mzw, {
        "data-migration-pending": true,
        justify: C.Z.Justify.BETWEEN,
        align: C.Z.Align.CENTER,
        className: ea,
        children: (0, r.jsx)(b.y, {
          onStepChange: U,
          onBackClick: () => U(O.h8.SKU_SELECT),
          showBackButton: null == D && null == W,
          planOptions: ey,
          shouldRenderUpdatedPaymentModal: eM,
          isTrial: eg
        })
      })]
    })]
  }))
}