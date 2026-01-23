/** Chunk was on 21724 **/
/** chunk id: 766172, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Y: () => l
});
var Chunk575593 = require("./575593.js");
let l = e => {
  var t, n, l;
  let {
    product: a,
    selectedVariantIndex: i
  } = e;
  return a.type === r.R.VARIANTS_GROUP && null != i && null != (t = null == (l = a.variants) || null == (n = l[i]) ? true : n.skuId) ? t : a.skuId
}