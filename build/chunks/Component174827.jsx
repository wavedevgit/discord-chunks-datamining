/** Chunk was on 54400 **/
/** chunk id: 174827, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  x: () => N
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk512722 = require("./512722.js"),
  s = require.n(Chunk512722),
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

function N(e) {
  var n, t, l, N;
  let {
    handleStepChange: G,
    initialPlanId: D,
    planGroup: W,
    subscriptionTier: z,
    trialId: Y,
    referralTrialOfferId: K,
    handleClose: V
  } = e, {
    activeSubscription: q,
    hasFetchedSubscriptions: J,
    paymentSourceId: Q,
    paymentSources: X,
    selectedSkuId: $,
    selectedPlan: ee,
    step: en,
    defaultPlanId: et,
    priceOptions: er,
    isPremium: ei,
    premiumBrandRefreshBackgroundClassName: el
  } = (0, O.JL)(), {
    isGift: es,
    giftRecipient: ea,
    giftMessage: eo,
    claimableRewards: eC
  } = (0, P.wD)(), {
    paymentModalBanner: ed
  } = (0, v.zb)(), ep = (0, x.a5)(ee), ec = (null == (n = (0, u.Z)()) ? true : n.planSelectionBanner) != null, eu = es && ep && null != eC && eC.length > 0 && ec, ex = (0, A.m)(X, Q), {
    newPlans: e_
  } = p.ZP.useExperiment({
    location: "d17fd6_3"
  }, {
    autoTrackExposure: false
  }), ef = (0, a.e7)([g.default], () => g.default.getCurrentUser()), eh = !es && null != $ && $ === R.Si.TIER_2 && null != ef && ef.hasHadPremium() && J && null == q && (0, p.aQ)(ex), ej = (0, h.N)(K), eL = !es && null != ej && null != $ && R.nG[ej.trial_id].skus.includes($), em = (0, f.Ng)(), eg = null == em || null == (t = em.discount) ? true : t.plan_ids.some(e => R.GP[e].skuId === $), eS = !es && null != em && null != $ && eg, ey = null != (l = eL || eS) && l, eE = i.useMemo(() => (0, b.V7)({
    skuId: $,
    isPremium: ei,
    multiMonthPlans: eh ? e_ : [],
    currentSubscription: q,
    defaultPlanId: et
  }), [$, ei, e_, q, eh, et]), eb = eS && eE.includes(R.Xh.PREMIUM_MONTH_TIER_2) ? R.Xh.PREMIUM_MONTH_TIER_2 : eE[0], eP = (0, a.e7)([S.Z], () => S.Z.get(eb)), eO = [{
    planId: null == eP ? true : eP.id,
    quantity: 1
  }], [eI, ev] = i.useState(ey), [eZ, eM] = (0, c.ED)({
    items: eO,
    renewal: false,
    preventFetch: !ey,
    applyEntitlements: true,
    trialId: Y,
    paymentSourceId: er.paymentSourceId,
    currency: er.currency
  });
  i.useEffect(() => {
    ey && ev((null == eZ ? true : eZ.subscriptionPeriodEnd) == null)
  }, [eZ, ey]), (0, C.Z)("Payment Modal Plan Select Step", eI, 5, {
    proratedInvoicePreview: eZ,
    proratedInvoiceError: eM,
    isEligibleForOffer: ey
  }, {
    tags: {
      app_context: "billing"
    }
  });
  let ew = null != (N = null == eM ? true : eM.message) ? N : H.intl.string(H.t.R0RpRU),
    eA = ey && null == eM,
    eB = ey && null != eM,
    eT = eA && null == q && !!ey && (null == eZ ? true : eZ.subscriptionPeriodEnd) == null,
    eU = !es && (null == eP ? true : eP.skuId) === R.Si.TIER_2 && (null == ej ? true : ej.referrer_id) != null,
    ek = null;
  return (ek = null != ed ? ed : eU ? (0, r.jsx)(L.Z, {}) : (0, r.jsx)(j.Z, {}), eT) ? (0, r.jsx)(M.Z, {}) : (s()(null != en, "Step should be set"), s()(eE.length > 0, "Premium plan options should be set"), (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(B.P, {
      giftMessage: eo
    }), !(es && (0, y.pO)(ea)) && (0, r.jsx)(Z.Z, {
      isEligibleForTrial: eL
    }), (0, r.jsxs)(w.C3, {
      children: [eA && (0, r.jsx)("hr", {
        className: F.planSelectSeparatorUpper
      }), ek, (0, r.jsx)(U.Z, {}), (0, r.jsx)(T.Z, {}), eB ? (0, r.jsx)(o.kzN, {
        children: ew
      }) : (0, r.jsx)(m.O, {
        planOptions: eE,
        eligibleForMultiMonthPlans: eh,
        referralTrialOfferId: K,
        selectedPlanId: null == ee ? true : ee.id,
        planGroup: W,
        subscriptionPeriodEnd: null == eZ ? true : eZ.subscriptionPeriodEnd,
        discountInvoiceItems: eS ? null == eZ ? true : eZ.invoiceItems : true,
        useCompactGiftComponents: eu,
        handleClose: V
      }), eA && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)("hr", {
          className: F.planSelectSeparatorLower
        }), (0, r.jsx)(o.Text, {
          variant: "text-xs/normal",
          children: H.intl.format(H.t.BHtnqK, {
            link: E.Z.getArticleURL(k.BhN.PREMIUM_DETAILS_CANCEL_SUB)
          })
        })]
      })]
    }), (0, r.jsxs)(w.O3, {
      children: [eu && (0, r.jsx)(_.c, {}), (0, r.jsx)(o.mzw, {
        "data-migration-pending": true,
        justify: d.Z.Justify.BETWEEN,
        align: d.Z.Align.CENTER,
        className: el,
        children: (0, r.jsx)(m.y, {
          onStepChange: G,
          onBackClick: () => G(I.h8.SKU_SELECT),
          showBackButton: null == D && null == z,
          planOptions: eE,
          shouldRenderUpdatedPaymentModal: eA,
          isTrial: eL
        })
      })]
    })]
  }))
}