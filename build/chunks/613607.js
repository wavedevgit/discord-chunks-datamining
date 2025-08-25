/** Chunk was on web.js **/
/** chunk id: 613607, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  f: () => o
});
var Chunk695170 = require("./695170.js"),
  Chunk686942 = require("./686942.js");

function o(e, t, n, o, a, s) {
  for (var l = [], c = 0; c < e.length; c++) {
    var u = true,
      d = true,
      f = e[c];
    f < 0 ? (u = Math.floor(f / t.length), d = (0, i.Vy)(f, t.length)) : (u = Math.floor((f - 1) / t.length), d = (0, i.Vy)(f - 1, t.length));
    for (var _ = [], p = n; p < o; p++) {
      var h = s[p];
      (0, i.EN)(h) && _.push(h)
    }
    var m = true;
    m = u < 0 ? _.slice(u)[0] : _[u];
    var g = t[d],
      E = (0, r.zU)(a.yearordinal + m),
      b = (0, r.$e)(E, g);
    (0, i.q9)(l, b) || l.push(b)
  }
  return (0, r.DY)(l), l
}