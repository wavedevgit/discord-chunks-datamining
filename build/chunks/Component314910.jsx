/** Chunk was on web.js **/
/** chunk id: 314910, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Un: () => p,
  W5: () => m,
  ZP: () => g,
  nz: () => h,
  yP: () => _
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js");

function s(e, t, n) {
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
      s(e, t, n[t])
    })
  }
  return e
}
let {
  Layer: c,
  LayerContainer: u,
  LayerProvider: d,
  layerContext: f
} = (0, Chunk793030.Xvx)("App"), p = u, _ = d, h = f, m = Chunk473749.forwardRef(function(e, t) {
  return (0, r.jsx)(c, {
    children: (0, r.jsx)(o.jRF, l({
      ref: t
    }, e))
  })
}), g = c