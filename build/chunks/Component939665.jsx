/** Chunk was on 2824 **/
/** chunk id: 939665, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => L
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk284009 = require("./284009.js"),
  s = require.n(Chunk284009),
  Chunk877624 = require("./877624.js"),
  Chunk417597 = require("./417597.js"),
  Chunk397927 = require("./397927.js"),
  Chunk428644 = require("./428644.js"),
  Chunk235986 = require("./235986.jsx"),
  Chunk666468 = require("./666468.js"),
  Chunk543767 = require("./543767.js"),
  Chunk810498 = require("./810498.js"),
  Chunk364876 = require("./364876.jsx"),
  Chunk412260 = require("./412260.js"),
  Chunk446929 = require("./446929.jsx"),
  Chunk287809 = require("./287809.js"),
  Chunk97352 = require("./97352.js"),
  Chunk45938 = require("./45938.js"),
  Chunk975571 = require("./975571.js"),
  Chunk927578 = require("./927578.js"),
  Chunk937008 = require("./937008.jsx"),
  Chunk156312 = require("./156312.jsx"),
  Chunk166532 = require("./166532.js"),
  Chunk69494 = require("./69494.jsx"),
  Chunk534479 = require("./534479.jsx"),
  Chunk482132 = require("./482132.jsx"),
  Chunk216641 = require("./216641.js"),
  Chunk50956 = require("./50956.jsx"),
  Chunk921925 = require("./921925.jsx"),
  Chunk592362 = require("./592362.jsx"),
  Chunk104745 = require("./104745.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk788868 = require("./788868.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk495989 = require("./495989.js");

function L(e) {
  var n, t;
  let {
    handleStepChange: i,
    initialPlanId: L,
    planGroup: G,
    subscriptionTier: H,
    trialId: F,
    handleClose: B
  } = e, {
    activeSubscription: W,
    hasFetchedSubscriptions: K,
    paymentSourceId: V,
    paymentSources: Y,
    selectedSkuId: z,
    selectedPlan: q,
    step: Z,
    defaultPlanId: Q,
    priceOptions: J,
    isPremium: X,
    premiumBrandRefreshBackgroundClassName: $,
    isEligibleForTrial: ee,
    isEligibleForDiscount: en,
    referralTrialOfferId: et
  } = (0, O.P5)(), {
    isGift: el,
    giftRecipient: er,
    giftMessage: ei,
    claimableRewards: es
  } = (0, A.Pv)(), ea = (0, E.Mq)(q), eo = (0, o.bG)([f.A], () => {
    let e = f.A.getMarketingComponentByType(a.C.GIFT_CUSTOMIZATION_BANNER);
    return null != e && "giftCustomizationBanner" === e.properties.properties.oneofKind
  }), eu = el && ea && null != es && es.length > 0 && eo, ec = (0, v.W)(Y, V), {
    newPlans: ed
  } = p.Ay.useExperiment({
    location: "d17fd6_3"
  }, {
    autoTrackExposure: false
  }), ep = (0, o.bG)([j.default], () => j.default.getCurrentUser()), em = !el && null != z && z === w.pe.TIER_2 && null != ep && ep.hasHadPremium() && K && null == W && (0, p.j2)(ec), eE = null != (n = ee || en) && n, eg = r.useMemo(() => (0, T.Tm)({
    skuId: z,
    isPremium: X,
    multiMonthPlans: em ? ed : [],
    currentSubscription: W,
    defaultPlanId: Q
  }), [z, X, ed, W, em, Q]), ef = en && eg.includes(w.gD.PREMIUM_MONTH_TIER_2) ? w.gD.PREMIUM_MONTH_TIER_2 : eg[0], eP = (0, o.bG)([h.A], () => h.A.get(ef)), ej = [{
    planId: null == eP ? true : eP.id,
    quantity: 1
  }], [eh, e_] = r.useState(eE), [ex, eT] = (0, m.Kq)({
    items: ej,
    renewal: false,
    preventFetch: !eE,
    applyEntitlements: true,
    trialId: F,
    paymentSourceId: J.paymentSourceId,
    currency: J.currency
  });
  r.useEffect(() => {
    eE && e_((null == ex ? true : ex.subscriptionPeriodEnd) == null)
  }, [ex, eE]), (0, c.A)("Payment Modal Plan Select Step", eh, 5, {
    proratedInvoicePreview: ex,
    proratedInvoiceError: eT,
    isEligibleForOffer: eE
  }, {
    tags: {
      app_context: "billing"
    }
  });
  let eA = null != (t = null == eT ? true : eT.message) ? t : D.intl.string(D.t.R0RpRX),
    eO = eE && null == eT,
    eS = eE && null != eT;
  return eO && null == W && eE && (null == ex ? true : ex.subscriptionPeriodEnd) == null ? (0, l.jsx)(b.A, {}) : (s()(null != Z, "Step should be set"), s()(eg.length > 0, "Premium plan options should be set"), (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(R.Z, {
      giftMessage: ei
    }), !(el && (0, _.Ik)(er)) && (0, l.jsx)(I.A, {
      isEligibleForTrial: ee
    }), (0, l.jsxs)(y.dZ, {
      children: [eO && (0, l.jsx)("hr", {
        className: U.T
      }), (0, l.jsx)(N.P, {
        planSkuId: null == eP ? true : eP.skuId,
        referralTrialOfferId: et
      }), (0, l.jsx)(M.A, {}), (0, l.jsx)(C.A, {}), eS ? (0, l.jsx)(u.wx6, {
        type: "critical",
        children: eA
      }) : (0, l.jsx)(P.$p, {
        planOptions: eg,
        eligibleForMultiMonthPlans: em,
        selectedPlanId: null == q ? true : q.id,
        planGroup: G,
        subscriptionPeriodEnd: null == ex ? true : ex.subscriptionPeriodEnd,
        discountInvoiceItems: en ? null == ex ? true : ex.invoiceItems : true,
        useCompactGiftComponents: eu,
        handleClose: B
      }), eO && (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)("hr", {
          className: U.I
        }), (0, l.jsx)(u.Text, {
          variant: "text-xs/normal",
          children: D.intl.format(D.t.BHtnqA, {
            link: x.A.getArticleURL(k.MVz.PREMIUM_DETAILS_CANCEL_SUB)
          })
        })]
      })]
    }), (0, l.jsxs)(y.UX, {
      children: [eu && (0, l.jsx)(g._, {}), (0, l.jsx)(u.jlY, {
        "data-migration-pending": true,
        justify: d.A.Justify.BETWEEN,
        align: d.A.Align.CENTER,
        className: $,
        children: (0, l.jsx)(P.Z3, {
          onStepChange: i,
          onBackClick: () => i(S.pn.SKU_SELECT),
          showBackButton: null == L && null == H,
          planOptions: eg,
          shouldRenderUpdatedPaymentModal: eO,
          isTrial: ee
        })
      })]
    })]
  }))
}