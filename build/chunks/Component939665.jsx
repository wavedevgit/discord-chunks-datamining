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
    hasFetchedSubscriptions: z,
    paymentSourceId: V,
    paymentSources: K,
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
  } = (0, P.P5)(), {
    isGift: el,
    giftRecipient: er,
    giftMessage: ei,
    claimableRewards: es
  } = (0, x.Pv)(), ea = (0, f.Mq)(Z), eo = (null == (i = (0, m.A)()) ? true : i.planSelectionBanner) != null, eu = el && ea && null != es && es.length > 0 && eo, ec = (0, A.W)(K, V), {
    newPlans: ed
  } = d.Ay.useExperiment({
    location: "d17fd6_3"
  }, {
    autoTrackExposure: false
  }), ep = (0, a.bG)([y.default], () => y.default.getCurrentUser()), em = !el && null != Y && Y === N.pe.TIER_2 && null != ep && ep.hasHadPremium() && z && null == W && (0, d.j2)(ec), ef = null != (t = ee || et) && t, eg = r.useMemo(() => (0, O.Tm)({
    skuId: Y,
    isPremium: X,
    multiMonthPlans: em ? ed : [],
    currentSubscription: W,
    defaultPlanId: q
  }), [Y, X, ed, W, em, q]), ej = et && eg.includes(N.gD.PREMIUM_MONTH_TIER_2) ? N.gD.PREMIUM_MONTH_TIER_2 : eg[0], ey = (0, a.bG)([h.A], () => h.A.get(ej)), eh = [{
    planId: null == ey ? true : ey.id,
    quantity: 1
  }], [ev, eb] = r.useState(ef), [eO, ex] = (0, p.Kq)({
    items: eh,
    renewal: false,
    preventFetch: !ef,
    applyEntitlements: true,
    trialId: B,
    paymentSourceId: J.paymentSourceId,
    currency: J.currency
  });
  r.useEffect(() => {
    ef && eb((null == eO ? true : eO.subscriptionPeriodEnd) == null)
  }, [eO, ef]), (0, u.A)("Payment Modal Plan Select Step", ev, 5, {
    proratedInvoicePreview: eO,
    proratedInvoiceError: ex,
    isEligibleForOffer: ef
  }, {
    tags: {
      app_context: "billing"
    }
  });
  let eP = null != (n = null == ex ? true : ex.message) ? n : R.intl.string(R.t.R0RpRX),
    eS = ef && null == ex,
    eE = ef && null != ex;
  return eS && null == W && ef && (null == eO ? true : eO.subscriptionPeriodEnd) == null ? (0, l.jsx)(T.A, {}) : (s()(null != Q, "Step should be set"), s()(eg.length > 0, "Premium plan options should be set"), (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(k.Z, {
      giftMessage: ei
    }), !(el && (0, v.Ik)(er)) && (0, l.jsx)(E.A, {
      isEligibleForTrial: ee
    }), (0, l.jsxs)(I.dZ, {
      children: [eS && (0, l.jsx)("hr", {
        className: D.T
      }), (0, l.jsx)(C.P, {
        planSkuId: null == ey ? true : ey.skuId,
        referralTrialOfferId: en
      }), (0, l.jsx)(_.A, {}), (0, l.jsx)(w.A, {}), eE ? (0, l.jsx)(o.wx6, {
        type: "critical",
        children: eP
      }) : (0, l.jsx)(j.$p, {
        planOptions: eg,
        eligibleForMultiMonthPlans: em,
        selectedPlanId: null == Z ? true : Z.id,
        planGroup: G,
        subscriptionPeriodEnd: null == eO ? true : eO.subscriptionPeriodEnd,
        discountInvoiceItems: et ? null == eO ? true : eO.invoiceItems : true,
        useCompactGiftComponents: eu,
        handleClose: F
      }), eS && (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)("hr", {
          className: D.I
        }), (0, l.jsx)(o.Text, {
          variant: "text-xs/normal",
          children: R.intl.format(R.t.BHtnqA, {
            link: b.A.getArticleURL(M.MVz.PREMIUM_DETAILS_CANCEL_SUB)
          })
        })]
      })]
    }), (0, l.jsxs)(I.UX, {
      children: [eu && (0, l.jsx)(g._, {}), (0, l.jsx)(o.jlY, {
        "data-migration-pending": true,
        justify: c.A.Justify.BETWEEN,
        align: c.A.Align.CENTER,
        className: $,
        children: (0, l.jsx)(j.Z3, {
          onStepChange: L,
          onBackClick: () => L(S.pn.SKU_SELECT),
          showBackButton: null == U && null == H,
          planOptions: eg,
          shouldRenderUpdatedPaymentModal: eS,
          isTrial: ee
        })
      })]
    })]
  }))
}