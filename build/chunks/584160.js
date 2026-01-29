/** Chunk was on web.js **/
/** chunk id: 584160, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  u: () => a
});
var Chunk788868 = require("./788868.js"),
  Chunk985018 = require("./985018.jsx");
let a = e => {
  let {
    skuId: t
  } = e, n = i.intl.string(i.t.q9EGps);
  return null == t ? {
    title: n,
    gradientColor: true
  } : t === r.pe.TIER_0 || t === r.pe.TIER_1 ? {
    title: n,
    gradientColor: "nitro-green"
  } : t === r.pe.TIER_2 ? {
    title: n,
    gradientColor: "nitro-pink"
  } : {
    title: n
  }
}