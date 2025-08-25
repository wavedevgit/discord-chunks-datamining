/** Chunk was on web.js **/
/** chunk id: 29121, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  To: () => o,
  ag: () => a,
  kd: () => i
});
var Chunk388032 = require("./388032.jsx");
let i = e => {
    if (null == e) return "";
    let t = r.intl.string(r.t.z7y5vL);
    return "baseVariantName" in e && null != e.baseVariantName && e.variantLabel !== t ? r.intl.formatToPlainString(r.t.BZN5k5, {
      baseVariantName: e.baseVariantName,
      variantLabel: e.variantLabel
    }) : e.name
  },
  o = e => null == e ? "" : "baseVariantName" in e && null != e.baseVariantName ? e.baseVariantName : null != e.variants && e.variants.length > 0 ? e.variants[0].baseVariantName : e.name,
  a = e => {
    if (null == e) return "";
    let t = r.intl.string(r.t.z7y5vL);
    return null != e.baseVariantName && e.variantLabel !== t ? r.intl.formatToPlainString(r.t.BZN5k5, {
      baseVariantName: e.baseVariantName,
      variantLabel: e.variantLabel
    }) : e.name
  }