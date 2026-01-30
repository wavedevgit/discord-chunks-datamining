/** Chunk was on web.js **/
/** chunk id: 412090, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  _: () => W
}), require("./896048.js"), require("./321073.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk637141 = require("./637141.jsx"),
  Chunk854354 = require("./854354.js"),
  Chunk69882 = require("./69882.jsx"),
  Chunk93159 = require("./93159.js"),
  Chunk270537 = require("./270537.jsx"),
  Chunk241989 = require("./241989.jsx"),
  Chunk669510 = require("./669510.jsx"),
  Chunk234419 = require("./234419.js"),
  Chunk934581 = require("./934581.jsx"),
  Chunk446929 = require("./446929.jsx"),
  Chunk692440 = require("./692440.jsx"),
  Chunk815545 = require("./815545.js"),
  Chunk494230 = require("./494230.jsx"),
  Chunk299301 = require("./299301.jsx"),
  Chunk927578 = require("./927578.js"),
  Chunk580630 = require("./580630.js"),
  Chunk427262 = require("./427262.js"),
  Chunk156312 = require("./156312.jsx"),
  Chunk210507 = require("./210507.js"),
  Chunk788868 = require("./788868.js"),
  Chunk88001 = require("./88001.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk756366 = require("./756366.js"),
  Chunk519412 = require("./519412.js");

function R(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function P(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      R(e, t, n[t])
    })
  }
  return e
}

function D(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function L(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : D(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let x = (e, t, n) => {
    var r;
    return {
      id: null != (r = e.discount_id) ? r : t,
      label: n,
      amount: -e.amount
    }
  },
  M = e => {
    let {
      interval: t
    } = e, n = (0, b.m6)(e.id);
    switch (t) {
      case S.WT.MONTH:
        let r = C.intl.string(N.default.ZnoRKt);
        return n === S.PremiumTypes.TIER_0 ? C.intl.formatToPlainString(N.default.Z9mu9q, {
          timeInterval: r
        }) : C.intl.formatToPlainString(N.default["8Jt4Dw"], {
          timeInterval: r
        });
      case S.WT.YEAR:
        let i = C.intl.string(N.default.Xrg8aC);
        return n === S.PremiumTypes.TIER_0 ? C.intl.formatToPlainString(N.default.Z9mu9q, {
          timeInterval: i
        }) : C.intl.formatToPlainString(N.default["8Jt4Dw"], {
          timeInterval: i
        });
      case S.WT.DAY:
        let a = C.intl.string(N.default.WmjxYl);
        return n === S.PremiumTypes.TIER_0 ? C.intl.formatToPlainString(N.default.Z9mu9q, {
          timeInterval: a
        }) : C.intl.formatToPlainString(N.default["8Jt4Dw"], {
          timeInterval: a
        })
    }
  },
  j = (e, t) => {
    let {
      isPrepaidPaymentSource: n,
      invoiceSummaryTypeWithPreview: r,
      subscriptionPlan: i,
      premiumTrialOffer: a
    } = t, {
      newPlanInvoiceItem: o,
      basePlanFullAmount: s,
      invoiceAdjustmentDisplayItems: l
    } = (0, g.qi)(e, i), c = r.type === y.N$.PREMIUM_DEFAULT ? s : true, {
      label: u,
      amount: d,
      amountWithoutDiscount: f,
      subscriptionDiscount: p,
      entitlementDiscount: _,
      trialDiscount: h
    } = (0, g.Ol)(o, {
      overrideAmount: c,
      subscriptionPlan: i,
      premiumTrialOffer: a,
      isPrepaidPaymentSource: n,
      currency: e.currency
    }), m = null != p || null != _ || null != h, E = [{
      id: o.id,
      label: u,
      amount: m ? f : d
    }, ...l.map(e => ({
      id: e.id,
      label: e.label,
      amount: e.amount
    }))];
    return null != h ? E.push(x(h, "trial-discount", C.intl.string(N.default["7LeLN4"]))) : (null != p && E.push(x(p, "subscription-discount", C.intl.string(N.default["9yHcmL"]))), null != _ && E.push(x(_, "entitlement-discount", C.intl.string(C.t.A7Hpfs)))), E
  },
  k = (e, t) => {
    let {
      isCustomGift: n,
      isPrepaidPaymentSource: r,
      subscriptionPlan: i
    } = t;
    return [{
      id: "premium-gift-line-item",
      label: (0, m.Lw)(i, {
        isCustomGift: n,
        isPrepaidPaymentSource: r
      }),
      amount: e.total - e.tax
    }]
  },
  U = e => {
    let {
      isPrepaidPaymentSource: t,
      invoiceSummaryTypeWithPreview: n,
      subscriptionPlan: i,
      premiumTrialOffer: a,
      isCustomGift: o
    } = e, {
      invoicePreview: l
    } = n, c = n.type === y.N$.PREMIUM_GIFT ? k(l, {
      isCustomGift: o,
      isPrepaidPaymentSource: t,
      subscriptionPlan: i
    }) : j(l, {
      isPrepaidPaymentSource: t,
      invoiceSummaryTypeWithPreview: n,
      subscriptionPlan: i,
      premiumTrialOffer: a
    }), d = (0, s.lp)(l, {
      manualLineItems: c,
      addTaxLineItem: true
    });
    return (0, r.jsx)(u.V, {
      label: C.intl.string(N.default.eoXh7B),
      lineItems: d,
      currency: l.currency,
      totalDueLabel: C.intl.string(N.default.R0cZsM)
    })
  },
  G = (e, t, n) => {
    let r = (0, g.Q8)(t, e),
      {
        intervalType: i,
        intervalCount: a
      } = (0, b.Ge)(t),
      o = t.currency;
    return {
      lineItems: r.map(e => {
        let {
          subscriptionPlanPrice: t,
          showGuildSubscriptionAdjustmentTooltip: r
        } = e, {
          label: i
        } = (0, g.Ol)(e, {
          premiumTrialOffer: n,
          currency: o
        }), a = r ? C.intl.format(C.t.UDop9c, {}) : true;
        return {
          id: e.id,
          label: i,
          amount: t,
          tooltip: a
        }
      }),
      intervalType: i,
      intervalCount: a,
      currency: o,
      label: C.intl.format(N.default["57B1ks"], {
        renewalDate: t.subscriptionPeriodEnd
      }),
      totalLineItemLabel: V(i, a)
    }
  },
  F = (e, t, n) => {
    var i;
    let {
      isPrepaidPaymentSource: a,
      giftRecipient: o,
      isPremiumGroupPurchase: s
    } = n, l = e.type === y.N$.PREMIUM_GIFT, {
      invoicePreview: u
    } = e, {
      subscriptionPlanInvoiceItem: d
    } = (0, g.Sb)(u, t), f = "";
    f = s ? null != d ? (0, g.Tp)(d, t) : C.intl.formatToPlainString(w.default["8bPDtb"], {
      premiumGroupProductName: (0, T.DP)()
    }) : l ? M(t) : (0, b.Mn)(t.id, false, a);
    let p = l && null != o ? {
        username: v.Ay.getUserTag(o, {
          identifiable: "never"
        }),
        avatarUrl: o.getAvatarURL(true, 16),
        nickname: v.Ay.getName(o)
      } : true,
      _ = null == o ? C.intl.string(N.default.AM9XGb) : "",
      h = l ? _ : C.intl.string(N.default["2zUa6I"]),
      m = (0, b.m6)(t.id) === S.PremiumTypes.TIER_0 ? (0, r.jsx)(c.DH, {}) : (0, r.jsx)(c.JW, {}),
      E = null != (i = l ? null == d ? true : d.amount : null == d ? true : d.subscriptionPlanPrice) ? i : 0,
      A = (0, O.$g)(E, u.currency);
    return {
      label: f,
      description: h,
      price: e.type === y.N$.PREMIUM_GIFT ? A : (0, O.CE)(A, t.interval, t.intervalCount),
      gift: p,
      graphic: m
    }
  },
  V = (e, t) => {
    if (1 === t) switch (e) {
      case S.WT.MONTH:
        return C.intl.string(N.default.ajn5LL);
      case S.WT.YEAR:
        return C.intl.string(N.default.FNijW7)
    }
    return C.intl.string(N.default.jxUJkZ)
  },
  B = e => {
    let {
      selectedPlanId: t,
      priceOptions: n,
      planOptions: i,
      eligibleForMultiMonthPlans: a,
      subscriptionPeriodEnd: o,
      discountInvoiceItems: s
    } = e, l = (0, h.RO)({
      selectedPlanId: t,
      priceOptions: n,
      planOptions: i,
      eligibleForMultiMonthPlans: a,
      subscriptionPeriodEnd: o,
      discountInvoiceItems: s
    });
    return (0, r.jsx)(h.fJ, L(P({
      planOptions: i
    }, l), {
      shouldUseUnifiedCheckoutUI: true
    }))
  },
  H = e => {
    let {
      fractionalPremiumInfo: t,
      isEligibleForTrial: n,
      trialPeriodCopy: r,
      subscriptionPeriodEnd: i
    } = e, a = n ? {
      variant: _.uA.TRIAL,
      trialPeriod: r,
      trialEnd: i
    } : {};
    return {
      fractionalPremiumBannerMessage: (0, _.NQ)(P({
        fractionalPremiumInfo: t
      }, a))
    }
  },
  Y = e => {
    let {
      fractionalPremiumInfo: t,
      isEligibleForTrial: n,
      trialPeriodCopy: i,
      subscriptionPeriodEnd: o
    } = e, {
      fractionalPremiumBannerMessage: s
    } = H({
      fractionalPremiumInfo: t,
      isEligibleForTrial: n,
      trialPeriodCopy: i,
      subscriptionPeriodEnd: o
    });
    return null != s && "" !== s ? (0, r.jsx)(a.wx6, {
      type: "info",
      children: s
    }) : null
  },
  W = e => {
    let {
      referralTrialOfferId: t,
      selectedPlanId: n,
      priceOptions: s,
      paymentSources: c,
      onPaymentSourceChange: u,
      handlePaymentSourceAdd: _,
      isTrial: m,
      planGroup: g
    } = e, b = (0, E.L)(e), {
      isEligibleForTrial: O
    } = (0, A.P5)(), {
      error: v,
      isGift: S,
      giftRecipient: T,
      oneTimePurchaseNitroGiftInvoicePreview: N,
      subscriptionPeriodEnd: w,
      trialInvoicePreview: R,
      proratedInvoicePreview: D,
      renewalInvoicePreview: L,
      planSwitchLoading: x,
      plan: M,
      isPrepaid: j,
      discountInvoiceItems: k,
      premiumPlanOptions: V,
      shouldAllowPlanSelect: H,
      isCustomGift: W,
      hidePersonalInformation: K,
      hasEntitlements: z,
      paymentSourceId: q,
      eligiblePaymentGateways: Z,
      activeSubscription: Q,
      fractionalPremiumInfo: X,
      isPremiumGroupPurchase: J
    } = b, $ = (0, r.jsx)(o.A, {
      shouldUseUnifiedCheckoutUI: true,
      paymentSources: Object.values(c),
      selectedPaymentSourceId: q,
      newPaymentMethodOptionLabel: z && !m ? C.intl.string(C.t.IGU7El) : null,
      onChange: u,
      onPaymentSourceAdd: _,
      hidePersonalInformation: K,
      isTrial: m,
      paymentGatewayRestrictions: Z
    }), ee = (0, y.yf)({
      error: v,
      isGift: S,
      oneTimePurchaseNitroGiftInvoicePreview: N,
      trialInvoicePreview: R,
      proratedInvoicePreview: D,
      renewalInvoicePreview: L,
      planSwitchLoading: x
    }), et = (0, p.V)(t), en = (0, h.O8)(), er = (0, I.pt)({
      fractionalPremiumInfo: X,
      selectedPlanId: n,
      planGroup: g,
      premiumSubscription: Q,
      isGift: S
    }), ei = i.useMemo(() => er ? (0, r.jsx)(Y, {
      fractionalPremiumInfo: X,
      isEligibleForTrial: O,
      trialPeriodCopy: en,
      subscriptionPeriodEnd: w
    }) : J ? (0, r.jsx)(a.wx6, {
      type: "info",
      children: (0, I.Nn)()
    }) : null, [er, X, O, en, w, J]);
    if (null == ee || ee.type === y.N$.LOADING) return (0, r.jsx)(l.Ed, {});
    let ea = (0, r.jsx)(U, {
        invoiceSummaryTypeWithPreview: ee,
        subscriptionPlan: M,
        isPrepaidPaymentSource: j,
        premiumTrialOffer: et,
        isCustomGift: W
      }),
      eo = null;
    if (!j && (ee.type === y.N$.PREMIUM_DEFAULT || ee.type === y.N$.PREMIUM_WITH_TRIAL) && null != ee.renewalInvoicePreview) {
      let e = G(ee.invoicePreview, ee.renewalInvoicePreview, et);
      eo = (0, r.jsx)(f._, P({}, e))
    }
    let es = F(ee, M, {
        isPrepaidPaymentSource: j,
        giftRecipient: T,
        isPremiumGroupPurchase: J
      }),
      el = H ? (0, r.jsx)(B, {
        selectedPlanId: n,
        priceOptions: s,
        planOptions: V,
        eligibleForMultiMonthPlans: false,
        subscriptionPeriodEnd: w,
        discountInvoiceItems: k
      }) : true,
      ec = H ? true : (0, r.jsx)(d.f7, P({}, es));
    return (0, r.jsx)(l.rg, {
      upperInlineNoticeContent: ei,
      planSelectContent: el,
      purchaseItemContent: ec,
      subscriptionDetailsContent: eo,
      paymentSelectContent: $,
      invoiceSummaryContent: ea
    })
  }