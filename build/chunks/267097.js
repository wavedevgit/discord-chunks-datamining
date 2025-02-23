/** Chunk was on web (https://canary.discord.comweb.9f0be545d3e34886.js.js) **/
"use strict";
n.d(t, {
  Z: () => o
});
var r = n(580747),
  i = n(479801);

function o(e) {
  let t = null == e ? void 0 : e.paymentGateway,
    n = (0, r.Z)("shop_disable_cache"),
    o = (0, r.Z)("shop_include_unpublished");
  return (0, i.e)({
    noCache: n,
    includeUnpublished: o,
    paymentGateway: t,
    includeBundles: !0
  })
}