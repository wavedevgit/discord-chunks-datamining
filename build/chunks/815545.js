/** Chunk was on web.js **/
/** chunk id: 815545, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ol: () => y,
  Q8: () => m,
  qi: () => O
}), require("./638769.js"), require("./65821.js"), require("./321073.js");
var Chunk284009 = require("./284009.js"),
  i = require.n(Chunk284009),
  Chunk155718 = require("./155718.js"),
  Chunk97352 = require("./97352.js"),
  Chunk927578 = require("./927578.js"),
  Chunk580630 = require("./580630.js"),
  Chunk874638 = require("./874638.js"),
  Chunk788868 = require("./788868.js"),
  Chunk88001 = require("./88001.js"),
  Chunk519412 = require("./519412.js"),
  Chunk985018 = require("./985018.jsx");

function _(e) {
  let t = e.slice();
  return t.sort((e, t) => {
    let n = (0, o.xq)(e.subscriptionPlanId),
      r = (0, o.xq)(t.subscriptionPlanId);
    return n && !r ? false : !n && r ? 1 : 0
  }), t
}

function h(e) {
  return e.filter(e => {
    let {
      subscriptionPlanId: t
    } = e;
    return t !== u.gD.NONE_MONTH && t !== u.gD.NONE_YEAR
  })
}
let m = e => h(_((0, c.Z)(e.invoiceItems))),
  g = (e, t) => {
    var n;
    return (null != (n = e.discounts) ? n : []).some(e => e.type === t)
  },
  E = (e, t) => {
    var n, r, i;
    return e.subscriptionPlanPrice - (null != (n = null == (i = e.discounts) || null == (r = i.find(e => e.type === t)) ? true : r.amount) ? n : 0)
  };

function b(e, t, n, r) {
  let i = g(e, a.iS.PREMIUM_TRIAL);
  switch (e.subscriptionPlanId) {
    case u.gD.PREMIUM_GROUP_MONTH:
      return p.intl.formatToPlainString(f.default["8bPDtb"], {
        premiumGroupProductName: (0, d.DP)()
      });
    case u.gD.PREMIUM_MONTH_LEGACY:
    case u.gD.PREMIUM_YEAR_LEGACY:
    case u.gD.PREMIUM_MONTH_TIER_0:
    case u.gD.PREMIUM_YEAR_TIER_0:
    case u.gD.PREMIUM_MONTH_TIER_1:
    case u.gD.PREMIUM_YEAR_TIER_1:
    case u.gD.PREMIUM_MONTH_TIER_2:
    case u.gD.PREMIUM_YEAR_TIER_2:
    case u.gD.PREMIUM_3_MONTH_TIER_2:
    case u.gD.PREMIUM_6_MONTH_TIER_2:
      return (0, o.Mn)(e.subscriptionPlanId, i, n, r);
    case u.gD.PREMIUM_3_MONTH_GUILD:
    case u.gD.PREMIUM_6_MONTH_GUILD:
      return p.intl.format(p.t.YAIIWp, {
        num: e.quantity,
        intervalCount: t.intervalCount
      });
    case u.gD.PREMIUM_MONTH_GUILD:
      return p.intl.format(p.t["3BYyip"], {
        num: e.quantity
      });
    case u.gD.PREMIUM_YEAR_GUILD:
      return p.intl.format(p.t.JVW4UN, {
        num: e.quantity
      })
  }
  switch (t.interval) {
    case u.WT.MONTH:
      if (1 === t.intervalCount) return p.intl.formatToPlainString(p.t["6oq128"], {
        planName: t.name
      });
      return p.intl.formatToPlainString(p.t["9ydggS"], {
        planName: t.name,
        intervalCount: t.intervalCount
      });
    case u.WT.YEAR:
      return p.intl.formatToPlainString(p.t.V6UFQM, {
        planName: t.name
      })
  }
  throw Error("Unexpected invoice plan: ".concat(e.subscriptionPlanId))
}
let y = (e, t) => {
    var n;
    let {
      premiumTrialOffer: r,
      subscriptionPlan: c,
      overrideAmount: u,
      isPrepaidPaymentSource: d,
      currency: f
    } = t, p = null != c ? c : s.A.get(e.subscriptionPlanId), _ = null == r ? true : r.subscription_trial;
    i()(null != p, "Missing subscriptionPlan");
    let h = b(e, p, d, (0, o.re)({
        intervalType: null == _ ? true : _.interval,
        intervalCount: null == _ ? true : _.interval_count
      })),
      m = null != u ? u : e.amount,
      g = (0, l.$g)(m, f),
      E = d ? g : (0, l.CE)(g, p.interval, p.intervalCount),
      y = null != (n = e.discounts) ? n : [],
      O = y.find(e => e.type === a.iS.SUBSCRIPTION_PLAN),
      A = y.find(e => e.type === a.iS.PREMIUM_TRIAL),
      v = y.find(e => e.type === a.iS.ENTITLEMENT),
      S = y.reduce((e, t) => e + t.amount, 0);
    return {
      label: h,
      value: E,
      amount: m,
      amountWithoutDiscount: e.amount + S,
      discountAmountOff: S,
      formattedPrice: g,
      subscriptionPlan: p,
      subscriptionTrial: _,
      trialDiscount: A,
      subscriptionDiscount: O,
      entitlementDiscount: v
    }
  },
  O = (e, t) => {
    let n = (0, c.Z)(e.invoiceItems),
      r = n.find(e => e.subscriptionPlanId === t.id);
    i()(null != r, "Expected newPlanInvoiceItem");
    let s = n.find(e => !(0, o.z4)(e.subscriptionPlanId) && e.amount < 0),
      d = n.find(e => null == e.subscriptionPlanId && null != e.discounts && e.discounts.find(e => e.type === a.iS.PREMIUM_LEGACY_UPGRADE_PROMOTION)),
      f = g(r, a.iS.PREMIUM_TRIAL),
      _ = E(r, a.iS.SUBSCRIPTION_PLAN),
      h = r.quantity * _,
      m = r.amount + (null != s ? s.amount : 0) - h + (null != d ? d.amount : 0),
      b = n.filter(e => e.subscriptionPlanId === u.gD.PREMIUM_MONTH_GUILD || e.subscriptionPlanId === u.gD.PREMIUM_YEAR_GUILD),
      y = b.reduce((e, t) => e + t.amount, 0),
      O = [];
    return 0 === m || f || O.push({
      id: "base-plan-adjustment",
      label: p.intl.formatToPlainString(p.t.ZSVged, {
        planName: (0, o.ys)(t.id) ? (0, o.RH)(t.id) : t.name
      }),
      tooltipText: p.intl.string(p.t.JmwQJM),
      tooltipAriaLabel: "",
      value: (0, l.$g)(m, e.currency),
      amount: m
    }), 0 !== y && O.push({
      id: "guild-subscription-adjustment",
      label: p.intl.string(p.t["+as5ZZ"]),
      tooltipText: p.intl.format(p.t.UDop9c, {}),
      tooltipAriaLabel: p.intl.string(p.t.P68ePO),
      value: (0, l.$g)(y, e.currency),
      amount: y
    }), {
      newPlanInvoiceItem: r,
      basePlanFullAmount: h,
      basePlanAdjustment: m,
      guildSubscriptionAdjustment: y,
      isTrialItem: f,
      invoiceAdjustmentDisplayItems: O,
      guildSubscriptionInvoiceItems: b,
      promotionItem: d,
      basePlanCreditItem: s
    }
  }