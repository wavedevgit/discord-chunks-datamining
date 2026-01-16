/** Chunk was on web.js **/
/** chunk id: 358079, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A0: () => y,
  b5: () => b
}), require("./415506.js"), require("./539854.js"), require("./473749.js");
var Chunk512722 = require("./512722.js"),
  i = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk911969 = require("./911969.js"),
  Chunk509545 = require("./509545.js"),
  Chunk74538 = require("./74538.js"),
  Chunk937615 = require("./937615.js"),
  Chunk591548 = require("./591548.js"),
  Chunk639119 = require("./639119.js"),
  Chunk474936 = require("./474936.js"),
  Chunk282793 = require("./282793.js"),
  Chunk353149 = require("./353149.js"),
  Chunk388032 = require("./388032.jsx");
let m = (e, t) => {
    var n;
    return (null != (n = e.discounts) ? n : []).some(e => e.type === t)
  },
  g = (e, t) => {
    var n, r, i;
    return e.subscriptionPlanPrice - (null != (i = null == (r = e.discounts) || null == (n = r.find(e => e.type === t)) ? true : n.amount) ? i : 0)
  };

function E(e, t, n, r) {
  let i = m(e, o.eW.PREMIUM_TRIAL);
  switch (e.subscriptionPlanId) {
    case f.Xh.PREMIUM_GROUP_MONTH:
      return h.intl.formatToPlainString(_.default["8bPDtb"], {
        premiumGroupProductName: (0, p.sO)()
      });
    case f.Xh.PREMIUM_MONTH_LEGACY:
    case f.Xh.PREMIUM_YEAR_LEGACY:
    case f.Xh.PREMIUM_MONTH_TIER_0:
    case f.Xh.PREMIUM_YEAR_TIER_0:
    case f.Xh.PREMIUM_MONTH_TIER_1:
    case f.Xh.PREMIUM_YEAR_TIER_1:
    case f.Xh.PREMIUM_MONTH_TIER_2:
    case f.Xh.PREMIUM_YEAR_TIER_2:
    case f.Xh.PREMIUM_3_MONTH_TIER_2:
    case f.Xh.PREMIUM_6_MONTH_TIER_2:
      return (0, l.Gf)(e.subscriptionPlanId, i, n, r);
    case f.Xh.PREMIUM_3_MONTH_GUILD:
    case f.Xh.PREMIUM_6_MONTH_GUILD:
      return h.intl.format(h.t.YAIIWp, {
        num: e.quantity,
        intervalCount: t.intervalCount
      });
    case f.Xh.PREMIUM_MONTH_GUILD:
      return h.intl.format(h.t["3BYyip"], {
        num: e.quantity
      });
    case f.Xh.PREMIUM_YEAR_GUILD:
      return h.intl.format(h.t.JVW4UN, {
        num: e.quantity
      })
  }
  switch (t.interval) {
    case f.rV.MONTH:
      if (1 === t.intervalCount) return h.intl.formatToPlainString(h.t["6oq128"], {
        planName: t.name
      });
      return h.intl.formatToPlainString(h.t["9ydggS"], {
        planName: t.name,
        intervalCount: t.intervalCount
      });
    case f.rV.YEAR:
      return h.intl.formatToPlainString(h.t.V6UFQM, {
        planName: t.name
      })
  }
  throw Error("Unexpected invoice plan: ".concat(e.subscriptionPlanId))
}
let b = (e, t) => {
    var n;
    let {
      overrideAmount: r,
      referralTrialOfferId: o,
      isPrepaidPaymentSource: u,
      currency: f
    } = t, p = (0, a.e7)([s.Z], () => s.Z.get(e.subscriptionPlanId)), _ = null == (n = (0, d.N)(o)) ? true : n.subscription_trial;
    i()(null != p, "Missing subscriptionPlan");
    let h = E(e, p, u, (0, l.if)({
        intervalType: null == _ ? true : _.interval,
        intervalCount: null == _ ? true : _.interval_count
      })),
      m = null != r ? r : e.amount,
      g = (0, c.T4)(m, f);
    return {
      label: h,
      value: u ? g : (0, c.og)(g, p.interval, p.intervalCount),
      amount: m,
      formattedPrice: g,
      subscriptionPlan: p
    }
  },
  y = (e, t) => {
    let n = (0, u.j)(e.invoiceItems),
      r = n.find(e => e.subscriptionPlanId === t.id);
    i()(null != r, "Expected newPlanInvoiceItem");
    let a = n.find(e => !(0, l.Z8)(e.subscriptionPlanId) && e.amount < 0),
      s = n.find(e => null == e.subscriptionPlanId && null != e.discounts && e.discounts.find(e => e.type === o.eW.PREMIUM_LEGACY_UPGRADE_PROMOTION)),
      d = m(r, o.eW.PREMIUM_TRIAL),
      p = g(r, o.eW.SUBSCRIPTION_PLAN),
      _ = r.quantity * p,
      E = r.amount + (null != a ? a.amount : 0) - _ + (null != s ? s.amount : 0),
      b = n.filter(e => e.subscriptionPlanId === f.Xh.PREMIUM_MONTH_GUILD || e.subscriptionPlanId === f.Xh.PREMIUM_YEAR_GUILD),
      y = b.reduce((e, t) => e + t.amount, 0),
      O = [];
    return 0 === E || d || O.push({
      id: "base-plan-adjustment",
      label: h.intl.formatToPlainString(h.t.ZSVged, {
        planName: (0, l.PV)(t.id) ? (0, l.MF)(t.id) : t.name
      }),
      tooltipText: h.intl.string(h.t.JmwQJM),
      tooltipAriaLabel: "",
      value: (0, c.T4)(E, e.currency),
      amount: E
    }), 0 !== y && O.push({
      id: "guild-subscription-adjustment",
      label: h.intl.string(h.t["+as5ZZ"]),
      tooltipText: h.intl.format(h.t.UDop9c, {}),
      tooltipAriaLabel: h.intl.string(h.t.P68ePO),
      value: (0, c.T4)(y, e.currency),
      amount: y
    }), {
      newPlanInvoiceItem: r,
      basePlanFullAmount: _,
      basePlanAdjustment: E,
      guildSubscriptionAdjustment: y,
      isTrialItem: d,
      invoiceAdjustmentDisplayItems: O,
      guildSubscriptionInvoiceItems: b,
      promotionItem: s,
      basePlanCreditItem: a
    }
  }