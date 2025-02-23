/** Chunk was on web (https://canary.discord.comweb.9f0be545d3e34886.js.js) **/
"use strict";
var r = n(581031),
  i = n(339718),
  o = Math.floor,
  a = r("".charAt),
  s = r("".replace),
  l = r("".slice),
  c = /\$([$&'`]|\d{1,2}|<[^>]*>)/g,
  u = /\$([$&'`]|\d{1,2})/g;
e.exports = function(e, t, n, r, d, f) {
  var p = n + e.length,
    _ = r.length,
    h = u;
  return void 0 !== d && (d = i(d), h = c), s(f, h, function(i, s) {
    var c;
    switch (a(s, 0)) {
      case "$":
        return "$";
      case "&":
        return e;
      case "`":
        return l(t, 0, n);
      case "'":
        return l(t, p);
      case "<":
        c = d[l(s, 1, -1)];
        break;
      default:
        var u = +s;
        if (0 === u) return i;
        if (u > _) {
          var f = o(u / 10);
          if (0 === f) return i;
          if (f <= _) return void 0 === r[f - 1] ? a(s, 1) : r[f - 1] + a(s, 1);
          return i
        }
        c = r[u - 1]
    }
    return void 0 === c ? "" : c
  })
}