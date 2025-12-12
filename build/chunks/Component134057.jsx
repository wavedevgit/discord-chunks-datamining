/** Chunk was on web.js **/
/** chunk id: 134057, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  a: () => s
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js");

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
    component: t,
    props: n,
    componentMap: a
  } = e, s = a[t];
  return null == s ? (console.warn("No component found for dynamic graphic:", t), null) : (0, r.jsx)(i.Suspense, {
    fallback: null,
    children: (0, r.jsx)(s, o({}, n))
  })
}