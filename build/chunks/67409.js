/** Chunk was on 75393 **/
/** chunk id: 67409, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  S: () => l
});
var Chunk979554 = require("./979554.js");
let l = e => {
  var t, n, l;
  let {
    product: r,
    selectedVariantIndex: i
  } = e;
  return r.type === a.Z.VARIANTS_GROUP && null != i && null != (l = null == (n = r.variants) || null == (t = n[i]) ? true : t.skuId) ? l : r.skuId
}