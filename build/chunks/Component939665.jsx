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
  Chunk91053 = require("./91053.jsx"),
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
    planGroup: H,
    subscriptionTier: F,
    trialId: B,
    handleClose: W
  } = e, {
    activeSubscription: K,
    hasFetchedSubscriptions: V,
    paymentSourceId: Y,
    paymentSources: z,
    selectedSkuId: q,
    selectedPlan: Z,
    step: Q,
    defaultPlanId: X,
    priceOptions: J,
    isPremium: $,
    premiumBrandRefreshBackgroundClassName: ee,
    isEligibleForTrial: en,
    isEligibleForDiscount: et,
    referralTrialOfferId: er
  } = (0, O.P5)(), {
    isGift: el,
    giftRecipient: ei,
    giftMessage: es,
    claimableRewards: ea
  } = (0, b.Pv)(), eo = (0, E.Mq)(Z), eu = (0, o.bG)([f.A], () => {
    let e = f.A.getMarketingComponentByType(a.C.GIFT_CUSTOMIZATION_BANNER);
    return null != e && "giftCustomizationBanner" === e.properties.properties.oneofKind
  }), ec = el && eo && null != ea && ea.length > 0 && eu, ed = (0, R.W)(z, Y), {
    newPlans: ep
  } = p.Ay.useExperiment({
    location: "d17fd6_3"
  }, {
    autoTrackExposure: false
  }), em = (0, o.bG)([h.default], () => h.default.getCurrentUser()), eE = !el && null != q && q === D.pe.TIER_2 && null != em && em.hasHadPremium() && V && null == K && (0, p.j2)(ed), eg = null != (n = en || et) && n, ef = l.useMemo(() => (0, S.Tm)({
    skuId: q,
    isPremium: $,
    multiMonthPlans: eE ? ep : [],
    currentSubscription: K,
    defaultPlanId: X
  }), [q, $, ep, K, eE, X]), eP = et && ef.includes(D.gD.PREMIUM_MONTH_TIER_2) ? D.gD.PREMIUM_MONTH_TIER_2 : ef[0], ej = (0, o.bG)([_.A], () => _.A.get(eP)), eh = [{
    planId: null == ej ? true : ej.id,
    quantity: 1
  }], [e_, ex] = l.useState(eg), [eT, eS] = (0, m.Kq)({
    items: eh,
    renewal: false,
    preventFetch: !eg,
    applyEntitlements: true,
    trialId: B,
    paymentSourceId: J.paymentSourceId,
    currency: J.currency
  });
  l.useEffect(() => {
    eg && ex((null == eT ? true : eT.subscriptionPeriodEnd) == null)
  }, [eT, eg]), (0, c.A)("Payment Modal Plan Select Step", e_, 5, {
    proratedInvoicePreview: eT,
    proratedInvoiceError: eS,
    isEligibleForOffer: eg
  }, {
    tags: {
      app_context: "billing"
    }
  });
  let eb = null != (t = null == eS ? true : eS.message) ? t : U.intl.string(U.t.R0RpRX),
    eO = eg && null == eS,
    ey = eg && null != eS;
  return eO && null == K && eg && (null == eT ? true : eT.subscriptionPeriodEnd) == null ? (0, r.jsx)(I.A, {}) : (s()(null != Q, "Step should be set"), s()(ef.length > 0, "Premium plan options should be set"), (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(C.Z, {
      giftMessage: es
    }), !(el && (0, x.Ik)(ei)) && (0, r.jsx)(A.A, {
      isEligibleForTrial: en
    }), (0, r.jsxs)(v.dZ, {
      children: [eO && (0, r.jsx)("hr", {
        className: L.T
      }), (0, r.jsx)(k.P, {
        planSkuId: null == ej ? true : ej.skuId,
        referralTrialOfferId: er
      }), (0, r.jsx)(N.A, {}), (0, r.jsx)(M.A, {}), ey ? (0, r.jsx)(u.wx6, {
        type: "critical",
        children: eb
      }) : (0, r.jsx)(j.$p, {
        planOptions: ef,
        eligibleForMultiMonthPlans: eE,
        selectedPlanId: null == Z ? true : Z.id,
        planGroup: H,
        subscriptionPeriodEnd: null == eT ? true : eT.subscriptionPeriodEnd,
        discountInvoiceItems: et ? null == eT ? true : eT.invoiceItems : true,
        useCompactGiftComponents: ec,
        handleClose: W
      }), eO && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)("hr", {
          className: L.I
        }), (0, r.jsx)(u.Text, {
          variant: "text-xs/normal",
          children: U.intl.format(U.t.BHtnqA, {
            link: T.A.getArticleURL(w.MVz.PREMIUM_DETAILS_CANCEL_SUB)
          })
        })]
      })]
    }), (0, r.jsxs)(v.UX, {
      children: [ec && (0, r.jsx)(g._, {}), (0, r.jsx)(u.jlY, {
        "data-migration-pending": true,
        justify: d.A.Justify.BETWEEN,
        align: d.A.Align.CENTER,
        className: ee,
        children: (0, r.jsx)(P.Z, {
          onStepChange: i,
          onBackClick: () => i(y.pn.SKU_SELECT),
          showBackButton: null == G && null == F,
          planOptions: ef,
          shouldRenderUpdatedPaymentModal: eO,
          isTrial: en
        })
      })]
    })]
  }))
}