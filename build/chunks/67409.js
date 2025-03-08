/** Chunk was on 74329 **/
n.d(t, {
  S: () => i
});
var r = n(979554);
let i = e => {
  var t, n, i;
  let {
    product: o,
    selectedVariantIndex: l
  } = e;
  return o.type === r.Z.VARIANTS_GROUP && null != l && null !== (i = null === (n = o.variants) || void 0 === n ? void 0 : null === (t = n[l]) || void 0 === t ? void 0 : t.skuId) && void 0 !== i ? i : o.skuId
}