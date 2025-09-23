/** Chunk was on 8850 **/
/** chunk id: 67409, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  S: () => l
});
var Chunk979554 = require("./979554.js");
let l = e => {
  var t, r, l;
  let {
    product: i,
    selectedVariantIndex: a
  } = e;
  return i.type === n.Z.VARIANTS_GROUP && null != a && null != (l = null == (r = i.variants) || null == (t = r[a]) ? true : t.skuId) ? l : i.skuId
}