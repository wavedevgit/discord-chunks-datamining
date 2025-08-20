/** Chunk was on 71387 **/
/** chunk id: 67409, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  S: () => i
});
var Chunk979554 = require("./979554.js");
let i = e => {
  var t, r, i;
  let {
    product: a,
    selectedVariantIndex: l
  } = e;
  return a.type === n.Z.VARIANTS_GROUP && null != l && null != (i = null == (r = a.variants) || null == (t = r[l]) ? true : t.skuId) ? i : a.skuId
}