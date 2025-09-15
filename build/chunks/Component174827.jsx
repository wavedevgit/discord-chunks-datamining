/** Chunk was on 54400 **/
/** chunk id: 174827, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  x: () => G
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
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
  Chunk657517 = require("./657517.jsx"),
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
  Chunk27034 = require("./27034.jsx"),
  Chunk435020 = require("./435020.js"),
  Chunk809144 = require("./809144.jsx"),
  Chunk698708 = require("./698708.jsx"),
  Chunk844068 = require("./844068.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk833271 = require("./833271.js");

function G(e) {
  var t, n, l, G;
  let {
    handleStepChange: D,
    initialPlanId: K,
    planGroup: z,
    subscriptionTier: W,
    trialId: Y,
    referralTrialOfferId: V,
    handleClose: q
  } = e, {
    activeSubscription: J,
    hasFetchedSubscriptions: Q,
    paymentSourceId: X,
    paymentSources: $,
    selectedSkuId: ee,
    selectedPlan: et,
    step: en,
    defaultPlanId: er,
    priceOptions: ei,
    isPremium: el,
    premiumBrandRefreshBackgroundClassName: ea,
    shouldShowSeptemberMarketingMomentBanner: es
  } = (0, P.JL)(), {
    isGift: eo,
    giftRecipient: eC,
    giftMessage: ed,
    claimableRewards: ec
  } = (0, O.wD)(), {
    paymentModalBanner: eu
  } = (0, w.zb)(), ep = (0, x.a5)(et), ex = (null == (t = (0, p.Z)()) ? true : t.planSelectionBanner) != null, e_ = eo && ep && null != ec && ec.length > 0 && ex, eh = (0, I.m)($, X), {
    newPlans: ef
  } = c.ZP.useExperiment({
    location: "d17fd6_3"
  }, {
    autoTrackExposure: false
  }), em = (0, s.e7)([g.default], () => g.default.getCurrentUser()), ej = !eo && null != ee && ee === U.Si.TIER_2 && null != em && em.hasHadPremium() && Q && null == J && (0, c.aQ)(eh), eL = (0, f.N)(V), eb = !eo && null != eL && null != ee && U.nG[eL.trial_id].skus.includes(ee), eg = (0, h.Ng)(), eS = null == eg || null == (n = eg.discount) ? true : n.plan_ids.some(e => U.GP[e].skuId === ee), ey = !eo && null != eg && null != ee && eS, ev = null != (l = eb || ey) && l, eE = i.useMemo(() => (0, E.V7)({
    skuId: ee,
    isPremium: el,
    multiMonthPlans: ej ? ef : [],
    currentSubscription: J,
    defaultPlanId: er
  }), [ee, el, ef, J, ej, er]), eO = ey && eE.includes(U.Xh.PREMIUM_MONTH_TIER_2) ? U.Xh.PREMIUM_MONTH_TIER_2 : eE[0], eP = (0, s.e7)([S.Z], () => S.Z.get(eO)), eM = [{
    planId: null == eP ? true : eP.id,
    quantity: 1
  }], [ew, ek] = i.useState(ev), [eA, eT] = (0, u.ED)({
    items: eM,
    renewal: false,
    preventFetch: !ev,
    applyEntitlements: true,
    trialId: Y,
    paymentSourceId: ei.paymentSourceId,
    currency: ei.currency
  });
  i.useEffect(() => {
    ev && ek((null == eA ? true : eA.subscriptionPeriodEnd) == null)
  }, [eA, ev]), (0, C.Z)("Payment Modal Plan Select Step", ew, 5, {
    proratedInvoicePreview: eA,
    proratedInvoiceError: eT,
    isEligibleForOffer: ev
  }, {
    tags: {
      app_context: "billing"
    }
  });
  let eI = null != (G = null == eT ? true : eT.message) ? G : H.intl.string(H.t.R0RpRU),
    eZ = ev && null == eT,
    eN = ev && null != eT,
    eB = eZ && null == J && !!ev && (null == eA ? true : eA.subscriptionPeriodEnd) == null,
    eR = !eo && (null == eP ? true : eP.skuId) === U.Si.TIER_2 && (null == eL ? true : eL.referrer_id) != null,
    eU = null;
  return (eU = null != eu ? eu : eR ? (0, r.jsx)(j.Z, {}) : (0, r.jsx)(m.Z, {}), eB) ? (0, r.jsx)(A.Z, {}) : (a()(null != en, "Step should be set"), a()(eE.length > 0, "Premium plan options should be set"), (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(Z.P, {
      giftMessage: ed
    }), !(eo && (0, y.pO)(eC)) && (0, r.jsx)(k.Z, {
      isEligibleForTrial: eb
    }), (0, r.jsxs)(T.C3, {
      children: [eZ && (0, r.jsx)("hr", {
        className: F.planSelectSeparatorUpper
      }), eU, true === es && (0, r.jsx)(b.Y, {}), (0, r.jsx)(B.Z, {}), (0, r.jsx)(N.Z, {}), eN ? (0, r.jsx)(o.kzN, {
        children: eI
      }) : (0, r.jsx)(L.O, {
        planOptions: eE,
        eligibleForMultiMonthPlans: ej,
        referralTrialOfferId: V,
        selectedPlanId: null == et ? true : et.id,
        planGroup: z,
        subscriptionPeriodEnd: null == eA ? true : eA.subscriptionPeriodEnd,
        discountInvoiceItems: ey ? null == eA ? true : eA.invoiceItems : true,
        useCompactGiftComponents: e_,
        handleClose: q
      }), eZ && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)("hr", {
          className: F.planSelectSeparatorLower
        }), (0, r.jsx)(o.Text, {
          variant: "text-xs/normal",
          children: H.intl.format(H.t.BHtnqK, {
            link: v.Z.getArticleURL(R.BhN.PREMIUM_DETAILS_CANCEL_SUB)
          })
        })]
      })]
    }), (0, r.jsxs)(T.O3, {
      children: [e_ && (0, r.jsx)(_.c, {}), (0, r.jsx)(o.mzw, {
        "data-migration-pending": true,
        justify: d.Z.Justify.BETWEEN,
        align: d.Z.Align.CENTER,
        className: ea,
        children: (0, r.jsx)(L.y, {
          onStepChange: D,
          onBackClick: () => D(M.h8.SKU_SELECT),
          showBackButton: null == K && null == W,
          planOptions: eE,
          shouldRenderUpdatedPaymentModal: eZ,
          isTrial: eb
        })
      })]
    })]
  }))
}