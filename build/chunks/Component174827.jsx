/** Chunk was on 84071 **/
/** chunk id: 174827, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  x: () => G
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
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
    initialPlanId: Y,
    planGroup: z,
    subscriptionTier: K,
    trialId: W,
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
    premiumBrandRefreshBackgroundClassName: eo,
    shouldShowSeptemberMarketingMomentBanner: ea
  } = (0, I.JL)(), {
    isGift: es,
    giftRecipient: eC,
    giftMessage: ed,
    claimableRewards: ec
  } = (0, O.wD)(), {
    paymentModalBanner: eu
  } = (0, w.zb)(), ep = (0, _.a5)(et), e_ = (null == (t = (0, p.Z)()) ? true : t.planSelectionBanner) != null, eh = es && ep && null != ec && ec.length > 0 && e_, ef = (0, A.m)($, X), {
    newPlans: ex
  } = c.ZP.useExperiment({
    location: "d17fd6_3"
  }, {
    autoTrackExposure: false
  }), em = (0, a.e7)([L.default], () => L.default.getCurrentUser()), ej = !es && null != ee && ee === B.Si.TIER_2 && null != em && em.hasHadPremium() && Q && null == J && (0, c.aQ)(ef), eb = (0, x.N)(V), eg = !es && null != eb && null != ee && B.nG[eb.trial_id].skus.includes(ee), eL = (0, f.Ng)(), ey = null == eL || null == (n = eL.discount) ? true : n.plan_ids.some(e => B.GP[e].skuId === ee), eS = !es && null != eL && null != ee && ey, ev = null != (l = eg || eS) && l, eE = i.useMemo(() => (0, E.V7)({
    skuId: ee,
    isPremium: el,
    multiMonthPlans: ej ? ex : [],
    currentSubscription: J,
    defaultPlanId: er
  }), [ee, el, ex, J, ej, er]), eO = eS && eE.includes(B.Xh.PREMIUM_MONTH_TIER_2) ? B.Xh.PREMIUM_MONTH_TIER_2 : eE[0], eI = (0, a.e7)([y.Z], () => y.Z.get(eO)), eP = [{
    planId: null == eI ? true : eI.id,
    quantity: 1
  }], [ew, ek] = i.useState(ev), [eM, eT] = (0, u.ED)({
    items: eP,
    renewal: false,
    preventFetch: !ev,
    applyEntitlements: true,
    trialId: W,
    paymentSourceId: ei.paymentSourceId,
    currency: ei.currency
  });
  i.useEffect(() => {
    ev && ek((null == eM ? true : eM.subscriptionPeriodEnd) == null)
  }, [eM, ev]), (0, C.Z)("Payment Modal Plan Select Step", ew, 5, {
    proratedInvoicePreview: eM,
    proratedInvoiceError: eT,
    isEligibleForOffer: ev
  }, {
    tags: {
      app_context: "billing"
    }
  });
  let eA = null != (G = null == eT ? true : eT.message) ? G : U.intl.string(U.t.R0RpRU),
    eZ = ev && null == eT,
    eN = ev && null != eT,
    eF = eZ && null == J && !!ev && (null == eM ? true : eM.subscriptionPeriodEnd) == null,
    eR = !es && (null == eI ? true : eI.skuId) === B.Si.TIER_2 && (null == eb ? true : eb.referrer_id) != null,
    eB = null;
  return (eB = null != eu ? eu : eR ? (0, r.jsx)(j.Z, {}) : (0, r.jsx)(m.Z, {}), eF) ? (0, r.jsx)(M.Z, {}) : (o()(null != en, "Step should be set"), o()(eE.length > 0, "Premium plan options should be set"), (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(Z.P, {
      giftMessage: ed
    }), !(es && (0, S.pO)(eC)) && (0, r.jsx)(k.Z, {
      isEligibleForTrial: eg
    }), (0, r.jsxs)(T.C3, {
      children: [eZ && (0, r.jsx)("hr", {
        className: H.planSelectSeparatorUpper
      }), eB, true === ea && (0, r.jsx)(g.Y, {}), (0, r.jsx)(F.Z, {}), (0, r.jsx)(N.Z, {}), eN ? (0, r.jsx)(s.kzN, {
        children: eA
      }) : (0, r.jsx)(b.O, {
        planOptions: eE,
        eligibleForMultiMonthPlans: ej,
        referralTrialOfferId: V,
        selectedPlanId: null == et ? true : et.id,
        planGroup: z,
        subscriptionPeriodEnd: null == eM ? true : eM.subscriptionPeriodEnd,
        discountInvoiceItems: eS ? null == eM ? true : eM.invoiceItems : true,
        useCompactGiftComponents: eh,
        handleClose: q
      }), eZ && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)("hr", {
          className: H.planSelectSeparatorLower
        }), (0, r.jsx)(s.Text, {
          variant: "text-xs/normal",
          children: U.intl.format(U.t.BHtnqK, {
            link: v.Z.getArticleURL(R.BhN.PREMIUM_DETAILS_CANCEL_SUB)
          })
        })]
      })]
    }), (0, r.jsxs)(T.O3, {
      children: [eh && (0, r.jsx)(h.c, {}), (0, r.jsx)(s.mzw, {
        "data-migration-pending": true,
        justify: d.Z.Justify.BETWEEN,
        align: d.Z.Align.CENTER,
        className: eo,
        children: (0, r.jsx)(b.y, {
          onStepChange: D,
          onBackClick: () => D(P.h8.SKU_SELECT),
          showBackButton: null == Y && null == K,
          planOptions: eE,
          shouldRenderUpdatedPaymentModal: eZ,
          isTrial: eg
        })
      })]
    })]
  }))
}