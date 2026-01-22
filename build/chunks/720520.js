/** Chunk was on web.js **/
/** chunk id: 720520, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  B: () => a
});
var Chunk222367 = require("./222367.js"),
  Chunk391898 = require("./391898.js");

function a(e, t, n, a, s, o) {
  for (var l = [], c = 0; c < e.length; c++) {
    var u = true,
      d = true,
      f = e[c];
    f < 0 ? (u = Math.floor(f / t.length), d = (0, i._D)(f, t.length)) : (u = Math.floor((f - 1) / t.length), d = (0, i._D)(f - 1, t.length));
    for (var p = [], _ = n; _ < a; _++) {
      var h = o[_];
      (0, i.Wo)(h) && p.push(h)
    }
    var m = true;
    m = u < 0 ? p.slice(u)[0] : p[u];
    var g = t[d],
      E = (0, r.Y_)(s.yearordinal + m),
      b = (0, r.kg)(E, g);
    (0, i.mK)(l, b) || l.push(b)
  }
  return (0, r.di)(l), l
}