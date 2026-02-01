/** Chunk was on web.js **/
/** chunk id: 446929, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $p: () => eo,
  O8: () => $,
  RO: () => ee,
  Z3: () => es,
  fJ: () => ea
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
  Chunk166532 = require("./166532.js"),
  Chunk222707 = require("./222707.js"),
  Chunk773669 = require("./773669.js"),
  Chunk594832 = require("./594832.js"),
  Chunk97352 = require("./97352.js"),
  Chunk166403 = require("./166403.js"),
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
  Chunk683433 = require("./683433.jsx"),
  Chunk344159 = require("./344159.js"),
  Chunk958720 = require("./958720.jsx"),
  Chunk285719 = require("./285719.jsx"),
  Chunk788868 = require("./788868.js"),
  Chunk652215 = require("./652215.js"),
  Chunk818348 = require("./818348.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk329221 = require("./329221.js");

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

function Z(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : q(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function Q(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = X(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function X(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}

function J(e, t) {
  let n = Y.intl.string(Y.t.BYa62u),
    r = Y.intl.string(Y.t.CDa6Dq),
    i = (() => {
      switch (e.interval) {
        case F.WT.YEAR:
          return n;
        case F.WT.MONTH:
        default:
          return r
      }
    })(),
    a = e.skuId;
  switch (t) {
    case F.pe.TIER_0:
      switch (a) {
        case F.pe.TIER_1:
          return Y.intl.string(Y.t.q6mxDS);
        case F.pe.TIER_2:
          return Y.intl.string(Y.t.seZVS0);
        default:
          return i
      }
    case F.pe.TIER_1:
      switch (a) {
        case F.pe.TIER_0:
          return Y.intl.string(Y.t["7+u2zg"]);
        case F.pe.TIER_2:
          return Y.intl.string(Y.t.NG2qcc);
        default:
          return i
      }
    case F.pe.TIER_2:
      switch (a) {
        case F.pe.TIER_0:
        case F.pe.TIER_1:
          return Y.intl.string(Y.t["eB0/w9"]);
        case F.pe.TIER_2:
          return e.interval === F.WT.MONTH ? Y.intl.formatToPlainString(Y.t.RqUv86, {
            numFreeGuildSubscriptions: F.M4
          }) : i;
        default:
          return i
      }
    default:
      return i
  }
}
let $ = () => {
    let {
      userTrialOffer: e
    } = (0, h.P5)(), t = null == e ? true : e.subscription_trial;
    return i.useMemo(() => (null == t ? true : t.interval) === F.WT.DAY ? (null == t ? true : t.interval_count) > 7 ? Y.intl.string(Y.t.Z1V2cs) : Y.intl.string(Y.t.MI1rHs) : Y.intl.string(Y.t["+S5lrV"]), [t])
  },
  ee = e => {
    var t, n, r, a;
    let {
      selectedPlanId: c,
      priceOptions: u,
      planOptions: f,
      eligibleForMultiMonthPlans: p,
      subscriptionPeriodEnd: m,
      discountInvoiceItems: g
    } = e, {
      activeSubscription: E,
      setSelectedPlanId: O,
      selectedSkuId: A,
      selectedPlan: S,
      priceOptions: N,
      userTrialOffer: P,
      isEligibleForTrial: D,
      discountOffer: L
    } = (0, h.P5)(), {
      isGift: x,
      giftRecipient: M,
      selectedGiftStyle: j,
      customGiftMessage: k,
      setCustomGiftMessage: U,
      claimableRewards: G,
      setSelectedGiftingPromotionReward: V
    } = (0, _.Pv)(), B = (0, w.kz)(S, x && (0, v.Ik)(M), G), Y = (0, y.tA)({
      location: "PremiumPlanSelectStep",
      giftRecipient: M,
      isGift: x
    }), W = E;
    o()(true !== W, "should not be undefined");
    let [K, z] = (0, s.yK)([b.A], () => [null != W ? b.A.get(W.planId) : null, null != c ? b.A.get(c) : null]), q = null == P ? true : P.subscription_trial, Z = (0, C.cg)(), X = null != z ? z : S, J = i.useCallback(e => {
      O(e)
    }, [O]), $ = null != u ? u : N;
    o()(null != $, "Price option has to be set");
    let ee = null == L || null == (t = L.discount) ? true : t.plan_ids,
      et = null != L && f.some(e => null == ee ? true : ee.includes(e)) && null != L.discount,
      en = (0, I.y8)(F.gD.PREMIUM_MONTH_TIER_2, false, x, $);
    i.useEffect(() => {
      p && T.Ay.trackExposure({
        location: "5f89bb_1"
      })
    }, [p]);
    let er = (null == X ? true : X.id) != null && f.includes(X.id);
    i.useEffect(() => {
      if (!er) {
        if (null == K || x) J(f[0]);
        else if (null != K) {
          let e = f.find(e => e !== K.id);
          null != e && J(e)
        }
      }
    }, [er, x, f, K, J]), i.useEffect(() => {
      B && null != G && G.length > 0 && V(G[0])
    }, [G, V, B]);
    let ei = (0, l._u)(),
      {
        ref: ea
      } = ei,
      eo = Q(ei, ["ref"]),
      es = (null == X ? true : X.id) != null ? (0, I.y8)(X.id, false, x, $) : true,
      {
        ipCountryCode: el
      } = (0, R.A)(),
      ec = "HR" === el && null != es && es.currency === H.Yr.EUR,
      eu = (0, I.J$)($.paymentSourceId),
      ed = !x && (et || null != q && D && null != m);
    return {
      skuId: A,
      setPlanId: J,
      selectedPlan: X,
      selectedPlanPrice: es,
      premiumSubscriptionPlan: K,
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
      customGiftMessage: k,
      setCustomGiftMessage: U,
      selectedGiftStyle: j,
      isEligibleForBOGOPromotion: Z,
      isEligibleForTrial: D,
      userTrialOffer: P,
      discountOffer: L,
      isPlansEligibleForDiscount: et,
      discountedPlanRegularPrice: en,
      discountAmountOff: null == g || null == (a = g.find(e => e.subscriptionPlanId === F.gD.PREMIUM_MONTH_TIER_2)) || null == (r = a.discounts) || null == (n = r.find(e => e.type === d.iS.SUBSCRIPTION_PLAN)) ? true : n.amount
    }
  },
  et = e => {
    let {
      isPrepaid: t,
      selectedPlan: n,
      selectedPlanPrice: i,
      intervalType: a
    } = e;
    return (0, r.jsxs)("div", {
      children: [(0, r.jsx)("div", {
        className: W.T
      }), (0, r.jsx)(D.Sd, {
        label: Y.intl.string(Y.t.txajQG),
        value: (0, r.jsx)(L.A, {
          price: i.amount,
          currency: i.currency,
          intervalType: a,
          intervalCount: n.intervalCount,
          isPrepaidPaymentSource: t
        }),
        className: W.M3
      })]
    })
  },
  en = e => {
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
      if ((0, v.lo)(t) === v.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD && null != i) return (0, r.jsx)(M.A, {
        className: W.iX,
        innerClassName: W.pt,
        onTextChange: e => i(e),
        pendingText: n,
        currentText: n
      })
    }, y = e => (0, r.jsx)(c.D0$, {
      label: Y.intl.string(Y.t["3E5hXj"]),
      children: e
    });
    if ((0, v.Ik)(t)) return (0, r.jsxs)("div", {
      className: W.mh,
      children: [(0, r.jsx)("div", {
        className: W.MU,
        children: null != a && (0, r.jsx)(j.t, {})
      }), (0, r.jsxs)("div", {
        className: W.Tc,
        children: [(0, r.jsx)(V.Z, {
          className: f ? W.KW : true,
          giftRecipient: t
        }), E(), y(m), g, !o && (0, r.jsx)(p.A, {
          onClose: _
        })]
      })]
    });
    let b = l && h;
    return (0, r.jsxs)("div", {
      className: W.Du,
      children: [(0, r.jsx)(V.Z, {
        className: f ? W.KW : true,
        giftRecipient: t
      }), y(m), b && null != u && null != d && (0, r.jsx)(et, {
        selectedPlan: u,
        selectedPlanPrice: d,
        intervalType: null,
        isPrepaid: s
      }), g, !o && (0, r.jsx)(p.A, {
        onClose: _
      })]
    })
  },
  er = e => {
    let {
      isPrepaid: t,
      premiumSubscription: n,
      setPlanId: r,
      thePriceOptions: i,
      shouldShowUpdatedPaymentModal: a,
      isEligibleForTrial: o,
      isPlansEligibleForDiscount: l,
      discountAmountOff: c
    } = e, u = (0, s.bG)([E.default], () => E.default.locale), {
      isGift: d,
      giftRecipient: f
    } = (0, _.Pv)(), p = d && (0, v.Ik)(f), {
      enabled: h
    } = N.A.getCurrentConfig({
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
      discountOffer: (0, P.O)(),
      isEligibleForBOGOPromotion: (0, C.cg)()
    }
  },
  ei = (e, t) => {
    let n = null != e && e.planId === t,
      r = n || t === F.gD.PREMIUM_MONTH_TIER_2 && null != e && [F.gD.PREMIUM_YEAR_TIER_0, F.gD.PREMIUM_YEAR_TIER_1].includes(e.planId);
    return {
      isCurrentPlan: n,
      disabled: r
    }
  },
  ea = e => {
    let {
      shouldUseUnifiedCheckoutUI: t
    } = e, n = Q(e, ["shouldUseUnifiedCheckoutUI"]), {
      planOptions: a,
      radioGroupRef: o,
      selectedPlan: s,
      radioGroupProps: l
    } = n, c = er(n), u = i.useMemo(() => a.map(e => {
      let {
        isCurrentPlan: n,
        disabled: i
      } = ei(c.premiumSubscription, e);
      return (0, r.jsx)(G.A, z({
        planId: e,
        selected: (null == s ? true : s.id) === e,
        isCurrentPlan: n,
        disabled: i,
        shouldUseUnifiedCheckoutUI: t
      }, c), e)
    }), [a, t, c, s]), d = a.length > 0 ? F.hd[a[0]].premiumType : true;
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
    return (0, r.jsx)("div", Z(z({
      ref: o
    }, l), {
      children: u
    }))
  };

function eo(e) {
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
    selectedPlan: m,
    premiumSubscription: E,
    premiumSubscriptionPlan: y,
    isGift: b,
    thePriceOptions: O,
    isEligibleForTrial: v,
    giftRecipient: I,
    customGiftMessage: T,
    setCustomGiftMessage: C,
    selectedGiftStyle: N,
    discountOffer: w,
    isPlansEligibleForDiscount: R,
    discountedPlanRegularPrice: P,
    hasSeenCollectiblesInSkuSelect: D,
    isEligibleForBOGOPromotion: L,
    userTrialOffer: M,
    shouldShowUpdatedPaymentModal: j,
    discountAmountOff: k,
    isPrepaid: U,
    radioGroupRef: G,
    radioGroupProps: V,
    selectedPlanPrice: K,
    shouldShowHRKEuroWarning: z,
    canContinue: q
  } = ee({
    selectedPlanId: t,
    priceOptions: i,
    planOptions: a,
    eligibleForMultiMonthPlans: o,
    subscriptionPeriodEnd: s,
    discountInvoiceItems: d
  }), Z = $(), Q = (e, n, i) => {
    if (!j) return (0, r.jsx)("div", {
      className: W.VZ,
      children: Y.intl.string(Y.t.a19jpU)
    });
    if (n) {
      let t = (null == e ? true : e.trial_id) === F.Dw;
      return (0, r.jsxs)("div", {
        children: [(0, r.jsx)(c.Text, {
          variant: "text-sm/normal",
          className: W.Tz,
          children: t ? Y.intl.format(Y.t.nG95hA, {
            endDate: s
          }) : Y.intl.format(Y.t.s4E7kb, {
            trialEnd: s,
            trialPeriod: Z
          })
        }), (0, r.jsx)("hr", {
          className: W.RA
        })]
      })
    }
    if (i && null != k && null != P && t === F.gD.PREMIUM_MONTH_TIER_2) {
      var a;
      return (0, r.jsxs)("div", {
        children: [(0, r.jsx)(c.Text, {
          variant: "text-sm/normal",
          className: W.Tz,
          children: Y.intl.format(Y.t["nG7g/E"], {
            numMonths: null != (a = null == w ? true : w.discount.user_usage_limit) ? a : "",
            discountedPrice: (0, S.$g)(P.amount - k, P.currency),
            regularPrice: (0, S.$g)(P.amount, P.currency)
          })
        }), (0, r.jsx)("hr", {
          className: W.RA
        })]
      })
    }
  }, X = () => (0, r.jsx)(ea, {
    planOptions: a,
    radioGroupRef: G,
    radioGroupProps: V,
    isGift: b,
    isPrepaid: U,
    premiumSubscription: E,
    setPlanId: h,
    selectedPlan: m,
    thePriceOptions: O,
    shouldShowUpdatedPaymentModal: j,
    isEligibleForTrial: v,
    isPlansEligibleForDiscount: R,
    discountAmountOff: k
  }), er = () => z && null != K ? (0, r.jsx)(u.A, {
    message: Y.intl.formatToPlainString(Y.t["9hnZoK"], {
      kunaPriceWithCurrency: (0, S.$g)(7.5345 * K.amount, H.Yr.HRK)
    })
  }) : null, {
    showFractionalPremiumBanner: ei,
    fractionalPremiumInfo: eo
  } = (0, g._V)({
    premiumSubscription: E,
    selectedPlanId: t,
    planGroup: n,
    isGift: b
  });
  if (b) return (0, r.jsx)(en, {
    giftRecipient: I,
    customGiftMessage: T,
    setCustomGiftMessage: C,
    selectedGiftStyle: N,
    hasSeenCollectiblesInSkuSelect: D,
    isPrepaid: U,
    canContinue: q,
    selectedPlan: m,
    selectedPlanPrice: K,
    useCompactGiftComponents: f,
    handleClose: p,
    showTotal: l,
    switchPlanSelectComponent: X(),
    warningComponent: er()
  });
  let es = !v && !R && q && l,
    el = !(v && ei);
  return (0, r.jsxs)("div", {
    className: W.Du,
    children: [ei && (0, r.jsx)(x.vi, {
      fractionalPremiumInfo: eo,
      enablePremiumBrandRefresh: true,
      variant: v ? x.uA.TRIAL : true,
      trialPeriod: v ? Z : true,
      trialEnd: v ? s : true
    }), null != y && !ei && !L && (0, r.jsx)("div", {
      className: W.G3,
      children: J(y, _)
    }), el && Q(M, v, R), X(), es && null != m && null != K && (0, r.jsx)(et, {
      selectedPlan: m,
      selectedPlanPrice: K,
      intervalType: m.interval,
      isPrepaid: U
    }), er(), !j && l && (0, r.jsx)(u.A, {
      message: Y.intl.format(Y.t.Om31w8, {
        documentationLink: A.A.getArticleURL(B.MVz.LOCALIZED_PRICING)
      })
    })]
  })
}

function es(e) {
  let {
    onStepChange: t,
    selectedPlanId: n,
    paymentSources: i,
    onBackClick: a,
    showBackButton: o,
    planOptions: s,
    shouldRenderUpdatedPaymentModal: l = false,
    isTrial: u,
    isNextDisabled: d = false
  } = e, {
    paymentSources: f,
    selectedPlan: p
  } = (0, h.P5)(), {
    isGift: m,
    giftRecipient: g,
    claimableRewards: E
  } = (0, _.Pv)(), y = (0, v.Ik)(g);
  return i = null != i ? i : f, n = null != n ? n : null == p ? true : p.id, (0, r.jsxs)(r.Fragment, {
    children: [null != n && s.includes(n) ? (0, r.jsx)(el, {
      paymentSources: i,
      onStepChange: t,
      selectedPlanId: n,
      isGift: m,
      claimableRewards: E,
      shouldRenderUpdatedPaymentModal: l,
      isTrial: u,
      isNextDisabled: d
    }) : (0, r.jsx)(c.Button, {
      variant: "primary",
      text: Y.intl.string(Y.t.XqMe3N),
      disabled: true
    }), o ? (0, r.jsx)(k.A, {
      className: m && y ? W.Rz : true,
      onClick: a
    }) : null]
  })
}

function el(e) {
  let {
    onStepChange: t,
    selectedPlanId: n,
    isGift: i,
    claimableRewards: a,
    paymentSources: o,
    shouldRenderUpdatedPaymentModal: l,
    isTrial: u,
    isNextDisabled: d = false
  } = e, f = (0, s.bG)([O.A], () => O.A.getPremiumTypeSubscription()), {
    step: p,
    selectedPlan: _
  } = (0, h.P5)(), {
    hasEntitlements: g
  } = (0, U.X)(n, i), E = null != f && null != f.paymentSourceId || Object.keys(o).length > 0 || g && !u;
  var y = l ? Y.intl.string(Y.t.PDTjLN) : Y.intl.string(Y.t.XqMe3N),
    b = m.pn.ADD_PAYMENT_STEPS;
  return E && (b = m.pn.REVIEW), (0, w.px)(_, i, a) && p !== m.pn.SELECT_FREE_SKU && (b = m.pn.SELECT_FREE_SKU), (0, r.jsx)(c.Button, {
    variant: "primary",
    text: y,
    onClick: () => t(b),
    disabled: d
  })
}