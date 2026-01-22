/** Chunk was on web.js **/
/** chunk id: 237463, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  r: () => a
});
var Chunk651162 = require("./651162.js");

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
    return new a(e)
  }
  constructor(e) {
    i(this, "name", true), i(this, "categorySkuId", true), i(this, "rankedSkuIds", true), this.type = r.g.SHELF, this.name = e.name, this.categorySkuId = e.category_sku_id, this.rankedSkuIds = e.ranked_sku_ids
  }
}