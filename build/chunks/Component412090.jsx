/** Chunk was on web.js **/
/** chunk id: 412090, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  _: () => A
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk397927 = require("./397927.js"),
  Chunk854354 = require("./854354.js"),
  Chunk270537 = require("./270537.jsx"),
  Chunk669510 = require("./669510.jsx"),
  Chunk234419 = require("./234419.js"),
  Chunk815545 = require("./815545.js"),
  Chunk494230 = require("./494230.jsx"),
  Chunk299301 = require("./299301.jsx"),
  Chunk927578 = require("./927578.js"),
  Chunk788868 = require("./788868.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk756366 = require("./756366.js"),
  Chunk220264 = require("./220264.js");

function g(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function E(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      g(e, t, n[t])
    })
  }
  return e
}
let b = (e, t) => {
    if (1 === t) switch (e) {
      case p.WT.MONTH:
        return _.intl.string(h.default.ajn5LL);
      case p.WT.YEAR:
        return _.intl.string(h.default.FNijW7)
    }
    return _.intl.string(h.default.jxUJkZ)
  },
  y = e => {
    let {
      isPrepaidPaymentSource: t,
      invoiceSummaryTypeWithPreview: n,
      subscriptionPlan: i,
      premiumTrialOffer: o
    } = e, {
      invoicePreview: l
    } = n, {
      newPlanInvoiceItem: u,
      basePlanFullAmount: d,
      invoiceAdjustmentDisplayItems: f
    } = (0, c.qi)(l, i), {
      label: p,
      amount: m
    } = (0, c.Ol)(u, {
      overrideAmount: d,
      subscriptionPlan: i,
      premiumTrialOffer: o,
      isPrepaidPaymentSource: t,
      currency: l.currency
    }), g = [{
      id: u.id,
      label: p,
      amount: m
    }, ...f.map(e => ({
      id: e.id,
      label: e.label,
      amount: e.amount
    }))], E = (0, a.l)(l, {
      manualLineItems: g,
      addTaxLineItem: true
    });
    return (0, r.jsx)(s.V, {
      label: _.intl.string(h.default.eoXh7B),
      lineItems: E,
      currency: l.currency
    })
  },
  O = (e, t) => {
    let n = (0, c.Q8)(e),
      {
        intervalType: r,
        intervalCount: i
      } = (0, f.Ge)(e),
      a = e.currency;
    return {
      lineItems: n.map(e => {
        let {
          label: n,
          amount: r
        } = (0, c.Ol)(e, {
          premiumTrialOffer: t,
          currency: a
        });
        return {
          id: e.id,
          label: n,
          amount: r,
          tooltip: e.tooltipText
        }
      }),
      intervalType: r,
      intervalCount: i,
      currency: a,
      label: _.intl.format(h.default["57B1ks"], {
        renewalDate: e.subscriptionPeriodEnd
      }),
      totalLineItemLabel: b(r, i)
    }
  },
  A = e => {
    let {
      referralTrialOfferId: t
    } = e, {
      error: n,
      isGift: a,
      oneTimePurchaseNitroGiftInvoicePreview: s,
      trialInvoicePreview: c,
      proratedInvoicePreview: f,
      renewalInvoicePreview: p,
      planSwitchLoading: h,
      plan: g,
      isPrepaid: b
    } = (0, u.L)(e), A = (0, d.yf)({
      error: n,
      isGift: a,
      oneTimePurchaseNitroGiftInvoicePreview: s,
      trialInvoicePreview: c,
      proratedInvoicePreview: f,
      renewalInvoicePreview: p,
      planSwitchLoading: h
    }), v = (0, l.V)(t);
    if (null == A || A.type === d.N$.LOADING) return null;
    let S = (0, r.jsx)(y, {
        invoiceSummaryTypeWithPreview: A,
        subscriptionPlan: g,
        isPrepaidPaymentSource: b,
        premiumTrialOffer: v
      }),
      I = null;
    if (!b && (A.type === d.N$.PREMIUM_DEFAULT || A.type === d.N$.PREMIUM_WITH_TRIAL) && null != A.renewalInvoicePreview) {
      let e = O(A.renewalInvoicePreview, v);
      I = (0, r.jsx)(o._, E({}, e))
    }
    return (0, r.jsxs)("div", {
      children: [(0, r.jsx)("div", {
        style: {
          height: 12
        }
      }), I, (0, r.jsx)(i.Text, {
        variant: "text-md/normal",
        color: "text-strong",
        className: m.S,
        children: _.intl.string(_.t["YH7B+D"])
      }), (0, r.jsx)("div", {
        style: {
          height: 30
        }
      }), S, (0, r.jsx)("div", {
        style: {
          height: 12
        }
      })]
    })
  }