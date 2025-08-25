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
    product: o,
    selectedVariantIndex: a
  } = e;
  return o.type === r.Z.VARIANTS_GROUP && null != a && null != (i = null == (n = o.variants) || null == (t = n[a]) ? true : t.skuId) ? i : o.skuId
}