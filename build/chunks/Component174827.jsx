/** Chunk was on 4125 **/
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
  Chunk649662 = require("./649662.js");

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
  } = (0, w.zb)(), ep = (0, x.a5)(et), ex = (null == (t = (0, p.Z)()) ? true : t.planSelectionBanner) != null, eh = eo && ep && null != ec && ec.length > 0 && ex, ef = (0, A.m)($, X), {
    newPlans: e_
  } = c.ZP.useExperiment({
    location: "d17fd6_3"
  }, {
    autoTrackExposure: false
  }), em = (0, s.e7)([L.default], () => L.default.getCurrentUser()), ej = !eo && null != ee && ee === U.Si.TIER_2 && null != em && em.hasHadPremium() && Q && null == J && (0, c.aQ)(ef), eg = (0, _.N)(V), eb = !eo && null != eg && null != ee && U.nG[eg.trial_id].skus.includes(ee), eL = (0, f.Ng)(), ey = null == eL || null == (n = eL.discount) ? true : n.plan_ids.some(e => U.GP[e].skuId === ee), eS = !eo && null != eL && null != ee && ey, ev = null != (l = eb || eS) && l, eE = i.useMemo(() => (0, E.V7)({
    skuId: ee,
    isPremium: el,
    multiMonthPlans: ej ? e_ : [],
    currentSubscription: J,
    defaultPlanId: er
  }), [ee, el, e_, J, ej, er]), eO = eS && eE.includes(U.Xh.PREMIUM_MONTH_TIER_2) ? U.Xh.PREMIUM_MONTH_TIER_2 : eE[0], eP = (0, s.e7)([y.Z], () => y.Z.get(eO)), ek = [{
    planId: null == eP ? true : eP.id,
    quantity: 1
  }], [ew, eM] = i.useState(ev), [eI, eT] = (0, u.ED)({
    items: ek,
    renewal: false,
    preventFetch: !ev,
    applyEntitlements: true,
    trialId: Y,
    paymentSourceId: ei.paymentSourceId,
    currency: ei.currency
  });
  i.useEffect(() => {
    ev && eM((null == eI ? true : eI.subscriptionPeriodEnd) == null)
  }, [eI, ev]), (0, C.Z)("Payment Modal Plan Select Step", ew, 5, {
    proratedInvoicePreview: eI,
    proratedInvoiceError: eT,
    isEligibleForOffer: ev
  }, {
    tags: {
      app_context: "billing"
    }
  });
  let eA = null != (G = null == eT ? true : eT.message) ? G : H.intl.string(H.t.R0RpRU),
    eZ = ev && null == eT,
    eN = ev && null != eT,
    eR = eZ && null == J && !!ev && (null == eI ? true : eI.subscriptionPeriodEnd) == null,
    eB = !eo && (null == eP ? true : eP.skuId) === U.Si.TIER_2 && (null == eg ? true : eg.referrer_id) != null,
    eU = null;
  return (eU = null != eu ? eu : eB ? (0, r.jsx)(j.Z, {}) : (0, r.jsx)(m.Z, {}), eR) ? (0, r.jsx)(I.Z, {}) : (a()(null != en, "Step should be set"), a()(eE.length > 0, "Premium plan options should be set"), (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(Z.P, {
      giftMessage: ed
    }), !(eo && (0, S.pO)(eC)) && (0, r.jsx)(M.Z, {
      isEligibleForTrial: eb
    }), (0, r.jsxs)(T.C3, {
      children: [eZ && (0, r.jsx)("hr", {
        className: F.planSelectSeparatorUpper
      }), eU, true === es && (0, r.jsx)(b.Y, {}), (0, r.jsx)(R.Z, {}), (0, r.jsx)(N.Z, {}), eN ? (0, r.jsx)(o.kzN, {
        children: eA
      }) : (0, r.jsx)(g.O, {
        planOptions: eE,
        eligibleForMultiMonthPlans: ej,
        referralTrialOfferId: V,
        selectedPlanId: null == et ? true : et.id,
        planGroup: z,
        subscriptionPeriodEnd: null == eI ? true : eI.subscriptionPeriodEnd,
        discountInvoiceItems: eS ? null == eI ? true : eI.invoiceItems : true,
        useCompactGiftComponents: eh,
        handleClose: q
      }), eZ && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)("hr", {
          className: F.planSelectSeparatorLower
        }), (0, r.jsx)(o.Text, {
          variant: "text-xs/normal",
          children: H.intl.format(H.t.BHtnqK, {
            link: v.Z.getArticleURL(B.BhN.PREMIUM_DETAILS_CANCEL_SUB)
          })
        })]
      })]
    }), (0, r.jsxs)(T.O3, {
      children: [eh && (0, r.jsx)(h.c, {}), (0, r.jsx)(o.mzw, {
        "data-migration-pending": true,
        justify: d.Z.Justify.BETWEEN,
        align: d.Z.Align.CENTER,
        className: ea,
        children: (0, r.jsx)(g.y, {
          onStepChange: D,
          onBackClick: () => D(k.h8.SKU_SELECT),
          showBackButton: null == K && null == W,
          planOptions: eE,
          shouldRenderUpdatedPaymentModal: eZ,
          isTrial: eb
        })
      })]
    })]
  }))
}