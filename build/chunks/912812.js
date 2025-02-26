/** Chunk was on web.js **/
"use strict";
var r = n(498576),
  i = n(49693),
  o = n(886960),
  a = n(566885),
  s = function(e, t, n, l, c, u, d, f) {
    for (var _, p, h = c, g = 0, m = !!d && a(d, f); g < l;) g in n && (_ = m ? m(n[g], g, t) : n[g], u > 0 && r(_) ? (p = i(_), h = s(e, t, _, p, h, u - 1) - 1) : (o(h + 1), e[h] = _), h++), g++;
    return h
  };
e.exports = s