/** Chunk was on 3270 **/
/** chunk id: 174827, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  x: () => W
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
  Chunk104494 = require("./104494.js"),
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

function W(e) {
  var t, n, l, W;
  let {
    handleStepChange: z,
    initialPlanId: K,
    planGroup: Y,
    subscriptionTier: V,
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
    isPremium: es,
    premiumBrandRefreshBackgroundClassName: eo
  } = (0, E.JL)(), {
    isGift: ed,
    giftRecipient: ec,
    giftMessage: eC,
    claimableRewards: eu
  } = (0, P.wD)(), {
    paymentModalBanner: ep
  } = (0, M.zb)(), eh = (0, m.a5)(er), em = (null == (t = (0, h.Z)()) ? true : t.planSelectionBanner) != null, e_ = ed && eh && null != eu && eu.length > 0 && em, ef = (0, Z.m)(et, ee), {
    newPlans: ex
  } = u.ZP.useExperiment({
    location: "d17fd6_3"
  }, {
    autoTrackExposure: false
  }), ej = (0, o.e7)([y.default], () => y.default.getCurrentUser()), eg = !ed && null != en && en === F.Si.TIER_2 && null != ej && ej.hasHadPremium() && $ && null == X && (0, u.aQ)(ef), eb = (0, x.N)(J), eL = !ed && null != eb && null != en && F.nG[eb.trial_id].skus.includes(en), ev = (0, f.Ng)(), ey = null == ev || null == (n = ev.discount) ? true : n.plan_ids.some(e => F.GP[e].skuId === en), eS = !ed && null != ev && null != en && ey, eI = null != (l = eL || eS) && l, ew = i.useMemo(() => (0, O.V7)({
    skuId: en,
    isPremium: es,
    multiMonthPlans: eg ? ex : [],
    currentSubscription: X,
    defaultPlanId: el
  }), [en, es, ex, X, eg, el]), eO = eS && ew.includes(F.Xh.PREMIUM_MONTH_TIER_2) ? F.Xh.PREMIUM_MONTH_TIER_2 : ew[0], eP = (0, o.e7)([S.Z], () => S.Z.get(eO)), eE = [{
    planId: null == eP ? true : eP.id,
    quantity: 1
  }], [ek, eM] = i.useState(eI), [eT, eA] = (0, p.ED)({
    items: eE,
    renewal: false,
    preventFetch: !eI,
    applyEntitlements: true,
    trialId: q,
    paymentSourceId: ea.paymentSourceId,
    currency: ea.currency
  });
  i.useEffect(() => {
    eI && eM((null == eT ? true : eT.subscriptionPeriodEnd) == null)
  }, [eT, eI]), (0, c.Z)("Payment Modal Plan Select Step", ek, 5, {
    proratedInvoicePreview: eT,
    proratedInvoiceError: eA,
    isEligibleForOffer: eI
  }, {
    tags: {
      app_context: "billing"
    }
  });
  let eN = null != (W = null == eA ? true : eA.message) ? W : G.intl.string(G.t.R0RpRX),
    eZ = eI && null == eA,
    eB = eI && null != eA,
    eR = eZ && null == X && !!eI && (null == eT ? true : eT.subscriptionPeriodEnd) == null,
    eH = !ed && (null == eP ? true : eP.skuId) === F.Si.TIER_2 && (null == eb ? true : eb.referrer_id) != null,
    eU = null,
    eF = (0, j.H)(s.I.PAYMENT_MODAL_BANNER);
  return (eU = ed || en !== F.Si.TIER_2 || null == eF || "paymentModalBanner" !== eF.properties.properties.oneofKind ? null != ep ? ep : eH ? (0, r.jsx)(L.Z, {}) : (0, r.jsx)(b.Z, {}) : (0, r.jsx)(g.h, {
    componentId: eF.id,
    promotionBannerMarketingComponentFields: eF.properties.properties.paymentModalBanner
  }), eR) ? (0, r.jsx)(A.Z, {}) : (a()(null != ei, "Step should be set"), a()(ew.length > 0, "Premium plan options should be set"), (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(B.P, {
      giftMessage: eC
    }), !(ed && (0, I.pO)(ec)) && (0, r.jsx)(T.Z, {
      isEligibleForTrial: eL
    }), (0, r.jsxs)(N.C3, {
      children: [eZ && (0, r.jsx)("hr", {
        className: D.planSelectSeparatorUpper
      }), eU, (0, r.jsx)(H.Z, {}), (0, r.jsx)(R.Z, {}), eB ? (0, r.jsx)(d.M14, {
        type: "critical",
        children: eN
      }) : (0, r.jsx)(v.O, {
        planOptions: ew,
        eligibleForMultiMonthPlans: eg,
        referralTrialOfferId: J,
        selectedPlanId: null == er ? true : er.id,
        planGroup: Y,
        subscriptionPeriodEnd: null == eT ? true : eT.subscriptionPeriodEnd,
        discountInvoiceItems: eS ? null == eT ? true : eT.invoiceItems : true,
        useCompactGiftComponents: e_,
        handleClose: Q
      }), eZ && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)("hr", {
          className: D.planSelectSeparatorLower
        }), (0, r.jsx)(d.Text, {
          variant: "text-xs/normal",
          children: G.intl.format(G.t.BHtnqA, {
            link: w.Z.getArticleURL(U.BhN.PREMIUM_DETAILS_CANCEL_SUB)
          })
        })]
      })]
    }), (0, r.jsxs)(N.O3, {
      children: [e_ && (0, r.jsx)(_.c, {}), (0, r.jsx)(d.mzw, {
        "data-migration-pending": true,
        justify: C.Z.Justify.BETWEEN,
        align: C.Z.Align.CENTER,
        className: eo,
        children: (0, r.jsx)(v.y, {
          onStepChange: z,
          onBackClick: () => z(k.h8.SKU_SELECT),
          showBackButton: null == K && null == V,
          planOptions: ew,
          shouldRenderUpdatedPaymentModal: eZ,
          isTrial: eL
        })
      })]
    })]
  }))
}