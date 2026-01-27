/** Chunk was on web.js **/
/** chunk id: 819982, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => s
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js");

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
  await (0, i.mMO)(async () => {
    let {
      default: i
    } = await n.e("54160").then(n.bind(n, 914131));
    return n => (0, r.jsx)(i, o({
      source: e,
      oneClickFlow: t
    }, n))
  })
}