/** Chunk was on web.js **/
/** chunk id: 660694, original params: e (module,exports,re quire) **/
"use strict";
module.exports = function(e, t, n, r) {
  for (var i = 65535 & e, a = e >>> 16 & 65535, o = 0; 0 !== n;) {
    o = n > 2e3 ? 2e3 : n, n -= o;
    do a = a + (i = i + t[r++] | 0) | 0; while (--o);
    i %= 65521, a %= 65521
  }
  return i | a << 16
}