/** Chunk was on web.js **/
"use strict";
n.d(t, {
  O: () => Q,
  y: () => X
}), n(47120);
var r = n(200651),
  i = n(192379),
  o = n(120356),
  a = n.n(o),
  s = n(512722),
  l = n.n(s),
  c = n(442837),
  u = n(481060),
  d = n(490504),
  f = n(911969),
  _ = n(940824),
  p = n(987209),
  h = n(563132),
  g = n(409813),
  m = n(509545),
  E = n(78839),
  v = n(669079),
  b = n(63063),
  y = n(74538),
  O = n(937615),
  S = n(711459),
  I = n(109213),
  T = n(717401),
  N = n(857039),
  A = n(847903),
  C = n(104494),
  R = n(639119),
  P = n(55610),
  D = n(653798),
  w = n(553797),
  L = n(927699),
  x = n(987716),
  M = n(311821),
  j = n(459965),
  k = n(811616),
  U = n(251660),
  G = n(474936),
  B = n(981631),
  F = n(231338),
  V = n(388032),
  Z = n(572408),
  H = n(142279);

function W(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function Y(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      W(e, t, n[t])
    })
  }
  return e
}

function K(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function z(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : K(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function q(e, t) {
  let n = V.NW.string(V.t.BYa62t),
    r = V.NW.string(V.t.CDa6Dg),
    i = (() => {
      switch (e.interval) {
        case G.rV.YEAR:
          return n;
        case G.rV.MONTH:
        default:
          return r
      }
    })(),
    o = e.skuId;
  switch (t) {
    case G.Si.TIER_0:
      switch (o) {
        case G.Si.TIER_1:
          return V.NW.string(V.t.q6mxDQ);
        case G.Si.TIER_2:
          return V.NW.string(V.t.seZVS0);
        default:
          return i
      }
    case G.Si.TIER_1:
      switch (o) {
        case G.Si.TIER_0:
          return V.NW.string(V.t["7+u2zs"]);
        case G.Si.TIER_2:
          return V.NW.string(V.t.NG2qcX);
        default:
          return i
      }
    case G.Si.TIER_2:
      switch (o) {
        case G.Si.TIER_0:
        case G.Si.TIER_1:
          return V.NW.string(V.t["eB0/w8"]);
        case G.Si.TIER_2:
          return e.interval === G.rV.MONTH ? V.NW.formatToPlainString(V.t["RqUv8/"], {
            numFreeGuildSubscriptions: G.cb
          }) : i;
        default:
          return i
      }
    default:
      return i
  }
}

function Q(e) {
  var t, n, o, s;
  let {
    premiumSubscription: g,
    skuId: E,
    selectedPlanId: M,
    setSelectedPlanId: j,
    priceOptions: W,
    planOptions: K,
    eligibleForMultiMonthPlans: Q,
    referralTrialOfferId: X,
    subscriptionPeriodEnd: J,
    showTotal: $ = !0,
    discountInvoiceItems: ee,
    useCompactGiftComponents: et,
    handleClose: en
  } = e, {
    activeSubscription: er,
    setSelectedPlanId: ei,
    selectedSkuId: eo,
    selectedPlan: ea,
    priceOptions: es
  } = (0, h.JL)(), {
    isGift: el,
    giftRecipient: ec,
    selectedGiftStyle: eu,
    customGiftMessage: ed,
    setCustomGiftMessage: ef,
    giftingOrigin: e_,
    claimableRewards: ep,
    setSelectedGiftingPromotionReward: eh
  } = (0, p.wD)(), eg = (0, v.MY)(ec), em = el && (0, v.pO)(ec), eE = (0, T.cF)(ea, em, ep), ev = (0, N.Z)({
    location: "PremiumPlanSelectStep"
  });
  E = null != E ? E : eo, g = null != g ? g : er, l()(void 0 !== g, "should not be undefined");
  let [eb, ey] = (0, c.Wu)([m.Z], () => [null != g ? m.Z.get(g.planId) : null, null != M ? m.Z.get(M) : null]), eO = (0, R.N)(X), eS = null == eO ? void 0 : eO.subscription_trial, eI = (0, C.Ng)(), eT = null == eI ? void 0 : null === (t = eI.discount) || void 0 === t ? void 0 : t.plan_ids, eN = null != ey ? ey : ea, eA = i.useCallback(e => {
    null != j ? j(e) : ei(e)
  }, [j, ei]), eC = null != W ? W : es;
  l()(null != eC, "Price option has to be set");
  let eR = null != eO && G.nG[eO.trial_id].skus.includes(E),
    eP = null != eI && K.some(e => null == eT ? void 0 : eT.includes(e)) && null != eI.discount,
    eD = (0, y.aS)(G.Xh.PREMIUM_MONTH_TIER_2, !1, el, eC);
  i.useEffect(() => {
    Q && S.ZP.trackExposure({
      location: "5f89bb_1"
    })
  }, [Q]);
  let ew = (null == eN ? void 0 : eN.id) != null && K.includes(eN.id);
  i.useEffect(() => {
    if (!ew) {
      if (null == eb || el) eA(K[0]);
      else if (null != eb) {
        let e = K.find(e => e !== eb.id);
        null != e && eA(e)
      }
    }
  }, [ew, el, K, eb, eA]), i.useEffect(() => {
    eE && null != ep && ep.length > 0 && eh(ep[0])
  }, [ep, eh, eE]);
  let eL = !em && (el || !eR && !eP) && ew && $,
    ex = (0, u.arW)(),
    eM = (null == eN ? void 0 : eN.id) != null ? (0, y.aS)(eN.id, !1, el, eC) : void 0,
    {
      ipCountryCode: ej
    } = (0, A.Z)(),
    ek = "HR" === ej && null != eM && eM.currency === F.pK.EUR,
    eU = (0, y.Ap)(eC.paymentSourceId),
    eG = i.useMemo(() => (null == eS ? void 0 : eS.interval) === G.rV.DAY ? (null == eS ? void 0 : eS.interval_count) > 7 ? V.NW.string(V.t.Z1V2cn) : V.NW.string(V.t.MI1rHh) : V.NW.string(V.t["+S5lra"]), [eS]),
    eB = !el && (eP || null != eS && eR && null != J),
    eF = null == ee ? void 0 : null === (s = ee.find(e => e.subscriptionPlanId === G.Xh.PREMIUM_MONTH_TIER_2)) || void 0 === s ? void 0 : null === (o = s.discounts) || void 0 === o ? void 0 : null === (n = o.find(e => e.type === f.eW.SUBSCRIPTION_PLAN)) || void 0 === n ? void 0 : n.amount,
    eV = (e, t, n) => {
      if (em) return (0, r.jsx)(u.vwX, {
        className: a()(H.selectGiftTitle, {
          [H.compactSelectGiftTitle]: et
        }),
        children: V.NW.string(V.t["3E5hXl"])
      });
      if (!eB) return (0, r.jsx)("div", {
        className: H.selectPlanChooseTitle,
        children: V.NW.string(V.t.a19jpa)
      });
      if (t) {
        let t = (null == e ? void 0 : e.trial_id) === G.a7;
        return (0, r.jsxs)("div", {
          children: [(0, r.jsx)(u.Text, {
            variant: "text-sm/normal",
            className: H.trialPlanSelectHeader,
            children: t ? V.NW.format(V.t.nG95hI, {
              endDate: J
            }) : V.NW.format(V.t.s4E7kZ, {
              trialEnd: J,
              trialPeriod: eG
            })
          }), (0, r.jsx)("hr", {
            className: H.planSelectSeparator
          })]
        })
      }
      if (n && null != eF && null != eD && M === G.Xh.PREMIUM_MONTH_TIER_2) return (0, r.jsxs)("div", {
        children: [(0, r.jsx)(u.Text, {
          variant: "text-sm/normal",
          className: H.trialPlanSelectHeader,
          children: V.NW.format(V.t["nG7g/P"], {
            numMonths: null == eI ? void 0 : eI.discount.user_usage_limit,
            discountedPrice: (0, O.T4)(eD.amount - eF, eD.currency),
            regularPrice: (0, O.T4)(eD.amount, eD.currency)
          })
        }), (0, r.jsx)("hr", {
          className: H.planSelectSeparator
        })]
      })
    },
    eZ = () => {
      if (eg === v.xr.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD && null != ef) return (0, r.jsx)(L.Z, {
        sectionTitle: V.NW.string(V.t.B3miEx),
        className: a()(H.customGiftMessageWrapper, {
          [H.compactCustomGiftMessageWrapper]: et
        }),
        innerClassName: H.customGiftMessage,
        onTextChange: e => ef(e),
        pendingText: ed,
        currentText: ed
      })
    },
    {
      enabled: eH
    } = I.G.useExperiment({
      location: "PremiumPlanSelectStep"
    }, {
      autoTrackExposure: !1
    }),
    eW = e_ === G.Wt.DM_CHANNEL && eH,
    eY = eW ? H.bodyColumnLeft : H.bodyColumnMiddle,
    eK = () => em && null != eu ? eW ? (0, r.jsx)(x.q, {
      className: Z.adjustedGiftMainAnimation,
      optionsContainerClassName: Z.adjustedGiftBoxOptionContainer
    }) : (0, r.jsx)(x.q, {}) : null,
    ez = () => (0, r.jsx)("div", z(Y({}, ex), {
      children: K.map(e => (0, r.jsx)(k.Z, {
        planId: e,
        premiumSubscription: el ? null : null != g ? g : null,
        selectPlan: eA,
        selected: (null == eN ? void 0 : eN.id) === e,
        priceOptions: eC,
        shouldShowUpdatedPaymentModal: eB,
        isEligibleForDiscount: eP,
        discountAmountOff: eF,
        isEligibleForTrial: eR
      }, e))
    })),
    eq = () => eV(eO, eR, eP),
    eQ = () => ek ? (0, r.jsx)(d.Z, {
      message: V.NW.formatToPlainString(V.t["9hnZoK"], {
        kunaPriceWithCurrency: (0, O.T4)(7.5345 * eM.amount, F.pK.HRK)
      })
    }) : null;
  return (0, r.jsxs)("div", {
    className: a()(em ? H.stepBodyCustomGift : H.stepBody, {
      [H.paddingForHalloweenBanner]: ev
    }),
    children: [(0, r.jsxs)("div", {
      className: em ? eY : void 0,
      children: [(0, r.jsx)(P.Z, {
        fromBoostCancelModal: !1,
        className: H.legacyPricingNotice
      }), eW && eq(), eW ? ez() : eK(), eW && eQ()]
    }), (0, r.jsxs)("div", {
      className: em ? H.bodyColumnRight : void 0,
      children: [(0, r.jsx)(U.s, {
        className: et ? H.compactSendGiftToUser : void 0,
        giftRecipient: ec
      }), eW && eK(), eZ(), null != eb && !el && (0, r.jsx)("div", {
        className: H.bodyText,
        children: q(eb, E)
      }), !eW && eq(), !eW && ez(), (0, r.jsx)("div", {
        children: eL && null != eN && null != eM ? (0, r.jsxs)("div", {
          children: [(0, r.jsx)("div", {
            className: H.selectPlanDivider
          }), (0, r.jsx)(D.Ji, {
            label: V.NW.string(V.t.txajQE),
            value: (0, r.jsx)(w.Z, {
              price: eM.amount,
              currency: eM.currency,
              intervalType: el ? null : eN.interval,
              intervalCount: eN.intervalCount,
              isPrepaidPaymentSource: eU
            }),
            className: H.selectPlanTotalRow
          })]
        }) : null
      }), !eW && eQ(), !el && !eB && $ && (0, r.jsx)(d.Z, {
        message: V.NW.format(V.t.Om31w8, {
          documentationLink: b.Z.getArticleURL(B.BhN.LOCALIZED_PRICING)
        })
      }), el && !eW && (0, r.jsx)(_.Z, {
        onClose: en
      })]
    })]
  })
}

function X(e) {
  let {
    onStepChange: t,
    selectedPlanId: n,
    paymentSources: i,
    onBackClick: o,
    showBackButton: a,
    planOptions: s,
    shouldRenderUpdatedPaymentModal: l = !1,
    isTrial: c
  } = e, {
    paymentSources: d,
    selectedPlan: f
  } = (0, h.JL)(), {
    isGift: _,
    claimableRewards: g,
    giftRecipient: m
  } = (0, p.wD)(), E = (0, v.pO)(m);
  return i = null != i ? i : d, n = null != n ? n : null == f ? void 0 : f.id, (0, r.jsxs)(r.Fragment, {
    children: [null != n && s.includes(n) ? (0, r.jsx)(J, {
      paymentSources: i,
      onStepChange: t,
      selectedPlanId: n,
      isGift: _,
      claimableRewards: g,
      shouldRenderUpdatedPaymentModal: l,
      isTrial: c
    }) : (0, r.jsx)(u.zxk, {
      disabled: !0,
      children: V.NW.string(V.t.XqMe3N)
    }), a ? (0, r.jsx)(M.Z, {
      className: _ && E ? H.equalDistantBackButton : void 0,
      onClick: o
    }) : null]
  })
}

function J(e) {
  let {
    onStepChange: t,
    selectedPlanId: n,
    isGift: i,
    claimableRewards: o,
    paymentSources: a,
    shouldRenderUpdatedPaymentModal: s,
    isTrial: l
  } = e, d = (0, c.e7)([E.ZP], () => E.ZP.getPremiumTypeSubscription()), {
    step: f,
    selectedPlan: _
  } = (0, h.JL)(), {
    hasEntitlements: p
  } = (0, j.H)(n, i), m = null != d && null != d.paymentSourceId || Object.keys(a).length > 0 || p && !l;
  var v = s ? V.NW.string(V.t.PDTjLC) : V.NW.string(V.t.XqMe3N),
    b = g.h8.ADD_PAYMENT_STEPS;
  return m && (b = g.h8.REVIEW), (0, T.id)(_, i, o) && f !== g.h8.SELECT_FREE_SKU && (b = g.h8.SELECT_FREE_SKU), (0, r.jsx)(u.zxk, {
    onClick: () => t(b),
    children: v
  })
}