/** Chunk was on web.js **/
/** chunk id: 660694, original params: e (module,exports,re quire) **/
"use strict";
module.exports = function(e, t, n, r) {
  for (var i = 65535 & e, o = e >>> 16 & 65535, a = 0; 0 !== n;) {
    a = n > 2e3 ? 2e3 : n, n -= a;
    do o = o + (i = i + t[r++] | 0) | 0; while (--a);
    i %= 65521, o %= 65521
  }
  return i | o << 16
}