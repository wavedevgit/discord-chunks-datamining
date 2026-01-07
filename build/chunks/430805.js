/** Chunk was on 23357 **/
/** chunk id: 430805, original params: e,t,n (module,exports,require) **/
"use strict";
var r, o, a, i, Chunk424353 = require("./424353.js"),
  Chunk498996 = require("./498996.js"),
  Chunk324474 = require("./324474.js"),
  Chunk971428 = require("./971428.js"),
  Chunk185698 = require("./185698.js"),
  Chunk779688 = require("./779688.js"),
  Chunk604417 = require("./604417.js"),
  Chunk689933 = require("./689933.js"),
  Chunk442119 = require("./442119.js"),
  Chunk592802 = require("./592802.js"),
  Chunk179156 = require("./179156.js"),
  Chunk270301 = require("./270301.js"),
  b = Chunk424353.setImmediate,
  _ = Chunk424353.clearImmediate,
  k = Chunk424353.process,
  C = Chunk424353.Dispatch,
  Z = Chunk424353.Function,
  w = Chunk424353.MessageChannel,
  S = Chunk424353.String,
  N = 0,
  x = {},
  P = "onreadystatechange";
Chunk779688(function() {
  r = s.location
});
var A = function(e) {
    if (d(x, e)) {
      var t = x[e];
      delete x[e], t()
    }
  },
  R = function(e) {
    return function() {
      A(e)
    }
  },
  F = function(e) {
    A(e.data)
  },
  E = function(e) {
    s.postMessage(S(e), r.protocol + "//" + r.host)
  };
b && _ || (b = function(e) {
  y(arguments.length, 1);
  var t = u(e) ? e : Z(e),
    n = f(arguments, 1);
  return x[++N] = function() {
    c(t, true, n)
  }, o(N), N
}, _ = function(e) {
  delete x[e]
}, Chunk270301 ? o = function(e) {
  k.nextTick(R(e))
} : C && C.now ? o = function(e) {
  C.now(R(e))
} : w && !Chunk179156 ? (i = (a = new w).port2, a.port1.onmessage = F, o = Chunk324474(i.postMessage, i)) : Chunk424353.addEventListener && Chunk971428(Chunk424353.postMessage) && !Chunk424353.importScripts && r && "file:" !== r.protocol && !Chunk779688(E) ? (o = E, Chunk424353.addEventListener("message", F, false)) : o = P in Chunk442119("script") ? function(e) {
  h.appendChild(m("script"))[P] = function() {
    h.removeChild(this), A(e)
  }
} : function(e) {
  setTimeout(R(e), 0)
}), module.exports = {
  set: b,
  clear: _
}