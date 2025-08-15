/** Chunk was on web.js **/
/** chunk id: 445794, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  I: () => a,
  t: () => o
}), require("./388685.js");
var Chunk442837 = require("./442837.js"),
  Chunk615006 = require("./615006.js");
let a = e => {
    let t = o(e);
    return null == t ? null : t.amount
  },
  o = e => {
    let t = (0, r.Wu)([i.Z], () => i.Z.getUserDiscounts()),
      n = null == e ? true : e.eligibleOffers;
    if (null == n || 0 === n.length) return null;
    let a = null;
    for (let e of n) {
      let n = t.find(t => t.discountId === e);
      null != n && (null == a || (null == n ? true : n.amount) > a.amount) && (a = n)
    }
    return a
  }