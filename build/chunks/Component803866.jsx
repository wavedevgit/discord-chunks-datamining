/** Chunk was on web.js **/
/** chunk id: 803866, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  N: () => d
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk146187 = require("./146187.jsx"),
  Chunk681803 = require("./681803.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk37751 = require("./37751.js");

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
    "aria-label": n = s.intl.string(s.t.cpT0Cg)
  } = e, {
    firstFocusableItemProps: c
  } = i.useContext(a.M);
  return (0, r.jsx)("div", {
    className: l.closeButton,
    children: (0, r.jsx)(o.P, u({
      size: "xs",
      "aria-label": n,
      onClick: t,
      variant: "overlay-secondary"
    }, c))
  })
}