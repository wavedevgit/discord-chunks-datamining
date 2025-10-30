/** Chunk was on web.js **/
/** chunk id: 390827, original params: e,t,n (module,exports,re quire) **/
"use strict";
var r, i, a, o, Chunk127849 = require("./127849.js"),
  Chunk636881 = require("./636881.js"),
  Chunk48657 = require("./48657.js"),
  Chunk880181 = require("./880181.js"),
  Chunk77025 = require("./77025.js"),
  Chunk621523 = require("./621523.js"),
  Chunk620394 = require("./620394.js"),
  Chunk992174 = require("./992174.js"),
  Chunk809290 = require("./809290.js"),
  Chunk338045 = require("./338045.js"),
  Chunk266782 = require("./266782.js"),
  Chunk426625 = require("./426625.js"),
  b = Chunk127849.setImmediate,
  y = Chunk127849.clearImmediate,
  O = Chunk127849.process,
  v = Chunk127849.Dispatch,
  I = Chunk127849.Function,
  T = Chunk127849.MessageChannel,
  S = Chunk127849.String,
  A = 0,
  C = {},
  N = "onreadystatechange";
Chunk621523(function() {
  r = Chunk127849.location
});
var R = function(e) {
    if (d(C, e)) {
      var t = C[e];
      delete C[e], t()
    }
  },
  P = function(e) {
    return function() {
      R(e)
    }
  },
  w = function(e) {
    R(e.data)
  },
  D = function(e) {
    s.postMessage(S(e), r.protocol + "//" + r.host)
  };
b && y || (b = function(e) {
  m(arguments.length, 1);
  var t = u(e) ? e : I(e),
    n = p(arguments, 1);
  return C[++A] = function() {
    l(t, true, n)
  }, i(A), A
}, y = function(e) {
  delete C[e]
}, Chunk426625 ? i = function(e) {
  O.nextTick(P(e))
} : v && v.now ? i = function(e) {
  v.now(P(e))
} : T && !Chunk266782 ? (o = (a = new T).port2, a.port1.onmessage = w, i = Chunk48657(o.postMessage, o)) : Chunk127849.addEventListener && Chunk880181(Chunk127849.postMessage) && !Chunk127849.importScripts && r && "file:" !== r.protocol && !Chunk621523(D) ? (i = D, Chunk127849.addEventListener("message", w, false)) : i = N in Chunk809290("script") ? function(e) {
  _.appendChild(h("script"))[N] = function() {
    _.removeChild(this), R(e)
  }
} : function(e) {
  setTimeout(P(e), 0)
}), module.exports = {
  set: b,
  clear: y
}