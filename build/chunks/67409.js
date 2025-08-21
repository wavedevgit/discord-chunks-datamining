/** Chunk was on 45620 **/
/** chunk id: 67409, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  S: () => l
});
var Chunk979554 = require("./979554.js");
let l = e => {
  var t, r, l;
  let {
    product: a,
    selectedVariantIndex: i
  } = e;
  return a.type === n.Z.VARIANTS_GROUP && null != i && null != (l = null == (r = a.variants) || null == (t = r[i]) ? true : t.skuId) ? l : a.skuId
}