/** Chunk was on web.js **/
/** chunk id: 67409, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  S: () => i
});
var Chunk979554 = require("./979554.js");
let i = e => {
  var t, n, i;
  let {
    product: a,
    selectedVariantIndex: o
  } = e;
  return a.type === r.Z.VARIANTS_GROUP && null != o && null != (i = null == (n = a.variants) || null == (t = n[o]) ? true : t.skuId) ? i : a.skuId
}