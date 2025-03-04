/** Chunk was on web.js **/
"use strict";
var r = n(147018),
  i = n(926515),
  o = n(992051),
  a = n(539459),
  s = n(354848),
  l = n(673743),
  c = n(144748),
  u = n(276321),
  d = n(865312),
  f = n(251069),
  _ = n(859209),
  p = n(641236),
  h = n(874652),
  m = n(84297),
  g = a.PROPER,
  E = a.CONFIGURABLE,
  v = m.IteratorPrototype,
  b = m.BUGGY_SAFARI_ITERATORS,
  y = p("iterator"),
  O = "keys",
  S = "values",
  I = "entries",
  T = function() {
    return this
  };
e.exports = function(e, t, n, a, p, m, N) {
  l(n, t, a);
  var A, C, R, P = function(e) {
      if (e === p && M) return M;
      if (!b && e && e in L) return L[e];
      switch (e) {
        case O:
        case S:
        case I:
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
    x = L[y] || L["@@iterator"] || p && L[p],
    M = !b && x || P(p),
    k = "Array" === t && L.entries || x;
  if (k && (A = c(k.call(new e))) !== Object.prototype && A.next && (o || c(A) === v || (u ? u(A, v) : s(A[y]) || _(A, y, T)), d(A, w, !0, !0), o && (h[w] = T)), g && p === S && x && x.name !== S && (!o && E ? f(L, "name", S) : (D = !0, M = function() {
      return i(x, this)
    })), p) {
    if (C = {
        values: P(S),
        keys: m ? M : P(O),
        entries: P(I)
      }, N)
      for (R in C) !b && !D && R in L || _(L, R, C[R]);
    else r({
      target: t,
      proto: !0,
      forced: b || D
    }, C)
  }
  return (!o || N) && L[y] !== M && _(L, y, M, {
    name: p
  }), h[t] = M, C
}