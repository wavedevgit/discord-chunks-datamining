/** Chunk was on 59275 **/
/** chunk id: 313276, original params: e,t,l (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => o
});
var Chunk64700 = require("./64700.js"),
  Chunk155999 = require("./155999.js"),
  s = require.n(Chunk155999),
  Chunk311907 = require("./311907.js"),
  Chunk590180 = require("./590180.js");

function o() {
  let e = (0, a.bG)([i.A], () => i.A.products);
  return (0, n.useCallback)(t => s()(t.map(t => {
    let l = e.get(t);
    return null != l && null != l.variantGroupStoreListingId ? i.A.getProductByStoreListingId(l.variantGroupStoreListingId) : l
  }).filter(e => null != e), "storeListingId"), [e])
}