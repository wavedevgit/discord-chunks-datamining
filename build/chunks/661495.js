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
module.exports = function(e, t, n, o, _, m, T) {
  l(n, t, o);
  var C, N, w, R = function(e) {
      if (e === _ && M) return M;
      if (!b && e && e in L) return L[e];
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
    L = e.prototype,
    x = L[O] || L["@@iterator"] || _ && L[_],
    M = !b && x || R(_),
    j = "Array" === t && L.entries || x;
  if (j && (C = c(j.call(new e))) !== Object.prototype && C.next && (!a && c(C) !== y && (u ? u(C, y) : s(C[O]) || p(C, O, S)), d(C, P, true, true), a && (h[P] = S)), g && _ === A && x && x.name !== A && (!a && E ? f(L, "name", A) : (D = true, M = function() {
      return i(x, this)
    })), _)
    if (N = {
        values: R(A),
        keys: m ? M : R(v),
        entries: R(I)
      }, T)
      for (w in N) !b && !D && w in L || p(L, w, N[w]);
    else r({
      target: t,
      proto: true,
      forced: b || D
    }, N);
  return (!a || T) && L[O] !== M && p(L, O, M, {
    name: _
  }), h[t] = M, N
}