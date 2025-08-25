/** Chunk was on web.js **/
/** chunk id: 725380, original params: e,t,n (module,exports,re quire) **/
"use strict";

function r(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function i(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      r(e, t, n[t])
    })
  }
  return e
}
require.d(exports, {
  $E: () => u,
  Ky: () => l,
  RF: () => c
}), require("./388685.js"), require("./35282.js");
let o = {};

function a(e, t) {
  return "".concat(e, ":").concat(t)
}

function s(e) {
  let [t, n] = e.split(":");
  return [t, n]
}

function l(e, t) {
  return o[a(e, t)]
}

function c(e, t, n) {
  let r = a(e, t);
  o[r] = i({}, o[r], n)
}

function u(e) {
  for (let t in o) {
    let [n, r] = s(t);
    e(n, r, o[t])
  }
  o = {}
}