/** Chunk was on web (https://canary.discord.comweb.a4687b32e07d48ae.js.js) **/
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
  p = n(859209),
  _ = n(641236),
  h = n(874652),
  m = n(84297),
  g = a.PROPER,
  E = a.CONFIGURABLE,
  v = m.IteratorPrototype,
  b = m.BUGGY_SAFARI_ITERATORS,
  y = _("iterator"),
  O = "keys",
  S = "values",
  I = "entries",
  T = function() {
    return this
  };
e.exports = function(e, t, n, a, _, m, N) {
  l(n, t, a);
  var A, C, R, P = function(e) {
      if (e === _ && M) return M;
      if (!b && e && e in x) return x[e];
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
    x = e.prototype,
    L = x[y] || x["@@iterator"] || _ && x[_],
    M = !b && L || P(_),
    k = "Array" === t && x.entries || L;
  if (k && (A = c(k.call(new e))) !== Object.prototype && A.next && (o || c(A) === v || (u ? u(A, v) : s(A[y]) || p(A, y, T)), d(A, w, !0, !0), o && (h[w] = T)), g && _ === S && L && L.name !== S && (!o && E ? f(x, "name", S) : (D = !0, M = function() {
      return i(L, this)
    })), _) {
    if (C = {
        values: P(S),
        keys: m ? M : P(O),
        entries: P(I)
      }, N)
      for (R in C) !b && !D && R in x || p(x, R, C[R]);
    else r({
      target: t,
      proto: !0,
      forced: b || D
    }, C)
  }
  return (!o || N) && x[y] !== M && p(x, y, M, {
    name: _
  }), h[t] = M, C
}