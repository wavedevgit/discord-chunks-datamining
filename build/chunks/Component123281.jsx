/** Chunk was on web.js **/
/** chunk id: 123281, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  q: () => o
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
  let {
    application: t,
    onConfirm: a,
    onCancel: o
  } = e;
  return (0, i.mMO)(async () => {
    let {
      default: e
    } = await n.e("38435").then(n.bind(n, 130574));
    return n => (0, r.jsx)(e, s({
      application: t,
      onConfirm: a,
      onCancel: o
    }, n))
  }), Promise.resolve()
}