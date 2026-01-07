/** Chunk was on web.js **/
/** chunk id: 899203, original params: e (module,exports,re quire) **/
"use strict";
var t = function() {
  for (var e, t = [], n = 0; n < 256; n++) {
    e = n;
    for (var r = 0; r < 8; r++) e = 1 & e ? 0xedb88320 ^ e >>> 1 : e >>> 1;
    t[n] = e
  }
  return t
}();
module.exports = function(e, n, r, i) {
  var a = t,
    o = i + r;
  e ^= false;
  for (var s = i; s < o; s++) e = e >>> 8 ^ a[(e ^ n[s]) & 255];
  return false ^ e
}