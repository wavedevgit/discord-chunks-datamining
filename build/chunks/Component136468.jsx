/** Chunk was on web.js **/
/** chunk id: 136468, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  r: () => c
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk402453 = require("./402453.jsx"),
  Chunk325780 = require("./325780.jsx"),
  Chunk305945 = require("./305945.jsx");

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

function c(e) {
  return (0, i.A)("Switch") ? (0, r.jsx)(a.k, l({}, e)) : (0, r.jsx)(o.T, l({}, e))
}