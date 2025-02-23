/** Chunk was on web (https://canary.discord.comweb.9f0be545d3e34886.js.js) **/
"use strict";
n.d(t, {
  Z: () => a
}), n(47120);
var r = n(399606),
  i = n(597688),
  o = n(1870);
let a = e => {
  let [t, n] = (0, r.Wu)([i.Z], () => [i.Z.getCategoryForProduct(e), i.Z.getProduct(e)]);
  return {
    category: t,
    product: n,
    purchase: (0, r.e7)([o.Z], () => o.Z.getPurchase(e))
  }
}