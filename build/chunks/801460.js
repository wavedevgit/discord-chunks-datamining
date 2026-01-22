/** Chunk was on web.js **/
/** chunk id: 801460, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk557939 = require("./557939.js"),
  Chunk230606 = require("./230606.js"),
  Chunk53132 = require("./53132.js"),
  Chunk503628 = require("./503628.js"),
  Chunk482779 = require("./482779.js"),
  Chunk231977 = require("./231977.js"),
  c = require("./4940.js").f,
  Chunk693655 = require("./693655.js"),
  Chunk485155 = require("./485155.js"),
  Chunk210140 = require("./210140.js"),
  Chunk61132 = require("./61132.js"),
  Chunk101968 = require("./101968.js"),
  Chunk515655 = require("./515655.js"),
  Chunk862784 = require("./862784.js"),
  Chunk753609 = require("./753609.js"),
  Chunk949186 = require("./949186.js"),
  Chunk883972 = require("./883972.js"),
  Chunk257943 = require("./257943.js"),
  Chunk105712 = require("./105712.js"),
  A = "DOMException",
  v = "DATA_CLONE_ERR",
  S = Chunk230606("Error"),
  I = Chunk230606(A) || function() {
    try {
      new(i("MessageChannel") || a("worker_threads").MessageChannel)().port1.postMessage(new WeakMap)
    } catch (e) {
      if (e.name === v && 25 === e.code) return e.constructor
    }
  }(),
  T = I && I.prototype,
  C = S.prototype,
  N = Chunk883972.set,
  R = Chunk883972.getterFor(A),
  w = "stack" in new S(A),
  P = function(e) {
    return f(g, e) && g[e].m ? g[e].c : 0
  },
  D = function() {
    p(this, x);
    var e = arguments.length,
      t = m(e < 1 ? true : arguments[0]),
      n = m(e < 2 ? true : arguments[1], "Error"),
      r = P(n);
    if (N(this, {
        type: A,
        name: n,
        message: t,
        code: r
      }), y || (this.name = n, this.message = t, this.code = r), w) {
      var i = new S(t);
      i.name = A, c(this, "stack", l(1, E(i.stack, 1)))
    }
  },
  x = D.prototype = Chunk482779(C),
  L = function(e) {
    return {
      enumerable: true,
      configurable: true,
      get: e
    }
  },
  j = function(e) {
    return L(function() {
      return R(this)[e]
    })
  };
Chunk257943 && (Chunk485155(x, "code", j("code")), Chunk485155(x, "message", j("message")), Chunk485155(x, "name", j("name"))), c(x, "constructor", Chunk231977(1, D));
var M = Chunk503628(function() {
    return !(new I instanceof S)
  }),
  k = M || Chunk503628(function() {
    return C.toString !== h || "2: 1" !== String(new I(1, 2))
  }),
  U = M || Chunk503628(function() {
    return 25 !== new I(1, "DataCloneError").code
  }),
  G = M || 25 !== I[v] || 25 !== T[v],
  V = Chunk105712 ? k || U || G : M;
Chunk557939({
  global: true,
  constructor: true,
  forced: V
}, {
  DOMException: V ? D : I
});
var F = Chunk230606(A),
  B = F.prototype;
for (var H in k && (Chunk105712 || I === F) && Chunk693655(B, "toString", Chunk515655), U && Chunk257943 && I === F && Chunk485155(B, "code", L(function() {
    return P(_(this).name)
  })), Chunk753609)
  if (Chunk210140(Chunk753609, H)) {
    var Y = Chunk753609[H],
      W = Y.s,
      K = Chunk231977(6, Y.c);
    Chunk210140(F, W) || c(F, W, K), Chunk210140(B, W) || c(B, W, K)
  }