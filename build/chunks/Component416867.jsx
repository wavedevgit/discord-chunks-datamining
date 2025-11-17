/** Chunk was on web.js **/
/** chunk id: 416867, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  B: () => u
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function l(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      s(e, t, n[t])
    })
  }
  return e
}

function c(e) {
  let {
    transitionState: t,
    title: n,
    body: a,
    onClose: s
  } = e;
  return (0, r.jsx)(i.Modal, {
    title: n,
    actions: [{
      text: o.intl.string(o.t["NX+WJN"]),
      onClick: s
    }],
    transitionState: t,
    onClose: s,
    subtitle: a
  })
}

function u(e) {
  (0, a.h7j)(t => (0, r.jsx)(c, l({}, t, e)))
}