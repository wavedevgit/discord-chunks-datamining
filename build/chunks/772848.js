/** Chunk was on web.js **/
/** chunk id: 772848, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => o
});
var Chunk258099 = require("./258099.js"),
  Chunk883830 = require("./883830.js"),
  Chunk14309 = require("./14309.js");
let o = function(e, t, n) {
  if (r.Z.randomUUID && !t && !e) return r.Z.randomUUID();
  let o = (e = e || {}).random || (e.rng || i.Z)();
  if (o[6] = 15 & o[6] | 64, o[8] = 63 & o[8] | 128, t) {
    n = n || 0;
    for (let e = 0; e < 16; ++e) t[n + e] = o[e];
    return t
  }
  return (0, a.S)(o)
}