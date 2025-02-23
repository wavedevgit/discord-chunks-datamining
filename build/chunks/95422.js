/** Chunk was on web (https://canary.discord.comweb.9f0be545d3e34886.js.js) **/
"use strict";
n.d(t, {
  a: () => o
});
var r = n(228624),
  i = n(388032);
let o = e => {
  let t = (0, r.ed)("usePurchasedProductName");
  if (null == e) return "";
  let n = i.NW.string(i.t.z7y5vL);
  return t && null != e.baseVariantName && e.variantLabel !== n ? i.NW.formatToPlainString(i.t.BZN5k5, {
    baseVariantName: e.baseVariantName,
    variantLabel: e.variantLabel
  }) : e.name
}