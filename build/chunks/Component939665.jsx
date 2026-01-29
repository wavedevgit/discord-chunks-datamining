/** Chunk was on 2824 **/
/** chunk id: 939665, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => G
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

function G(e) {
  var n, t;
  let {
    handleStepChange: i,
    initialPlanId: G,
    planGroup: U,
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
  } = (0, A.Pv)(), ea = (0, g.Mq)(q), eo = (0, o.bG)([f.A], () => {
    let e = f.A.getMarketingComponentByType(a.C.GIFT_CUSTOMIZATION_BANNER);
    return null != e && "giftCustomizationBanner" === e.properties.properties.oneofKind
  }), eu = el && ea && null != es && es.length > 0 && eo, ec = (0, v.W)(Y, V), {
    newPlans: ed
  } = p.Ay.useExperiment({
    location: "d17fd6_3"
  }, {
    autoTrackExposure: false
  }), ep = (0, o.bG)([h.default], () => h.default.getCurrentUser()), em = !el && null != z && z === w.pe.TIER_2 && null != ep && ep.hasHadPremium() && K && null == W && (0, p.j2)(ec), eg = null != (n = ee || en) && n, eE = r.useMemo(() => (0, S.Tm)({
    skuId: z,
    isPremium: X,
    multiMonthPlans: em ? ed : [],
    currentSubscription: W,
    defaultPlanId: Q
  }), [z, X, ed, W, em, Q]), ef = en && eE.includes(w.gD.PREMIUM_MONTH_TIER_2) ? w.gD.PREMIUM_MONTH_TIER_2 : eE[0], ej = (0, o.bG)([x.A], () => x.A.get(ef)), eh = [{
    planId: null == ej ? true : ej.id,
    quantity: 1
  }], [ex, eP] = r.useState(eg), [eT, eS] = (0, m.Kq)({
    items: eh,
    renewal: false,
    preventFetch: !eg,
    applyEntitlements: true,
    trialId: F,
    paymentSourceId: J.paymentSourceId,
    currency: J.currency
  });
  r.useEffect(() => {
    eg && eP((null == eT ? true : eT.subscriptionPeriodEnd) == null)
  }, [eT, eg]), (0, c.A)("Payment Modal Plan Select Step", ex, 5, {
    proratedInvoicePreview: eT,
    proratedInvoiceError: eS,
    isEligibleForOffer: eg
  }, {
    tags: {
      app_context: "billing"
    }
  });
  let eA = null != (t = null == eS ? true : eS.message) ? t : D.intl.string(D.t.R0RpRX),
    eO = eg && null == eS,
    eb = eg && null != eS;
  return eO && null == W && eg && (null == eT ? true : eT.subscriptionPeriodEnd) == null ? (0, l.jsx)(I.A, {}) : (s()(null != Z, "Step should be set"), s()(eE.length > 0, "Premium plan options should be set"), (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(C.Z, {
      giftMessage: ei
    }), !(el && (0, P.Ik)(er)) && (0, l.jsx)(y.A, {
      isEligibleForTrial: ee
    }), (0, l.jsxs)(_.dZ, {
      children: [eO && (0, l.jsx)("hr", {
        className: L.T
      }), (0, l.jsx)(R.P, {
        planSkuId: null == ej ? true : ej.skuId,
        referralTrialOfferId: et
      }), (0, l.jsx)(M.A, {}), (0, l.jsx)(N.A, {}), eb ? (0, l.jsx)(u.wx6, {
        type: "critical",
        children: eA
      }) : (0, l.jsx)(j.$p, {
        planOptions: eE,
        eligibleForMultiMonthPlans: em,
        selectedPlanId: null == q ? true : q.id,
        planGroup: U,
        subscriptionPeriodEnd: null == eT ? true : eT.subscriptionPeriodEnd,
        discountInvoiceItems: en ? null == eT ? true : eT.invoiceItems : true,
        useCompactGiftComponents: eu,
        handleClose: B
      }), eO && (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)("hr", {
          className: L.I
        }), (0, l.jsx)(u.Text, {
          variant: "text-xs/normal",
          children: D.intl.format(D.t.BHtnqA, {
            link: T.A.getArticleURL(k.MVz.PREMIUM_DETAILS_CANCEL_SUB)
          })
        })]
      })]
    }), (0, l.jsxs)(_.UX, {
      children: [eu && (0, l.jsx)(E._, {}), (0, l.jsx)(u.jlY, {
        "data-migration-pending": true,
        justify: d.A.Justify.BETWEEN,
        align: d.A.Align.CENTER,
        className: $,
        children: (0, l.jsx)(j.Z3, {
          onStepChange: i,
          onBackClick: () => i(b.pn.SKU_SELECT),
          showBackButton: null == G && null == H,
          planOptions: eE,
          shouldRenderUpdatedPaymentModal: eO,
          isTrial: ee
        })
      })]
    })]
  }))
}