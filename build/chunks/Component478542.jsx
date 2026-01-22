/** Chunk was on web.js **/
/** chunk id: 478542, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  p: () => d
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk732955 = require("./732955.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk161222 = require("./161222.js");

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
    onClick: t,
    "aria-label": n = o.intl.string(o.t.cpT0Cq)
  } = e, {
    firstFocusableItemProps: c
  } = i.useContext(a.MVj);
  return (0, r.jsx)("div", {
    className: l.b,
    children: (0, r.jsx)(s.JnF, u({
      size: "xs",
      "aria-label": n,
      onClick: t,
      variant: "overlay-secondary"
    }, c))
  })
}