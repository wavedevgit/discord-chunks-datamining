/** Chunk was on web (https://canary.discord.comweb.9f0be545d3e34886.js.js) **/
"use strict";
var r = n(96403),
  i = n(952256),
  o = n(735471),
  a = n(726433),
  s = n(342545),
  l = r([].push);
e.exports = function(e) {
  if (o(e)) return e;
  if (i(e)) {
    for (var t = e.length, n = [], r = 0; r < t; r++) {
      var c = e[r];
      "string" == typeof c ? l(n, c) : ("number" == typeof c || "Number" === a(c) || "String" === a(c)) && l(n, s(c))
    }
    var u = n.length,
      d = !0;
    return function(e, t) {
      if (d) return d = !1, t;
      if (i(this)) return t;
      for (var r = 0; r < u; r++)
        if (n[r] === e) return t
    }
  }
}