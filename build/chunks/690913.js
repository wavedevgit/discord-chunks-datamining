/** Chunk was on web.js **/
/** chunk id: 690913, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  O: () => o
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
    i(this, "name", true), i(this, "categorySkuId", true), i(this, "rankedSkuIds", true), this.type = r.z.SHELF, this.name = e.name, this.categorySkuId = e.category_sku_id, this.rankedSkuIds = e.ranked_sku_ids
  }
}