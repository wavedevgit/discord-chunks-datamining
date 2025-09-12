/** Chunk was on 54400 **/
/** chunk id: 174827, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  x: () => F
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

function F(e) {
  var t, n, l, F;
  let {
    handleStepChange: G,
    initialPlanId: D,
    planGroup: K,
    subscriptionTier: z,
    trialId: W,
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
    premiumBrandRefreshBackgroundClassName: el
  } = (0, O.JL)(), {
    isGift: ea,
    giftRecipient: es,
    giftMessage: eo,
    claimableRewards: eC
  } = (0, E.wD)(), {
    paymentModalBanner: ed
  } = (0, M.zb)(), ec = (0, x.a5)(ee), eu = (null == (t = (0, p.Z)()) ? true : t.planSelectionBanner) != null, ep = ea && ec && null != eC && eC.length > 0 && eu, ex = (0, T.m)(X, Q), {
    newPlans: e_
  } = c.ZP.useExperiment({
    location: "d17fd6_3"
  }, {
    autoTrackExposure: false
  }), eh = (0, s.e7)([b.default], () => b.default.getCurrentUser()), ef = !ea && null != $ && $ === R.Si.TIER_2 && null != eh && eh.hasHadPremium() && J && null == q && (0, c.aQ)(ex), em = (0, f.N)(Y), ej = !ea && null != em && null != $ && R.nG[em.trial_id].skus.includes($), eL = (0, h.Ng)(), eb = null == eL || null == (n = eL.discount) ? true : n.plan_ids.some(e => R.GP[e].skuId === $), eg = !ea && null != eL && null != $ && eb, eS = null != (l = ej || eg) && l, ey = i.useMemo(() => (0, v.V7)({
    skuId: $,
    isPremium: ei,
    multiMonthPlans: ef ? e_ : [],
    currentSubscription: q,
    defaultPlanId: en
  }), [$, ei, e_, q, ef, en]), ev = eg && ey.includes(R.Xh.PREMIUM_MONTH_TIER_2) ? R.Xh.PREMIUM_MONTH_TIER_2 : ey[0], eE = (0, s.e7)([g.Z], () => g.Z.get(ev)), eO = [{
    planId: null == eE ? true : eE.id,
    quantity: 1
  }], [eP, eM] = i.useState(eS), [ew, ek] = (0, u.ED)({
    items: eO,
    renewal: false,
    preventFetch: !eS,
    applyEntitlements: true,
    trialId: W,
    paymentSourceId: er.paymentSourceId,
    currency: er.currency
  });
  i.useEffect(() => {
    eS && eM((null == ew ? true : ew.subscriptionPeriodEnd) == null)
  }, [ew, eS]), (0, C.Z)("Payment Modal Plan Select Step", eP, 5, {
    proratedInvoicePreview: ew,
    proratedInvoiceError: ek,
    isEligibleForOffer: eS
  }, {
    tags: {
      app_context: "billing"
    }
  });
  let eA = null != (F = null == ek ? true : ek.message) ? F : U.intl.string(U.t.R0RpRU),
    eT = eS && null == ek,
    eI = eS && null != ek,
    eZ = eT && null == q && !!eS && (null == ew ? true : ew.subscriptionPeriodEnd) == null,
    eN = !ea && (null == eE ? true : eE.skuId) === R.Si.TIER_2 && (null == em ? true : em.referrer_id) != null,
    eB = null;
  return (eB = null != ed ? ed : eN ? (0, r.jsx)(j.Z, {}) : (0, r.jsx)(m.Z, {}), eZ) ? (0, r.jsx)(k.Z, {}) : (a()(null != et, "Step should be set"), a()(ey.length > 0, "Premium plan options should be set"), (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(I.P, {
      giftMessage: eo
    }), !(ea && (0, S.pO)(es)) && (0, r.jsx)(w.Z, {
      isEligibleForTrial: ej
    }), (0, r.jsxs)(A.C3, {
      children: [eT && (0, r.jsx)("hr", {
        className: H.planSelectSeparatorUpper
      }), eB, (0, r.jsx)(N.Z, {}), (0, r.jsx)(Z.Z, {}), eI ? (0, r.jsx)(o.kzN, {
        children: eA
      }) : (0, r.jsx)(L.O, {
        planOptions: ey,
        eligibleForMultiMonthPlans: ef,
        referralTrialOfferId: Y,
        selectedPlanId: null == ee ? true : ee.id,
        planGroup: K,
        subscriptionPeriodEnd: null == ew ? true : ew.subscriptionPeriodEnd,
        discountInvoiceItems: eg ? null == ew ? true : ew.invoiceItems : true,
        useCompactGiftComponents: ep,
        handleClose: V
      }), eT && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)("hr", {
          className: H.planSelectSeparatorLower
        }), (0, r.jsx)(o.Text, {
          variant: "text-xs/normal",
          children: U.intl.format(U.t.BHtnqK, {
            link: y.Z.getArticleURL(B.BhN.PREMIUM_DETAILS_CANCEL_SUB)
          })
        })]
      })]
    }), (0, r.jsxs)(A.O3, {
      children: [ep && (0, r.jsx)(_.c, {}), (0, r.jsx)(o.mzw, {
        "data-migration-pending": true,
        justify: d.Z.Justify.BETWEEN,
        align: d.Z.Align.CENTER,
        className: el,
        children: (0, r.jsx)(L.y, {
          onStepChange: G,
          onBackClick: () => G(P.h8.SKU_SELECT),
          showBackButton: null == D && null == z,
          planOptions: ey,
          shouldRenderUpdatedPaymentModal: eT,
          isTrial: ej
        })
      })]
    })]
  }))
}