/** Chunk was on web.js **/
"use strict";
var r = n(581031),
  i = n(959318),
  o = n(714050),
  a = n(676125),
  s = r("".charAt),
  l = r("".charCodeAt),
  c = r("".slice),
  u = function(e) {
    return function(t, n) {
      var r, u, d = o(a(t)),
        f = i(n),
        _ = d.length;
      return f < 0 || f >= _ ? e ? "" : void 0 : (r = l(d, f)) < 55296 || r > 56319 || f + 1 === _ || (u = l(d, f + 1)) < 56320 || u > 57343 ? e ? s(d, f) : r : e ? c(d, f, f + 2) : (r - 55296 << 10) + (u - 56320) + 65536
    }
  };
e.exports = {
  codeAt: u(!1),
  charAt: u(!0)
}