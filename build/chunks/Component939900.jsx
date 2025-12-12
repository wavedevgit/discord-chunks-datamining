/** Chunk was on 27978 **/
/** chunk id: 939900, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => l
}), require("./35282.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk3570 = require("./3570.js"),
  Chunk685311 = require("./685311.jsx"),
  Chunk186901 = require("./186901.js");
let l = function(e) {
  let {
    match: t,
    location: n
  } = e, l = async e => {
    await (0, i.s)(a.jE.GAME_SHOP, {
      guildId: e.params.guildId,
      pageIndex: e.params.pageIndex,
      skuId: e.params.skuId,
      slug: e.params.slug
    })
  };
  return (0, r.jsx)(s.Z, {
    match: t,
    location: n,
    attemptDeepLink: l
  })
}