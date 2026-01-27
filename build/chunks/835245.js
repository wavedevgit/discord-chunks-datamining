/** Chunk was on web.js **/
/** chunk id: 835245, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => o
});
var Chunk702072 = require("./702072.js"),
  Chunk582062 = require("./582062.js"),
  Chunk652938 = require("./652938.js");
let o = function(e, t, n) {
  if (r.A.randomUUID && !t && !e) return r.A.randomUUID();
  let o = (e = e || {}).random || (e.rng || i.A)();
  if (o[6] = 15 & o[6] | 64, o[8] = 63 & o[8] | 128, t) {
    n = n || 0;
    for (let e = 0; e < 16; ++e) t[n + e] = o[e];
    return t
  }
  return (0, a.k)(o)
}