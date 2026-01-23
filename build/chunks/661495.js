/** Chunk was on web.js **/
/** chunk id: 661495, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk557939 = require("./557939.js"),
  Chunk446474 = require("./446474.js"),
  Chunk105712 = require("./105712.js"),
  Chunk814113 = require("./814113.js"),
  Chunk339626 = require("./339626.js"),
  Chunk23277 = require("./23277.js"),
  Chunk42756 = require("./42756.js"),
  Chunk458680 = require("./458680.js"),
  Chunk174168 = require("./174168.js"),
  Chunk706938 = require("./706938.js"),
  Chunk693655 = require("./693655.js"),
  Chunk380744 = require("./380744.js"),
  Chunk70670 = require("./70670.js"),
  Chunk248876 = require("./248876.js"),
  g = Chunk814113.PROPER,
  E = Chunk814113.CONFIGURABLE,
  y = Chunk248876.IteratorPrototype,
  b = Chunk248876.BUGGY_SAFARI_ITERATORS,
  O = Chunk380744("iterator"),
  v = "keys",
  A = "values",
  I = "entries",
  S = function() {
    return this
  };
module.exports = function(e, t, n, s, _, m, T) {
  l(n, t, s);
  var C, N, w, R = function(e) {
      if (e === _ && j) return j;
      if (!b && e && e in x) return x[e];
      switch (e) {
        case v:
        case A:
        case I:
          return function() {
            return new n(this, e)
          }
      }
      return function() {
        return new n(this)
      }
    },
    P = t + " Iterator",
    D = false,
    x = e.prototype,
    L = x[O] || x["@@iterator"] || _ && x[_],
    j = !b && L || R(_),
    M = "Array" === t && x.entries || L;
  if (M && (C = c(M.call(new e))) !== Object.prototype && C.next && (!a && c(C) !== y && (u ? u(C, y) : o(C[O]) || p(C, O, S)), d(C, P, true, true), a && (h[P] = S)), g && _ === A && L && L.name !== A && (!a && E ? f(x, "name", A) : (D = true, j = function() {
      return i(L, this)
    })), _)
    if (N = {
        values: R(A),
        keys: m ? j : R(v),
        entries: R(I)
      }, T)
      for (w in N) !b && !D && w in x || p(x, w, N[w]);
    else r({
      target: t,
      proto: true,
      forced: b || D
    }, N);
  return (!a || T) && x[O] !== j && p(x, O, j, {
    name: _
  }), h[t] = j, N
}