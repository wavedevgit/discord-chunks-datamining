/** Chunk was on 45620 **/
"use strict";
r.d(t, {
  u: () => s
});
var n = r(192379),
  i = r(557816),
  l = r.n(i),
  o = r(597688),
  a = r(228624);
let s = () => {
  let e = (0, a.ed)("CollectiblesFeedShop");
  return (0, n.useCallback)(t => l()(t.map(t => {
    let r = o.Z.getProduct(t);
    return e && null != r && null != r.variantGroupStoreListingId ? o.Z.getProductByStoreListingId(r.variantGroupStoreListingId) : r
  }).filter(e => null != e), "storeListingId"), [e])
}