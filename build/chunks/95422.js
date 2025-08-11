/** Chunk was on web.js **/
/** chunk id: 95422, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  a: () => o
});
var Chunk228624 = require("./228624.js"),
  Chunk388032 = require("./388032.jsx");
let o = e => {
  let t = (0, r.ed)("usePurchasedProductName");
  if (null == e) return "";
  let n = i.intl.string(i.t.z7y5vL);
  return t && null != e.baseVariantName && e.variantLabel !== n ? i.intl.formatToPlainString(i.t.BZN5k5, {
    baseVariantName: e.baseVariantName,
    variantLabel: e.variantLabel
  }) : e.name
}