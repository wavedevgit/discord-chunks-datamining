/** Chunk was on 47238 **/
/** chunk id: 174827, original params: e,r,n (module,exports,require) **/
require.d(exports, {
  x: () => H
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
  Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk975608 = require("./975608.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk711459 = require("./711459.js"),
  Chunk374649 = require("./374649.js"),
  Chunk717401 = require("./717401.js"),
  Chunk286961 = require("./286961.js"),
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

function H(e) {
  var r, n, o, H;
  let {
    handleStepChange: G,
    initialPlanId: D,
    planGroup: z,
    subscriptionTier: Y,
    trialId: W,
    referralTrialOfferId: K,
    handleClose: V
  } = e, {
    activeSubscription: q,
    hasFetchedSubscriptions: J,
    paymentSourceId: Q,
    paymentSources: X,
    selectedSkuId: $,
    selectedPlan: ee,
    step: er,
    defaultPlanId: en,
    priceOptions: et,
    isPremium: ei,
    premiumBrandRefreshBackgroundClassName: eo
  } = (0, I.JL)(), {
    isGift: ea,
    giftRecipient: el,
    giftMessage: es,
    claimableRewards: eC
  } = (0, E.wD)(), {
    paymentModalBanner: ed
  } = (0, T.zb)(), ec = (0, u.a5)(ee), ep = (null == (r = (0, _.Z)()) ? true : r.planSelectionBanner) != null, eu = ea && ec && null != eC && eC.length > 0 && ep, e_ = (0, M.m)(X, Q), {
    newPlans: ex
  } = c.ZP.useExperiment({
    location: "d17fd6_3"
  }, {
    autoTrackExposure: false
  }), ef = (0, l.e7)([g.default], () => g.default.getCurrentUser()), em = !ea && null != $ && $ === k.Si.TIER_2 && null != ef && ef.hasHadPremium() && J && null == q && (0, c.aQ)(e_), eh = (0, m.N)(K), ej = !ea && null != eh && null != $ && k.nG[eh.trial_id].skus.includes($), eL = (0, f.Ng)(), eg = null == eL || null == (n = eL.discount) ? true : n.plan_ids.some(e => k.GP[e].skuId === $), eb = !ea && null != eL && null != $ && eg, ey = null != (o = ej || eb) && o, eS = i.useMemo(() => (0, v.V7)({
    skuId: $,
    isPremium: ei,
    multiMonthPlans: em ? ex : [],
    currentSubscription: q,
    defaultPlanId: en
  }), [$, ei, ex, q, em, en]), ev = eb && eS.includes(k.Xh.PREMIUM_MONTH_TIER_2) ? k.Xh.PREMIUM_MONTH_TIER_2 : eS[0], eE = (0, l.e7)([b.Z], () => b.Z.get(ev)), eI = [{
    planId: null == eE ? true : eE.id,
    quantity: 1
  }], [eP, eT] = i.useState(ey), [eO, ew] = (0, p.ED)({
    items: eI,
    renewal: false,
    preventFetch: !ey,
    applyEntitlements: true,
    trialId: W,
    paymentSourceId: et.paymentSourceId,
    currency: et.currency
  });
  i.useEffect(() => {
    ey && eT((null == eO ? true : eO.subscriptionPeriodEnd) == null)
  }, [eO, ey]), (0, C.Z)("Payment Modal Plan Select Step", eP, 5, {
    proratedInvoicePreview: eO,
    proratedInvoiceError: ew,
    isEligibleForOffer: ey
  }, {
    tags: {
      app_context: "billing"
    }
  });
  let eZ = null != (H = null == ew ? true : ew.message) ? H : F.intl.string(F.t.R0RpRU),
    eM = ey && null == ew,
    eA = ey && null != ew,
    eR = eM && null == q && !!ey && (null == eO ? true : eO.subscriptionPeriodEnd) == null,
    eB = !ea && (null == eE ? true : eE.skuId) === k.Si.TIER_2 && (null == eh ? true : eh.referrer_id) != null,
    eN = null;
  return (eN = null != ed ? ed : eB ? (0, t.jsx)(j.Z, {}) : (0, t.jsx)(h.Z, {}), eR) ? (0, t.jsx)(w.Z, {}) : (a()(null != er, "Step should be set"), a()(eS.length > 0, "Premium plan options should be set"), (0, t.jsxs)(t.Fragment, {
    children: [(0, t.jsx)(A.P, {
      giftMessage: es
    }), !(ea && (0, y.pO)(el)) && (0, t.jsx)(O.Z, {
      isEligibleForTrial: ej
    }), (0, t.jsxs)(Z.C3, {
      children: [eM && (0, t.jsx)("hr", {
        className: U.planSelectSeparatorUpper
      }), eN, (0, t.jsx)(B.Z, {}), (0, t.jsx)(R.Z, {}), eA ? (0, t.jsx)(s.kzN, {
        children: eZ
      }) : (0, t.jsx)(L.O, {
        planOptions: eS,
        eligibleForMultiMonthPlans: em,
        referralTrialOfferId: K,
        selectedPlanId: null == ee ? true : ee.id,
        planGroup: z,
        subscriptionPeriodEnd: null == eO ? true : eO.subscriptionPeriodEnd,
        discountInvoiceItems: eb ? null == eO ? true : eO.invoiceItems : true,
        useCompactGiftComponents: eu,
        handleClose: V
      }), eM && (0, t.jsxs)(t.Fragment, {
        children: [(0, t.jsx)("hr", {
          className: U.planSelectSeparatorLower
        }), (0, t.jsx)(s.Text, {
          variant: "text-xs/normal",
          children: F.intl.format(F.t.BHtnqK, {
            link: S.Z.getArticleURL(N.BhN.PREMIUM_DETAILS_CANCEL_SUB)
          })
        })]
      })]
    }), (0, t.jsxs)(Z.O3, {
      children: [eu && (0, t.jsx)(x.c, {}), (0, t.jsx)(s.mzw, {
        "data-migration-pending": true,
        justify: d.Z.Justify.BETWEEN,
        align: d.Z.Align.CENTER,
        className: eo,
        children: (0, t.jsx)(L.y, {
          onStepChange: G,
          onBackClick: () => G(P.h8.SKU_SELECT),
          showBackButton: null == D && null == Y,
          planOptions: eS,
          shouldRenderUpdatedPaymentModal: eM,
          isTrial: ej
        })
      })]
    })]
  }))
}