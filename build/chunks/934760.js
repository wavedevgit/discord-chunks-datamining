/** Chunk was on 45620 **/
/** chunk id: 934760, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => s
});
var Chunk647438 = require("./647438.js"),
  Chunk557816 = require("./557816.js"),
  i = require.n(Chunk557816),
  Chunk597688 = require("./597688.js");

function s() {
  return (0, Chunk647438.useCallback)(e => i()(e.map(e => {
    let t = a.Z.getProduct(e);
    return null != t && null != t.variantGroupStoreListingId ? a.Z.getProductByStoreListingId(t.variantGroupStoreListingId) : t
  }).filter(e => null != e), "storeListingId"), [])
}