/** Chunk was on web.js **/
/** chunk id: 10694, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  I: () => o
}), require("./388685.js");
var Chunk442837 = require("./442837.js"),
  Chunk615006 = require("./615006.js");
let o = e => {
  let t = (0, r.e7)([i.Z], () => i.Z.getUserDiscounts()),
    n = null == e ? true : e.eligibleOffers;
  if (null == n || 0 === n.length) return null;
  let o = null;
  for (let e of n) {
    var a;
    let n = null == (a = t.find(t => t.discountId === e)) ? true : a.amount;
    null != n && (null == o || n > o) && (o = n)
  }
  return o
}