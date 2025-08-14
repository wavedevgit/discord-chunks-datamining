/** Chunk was on 86031 **/
/** chunk id: 67409, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  S: () => a
});
var Chunk979554 = require("./979554.js");
let a = e => {
  var t, r, a;
  let {
    product: i,
    selectedVariantIndex: l
  } = e;
  return i.type === n.Z.VARIANTS_GROUP && null != l && null != (a = null == (r = i.variants) || null == (t = r[l]) ? true : t.skuId) ? a : i.skuId
}