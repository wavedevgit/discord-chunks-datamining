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
  S = "values",
  I = "entries",
  T = function() {
    return this
  };
module.exports = function(e, t, n, o, _, m, C) {
  l(n, t, o);
  var A, N, P, w = function(e) {
      if (e === _ && j) return j;
      if (!y && e && e in x) return x[e];
      switch (e) {
        case v:
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
    R = t + " Iterator",
    D = false,
    x = e.prototype,
    L = x[O] || x["@@iterator"] || _ && x[_],
    j = !y && L || w(_),
    M = "Array" === t && x.entries || L;
  if (M && (A = c(M.call(new e))) !== Object.prototype && A.next && (!a && c(A) !== b && (u ? u(A, b) : s(A[O]) || p(A, O, T)), d(A, R, true, true), a && (h[R] = T)), g && _ === S && L && L.name !== S && (!a && E ? f(x, "name", S) : (D = true, j = function() {
      return i(L, this)
    })), _)
    if (N = {
        values: w(S),
        keys: m ? j : w(v),
        entries: w(I)
      }, C)
      for (P in N) !y && !D && P in x || p(x, P, N[P]);
    else r({
      target: t,
      proto: true,
      forced: y || D
    }, N);
  return (!a || C) && x[O] !== j && p(x, O, j, {
    name: _
  }), h[t] = j, N
}