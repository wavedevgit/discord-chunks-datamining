/** Chunk was on web.js **/
/** chunk id: 990175, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  v: () => s
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk952265 = require("./952265.js");

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
  null == e || e.length <= 1 || (0, i.ZD)(async () => {
    let {
      default: t
    } = await Promise.all([n.e("89311"), n.e("82052")]).then(n.bind(n, 429352));
    return n => (0, r.jsx)(t, a({
      applications: e
    }, n))
  })
}