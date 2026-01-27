/** Chunk was on web.js **/
/** chunk id: 412090, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  _: () => M
}), require("./896048.js"), require("./321073.js");
var Chunk627968 = require("./627968.js"),
  Chunk637141 = require("./637141.jsx"),
  Chunk854354 = require("./854354.js"),
  Chunk93159 = require("./93159.js"),
  Chunk270537 = require("./270537.jsx"),
  Chunk241989 = require("./241989.jsx"),
  Chunk669510 = require("./669510.jsx"),
  Chunk234419 = require("./234419.js"),
  Chunk446929 = require("./446929.jsx"),
  Chunk692440 = require("./692440.jsx"),
  Chunk815545 = require("./815545.js"),
  Chunk494230 = require("./494230.jsx"),
  Chunk299301 = require("./299301.jsx"),
  Chunk927578 = require("./927578.js"),
  Chunk580630 = require("./580630.js"),
  Chunk427262 = require("./427262.js"),
  Chunk788868 = require("./788868.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk756366 = require("./756366.js"),
  Chunk220264 = require("./220264.js");

function A(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function I(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      A(e, t, n[t])
    })
  }
  return e
}

function S(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function T(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : S(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let C = (e, t, n) => {
    var r;
    return {
      id: null != (r = e.discount_id) ? r : t,
      label: n,
      amount: -e.amount
    }
  },
  N = e => {
    let {
      interval: t
    } = e, n = (0, m.m6)(e.id);
    switch (t) {
      case y.WT.MONTH:
        let r = b.intl.string(O.default.ZnoRKt);
        return n === y.PremiumTypes.TIER_0 ? b.intl.formatToPlainString(O.default.Z9mu9q, {
          timeInterval: r
        }) : b.intl.formatToPlainString(O.default["8Jt4Dw"], {
          timeInterval: r
        });
      case y.WT.YEAR:
        let i = b.intl.string(O.default.Xrg8aC);
        return n === y.PremiumTypes.TIER_0 ? b.intl.formatToPlainString(O.default.Z9mu9q, {
          timeInterval: i
        }) : b.intl.formatToPlainString(O.default["8Jt4Dw"], {
          timeInterval: i
        });
      case y.WT.DAY:
        let a = b.intl.string(O.default.WmjxYl);
        return n === y.PremiumTypes.TIER_0 ? b.intl.formatToPlainString(O.default.Z9mu9q, {
          timeInterval: a
        }) : b.intl.formatToPlainString(O.default["8Jt4Dw"], {
          timeInterval: a
        })
    }
  },
  w = (e, t) => {
    let {
      isPrepaidPaymentSource: n,
      invoiceSummaryTypeWithPreview: r,
      subscriptionPlan: i,
      premiumTrialOffer: a
    } = t, {
      newPlanInvoiceItem: o,
      basePlanFullAmount: s,
      invoiceAdjustmentDisplayItems: l
    } = (0, p.qi)(e, i), c = r.type === h.N$.PREMIUM_DEFAULT ? s : true, {
      label: u,
      amount: d,
      amountWithoutDiscount: f,
      subscriptionDiscount: _,
      entitlementDiscount: m,
      trialDiscount: g
    } = (0, p.Ol)(o, {
      overrideAmount: c,
      subscriptionPlan: i,
      premiumTrialOffer: a,
      isPrepaidPaymentSource: n,
      currency: e.currency
    }), E = null != _ || null != m || null != g, y = [{
      id: o.id,
      label: u,
      amount: E ? f : d
    }, ...l.map(e => ({
      id: e.id,
      label: e.label,
      amount: e.amount
    }))];
    return null != g ? y.push(C(g, "trial-discount", b.intl.string(O.default["7LeLN4"]))) : (null != _ && y.push(C(_, "subscription-discount", b.intl.string(O.default["9yHcmL"]))), null != m && y.push(C(m, "entitlement-discount", b.intl.string(b.t.A7Hpfs)))), y
  },
  R = (e, t) => {
    let {
      isCustomGift: n,
      isPrepaidPaymentSource: r,
      subscriptionPlan: i
    } = t;
    return [{
      id: "premium-gift-line-item",
      label: (0, f.Lw)(i, {
        isCustomGift: n,
        isPrepaidPaymentSource: r
      }),
      amount: e.total - e.tax
    }]
  },
  P = e => {
    let {
      isPrepaidPaymentSource: t,
      invoiceSummaryTypeWithPreview: n,
      subscriptionPlan: i,
      premiumTrialOffer: o,
      isCustomGift: l
    } = e, {
      invoicePreview: c
    } = n, u = n.type === h.N$.PREMIUM_GIFT ? R(c, {
      isCustomGift: l,
      isPrepaidPaymentSource: t,
      subscriptionPlan: i
    }) : w(c, {
      isPrepaidPaymentSource: t,
      invoiceSummaryTypeWithPreview: n,
      subscriptionPlan: i,
      premiumTrialOffer: o
    }), d = (0, a.l)(c, {
      manualLineItems: u,
      addTaxLineItem: true
    });
    return (0, r.jsx)(s.V, {
      label: b.intl.string(O.default.eoXh7B),
      lineItems: d,
      currency: c.currency,
      totalDueLabel: b.intl.string(O.default.R0cZsM)
    })
  },
  D = (e, t, n) => {
    let r = (0, p.Q8)(t, e),
      {
        intervalType: i,
        intervalCount: a
      } = (0, m.Ge)(t),
      o = t.currency;
    return {
      lineItems: r.map(e => {
        let {
          subscriptionPlanPrice: t,
          showGuildSubscriptionAdjustmentTooltip: r
        } = e, {
          label: i
        } = (0, p.Ol)(e, {
          premiumTrialOffer: n,
          currency: o
        }), a = r ? b.intl.format(b.t.UDop9c, {}) : true;
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
      label: b.intl.format(O.default["57B1ks"], {
        renewalDate: t.subscriptionPeriodEnd
      }),
      totalLineItemLabel: x(i, a)
    }
  },
  L = (e, t, n) => {
    var i;
    let {
      isPrepaidPaymentSource: a,
      giftRecipient: s
    } = n, l = e.type === h.N$.PREMIUM_GIFT, {
      invoicePreview: c
    } = e, u = l ? N(t) : (0, m.Mn)(t.id, false, a), d = l && null != s ? {
      username: E.Ay.getUserTag(s, {
        identifiable: "never"
      }),
      avatarUrl: s.getAvatarURL(true, 16),
      nickname: E.Ay.getName(s)
    } : true, f = null == s ? b.intl.string(O.default.AM9XGb) : "", _ = l ? f : b.intl.string(O.default["2zUa6I"]), v = (0, m.m6)(t.id) === y.PremiumTypes.TIER_0 ? (0, r.jsx)(o.DH, {}) : (0, r.jsx)(o.JW, {}), {
      subscriptionPlanInvoiceItem: A
    } = (0, p.Sb)(c, t), I = null != (i = l ? null == A ? true : A.amount : null == A ? true : A.subscriptionPlanPrice) ? i : 0, S = (0, g.$g)(I, c.currency);
    return {
      label: u,
      description: _,
      price: e.type === h.N$.PREMIUM_GIFT ? S : (0, g.CE)(S, t.interval, t.intervalCount),
      gift: d,
      graphic: v
    }
  },
  x = (e, t) => {
    if (1 === t) switch (e) {
      case y.WT.MONTH:
        return b.intl.string(O.default.ajn5LL);
      case y.WT.YEAR:
        return b.intl.string(O.default.FNijW7)
    }
    return b.intl.string(O.default.jxUJkZ)
  },
  M = e => {
    let {
      referralTrialOfferId: t,
      selectedPlanId: n,
      priceOptions: a,
      paymentSources: o,
      onPaymentSourceChange: s,
      handlePaymentSourceAdd: f,
      isTrial: p
    } = e, {
      error: m,
      isGift: g,
      giftRecipient: E,
      oneTimePurchaseNitroGiftInvoicePreview: y,
      subscriptionPeriodEnd: O,
      trialInvoicePreview: A,
      proratedInvoicePreview: S,
      renewalInvoicePreview: C,
      planSwitchLoading: N,
      plan: w,
      isPrepaid: R,
      discountInvoiceItems: x,
      premiumPlanOptions: M,
      shouldAllowPlanSelect: j,
      isCustomGift: k,
      hidePersonalInformation: U,
      hasEntitlements: G,
      paymentSourceId: F,
      eligiblePaymentGateways: V
    } = (0, _.L)(e), B = (0, r.jsx)(i.A, {
      shouldUseUnifiedCheckoutUI: true,
      paymentSources: Object.values(o),
      selectedPaymentSourceId: F,
      newPaymentMethodOptionLabel: G && !p ? b.intl.string(b.t.IGU7El) : null,
      onChange: s,
      onPaymentSourceAdd: f,
      hidePersonalInformation: U,
      isTrial: p,
      paymentGatewayRestrictions: V
    }), H = (0, h.yf)({
      error: m,
      isGift: g,
      oneTimePurchaseNitroGiftInvoicePreview: y,
      trialInvoicePreview: A,
      proratedInvoicePreview: S,
      renewalInvoicePreview: C,
      planSwitchLoading: N
    }), Y = (0, u.V)(t), W = (0, d.RO)({
      selectedPlanId: n,
      priceOptions: a,
      planOptions: M,
      eligibleForMultiMonthPlans: false,
      subscriptionPeriodEnd: O,
      discountInvoiceItems: x
    }), K = (0, r.jsx)(d.fJ, T(I({
      planOptions: M
    }, W), {
      shouldUseUnifiedCheckoutUI: true
    }));
    if (null == H || H.type === h.N$.LOADING) return null;
    let z = (0, r.jsx)(P, {
        invoiceSummaryTypeWithPreview: H,
        subscriptionPlan: w,
        isPrepaidPaymentSource: R,
        premiumTrialOffer: Y,
        isCustomGift: k
      }),
      q = null;
    if (!R && (H.type === h.N$.PREMIUM_DEFAULT || H.type === h.N$.PREMIUM_WITH_TRIAL) && null != H.renewalInvoicePreview) {
      let e = D(H.invoicePreview, H.renewalInvoicePreview, Y);
      q = (0, r.jsx)(c._, I({}, e))
    }
    let Z = L(H, w, {
        isPrepaidPaymentSource: R,
        giftRecipient: E
      }),
      Q = j ? K : (0, r.jsx)(l.f7, I({}, Z));
    return (0, r.jsxs)("div", {
      className: v.d,
      children: [(0, r.jsx)("div", {
        style: {
          height: 24
        }
      }), Q, (0, r.jsx)("div", {
        style: {
          height: 12
        }
      }), q, (0, r.jsx)("div", {
        className: v.J,
        children: B
      }), (0, r.jsx)("div", {
        style: {
          height: 24
        }
      }), z, (0, r.jsx)("div", {
        style: {
          height: 12
        }
      })]
    })
  }