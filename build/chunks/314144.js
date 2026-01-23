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
  y = Chunk860511.setImmediate,
  b = Chunk860511.clearImmediate,
  O = Chunk860511.process,
  v = Chunk860511.Dispatch,
  A = Chunk860511.Function,
  I = Chunk860511.MessageChannel,
  S = Chunk860511.String,
  T = 0,
  C = {},
  N = "onreadystatechange";
Chunk503628(function() {
  r = o.location
});
var w = function(e) {
    if (d(C, e)) {
      var t = C[e];
      delete C[e], t()
    }
  },
  R = function(e) {
    return function() {
      w(e)
    }
  },
  P = function(e) {
    w(e.data)
  },
  D = function(e) {
    o.postMessage(S(e), r.protocol + "//" + r.host)
  };
y && b || (y = function(e) {
  m(arguments.length, 1);
  var t = u(e) ? e : A(e),
    n = _(arguments, 1);
  return C[++T] = function() {
    l(t, true, n)
  }, i(T), T
}, b = function(e) {
  delete C[e]
}, Chunk13570 ? i = function(e) {
  O.nextTick(R(e))
} : v && v.now ? i = function(e) {
  v.now(R(e))
} : I && !Chunk705333 ? (s = (a = new I).port2, a.port1.onmessage = P, i = Chunk221015(s.postMessage, s)) : Chunk860511.addEventListener && Chunk339626(Chunk860511.postMessage) && !Chunk860511.importScripts && r && "file:" !== r.protocol && !Chunk503628(D) ? (i = D, Chunk860511.addEventListener("message", P, false)) : i = N in Chunk447280("script") ? function(e) {
  p.appendChild(h("script"))[N] = function() {
    p.removeChild(this), w(e)
  }
} : function(e) {
  setTimeout(R(e), 0)
}), module.exports = {
  set: y,
  clear: b
}