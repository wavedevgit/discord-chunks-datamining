/** Chunk was on web.js **/
/** chunk id: 54797, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  x: () => s
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js");

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function o(e) {
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

function s(e) {
  let {
    listing: t
  } = e;
  (0, i.ZDy)(async () => {
    let {
      default: e
    } = await n.e("95480").then(n.bind(n, 275869));
    return n => (0, r.jsx)(e, o({
      listing: t
    }, n))
  })
}