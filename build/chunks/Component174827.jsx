/** Chunk was on 23242 **/
/** chunk id: 174827, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  x: () => F
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
  Chunk622909 = require("./622909.js"),
  Chunk639119 = require("./639119.js"),
  Chunk314404 = require("./314404.jsx"),
  Chunk594174 = require("./594174.js"),
  Chunk509545 = require("./509545.js"),
  Chunk669079 = require("./669079.js"),
  Chunk63063 = require("./63063.js"),
  Chunk74538 = require("./74538.js"),
  Chunk987209 = require("./987209.jsx"),
  Chunk563132 = require("./563132.jsx"),
  Chunk409813 = require("./409813.js"),
  Chunk51499 = require("./51499.jsx"),
  Chunk456251 = require("./456251.jsx"),
  Chunk614277 = require("./614277.jsx"),
  Chunk435020 = require("./435020.js"),
  Chunk809144 = require("./809144.jsx"),
  Chunk698708 = require("./698708.jsx"),
  Chunk844068 = require("./844068.jsx"),
  Chunk405685 = require("./405685.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk903845 = require("./903845.js");

function F(e) {
  var t, n, i, F;
  let {
    handleStepChange: G,
    initialPlanId: B,
    planGroup: H,
    subscriptionTier: U,
    trialId: z,
    referralTrialOfferId: K,
    handleClose: W
  } = e, {
    activeSubscription: V,
    hasFetchedSubscriptions: Y,
    paymentSourceId: q,
    paymentSources: J,
    selectedSkuId: Q,
    selectedPlan: X,
    step: $,
    defaultPlanId: ee,
    priceOptions: et,
    isPremium: en,
    premiumBrandRefreshBackgroundClassName: er
  } = (0, E.JL)(), {
    isGift: el,
    giftRecipient: ei,
    giftMessage: ea,
    claimableRewards: es
  } = (0, x.wD)(), eo = (0, h.a5)(X), eu = (null == (t = (0, m.Z)()) ? true : t.planSelectionBanner) != null, ec = el && eo && null != es && es.length > 0 && eu, ed = (0, C.m)(J, q), {
    newPlans: ep
  } = d.ZP.useExperiment({
    location: "d17fd6_3"
  }, {
    autoTrackExposure: false
  }), em = (0, s.e7)([v.default], () => v.default.getCurrentUser()), eh = !el && null != Q && Q === L.Si.TIER_2 && null != em && em.hasHadPremium() && Y && null == V && (0, d.aQ)(ed), ef = (0, j.N)(K), eg = !el && null != ef && null != Q && L.nG[ef.trial_id].skus.includes(Q), ej = (0, g.N)(), ey = null == ej || null == (n = ej.discount) ? true : n.plan_ids.some(e => L.GP[e].skuId === Q), ev = !el && null != ej && null != Q && ey, eb = null != (i = eg || ev) && i, eO = l.useMemo(() => (0, S.V7)({
    skuId: Q,
    isPremium: en,
    multiMonthPlans: eh ? ep : [],
    currentSubscription: V,
    defaultPlanId: ee
  }), [Q, en, ep, V, eh, ee]), eP = ev && eO.includes(L.Xh.PREMIUM_MONTH_TIER_2) ? L.Xh.PREMIUM_MONTH_TIER_2 : eO[0], eS = (0, s.e7)([b.Z], () => b.Z.get(eP)), ex = [{
    planId: null == eS ? true : eS.id,
    quantity: 1
  }], [eE, ew] = l.useState(eb), [eI, eT] = (0, p.ED)({
    items: ex,
    renewal: false,
    preventFetch: !eb,
    applyEntitlements: true,
    trialId: z,
    paymentSourceId: et.paymentSourceId,
    currency: et.currency
  });
  l.useEffect(() => {
    eb && ew((null == eI ? true : eI.subscriptionPeriodEnd) == null)
  }, [eI, eb]), (0, u.Z)("Payment Modal Plan Select Step", eE, 5, {
    proratedInvoicePreview: eI,
    proratedInvoiceError: eT,
    isEligibleForOffer: eb
  }, {
    tags: {
      app_context: "billing"
    }
  });
  let ek = null != (F = null == eT ? true : eT.message) ? F : Z.intl.string(Z.t.R0RpRX),
    eC = eb && null == eT,
    eN = eb && null != eT;
  return eC && null == V && eb && (null == eI ? true : eI.subscriptionPeriodEnd) == null ? (0, r.jsx)(T.Z, {}) : (a()(null != $, "Step should be set"), a()(eO.length > 0, "Premium plan options should be set"), (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(N.P, {
      giftMessage: ea
    }), !(el && (0, O.pO)(ei)) && (0, r.jsx)(I.Z, {
      isEligibleForTrial: eg
    }), (0, r.jsxs)(k.C3, {
      children: [eC && (0, r.jsx)("hr", {
        className: D.planSelectSeparatorUpper
      }), (0, r.jsx)(_.a, {
        planSkuId: null == eS ? true : eS.skuId,
        referralTrialOfferId: K
      }), (0, r.jsx)(R.Z, {}), (0, r.jsx)(M.Z, {}), eN ? (0, r.jsx)(o.M14, {
        type: "critical",
        children: ek
      }) : (0, r.jsx)(y.O, {
        planOptions: eO,
        eligibleForMultiMonthPlans: eh,
        referralTrialOfferId: K,
        selectedPlanId: null == X ? true : X.id,
        planGroup: H,
        subscriptionPeriodEnd: null == eI ? true : eI.subscriptionPeriodEnd,
        discountInvoiceItems: ev ? null == eI ? true : eI.invoiceItems : true,
        useCompactGiftComponents: ec,
        handleClose: W
      }), eC && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)("hr", {
          className: D.planSelectSeparatorLower
        }), (0, r.jsx)(o.Text, {
          variant: "text-xs/normal",
          children: Z.intl.format(Z.t.BHtnqA, {
            link: P.Z.getArticleURL(A.BhN.PREMIUM_DETAILS_CANCEL_SUB)
          })
        })]
      })]
    }), (0, r.jsxs)(k.O3, {
      children: [ec && (0, r.jsx)(f.c, {}), (0, r.jsx)(o.mzw, {
        "data-migration-pending": true,
        justify: c.Z.Justify.BETWEEN,
        align: c.Z.Align.CENTER,
        className: er,
        children: (0, r.jsx)(y.y, {
          onStepChange: G,
          onBackClick: () => G(w.h8.SKU_SELECT),
          showBackButton: null == B && null == U,
          planOptions: eO,
          shouldRenderUpdatedPaymentModal: eC,
          isTrial: eg
        })
      })]
    })]
  }))
}