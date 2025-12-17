/** Chunk was on 45620 **/
/** chunk id: 934760, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => o
});
var Chunk473749 = require("./473749.js"),
  Chunk557816 = require("./557816.js"),
  a = require.n(Chunk557816),
  Chunk597688 = require("./597688.js");

function o() {
  return (0, Chunk473749.useCallback)(e => a()(e.map(e => {
    let t = s.Z.getProduct(e);
    return null != t && null != t.variantGroupStoreListingId ? s.Z.getProductByStoreListingId(t.variantGroupStoreListingId) : t
  }).filter(e => null != e), "storeListingId"), [])
}