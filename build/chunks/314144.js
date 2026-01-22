/** Chunk was on web.js **/
/** chunk id: 314144, original params: e,t,n (module,exports,re quire) **/
"use strict";
var r, i, a, s, Chunk860511 = require("./860511.js"),
  Chunk985848 = require("./985848.js"),
  Chunk221015 = require("./221015.js"),
  Chunk339626 = require("./339626.js"),
  Chunk210140 = require("./210140.js"),
  Chunk503628 = require("./503628.js"),
  Chunk469520 = require("./469520.js"),
  Chunk192819 = require("./192819.js"),
  Chunk447280 = require("./447280.js"),
  Chunk627 = require("./627.js"),
  Chunk705333 = require("./705333.js"),
  Chunk13570 = require("./13570.js"),
  b = Chunk860511.setImmediate,
  y = Chunk860511.clearImmediate,
  O = Chunk860511.process,
  A = Chunk860511.Dispatch,
  v = Chunk860511.Function,
  S = Chunk860511.MessageChannel,
  I = Chunk860511.String,
  T = 0,
  C = {},
  N = "onreadystatechange";
Chunk503628(function() {
  r = o.location
});
var R = function(e) {
    if (d(C, e)) {
      var t = C[e];
      delete C[e], t()
    }
  },
  w = function(e) {
    return function() {
      R(e)
    }
  },
  P = function(e) {
    R(e.data)
  },
  D = function(e) {
    o.postMessage(I(e), r.protocol + "//" + r.host)
  };
b && y || (b = function(e) {
  m(arguments.length, 1);
  var t = u(e) ? e : v(e),
    n = _(arguments, 1);
  return C[++T] = function() {
    l(t, true, n)
  }, i(T), T
}, y = function(e) {
  delete C[e]
}, Chunk13570 ? i = function(e) {
  O.nextTick(w(e))
} : A && A.now ? i = function(e) {
  A.now(w(e))
} : S && !Chunk705333 ? (s = (a = new S).port2, a.port1.onmessage = P, i = Chunk221015(s.postMessage, s)) : Chunk860511.addEventListener && Chunk339626(Chunk860511.postMessage) && !Chunk860511.importScripts && r && "file:" !== r.protocol && !Chunk503628(D) ? (i = D, Chunk860511.addEventListener("message", P, false)) : i = N in Chunk447280("script") ? function(e) {
  p.appendChild(h("script"))[N] = function() {
    p.removeChild(this), R(e)
  }
} : function(e) {
  setTimeout(w(e), 0)
}), module.exports = {
  set: b,
  clear: y
}