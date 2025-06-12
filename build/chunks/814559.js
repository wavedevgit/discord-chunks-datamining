/** Chunk was on web.js **/
"use strict";
var r = n(46015),
  i = n(527160),
  a = Math.floor,
  o = r("".charAt),
  s = r("".replace),
  l = r("".slice),
  c = /\$([$&'`]|\d{1,2}|<[^>]*>)/g,
  u = /\$([$&'`]|\d{1,2})/g;
e.exports = function(e, t, n, r, d, _) {
  var f = n + e.length,
    p = r.length,
    h = u;
  return void 0 !== d && (d = i(d), h = c), s(_, h, function(i, s) {
    var c;
    switch (o(s, 0)) {
      case "$":
        return "$";
      case "&":
        return e;
      case "`":
        return l(t, 0, n);
      case "'":
        return l(t, f);
      case "<":
        c = d[l(s, 1, -1)];
        break;
      default:
        var u = +s;
        if (0 === u) return i;
        if (u > p) {
          var _ = a(u / 10);
          if (0 === _) return i;
          if (_ <= p) return void 0 === r[_ - 1] ? o(s, 1) : r[_ - 1] + o(s, 1);
          return i
        }
        c = r[u - 1]
    }
    return void 0 === c ? "" : c
  })
}