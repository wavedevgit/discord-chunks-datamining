/** Chunk was on web.js **/
/** chunk id: 319225, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  E: () => u
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk158954 = require("./158954.js"),
  Chunk397927 = require("./397927.js"),
  Chunk985018 = require("./985018.jsx");

function o(e, t, n) {
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
      o(e, t, n[t])
    })
  }
  return e
}

function c(e) {
  let {
    transitionState: t,
    title: n,
    body: a,
    onClose: o
  } = e;
  return (0, r.jsx)(i.Modal, {
    title: n,
    actions: [{
      text: s.intl.string(s.t["NX+WJN"]),
      onClick: o
    }],
    transitionState: t,
    onClose: o,
    subtitle: a
  })
}

function u(e) {
  (0, a.qfG)(t => (0, r.jsx)(c, l({}, t, e)))
}