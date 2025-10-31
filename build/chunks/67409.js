/** Chunk was on 48502 **/
/** chunk id: 67409, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  S: () => l
});
var Chunk979554 = require("./979554.js");
let l = e => {
  var t, n, l;
  let {
    product: i,
    selectedVariantIndex: a
  } = e;
  return i.type === r.Z.VARIANTS_GROUP && null != a && null != (l = null == (n = i.variants) || null == (t = n[a]) ? true : t.skuId) ? l : i.skuId
}