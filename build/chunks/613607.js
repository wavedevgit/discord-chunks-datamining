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
    for (var p = [], _ = n; _ < o; _++) {
      var m = s[_];
      (0, i.EN)(m) && p.push(m)
    }
    var h = true;
    h = u < 0 ? p.slice(u)[0] : p[u];
    var g = t[d],
      E = (0, r.zU)(a.yearordinal + h),
      b = (0, r.$e)(E, g);
    (0, i.q9)(l, b) || l.push(b)
  }
  return (0, r.DY)(l), l
}