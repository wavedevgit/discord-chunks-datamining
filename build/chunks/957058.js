/** Chunk was on 45620 **/
"use strict";
n.d(t, {
  u: () => i
});
var r = n(192379),
  l = n(557816),
  a = n.n(l),
  s = n(597688),
  o = n(228624);
let i = () => {
  let e = (0, o.ed)("CollectiblesFeedShop");
  return (0, r.useCallback)(t => a()(t.map(t => {
    let n = s.Z.getProduct(t);
    return e && null != n && null != n.variantGroupStoreListingId ? s.Z.getProductByStoreListingId(n.variantGroupStoreListingId) : n
  }).filter(e => null != e), "storeListingId"), [e])
}