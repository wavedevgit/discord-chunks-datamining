/** Chunk was on web.js **/
/** chunk id: 314404, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  O: () => ee,
  y: () => et
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  l = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk490504 = require("./490504.jsx"),
  Chunk911969 = require("./911969.js"),
  Chunk975298 = require("./975298.js"),
  Chunk940824 = require("./940824.jsx"),
  Chunk987209 = require("./987209.jsx"),
  Chunk563132 = require("./563132.jsx"),
  Chunk409813 = require("./409813.js"),
  Chunk509545 = require("./509545.js"),
  Chunk78839 = require("./78839.js"),
  Chunk669079 = require("./669079.js"),
  Chunk63063 = require("./63063.js"),
  Chunk74538 = require("./74538.js"),
  Chunk937615 = require("./937615.js"),
  Chunk296848 = require("./296848.js"),
  Chunk711459 = require("./711459.js"),
  Chunk367074 = require("./367074.js"),
  Chunk109213 = require("./109213.js"),
  Chunk717401 = require("./717401.js"),
  Chunk847903 = require("./847903.js"),
  Chunk104494 = require("./104494.js"),
  Chunk639119 = require("./639119.js"),
  Chunk811334 = require("./811334.jsx"),
  Chunk553797 = require("./553797.jsx"),
  Chunk346071 = require("./346071.jsx"),
  Chunk927699 = require("./927699.jsx"),
  Chunk987716 = require("./987716.jsx"),
  Chunk311821 = require("./311821.jsx"),
  Chunk459965 = require("./459965.js"),
  Chunk811616 = require("./811616.jsx"),
  Chunk251660 = require("./251660.jsx"),
  Chunk474936 = require("./474936.js"),
  Chunk981631 = require("./981631.js"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk611344 = require("./611344.js"),
  Chunk624379 = require("./624379.js");

function K(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function z(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      K(e, t, n[t])
    })
  }
  return e
}

function q(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function X(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : q(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function Q(e, t) {
  if (null == e) return {};
  var n, r, i = J(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function J(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function $(e, t) {
  let n = H.intl.string(H.t.BYa62t),
    r = H.intl.string(H.t.CDa6Dg),
    i = (() => {
      switch (e.interval) {
        case Z.rV.YEAR:
          return n;
        case Z.rV.MONTH:
        default:
          return r
      }
    })(),
    o = e.skuId;
  switch (t) {
    case Z.Si.TIER_0:
      switch (o) {
        case Z.Si.TIER_1:
          return H.intl.string(H.t.q6mxDQ);
        case Z.Si.TIER_2:
          return H.intl.string(H.t.seZVS0);
        default:
          return i
      }
    case Z.Si.TIER_1:
      switch (o) {
        case Z.Si.TIER_0:
          return H.intl.string(H.t["7+u2zs"]);
        case Z.Si.TIER_2:
          return H.intl.string(H.t.NG2qcX);
        default:
          return i
      }
    case Z.Si.TIER_2:
      switch (o) {
        case Z.Si.TIER_0:
        case Z.Si.TIER_1:
          return H.intl.string(H.t["eB0/w8"]);
        case Z.Si.TIER_2:
          return e.interval === Z.rV.MONTH ? H.intl.formatToPlainString(H.t["RqUv8/"], {
            numFreeGuildSubscriptions: Z.cb
          }) : i;
        default:
          return i
      }
    default:
      return i
  }
}

function ee(e) {
  var t, n, o, s;
  let {
    premiumSubscription: g,
    skuId: b,
    selectedPlanId: k,
    setSelectedPlanId: U,
    planGroup: K,
    priceOptions: q,
    planOptions: J,
    eligibleForMultiMonthPlans: ee,
    referralTrialOfferId: et,
    subscriptionPeriodEnd: en,
    showTotal: er = true,
    discountInvoiceItems: ei,
    useCompactGiftComponents: eo,
    handleClose: ea
  } = e, {
    activeSubscription: es,
    setSelectedPlanId: el,
    selectedSkuId: ec,
    selectedPlan: eu,
    priceOptions: ed,
    enablePremiumBrandRefresh: ef
  } = (0, m.JL)(), {
    isGift: e_,
    giftRecipient: ep,
    selectedGiftStyle: eh,
    customGiftMessage: em,
    setCustomGiftMessage: eg,
    giftingOrigin: eE,
    claimableRewards: eb,
    setSelectedGiftingPromotionReward: ey
  } = (0, h.wD)(), eO = (0, y.MY)(ep), ev = e_ && (0, y.pO)(ep), eI = (0, C.cF)(eu, ev, eb);
  b = null != b ? b : ec, g = null != g ? g : es, l()(true !== g, "should not be undefined");
  let [eT, eS] = (0, c.Wu)([E.Z], () => [null != g ? E.Z.get(g.planId) : null, null != k ? E.Z.get(k) : null]), eA = (0, w.N)(et), eN = null == eA ? true : eA.subscription_trial, eC = (0, P.Ng)(), eR = (0, A.Vi)(), eP = null == eC || null == (t = eC.discount) ? true : t.plan_ids, ew = null != eS ? eS : eu, eD = i.useCallback(e => {
    null != U ? U(e) : el(e)
  }, [U, el]), eL = null != q ? q : ed;
  l()(null != eL, "Price option has to be set");
  let ex = (0, _.Z)({
      forceFetch: false,
      excludeReverseTrial: false,
      excludeReverseTrialFromCountdown: true
    }),
    eM = null != eA && Z.nG[eA.trial_id].skus.includes(b),
    ej = null != eC && J.some(e => null == eP ? true : eP.includes(e)) && null != eC.discount,
    ek = (0, v.aS)(Z.Xh.PREMIUM_MONTH_TIER_2, false, e_, eL);
  i.useEffect(() => {
    ee && S.ZP.trackExposure({
      location: "5f89bb_1"
    })
  }, [ee]);
  let eU = (null == ew ? true : ew.id) != null && J.includes(ew.id);
  i.useEffect(() => {
    if (!eU) {
      if (null == eT || e_) eD(J[0]);
      else if (null != eT) {
        let e = J.find(e => e !== eT.id);
        null != e && eD(e)
      }
    }
  }, [eU, e_, J, eT, eD]), i.useEffect(() => {
    eI && null != eb && eb.length > 0 && ey(eb[0])
  }, [eb, ey, eI]);
  let eG = !ev && (e_ || !eM && !ej) && eU && er,
    eB = (0, u.arW)(),
    {
      ref: eZ
    } = eB,
    eF = Q(eB, ["ref"]),
    eV = (null == ew ? true : ew.id) != null ? (0, v.aS)(ew.id, false, e_, eL) : true,
    {
      ipCountryCode: eH
    } = (0, R.Z)(),
    eY = "HR" === eH && null != eV && eV.currency === V.pK.EUR,
    eW = (0, v.Ap)(eL.paymentSourceId),
    eK = i.useMemo(() => (null == eN ? true : eN.interval) === Z.rV.DAY ? (null == eN ? true : eN.interval_count) > 7 ? H.intl.string(H.t.Z1V2cn) : H.intl.string(H.t.MI1rHh) : H.intl.string(H.t["+S5lra"]), [eN]),
    ez = !e_ && (ej || null != eN && eM && null != en),
    eq = null == ei || null == (s = ei.find(e => e.subscriptionPlanId === Z.Xh.PREMIUM_MONTH_TIER_2)) || null == (o = s.discounts) || null == (n = o.find(e => e.type === f.eW.SUBSCRIPTION_PLAN)) ? true : n.amount,
    eX = (e, t, n) => {
      if (ev) return (0, r.jsx)(u.vwX, {
        className: a()(W.selectGiftTitle, {
          [W.compactSelectGiftTitle]: eo
        }),
        children: H.intl.string(H.t["3E5hXl"])
      });
      if (!ez) return (0, r.jsx)("div", {
        className: W.selectPlanChooseTitle,
        children: H.intl.string(H.t.a19jpa)
      });
      if (t) {
        let t = (null == e ? true : e.trial_id) === Z.a7;
        return (0, r.jsxs)("div", {
          children: [(0, r.jsx)(u.Text, {
            variant: "text-sm/normal",
            className: W.trialPlanSelectHeader,
            children: t ? H.intl.format(H.t.nG95hI, {
              endDate: en
            }) : H.intl.format(H.t.s4E7kZ, {
              trialEnd: en,
              trialPeriod: eK
            })
          }), (0, r.jsx)("hr", {
            className: W.planSelectSeparator
          })]
        })
      }
      if (n && null != eq && null != ek && k === Z.Xh.PREMIUM_MONTH_TIER_2) return (0, r.jsxs)("div", {
        children: [(0, r.jsx)(u.Text, {
          variant: "text-sm/normal",
          className: W.trialPlanSelectHeader,
          children: H.intl.format(H.t["nG7g/P"], {
            numMonths: null == eC ? true : eC.discount.user_usage_limit,
            discountedPrice: (0, I.T4)(ek.amount - eq, ek.currency),
            regularPrice: (0, I.T4)(ek.amount, ek.currency)
          })
        }), (0, r.jsx)("hr", {
          className: W.planSelectSeparator
        })]
      })
    },
    eQ = () => {
      if (eO === y.xr.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD && null != eg) return (0, r.jsx)(M.Z, {
        sectionTitle: H.intl.string(H.t.B3miEx),
        className: W.customGiftMessageWrapper,
        innerClassName: W.customGiftMessage,
        onTextChange: e => eg(e),
        pendingText: em,
        currentText: em
      })
    },
    {
      enabled: eJ
    } = N.G.useExperiment({
      location: "PremiumPlanSelectStep"
    }, {
      autoTrackExposure: false
    }),
    e$ = eE === Z.Wt.DM_CHANNEL && eJ,
    e0 = e$ ? W.bodyColumnLeft : W.bodyColumnMiddle,
    e1 = () => ev && null != eh ? e$ ? (0, r.jsx)(j.q, {
      className: Y.adjustedGiftMainAnimation,
      optionsContainerClassName: Y.adjustedGiftBoxOptionContainer
    }) : (0, r.jsx)(j.q, {}) : null,
    e2 = () => (0, r.jsx)("div", X(z({
      ref: eZ
    }, eF), {
      children: J.map(e => (0, r.jsx)(G.Z, {
        planId: e,
        premiumSubscription: e_ ? null : null != g ? g : null,
        selectPlan: eD,
        selected: (null == ew ? true : ew.id) === e,
        priceOptions: eL,
        shouldShowUpdatedPaymentModal: ez,
        isEligibleForDiscount: ej,
        discountAmountOff: eq,
        isEligibleForTrial: eM
      }, e))
    })),
    e3 = () => eX(eA, eM, ej),
    e5 = () => eY ? (0, r.jsx)(d.Z, {
      message: H.intl.formatToPlainString(H.t["9hnZoK"], {
        kunaPriceWithCurrency: (0, I.T4)(7.5345 * eV.amount, V.pK.HRK)
      })
    }) : null,
    e4 = null != g && null != k && (0, T.R4)(g, k, K),
    e6 = ex.isFractionalPremiumActive && (null == g || e4) && !e_ && null != k && Z.dJ.has(k);
  return (0, r.jsxs)("div", {
    className: ev ? W.stepBodyCustomGift : W.stepBody,
    children: [e6 && (0, r.jsx)(x.n, {
      fractionalPremiumInfo: ex,
      enablePremiumBrandRefresh: ef
    }), (0, r.jsxs)("div", {
      className: ev ? e0 : true,
      children: [e$ && e3(), e$ ? e2() : e1(), e$ && e5()]
    }), (0, r.jsxs)("div", {
      className: ev ? W.bodyColumnRight : true,
      children: [(0, r.jsx)(B.s, {
        className: eo ? W.compactSendGiftToUser : true,
        giftRecipient: ep
      }), e$ && e1(), eQ(), null != eT && !e_ && !e6 && !eR && (0, r.jsx)("div", {
        className: W.bodyText,
        children: $(eT, b)
      }), !e$ && e3(), !e$ && e2(), (0, r.jsx)("div", {
        children: eG && null != ew && null != eV ? (0, r.jsxs)("div", {
          children: [(0, r.jsx)("div", {
            className: W.selectPlanDivider
          }), (0, r.jsx)(D.az, {
            label: H.intl.string(H.t.txajQE),
            value: (0, r.jsx)(L.Z, {
              price: eV.amount,
              currency: eV.currency,
              intervalType: e_ ? null : ew.interval,
              intervalCount: ew.intervalCount,
              isPrepaidPaymentSource: eW
            }),
            className: W.selectPlanTotalRow
          })]
        }) : null
      }), !e$ && e5(), !e_ && !ez && er && (0, r.jsx)(d.Z, {
        message: H.intl.format(H.t.Om31w8, {
          documentationLink: O.Z.getArticleURL(F.BhN.LOCALIZED_PRICING)
        })
      }), e_ && !e$ && (0, r.jsx)(p.Z, {
        onClose: ea
      })]
    })]
  })
}

function et(e) {
  let {
    onStepChange: t,
    selectedPlanId: n,
    paymentSources: i,
    onBackClick: o,
    showBackButton: a,
    planOptions: s,
    shouldRenderUpdatedPaymentModal: l = false,
    isTrial: c
  } = e, {
    paymentSources: d,
    selectedPlan: f
  } = (0, m.JL)(), {
    isGift: _,
    claimableRewards: p,
    giftRecipient: g
  } = (0, h.wD)(), E = (0, y.pO)(g);
  return i = null != i ? i : d, n = null != n ? n : null == f ? true : f.id, (0, r.jsxs)(r.Fragment, {
    children: [null != n && s.includes(n) ? (0, r.jsx)(en, {
      paymentSources: i,
      onStepChange: t,
      selectedPlanId: n,
      isGift: _,
      claimableRewards: p,
      shouldRenderUpdatedPaymentModal: l,
      isTrial: c
    }) : (0, r.jsx)(u.zxk, {
      variant: "primary",
      text: H.intl.string(H.t.XqMe3N),
      disabled: true
    }), a ? (0, r.jsx)(k.Z, {
      className: _ && E ? W.equalDistantBackButton : true,
      onClick: o
    }) : null]
  })
}

function en(e) {
  let {
    onStepChange: t,
    selectedPlanId: n,
    isGift: i,
    claimableRewards: o,
    paymentSources: a,
    shouldRenderUpdatedPaymentModal: s,
    isTrial: l
  } = e, d = (0, c.e7)([b.Z], () => b.Z.getPremiumTypeSubscription()), {
    step: f,
    selectedPlan: _
  } = (0, m.JL)(), {
    hasEntitlements: p
  } = (0, U.H)(n, i), h = null != d && null != d.paymentSourceId || Object.keys(a).length > 0 || p && !l;
  var E = s ? H.intl.string(H.t.PDTjLC) : H.intl.string(H.t.XqMe3N),
    y = g.h8.ADD_PAYMENT_STEPS;
  return h && (y = g.h8.REVIEW), (0, C.id)(_, i, o) && f !== g.h8.SELECT_FREE_SKU && (y = g.h8.SELECT_FREE_SKU), (0, r.jsx)(u.zxk, {
    variant: "primary",
    text: E,
    onClick: () => t(y)
  })
}