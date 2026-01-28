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
    trialId: B,
    handleClose: F
  } = e, {
    activeSubscription: W,
    hasFetchedSubscriptions: K,
    paymentSourceId: V,
    paymentSources: Y,
    selectedSkuId: z,
    selectedPlan: Z,
    step: Q,
    defaultPlanId: q,
    priceOptions: J,
    isPremium: X,
    premiumBrandRefreshBackgroundClassName: $,
    isEligibleForTrial: ee,
    isEligibleForDiscount: en,
    referralTrialOfferId: et
  } = (0, b.P5)(), {
    isGift: er,
    giftRecipient: el,
    giftMessage: ei,
    claimableRewards: es
  } = (0, A.Pv)(), ea = (0, g.Mq)(Z), eo = (0, o.bG)([E.A], () => {
    let e = E.A.getMarketingComponentByType(a.C.GIFT_CUSTOMIZATION_BANNER);
    return null != e && "giftCustomizationBanner" === e.properties.properties.oneofKind
  }), eu = er && ea && null != es && es.length > 0 && eo, ec = (0, _.W)(Y, V), {
    newPlans: ed
  } = p.Ay.useExperiment({
    location: "d17fd6_3"
  }, {
    autoTrackExposure: false
  }), ep = (0, o.bG)([x.default], () => x.default.getCurrentUser()), em = !er && null != z && z === w.pe.TIER_2 && null != ep && ep.hasHadPremium() && K && null == W && (0, p.j2)(ec), eg = null != (n = ee || en) && n, ef = l.useMemo(() => (0, S.Tm)({
    skuId: z,
    isPremium: X,
    multiMonthPlans: em ? ed : [],
    currentSubscription: W,
    defaultPlanId: q
  }), [z, X, ed, W, em, q]), eE = en && ef.includes(w.gD.PREMIUM_MONTH_TIER_2) ? w.gD.PREMIUM_MONTH_TIER_2 : ef[0], ej = (0, o.bG)([h.A], () => h.A.get(eE)), ex = [{
    planId: null == ej ? true : ej.id,
    quantity: 1
  }], [eh, eT] = l.useState(eg), [eP, eS] = (0, m.Kq)({
    items: ex,
    renewal: false,
    preventFetch: !eg,
    applyEntitlements: true,
    trialId: B,
    paymentSourceId: J.paymentSourceId,
    currency: J.currency
  });
  l.useEffect(() => {
    eg && eT((null == eP ? true : eP.subscriptionPeriodEnd) == null)
  }, [eP, eg]), (0, c.A)("Payment Modal Plan Select Step", eh, 5, {
    proratedInvoicePreview: eP,
    proratedInvoiceError: eS,
    isEligibleForOffer: eg
  }, {
    tags: {
      app_context: "billing"
    }
  });
  let eA = null != (t = null == eS ? true : eS.message) ? t : D.intl.string(D.t.R0RpRX),
    eb = eg && null == eS,
    ey = eg && null != eS;
  return eb && null == W && eg && (null == eP ? true : eP.subscriptionPeriodEnd) == null ? (0, r.jsx)(O.A, {}) : (s()(null != Q, "Step should be set"), s()(ef.length > 0, "Premium plan options should be set"), (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(N.Z, {
      giftMessage: ei
    }), !(er && (0, T.Ik)(el)) && (0, r.jsx)(I.A, {
      isEligibleForTrial: ee
    }), (0, r.jsxs)(v.dZ, {
      children: [eb && (0, r.jsx)("hr", {
        className: L.T
      }), (0, r.jsx)(R.P, {
        planSkuId: null == ej ? true : ej.skuId,
        referralTrialOfferId: et
      }), (0, r.jsx)(M.A, {}), (0, r.jsx)(C.A, {}), ey ? (0, r.jsx)(u.wx6, {
        type: "critical",
        children: eA
      }) : (0, r.jsx)(j.$p, {
        planOptions: ef,
        eligibleForMultiMonthPlans: em,
        selectedPlanId: null == Z ? true : Z.id,
        planGroup: U,
        subscriptionPeriodEnd: null == eP ? true : eP.subscriptionPeriodEnd,
        discountInvoiceItems: en ? null == eP ? true : eP.invoiceItems : true,
        useCompactGiftComponents: eu,
        handleClose: F
      }), eb && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)("hr", {
          className: L.I
        }), (0, r.jsx)(u.Text, {
          variant: "text-xs/normal",
          children: D.intl.format(D.t.BHtnqA, {
            link: P.A.getArticleURL(k.MVz.PREMIUM_DETAILS_CANCEL_SUB)
          })
        })]
      })]
    }), (0, r.jsxs)(v.UX, {
      children: [eu && (0, r.jsx)(f._, {}), (0, r.jsx)(u.jlY, {
        "data-migration-pending": true,
        justify: d.A.Justify.BETWEEN,
        align: d.A.Align.CENTER,
        className: $,
        children: (0, r.jsx)(j.Z3, {
          onStepChange: i,
          onBackClick: () => i(y.pn.SKU_SELECT),
          showBackButton: null == G && null == H,
          planOptions: ef,
          shouldRenderUpdatedPaymentModal: eb,
          isTrial: ee
        })
      })]
    })]
  }))
}