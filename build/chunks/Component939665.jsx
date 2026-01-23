/** Chunk was on 2824 **/
/** chunk id: 939665, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => L
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk284009 = require("./284009.js"),
  s = require.n(Chunk284009),
  Chunk417597 = require("./417597.js"),
  Chunk397927 = require("./397927.js"),
  Chunk428644 = require("./428644.js"),
  Chunk235986 = require("./235986.jsx"),
  Chunk666468 = require("./666468.js"),
  Chunk543767 = require("./543767.js"),
  Chunk552736 = require("./552736.js"),
  Chunk810498 = require("./810498.js"),
  Chunk364876 = require("./364876.jsx"),
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
  var t, n, i;
  let {
    handleStepChange: L,
    initialPlanId: U,
    planGroup: G,
    subscriptionTier: H,
    trialId: B,
    handleClose: F
  } = e, {
    activeSubscription: W,
    hasFetchedSubscriptions: V,
    paymentSourceId: K,
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
  } = (0, P.Pv)(), ea = (0, g.Mq)(Z), eo = (null == (i = (0, m.A)()) ? true : i.planSelectionBanner) != null, eu = er && ea && null != es && es.length > 0 && eo, ec = (0, A.W)(z, K), {
    newPlans: ed
  } = d.Ay.useExperiment({
    location: "d17fd6_3"
  }, {
    autoTrackExposure: false
  }), ep = (0, a.bG)([j.default], () => j.default.getCurrentUser()), em = !er && null != Y && Y === N.pe.TIER_2 && null != ep && ep.hasHadPremium() && V && null == W && (0, d.j2)(ec), eg = null != (t = ee || et) && t, ef = l.useMemo(() => (0, O.Tm)({
    skuId: Y,
    isPremium: X,
    multiMonthPlans: em ? ed : [],
    currentSubscription: W,
    defaultPlanId: q
  }), [Y, X, ed, W, em, q]), ey = et && ef.includes(N.gD.PREMIUM_MONTH_TIER_2) ? N.gD.PREMIUM_MONTH_TIER_2 : ef[0], ej = (0, a.bG)([b.A], () => b.A.get(ey)), eb = [{
    planId: null == ej ? true : ej.id,
    quantity: 1
  }], [eh, ev] = l.useState(eg), [eO, eP] = (0, p.Kq)({
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
  }, [eO, eg]), (0, u.A)("Payment Modal Plan Select Step", eh, 5, {
    proratedInvoicePreview: eO,
    proratedInvoiceError: eP,
    isEligibleForOffer: eg
  }, {
    tags: {
      app_context: "billing"
    }
  });
  let ex = null != (n = null == eP ? true : eP.message) ? n : R.intl.string(R.t.R0RpRX),
    eE = eg && null == eP,
    eS = eg && null != eP;
  return eE && null == W && eg && (null == eO ? true : eO.subscriptionPeriodEnd) == null ? (0, r.jsx)(T.A, {}) : (s()(null != Q, "Step should be set"), s()(ef.length > 0, "Premium plan options should be set"), (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(k.Z, {
      giftMessage: ei
    }), !(er && (0, h.Ik)(el)) && (0, r.jsx)(S.A, {
      isEligibleForTrial: ee
    }), (0, r.jsxs)(I.dZ, {
      children: [eE && (0, r.jsx)("hr", {
        className: D.T
      }), (0, r.jsx)(M.P, {
        planSkuId: null == ej ? true : ej.skuId,
        referralTrialOfferId: en
      }), (0, r.jsx)(C.A, {}), (0, r.jsx)(w.A, {}), eS ? (0, r.jsx)(o.wx6, {
        type: "critical",
        children: ex
      }) : (0, r.jsx)(y.$p, {
        planOptions: ef,
        eligibleForMultiMonthPlans: em,
        selectedPlanId: null == Z ? true : Z.id,
        planGroup: G,
        subscriptionPeriodEnd: null == eO ? true : eO.subscriptionPeriodEnd,
        discountInvoiceItems: et ? null == eO ? true : eO.invoiceItems : true,
        useCompactGiftComponents: eu,
        handleClose: F
      }), eE && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)("hr", {
          className: D.I
        }), (0, r.jsx)(o.Text, {
          variant: "text-xs/normal",
          children: R.intl.format(R.t.BHtnqA, {
            link: v.A.getArticleURL(_.MVz.PREMIUM_DETAILS_CANCEL_SUB)
          })
        })]
      })]
    }), (0, r.jsxs)(I.UX, {
      children: [eu && (0, r.jsx)(f._, {}), (0, r.jsx)(o.jlY, {
        "data-migration-pending": true,
        justify: c.A.Justify.BETWEEN,
        align: c.A.Align.CENTER,
        className: $,
        children: (0, r.jsx)(y.Z3, {
          onStepChange: L,
          onBackClick: () => L(E.pn.SKU_SELECT),
          showBackButton: null == U && null == H,
          planOptions: ef,
          shouldRenderUpdatedPaymentModal: eE,
          isTrial: ee
        })
      })]
    })]
  }))
}