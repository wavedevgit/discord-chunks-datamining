/** Chunk was on web.js **/
"use strict";
var r = n(98405),
  i = n(580983),
  a = n(511696),
  o = n(938373),
  s = n(880181),
  l = n(280481),
  c = n(961050),
  u = n(769827),
  d = n(25124),
  f = n(436207),
  _ = n(556585),
  p = n(751736),
  h = n(933121),
  m = n(112493),
  g = o.PROPER,
  E = o.CONFIGURABLE,
  b = m.IteratorPrototype,
  y = m.BUGGY_SAFARI_ITERATORS,
  O = p("iterator"),
  v = "keys",
  I = "values",
  S = "entries",
  T = function() {
    return this
  };
e.exports = function(e, t, n, o, p, m, A) {
  l(n, t, o);
  var N, C, P, R = function(e) {
      if (e === p && k) return k;
      if (!y && e && e in L) return L[e];
      switch (e) {
        case v:
        case I:
        case S:
          return function() {
            return new n(this, e)
          }
      }
      return function() {
        return new n(this)
      }
    },
    w = t + " Iterator",
    D = !1,
    L = e.prototype,
    x = L[O] || L["@@iterator"] || p && L[p],
    k = !y && x || R(p),
    M = "Array" === t && L.entries || x;
  if (M && (N = c(M.call(new e))) !== Object.prototype && N.next && (!a && c(N) !== b && (u ? u(N, b) : s(N[O]) || _(N, O, T)), d(N, w, !0, !0), a && (h[w] = T)), g && p === I && x && x.name !== I && (!a && E ? f(L, "name", I) : (D = !0, k = function() {
      return i(x, this)
    })), p)
    if (C = {
        values: R(I),
        keys: m ? k : R(v),
        entries: R(S)
      }, A)
      for (P in C) !y && !D && P in L || _(L, P, C[P]);
    else r({
      target: t,
      proto: !0,
      forced: y || D
    }, C);
  return (!a || A) && L[O] !== k && _(L, O, k, {
    name: p
  }), h[t] = k, C
}