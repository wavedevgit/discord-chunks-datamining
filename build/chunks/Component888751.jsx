/** Chunk was on web.js **/
/** chunk id: 888751, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  BZ: () => v,
  Gj: () => O,
  fk: () => y,
  iQ: () => E
}), require("./896048.js"), require("./321073.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk93159 = require("./93159.js"),
  Chunk692440 = require("./692440.jsx"),
  Chunk815545 = require("./815545.js"),
  Chunk299301 = require("./299301.jsx"),
  Chunk927578 = require("./927578.js"),
  Chunk580630 = require("./580630.js"),
  Chunk427262 = require("./427262.js"),
  Chunk788868 = require("./788868.js"),
  Chunk88001 = require("./88001.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk756366 = require("./756366.js"),
  Chunk519412 = require("./519412.js");
let m = (e, t, n) => {
    var r;
    return {
      id: null != (r = e.discount_id) ? r : t,
      label: n,
      amount: -e.amount
    }
  },
  g = e => {
    let {
      interval: t
    } = e, n = (0, l.m6)(e.id);
    switch (t) {
      case d.WT.MONTH:
        let r = p.intl.string(_.default.ZnoRKt);
        return n === d.PremiumTypes.TIER_0 ? p.intl.formatToPlainString(_.default.Z9mu9q, {
          timeInterval: r
        }) : p.intl.formatToPlainString(_.default["8Jt4Dw"], {
          timeInterval: r
        });
      case d.WT.YEAR:
        let i = p.intl.string(_.default.Xrg8aC);
        return n === d.PremiumTypes.TIER_0 ? p.intl.formatToPlainString(_.default.Z9mu9q, {
          timeInterval: i
        }) : p.intl.formatToPlainString(_.default["8Jt4Dw"], {
          timeInterval: i
        });
      case d.WT.DAY:
        let a = p.intl.string(_.default.WmjxYl);
        return n === d.PremiumTypes.TIER_0 ? p.intl.formatToPlainString(_.default.Z9mu9q, {
          timeInterval: a
        }) : p.intl.formatToPlainString(_.default["8Jt4Dw"], {
          timeInterval: a
        })
    }
  },
  E = (e, t) => {
    let {
      isPrepaidPaymentSource: n,
      invoiceSummaryTypeWithPreview: r,
      subscriptionPlan: i,
      premiumTrialOffer: a
    } = t, {
      newPlanInvoiceItem: l,
      basePlanFullAmount: c,
      invoiceAdjustmentDisplayItems: u
    } = (0, o.qi)(e, i), d = r.type === s.N$.PREMIUM_DEFAULT ? c : true, {
      label: f,
      amount: h,
      amountWithoutDiscount: g,
      subscriptionDiscount: E,
      entitlementDiscount: y,
      trialDiscount: b
    } = (0, o.Ol)(l, {
      overrideAmount: d,
      subscriptionPlan: i,
      premiumTrialOffer: a,
      isPrepaidPaymentSource: n,
      currency: e.currency
    }), O = null != E || null != y || null != b, v = [{
      id: l.id,
      label: f,
      amount: O ? g : h
    }, ...u.map(e => ({
      id: e.id,
      label: e.label,
      amount: e.amount
    }))];
    return null != b ? v.push(m(b, "trial-discount", p.intl.string(_.default["7LeLN4"]))) : (null != E && v.push(m(E, "subscription-discount", p.intl.string(_.default["9yHcmL"]))), null != y && v.push(m(y, "entitlement-discount", p.intl.string(p.t.A7Hpfs)))), v
  },
  y = (e, t) => {
    let {
      isCustomGift: n,
      isPrepaidPaymentSource: r,
      subscriptionPlan: i
    } = t;
    return [{
      id: "premium-gift-line-item",
      label: (0, a.Lw)(i, {
        isCustomGift: n,
        isPrepaidPaymentSource: r
      }),
      amount: e.total - e.tax
    }]
  },
  b = (e, t) => {
    if (1 === t) switch (e) {
      case d.WT.MONTH:
        return p.intl.string(_.default.ajn5LL);
      case d.WT.YEAR:
        return p.intl.string(_.default.FNijW7)
    }
    return p.intl.string(_.default.jxUJkZ)
  },
  O = (e, t, n) => {
    let r = (0, o.Q8)(t, e),
      {
        intervalType: i,
        intervalCount: a
      } = (0, l.Ge)(t),
      s = t.currency;
    return {
      lineItems: r.map(e => {
        let {
          subscriptionPlanPrice: t,
          showGuildSubscriptionAdjustmentTooltip: r
        } = e, {
          label: i
        } = (0, o.Ol)(e, {
          premiumTrialOffer: n,
          currency: s
        }), a = r ? p.intl.format(p.t.UDop9c, {}) : true;
        return {
          id: e.id,
          label: i,
          amount: t,
          tooltip: a
        }
      }),
      intervalType: i,
      intervalCount: a,
      currency: s,
      label: p.intl.format(_.default["57B1ks"], {
        renewalDate: t.subscriptionPeriodEnd
      }),
      totalLineItemLabel: b(i, a)
    }
  },
  v = (e, t, n) => {
    var a;
    let {
      isPrepaidPaymentSource: m,
      giftRecipient: E,
      isPremiumGroupPurchase: y
    } = n, b = e.type === s.N$.PREMIUM_GIFT, {
      invoicePreview: O
    } = e, {
      subscriptionPlanInvoiceItem: v
    } = (0, o.Sb)(O, t), A = "";
    A = y ? null != v ? (0, o.Tp)(v, t) : p.intl.formatToPlainString(h.default["8bPDtb"], {
      premiumGroupProductName: (0, f.DP)()
    }) : b ? g(t) : (0, l.Mn)(t.id, false, m);
    let I = b && null != E ? {
        username: u.Ay.getUserTag(E, {
          identifiable: "never"
        }),
        avatarUrl: E.getAvatarURL(true, 16),
        nickname: u.Ay.getName(E)
      } : true,
      S = null == E ? p.intl.string(_.default.AM9XGb) : "",
      T = b ? S : p.intl.string(_.default["2zUa6I"]),
      C = (0, l.m6)(t.id) === d.PremiumTypes.TIER_0 ? (0, r.jsx)(i.DH, {}) : (0, r.jsx)(i.JW, {}),
      N = null != (a = b ? null == v ? true : v.amount : null == v ? true : v.subscriptionPlanPrice) ? a : 0,
      w = (0, c.$g)(N, O.currency);
    return {
      label: A,
      description: T,
      price: e.type === s.N$.PREMIUM_GIFT ? w : (0, c.CE)(w, t.interval, t.intervalCount),
      gift: I,
      graphic: C
    }
  }