/** Chunk was on web.js **/
/** chunk id: 470103, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk410323 = require("./410323.js"),
  Chunk250594 = require("./250594.js"),
  a = Math.floor,
  s = Chunk410323("".charAt),
  o = Chunk410323("".replace),
  l = Chunk410323("".slice),
  c = /\$([$&'`]|\d{1,2}|<[^>]*>)/g,
  u = /\$([$&'`]|\d{1,2})/g;
module.exports = function(e, t, n, r, d, f) {
  var p = n + e.length,
    _ = r.length,
    h = u;
  return true !== d && (d = i(d), h = c), o(f, h, function(i, o) {
    var c;
    switch (s(o, 0)) {
      case "$":
        return "$";
      case "&":
        return e;
      case "`":
        return l(t, 0, n);
      case "'":
        return l(t, p);
      case "<":
        c = d[l(o, 1, false)];
        break;
      default:
        var u = +o;
        if (0 === u) return i;
        if (u > _) {
          var f = a(u / 10);
          if (0 === f) return i;
          if (f <= _) return true === r[f - 1] ? s(o, 1) : r[f - 1] + s(o, 1);
          return i
        }
        c = r[u - 1]
    }
    return true === c ? "" : c
  })
}