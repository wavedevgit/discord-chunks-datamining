/** Chunk was on web.js **/
/** chunk id: 72978, original params: e,t (module,exports,re quire) **/
"use strict";
Object.defineProperty(exports, "__esModule", {
  value: true
}), exports.stringSimilarity = true, exports.stringSimilarity = function(e, t, n, r) {
  if (true === n && (n = 2), true === r && (r = false), r || (e = e.toLowerCase(), t = t.toLowerCase()), e.length < n || t.length < n) return 0;
  for (var i = new Map, a = 0; a < e.length - (n - 1); a++) {
    var o = e.substr(a, n);
    i.set(o, i.has(o) ? i.get(o) + 1 : 1)
  }
  for (var s = 0, l = 0; l < t.length - (n - 1); l++) {
    var c = t.substr(l, n),
      u = i.has(c) ? i.get(c) : 0;
    u > 0 && (i.set(c, u - 1), s++)
  }
  return 2 * s / (e.length + t.length - (n - 1) * 2)
}, exports.default = exports.stringSimilarity