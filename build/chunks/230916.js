/** Chunk was on web.js **/
/** chunk id: 230916, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Aq: () => h,
  W7: () => g,
  Wp: () => _,
  _n: () => m
}), require("./388685.js");
var Chunk442837 = require("./442837.js"),
  Chunk911969 = require("./911969.js"),
  Chunk583046 = require("./583046.js"),
  Chunk74179 = require("./74179.js"),
  Chunk509545 = require("./509545.js"),
  Chunk74538 = require("./74538.js"),
  Chunk937615 = require("./937615.js"),
  Chunk374649 = require("./374649.js"),
  Chunk622909 = require("./622909.js"),
  Chunk474936 = require("./474936.js");

function _(e, t) {
  var n;
  return null != e && new Set(null == (n = e.discount) ? true : n.plan_ids.map(e => f.GP[e].skuId)).has(t)
}
let p = (e, t, n, r) => {
    var s, c, d, _, p;
    let {
      paymentSourceId: h
    } = (0, o.Z)({
      isGift: false,
      activeSubscription: null
    }), m = f.GP[e], g = (0, l.Wz)(null != (p = null == m ? true : m.skuId) ? p : f.Si.TIER_2), {
      priceOptions: E
    } = (0, a.Z)({
      activeSubscription: null,
      skuIDs: [g],
      paymentSourceId: h,
      isGift: false
    }), b = null != t, [y, O] = (0, u.ED)({
      subscriptionId: null == n ? true : n.id,
      items: [{
        planId: e,
        quantity: 1
      }],
      renewal: true,
      preventFetch: !b || r,
      paymentSourceId: h,
      currency: E.currency,
      userDiscountOfferId: null == t ? true : t.id
    });
    return {
      priceOptions: E,
      discountAmountOff: null == y || null == (_ = y.invoiceItems) || null == (d = _.find(t => t.subscriptionPlanId === e)) || null == (c = d.discounts) || null == (s = c.find(e => e.type === i.eW.SUBSCRIPTION_PLAN)) ? true : s.amount
    }
  },
  h = e => {
    let {
      priceOptions: t,
      discountAmountOff: n
    } = p(e, (0, d.N)()), r = (0, l.aS)(e, false, false, t);
    return (0, c.T4)(r.amount - (null != n ? n : 0), r.currency)
  },
  m = (e, t, n) => {
    let {
      priceOptions: r,
      discountAmountOff: i
    } = p(t, n, e), a = (0, l.aS)(t, false, false, r);
    return (0, c.T4)(a.amount - (null != i ? i : 0), a.currency)
  },
  g = (e, t, n) => {
    let i = (0, r.e7)([s.Z], () => s.Z.get(e), [e]),
      {
        priceOptions: a,
        discountAmountOff: o
      } = p(e, t, n, null == i);
    if (null == i || null == o) return null;
    try {
      let t = (0, l.aS)(e, false, false, a);
      return (0, c.T4)(t.amount - (null != o ? o : 0), t.currency)
    } catch (e) {
      return null
    }
  }