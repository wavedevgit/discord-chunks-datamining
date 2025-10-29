/** Chunk was on web.js **/
/** chunk id: 475808, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  b: () => _
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk273352 = require("./273352.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk846027 = require("./846027.js"),
  Chunk388032 = require("./388032.jsx");

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
let u = null;

function d() {
  null !== u && (0, Chunk481060.Mr3)(u), u = null
}

function f() {
  Chunk846027.Z.setSilenceWarning(false)
}

function _() {
  u = (0, Chunk481060.h7j)(e => (0, r.jsx)(i.default, c({
    title: s.intl.string(s.t["zQ1+Jw"]),
    body: s.intl.string(s.t.K1gWXn),
    secondaryConfirmText: s.intl.string(s.t.XAiAgD),
    onConfirmSecondary: f,
    onConfirm: d,
    confirmText: s.intl.string(s.t.BddRzS)
  }, e)))
}