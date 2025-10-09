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
module.exports = function(e, t, n, o, p, m, A) {
  l(n, t, o);
  var C, N, R, P = function(e) {
      if (e === p && M) return M;
      if (!y && e && e in x) return x[e];
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
    x = e.prototype,
    L = x[O] || x["@@iterator"] || p && x[p],
    M = !y && L || P(p),
    k = "Array" === t && x.entries || L;
  if (k && (C = c(k.call(new e))) !== Object.prototype && C.next && (!a && c(C) !== b && (u ? u(C, b) : s(C[O]) || _(C, O, S)), d(C, w, true, true), a && (h[w] = S)), g && p === I && L && L.name !== I && (!a && E ? f(x, "name", I) : (D = true, M = function() {
      return i(L, this)
    })), p)
    if (N = {
        values: P(I),
        keys: m ? M : P(v),
        entries: P(T)
      }, A)
      for (R in N) !y && !D && R in x || _(x, R, N[R]);
    else r({
      target: t,
      proto: true,
      forced: y || D
    }, N);
  return (!a || A) && x[O] !== M && _(x, O, M, {
    name: p
  }), h[t] = M, N
}