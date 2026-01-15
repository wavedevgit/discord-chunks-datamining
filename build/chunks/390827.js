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
  S = Chunk127849.Function,
  I = Chunk127849.MessageChannel,
  T = Chunk127849.String,
  C = 0,
  A = {},
  N = "onreadystatechange";
Chunk621523(function() {
  r = s.location
});
var P = function(e) {
    if (d(A, e)) {
      var t = A[e];
      delete A[e], t()
    }
  },
  w = function(e) {
    return function() {
      P(e)
    }
  },
  R = function(e) {
    P(e.data)
  },
  D = function(e) {
    s.postMessage(T(e), r.protocol + "//" + r.host)
  };
b && y || (b = function(e) {
  m(arguments.length, 1);
  var t = u(e) ? e : S(e),
    n = _(arguments, 1);
  return A[++C] = function() {
    l(t, true, n)
  }, i(C), C
}, y = function(e) {
  delete A[e]
}, Chunk426625 ? i = function(e) {
  O.nextTick(w(e))
} : v && v.now ? i = function(e) {
  v.now(w(e))
} : I && !Chunk266782 ? (o = (a = new I).port2, a.port1.onmessage = R, i = Chunk48657(o.postMessage, o)) : Chunk127849.addEventListener && Chunk880181(Chunk127849.postMessage) && !Chunk127849.importScripts && r && "file:" !== r.protocol && !Chunk621523(D) ? (i = D, Chunk127849.addEventListener("message", R, false)) : i = N in Chunk809290("script") ? function(e) {
  p.appendChild(h("script"))[N] = function() {
    p.removeChild(this), P(e)
  }
} : function(e) {
  setTimeout(w(e), 0)
}), module.exports = {
  set: b,
  clear: y
}