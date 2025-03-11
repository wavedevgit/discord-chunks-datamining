/** Chunk was on 3743 **/
n.d(t, {
  x: () => H
}), n(47120);
var r = n(200651),
  i = n(192379),
  l = n(512722),
  s = n.n(l),
  o = n(399606),
  a = n(481060),
  C = n(975608),
  d = n(600164),
  c = n(711459),
  u = n(374649),
  p = n(439017),
  _ = n(717401),
  x = n(286961),
  f = n(572517),
  h = n(104494),
  j = n(639119),
  m = n(642530),
  L = n(381507),
  g = n(314404),
  S = n(594174),
  y = n(509545),
  E = n(669079),
  b = n(63063),
  N = n(74538),
  I = n(987209),
  v = n(563132),
  P = n(409813),
  M = n(107998),
  T = n(51499),
  Z = n(456251),
  O = n(614277),
  k = n(809144),
  w = n(698708),
  U = n(844068),
  A = n(981631),
  R = n(474936),
  F = n(388032),
  B = n(859009);

function H(e) {
  var t, n, l, H;
  let {
    handleStepChange: W,
    initialPlanId: G,
    subscriptionTier: D,
    trialId: Y,
    referralTrialOfferId: z,
    handleClose: K
  } = e, {
    activeSubscription: X,
    hasFetchedSubscriptions: V,
    paymentSourceId: Q,
    paymentSources: q,
    selectedSkuId: J,
    selectedPlan: $,
    step: ee,
    defaultPlanId: et,
    priceOptions: en,
    isPremium: er
  } = (0, v.JL)(), {
    isGift: ei,
    giftRecipient: el,
    giftMessage: es,
    claimableRewards: eo
  } = (0, I.wD)(), {
    planSelectBanner: ea
  } = (0, M.zb)(), eC = (0, _.a5)($), ed = (null === (t = (0, x.Z)()) || void 0 === t ? void 0 : t.planSelectionBanner) != null, ec = ei && eC && null != eo && eo.length > 0 && ed, eu = null != Q ? q[Q] : null, {
    newPlans: ep
  } = c.ZP.useExperiment({
    location: "d17fd6_3"
  }, {
    autoTrackExposure: !1
  }), e_ = (0, o.e7)([S.default], () => S.default.getCurrentUser()), ex = !ei && null != J && J === R.Si.TIER_2 && null != e_ && e_.hasHadPremium() && V && null == X && (0, c.aQ)(eu), ef = (0, j.N)(z), eh = !ei && null != ef && null != J && R.nG[ef.trial_id].skus.includes(J), ej = (0, h.Ng)(), em = null == ej ? void 0 : null === (n = ej.discount) || void 0 === n ? void 0 : n.plan_ids.some(e => R.GP[e].skuId === J), eL = !ei && null != ej && null != J && em, eg = null !== (l = eh || eL) && void 0 !== l && l, {
    defaultToMonthlyPlan: eS
  } = p.k.useExperiment({
    location: "d17fd6_4"
  }, {
    autoTrackExposure: !1
  }), ey = i.useMemo(() => (0, N.V7)({
    skuId: J,
    isPremium: er,
    multiMonthPlans: ex ? ep : [],
    currentSubscription: X,
    isGift: ei,
    isEligibleForTrial: eh,
    defaultPlanId: et,
    defaultToMonthlyPlan: eS
  }), [J, er, ep, X, ex, ei, eh, et, eS]), eE = eL && ey.includes(R.Xh.PREMIUM_MONTH_TIER_2) ? R.Xh.PREMIUM_MONTH_TIER_2 : ey[0], eb = (0, o.e7)([y.Z], () => y.Z.get(eE)), eN = [{
    planId: null == eb ? void 0 : eb.id,
    quantity: 1
  }], [eI, ev] = i.useState(eg), [eP, eM] = (0, u.ED)({
    items: eN,
    renewal: !1,
    preventFetch: !eg,
    applyEntitlements: !0,
    trialId: Y,
    paymentSourceId: en.paymentSourceId,
    currency: en.currency
  });
  i.useEffect(() => {
    eg && ev((null == eP ? void 0 : eP.subscriptionPeriodEnd) == null)
  }, [eP, eg]), (0, C.Z)("Payment Modal Plan Select Step", eI, 5, {
    proratedInvoicePreview: eP,
    proratedInvoiceError: eM,
    isEligibleForOffer: eg
  }, {
    tags: {
      app_context: "billing"
    }
  });
  let eT = null !== (H = null == eM ? void 0 : eM.message) && void 0 !== H ? H : F.NW.string(F.t.R0RpRU),
    eZ = eg && null == eM,
    eO = eg && null != eM,
    ek = eZ && null == X && !!eg && (null == eP ? void 0 : eP.subscriptionPeriodEnd) == null,
    ew = !ei && (null == eb ? void 0 : eb.skuId) === R.Si.TIER_2 && (null == ef ? void 0 : ef.referrer_id) != null,
    eU = null;
  return (eU = null != ea ? ea : ew ? (0, r.jsx)(L.Z, {}) : (0, r.jsx)(m.Z, {}), ek) ? (0, r.jsx)(Z.Z, {}) : (s()(null != ee, "Step should be set"), s()(ey.length > 0, "Premium plan options should be set"), (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(k.P, {
      giftMessage: es
    }), !(ei && (0, E.pO)(el)) && (0, r.jsx)(T.Z, {
      isEligibleForTrial: eh
    }), (0, r.jsxs)(O.C3, {
      children: [eZ && (0, r.jsx)("hr", {
        className: B.planSelectSeparatorUpper
      }), eU, (0, r.jsx)(U.Z, {}), (0, r.jsx)(w.Z, {}), eO ? (0, r.jsx)(a.kzN, {
        children: eT
      }) : (0, r.jsx)(g.O, {
        planOptions: ey,
        eligibleForMultiMonthPlans: ex,
        referralTrialOfferId: z,
        selectedPlanId: null == $ ? void 0 : $.id,
        subscriptionPeriodEnd: null == eP ? void 0 : eP.subscriptionPeriodEnd,
        discountInvoiceItems: eL ? null == eP ? void 0 : eP.invoiceItems : void 0,
        useCompactGiftComponents: ec,
        handleClose: K
      }), eZ && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)("hr", {
          className: B.planSelectSeparatorLower
        }), (0, r.jsx)(a.Text, {
          variant: "text-xs/normal",
          children: F.NW.format(F.t.BHtnqK, {
            link: b.Z.getArticleURL(A.BhN.PREMIUM_DETAILS_CANCEL_SUB)
          })
        })]
      })]
    }), (0, r.jsxs)(O.O3, {
      children: [ec && (0, r.jsx)(f.c, {}), (0, r.jsx)(a.mzw, {
        justify: d.Z.Justify.BETWEEN,
        align: d.Z.Align.CENTER,
        children: (0, r.jsx)(g.y, {
          onStepChange: W,
          onBackClick: () => W(P.h8.SKU_SELECT),
          showBackButton: null == G && null == D,
          planOptions: ey,
          shouldRenderUpdatedPaymentModal: eZ,
          isTrial: eh
        })
      })]
    })]
  }))
}