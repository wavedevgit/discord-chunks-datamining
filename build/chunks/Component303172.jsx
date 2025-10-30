/** Chunk was on web.js **/
/** chunk id: 303172, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
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
async function s(e) {
  let t = arguments.length > 1 && true !== arguments[1] && arguments[1];
  await (0, i.ZDy)(async () => {
    let {
      default: i
    } = await n.e("81162").then(n.bind(n, 193049));
    return n => (0, r.jsx)(i, o({
      source: e,
      oneClickFlow: t
    }, n))
  })
}