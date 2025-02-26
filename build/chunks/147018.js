/** Chunk was on web.js **/
"use strict";
var r = n(161581),
  i = n(347722).f,
  o = n(251069),
  a = n(859209),
  s = n(492424),
  l = n(381740),
  c = n(474180);
e.exports = function(e, t) {
  var n, u, d, f, _, p = e.target,
    h = e.global,
    g = e.stat;
  if (n = h ? r : g ? r[p] || s(p, {}) : (r[p] || {}).prototype)
    for (u in t) {
      if (f = t[u], d = e.dontCallGetSet ? (_ = i(n, u)) && _.value : n[u], !c(h ? u : p + (g ? "." : "#") + u, e.forced) && void 0 !== d) {
        if (typeof f == typeof d) continue;
        l(f, d)
      }(e.sham || d && d.sham) && o(f, "sham", !0), a(n, u, f, e)
    }
}