/** Chunk was on 54400 **/
/** chunk id: 174827, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  x: () => F
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

function F(e) {
  var t, n, l, F;
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
    hasFetchedSubscriptions: X,
    paymentSourceId: J,
    paymentSources: Q,
    selectedSkuId: $,
    selectedPlan: ee,
    step: et,
    defaultPlanId: en,
    priceOptions: er,
    isPremium: ei,
    premiumBrandRefreshBackgroundClassName: el
  } = (0, P.JL)(), {
    isGift: es,
    giftRecipient: ea,
    giftMessage: eo,
    claimableRewards: eC
  } = (0, v.wD)(), {
    paymentModalBanner: ed
  } = (0, I.zb)(), ec = (0, x.a5)(ee), ep = (null == (t = (0, u.Z)()) ? true : t.planSelectionBanner) != null, eu = es && ec && null != eC && eC.length > 0 && ep, ex = (0, Z.m)(Q, J), {
    newPlans: e_
  } = c.ZP.useExperiment({
    location: "d17fd6_3"
  }, {
    autoTrackExposure: false
  }), eh = (0, a.e7)([g.default], () => g.default.getCurrentUser()), ef = !es && null != $ && $ === U.Si.TIER_2 && null != eh && eh.hasHadPremium() && X && null == q && (0, c.aQ)(ex), ej = (0, f.N)(K), em = !es && null != ej && null != $ && U.nG[ej.trial_id].skus.includes($), eL = (0, h.Ng)(), eg = null == eL || null == (n = eL.discount) ? true : n.plan_ids.some(e => U.GP[e].skuId === $), eb = !es && null != eL && null != $ && eg, ey = null != (l = em || eb) && l, eS = i.useMemo(() => (0, E.V7)({
    skuId: $,
    isPremium: ei,
    multiMonthPlans: ef ? e_ : [],
    currentSubscription: q,
    defaultPlanId: en
  }), [$, ei, e_, q, ef, en]), eE = eb && eS.includes(U.Xh.PREMIUM_MONTH_TIER_2) ? U.Xh.PREMIUM_MONTH_TIER_2 : eS[0], ev = (0, a.e7)([b.Z], () => b.Z.get(eE)), eP = [{
    planId: null == ev ? true : ev.id,
    quantity: 1
  }], [eO, eI] = i.useState(ey), [ew, ek] = (0, p.ED)({
    items: eP,
    renewal: false,
    preventFetch: !ey,
    applyEntitlements: true,
    trialId: Y,
    paymentSourceId: er.paymentSourceId,
    currency: er.currency
  });
  i.useEffect(() => {
    ey && eI((null == ew ? true : ew.subscriptionPeriodEnd) == null)
  }, [ew, ey]), (0, C.Z)("Payment Modal Plan Select Step", eO, 5, {
    proratedInvoicePreview: ew,
    proratedInvoiceError: ek,
    isEligibleForOffer: ey
  }, {
    tags: {
      app_context: "billing"
    }
  });
  let eM = null != (F = null == ek ? true : ek.message) ? F : R.intl.string(R.t.R0RpRU),
    eZ = ey && null == ek,
    eT = ey && null != ek,
    eA = eZ && null == q && !!ey && (null == ew ? true : ew.subscriptionPeriodEnd) == null,
    eB = !es && (null == ev ? true : ev.skuId) === U.Si.TIER_2 && (null == ej ? true : ej.referrer_id) != null,
    eN = null;
  return (eN = null != ed ? ed : eB ? (0, r.jsx)(m.Z, {}) : (0, r.jsx)(j.Z, {}), eA) ? (0, r.jsx)(k.Z, {}) : (s()(null != et, "Step should be set"), s()(eS.length > 0, "Premium plan options should be set"), (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(T.P, {
      giftMessage: eo
    }), !(es && (0, y.pO)(ea)) && (0, r.jsx)(w.Z, {
      isEligibleForTrial: em
    }), (0, r.jsxs)(M.C3, {
      children: [eZ && (0, r.jsx)("hr", {
        className: H.planSelectSeparatorUpper
      }), eN, (0, r.jsx)(B.Z, {}), (0, r.jsx)(A.Z, {}), eT ? (0, r.jsx)(o.kzN, {
        children: eM
      }) : (0, r.jsx)(L.O, {
        planOptions: eS,
        eligibleForMultiMonthPlans: ef,
        referralTrialOfferId: K,
        selectedPlanId: null == ee ? true : ee.id,
        planGroup: z,
        subscriptionPeriodEnd: null == ew ? true : ew.subscriptionPeriodEnd,
        discountInvoiceItems: eb ? null == ew ? true : ew.invoiceItems : true,
        useCompactGiftComponents: eu,
        handleClose: V
      }), eZ && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)("hr", {
          className: H.planSelectSeparatorLower
        }), (0, r.jsx)(o.Text, {
          variant: "text-xs/normal",
          children: R.intl.format(R.t.BHtnqK, {
            link: S.Z.getArticleURL(N.BhN.PREMIUM_DETAILS_CANCEL_SUB)
          })
        })]
      })]
    }), (0, r.jsxs)(M.O3, {
      children: [eu && (0, r.jsx)(_.c, {}), (0, r.jsx)(o.mzw, {
        "data-migration-pending": true,
        justify: d.Z.Justify.BETWEEN,
        align: d.Z.Align.CENTER,
        className: el,
        children: (0, r.jsx)(L.y, {
          onStepChange: G,
          onBackClick: () => G(O.h8.SKU_SELECT),
          showBackButton: null == D && null == W,
          planOptions: eS,
          shouldRenderUpdatedPaymentModal: eZ,
          isTrial: em
        })
      })]
    })]
  }))
}