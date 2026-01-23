/** Chunk was on 2824 **/
/** chunk id: 939665, original params: e,t,n (module,exports,require) **/
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
  var t, n;
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
    paymentSources: z,
    selectedSkuId: Y,
    selectedPlan: Z,
    step: Q,
    defaultPlanId: q,
    priceOptions: J,
    isPremium: X,
    premiumBrandRefreshBackgroundClassName: $,
    isEligibleForTrial: ee,
    isEligibleForDiscount: et,
    referralTrialOfferId: en
  } = (0, x.P5)(), {
    isGift: er,
    giftRecipient: el,
    giftMessage: ei,
    claimableRewards: es
  } = (0, E.Pv)(), ea = (0, g.Mq)(Z), eo = (0, o.bG)([y.A], () => {
    let e = y.A.getMarketingComponentByType(a.C.GIFT_CUSTOMIZATION_BANNER);
    return null != e && "giftCustomizationBanner" === e.properties.properties.oneofKind
  }), eu = er && ea && null != es && es.length > 0 && eo, ec = (0, k.W)(z, V), {
    newPlans: ed
  } = p.Ay.useExperiment({
    location: "d17fd6_3"
  }, {
    autoTrackExposure: false
  }), ep = (0, o.bG)([b.default], () => b.default.getCurrentUser()), em = !er && null != Y && Y === R.pe.TIER_2 && null != ep && ep.hasHadPremium() && K && null == W && (0, p.j2)(ec), eg = null != (t = ee || et) && t, ef = l.useMemo(() => (0, P.Tm)({
    skuId: Y,
    isPremium: X,
    multiMonthPlans: em ? ed : [],
    currentSubscription: W,
    defaultPlanId: q
  }), [Y, X, ed, W, em, q]), ey = et && ef.includes(R.gD.PREMIUM_MONTH_TIER_2) ? R.gD.PREMIUM_MONTH_TIER_2 : ef[0], ej = (0, o.bG)([h.A], () => h.A.get(ey)), eb = [{
    planId: null == ej ? true : ej.id,
    quantity: 1
  }], [eh, ev] = l.useState(eg), [eO, eP] = (0, m.Kq)({
    items: eb,
    renewal: false,
    preventFetch: !eg,
    applyEntitlements: true,
    trialId: B,
    paymentSourceId: J.paymentSourceId,
    currency: J.currency
  });
  l.useEffect(() => {
    eg && ev((null == eO ? true : eO.subscriptionPeriodEnd) == null)
  }, [eO, eg]), (0, c.A)("Payment Modal Plan Select Step", eh, 5, {
    proratedInvoicePreview: eO,
    proratedInvoiceError: eP,
    isEligibleForOffer: eg
  }, {
    tags: {
      app_context: "billing"
    }
  });
  let eE = null != (n = null == eP ? true : eP.message) ? n : D.intl.string(D.t.R0RpRX),
    ex = eg && null == eP,
    eS = eg && null != eP;
  return ex && null == W && eg && (null == eO ? true : eO.subscriptionPeriodEnd) == null ? (0, r.jsx)(I.A, {}) : (s()(null != Q, "Step should be set"), s()(ef.length > 0, "Premium plan options should be set"), (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(C.Z, {
      giftMessage: ei
    }), !(er && (0, v.Ik)(el)) && (0, r.jsx)(T.A, {
      isEligibleForTrial: ee
    }), (0, r.jsxs)(A.dZ, {
      children: [ex && (0, r.jsx)("hr", {
        className: L.T
      }), (0, r.jsx)(M.P, {
        planSkuId: null == ej ? true : ej.skuId,
        referralTrialOfferId: en
      }), (0, r.jsx)(_.A, {}), (0, r.jsx)(w.A, {}), eS ? (0, r.jsx)(u.wx6, {
        type: "critical",
        children: eE
      }) : (0, r.jsx)(j.$p, {
        planOptions: ef,
        eligibleForMultiMonthPlans: em,
        selectedPlanId: null == Z ? true : Z.id,
        planGroup: U,
        subscriptionPeriodEnd: null == eO ? true : eO.subscriptionPeriodEnd,
        discountInvoiceItems: et ? null == eO ? true : eO.invoiceItems : true,
        useCompactGiftComponents: eu,
        handleClose: F
      }), ex && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)("hr", {
          className: L.I
        }), (0, r.jsx)(u.Text, {
          variant: "text-xs/normal",
          children: D.intl.format(D.t.BHtnqA, {
            link: O.A.getArticleURL(N.MVz.PREMIUM_DETAILS_CANCEL_SUB)
          })
        })]
      })]
    }), (0, r.jsxs)(A.UX, {
      children: [eu && (0, r.jsx)(f._, {}), (0, r.jsx)(u.jlY, {
        "data-migration-pending": true,
        justify: d.A.Justify.BETWEEN,
        align: d.A.Align.CENTER,
        className: $,
        children: (0, r.jsx)(j.Z3, {
          onStepChange: i,
          onBackClick: () => i(S.pn.SKU_SELECT),
          showBackButton: null == G && null == H,
          planOptions: ef,
          shouldRenderUpdatedPaymentModal: ex,
          isTrial: ee
        })
      })]
    })]
  }))
}