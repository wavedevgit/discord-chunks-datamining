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
  g = n(84297),
  m = a.PROPER,
  E = a.CONFIGURABLE,
  v = g.IteratorPrototype,
  b = g.BUGGY_SAFARI_ITERATORS,
  y = p("iterator"),
  O = "keys",
  S = "values",
  I = "entries",
  T = function() {
    return this
  };
e.exports = function(e, t, n, a, p, g, N) {
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
    D = t + " Iterator",
    w = !1,
    L = e.prototype,
    x = L[y] || L["@@iterator"] || p && L[p],
    M = !b && x || P(p),
    k = "Array" === t && L.entries || x;
  if (k && (A = c(k.call(new e))) !== Object.prototype && A.next && (o || c(A) === v || (u ? u(A, v) : s(A[y]) || _(A, y, T)), d(A, D, !0, !0), o && (h[D] = T)), m && p === S && x && x.name !== S && (!o && E ? f(L, "name", S) : (w = !0, M = function() {
      return i(x, this)
    })), p) {
    if (C = {
        values: P(S),
        keys: g ? M : P(O),
        entries: P(I)
      }, N)
      for (R in C) !b && !w && R in L || _(L, R, C[R]);
    else r({
      target: t,
      proto: !0,
      forced: b || w
    }, C)
  }
  return (!o || N) && L[y] !== M && _(L, y, M, {
    name: p
  }), h[t] = M, C
}