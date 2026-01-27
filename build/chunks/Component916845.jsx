/** Chunk was on web.js **/
/** chunk id: 916845, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  q: () => d
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk732955 = require("./732955.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk248789 = require("./248789.js");

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
    "aria-label": n = s.intl.string(s.t.cpT0Cq),
    variant: c
  } = e, {
    firstFocusableItemProps: d
  } = i.useContext(a.MVj);
  return (0, r.jsx)("div", {
    className: l.closeButton,
    children: (0, r.jsx)(o.JnF, u({
      size: "sm",
      "aria-label": n,
      onClick: t,
      variant: c
    }, d))
  })
}