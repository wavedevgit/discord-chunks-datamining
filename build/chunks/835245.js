/** Chunk was on web.js **/
/** chunk id: 835245, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => s
});
var Chunk702072 = require("./702072.js"),
  Chunk582062 = require("./582062.js"),
  Chunk652938 = require("./652938.js");
let s = function(e, t, n) {
  if (r.A.randomUUID && !t && !e) return r.A.randomUUID();
  let s = (e = e || {}).random || (e.rng || i.A)();
  if (s[6] = 15 & s[6] | 64, s[8] = 63 & s[8] | 128, t) {
    n = n || 0;
    for (let e = 0; e < 16; ++e) t[n + e] = s[e];
    return t
  }
  return (0, a.k)(s)
}