/** Chunk was on web.js **/
/** chunk id: 408278, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  K: () => o
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk219869 = require("./219869.jsx");

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function s(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      a(e, t, n[t])
    })
  }
  return e
}

function o(e) {
  return (0, r.jsx)(i.T, s({}, e))
}