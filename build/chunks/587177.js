/** Chunk was on web.js **/
/** chunk id: 587177, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => a
});
var Chunk311850 = require("./311850.js");

function i(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class a {
  static fromServer(e) {
    let {
      prices: t,
      type: n,
      premium_type: i,
      name: o,
      sku_id: s,
      summary: l
    } = e;
    return new a({
      prices: (0, r.l)(t),
      type: n,
      premiumType: i,
      name: o,
      skuId: s,
      summary: l
    })
  }
  constructor(e) {
    i(this, "prices", true), i(this, "type", true), i(this, "premiumType", true), i(this, "name", true), i(this, "skuId", true), i(this, "summary", true), this.prices = e.prices, this.type = e.type, this.premiumType = e.premiumType, this.name = e.name, this.skuId = e.skuId, this.summary = e.summary
  }
}