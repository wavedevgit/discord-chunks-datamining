/** Chunk was on web.js **/
/** chunk id: 130006, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk98405 = require("./98405.js"),
  Chunk580983 = require("./580983.js"),
  Chunk511696 = require("./511696.js"),
  Chunk938373 = require("./938373.js"),
  Chunk880181 = require("./880181.js"),
  Chunk280481 = require("./280481.js"),
  Chunk961050 = require("./961050.js"),
  Chunk769827 = require("./769827.js"),
  Chunk25124 = require("./25124.js"),
  Chunk436207 = require("./436207.js"),
  Chunk556585 = require("./556585.js"),
  Chunk751736 = require("./751736.js"),
  Chunk933121 = require("./933121.js"),
  Chunk112493 = require("./112493.js"),
  g = Chunk938373.PROPER,
  E = Chunk938373.CONFIGURABLE,
  b = Chunk112493.IteratorPrototype,
  y = Chunk112493.BUGGY_SAFARI_ITERATORS,
  O = Chunk751736("iterator"),
  v = "keys",
  I = "values",
  T = "entries",
  S = function() {
    return this
  };
module.exports = function(e, t, n, a, p, m, A) {
  l(n, t, a);
  var N, C, R, P = function(e) {
      if (e === p && M) return M;
      if (!y && e && e in L) return L[e];
      switch (e) {
        case v:
        case I:
        case T:
          return function() {
            return new n(this, e)
          }
      }
      return function() {
        return new n(this)
      }
    },
    w = t + " Iterator",
    D = false,
    L = e.prototype,
    x = L[O] || L["@@iterator"] || p && L[p],
    M = !y && x || P(p),
    j = "Array" === t && L.entries || x;
  if (j && (N = c(j.call(new e))) !== Object.prototype && N.next && (!o && c(N) !== b && (u ? u(N, b) : s(N[O]) || _(N, O, S)), d(N, w, true, true), o && (h[w] = S)), g && p === I && x && x.name !== I && (!o && E ? f(L, "name", I) : (D = true, M = function() {
      return i(x, this)
    })), p)
    if (C = {
        values: P(I),
        keys: m ? M : P(v),
        entries: P(T)
      }, A)
      for (R in C) !y && !D && R in L || _(L, R, C[R]);
    else r({
      target: t,
      proto: true,
      forced: y || D
    }, C);
  return (!o || A) && L[O] !== M && _(L, O, M, {
    name: p
  }), h[t] = M, C
}