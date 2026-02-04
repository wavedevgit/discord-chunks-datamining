/** Chunk was on web.js **/
/** chunk id: 446929, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $p: () => en,
  O8: () => Z,
  RO: () => Q,
  fJ: () => et
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk284009 = require("./284009.js"),
  o = require.n(Chunk284009),
  Chunk311907 = require("./311907.js"),
  Chunk421380 = require("./421380.js"),
  Chunk397927 = require("./397927.js"),
  Chunk726656 = require("./726656.jsx"),
  Chunk155718 = require("./155718.js"),
  Chunk93159 = require("./93159.js"),
  Chunk448811 = require("./448811.jsx"),
  Chunk937008 = require("./937008.jsx"),
  Chunk156312 = require("./156312.jsx"),
  Chunk222707 = require("./222707.js"),
  Chunk773669 = require("./773669.js"),
  Chunk594832 = require("./594832.js"),
  Chunk97352 = require("./97352.js"),
  Chunk45938 = require("./45938.js"),
  Chunk975571 = require("./975571.js"),
  Chunk927578 = require("./927578.js"),
  Chunk580630 = require("./580630.js"),
  Chunk666468 = require("./666468.js"),
  Chunk40185 = require("./40185.js"),
  Chunk906023 = require("./906023.js"),
  Chunk810498 = require("./810498.js"),
  Chunk477421 = require("./477421.js"),
  Chunk422936 = require("./422936.js"),
  Chunk735164 = require("./735164.jsx"),
  Chunk363476 = require("./363476.jsx"),
  Chunk934581 = require("./934581.jsx"),
  Chunk871181 = require("./871181.jsx"),
  Chunk318007 = require("./318007.jsx"),
  Chunk958720 = require("./958720.jsx"),
  Chunk285719 = require("./285719.jsx"),
  Chunk788868 = require("./788868.js"),
  Chunk652215 = require("./652215.js"),
  Chunk818348 = require("./818348.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk329221 = require("./329221.js");

function B(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function H(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      B(e, t, n[t])
    })
  }
  return e
}

function Y(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function W(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Y(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function K(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = z(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function z(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}

function q(e, t) {
  let n = F.intl.string(F.t.BYa62u),
    r = F.intl.string(F.t.CDa6Dq),
    i = (() => {
      switch (e.interval) {
        case k.WT.YEAR:
          return n;
        case k.WT.MONTH:
        default:
          return r
      }
    })(),
    a = e.skuId;
  switch (t) {
    case k.pe.TIER_0:
      switch (a) {
        case k.pe.TIER_1:
          return F.intl.string(F.t.q6mxDS);
        case k.pe.TIER_2:
          return F.intl.string(F.t.seZVS0);
        default:
          return i
      }
    case k.pe.TIER_1:
      switch (a) {
        case k.pe.TIER_0:
          return F.intl.string(F.t["7+u2zg"]);
        case k.pe.TIER_2:
          return F.intl.string(F.t.NG2qcc);
        default:
          return i
      }
    case k.pe.TIER_2:
      switch (a) {
        case k.pe.TIER_0:
        case k.pe.TIER_1:
          return F.intl.string(F.t["eB0/w9"]);
        case k.pe.TIER_2:
          return e.interval === k.WT.MONTH ? F.intl.formatToPlainString(F.t.RqUv86, {
            numFreeGuildSubscriptions: k.M4
          }) : i;
        default:
          return i
      }
    default:
      return i
  }
}
let Z = () => {
    let {
      userTrialOffer: e
    } = (0, h.P5)(), t = null == e ? true : e.subscription_trial;
    return i.useMemo(() => (null == t ? true : t.interval) === k.WT.DAY ? (null == t ? true : t.interval_count) > 7 ? F.intl.string(F.t.Z1V2cs) : F.intl.string(F.t.MI1rHs) : F.intl.string(F.t["+S5lrV"]), [t])
  },
  Q = e => {
    var t, n, r, a;
    let {
      selectedPlanId: c,
      priceOptions: u,
      planOptions: f,
      eligibleForMultiMonthPlans: p,
      subscriptionPeriodEnd: m,
      discountInvoiceItems: g
    } = e, {
      activeSubscription: O,
      setSelectedPlanId: A,
      selectedSkuId: T,
      selectedPlan: w,
      priceOptions: R,
      userTrialOffer: P,
      isEligibleForTrial: D,
      discountOffer: L
    } = (0, h.P5)(), {
      isGift: x,
      giftRecipient: M,
      selectedGiftStyle: j,
      customGiftMessage: U,
      setCustomGiftMessage: F,
      claimableRewards: V,
      setSelectedGiftingPromotionReward: B
    } = (0, _.Pv)(), H = (0, C.kz)(w, x && (0, b.Ik)(M), V), Y = (0, E.tA)({
      location: "PremiumPlanSelectStep",
      giftRecipient: M,
      isGift: x
    }), W = O;
    o()(true !== W, "should not be undefined");
    let [z, q] = (0, s.yK)([y.A], () => [null != W ? y.A.get(W.planId) : null, null != c ? y.A.get(c) : null]), Z = null == P ? true : P.subscription_trial, Q = (0, S.cg)(), X = null != q ? q : w, J = i.useCallback(e => {
      A(e)
    }, [A]), $ = null != u ? u : R;
    o()(null != $, "Price option has to be set");
    let ee = null == L || null == (t = L.discount) ? true : t.plan_ids,
      et = null != L && f.some(e => null == ee ? true : ee.includes(e)) && null != L.discount,
      en = (0, v.y8)(k.gD.PREMIUM_MONTH_TIER_2, false, x, $);
    i.useEffect(() => {
      p && I.Ay.trackExposure({
        location: "5f89bb_1"
      })
    }, [p]);
    let er = (null == X ? true : X.id) != null && f.includes(X.id);
    i.useEffect(() => {
      if (!er) {
        if (null == z || x) J(f[0]);
        else if (null != z) {
          let e = f.find(e => e !== z.id);
          null != e && J(e)
        }
      }
    }, [er, x, f, z, J]), i.useEffect(() => {
      H && null != V && V.length > 0 && B(V[0])
    }, [V, B, H]);
    let ei = (0, l._u)(),
      {
        ref: ea
      } = ei,
      eo = K(ei, ["ref"]),
      es = (null == X ? true : X.id) != null ? (0, v.y8)(X.id, false, x, $) : true,
      {
        ipCountryCode: el
      } = (0, N.A)(),
      ec = "HR" === el && null != es && es.currency === G.Yr.EUR,
      eu = (0, v.J$)($.paymentSourceId),
      ed = !x && (et || null != Z && D && null != m);
    return {
      skuId: T,
      setPlanId: J,
      selectedPlan: X,
      selectedPlanPrice: es,
      premiumSubscriptionPlan: z,
      premiumSubscription: W,
      thePriceOptions: $,
      hasSeenCollectiblesInSkuSelect: Y,
      shouldShowUpdatedPaymentModal: ed,
      shouldShowHRKEuroWarning: ec,
      canContinue: er,
      isPrepaid: eu,
      radioGroupRef: ea,
      radioGroupProps: eo,
      isGift: x,
      giftRecipient: M,
      customGiftMessage: U,
      setCustomGiftMessage: F,
      selectedGiftStyle: j,
      isEligibleForBOGOPromotion: Q,
      isEligibleForTrial: D,
      userTrialOffer: P,
      discountOffer: L,
      isPlansEligibleForDiscount: et,
      discountedPlanRegularPrice: en,
      discountAmountOff: null == g || null == (a = g.find(e => e.subscriptionPlanId === k.gD.PREMIUM_MONTH_TIER_2)) || null == (r = a.discounts) || null == (n = r.find(e => e.type === d.iS.SUBSCRIPTION_PLAN)) ? true : n.amount
    }
  },
  X = e => {
    let {
      isPrepaid: t,
      selectedPlan: n,
      selectedPlanPrice: i,
      intervalType: a
    } = e;
    return (0, r.jsxs)("div", {
      children: [(0, r.jsx)("div", {
        className: V.T
      }), (0, r.jsx)(R.Sd, {
        label: F.intl.string(F.t.txajQG),
        value: (0, r.jsx)(P.A, {
          price: i.amount,
          currency: i.currency,
          intervalType: a,
          intervalCount: n.intervalCount,
          isPrepaidPaymentSource: t
        }),
        className: V.M3
      })]
    })
  },
  J = e => {
    let {
      giftRecipient: t,
      customGiftMessage: n,
      setCustomGiftMessage: i,
      selectedGiftStyle: a,
      hasSeenCollectiblesInSkuSelect: o,
      isPrepaid: s,
      canContinue: l,
      selectedPlan: u,
      selectedPlanPrice: d,
      useCompactGiftComponents: f,
      handleClose: _,
      showTotal: h,
      switchPlanSelectComponent: m,
      warningComponent: g
    } = e, E = () => {
      if ((0, b.lo)(t) === b.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD && null != i) return (0, r.jsx)(L.A, {
        className: V.iX,
        innerClassName: V.pt,
        onTextChange: e => i(e),
        pendingText: n,
        currentText: n
      })
    }, y = e => (0, r.jsx)(c.D0$, {
      label: F.intl.string(F.t["3E5hXj"]),
      children: e
    });
    if ((0, b.Ik)(t)) return (0, r.jsxs)("div", {
      className: V.mh,
      children: [(0, r.jsx)("div", {
        className: V.MU,
        children: null != a && (0, r.jsx)(x.t, {})
      }), (0, r.jsxs)("div", {
        className: V.Tc,
        children: [(0, r.jsx)(j.Z, {
          className: f ? V.KW : true,
          giftRecipient: t
        }), E(), y(m), g, !o && (0, r.jsx)(p.A, {
          onClose: _
        })]
      })]
    });
    let O = l && h;
    return (0, r.jsxs)("div", {
      className: V.Du,
      children: [(0, r.jsx)(j.Z, {
        className: f ? V.KW : true,
        giftRecipient: t
      }), y(m), O && null != u && null != d && (0, r.jsx)(X, {
        selectedPlan: u,
        selectedPlanPrice: d,
        intervalType: null,
        isPrepaid: s
      }), g, !o && (0, r.jsx)(p.A, {
        onClose: _
      })]
    })
  },
  $ = e => {
    let {
      isPrepaid: t,
      premiumSubscription: n,
      setPlanId: r,
      thePriceOptions: i,
      shouldShowUpdatedPaymentModal: a,
      isEligibleForTrial: o,
      isPlansEligibleForDiscount: l,
      discountAmountOff: c
    } = e, u = (0, s.bG)([g.default], () => g.default.locale), {
      isGift: d,
      giftRecipient: f
    } = (0, _.Pv)(), p = d && (0, b.Ik)(f), {
      enabled: h
    } = T.A.getCurrentConfig({
      location: "PremiumSwitchPlanSelectOption"
    }, {
      autoTrackExposure: false
    });
    return {
      isPrepaid: t,
      selectPlan: r,
      premiumSubscription: d ? null : null != n ? n : null,
      priceOptions: i,
      shouldShowUpdatedPaymentModal: a,
      isEligibleForDiscount: l,
      discountAmountOff: c,
      isEligibleForTrial: o,
      userLocale: u,
      isCustomGift: p,
      shouldUseCalculatedDiscount: h,
      discountOffer: (0, w.O)(),
      isEligibleForBOGOPromotion: (0, S.cg)()
    }
  },
  ee = (e, t) => {
    let n = null != e && e.planId === t,
      r = n || t === k.gD.PREMIUM_MONTH_TIER_2 && null != e && [k.gD.PREMIUM_YEAR_TIER_0, k.gD.PREMIUM_YEAR_TIER_1].includes(e.planId);
    return {
      isCurrentPlan: n,
      disabled: r
    }
  },
  et = e => {
    let {
      shouldUseUnifiedCheckoutUI: t
    } = e, n = K(e, ["shouldUseUnifiedCheckoutUI"]), {
      planOptions: a,
      radioGroupRef: o,
      selectedPlan: s,
      radioGroupProps: l
    } = n, c = $(n), u = i.useMemo(() => a.map(e => {
      let {
        isCurrentPlan: n,
        disabled: i
      } = ee(c.premiumSubscription, e);
      return (0, r.jsx)(M.A, H({
        planId: e,
        selected: (null == s ? true : s.id) === e,
        isCurrentPlan: n,
        disabled: i,
        shouldUseUnifiedCheckoutUI: t
      }, c), e)
    }), [a, t, c, s]), d = a.length > 0 ? k.hd[a[0]].premiumType : true;
    if (t) {
      var p;
      return null == d ? null : (0, r.jsx)(f.q7, {
        headingComponent: (0, r.jsx)(f.ec, {
          size: "sm",
          color: "text-strong",
          premiumType: d
        }),
        selection: null != (p = null == s ? true : s.id) ? p : "",
        onChange: c.selectPlan,
        planOptionsComponents: u
      })
    }
    return (0, r.jsx)("div", W(H({
      ref: o
    }, l), {
      children: u
    }))
  };

function en(e) {
  let {
    selectedPlanId: t,
    planGroup: n,
    priceOptions: i,
    planOptions: a,
    eligibleForMultiMonthPlans: o,
    subscriptionPeriodEnd: s,
    showTotal: l = true,
    discountInvoiceItems: d,
    useCompactGiftComponents: f,
    handleClose: p
  } = e, {
    skuId: _,
    setPlanId: h,
    selectedPlan: g,
    premiumSubscription: E,
    premiumSubscriptionPlan: y,
    isGift: b,
    thePriceOptions: v,
    isEligibleForTrial: I,
    giftRecipient: S,
    customGiftMessage: T,
    setCustomGiftMessage: C,
    selectedGiftStyle: N,
    discountOffer: w,
    isPlansEligibleForDiscount: R,
    discountedPlanRegularPrice: P,
    hasSeenCollectiblesInSkuSelect: L,
    isEligibleForBOGOPromotion: x,
    userTrialOffer: M,
    shouldShowUpdatedPaymentModal: j,
    discountAmountOff: B,
    isPrepaid: H,
    radioGroupRef: Y,
    radioGroupProps: W,
    selectedPlanPrice: K,
    shouldShowHRKEuroWarning: z,
    canContinue: $
  } = Q({
    selectedPlanId: t,
    priceOptions: i,
    planOptions: a,
    eligibleForMultiMonthPlans: o,
    subscriptionPeriodEnd: s,
    discountInvoiceItems: d
  }), ee = Z(), en = (e, n, i) => {
    if (!j) return (0, r.jsx)("div", {
      className: V.VZ,
      children: F.intl.string(F.t.a19jpU)
    });
    if (n) {
      let t = (null == e ? true : e.trial_id) === k.Dw;
      return (0, r.jsxs)("div", {
        children: [(0, r.jsx)(c.Text, {
          variant: "text-sm/normal",
          className: V.Tz,
          children: t ? F.intl.format(F.t.nG95hA, {
            endDate: s
          }) : F.intl.format(F.t.s4E7kb, {
            trialEnd: s,
            trialPeriod: ee
          })
        }), (0, r.jsx)("hr", {
          className: V.RA
        })]
      })
    }
    if (i && null != B && null != P && t === k.gD.PREMIUM_MONTH_TIER_2) {
      var a;
      return (0, r.jsxs)("div", {
        children: [(0, r.jsx)(c.Text, {
          variant: "text-sm/normal",
          className: V.Tz,
          children: F.intl.format(F.t["nG7g/E"], {
            numMonths: null != (a = null == w ? true : w.discount.user_usage_limit) ? a : "",
            discountedPrice: (0, A.$g)(P.amount - B, P.currency),
            regularPrice: (0, A.$g)(P.amount, P.currency)
          })
        }), (0, r.jsx)("hr", {
          className: V.RA
        })]
      })
    }
  }, er = () => (0, r.jsx)(et, {
    planOptions: a,
    radioGroupRef: Y,
    radioGroupProps: W,
    isGift: b,
    isPrepaid: H,
    premiumSubscription: E,
    setPlanId: h,
    selectedPlan: g,
    thePriceOptions: v,
    shouldShowUpdatedPaymentModal: j,
    isEligibleForTrial: I,
    isPlansEligibleForDiscount: R,
    discountAmountOff: B
  }), ei = () => z && null != K ? (0, r.jsx)(u.A, {
    message: F.intl.formatToPlainString(F.t["9hnZoK"], {
      kunaPriceWithCurrency: (0, A.$g)(7.5345 * K.amount, G.Yr.HRK)
    })
  }) : null, {
    showFractionalPremiumBanner: ea,
    fractionalPremiumInfo: eo
  } = (0, m._V)({
    premiumSubscription: E,
    selectedPlanId: t,
    planGroup: n,
    isGift: b
  });
  if (b) return (0, r.jsx)(J, {
    giftRecipient: S,
    customGiftMessage: T,
    setCustomGiftMessage: C,
    selectedGiftStyle: N,
    hasSeenCollectiblesInSkuSelect: L,
    isPrepaid: H,
    canContinue: $,
    selectedPlan: g,
    selectedPlanPrice: K,
    useCompactGiftComponents: f,
    handleClose: p,
    showTotal: l,
    switchPlanSelectComponent: er(),
    warningComponent: ei()
  });
  let es = !I && !R && $ && l,
    el = !(I && ea);
  return (0, r.jsxs)("div", {
    className: V.Du,
    children: [ea && (0, r.jsx)(D.vi, {
      fractionalPremiumInfo: eo,
      enablePremiumBrandRefresh: true,
      variant: I ? D.uA.TRIAL : true,
      trialPeriod: I ? ee : true,
      trialEnd: I ? s : true
    }), null != y && !ea && !x && (0, r.jsx)("div", {
      className: V.G3,
      children: q(y, _)
    }), el && en(M, I, R), er(), es && null != g && null != K && (0, r.jsx)(X, {
      selectedPlan: g,
      selectedPlanPrice: K,
      intervalType: g.interval,
      isPrepaid: H
    }), ei(), !j && l && (0, r.jsx)(u.A, {
      message: F.intl.format(F.t.Om31w8, {
        documentationLink: O.A.getArticleURL(U.MVz.LOCALIZED_PRICING)
      })
    })]
  })
}