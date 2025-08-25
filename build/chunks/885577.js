/** Chunk was on web.js **/
/** chunk id: 885577, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  K: () => o
});
var Chunk685816 = require("./685816.js");

function i(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class o {
  static fromServer(e) {
    return new o(e)
  }
  constructor(e) {
    i(this, "rankedSkuIds", true), i(this, "sortedSkuIds", true), this.type = r.z.FEED, this.rankedSkuIds = e.ranked_sku_ids, this.sortedSkuIds = e.sorted_sku_ids
  }
}