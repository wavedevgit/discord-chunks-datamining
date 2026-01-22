/** Chunk was on 35511 **/
/** chunk id: 282532, original params: e,t,n (module,exports,require) **/
"use strict";
var r, a, o, i, Chunk308227 = require("./308227.js"),
  Chunk421236 = require("./421236.js"),
  Chunk241091 = require("./241091.js"),
  Chunk309270 = require("./309270.js"),
  Chunk512008 = require("./512008.js"),
  Chunk486816 = require("./486816.js"),
  Chunk784932 = require("./784932.js"),
  Chunk596479 = require("./596479.js"),
  Chunk273900 = require("./273900.js"),
  Chunk978887 = require("./978887.js"),
  Chunk124673 = require("./124673.js"),
  Chunk184110 = require("./184110.js"),
  b = Chunk308227.setImmediate,
  A = Chunk308227.clearImmediate,
  _ = Chunk308227.process,
  k = Chunk308227.Dispatch,
  C = Chunk308227.Function,
  w = Chunk308227.MessageChannel,
  S = Chunk308227.String,
  N = 0,
  x = {},
  P = "onreadystatechange";
Chunk486816(function() {
  r = s.location
});
var R = function(e) {
    if (d(x, e)) {
      var t = x[e];
      delete x[e], t()
    }
  },
  F = function(e) {
    return function() {
      R(e)
    }
  },
  O = function(e) {
    R(e.data)
  },
  E = function(e) {
    s.postMessage(S(e), r.protocol + "//" + r.host)
  };
b && A || (b = function(e) {
  y(arguments.length, 1);
  var t = u(e) ? e : C(e),
    n = f(arguments, 1);
  return x[++N] = function() {
    l(t, true, n)
  }, a(N), N
}, A = function(e) {
  delete x[e]
}, Chunk184110 ? a = function(e) {
  _.nextTick(F(e))
} : k && k.now ? a = function(e) {
  k.now(F(e))
} : w && !Chunk124673 ? (i = (o = new w).port2, o.port1.onmessage = O, a = Chunk241091(i.postMessage, i)) : Chunk308227.addEventListener && Chunk309270(Chunk308227.postMessage) && !Chunk308227.importScripts && r && "file:" !== r.protocol && !Chunk486816(E) ? (a = E, Chunk308227.addEventListener("message", O, false)) : a = P in Chunk273900("script") ? function(e) {
  h.appendChild(m("script"))[P] = function() {
    h.removeChild(this), R(e)
  }
} : function(e) {
  setTimeout(F(e), 0)
}), module.exports = {
  set: b,
  clear: A
}