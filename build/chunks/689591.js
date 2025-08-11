/** Chunk was on 50448 **/
/** chunk id: 689591, original params: t,r,n (module,exports,require) **/
"use strict";
var Chunk220159 = require("./220159.js"),
  Chunk517522 = require("./517522.js"),
  Chunk253462 = require("./253462.js"),
  Chunk638875 = require("./638875.js"),
  Chunk971428 = require("./971428.js"),
  Chunk975450 = require("./975450.js"),
  Chunk709583 = require("./709583.js"),
  Chunk578079 = require("./578079.js"),
  Chunk770050 = require("./770050.js"),
  Chunk285007 = require("./285007.js"),
  Chunk342930 = require("./342930.js"),
  Chunk394370 = require("./394370.js"),
  Chunk903438 = require("./903438.js"),
  Chunk12879 = require("./12879.js"),
  d = Chunk638875.PROPER,
  g = Chunk638875.CONFIGURABLE,
  b = Chunk12879.IteratorPrototype,
  m = Chunk12879.BUGGY_SAFARI_ITERATORS,
  S = Chunk394370("iterator"),
  w = "keys",
  O = "values",
  j = "entries",
  A = function() {
    return this
  };
module.exports = function(t, r, n, u, y, x, E) {
  c(n, r, u);
  var T, P, k, I = function(t) {
      if (t === y && R) return R;
      if (!m && t && t in M) return M[t];
      switch (t) {
        case w:
        case O:
        case j:
          return function() {
            return new n(this, t)
          }
      }
      return function() {
        return new n(this)
      }
    },
    F = r + " Iterator",
    D = false,
    M = t.prototype,
    L = M[S] || M["@@iterator"] || y && M[y],
    R = !m && L || I(y),
    C = "Array" === r && M.entries || L;
  if (C && (T = f(C.call(new t))) !== Object.prototype && T.next && (!i && f(T) !== b && (a ? a(T, b) : s(T[S]) || v(T, S, A)), p(T, F, true, true), i && (h[F] = A)), d && y === O && L && L.name !== O && (!i && g ? l(M, "name", O) : (D = true, R = function() {
      return o(L, this)
    })), y)
    if (P = {
        values: I(O),
        keys: x ? R : I(w),
        entries: I(j)
      }, E)
      for (k in P) !m && !D && k in M || v(M, k, P[k]);
    else e({
      target: r,
      proto: true,
      forced: m || D
    }, P);
  return (!i || E) && M[S] !== R && v(M, S, R, {
    name: y
  }), h[r] = R, P
}