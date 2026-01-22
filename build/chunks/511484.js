/** Chunk was on web.js **/
/** chunk id: 511484, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  N1: () => h,
  U9: () => p,
  iU: () => g,
  tQ: () => m
}), require("./896048.js");
var Chunk311907 = require("./311907.js"),
  Chunk155718 = require("./155718.js"),
  Chunk853398 = require("./853398.js"),
  Chunk369827 = require("./369827.js"),
  Chunk97352 = require("./97352.js"),
  Chunk927578 = require("./927578.js"),
  Chunk580630 = require("./580630.js"),
  Chunk543767 = require("./543767.js"),
  Chunk422936 = require("./422936.js"),
  Chunk788868 = require("./788868.js");

function p(e, t) {
  var n;
  return null != e && new Set(null == (n = e.discount) ? true : n.plan_ids.map(e => f.hd[e].skuId)).has(t)
}
let _ = (e, t, n, r) => {
    var o, c, d, p, _;
    let {
      paymentSourceId: h
    } = (0, s.A)({
      isGift: false,
      activeSubscription: null
    }), m = f.hd[e], g = (0, l.mH)(null != (o = null == m ? true : m.skuId) ? o : f.pe.TIER_2), {
      priceOptions: E
    } = (0, a.A)({
      activeSubscription: null,
      skuIDs: [g],
      paymentSourceId: h,
      isGift: false
    }), b = null != t, [y, O] = (0, u.Kq)({
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
      discountAmountOff: null == y || null == (_ = y.invoiceItems) || null == (p = _.find(t => t.subscriptionPlanId === e)) || null == (d = p.discounts) || null == (c = d.find(e => e.type === i.iS.SUBSCRIPTION_PLAN)) ? true : c.amount
    }
  },
  h = e => {
    let {
      priceOptions: t,
      discountAmountOff: n
    } = _(e, (0, d.O)()), r = (0, l.y8)(e, false, false, t);
    return (0, c.$g)(r.amount - (null != n ? n : 0), r.currency)
  },
  m = (e, t, n) => {
    let {
      priceOptions: r,
      discountAmountOff: i
    } = _(t, n, e), a = (0, l.y8)(t, false, false, r);
    return (0, c.$g)(a.amount - (null != i ? i : 0), a.currency)
  },
  g = (e, t, n) => {
    let i = (0, r.bG)([o.A], () => o.A.get(e), [e]),
      {
        priceOptions: a,
        discountAmountOff: s
      } = _(e, t, n, null == i);
    if (null == i || null == s) return null;
    try {
      let t = (0, l.y8)(e, false, false, a);
      return (0, c.$g)(t.amount - (null != s ? s : 0), t.currency)
    } catch (e) {
      return null
    }
  }