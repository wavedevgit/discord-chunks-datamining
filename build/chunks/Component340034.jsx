/** Chunk was on web.js **/
/** chunk id: 340034, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  XH: () => E,
  Z$: () => g,
  l$: () => b
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk158954 = require("./158954.js"),
  Chunk854354 = require("./854354.js"),
  Chunk270537 = require("./270537.jsx"),
  Chunk934581 = require("./934581.jsx"),
  Chunk446929 = require("./446929.jsx"),
  Chunk299301 = require("./299301.jsx"),
  Chunk888751 = require("./888751.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk756366 = require("./756366.js");

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function _(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      p(e, t, n[t])
    })
  }
  return e
}

function h(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function m(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : h(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let g = e => {
    let {
      isPrepaidPaymentSource: t,
      invoiceSummaryTypeWithPreview: n,
      subscriptionPlan: i,
      premiumTrialOffer: s,
      isCustomGift: l
    } = e, {
      invoicePreview: p
    } = n, _ = n.type === c.N$.PREMIUM_GIFT ? (0, u.fk)(p, {
      isCustomGift: l,
      isPrepaidPaymentSource: t,
      subscriptionPlan: i
    }) : (0, u.iQ)(p, {
      isPrepaidPaymentSource: t,
      invoiceSummaryTypeWithPreview: n,
      subscriptionPlan: i,
      premiumTrialOffer: s
    }), h = (0, a.lp)(p, {
      manualLineItems: _,
      addTaxLineItem: true
    });
    return (0, r.jsx)(o.V, {
      label: d.intl.string(f.default.eoXh7B),
      lineItems: h,
      currency: p.currency,
      totalDueLabel: d.intl.string(f.default.R0cZsM)
    })
  },
  E = e => {
    let {
      selectedPlanId: t,
      priceOptions: n,
      planOptions: i,
      eligibleForMultiMonthPlans: a,
      subscriptionPeriodEnd: o,
      discountInvoiceItems: s
    } = e, c = (0, l.RO)({
      selectedPlanId: t,
      priceOptions: n,
      planOptions: i,
      eligibleForMultiMonthPlans: a,
      subscriptionPeriodEnd: o,
      discountInvoiceItems: s
    });
    return (0, r.jsx)(l.fJ, m(_({
      planOptions: i
    }, c), {
      shouldUseUnifiedCheckoutUI: true
    }))
  },
  y = e => {
    let {
      fractionalPremiumInfo: t,
      isEligibleForTrial: n,
      trialPeriodCopy: r,
      subscriptionPeriodEnd: i
    } = e, a = n ? {
      variant: s.uA.TRIAL,
      trialPeriod: r,
      trialEnd: i
    } : {};
    return {
      fractionalPremiumBannerMessage: (0, s.NQ)(_({
        fractionalPremiumInfo: t
      }, a))
    }
  },
  b = e => {
    let {
      fractionalPremiumInfo: t,
      isEligibleForTrial: n,
      trialPeriodCopy: a,
      subscriptionPeriodEnd: o
    } = e, {
      fractionalPremiumBannerMessage: s
    } = y({
      fractionalPremiumInfo: t,
      isEligibleForTrial: n,
      trialPeriodCopy: a,
      subscriptionPeriodEnd: o
    });
    return null != s && "" !== s ? (0, r.jsx)(i.wx6, {
      type: "info",
      children: s
    }) : null
  }