/** Chunk was on 37786 **/
/** chunk id: 174827, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  x: () => G
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
  Chunk649662 = require("./649662.js");

function G(e) {
  var t, n, a, G;
  let {
    handleStepChange: H,
    initialPlanId: D,
    planGroup: z,
    subscriptionTier: K,
    trialId: W,
    referralTrialOfferId: Y,
    handleClose: V
  } = e, {
    activeSubscription: q,
    hasFetchedSubscriptions: J,
    paymentSourceId: X,
    paymentSources: Q,
    selectedSkuId: $,
    selectedPlan: ee,
    step: et,
    defaultPlanId: en,
    priceOptions: er,
    isPremium: ei,
    premiumBrandRefreshBackgroundClassName: ea
  } = (0, P.JL)(), {
    isGift: el,
    giftRecipient: eo,
    giftMessage: es,
    claimableRewards: ed
  } = (0, O.wD)(), {
    paymentModalBanner: eC
  } = (0, E.zb)(), ec = (0, _.a5)(ee), eu = (null == (t = (0, p.Z)()) ? true : t.planSelectionBanner) != null, ep = el && ec && null != ed && ed.length > 0 && eu, e_ = (0, A.m)(Q, X), {
    newPlans: ef
  } = c.ZP.useExperiment({
    location: "d17fd6_3"
  }, {
    autoTrackExposure: false
  }), eh = (0, o.e7)([b.default], () => b.default.getCurrentUser()), em = !el && null != $ && $ === B.Si.TIER_2 && null != eh && eh.hasHadPremium() && J && null == q && (0, c.aQ)(e_), ex = (0, m.N)(Y), ej = !el && null != ex && null != $ && B.nG[ex.trial_id].skus.includes($), eg = (0, h.Ng)(), eb = null == eg || null == (n = eg.discount) ? true : n.plan_ids.some(e => B.GP[e].skuId === $), ey = !el && null != eg && null != $ && eb, ev = null != (a = ej || ey) && a, eL = i.useMemo(() => (0, S.V7)({
    skuId: $,
    isPremium: ei,
    multiMonthPlans: em ? ef : [],
    currentSubscription: q,
    defaultPlanId: en
  }), [$, ei, ef, q, em, en]), eS = ey && eL.includes(B.Xh.PREMIUM_MONTH_TIER_2) ? B.Xh.PREMIUM_MONTH_TIER_2 : eL[0], eO = (0, o.e7)([y.Z], () => y.Z.get(eS)), eP = [{
    planId: null == eO ? true : eO.id,
    quantity: 1
  }], [ew, eE] = i.useState(ev), [eI, ek] = (0, u.ED)({
    items: eP,
    renewal: false,
    preventFetch: !ev,
    applyEntitlements: true,
    trialId: W,
    paymentSourceId: er.paymentSourceId,
    currency: er.currency
  });
  i.useEffect(() => {
    ev && eE((null == eI ? true : eI.subscriptionPeriodEnd) == null)
  }, [eI, ev]), (0, d.Z)("Payment Modal Plan Select Step", ew, 5, {
    proratedInvoicePreview: eI,
    proratedInvoiceError: ek,
    isEligibleForOffer: ev
  }, {
    tags: {
      app_context: "billing"
    }
  });
  let eT = null != (G = null == ek ? true : ek.message) ? G : F.intl.string(F.t.R0RpRU),
    eA = ev && null == ek,
    eM = ev && null != ek,
    eZ = eA && null == q && !!ev && (null == eI ? true : eI.subscriptionPeriodEnd) == null,
    eN = !el && (null == eO ? true : eO.skuId) === B.Si.TIER_2 && (null == ex ? true : ex.referrer_id) != null,
    eR = null;
  return (eR = null != eC ? eC : eN ? (0, r.jsx)(j.Z, {}) : (0, r.jsx)(x.Z, {}), eZ) ? (0, r.jsx)(k.Z, {}) : (l()(null != et, "Step should be set"), l()(eL.length > 0, "Premium plan options should be set"), (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(M.P, {
      giftMessage: es
    }), !(el && (0, v.pO)(eo)) && (0, r.jsx)(I.Z, {
      isEligibleForTrial: ej
    }), (0, r.jsxs)(T.C3, {
      children: [eA && (0, r.jsx)("hr", {
        className: U.planSelectSeparatorUpper
      }), eR, (0, r.jsx)(N.Z, {}), (0, r.jsx)(Z.Z, {}), eM ? (0, r.jsx)(s.kzN, {
        children: eT
      }) : (0, r.jsx)(g.O, {
        planOptions: eL,
        eligibleForMultiMonthPlans: em,
        referralTrialOfferId: Y,
        selectedPlanId: null == ee ? true : ee.id,
        planGroup: z,
        subscriptionPeriodEnd: null == eI ? true : eI.subscriptionPeriodEnd,
        discountInvoiceItems: ey ? null == eI ? true : eI.invoiceItems : true,
        useCompactGiftComponents: ep,
        handleClose: V
      }), eA && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)("hr", {
          className: U.planSelectSeparatorLower
        }), (0, r.jsx)(s.Text, {
          variant: "text-xs/normal",
          children: F.intl.format(F.t.BHtnqK, {
            link: L.Z.getArticleURL(R.BhN.PREMIUM_DETAILS_CANCEL_SUB)
          })
        })]
      })]
    }), (0, r.jsxs)(T.O3, {
      children: [ep && (0, r.jsx)(f.c, {}), (0, r.jsx)(s.mzw, {
        "data-migration-pending": true,
        justify: C.Z.Justify.BETWEEN,
        align: C.Z.Align.CENTER,
        className: ea,
        children: (0, r.jsx)(g.y, {
          onStepChange: H,
          onBackClick: () => H(w.h8.SKU_SELECT),
          showBackButton: null == D && null == K,
          planOptions: eL,
          shouldRenderUpdatedPaymentModal: eA,
          isTrial: ej
        })
      })]
    })]
  }))
}