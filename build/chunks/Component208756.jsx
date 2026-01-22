/** Chunk was on web.js **/
/** chunk id: 208756, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk732955 = require("./732955.js"),
  Chunk248789 = require("./248789.js");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function c(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      l(e, t, n[t])
    })
  }
  return e
}

function u(e) {
  let {
    actions: t,
    className: n
  } = e;
  return (0, r.jsx)("div", {
    className: a()(o.actionBar, n),
    children: (0, r.jsx)(s.e2v, {
      size: "sm",
      fullWidth: true,
      direction: "vertical",
      children: t.map((e, t) => (0, r.jsx)(s.$nd, c({}, e), t))
    })
  })
}