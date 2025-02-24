/** Chunk was on web (https://canary.discord.comweb.767fb3b3f685bfe8.js.js) **/
"use strict";
var r = n(161581),
  i = n(824232),
  o = n(957833),
  a = n(996173),
  s = n(251069),
  l = n(641236),
  c = l("iterator"),
  u = l("toStringTag"),
  d = a.values,
  f = function(e, t) {
    if (e) {
      if (e[c] !== d) try {
        s(e, c, d)
      } catch (t) {
        e[c] = d
      }
      if (e[u] || s(e, u, t), i[t]) {
        for (var n in a)
          if (e[n] !== a[n]) try {
            s(e, n, a[n])
          } catch (t) {
            e[n] = a[n]
          }
      }
    }
  };
for (var p in i) f(r[p] && r[p].prototype, p);
f(o, "DOMTokenList")