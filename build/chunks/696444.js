/** Chunk was on web.js **/
/** chunk id: 696444, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => a
});
var Chunk935816 = require("./935816.js");

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
      name: s,
      sku_id: o,
      summary: l
    } = e;
    return new a({
      prices: (0, r.m)(t),
      type: n,
      premiumType: i,
      name: s,
      skuId: o,
      summary: l
    })
  }
  constructor(e) {
    i(this, "prices", true), i(this, "type", true), i(this, "premiumType", true), i(this, "name", true), i(this, "skuId", true), i(this, "summary", true), this.prices = e.prices, this.type = e.type, this.premiumType = e.premiumType, this.name = e.name, this.skuId = e.skuId, this.summary = e.summary
  }
}