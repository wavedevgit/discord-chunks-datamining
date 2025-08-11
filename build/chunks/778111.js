/** Chunk was on 67244 **/
/** chunk id: 778111, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => n
});
var Chunk665352 = require("./665352.js");

function n(e, t, r = "lab") {
  let s = (r = a.Z.get(r)).from(e),
    o = r.from(t);
  return Math.sqrt(s.reduce((e, t, r) => {
    let a = o[r];
    return isNaN(t) || isNaN(a) ? e : e + (a - t) ** 2
  }, 0))
}