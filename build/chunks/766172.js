/** Chunk was on web.js **/
/** chunk id: 766172, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Y: () => i
});
var Chunk575593 = require("./575593.js");
let i = e => {
  var t, n, i;
  let {
    product: a,
    selectedVariantIndex: s
  } = e;
  return a.type === r.R.VARIANTS_GROUP && null != s && null != (t = null == (i = a.variants) || null == (n = i[s]) ? true : n.skuId) ? t : a.skuId
}