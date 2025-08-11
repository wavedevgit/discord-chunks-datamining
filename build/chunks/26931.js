/** Chunk was on 45620 **/
/** chunk id: 26931, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  u: () => s
});
var Chunk73800 = require("./73800.js"),
  Chunk557816 = require("./557816.js"),
  a = require.n(Chunk557816),
  Chunk597688 = require("./597688.js"),
  Chunk228624 = require("./228624.js");
let s = () => {
  let e = (0, Chunk228624.ed)("CollectiblesFeedShop");
  return (0, Chunk73800.useCallback)(t => a()(t.map(t => {
    let n = i.Z.getProduct(t);
    return e && null != n && null != n.variantGroupStoreListingId ? i.Z.getProductByStoreListingId(n.variantGroupStoreListingId) : n
  }).filter(e => null != e), "storeListingId"), [module])
}