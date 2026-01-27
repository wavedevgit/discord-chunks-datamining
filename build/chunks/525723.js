/** Chunk was on web.js **/
/** chunk id: 525723, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $R: () => s,
  V_: () => o,
  vw: () => c
}), require("./896048.js");
var Chunk311907 = require("./311907.js"),
  Chunk590180 = require("./590180.js"),
  Chunk248352 = require("./248352.js");
let o = e => {
    let t = s(e);
    return null == t ? null : t.amount
  },
  s = e => {
    let t = (0, r.yK)([a.A], () => a.A.getUserDiscounts()),
      n = null == e ? true : e.eligibleOffers;
    if (null == n || 0 === n.length) return null;
    let i = null;
    for (let e of n) {
      let n = t.find(t => t.discountId === e);
      null != n && (null == i || (null == n ? true : n.amount) > i.amount) && (i = n)
    }
    return i
  },
  l = function(e) {
    let t = arguments.length > 1 && true !== arguments[1] && arguments[1],
      n = s(e);
    return t ? null : n
  },
  c = e => {
    let {
      skuId: t,
      isOrbsPurchase: n = false
    } = e, o = (0, r.yK)([a.A], () => a.A.getUserDiscounts()), s = (0, r.bG)([i.A], () => i.A.getProduct(t)), c = l(s, n), u = null != s, d = o.length > 0, f = null != c;
    return !!u && !!d && !f
  }