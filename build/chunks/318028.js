/** Chunk was on web (https://canary.discord.comweb.9f0be545d3e34886.js.js) **/
"use strict";
n.d(t, {
  l: () => a
}), n(47120);
var r = n(399606),
  i = n(597688),
  o = n(267097);

function a(e) {
  (0, o.Z)();
  let [t, n] = (0, r.Wu)([i.Z], () => [i.Z.isFetchingCategories, i.Z.getCategoryForProduct(e)]);
  return {
    isFetching: t,
    category: n
  }
}