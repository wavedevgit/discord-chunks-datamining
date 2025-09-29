/** Chunk was on 37786 **/
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
  Chunk657517 = require("./657517.jsx"),
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
  Chunk649662 = require("./649662.js");

function G(e) {
  var t, n, a, G;
  let {
    handleStepChange: D,
    initialPlanId: z,
    planGroup: Y,
    subscriptionTier: K,
    trialId: W,
    referralTrialOfferId: V,
    handleClose: q
  } = e, {
    activeSubscription: J,
    hasFetchedSubscriptions: X,
    paymentSourceId: Q,
    paymentSources: $,
    selectedSkuId: ee,
    selectedPlan: et,
    step: en,
    defaultPlanId: er,
    priceOptions: ei,
    isPremium: ea,
    premiumBrandRefreshBackgroundClassName: eo,
    shouldShowSeptemberMarketingMomentBanner: el
  } = (0, I.JL)(), {
    isGift: es,
    giftRecipient: ed,
    giftMessage: eC,
    claimableRewards: ec
  } = (0, E.wD)(), {
    paymentModalBanner: eu
  } = (0, w.zb)(), ep = (0, _.a5)(et), e_ = (null == (t = (0, p.Z)()) ? true : t.planSelectionBanner) != null, ef = es && ep && null != ec && ec.length > 0 && e_, eh = (0, A.m)($, Q), {
    newPlans: em
  } = c.ZP.useExperiment({
    location: "d17fd6_3"
  }, {
    autoTrackExposure: false
  }), ex = (0, l.e7)([L.default], () => L.default.getCurrentUser()), eg = !es && null != ee && ee === B.Si.TIER_2 && null != ex && ex.hasHadPremium() && X && null == J && (0, c.aQ)(eh), ej = (0, m.N)(V), eb = !es && null != ej && null != ee && B.nG[ej.trial_id].skus.includes(ee), eL = (0, h.Ng)(), ey = null == eL || null == (n = eL.discount) ? true : n.plan_ids.some(e => B.GP[e].skuId === ee), ev = !es && null != eL && null != ee && ey, eS = null != (a = eb || ev) && a, eO = i.useMemo(() => (0, O.V7)({
    skuId: ee,
    isPremium: ea,
    multiMonthPlans: eg ? em : [],
    currentSubscription: J,
    defaultPlanId: er
  }), [ee, ea, em, J, eg, er]), eE = ev && eO.includes(B.Xh.PREMIUM_MONTH_TIER_2) ? B.Xh.PREMIUM_MONTH_TIER_2 : eO[0], eI = (0, l.e7)([y.Z], () => y.Z.get(eE)), eP = [{
    planId: null == eI ? true : eI.id,
    quantity: 1
  }], [ew, ek] = i.useState(eS), [eM, eT] = (0, u.ED)({
    items: eP,
    renewal: false,
    preventFetch: !eS,
    applyEntitlements: true,
    trialId: W,
    paymentSourceId: ei.paymentSourceId,
    currency: ei.currency
  });
  i.useEffect(() => {
    eS && ek((null == eM ? true : eM.subscriptionPeriodEnd) == null)
  }, [eM, eS]), (0, d.Z)("Payment Modal Plan Select Step", ew, 5, {
    proratedInvoicePreview: eM,
    proratedInvoiceError: eT,
    isEligibleForOffer: eS
  }, {
    tags: {
      app_context: "billing"
    }
  });
  let eA = null != (G = null == eT ? true : eT.message) ? G : U.intl.string(U.t.R0RpRU),
    eZ = eS && null == eT,
    eN = eS && null != eT,
    eR = eZ && null == J && !!eS && (null == eM ? true : eM.subscriptionPeriodEnd) == null,
    eF = !es && (null == eI ? true : eI.skuId) === B.Si.TIER_2 && (null == ej ? true : ej.referrer_id) != null,
    eB = null;
  return (eB = null != eu ? eu : eF ? (0, r.jsx)(g.Z, {}) : (0, r.jsx)(x.Z, {}), eR) ? (0, r.jsx)(M.Z, {}) : (o()(null != en, "Step should be set"), o()(eO.length > 0, "Premium plan options should be set"), (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(Z.P, {
      giftMessage: eC
    }), !(es && (0, v.pO)(ed)) && (0, r.jsx)(k.Z, {
      isEligibleForTrial: eb
    }), (0, r.jsxs)(T.C3, {
      children: [eZ && (0, r.jsx)("hr", {
        className: H.planSelectSeparatorUpper
      }), eB, true === el && (0, r.jsx)(b.Y, {}), (0, r.jsx)(R.Z, {}), (0, r.jsx)(N.Z, {}), eN ? (0, r.jsx)(s.kzN, {
        children: eA
      }) : (0, r.jsx)(j.O, {
        planOptions: eO,
        eligibleForMultiMonthPlans: eg,
        referralTrialOfferId: V,
        selectedPlanId: null == et ? true : et.id,
        planGroup: Y,
        subscriptionPeriodEnd: null == eM ? true : eM.subscriptionPeriodEnd,
        discountInvoiceItems: ev ? null == eM ? true : eM.invoiceItems : true,
        useCompactGiftComponents: ef,
        handleClose: q
      }), eZ && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)("hr", {
          className: H.planSelectSeparatorLower
        }), (0, r.jsx)(s.Text, {
          variant: "text-xs/normal",
          children: U.intl.format(U.t.BHtnqK, {
            link: S.Z.getArticleURL(F.BhN.PREMIUM_DETAILS_CANCEL_SUB)
          })
        })]
      })]
    }), (0, r.jsxs)(T.O3, {
      children: [ef && (0, r.jsx)(f.c, {}), (0, r.jsx)(s.mzw, {
        "data-migration-pending": true,
        justify: C.Z.Justify.BETWEEN,
        align: C.Z.Align.CENTER,
        className: eo,
        children: (0, r.jsx)(j.y, {
          onStepChange: D,
          onBackClick: () => D(P.h8.SKU_SELECT),
          showBackButton: null == z && null == K,
          planOptions: eO,
          shouldRenderUpdatedPaymentModal: eZ,
          isTrial: eb
        })
      })]
    })]
  }))
}