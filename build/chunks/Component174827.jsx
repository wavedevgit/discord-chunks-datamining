/** Chunk was on 84071 **/
/** chunk id: 174827, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  x: () => H
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
  Chunk833271 = require("./833271.js");

function H(e) {
  var t, n, a, H;
  let {
    handleStepChange: U,
    initialPlanId: D,
    planGroup: z,
    subscriptionTier: W,
    trialId: K,
    referralTrialOfferId: V,
    handleClose: Y
  } = e, {
    activeSubscription: q,
    hasFetchedSubscriptions: X,
    paymentSourceId: Q,
    paymentSources: J,
    selectedSkuId: $,
    selectedPlan: ee,
    step: et,
    defaultPlanId: en,
    priceOptions: er,
    isPremium: ei,
    premiumBrandRefreshBackgroundClassName: ea
  } = (0, w.JL)(), {
    isGift: el,
    giftRecipient: eo,
    giftMessage: es,
    claimableRewards: ed
  } = (0, I.wD)(), {
    paymentModalBanner: ec
  } = (0, O.zb)(), eC = (0, _.a5)(ee), eu = (null == (t = (0, p.Z)()) ? true : t.planSelectionBanner) != null, ep = el && eC && null != ed && ed.length > 0 && eu, e_ = (0, Z.m)(J, Q), {
    newPlans: eh
  } = C.ZP.useExperiment({
    location: "d17fd6_3"
  }, {
    autoTrackExposure: false
  }), ef = (0, o.e7)([b.default], () => b.default.getCurrentUser()), em = !el && null != $ && $ === B.Si.TIER_2 && null != ef && ef.hasHadPremium() && X && null == q && (0, C.aQ)(e_), ex = (0, m.N)(V), eg = !el && null != ex && null != $ && B.nG[ex.trial_id].skus.includes($), ej = (0, f.Ng)(), eb = null == ej || null == (n = ej.discount) ? true : n.plan_ids.some(e => B.GP[e].skuId === $), ev = !el && null != ej && null != $ && eb, ey = null != (a = eg || ev) && a, eS = i.useMemo(() => (0, L.V7)({
    skuId: $,
    isPremium: ei,
    multiMonthPlans: em ? eh : [],
    currentSubscription: q,
    defaultPlanId: en
  }), [$, ei, eh, q, em, en]), eL = ev && eS.includes(B.Xh.PREMIUM_MONTH_TIER_2) ? B.Xh.PREMIUM_MONTH_TIER_2 : eS[0], eI = (0, o.e7)([v.Z], () => v.Z.get(eL)), ew = [{
    planId: null == eI ? true : eI.id,
    quantity: 1
  }], [eP, eO] = i.useState(ey), [eE, ek] = (0, u.ED)({
    items: ew,
    renewal: false,
    preventFetch: !ey,
    applyEntitlements: true,
    trialId: K,
    paymentSourceId: er.paymentSourceId,
    currency: er.currency
  });
  i.useEffect(() => {
    ey && eO((null == eE ? true : eE.subscriptionPeriodEnd) == null)
  }, [eE, ey]), (0, d.Z)("Payment Modal Plan Select Step", eP, 5, {
    proratedInvoicePreview: eE,
    proratedInvoiceError: ek,
    isEligibleForOffer: ey
  }, {
    tags: {
      app_context: "billing"
    }
  });
  let eT = null != (H = null == ek ? true : ek.message) ? H : F.intl.string(F.t.R0RpRU),
    eZ = ey && null == ek,
    eA = ey && null != ek,
    eN = eZ && null == q && !!ey && (null == eE ? true : eE.subscriptionPeriodEnd) == null,
    eM = !el && (null == eI ? true : eI.skuId) === B.Si.TIER_2 && (null == ex ? true : ex.referrer_id) != null,
    eR = null;
  return (eR = null != ec ? ec : eM ? (0, r.jsx)(g.Z, {}) : (0, r.jsx)(x.Z, {}), eN) ? (0, r.jsx)(k.Z, {}) : (l()(null != et, "Step should be set"), l()(eS.length > 0, "Premium plan options should be set"), (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(A.P, {
      giftMessage: es
    }), !(el && (0, y.pO)(eo)) && (0, r.jsx)(E.Z, {
      isEligibleForTrial: eg
    }), (0, r.jsxs)(T.C3, {
      children: [eZ && (0, r.jsx)("hr", {
        className: G.planSelectSeparatorUpper
      }), eR, (0, r.jsx)(M.Z, {}), (0, r.jsx)(N.Z, {}), eA ? (0, r.jsx)(s.kzN, {
        children: eT
      }) : (0, r.jsx)(j.O, {
        planOptions: eS,
        eligibleForMultiMonthPlans: em,
        referralTrialOfferId: V,
        selectedPlanId: null == ee ? true : ee.id,
        planGroup: z,
        subscriptionPeriodEnd: null == eE ? true : eE.subscriptionPeriodEnd,
        discountInvoiceItems: ev ? null == eE ? true : eE.invoiceItems : true,
        useCompactGiftComponents: ep,
        handleClose: Y
      }), eZ && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)("hr", {
          className: G.planSelectSeparatorLower
        }), (0, r.jsx)(s.Text, {
          variant: "text-xs/normal",
          children: F.intl.format(F.t.BHtnqK, {
            link: S.Z.getArticleURL(R.BhN.PREMIUM_DETAILS_CANCEL_SUB)
          })
        })]
      })]
    }), (0, r.jsxs)(T.O3, {
      children: [ep && (0, r.jsx)(h.c, {}), (0, r.jsx)(s.mzw, {
        "data-migration-pending": true,
        justify: c.Z.Justify.BETWEEN,
        align: c.Z.Align.CENTER,
        className: ea,
        children: (0, r.jsx)(j.y, {
          onStepChange: U,
          onBackClick: () => U(P.h8.SKU_SELECT),
          showBackButton: null == D && null == W,
          planOptions: eS,
          shouldRenderUpdatedPaymentModal: eZ,
          isTrial: eg
        })
      })]
    })]
  }))
}