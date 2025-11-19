/** Chunk was on web.js **/
/** chunk id: 803866, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  N: () => d
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk793030 = require("./793030.js"),
  Chunk159691 = require("./159691.js"),
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
    "aria-label": n = s.intl.string(s.t.cpT0Cq)
  } = e, {
    firstFocusableItemProps: c
  } = i.useContext(a.MJU);
  return (0, r.jsx)("div", {
    className: l.closeButton,
    children: (0, r.jsx)(o.PZ7, u({
      size: "xs",
      "aria-label": n,
      onClick: t,
      variant: "overlay-secondary"
    }, c))
  })
}