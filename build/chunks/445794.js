/** Chunk was on web.js **/
/** chunk id: 445794, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Iw: () => a,
  N3: () => c,
  t0: () => s
}), require("./388685.js");
var Chunk442837 = require("./442837.js"),
  Chunk597688 = require("./597688.js"),
  Chunk615006 = require("./615006.js");
let a = e => {
    let t = s(e);
    return null == t ? null : t.amount
  },
  s = e => {
    let t = (0, r.Wu)([o.Z], () => o.Z.getUserDiscounts()),
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
    } = e, a = (0, r.Wu)([o.Z], () => o.Z.getUserDiscounts()), s = (0, r.e7)([i.Z], () => i.Z.getProduct(t)), c = l(s, n), u = null != s, d = a.length > 0, f = null != c;
    return !!u && !!d && !f
  }