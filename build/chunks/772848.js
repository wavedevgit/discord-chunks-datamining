/** Chunk was on web.js **/
/** chunk id: 772848, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => a
});
var Chunk258099 = require("./258099.js"),
  Chunk883830 = require("./883830.js"),
  Chunk14309 = require("./14309.js");
let a = function(e, t, n) {
  if (r.Z.randomUUID && !t && !e) return r.Z.randomUUID();
  let a = (e = e || {}).random || (e.rng || i.Z)();
  if (a[6] = 15 & a[6] | 64, a[8] = 63 & a[8] | 128, t) {
    n = n || 0;
    for (let e = 0; e < 16; ++e) t[n + e] = a[e];
    return t
  }
  return (0, o.S)(a)
}