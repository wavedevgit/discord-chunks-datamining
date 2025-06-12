/** Chunk was on web.js **/
"use strict";
var r = n(46015),
  i = n(77826),
  a = n(382698),
  o = n(497464),
  s = r("".charAt),
  l = r("".charCodeAt),
  c = r("".slice),
  u = function(e) {
    return function(t, n) {
      var r, u, d = a(o(t)),
        _ = i(n),
        f = d.length;
      return _ < 0 || _ >= f ? e ? "" : void 0 : (r = l(d, _)) < 55296 || r > 56319 || _ + 1 === f || (u = l(d, _ + 1)) < 56320 || u > 57343 ? e ? s(d, _) : r : e ? c(d, _, _ + 2) : (r - 55296 << 10) + (u - 56320) + 65536
    }
  };
e.exports = {
  codeAt: u(!1),
  charAt: u(!0)
}