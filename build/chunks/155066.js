/** Chunk was on 45620 **/
/** chunk id: 155066, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => o
});
var Chunk473749 = require("./473749.js"),
  Chunk557816 = require("./557816.js"),
  a = require.n(Chunk557816),
  Chunk442837 = require("./442837.js"),
  Chunk597688 = require("./597688.js");

function o() {
  let e = (0, s.e7)([i.Z], () => i.Z.products);
  return (0, r.useCallback)(t => a()(t.map(t => {
    let n = e.get(t);
    return null != n && null != n.variantGroupStoreListingId ? i.Z.getProductByStoreListingId(n.variantGroupStoreListingId) : n
  }).filter(e => null != e), "storeListingId"), [e])
}