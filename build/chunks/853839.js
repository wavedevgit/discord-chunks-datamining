/** Chunk was on web.js **/
/** chunk id: 853839, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk98405 = require("./98405.js"),
  Chunk154028 = require("./154028.js"),
  Chunk10693 = require("./10693.js"),
  Chunk621523 = require("./621523.js"),
  Chunk713411 = require("./713411.js"),
  Chunk530575 = require("./530575.js"),
  c = require("./117895.js").f,
  Chunk556585 = require("./556585.js"),
  Chunk573078 = require("./573078.js"),
  Chunk77025 = require("./77025.js"),
  Chunk170322 = require("./170322.js"),
  Chunk179122 = require("./179122.js"),
  Chunk266101 = require("./266101.js"),
  Chunk759319 = require("./759319.js"),
  Chunk17204 = require("./17204.js"),
  Chunk742850 = require("./742850.js"),
  Chunk199838 = require("./199838.js"),
  Chunk507604 = require("./507604.js"),
  Chunk511696 = require("./511696.js"),
  v = "DOMException",
  I = "DATA_CLONE_ERR",
  T = Chunk154028("Error"),
  S = Chunk154028(v) || function() {
    try {
      new(Chunk154028("MessageChannel") || Chunk10693("worker_threads").MessageChannel)().port1.postMessage(new WeakMap)
    } catch (e) {
      if (module.name === I && 25 === module.code) return module.constructor
    }
  }(),
  A = S && S.prototype,
  C = T.prototype,
  N = Chunk199838.set,
  R = Chunk199838.getterFor(v),
  P = "stack" in new T(v),
  D = function(e) {
    return f(g, e) && g[e].m ? g[e].c : 0
  },
  w = function() {
    Chunk170322(this, L);
    var e = arguments.length,
      t = Chunk759319(module < 1 ? true : arguments[0]),
      n = Chunk759319(module < 2 ? true : arguments[1], "Error"),
      r = D(require);
    if (N(this, {
        type: v,
        name: require,
        message: exports,
        code: Chunk98405
      }), Chunk507604 || (this.name = require, this.message = exports, this.code = Chunk98405), P) {
      var i = new T(exports);
      Chunk154028.name = v, c(this, "stack", Chunk530575(1, Chunk742850(Chunk154028.stack, 1)))
    }
  },
  L = w.prototype = Chunk713411(C),
  x = function(e) {
    return {
      enumerable: true,
      configurable: true,
      get: e
    }
  },
  M = function(e) {
    return x(function() {
      return R(this)[e]
    })
  };
Chunk507604 && (Chunk573078(L, "code", M("code")), Chunk573078(L, "message", M("message")), Chunk573078(L, "name", M("name"))), c(L, "constructor", Chunk530575(1, w));
var j = Chunk621523(function() {
    return !(new S instanceof T)
  }),
  k = j || Chunk621523(function() {
    return C.toString !== Chunk266101 || "2: 1" !== String(new S(1, 2))
  }),
  U = j || Chunk621523(function() {
    return 25 !== new S(1, "DataCloneError").code
  }),
  G = j || 25 !== S[I] || 25 !== A[I],
  B = Chunk511696 ? k || U || G : j;
Chunk98405({
  global: true,
  constructor: true,
  forced: B
}, {
  DOMException: B ? w : S
});
var Z = Chunk154028(v),
  F = Z.prototype;
for (var V in k && (Chunk511696 || S === Z) && Chunk556585(F, "toString", Chunk266101), U && Chunk507604 && S === Z && Chunk573078(F, "code", x(function() {
    return D(Chunk179122(this).name)
  })), Chunk17204)
  if (Chunk77025(Chunk17204, V)) {
    var H = Chunk17204[V],
      Y = H.s,
      W = Chunk530575(6, H.c);
    Chunk77025(Z, Y) || c(Z, Y, W), Chunk77025(F, Y) || c(F, Y, W)
  }