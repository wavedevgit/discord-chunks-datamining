/** Chunk was on 94678 **/
/** chunk id: 735451, original params: t,r,e (module,exports,require) **/
"use strict";
var Chunk834647 = require("./834647.js"),
  Chunk664886 = require("./664886.js"),
  Chunk780940 = require("./780940.js"),
  Chunk968613 = require("./968613.js"),
  Chunk309270 = require("./309270.js"),
  Chunk265033 = require("./265033.js"),
  Chunk517480 = require("./517480.js"),
  Chunk740628 = require("./740628.js"),
  Chunk469516 = require("./469516.js"),
  Chunk180734 = require("./180734.js"),
  Chunk735811 = require("./735811.js"),
  Chunk61748 = require("./61748.js"),
  Chunk158610 = require("./158610.js"),
  Chunk583296 = require("./583296.js"),
  d = Chunk968613.PROPER,
  g = Chunk968613.CONFIGURABLE,
  b = Chunk583296.IteratorPrototype,
  m = Chunk583296.BUGGY_SAFARI_ITERATORS,
  S = Chunk61748("iterator"),
  w = "keys",
  O = "values",
  j = "entries",
  A = function() {
    return this
  };
module.exports = function(t, r, e, i, y, x, E) {
  c(e, r, i);
  var T, P, k, I = function(t) {
      if (t === y && R) return R;
      if (!m && t && t in M) return M[t];
      switch (t) {
        case w:
        case O:
        case j:
          return function() {
            return new e(this, t)
          }
      }
      return function() {
        return new e(this)
      }
    },
    F = r + " Iterator",
    D = false,
    M = t.prototype,
    L = M[S] || M["@@iterator"] || y && M[y],
    R = !m && L || I(y),
    C = "Array" === r && M.entries || L;
  if (C && (T = a(C.call(new t))) !== Object.prototype && T.next && (!s && a(T) !== b && (f ? f(T, b) : u(T[S]) || v(T, S, A)), p(T, F, true, true), s && (h[F] = A)), d && y === O && L && L.name !== O && (!s && g ? l(M, "name", O) : (D = true, R = function() {
      return o(L, this)
    })), y)
    if (P = {
        values: I(O),
        keys: x ? R : I(w),
        entries: I(j)
      }, E)
      for (k in P) !m && !D && k in M || v(M, k, P[k]);
    else n({
      target: r,
      proto: true,
      forced: m || D
    }, P);
  return (!s || E) && M[S] !== R && v(M, S, R, {
    name: y
  }), h[r] = R, P
}