/** Chunk was on web.js **/
/** chunk id: 962100, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  y: () => s
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function a(e) {
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

function s(e) {
  (0, i.ZDy)(async () => {
    let {
      default: t
    } = await Promise.all([n.e("32996"), n.e("74023")]).then(n.bind(n, 431583));
    return n => (0, r.jsx)(t, a({
      source: e
    }, n))
  })
}