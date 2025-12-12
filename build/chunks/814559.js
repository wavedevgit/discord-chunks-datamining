/** Chunk was on web.js **/
/** chunk id: 814559, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk46015 = require("./46015.js"),
  Chunk527160 = require("./527160.js"),
  a = Math.floor,
  o = Chunk46015("".charAt),
  s = Chunk46015("".replace),
  l = Chunk46015("".slice),
  c = /\$([$&'`]|\d{1,2}|<[^>]*>)/g,
  u = /\$([$&'`]|\d{1,2})/g;
module.exports = function(e, t, n, r, d, f) {
  var p = n + e.length,
    _ = r.length,
    m = u;
  return true !== d && (d = i(d), m = c), s(f, m, function(i, s) {
    var c;
    switch (o(s, 0)) {
      case "$":
        return "$";
      case "&":
        return e;
      case "`":
        return l(t, 0, n);
      case "'":
        return l(t, p);
      case "<":
        c = d[l(s, 1, false)];
        break;
      default:
        var u = +s;
        if (0 === u) return i;
        if (u > _) {
          var f = a(u / 10);
          if (0 === f) return i;
          if (f <= _) return true === r[f - 1] ? o(s, 1) : r[f - 1] + o(s, 1);
          return i
        }
        c = r[u - 1]
    }
    return true === c ? "" : c
  })
}