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
  v = p("iterator"),
  O = "keys",
  I = "values",
  S = "entries",
  T = function() {
    return this
  };
e.exports = function(e, t, n, o, p, m, A) {
  l(n, t, o);
  var N, C, R, P = function(e) {
      if (e === p && M) return M;
      if (!y && e && e in L) return L[e];
      switch (e) {
        case O:
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
    x = L[v] || L["@@iterator"] || p && L[p],
    M = !y && x || P(p),
    k = "Array" === t && L.entries || x;
  if (k && (N = c(k.call(new e))) !== Object.prototype && N.next && (!a && c(N) !== b && (u ? u(N, b) : s(N[v]) || _(N, v, T)), d(N, w, !0, !0), a && (h[w] = T)), g && p === I && x && x.name !== I && (!a && E ? f(L, "name", I) : (D = !0, M = function() {
      return i(x, this)
    })), p)
    if (C = {
        values: P(I),
        keys: m ? M : P(O),
        entries: P(S)
      }, A)
      for (R in C) !y && !D && R in L || _(L, R, C[R]);
    else r({
      target: t,
      proto: !0,
      forced: y || D
    }, C);
  return (!a || A) && L[v] !== M && _(L, v, M, {
    name: p
  }), h[t] = M, C
}