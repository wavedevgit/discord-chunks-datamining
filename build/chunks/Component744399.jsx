/** Chunk was on web.js **/
/** chunk id: 744399, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  k: () => d
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk680018 = require("./680018.jsx"),
  Chunk374415 = require("./374415.jsx"),
  Chunk748491 = require("./748491.js");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function u(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      c(e, t, n[t])
    })
  }
  return e
}

function d(e) {
  let {
    actions: t,
    className: n
  } = e;
  return (0, r.jsx)("div", {
    className: o()(l.actionBar, n),
    children: (0, r.jsx)(s.h, {
      size: "sm",
      fullWidth: true,
      direction: "vertical",
      children: t.map((e, t) => (0, r.jsx)(a.z, u({}, e), t))
    })
  })
}