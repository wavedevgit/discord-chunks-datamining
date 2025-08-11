/** Chunk was on web.js **/
/** chunk id: 905357, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  T: () => s,
  k: () => a
});
var Chunk311570 = require("./311570.js"),
  Chunk228624 = require("./228624.js"),
  Chunk388032 = require("./388032.jsx");
let a = e => {
    let t = (0, i.hv)("useProductName") === r.v.VARIANTS_GROUP;
    if (null == e) return "";
    let n = o.intl.string(o.t.z7y5vL);
    return t && "baseVariantName" in e && null != e.baseVariantName && e.variantLabel !== n ? o.intl.formatToPlainString(o.t.BZN5k5, {
      baseVariantName: e.baseVariantName,
      variantLabel: e.variantLabel
    }) : e.name
  },
  s = e => {
    let t = (0, i.hv)("useProductName") === r.v.VARIANTS_GROUP;
    if (null == e) return "";
    if (t) {
      if ("baseVariantName" in e && null != e.baseVariantName) return e.baseVariantName;
      else if (null != e.variants && e.variants.length > 0) return e.variants[0].baseVariantName
    }
    return e.name
  }