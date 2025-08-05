/** Chunk was on 54433 **/
n.d(t, {
  x: () => H
}), n(388685);
var i = n(255367),
  l = n(73800),
  r = n(512722),
  s = n.n(r),
  a = n(399606),
  o = n(481060),
  C = n(975608),
  d = n(600164),
  c = n(711459),
  u = n(374649),
  p = n(717401),
  x = n(286961),
  f = n(572517),
  h = n(104494),
  j = n(639119),
  m = n(642530),
  _ = n(381507),
  L = n(314404),
  y = n(594174),
  E = n(509545),
  g = n(669079),
  S = n(63063),
  b = n(74538),
  v = n(987209),
  O = n(563132),
  w = n(409813),
  I = n(107998),
  Z = n(51499),
  P = n(456251),
  M = n(27034),
  T = n(435020),
  N = n(809144),
  R = n(698708),
  A = n(844068),
  U = n(981631),
  k = n(474936),
  G = n(388032),
  B = n(428523);

function H(e) {
  var t, n, r, H;
  let {
    handleStepChange: F,
    initialPlanId: D,
    planGroup: W,
    subscriptionTier: z,
    trialId: Y,
    referralTrialOfferId: K,
    handleClose: V
  } = e, {
    activeSubscription: q,
    hasFetchedSubscriptions: J,
    paymentSourceId: Q,
    paymentSources: X,
    selectedSkuId: $,
    selectedPlan: ee,
    step: et,
    defaultPlanId: en,
    priceOptions: ei,
    isPremium: el,
    premiumBrandRefreshBackgroundClassName: er
  } = (0, O.JL)(), {
    isGift: es,
    giftRecipient: ea,
    giftMessage: eo,
    claimableRewards: eC
  } = (0, v.wD)(), {
    paymentModalBanner: ed
  } = (0, I.zb)(), ec = (0, p.a5)(ee), eu = (null == (t = (0, x.Z)()) ? void 0 : t.planSelectionBanner) != null, ep = es && ec && null != eC && eC.length > 0 && eu, ex = (0, T.m)(X, Q), {
    newPlans: ef
  } = c.ZP.useExperiment({
    location: "d17fd6_3"
  }, {
    autoTrackExposure: !1
  }), eh = (0, a.e7)([y.default], () => y.default.getCurrentUser()), ej = !es && null != $ && $ === k.Si.TIER_2 && null != eh && eh.hasHadPremium() && J && null == q && (0, c.aQ)(ex), em = (0, j.N)(K), e_ = !es && null != em && null != $ && k.nG[em.trial_id].skus.includes($), eL = (0, h.Ng)(), ey = null == eL || null == (n = eL.discount) ? void 0 : n.plan_ids.some(e => k.GP[e].skuId === $), eE = !es && null != eL && null != $ && ey, eg = null != (r = e_ || eE) && r, eS = l.useMemo(() => (0, b.V7)({
    skuId: $,
    isPremium: el,
    multiMonthPlans: ej ? ef : [],
    currentSubscription: q,
    defaultPlanId: en
  }), [$, el, ef, q, ej, en]), eb = eE && eS.includes(k.Xh.PREMIUM_MONTH_TIER_2) ? k.Xh.PREMIUM_MONTH_TIER_2 : eS[0], ev = (0, a.e7)([E.Z], () => E.Z.get(eb)), eO = [{
    planId: null == ev ? void 0 : ev.id,
    quantity: 1
  }], [ew, eI] = l.useState(eg), [eZ, eP] = (0, u.ED)({
    items: eO,
    renewal: !1,
    preventFetch: !eg,
    applyEntitlements: !0,
    trialId: Y,
    paymentSourceId: ei.paymentSourceId,
    currency: ei.currency
  });
  l.useEffect(() => {
    eg && eI((null == eZ ? void 0 : eZ.subscriptionPeriodEnd) == null)
  }, [eZ, eg]), (0, C.Z)("Payment Modal Plan Select Step", ew, 5, {
    proratedInvoicePreview: eZ,
    proratedInvoiceError: eP,
    isEligibleForOffer: eg
  }, {
    tags: {
      app_context: "billing"
    }
  });
  let eM = null != (H = null == eP ? void 0 : eP.message) ? H : G.intl.string(G.t.R0RpRU),
    eT = eg && null == eP,
    eN = eg && null != eP,
    eR = eT && null == q && !!eg && (null == eZ ? void 0 : eZ.subscriptionPeriodEnd) == null,
    eA = !es && (null == ev ? void 0 : ev.skuId) === k.Si.TIER_2 && (null == em ? void 0 : em.referrer_id) != null,
    eU = null;
  return (eU = null != ed ? ed : eA ? (0, i.jsx)(_.Z, {}) : (0, i.jsx)(m.Z, {}), eR) ? (0, i.jsx)(P.Z, {}) : (s()(null != et, "Step should be set"), s()(eS.length > 0, "Premium plan options should be set"), (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(N.P, {
      giftMessage: eo
    }), !(es && (0, g.pO)(ea)) && (0, i.jsx)(Z.Z, {
      isEligibleForTrial: e_
    }), (0, i.jsxs)(M.C3, {
      children: [eT && (0, i.jsx)("hr", {
        className: B.planSelectSeparatorUpper
      }), eU, (0, i.jsx)(A.Z, {}), (0, i.jsx)(R.Z, {}), eN ? (0, i.jsx)(o.kzN, {
        children: eM
      }) : (0, i.jsx)(L.O, {
        planOptions: eS,
        eligibleForMultiMonthPlans: ej,
        referralTrialOfferId: K,
        selectedPlanId: null == ee ? void 0 : ee.id,
        planGroup: W,
        subscriptionPeriodEnd: null == eZ ? void 0 : eZ.subscriptionPeriodEnd,
        discountInvoiceItems: eE ? null == eZ ? void 0 : eZ.invoiceItems : void 0,
        useCompactGiftComponents: ep,
        handleClose: V
      }), eT && (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)("hr", {
          className: B.planSelectSeparatorLower
        }), (0, i.jsx)(o.Text, {
          variant: "text-xs/normal",
          children: G.intl.format(G.t.BHtnqK, {
            link: S.Z.getArticleURL(U.BhN.PREMIUM_DETAILS_CANCEL_SUB)
          })
        })]
      })]
    }), (0, i.jsxs)(M.O3, {
      children: [ep && (0, i.jsx)(f.c, {}), (0, i.jsx)(o.mzw, {
        justify: d.Z.Justify.BETWEEN,
        align: d.Z.Align.CENTER,
        className: er,
        children: (0, i.jsx)(L.y, {
          onStepChange: F,
          onBackClick: () => F(w.h8.SKU_SELECT),
          showBackButton: null == D && null == z,
          planOptions: eS,
          shouldRenderUpdatedPaymentModal: eT,
          isTrial: e_
        })
      })]
    })]
  }))
}