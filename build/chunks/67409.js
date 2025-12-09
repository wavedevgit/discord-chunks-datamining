/** Chunk was on 75393 **/
/** chunk id: 67409, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  S: () => r
});
var Chunk979554 = require("./979554.js");
let r = e => {
  var t, n, r;
  let {
    product: i,
    selectedVariantIndex: l
  } = e;
  return i.type === a.Z.VARIANTS_GROUP && null != l && null != (r = null == (n = i.variants) || null == (t = n[l]) ? true : t.skuId) ? r : i.skuId
}