/** Chunk was on 54433 **/
/** chunk id: 174827, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  x: () => F
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
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

function F(e) {
  var n, t, l, F;
  let {
    handleStepChange: G,
    initialPlanId: D,
    planGroup: z,
    subscriptionTier: W,
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
    priceOptions: ei,
    isPremium: er,
    premiumBrandRefreshBackgroundClassName: el
  } = (0, O.JL)(), {
    isGift: es,
    giftRecipient: ea,
    giftMessage: eo,
    claimableRewards: eC
  } = (0, P.wD)(), {
    paymentModalBanner: ed
  } = (0, Z.zb)(), ec = (0, x.a5)(ee), eu = (null == (n = (0, p.Z)()) ? true : n.planSelectionBanner) != null, ep = es && ec && null != eC && eC.length > 0 && eu, ex = (0, w.m)(X, Q), {
    newPlans: eh
  } = c.ZP.useExperiment({
    location: "d17fd6_3"
  }, {
    autoTrackExposure: false
  }), ej = (0, a.e7)([g.default], () => g.default.getCurrentUser()), ef = !es && null != $ && $ === k.Si.TIER_2 && null != ej && ej.hasHadPremium() && J && null == q && (0, c.aQ)(ex), em = (0, f.N)(K), e_ = !es && null != em && null != $ && k.nG[em.trial_id].skus.includes($), eL = (0, j.Ng)(), eg = null == eL || null == (t = eL.discount) ? true : t.plan_ids.some(e => k.GP[e].skuId === $), ey = !es && null != eL && null != $ && eg, eE = null != (l = e_ || ey) && l, eS = r.useMemo(() => (0, v.V7)({
    skuId: $,
    isPremium: er,
    multiMonthPlans: ef ? eh : [],
    currentSubscription: q,
    defaultPlanId: et
  }), [$, er, eh, q, ef, et]), ev = ey && eS.includes(k.Xh.PREMIUM_MONTH_TIER_2) ? k.Xh.PREMIUM_MONTH_TIER_2 : eS[0], eP = (0, a.e7)([y.Z], () => y.Z.get(ev)), eO = [{
    planId: null == eP ? true : eP.id,
    quantity: 1
  }], [eb, eZ] = r.useState(eE), [eI, eM] = (0, u.ED)({
    items: eO,
    renewal: false,
    preventFetch: !eE,
    applyEntitlements: true,
    trialId: Y,
    paymentSourceId: ei.paymentSourceId,
    currency: ei.currency
  });
  r.useEffect(() => {
    eE && eZ((null == eI ? true : eI.subscriptionPeriodEnd) == null)
  }, [eI, eE]), (0, C.Z)("Payment Modal Plan Select Step", eb, 5, {
    proratedInvoicePreview: eI,
    proratedInvoiceError: eM,
    isEligibleForOffer: eE
  }, {
    tags: {
      app_context: "billing"
    }
  });
  let eT = null != (F = null == eM ? true : eM.message) ? F : B.intl.string(B.t.R0RpRU),
    ew = eE && null == eM,
    eA = eE && null != eM,
    eR = ew && null == q && !!eE && (null == eI ? true : eI.subscriptionPeriodEnd) == null,
    eN = !es && (null == eP ? true : eP.skuId) === k.Si.TIER_2 && (null == em ? true : em.referrer_id) != null,
    eU = null;
  return (eU = null != ed ? ed : eN ? (0, i.jsx)(_.Z, {}) : (0, i.jsx)(m.Z, {}), eR) ? (0, i.jsx)(M.Z, {}) : (s()(null != en, "Step should be set"), s()(eS.length > 0, "Premium plan options should be set"), (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(A.P, {
      giftMessage: eo
    }), !(es && (0, E.pO)(ea)) && (0, i.jsx)(I.Z, {
      isEligibleForTrial: e_
    }), (0, i.jsxs)(T.C3, {
      children: [ew && (0, i.jsx)("hr", {
        className: H.planSelectSeparatorUpper
      }), eU, (0, i.jsx)(N.Z, {}), (0, i.jsx)(R.Z, {}), eA ? (0, i.jsx)(o.kzN, {
        children: eT
      }) : (0, i.jsx)(L.O, {
        planOptions: eS,
        eligibleForMultiMonthPlans: ef,
        referralTrialOfferId: K,
        selectedPlanId: null == ee ? true : ee.id,
        planGroup: z,
        subscriptionPeriodEnd: null == eI ? true : eI.subscriptionPeriodEnd,
        discountInvoiceItems: ey ? null == eI ? true : eI.invoiceItems : true,
        useCompactGiftComponents: ep,
        handleClose: V
      }), ew && (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)("hr", {
          className: H.planSelectSeparatorLower
        }), (0, i.jsx)(o.Text, {
          variant: "text-xs/normal",
          children: B.intl.format(B.t.BHtnqK, {
            link: S.Z.getArticleURL(U.BhN.PREMIUM_DETAILS_CANCEL_SUB)
          })
        })]
      })]
    }), (0, i.jsxs)(T.O3, {
      children: [ep && (0, i.jsx)(h.c, {}), (0, i.jsx)(o.mzw, {
        "data-migration-pending": true,
        justify: d.Z.Justify.BETWEEN,
        align: d.Z.Align.CENTER,
        className: el,
        children: (0, i.jsx)(L.y, {
          onStepChange: G,
          onBackClick: () => G(b.h8.SKU_SELECT),
          showBackButton: null == D && null == W,
          planOptions: eS,
          shouldRenderUpdatedPaymentModal: ew,
          isTrial: e_
        })
      })]
    })]
  }))
}