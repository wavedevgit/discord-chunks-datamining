/** Chunk was on web.js **/
/** chunk id: 339695, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  z: () => s
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk906003 = require("./906003.jsx");

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
  return (0, r.jsx)(i.Y, a({}, e))
}