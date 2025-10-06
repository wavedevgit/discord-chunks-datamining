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

function G(e) {
  var t, n, a, G;
  let {
    handleStepChange: H,
    initialPlanId: D,
    planGroup: z,
    subscriptionTier: K,
    trialId: Y,
    referralTrialOfferId: W,
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
    isGift: eo,
    giftRecipient: el,
    giftMessage: es,
    claimableRewards: ed
  } = (0, O.wD)(), {
    paymentModalBanner: eC
  } = (0, E.zb)(), ec = (0, _.a5)(ee), eu = (null == (t = (0, p.Z)()) ? true : t.planSelectionBanner) != null, ep = eo && ec && null != ed && ed.length > 0 && eu, e_ = (0, A.m)(Q, X), {
    newPlans: ef
  } = c.ZP.useExperiment({
    location: "d17fd6_3"
  }, {
    autoTrackExposure: false
  }), eh = (0, l.e7)([b.default], () => b.default.getCurrentUser()), em = !eo && null != $ && $ === B.Si.TIER_2 && null != eh && eh.hasHadPremium() && J && null == q && (0, c.aQ)(e_), ex = (0, m.N)(W), eg = !eo && null != ex && null != $ && B.nG[ex.trial_id].skus.includes($), ej = (0, h.Ng)(), eb = null == ej || null == (n = ej.discount) ? true : n.plan_ids.some(e => B.GP[e].skuId === $), ey = !eo && null != ej && null != $ && eb, eL = null != (a = eg || ey) && a, ev = i.useMemo(() => (0, S.V7)({
    skuId: $,
    isPremium: ei,
    multiMonthPlans: em ? ef : [],
    currentSubscription: q,
    defaultPlanId: en
  }), [$, ei, ef, q, em, en]), eS = ey && ev.includes(B.Xh.PREMIUM_MONTH_TIER_2) ? B.Xh.PREMIUM_MONTH_TIER_2 : ev[0], eO = (0, l.e7)([y.Z], () => y.Z.get(eS)), eP = [{
    planId: null == eO ? true : eO.id,
    quantity: 1
  }], [ew, eE] = i.useState(eL), [eI, ek] = (0, u.ED)({
    items: eP,
    renewal: false,
    preventFetch: !eL,
    applyEntitlements: true,
    trialId: Y,
    paymentSourceId: er.paymentSourceId,
    currency: er.currency
  });
  i.useEffect(() => {
    eL && eE((null == eI ? true : eI.subscriptionPeriodEnd) == null)
  }, [eI, eL]), (0, d.Z)("Payment Modal Plan Select Step", ew, 5, {
    proratedInvoicePreview: eI,
    proratedInvoiceError: ek,
    isEligibleForOffer: eL
  }, {
    tags: {
      app_context: "billing"
    }
  });
  let eT = null != (G = null == ek ? true : ek.message) ? G : F.intl.string(F.t.R0RpRU),
    eA = eL && null == ek,
    eM = eL && null != ek,
    eZ = eA && null == q && !!eL && (null == eI ? true : eI.subscriptionPeriodEnd) == null,
    eN = !eo && (null == eO ? true : eO.skuId) === B.Si.TIER_2 && (null == ex ? true : ex.referrer_id) != null,
    eR = null;
  return (eR = null != eC ? eC : eN ? (0, r.jsx)(g.Z, {}) : (0, r.jsx)(x.Z, {}), eZ) ? (0, r.jsx)(k.Z, {}) : (o()(null != et, "Step should be set"), o()(ev.length > 0, "Premium plan options should be set"), (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(M.P, {
      giftMessage: es
    }), !(eo && (0, L.pO)(el)) && (0, r.jsx)(I.Z, {
      isEligibleForTrial: eg
    }), (0, r.jsxs)(T.C3, {
      children: [eA && (0, r.jsx)("hr", {
        className: U.planSelectSeparatorUpper
      }), eR, (0, r.jsx)(N.Z, {}), (0, r.jsx)(Z.Z, {}), eM ? (0, r.jsx)(s.kzN, {
        children: eT
      }) : (0, r.jsx)(j.O, {
        planOptions: ev,
        eligibleForMultiMonthPlans: em,
        referralTrialOfferId: W,
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
            link: v.Z.getArticleURL(R.BhN.PREMIUM_DETAILS_CANCEL_SUB)
          })
        })]
      })]
    }), (0, r.jsxs)(T.O3, {
      children: [ep && (0, r.jsx)(f.c, {}), (0, r.jsx)(s.mzw, {
        "data-migration-pending": true,
        justify: C.Z.Justify.BETWEEN,
        align: C.Z.Align.CENTER,
        className: ea,
        children: (0, r.jsx)(j.y, {
          onStepChange: H,
          onBackClick: () => H(w.h8.SKU_SELECT),
          showBackButton: null == D && null == K,
          planOptions: ev,
          shouldRenderUpdatedPaymentModal: eA,
          isTrial: eg
        })
      })]
    })]
  }))
}