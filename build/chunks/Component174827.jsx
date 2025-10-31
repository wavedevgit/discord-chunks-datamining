/** Chunk was on 3270 **/
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
  Chunk614277 = require("./614277.jsx"),
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
    trialId: K,
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
    claimableRewards: ed
  } = (0, w.wD)(), {
    paymentModalBanner: eC
  } = (0, P.zb)(), ec = (0, h.a5)(ee), eu = (null == (t = (0, p.Z)()) ? true : t.planSelectionBanner) != null, ep = ea && ec && null != ed && ed.length > 0 && eu, eh = (0, T.m)(X, Q), {
    newPlans: em
  } = c.ZP.useExperiment({
    location: "d17fd6_3"
  }, {
    autoTrackExposure: false
  }), e_ = (0, s.e7)([b.default], () => b.default.getCurrentUser()), ef = !ea && null != $ && $ === R.Si.TIER_2 && null != e_ && e_.hasHadPremium() && J && null == q && (0, c.aQ)(eh), ex = (0, f.N)(Y), ej = !ea && null != ex && null != $ && R.nG[ex.trial_id].skus.includes($), eg = (0, _.Ng)(), eb = null == eg || null == (n = eg.discount) ? true : n.plan_ids.some(e => R.GP[e].skuId === $), eL = !ea && null != eg && null != $ && eb, ev = null != (l = ej || eL) && l, ey = i.useMemo(() => (0, S.V7)({
    skuId: $,
    isPremium: ei,
    multiMonthPlans: ef ? em : [],
    currentSubscription: q,
    defaultPlanId: en
  }), [$, ei, em, q, ef, en]), eS = eL && ey.includes(R.Xh.PREMIUM_MONTH_TIER_2) ? R.Xh.PREMIUM_MONTH_TIER_2 : ey[0], ew = (0, s.e7)([L.Z], () => L.Z.get(eS)), eO = [{
    planId: null == ew ? true : ew.id,
    quantity: 1
  }], [eI, eP] = i.useState(ev), [eE, ek] = (0, u.ED)({
    items: eO,
    renewal: false,
    preventFetch: !ev,
    applyEntitlements: true,
    trialId: K,
    paymentSourceId: er.paymentSourceId,
    currency: er.currency
  });
  i.useEffect(() => {
    ev && eP((null == eE ? true : eE.subscriptionPeriodEnd) == null)
  }, [eE, ev]), (0, d.Z)("Payment Modal Plan Select Step", eI, 5, {
    proratedInvoicePreview: eE,
    proratedInvoiceError: ek,
    isEligibleForOffer: ev
  }, {
    tags: {
      app_context: "billing"
    }
  });
  let eM = null != (F = null == ek ? true : ek.message) ? F : H.intl.string(H.t.R0RpRX),
    eT = ev && null == ek,
    eZ = ev && null != ek,
    eA = eT && null == q && !!ev && (null == eE ? true : eE.subscriptionPeriodEnd) == null,
    eB = !ea && (null == ew ? true : ew.skuId) === R.Si.TIER_2 && (null == ex ? true : ex.referrer_id) != null,
    eN = null;
  return (eN = null != eC ? eC : eB ? (0, r.jsx)(j.Z, {}) : (0, r.jsx)(x.Z, {}), eA) ? (0, r.jsx)(k.Z, {}) : (a()(null != et, "Step should be set"), a()(ey.length > 0, "Premium plan options should be set"), (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(Z.P, {
      giftMessage: eo
    }), !(ea && (0, v.pO)(es)) && (0, r.jsx)(E.Z, {
      isEligibleForTrial: ej
    }), (0, r.jsxs)(M.C3, {
      children: [eT && (0, r.jsx)("hr", {
        className: U.planSelectSeparatorUpper
      }), eN, (0, r.jsx)(B.Z, {}), (0, r.jsx)(A.Z, {}), eZ ? (0, r.jsx)(o.M14, {
        type: "critical",
        children: eM
      }) : (0, r.jsx)(g.O, {
        planOptions: ey,
        eligibleForMultiMonthPlans: ef,
        referralTrialOfferId: Y,
        selectedPlanId: null == ee ? true : ee.id,
        planGroup: W,
        subscriptionPeriodEnd: null == eE ? true : eE.subscriptionPeriodEnd,
        discountInvoiceItems: eL ? null == eE ? true : eE.invoiceItems : true,
        useCompactGiftComponents: ep,
        handleClose: V
      }), eT && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)("hr", {
          className: U.planSelectSeparatorLower
        }), (0, r.jsx)(o.Text, {
          variant: "text-xs/normal",
          children: H.intl.format(H.t.BHtnqA, {
            link: y.Z.getArticleURL(N.BhN.PREMIUM_DETAILS_CANCEL_SUB)
          })
        })]
      })]
    }), (0, r.jsxs)(M.O3, {
      children: [ep && (0, r.jsx)(m.c, {}), (0, r.jsx)(o.mzw, {
        "data-migration-pending": true,
        justify: C.Z.Justify.BETWEEN,
        align: C.Z.Align.CENTER,
        className: el,
        children: (0, r.jsx)(g.y, {
          onStepChange: G,
          onBackClick: () => G(I.h8.SKU_SELECT),
          showBackButton: null == D && null == z,
          planOptions: ey,
          shouldRenderUpdatedPaymentModal: eT,
          isTrial: ej
        })
      })]
    })]
  }))
}