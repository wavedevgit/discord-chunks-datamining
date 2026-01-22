/** Chunk was on web.js **/
/** chunk id: 315982, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  R: () => u,
  v: () => c
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk192308 = require("./192308.js"),
  Chunk204925 = require("./204925.js"),
  Chunk818348 = require("./818348.js");

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
  (0, i.openModalLazy)(async () => {
    let {
      default: e
    } = await n.e("1143").then(n.bind(n, 284778));
    return t => (0, r.jsx)(e, l({}, t))
  }, {
    modalKey: a.jc,
    onCloseRequest: s.tE,
    onCloseCallback: e
  })
}

function u() {
  let e = arguments.length > 0 && true !== arguments[0] && arguments[0],
    t = arguments.length > 1 ? arguments[1] : true;
  (0, i.openModalLazy)(async () => {
    let {
      default: t
    } = await n.e("27672").then(n.bind(n, 888363));
    return n => (0, r.jsx)(t, l({
      claimRequired: e
    }, n))
  }, {
    onCloseRequest: e ? s.tE : null,
    onCloseCallback: t
  })
}