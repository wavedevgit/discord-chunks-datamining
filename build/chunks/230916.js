/** Chunk was on web.js **/
/** chunk id: 230916, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Aq: () => _,
  W7: () => h,
  _n: () => p
}), require("./388685.js");
var Chunk911969 = require("./911969.js"),
  Chunk583046 = require("./583046.js"),
  Chunk74179 = require("./74179.js"),
  Chunk509545 = require("./509545.js"),
  Chunk74538 = require("./74538.js"),
  Chunk937615 = require("./937615.js"),
  Chunk374649 = require("./374649.js"),
  Chunk104494 = require("./104494.js"),
  Chunk474936 = require("./474936.js");
let f = (e, t, n) => {
    var o, l, u, f;
    let {
      paymentSourceId: _
    } = (0, a.Z)({
      isGift: false,
      activeSubscription: null
    }), p = (0, s.Wz)(d.GP[e].skuId), {
      priceOptions: h
    } = (0, i.Z)({
      activeSubscription: null,
      skuIDs: [p],
      paymentSourceId: _,
      isGift: false
    }), m = null != t, [g, E] = (0, c.ED)({
      subscriptionId: null == n ? true : n.id,
      items: [{
        planId: e,
        quantity: 1
      }],
      renewal: true,
      preventFetch: !m,
      paymentSourceId: _,
      currency: h.currency,
      userDiscountOfferId: null == t ? true : t.id
    });
    return {
      priceOptions: h,
      discountAmountOff: null == g || null == (f = g.invoiceItems) || null == (u = f.find(t => t.subscriptionPlanId === e)) || null == (l = u.discounts) || null == (o = l.find(e => e.type === r.eW.SUBSCRIPTION_PLAN)) ? true : o.amount
    }
  },
  _ = e => {
    let {
      priceOptions: t,
      discountAmountOff: n
    } = f(e, (0, u.Ng)()), r = (0, s.aS)(e, false, false, t);
    return (0, l.T4)(r.amount - (null != n ? n : 0), r.currency)
  },
  p = (e, t, n) => {
    let {
      priceOptions: r,
      discountAmountOff: i
    } = f(t, n, e), a = (0, s.aS)(t, false, false, r);
    return (0, l.T4)(a.amount - (null != i ? i : 0), a.currency)
  },
  h = (e, t, n) => {
    let r = o.Z.get(t),
      {
        priceOptions: i,
        discountAmountOff: a
      } = f(t, n, e);
    if (null == r) return null;
    let c = (0, s.aS)(t, false, false, i);
    return (0, l.T4)(c.amount - (null != a ? a : 0), c.currency)
  }