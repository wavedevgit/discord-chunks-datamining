/** Chunk was on 78825 **/
/** chunk id: 67409, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  S: () => l
});
var Chunk979554 = require("./979554.js");
let l = e => {
  var n, t, l;
  let {
    product: i,
    selectedVariantIndex: a
  } = e;
  return i.type === r.Z.VARIANTS_GROUP && null != a && null != (l = null == (t = i.variants) || null == (n = t[a]) ? true : n.skuId) ? l : i.skuId
}