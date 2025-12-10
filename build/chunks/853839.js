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
  S = "DATA_CLONE_ERR",
  I = Chunk154028("Error"),
  T = Chunk154028(v) || function() {
    try {
      new(Chunk154028("MessageChannel") || Chunk10693("worker_threads").MessageChannel)().port1.postMessage(new WeakMap)
    } catch (e) {
      if (module.name === S && 25 === module.code) return module.constructor
    }
  }(),
  C = T && T.prototype,
  A = I.prototype,
  N = Chunk199838.set,
  P = Chunk199838.getterFor(v),
  R = "stack" in new I(v),
  w = function(e) {
    return f(g, e) && g[e].m ? g[e].c : 0
  },
  D = function() {
    Chunk170322(this, x);
    var e = arguments.length,
      t = Chunk759319(module < 1 ? true : arguments[0]),
      n = Chunk759319(module < 2 ? true : arguments[1], "Error"),
      r = w(require);
    if (N(this, {
        type: v,
        name: require,
        message: exports,
        code: Chunk98405
      }), Chunk507604 || (this.name = require, this.message = exports, this.code = Chunk98405), R) {
      var i = new I(exports);
      Chunk154028.name = v, c(this, "stack", Chunk530575(1, Chunk742850(Chunk154028.stack, 1)))
    }
  },
  x = D.prototype = Chunk713411(A),
  L = function(e) {
    return {
      enumerable: true,
      configurable: true,
      get: e
    }
  },
  j = function(e) {
    return L(function() {
      return P(this)[e]
    })
  };
Chunk507604 && (Chunk573078(x, "code", j("code")), Chunk573078(x, "message", j("message")), Chunk573078(x, "name", j("name"))), c(x, "constructor", Chunk530575(1, D));
var M = Chunk621523(function() {
    return !(new T instanceof I)
  }),
  k = M || Chunk621523(function() {
    return A.toString !== Chunk266101 || "2: 1" !== String(new T(1, 2))
  }),
  U = M || Chunk621523(function() {
    return 25 !== new T(1, "DataCloneError").code
  }),
  G = M || 25 !== T[S] || 25 !== C[S],
  Z = Chunk511696 ? k || U || G : M;
Chunk98405({
  global: true,
  constructor: true,
  forced: Z
}, {
  DOMException: Z ? D : T
});
var B = Chunk154028(v),
  F = B.prototype;
for (var V in k && (Chunk511696 || T === B) && Chunk556585(F, "toString", Chunk266101), U && Chunk507604 && T === B && Chunk573078(F, "code", L(function() {
    return w(Chunk179122(this).name)
  })), Chunk17204)
  if (Chunk77025(Chunk17204, V)) {
    var H = Chunk17204[V],
      Y = H.s,
      W = Chunk530575(6, H.c);
    Chunk77025(B, Y) || c(B, Y, W), Chunk77025(F, Y) || c(F, Y, W)
  }