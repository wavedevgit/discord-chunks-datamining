/** Chunk was on web.js **/
/** chunk id: 163379, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk596401 = require("./596401.js");

function o(e, t, n) {
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
      o(e, t, n[t])
    })
  }
  return e
}

function l() {
  let e = arguments.length > 0 && true !== arguments[0] && arguments[0];
  !module && (0, Chunk481060.$sL)() || (0, Chunk481060.ZDy)(async () => {
    let {
      default: e
    } = await require.e("91236").then(require.bind(require, 477621));
    return t => (0, r.jsx)(e, s({}, t))
  }, {
    modalKey: Chunk596401.Xd
  })
}