/** Chunk was on web.js **/
/** chunk id: 851409, original params: e,t (module,exports,re quire) **/
"use strict";
Object.defineProperty(exports, "__esModule", {
  value: true
}), exports.default = function(e, t, n) {
  let r = 0,
    i = e.length;
  for (; i > 0;) {
    let a = i / 2 | 0,
      o = r + a;
    0 >= n(e[o], t) ? (r = ++o, i -= a + 1) : i = a
  }
  return r
}