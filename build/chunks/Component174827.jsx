/** Chunk was on 54400 **/
/** chunk id: 174827, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  x: () => K
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
  Chunk79766 = require("./79766.js"),
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
  Chunk715130 = require("./715130.js"),
  Chunk427261 = require("./427261.jsx"),
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

function K(e) {
  var t, n, l, K;
  let {
    handleStepChange: z,
    initialPlanId: V,
    planGroup: W,
    subscriptionTier: Y,
    trialId: q,
    referralTrialOfferId: J,
    handleClose: Q
  } = e, {
    activeSubscription: X,
    hasFetchedSubscriptions: $,
    paymentSourceId: ee,
    paymentSources: et,
    selectedSkuId: en,
    selectedPlan: er,
    step: ei,
    defaultPlanId: el,
    priceOptions: ea,
    isPremium: eo,
    premiumBrandRefreshBackgroundClassName: es
  } = (0, k.JL)(), {
    isGift: eC,
    giftRecipient: ed,
    giftMessage: ec,
    claimableRewards: eu
  } = (0, w.wD)(), {
    paymentModalBanner: ep
  } = (0, I.zb)(), ef = (0, h.a5)(er), eh = (null == (t = (0, f.Z)()) ? true : t.planSelectionBanner) != null, ex = eC && ef && null != eu && eu.length > 0 && eh, em = (0, N.m)(et, ee), {
    newPlans: e_
  } = u.ZP.useExperiment({
    location: "d17fd6_3"
  }, {
    autoTrackExposure: false
  }), ej = (0, s.e7)([v.default], () => v.default.getCurrentUser()), eg = !eC && null != en && en === F.Si.TIER_2 && null != ej && ej.hasHadPremium() && $ && null == X && (0, u.aQ)(em), eb = (0, _.N)(J), ey = !eC && null != eb && null != en && F.nG[eb.trial_id].skus.includes(en), eL = (0, m.N)(), ev = null == eL || null == (n = eL.discount) ? true : n.plan_ids.some(e => F.GP[e].skuId === en), eS = !eC && null != eL && null != en && ev, eO = null != (l = ey || eS) && l, eE = i.useMemo(() => (0, P.V7)({
    skuId: en,
    isPremium: eo,
    multiMonthPlans: eg ? e_ : [],
    currentSubscription: X,
    defaultPlanId: el
  }), [en, eo, e_, X, eg, el]), eP = eS && eE.includes(F.Xh.PREMIUM_MONTH_TIER_2) ? F.Xh.PREMIUM_MONTH_TIER_2 : eE[0], ew = (0, s.e7)([S.Z], () => S.Z.get(eP)), ek = [{
    planId: null == ew ? true : ew.id,
    quantity: 1
  }], [eM, eI] = i.useState(eO), [eT, eA] = (0, p.ED)({
    items: ek,
    renewal: false,
    preventFetch: !eO,
    applyEntitlements: true,
    trialId: q,
    paymentSourceId: ea.paymentSourceId,
    currency: ea.currency
  });
  i.useEffect(() => {
    eO && eI((null == eT ? true : eT.subscriptionPeriodEnd) == null)
  }, [eT, eO]), (0, d.Z)("Payment Modal Plan Select Step", eM, 5, {
    proratedInvoicePreview: eT,
    proratedInvoiceError: eA,
    isEligibleForOffer: eO
  }, {
    tags: {
      app_context: "billing"
    }
  });
  let eZ = null != (K = null == eA ? true : eA.message) ? K : G.intl.string(G.t.R0RpRX),
    eN = eO && null == eA,
    eR = eO && null != eA,
    eB = eN && null == X && !!eO && (null == eT ? true : eT.subscriptionPeriodEnd) == null,
    eH = !eC && (null == ew ? true : ew.skuId) === F.Si.TIER_2 && (null == eb ? true : eb.referrer_id) != null,
    eU = null,
    eF = (0, j.H)(o.I.PAYMENT_MODAL_BANNER);
  return (eU = eC || en !== F.Si.TIER_2 || null == eF || "paymentModalBanner" !== eF.properties.properties.oneofKind ? null != ep ? ep : eH ? (0, r.jsx)(y.Z, {}) : (0, r.jsx)(b.Z, {}) : (0, r.jsx)(g.h, {
    componentId: eF.id,
    promotionBannerMarketingComponentFields: eF.properties.properties.paymentModalBanner
  }), eB) ? (0, r.jsx)(A.Z, {}) : (a()(null != ei, "Step should be set"), a()(eE.length > 0, "Premium plan options should be set"), (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(R.P, {
      giftMessage: ec
    }), !(eC && (0, O.pO)(ed)) && (0, r.jsx)(T.Z, {
      isEligibleForTrial: ey
    }), (0, r.jsxs)(Z.C3, {
      children: [eN && (0, r.jsx)("hr", {
        className: D.planSelectSeparatorUpper
      }), eU, (0, r.jsx)(H.Z, {}), (0, r.jsx)(B.Z, {}), eR ? (0, r.jsx)(C.M14, {
        type: "critical",
        children: eZ
      }) : (0, r.jsx)(L.O, {
        planOptions: eE,
        eligibleForMultiMonthPlans: eg,
        referralTrialOfferId: J,
        selectedPlanId: null == er ? true : er.id,
        planGroup: W,
        subscriptionPeriodEnd: null == eT ? true : eT.subscriptionPeriodEnd,
        discountInvoiceItems: eS ? null == eT ? true : eT.invoiceItems : true,
        useCompactGiftComponents: ex,
        handleClose: Q
      }), eN && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)("hr", {
          className: D.planSelectSeparatorLower
        }), (0, r.jsx)(C.Text, {
          variant: "text-xs/normal",
          children: G.intl.format(G.t.BHtnqA, {
            link: E.Z.getArticleURL(U.BhN.PREMIUM_DETAILS_CANCEL_SUB)
          })
        })]
      })]
    }), (0, r.jsxs)(Z.O3, {
      children: [ex && (0, r.jsx)(x.c, {}), (0, r.jsx)(C.mzw, {
        "data-migration-pending": true,
        justify: c.Z.Justify.BETWEEN,
        align: c.Z.Align.CENTER,
        className: es,
        children: (0, r.jsx)(L.y, {
          onStepChange: z,
          onBackClick: () => z(M.h8.SKU_SELECT),
          showBackButton: null == V && null == Y,
          planOptions: eE,
          shouldRenderUpdatedPaymentModal: eN,
          isTrial: ey
        })
      })]
    })]
  }))
}