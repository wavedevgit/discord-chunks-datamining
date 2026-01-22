/** Chunk was on web.js **/
/** chunk id: 793295, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  l: () => a
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
    i(this, "rankedSkuIds", true), i(this, "sortedSkuIds", true), this.type = r.g.FEED, this.rankedSkuIds = e.ranked_sku_ids, this.sortedSkuIds = e.sorted_sku_ids
  }
}