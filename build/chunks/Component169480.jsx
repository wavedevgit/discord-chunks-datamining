/** Chunk was on web.js **/
/** chunk id: 169480, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.r(exports), require.d(exports, {
  showModal: () => c,
  updateModalProps: () => u
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk952265 = require("./952265.js"),
  Chunk183620 = require("./183620.jsx");

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
let l = (e, t, n) => function(i) {
  return (0, r.jsx)(a.Z, s({
    handleSubmit: e,
    handleEarlyClose: t
  }, n, i))
};

function c(e, t, n) {
  return (0, i.h7)(l(e, t, n), {
    onCloseCallback: t
  })
}

function u(e, t, n, r) {
  return (0, i.o)(e, l(t, n, r))
}