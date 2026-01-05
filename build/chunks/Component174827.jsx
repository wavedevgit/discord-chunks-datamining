/** Chunk was on 23242 **/
/** chunk id: 174827, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  x: () => Z
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

function Z(e) {
  var t, n, i;
  let {
    handleStepChange: Z,
    initialPlanId: D,
    planGroup: F,
    subscriptionTier: B,
    trialId: G,
    handleClose: U
  } = e, {
    activeSubscription: H,
    hasFetchedSubscriptions: z,
    paymentSourceId: K,
    paymentSources: W,
    selectedSkuId: V,
    selectedPlan: Y,
    step: q,
    defaultPlanId: J,
    priceOptions: Q,
    isPremium: X,
    premiumBrandRefreshBackgroundClassName: $,
    isEligibleForTrial: ee,
    isEligibleForDiscount: et,
    referralTrialOfferId: en
  } = (0, x.JL)(), {
    isGift: er,
    giftRecipient: el,
    giftMessage: ei,
    claimableRewards: ea
  } = (0, S.wD)(), es = (0, h.a5)(Y), eo = (null == (t = (0, m.Z)()) ? true : t.planSelectionBanner) != null, eu = er && es && null != ea && ea.length > 0 && eo, ec = (0, T.m)(W, K), {
    newPlans: ed
  } = d.ZP.useExperiment({
    location: "d17fd6_3"
  }, {
    autoTrackExposure: false
  }), ep = (0, s.e7)([y.default], () => y.default.getCurrentUser()), em = !er && null != V && V === A.Si.TIER_2 && null != ep && ep.hasHadPremium() && z && null == H && (0, d.aQ)(ec), eh = null != (n = ee || et) && n, ef = l.useMemo(() => (0, O.V7)({
    skuId: V,
    isPremium: X,
    multiMonthPlans: em ? ed : [],
    currentSubscription: H,
    defaultPlanId: J
  }), [V, X, ed, H, em, J]), eg = et && ef.includes(A.Xh.PREMIUM_MONTH_TIER_2) ? A.Xh.PREMIUM_MONTH_TIER_2 : ef[0], ey = (0, s.e7)([j.Z], () => j.Z.get(eg)), ej = [{
    planId: null == ey ? true : ey.id,
    quantity: 1
  }], [ev, eb] = l.useState(eh), [eO, eS] = (0, p.ED)({
    items: ej,
    renewal: false,
    preventFetch: !eh,
    applyEntitlements: true,
    trialId: G,
    paymentSourceId: Q.paymentSourceId,
    currency: Q.currency
  });
  l.useEffect(() => {
    eh && eb((null == eO ? true : eO.subscriptionPeriodEnd) == null)
  }, [eO, eh]), (0, u.Z)("Payment Modal Plan Select Step", ev, 5, {
    proratedInvoicePreview: eO,
    proratedInvoiceError: eS,
    isEligibleForOffer: eh
  }, {
    tags: {
      app_context: "billing"
    }
  });
  let ex = null != (i = null == eS ? true : eS.message) ? i : R.intl.string(R.t.R0RpRX),
    eP = eh && null == eS,
    eE = eh && null != eS;
  return eP && null == H && eh && (null == eO ? true : eO.subscriptionPeriodEnd) == null ? (0, r.jsx)(w.Z, {}) : (a()(null != q, "Step should be set"), a()(ef.length > 0, "Premium plan options should be set"), (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(k.P, {
      giftMessage: ei
    }), !(er && (0, v.pO)(el)) && (0, r.jsx)(E.Z, {
      isEligibleForTrial: ee
    }), (0, r.jsxs)(I.C3, {
      children: [eP && (0, r.jsx)("hr", {
        className: L.planSelectSeparatorUpper
      }), (0, r.jsx)(M.a, {
        planSkuId: null == ey ? true : ey.skuId,
        referralTrialOfferId: en
      }), (0, r.jsx)(N.Z, {}), (0, r.jsx)(C.Z, {}), eE ? (0, r.jsx)(o.M14, {
        type: "critical",
        children: ex
      }) : (0, r.jsx)(g.O, {
        planOptions: ef,
        eligibleForMultiMonthPlans: em,
        selectedPlanId: null == Y ? true : Y.id,
        planGroup: F,
        subscriptionPeriodEnd: null == eO ? true : eO.subscriptionPeriodEnd,
        discountInvoiceItems: et ? null == eO ? true : eO.invoiceItems : true,
        useCompactGiftComponents: eu,
        handleClose: U
      }), eP && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)("hr", {
          className: L.planSelectSeparatorLower
        }), (0, r.jsx)(o.Text, {
          variant: "text-xs/normal",
          children: R.intl.format(R.t.BHtnqA, {
            link: b.Z.getArticleURL(_.BhN.PREMIUM_DETAILS_CANCEL_SUB)
          })
        })]
      })]
    }), (0, r.jsxs)(I.O3, {
      children: [eu && (0, r.jsx)(f.c, {}), (0, r.jsx)(o.mzw, {
        "data-migration-pending": true,
        justify: c.Z.Justify.BETWEEN,
        align: c.Z.Align.CENTER,
        className: $,
        children: (0, r.jsx)(g.y, {
          onStepChange: Z,
          onBackClick: () => Z(P.h8.SKU_SELECT),
          showBackButton: null == D && null == B,
          planOptions: ef,
          shouldRenderUpdatedPaymentModal: eP,
          isTrial: ee
        })
      })]
    })]
  }))
}