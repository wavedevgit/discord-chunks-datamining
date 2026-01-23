/** Chunk was on web.js **/
/** chunk id: 299301, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  N$: () => p,
  eb: () => h,
  yf: () => _
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk580630 = require("./580630.js"),
  Chunk735164 = require("./735164.jsx"),
  Chunk156962 = require("./156962.jsx"),
  Chunk692440 = require("./692440.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk982571 = require("./982571.js"),
  p = function(e) {
    return e.PREMIUM_GIFT = "PREMIUM_GIFT", e.PREMIUM_WITH_TRIAL = "PREMIUM_WITH_TRIAL", e.PREMIUM_DEFAULT = "PREMIUM_DEFAULT", e.LOADING = "LOADING", e
  }({});
let _ = e => {
    let {
      error: t,
      isGift: n,
      oneTimePurchaseNitroGiftInvoicePreview: r,
      trialInvoicePreview: i,
      proratedInvoicePreview: a,
      renewalInvoicePreview: s,
      planSwitchLoading: o
    } = e;
    return null != t ? null : n && null != r ? {
      type: "PREMIUM_GIFT",
      invoicePreview: r
    } : null != i ? {
      type: "PREMIUM_WITH_TRIAL",
      invoicePreview: i,
      renewalInvoicePreview: s
    } : null == a || null == s || o ? {
      type: "LOADING",
      invoicePreview: null
    } : {
      type: "PREMIUM_DEFAULT",
      invoicePreview: a,
      renewalInvoicePreview: s
    }
  },
  h = e => {
    let {
      invoiceSummaryTypeWithPreview: t,
      priceOptions: n,
      trialFooterMessageOverride: i,
      hideSubscriptionDetails: p,
      referralTrialOfferId: _,
      isTrial: h,
      inReverseTrial: m,
      fractionalPremiumInfo: g,
      plan: E,
      showFractionalPremiumBanner: y,
      isPrepaid: b,
      isCustomGift: O,
      enablePremiumBrandRefresh: v,
      premiumBrandRefreshBackgroundClassName: A
    } = e;
    if (null == t || "LOADING" === t.type) return null;
    let {
      invoicePreview: I
    } = t;
    if ("PREMIUM_GIFT" === t.type) return (0, r.jsx)(u.DP, {
      plan: E,
      className: a()(f.SU, A),
      isPrepaidPaymentSource: b,
      isCustomGift: O,
      invoicePreview: I
    });
    if ("PREMIUM_WITH_TRIAL" === t.type) return (0, r.jsxs)("div", {
      children: [(0, r.jsx)(l.pK, {
        negativeMarginTop: !m
      }), (0, r.jsxs)(l.Yx, {
        className: a()(f.SU, A),
        children: [(0, r.jsxs)("div", {
          className: f.W3,
          children: [(0, r.jsx)(s.Text, {
            variant: "text-md/bold",
            children: d.intl.string(d.t.txajQG)
          }), (0, r.jsx)(s.Text, {
            variant: "text-md/normal",
            children: d.intl.format(d.t.hXcaLT, {
              price: (0, o.$g)(0, I.currency, {
                minimumFractionDigits: 0,
                maximumFractionDigits: 0
              })
            })
          })]
        }), (0, r.jsx)("div", {
          className: f.SV,
          children: (0, r.jsx)(u.tC, {
            invoice: I,
            plan: E
          })
        })]
      })]
    });
    if ("PREMIUM_DEFAULT" === t.type) {
      let e, {
        renewalInvoicePreview: s
      } = t;
      return h && I.subscriptionPeriodEnd !== s.subscriptionPeriodEnd && (e = I.subscriptionPeriodEnd), (0, r.jsxs)(r.Fragment, {
        children: [y && (0, r.jsx)(c.v, {
          fractionalPremiumInfo: g,
          enablePremiumBrandRefresh: v
        }), (0, r.jsxs)(l.Yx, {
          className: a()(f.SU, A),
          children: [(0, r.jsx)(l.Xd, {
            children: d.intl.string(d.t["2eh+Co"])
          }), (0, r.jsx)(u.mT, {
            invoice: I,
            newPlan: E,
            isPrepaidPaymentSource: b,
            referralTrialOfferId: _
          }), b ? null : (0, r.jsx)(u.m0, {
            renewalInvoice: s,
            isTrial: h,
            priceOptions: n,
            overrideRenewalDate: e,
            trialFooterMessageOverride: i,
            hideSubscriptionDetails: p
          })]
        })]
      })
    }
  }