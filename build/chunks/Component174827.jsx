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
    planGroup: W,
    subscriptionTier: z,
    trialId: Y,
    referralTrialOfferId: V,
    handleClose: K
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
    premiumBrandRefreshBackgroundClassName: el
  } = (0, P.JL)(), {
    isGift: es,
    giftRecipient: ea,
    giftMessage: eo,
    claimableRewards: eC
  } = (0, O.wD)(), {
    paymentModalBanner: ed
  } = (0, w.zb)(), ec = (0, x.a5)(ee), ep = (null == (t = (0, u.Z)()) ? true : t.planSelectionBanner) != null, eu = es && ec && null != eC && eC.length > 0 && ep, ex = (0, A.m)(Q, X), {
    newPlans: eh
  } = c.ZP.useExperiment({
    location: "d17fd6_3"
  }, {
    autoTrackExposure: false
  }), e_ = (0, a.e7)([g.default], () => g.default.getCurrentUser()), ef = !es && null != $ && $ === R.Si.TIER_2 && null != e_ && e_.hasHadPremium() && J && null == q && (0, c.aQ)(ex), ej = (0, f.N)(V), em = !es && null != ej && null != $ && R.nG[ej.trial_id].skus.includes($), eL = (0, _.Ng)(), eg = null == eL || null == (n = eL.discount) ? true : n.plan_ids.some(e => R.GP[e].skuId === $), eb = !es && null != eL && null != $ && eg, ey = null != (l = em || eb) && l, eS = i.useMemo(() => (0, E.V7)({
    skuId: $,
    isPremium: ei,
    multiMonthPlans: ef ? eh : [],
    currentSubscription: q,
    defaultPlanId: en
  }), [$, ei, eh, q, ef, en]), eE = eb && eS.includes(R.Xh.PREMIUM_MONTH_TIER_2) ? R.Xh.PREMIUM_MONTH_TIER_2 : eS[0], eO = (0, a.e7)([b.Z], () => b.Z.get(eE)), eP = [{
    planId: null == eO ? true : eO.id,
    quantity: 1
  }], [ev, ew] = i.useState(ey), [eM, eI] = (0, p.ED)({
    items: eP,
    renewal: false,
    preventFetch: !ey,
    applyEntitlements: true,
    trialId: Y,
    paymentSourceId: er.paymentSourceId,
    currency: er.currency
  });
  i.useEffect(() => {
    ey && ew((null == eM ? true : eM.subscriptionPeriodEnd) == null)
  }, [eM, ey]), (0, C.Z)("Payment Modal Plan Select Step", ev, 5, {
    proratedInvoicePreview: eM,
    proratedInvoiceError: eI,
    isEligibleForOffer: ey
  }, {
    tags: {
      app_context: "billing"
    }
  });
  let eZ = null != (F = null == eI ? true : eI.message) ? F : N.intl.string(N.t.R0RpRU),
    eA = ey && null == eI,
    ek = ey && null != eI,
    eT = eA && null == q && !!ey && (null == eM ? true : eM.subscriptionPeriodEnd) == null,
    eB = !es && (null == eO ? true : eO.skuId) === R.Si.TIER_2 && (null == ej ? true : ej.referrer_id) != null,
    eU = null;
  return (eU = null != ed ? ed : eB ? (0, r.jsx)(m.Z, {}) : (0, r.jsx)(j.Z, {}), eT) ? (0, r.jsx)(I.Z, {}) : (s()(null != et, "Step should be set"), s()(eS.length > 0, "Premium plan options should be set"), (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(k.P, {
      giftMessage: eo
    }), !(es && (0, y.pO)(ea)) && (0, r.jsx)(M.Z, {
      isEligibleForTrial: em
    }), (0, r.jsxs)(Z.C3, {
      children: [eA && (0, r.jsx)("hr", {
        className: H.planSelectSeparatorUpper
      }), eU, (0, r.jsx)(B.Z, {}), (0, r.jsx)(T.Z, {}), ek ? (0, r.jsx)(o.kzN, {
        children: eZ
      }) : (0, r.jsx)(L.O, {
        planOptions: eS,
        eligibleForMultiMonthPlans: ef,
        referralTrialOfferId: V,
        selectedPlanId: null == ee ? true : ee.id,
        planGroup: W,
        subscriptionPeriodEnd: null == eM ? true : eM.subscriptionPeriodEnd,
        discountInvoiceItems: eb ? null == eM ? true : eM.invoiceItems : true,
        useCompactGiftComponents: eu,
        handleClose: K
      }), eA && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)("hr", {
          className: H.planSelectSeparatorLower
        }), (0, r.jsx)(o.Text, {
          variant: "text-xs/normal",
          children: N.intl.format(N.t.BHtnqK, {
            link: S.Z.getArticleURL(U.BhN.PREMIUM_DETAILS_CANCEL_SUB)
          })
        })]
      })]
    }), (0, r.jsxs)(Z.O3, {
      children: [eu && (0, r.jsx)(h.c, {}), (0, r.jsx)(o.mzw, {
        "data-migration-pending": true,
        justify: d.Z.Justify.BETWEEN,
        align: d.Z.Align.CENTER,
        className: el,
        children: (0, r.jsx)(L.y, {
          onStepChange: G,
          onBackClick: () => G(v.h8.SKU_SELECT),
          showBackButton: null == D && null == z,
          planOptions: eS,
          shouldRenderUpdatedPaymentModal: eA,
          isTrial: em
        })
      })]
    })]
  }))
}