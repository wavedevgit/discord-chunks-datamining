/** Chunk was on 45620 **/
/** chunk id: 67409, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  S: () => l
});
var Chunk979554 = require("./979554.js");
let l = e => {
  var t, n, l;
  let {
    product: a,
    selectedVariantIndex: i
  } = e;
  return a.type === r.Z.VARIANTS_GROUP && null != i && null != (l = null == (n = a.variants) || null == (t = n[i]) ? true : t.skuId) ? l : a.skuId
}