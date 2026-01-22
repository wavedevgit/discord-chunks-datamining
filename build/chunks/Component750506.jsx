/** Chunk was on web.js **/
/** chunk id: 750506, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => g,
  C8: () => p,
  Yf: () => _,
  nE: () => m,
  uY: () => h
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk397927 = require("./397927.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function l(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      o(e, t, n[t])
    })
  }
  return e
}
let {
  Layer: c,
  LayerContainer: u,
  LayerProvider: d,
  layerContext: f
} = (0, Chunk158954.AyR)("App"), p = u, _ = d, h = f, m = Chunk64700.forwardRef(function(e, t) {
  return (0, r.jsx)(c, {
    children: (0, r.jsx)(s.QCO, l({
      ref: t
    }, e))
  })
}), g = c