/** Chunk was on 23032 **/
/** chunk id: 778111, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => n
});
var Chunk665352 = require("./665352.js");

function n(e, t, r = "lab") {
  let o = (r = a.Z.get(r)).from(e),
    s = r.from(t);
  return Math.sqrt(o.reduce((e, t, r) => {
    let a = s[r];
    return isNaN(t) || isNaN(a) ? e : e + (a - t) ** 2
  }, 0))
}