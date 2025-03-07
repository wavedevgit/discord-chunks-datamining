/** Chunk was on web.js **/
"use strict";
n.d(t, {
  O: () => X,
  y: () => J
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
  _ = n(975298),
  p = n(940824),
  h = n(987209),
  m = n(563132),
  g = n(409813),
  E = n(509545),
  v = n(78839),
  b = n(669079),
  y = n(63063),
  O = n(74538),
  I = n(937615),
  S = n(711459),
  T = n(109213),
  N = n(717401),
  A = n(857039),
  C = n(847903),
  R = n(104494),
  P = n(639119),
  w = n(55610),
  D = n(653798),
  L = n(553797),
  x = n(927699),
  M = n(987716),
  k = n(311821),
  j = n(459965),
  U = n(811616),
  G = n(251660),
  B = n(474936),
  V = n(981631),
  F = n(231338),
  Z = n(388032),
  H = n(220283),
  W = n(970408);

function Y(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function K(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      Y(e, t, n[t])
    })
  }
  return e
}

function z(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function q(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : z(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function Q(e, t) {
  let n = Z.NW.string(Z.t.BYa62t),
    r = Z.NW.string(Z.t.CDa6Dg),
    i = (() => {
      switch (e.interval) {
        case B.rV.YEAR:
          return n;
        case B.rV.MONTH:
        default:
          return r
      }
    })(),
    o = e.skuId;
  switch (t) {
    case B.Si.TIER_0:
      switch (o) {
        case B.Si.TIER_1:
          return Z.NW.string(Z.t.q6mxDQ);
        case B.Si.TIER_2:
          return Z.NW.string(Z.t.seZVS0);
        default:
          return i
      }
    case B.Si.TIER_1:
      switch (o) {
        case B.Si.TIER_0:
          return Z.NW.string(Z.t["7+u2zs"]);
        case B.Si.TIER_2:
          return Z.NW.string(Z.t.NG2qcX);
        default:
          return i
      }
    case B.Si.TIER_2:
      switch (o) {
        case B.Si.TIER_0:
        case B.Si.TIER_1:
          return Z.NW.string(Z.t["eB0/w8"]);
        case B.Si.TIER_2:
          return e.interval === B.rV.MONTH ? Z.NW.formatToPlainString(Z.t["RqUv8/"], {
            numFreeGuildSubscriptions: B.cb
          }) : i;
        default:
          return i
      }
    default:
      return i
  }
}

function X(e) {
  var t, n, o, s;
  let {
    premiumSubscription: g,
    skuId: v,
    selectedPlanId: k,
    setSelectedPlanId: j,
    priceOptions: Y,
    planOptions: z,
    eligibleForMultiMonthPlans: X,
    referralTrialOfferId: J,
    subscriptionPeriodEnd: $,
    showTotal: ee = !0,
    discountInvoiceItems: et,
    useCompactGiftComponents: en,
    handleClose: er
  } = e, {
    activeSubscription: ei,
    setSelectedPlanId: eo,
    selectedSkuId: ea,
    selectedPlan: es,
    priceOptions: el
  } = (0, m.JL)(), {
    isGift: ec,
    giftRecipient: eu,
    selectedGiftStyle: ed,
    customGiftMessage: ef,
    setCustomGiftMessage: e_,
    giftingOrigin: ep,
    claimableRewards: eh,
    setSelectedGiftingPromotionReward: em
  } = (0, h.wD)(), eg = (0, b.MY)(eu), eE = ec && (0, b.pO)(eu), ev = (0, N.cF)(es, eE, eh), eb = (0, A.Z)({
    location: "PremiumPlanSelectStep"
  });
  v = null != v ? v : ea, g = null != g ? g : ei, l()(void 0 !== g, "should not be undefined");
  let [ey, eO] = (0, c.Wu)([E.Z], () => [null != g ? E.Z.get(g.planId) : null, null != k ? E.Z.get(k) : null]), eI = (0, P.N)(J), eS = null == eI ? void 0 : eI.subscription_trial, eT = (0, R.Ng)(), eN = null == eT ? void 0 : null === (t = eT.discount) || void 0 === t ? void 0 : t.plan_ids, eA = null != eO ? eO : es, eC = i.useCallback(e => {
    null != j ? j(e) : eo(e)
  }, [j, eo]), eR = null != Y ? Y : el;
  l()(null != eR, "Price option has to be set");
  let eP = (0, _.Z)(),
    ew = eP.fractionalState !== B.a$.NONE,
    eD = null != eI && B.nG[eI.trial_id].skus.includes(v);
  l()(!(ew && eD), "Cannot redeem trial with active fractional premium");
  let eL = null != eT && z.some(e => null == eN ? void 0 : eN.includes(e)) && null != eT.discount,
    ex = (0, O.aS)(B.Xh.PREMIUM_MONTH_TIER_2, !1, ec, eR);
  i.useEffect(() => {
    X && S.ZP.trackExposure({
      location: "5f89bb_1"
    })
  }, [X]);
  let eM = (null == eA ? void 0 : eA.id) != null && z.includes(eA.id);
  i.useEffect(() => {
    if (!eM) {
      if (null == ey || ec) eC(z[0]);
      else if (null != ey) {
        let e = z.find(e => e !== ey.id);
        null != e && eC(e)
      }
    }
  }, [eM, ec, z, ey, eC]), i.useEffect(() => {
    ev && null != eh && eh.length > 0 && em(eh[0])
  }, [eh, em, ev]);
  let ek = !eE && (ec || !eD && !eL) && eM && ee,
    ej = (0, u.arW)(),
    eU = (null == eA ? void 0 : eA.id) != null ? (0, O.aS)(eA.id, !1, ec, eR) : void 0,
    {
      ipCountryCode: eG
    } = (0, C.Z)(),
    eB = "HR" === eG && null != eU && eU.currency === F.pK.EUR,
    eV = (0, O.Ap)(eR.paymentSourceId),
    eF = i.useMemo(() => (null == eS ? void 0 : eS.interval) === B.rV.DAY ? (null == eS ? void 0 : eS.interval_count) > 7 ? Z.NW.string(Z.t.Z1V2cn) : Z.NW.string(Z.t.MI1rHh) : Z.NW.string(Z.t["+S5lra"]), [eS]),
    eZ = !ec && (eL || null != eS && eD && null != $ || ew),
    eH = null == et ? void 0 : null === (s = et.find(e => e.subscriptionPlanId === B.Xh.PREMIUM_MONTH_TIER_2)) || void 0 === s ? void 0 : null === (o = s.discounts) || void 0 === o ? void 0 : null === (n = o.find(e => e.type === f.eW.SUBSCRIPTION_PLAN)) || void 0 === n ? void 0 : n.amount,
    eW = (e, t, n) => {
      if (eE) return (0, r.jsx)(u.vwX, {
        className: a()(W.selectGiftTitle, {
          [W.compactSelectGiftTitle]: en
        }),
        children: Z.NW.string(Z.t["3E5hXl"])
      });
      if (!eZ) return (0, r.jsx)("div", {
        className: W.selectPlanChooseTitle,
        children: Z.NW.string(Z.t.a19jpa)
      });
      if (t) {
        let t = (null == e ? void 0 : e.trial_id) === B.a7;
        return (0, r.jsxs)("div", {
          children: [(0, r.jsx)(u.Text, {
            variant: "text-sm/normal",
            className: W.trialPlanSelectHeader,
            children: t ? Z.NW.format(Z.t.nG95hI, {
              endDate: $
            }) : Z.NW.format(Z.t.s4E7kZ, {
              trialEnd: $,
              trialPeriod: eF
            })
          }), (0, r.jsx)("hr", {
            className: W.planSelectSeparator
          })]
        })
      }
      if (n && null != eH && null != ex && k === B.Xh.PREMIUM_MONTH_TIER_2) return (0, r.jsxs)("div", {
        children: [(0, r.jsx)(u.Text, {
          variant: "text-sm/normal",
          className: W.trialPlanSelectHeader,
          children: Z.NW.format(Z.t["nG7g/P"], {
            numMonths: null == eT ? void 0 : eT.discount.user_usage_limit,
            discountedPrice: (0, I.T4)(ex.amount - eH, ex.currency),
            regularPrice: (0, I.T4)(ex.amount, ex.currency)
          })
        }), (0, r.jsx)("hr", {
          className: W.planSelectSeparator
        })]
      })
    },
    eY = () => {
      if (eg === b.xr.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD && null != e_) return (0, r.jsx)(x.Z, {
        sectionTitle: Z.NW.string(Z.t.B3miEx),
        className: a()(W.customGiftMessageWrapper, {
          [W.compactCustomGiftMessageWrapper]: en
        }),
        innerClassName: W.customGiftMessage,
        onTextChange: e => e_(e),
        pendingText: ef,
        currentText: ef
      })
    },
    eK = e => {
      let t = e.endsAt.toDate();
      return (0, r.jsxs)("div", {
        className: W.activeFractionalPremiumBannerContainer,
        children: [(0, r.jsxs)("div", {
          className: W.nitroIconContainer,
          children: [(0, r.jsx)(u.SrA, {
            size: "md",
            color: "white",
            className: W.iconFractional
          }), (0, r.jsx)(u.SrA, {
            size: "md",
            color: "currentColor",
            className: W.iconFractionalDark
          })]
        }), (0, r.jsx)(u.Text, {
          variant: "text-sm/normal",
          children: Z.NW.format(Z.t.SAJ5Ag, {
            expirationDate: t
          })
        }), (0, r.jsx)("div", {
          className: W.activeFractionalPremiumBannerBackgroundImage
        })]
      })
    },
    {
      enabled: ez
    } = T.G.useExperiment({
      location: "PremiumPlanSelectStep"
    }, {
      autoTrackExposure: !1
    }),
    eq = ep === B.Wt.DM_CHANNEL && ez,
    eQ = eq ? W.bodyColumnLeft : W.bodyColumnMiddle,
    eX = () => eE && null != ed ? eq ? (0, r.jsx)(M.q, {
      className: H.adjustedGiftMainAnimation,
      optionsContainerClassName: H.adjustedGiftBoxOptionContainer
    }) : (0, r.jsx)(M.q, {}) : null,
    eJ = () => (0, r.jsx)("div", q(K({}, ej), {
      children: z.map(e => (0, r.jsx)(U.Z, {
        planId: e,
        premiumSubscription: ec ? null : null != g ? g : null,
        selectPlan: eC,
        selected: (null == eA ? void 0 : eA.id) === e,
        priceOptions: eR,
        shouldShowUpdatedPaymentModal: eZ,
        isEligibleForDiscount: eL,
        discountAmountOff: eH,
        isEligibleForTrial: eD
      }, e))
    })),
    e$ = () => eW(eI, eD, eL),
    e0 = () => eB ? (0, r.jsx)(d.Z, {
      message: Z.NW.formatToPlainString(Z.t["9hnZoK"], {
        kunaPriceWithCurrency: (0, I.T4)(7.5345 * eU.amount, F.pK.HRK)
      })
    }) : null;
  return (0, r.jsxs)("div", {
    className: a()(eE ? W.stepBodyCustomGift : W.stepBody, {
      [W.paddingForHalloweenBanner]: eb
    }),
    children: [eP.fractionalState !== B.a$.NONE && eK(eP), (0, r.jsxs)("div", {
      className: eE ? eQ : void 0,
      children: [(0, r.jsx)(w.Z, {
        fromBoostCancelModal: !1,
        className: W.legacyPricingNotice
      }), eq && e$(), eq ? eJ() : eX(), eq && e0()]
    }), (0, r.jsxs)("div", {
      className: eE ? W.bodyColumnRight : void 0,
      children: [(0, r.jsx)(G.s, {
        className: en ? W.compactSendGiftToUser : void 0,
        giftRecipient: eu
      }), eq && eX(), eY(), null != ey && !ec && (0, r.jsx)("div", {
        className: W.bodyText,
        children: Q(ey, v)
      }), !eq && e$(), !eq && eJ(), (0, r.jsx)("div", {
        children: ek && null != eA && null != eU ? (0, r.jsxs)("div", {
          children: [(0, r.jsx)("div", {
            className: W.selectPlanDivider
          }), (0, r.jsx)(D.Ji, {
            label: Z.NW.string(Z.t.txajQE),
            value: (0, r.jsx)(L.Z, {
              price: eU.amount,
              currency: eU.currency,
              intervalType: ec ? null : eA.interval,
              intervalCount: eA.intervalCount,
              isPrepaidPaymentSource: eV
            }),
            className: W.selectPlanTotalRow
          })]
        }) : null
      }), !eq && e0(), !ec && !eZ && ee && (0, r.jsx)(d.Z, {
        message: Z.NW.format(Z.t.Om31w8, {
          documentationLink: y.Z.getArticleURL(V.BhN.LOCALIZED_PRICING)
        })
      }), ec && !eq && (0, r.jsx)(p.Z, {
        onClose: er
      })]
    })]
  })
}

function J(e) {
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
  } = (0, m.JL)(), {
    isGift: _,
    claimableRewards: p,
    giftRecipient: g
  } = (0, h.wD)(), E = (0, b.pO)(g);
  return i = null != i ? i : d, n = null != n ? n : null == f ? void 0 : f.id, (0, r.jsxs)(r.Fragment, {
    children: [null != n && s.includes(n) ? (0, r.jsx)($, {
      paymentSources: i,
      onStepChange: t,
      selectedPlanId: n,
      isGift: _,
      claimableRewards: p,
      shouldRenderUpdatedPaymentModal: l,
      isTrial: c
    }) : (0, r.jsx)(u.zxk, {
      disabled: !0,
      children: Z.NW.string(Z.t.XqMe3N)
    }), a ? (0, r.jsx)(k.Z, {
      className: _ && E ? W.equalDistantBackButton : void 0,
      onClick: o
    }) : null]
  })
}

function $(e) {
  let {
    onStepChange: t,
    selectedPlanId: n,
    isGift: i,
    claimableRewards: o,
    paymentSources: a,
    shouldRenderUpdatedPaymentModal: s,
    isTrial: l
  } = e, d = (0, c.e7)([v.ZP], () => v.ZP.getPremiumTypeSubscription()), {
    step: f,
    selectedPlan: _
  } = (0, m.JL)(), {
    hasEntitlements: p
  } = (0, j.H)(n, i), h = null != d && null != d.paymentSourceId || Object.keys(a).length > 0 || p && !l;
  var E = s ? Z.NW.string(Z.t.PDTjLC) : Z.NW.string(Z.t.XqMe3N),
    b = g.h8.ADD_PAYMENT_STEPS;
  return h && (b = g.h8.REVIEW), (0, N.id)(_, i, o) && f !== g.h8.SELECT_FREE_SKU && (b = g.h8.SELECT_FREE_SKU), (0, r.jsx)(u.zxk, {
    onClick: () => t(b),
    children: E
  })
}