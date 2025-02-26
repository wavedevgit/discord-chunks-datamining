/** Chunk was on 45620 **/
"use strict";
r.d(t, {
  S: () => l
});
var n = r(979554);
let l = e => {
  var t, r, l;
  let {
    product: i,
    selectedVariantIndex: o
  } = e;
  return i.type === n.Z.VARIANTS_GROUP && null != o && null !== (l = null === (r = i.variants) || void 0 === r ? void 0 : null === (t = r[o]) || void 0 === t ? void 0 : t.skuId) && void 0 !== l ? l : i.skuId
}