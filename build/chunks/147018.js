/** Chunk was on web (https://canary.discord.comweb.a4687b32e07d48ae.js.js) **/
"use strict";
var r = n(161581),
  i = n(347722).f,
  o = n(251069),
  a = n(859209),
  s = n(492424),
  l = n(381740),
  c = n(474180);
e.exports = function(e, t) {
  var n, u, d, f, p, _ = e.target,
    h = e.global,
    m = e.stat;
  if (n = h ? r : m ? r[_] || s(_, {}) : (r[_] || {}).prototype)
    for (u in t) {
      if (f = t[u], d = e.dontCallGetSet ? (p = i(n, u)) && p.value : n[u], !c(h ? u : _ + (m ? "." : "#") + u, e.forced) && void 0 !== d) {
        if (typeof f == typeof d) continue;
        l(f, d)
      }(e.sham || d && d.sham) && o(f, "sham", !0), a(n, u, f, e)
    }
}