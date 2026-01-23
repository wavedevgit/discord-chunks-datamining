/** Chunk was on web.js **/
/** chunk id: 412090, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  _: () => w
}), require("./896048.js"), require("./321073.js");
var Chunk627968 = require("./627968.js"),
  Chunk397927 = require("./397927.js"),
  Chunk854354 = require("./854354.js"),
  Chunk270537 = require("./270537.jsx"),
  Chunk669510 = require("./669510.jsx"),
  Chunk234419 = require("./234419.js"),
  Chunk446929 = require("./446929.jsx"),
  Chunk692440 = require("./692440.jsx"),
  Chunk815545 = require("./815545.js"),
  Chunk494230 = require("./494230.jsx"),
  Chunk299301 = require("./299301.jsx"),
  Chunk927578 = require("./927578.js"),
  Chunk788868 = require("./788868.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk756366 = require("./756366.js"),
  Chunk220264 = require("./220264.js");

function y(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function b(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      y(e, t, n[t])
    })
  }
  return e
}

function O(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function v(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : O(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let A = (e, t) => {
    if (1 === t) switch (e) {
      case h.WT.MONTH:
        return m.intl.string(g.default.ajn5LL);
      case h.WT.YEAR:
        return m.intl.string(g.default.FNijW7)
    }
    return m.intl.string(g.default.jxUJkZ)
  },
  I = (e, t, n) => {
    var r;
    return {
      id: null != (r = e.discount_id) ? r : t,
      label: n,
      amount: -e.amount
    }
  },
  S = (e, t) => {
    let {
      isPrepaidPaymentSource: n,
      invoiceSummaryTypeWithPreview: r,
      subscriptionPlan: i,
      premiumTrialOffer: a
    } = t, {
      newPlanInvoiceItem: s,
      basePlanFullAmount: o,
      invoiceAdjustmentDisplayItems: l
    } = (0, d.qi)(e, i), c = r.type === p.N$.PREMIUM_DEFAULT ? o : true, {
      label: u,
      amount: f,
      amountWithoutDiscount: _,
      subscriptionDiscount: h,
      entitlementDiscount: E,
      trialDiscount: y
    } = (0, d.Ol)(s, {
      overrideAmount: c,
      subscriptionPlan: i,
      premiumTrialOffer: a,
      isPrepaidPaymentSource: n,
      currency: e.currency
    }), b = null != h || null != E || null != y, O = [{
      id: s.id,
      label: u,
      amount: b ? _ : f
    }, ...l.map(e => ({
      id: e.id,
      label: e.label,
      amount: e.amount
    }))];
    return null != y ? O.push(I(y, "trial-discount", m.intl.string(g.default["7LeLN4"]))) : (null != h && O.push(I(h, "subscription-discount", m.intl.string(g.default["9yHcmL"]))), null != E && O.push(I(E, "entitlement-discount", m.intl.string(m.t.A7Hpfs)))), O
  },
  T = (e, t) => {
    let {
      isCustomGift: n,
      isPrepaidPaymentSource: r,
      subscriptionPlan: i
    } = t;
    return [{
      id: "premium-gift-line-item",
      label: (0, u.Lw)(i, {
        isCustomGift: n,
        isPrepaidPaymentSource: r
      }),
      amount: e.total - e.tax
    }]
  },
  C = e => {
    let {
      isPrepaidPaymentSource: t,
      invoiceSummaryTypeWithPreview: n,
      subscriptionPlan: i,
      premiumTrialOffer: o,
      isCustomGift: l
    } = e, {
      invoicePreview: c
    } = n, u = n.type === p.N$.PREMIUM_GIFT ? T(c, {
      isCustomGift: l,
      isPrepaidPaymentSource: t,
      subscriptionPlan: i
    }) : S(c, {
      isPrepaidPaymentSource: t,
      invoiceSummaryTypeWithPreview: n,
      subscriptionPlan: i,
      premiumTrialOffer: o
    }), d = (0, a.l)(c, {
      manualLineItems: u,
      addTaxLineItem: true
    });
    return (0, r.jsx)(s.V, {
      label: m.intl.string(g.default.eoXh7B),
      lineItems: d,
      currency: c.currency
    })
  },
  N = (e, t) => {
    let n = (0, d.Q8)(e),
      {
        intervalType: r,
        intervalCount: i
      } = (0, _.Ge)(e),
      a = e.currency;
    return {
      lineItems: n.map(e => {
        let {
          subscriptionPlanPrice: n
        } = e, {
          label: r
        } = (0, d.Ol)(e, {
          premiumTrialOffer: t,
          currency: a
        });
        return {
          id: e.id,
          label: r,
          amount: n,
          tooltip: e.tooltipText
        }
      }),
      intervalType: r,
      intervalCount: i,
      currency: a,
      label: m.intl.format(g.default["57B1ks"], {
        renewalDate: e.subscriptionPeriodEnd
      }),
      totalLineItemLabel: A(r, i)
    }
  },
  w = e => {
    let {
      referralTrialOfferId: t,
      selectedPlanId: n,
      priceOptions: a
    } = e, {
      error: s,
      isGift: u,
      oneTimePurchaseNitroGiftInvoicePreview: d,
      subscriptionPeriodEnd: _,
      trialInvoicePreview: h,
      proratedInvoicePreview: g,
      renewalInvoicePreview: y,
      planSwitchLoading: O,
      plan: A,
      isPrepaid: I,
      discountInvoiceItems: S,
      premiumPlanOptions: T,
      shouldAllowPlanSelect: w,
      isCustomGift: R
    } = (0, f.L)(e), P = (0, p.yf)({
      error: s,
      isGift: u,
      oneTimePurchaseNitroGiftInvoicePreview: d,
      trialInvoicePreview: h,
      proratedInvoicePreview: g,
      renewalInvoicePreview: y,
      planSwitchLoading: O
    }), D = (0, l.V)(t), x = (0, c.RO)({
      selectedPlanId: n,
      priceOptions: a,
      planOptions: T,
      eligibleForMultiMonthPlans: false,
      subscriptionPeriodEnd: _,
      discountInvoiceItems: S
    }), L = (0, r.jsx)(c.fJ, v(b({
      planOptions: T
    }, x), {
      shouldUseUnifiedCheckoutUI: true
    }));
    if (null == P || P.type === p.N$.LOADING) return null;
    let j = (0, r.jsx)(C, {
        invoiceSummaryTypeWithPreview: P,
        subscriptionPlan: A,
        isPrepaidPaymentSource: I,
        premiumTrialOffer: D,
        isCustomGift: R
      }),
      M = null;
    if (!I && (P.type === p.N$.PREMIUM_DEFAULT || P.type === p.N$.PREMIUM_WITH_TRIAL) && null != P.renewalInvoicePreview) {
      let e = N(P.renewalInvoicePreview, D);
      M = (0, r.jsx)(o._, b({}, e))
    }
    return (0, r.jsxs)("div", {
      children: [w ? L : null, (0, r.jsx)("div", {
        style: {
          height: 12
        }
      }), M, (0, r.jsx)(i.Text, {
        variant: "text-md/normal",
        color: "text-strong",
        className: E.S,
        children: m.intl.string(m.t["YH7B+D"])
      }), (0, r.jsx)("div", {
        style: {
          height: 24
        }
      }), j, (0, r.jsx)("div", {
        style: {
          height: 12
        }
      })]
    })
  }