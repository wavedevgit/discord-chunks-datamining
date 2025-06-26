/** Chunk was on web.js **/
"use strict";
n.d(t, {
  O: () => en,
  y: () => er
}), n(388685);
var r = n(255367),
  i = n(73800),
  a = n(120356),
  o = n.n(a),
  s = n(512722),
  l = n.n(s),
  c = n(442837),
  u = n(481060),
  d = n(490504),
  f = n(911969),
  _ = n(975298),
  p = n(940824),
  h = n(987209),
  m = n(563132),
  g = n(409813),
  E = n(509545),
  b = n(78839),
  y = n(669079),
  O = n(63063),
  v = n(74538),
  I = n(937615),
  T = n(296848),
  S = n(711459),
  A = n(367074),
  N = n(109213),
  C = n(717401),
  R = n(857039),
  P = n(847903),
  w = n(104494),
  D = n(639119),
  L = n(811334),
  x = n(55610),
  k = n(553797),
  M = n(346071),
  j = n(927699),
  U = n(987716),
  G = n(311821),
  B = n(459965),
  V = n(811616),
  F = n(251660),
  Z = n(474936),
  H = n(981631),
  Y = n(231338),
  W = n(388032),
  K = n(651427),
  z = n(104327);

function q(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function X(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      q(e, t, n[t])
    })
  }
  return e
}

function Q(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function J(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Q(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function $(e, t) {
  if (null == e) return {};
  var n, r, i = ee(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function ee(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function et(e, t) {
  let n = W.intl.string(W.t.BYa62t),
    r = W.intl.string(W.t.CDa6Dg),
    i = (() => {
      switch (e.interval) {
        case Z.rV.YEAR:
          return n;
        case Z.rV.MONTH:
        default:
          return r
      }
    })(),
    a = e.skuId;
  switch (t) {
    case Z.Si.TIER_0:
      switch (a) {
        case Z.Si.TIER_1:
          return W.intl.string(W.t.q6mxDQ);
        case Z.Si.TIER_2:
          return W.intl.string(W.t.seZVS0);
        default:
          return i
      }
    case Z.Si.TIER_1:
      switch (a) {
        case Z.Si.TIER_0:
          return W.intl.string(W.t["7+u2zs"]);
        case Z.Si.TIER_2:
          return W.intl.string(W.t.NG2qcX);
        default:
          return i
      }
    case Z.Si.TIER_2:
      switch (a) {
        case Z.Si.TIER_0:
        case Z.Si.TIER_1:
          return W.intl.string(W.t["eB0/w8"]);
        case Z.Si.TIER_2:
          return e.interval === Z.rV.MONTH ? W.intl.formatToPlainString(W.t["RqUv8/"], {
            numFreeGuildSubscriptions: Z.cb
          }) : i;
        default:
          return i
      }
    default:
      return i
  }
}

function en(e) {
  var t, n, a, s;
  let {
    premiumSubscription: g,
    skuId: b,
    selectedPlanId: G,
    setSelectedPlanId: B,
    planGroup: q,
    priceOptions: Q,
    planOptions: ee,
    eligibleForMultiMonthPlans: en,
    referralTrialOfferId: er,
    subscriptionPeriodEnd: ei,
    showTotal: ea = !0,
    discountInvoiceItems: eo,
    useCompactGiftComponents: es,
    handleClose: el
  } = e, {
    activeSubscription: ec,
    setSelectedPlanId: eu,
    selectedSkuId: ed,
    selectedPlan: ef,
    priceOptions: e_,
    enablePremiumBrandRefresh: ep
  } = (0, m.JL)(), {
    isGift: eh,
    giftRecipient: em,
    selectedGiftStyle: eg,
    customGiftMessage: eE,
    setCustomGiftMessage: eb,
    giftingOrigin: ey,
    claimableRewards: eO,
    setSelectedGiftingPromotionReward: ev
  } = (0, h.wD)(), eI = (0, y.MY)(em), eT = eh && (0, y.pO)(em), eS = (0, C.cF)(ef, eT, eO), eA = (0, R.Z)({
    location: "PremiumPlanSelectStep"
  });
  b = null != b ? b : ed, g = null != g ? g : ec, l()(void 0 !== g, "should not be undefined");
  let [eN, eC] = (0, c.Wu)([E.Z], () => [null != g ? E.Z.get(g.planId) : null, null != G ? E.Z.get(G) : null]), eR = (0, D.N)(er), eP = null == eR ? void 0 : eR.subscription_trial, ew = (0, w.Ng)(), eD = (0, A.Vi)(), eL = null == ew || null == (t = ew.discount) ? void 0 : t.plan_ids, ex = null != eC ? eC : ef, ek = i.useCallback(e => {
    null != B ? B(e) : eu(e)
  }, [B, eu]), eM = null != Q ? Q : e_;
  l()(null != eM, "Price option has to be set");
  let ej = (0, _.Z)({
      forceFetch: !1,
      excludeReverseTrial: !1,
      excludeReverseTrialFromCountdown: !0
    }),
    eU = null != eR && Z.nG[eR.trial_id].skus.includes(b),
    eG = null != ew && ee.some(e => null == eL ? void 0 : eL.includes(e)) && null != ew.discount,
    eB = (0, v.aS)(Z.Xh.PREMIUM_MONTH_TIER_2, !1, eh, eM);
  i.useEffect(() => {
    en && S.ZP.trackExposure({
      location: "5f89bb_1"
    })
  }, [en]);
  let eV = (null == ex ? void 0 : ex.id) != null && ee.includes(ex.id);
  i.useEffect(() => {
    if (!eV) {
      if (null == eN || eh) ek(ee[0]);
      else if (null != eN) {
        let e = ee.find(e => e !== eN.id);
        null != e && ek(e)
      }
    }
  }, [eV, eh, ee, eN, ek]), i.useEffect(() => {
    eS && null != eO && eO.length > 0 && ev(eO[0])
  }, [eO, ev, eS]);
  let eF = !eT && (eh || !eU && !eG) && eV && ea,
    eZ = (0, u.arW)(),
    {
      ref: eH
    } = eZ,
    eY = $(eZ, ["ref"]),
    eW = (null == ex ? void 0 : ex.id) != null ? (0, v.aS)(ex.id, !1, eh, eM) : void 0,
    {
      ipCountryCode: eK
    } = (0, P.Z)(),
    ez = "HR" === eK && null != eW && eW.currency === Y.pK.EUR,
    eq = (0, v.Ap)(eM.paymentSourceId),
    eX = i.useMemo(() => (null == eP ? void 0 : eP.interval) === Z.rV.DAY ? (null == eP ? void 0 : eP.interval_count) > 7 ? W.intl.string(W.t.Z1V2cn) : W.intl.string(W.t.MI1rHh) : W.intl.string(W.t["+S5lra"]), [eP]),
    eQ = !eh && (eG || null != eP && eU && null != ei),
    eJ = null == eo || null == (s = eo.find(e => e.subscriptionPlanId === Z.Xh.PREMIUM_MONTH_TIER_2)) || null == (a = s.discounts) || null == (n = a.find(e => e.type === f.eW.SUBSCRIPTION_PLAN)) ? void 0 : n.amount,
    e$ = (e, t, n) => {
      if (eT) return (0, r.jsx)(u.vwX, {
        className: o()(z.selectGiftTitle, {
          [z.compactSelectGiftTitle]: es
        }),
        children: W.intl.string(W.t["3E5hXl"])
      });
      if (!eQ) return (0, r.jsx)("div", {
        className: z.selectPlanChooseTitle,
        children: W.intl.string(W.t.a19jpa)
      });
      if (t) {
        let t = (null == e ? void 0 : e.trial_id) === Z.a7;
        return (0, r.jsxs)("div", {
          children: [(0, r.jsx)(u.Text, {
            variant: "text-sm/normal",
            className: z.trialPlanSelectHeader,
            children: t ? W.intl.format(W.t.nG95hI, {
              endDate: ei
            }) : W.intl.format(W.t.s4E7kZ, {
              trialEnd: ei,
              trialPeriod: eX
            })
          }), (0, r.jsx)("hr", {
            className: z.planSelectSeparator
          })]
        })
      }
      if (n && null != eJ && null != eB && G === Z.Xh.PREMIUM_MONTH_TIER_2) return (0, r.jsxs)("div", {
        children: [(0, r.jsx)(u.Text, {
          variant: "text-sm/normal",
          className: z.trialPlanSelectHeader,
          children: W.intl.format(W.t["nG7g/P"], {
            numMonths: null == ew ? void 0 : ew.discount.user_usage_limit,
            discountedPrice: (0, I.T4)(eB.amount - eJ, eB.currency),
            regularPrice: (0, I.T4)(eB.amount, eB.currency)
          })
        }), (0, r.jsx)("hr", {
          className: z.planSelectSeparator
        })]
      })
    },
    e0 = () => {
      if (eI === y.xr.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD && null != eb) return (0, r.jsx)(j.Z, {
        sectionTitle: W.intl.string(W.t.B3miEx),
        className: o()(z.customGiftMessageWrapper, {
          [z.compactCustomGiftMessageWrapper]: es
        }),
        innerClassName: z.customGiftMessage,
        onTextChange: e => eb(e),
        pendingText: eE,
        currentText: eE
      })
    },
    {
      enabled: e1
    } = N.G.useExperiment({
      location: "PremiumPlanSelectStep"
    }, {
      autoTrackExposure: !1
    }),
    e2 = ey === Z.Wt.DM_CHANNEL && e1,
    e3 = e2 ? z.bodyColumnLeft : z.bodyColumnMiddle,
    e4 = () => eT && null != eg ? e2 ? (0, r.jsx)(U.q, {
      className: K.adjustedGiftMainAnimation,
      optionsContainerClassName: K.adjustedGiftBoxOptionContainer
    }) : (0, r.jsx)(U.q, {}) : null,
    e5 = () => (0, r.jsx)("div", J(X({
      ref: eH
    }, eY), {
      children: ee.map(e => (0, r.jsx)(V.Z, {
        planId: e,
        premiumSubscription: eh ? null : null != g ? g : null,
        selectPlan: ek,
        selected: (null == ex ? void 0 : ex.id) === e,
        priceOptions: eM,
        shouldShowUpdatedPaymentModal: eQ,
        isEligibleForDiscount: eG,
        discountAmountOff: eJ,
        isEligibleForTrial: eU
      }, e))
    })),
    e6 = () => e$(eR, eU, eG),
    e8 = () => ez ? (0, r.jsx)(d.Z, {
      message: W.intl.formatToPlainString(W.t["9hnZoK"], {
        kunaPriceWithCurrency: (0, I.T4)(7.5345 * eW.amount, Y.pK.HRK)
      })
    }) : null,
    e7 = null != g && null != G && (0, T.R4)(g, G, q),
    e9 = ej.isFractionalPremiumActive && (null == g || e7) && !eh && null != G && Z.dJ.has(G);
  return (0, r.jsxs)("div", {
    className: o()(eT ? z.stepBodyCustomGift : z.stepBody, {
      [z.paddingForHalloweenBanner]: eA
    }),
    children: [e9 && (0, r.jsx)(M.n, {
      fractionalPremiumInfo: ej,
      enablePremiumBrandRefresh: ep
    }), (0, r.jsxs)("div", {
      className: eT ? e3 : void 0,
      children: [(0, r.jsx)(x.Z, {
        fromBoostCancelModal: !1,
        className: z.legacyPricingNotice
      }), e2 && e6(), e2 ? e5() : e4(), e2 && e8()]
    }), (0, r.jsxs)("div", {
      className: eT ? z.bodyColumnRight : void 0,
      children: [(0, r.jsx)(F.s, {
        className: es ? z.compactSendGiftToUser : void 0,
        giftRecipient: em
      }), e2 && e4(), e0(), null != eN && !eh && !e9 && !eD && (0, r.jsx)("div", {
        className: z.bodyText,
        children: et(eN, b)
      }), !e2 && e6(), !e2 && e5(), (0, r.jsx)("div", {
        children: eF && null != ex && null != eW ? (0, r.jsxs)("div", {
          children: [(0, r.jsx)("div", {
            className: z.selectPlanDivider
          }), (0, r.jsx)(L.az, {
            label: W.intl.string(W.t.txajQE),
            value: (0, r.jsx)(k.Z, {
              price: eW.amount,
              currency: eW.currency,
              intervalType: eh ? null : ex.interval,
              intervalCount: ex.intervalCount,
              isPrepaidPaymentSource: eq
            }),
            className: z.selectPlanTotalRow
          })]
        }) : null
      }), !e2 && e8(), !eh && !eQ && ea && (0, r.jsx)(d.Z, {
        message: W.intl.format(W.t.Om31w8, {
          documentationLink: O.Z.getArticleURL(H.BhN.LOCALIZED_PRICING)
        })
      }), eh && !e2 && (0, r.jsx)(p.Z, {
        onClose: el
      })]
    })]
  })
}

function er(e) {
  let {
    onStepChange: t,
    selectedPlanId: n,
    paymentSources: i,
    onBackClick: a,
    showBackButton: o,
    planOptions: s,
    shouldRenderUpdatedPaymentModal: l = !1,
    isTrial: c
  } = e, {
    paymentSources: d,
    selectedPlan: f
  } = (0, m.JL)(), {
    isGift: _,
    claimableRewards: p,
    giftRecipient: g
  } = (0, h.wD)(), E = (0, y.pO)(g);
  return i = null != i ? i : d, n = null != n ? n : null == f ? void 0 : f.id, (0, r.jsxs)(r.Fragment, {
    children: [null != n && s.includes(n) ? (0, r.jsx)(ei, {
      paymentSources: i,
      onStepChange: t,
      selectedPlanId: n,
      isGift: _,
      claimableRewards: p,
      shouldRenderUpdatedPaymentModal: l,
      isTrial: c
    }) : (0, r.jsx)(u.zxk, {
      disabled: !0,
      children: W.intl.string(W.t.XqMe3N)
    }), o ? (0, r.jsx)(G.Z, {
      className: _ && E ? z.equalDistantBackButton : void 0,
      onClick: a
    }) : null]
  })
}

function ei(e) {
  let {
    onStepChange: t,
    selectedPlanId: n,
    isGift: i,
    claimableRewards: a,
    paymentSources: o,
    shouldRenderUpdatedPaymentModal: s,
    isTrial: l
  } = e, d = (0, c.e7)([b.ZP], () => b.ZP.getPremiumTypeSubscription()), {
    step: f,
    selectedPlan: _
  } = (0, m.JL)(), {
    hasEntitlements: p
  } = (0, B.H)(n, i), h = null != d && null != d.paymentSourceId || Object.keys(o).length > 0 || p && !l;
  var E = s ? W.intl.string(W.t.PDTjLC) : W.intl.string(W.t.XqMe3N),
    y = g.h8.ADD_PAYMENT_STEPS;
  return h && (y = g.h8.REVIEW), (0, C.id)(_, i, a) && f !== g.h8.SELECT_FREE_SKU && (y = g.h8.SELECT_FREE_SKU), (0, r.jsx)(u.zxk, {
    onClick: () => t(y),
    children: E
  })
}