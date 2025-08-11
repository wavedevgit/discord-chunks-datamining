/** Chunk was on web.js **/
/** chunk id: 912193, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  b: () => _
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk846027 = require("./846027.js"),
  Chunk468026 = require("./468026.jsx"),
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
  u = (0, Chunk481060.h7j)(e => <a.default{...c({
    title: s.intl.string(s.t["zQ1+Jy"]),
    body: s.intl.string(s.t.K1gWXl),
    secondaryConfirmText: s.intl.string(s.t.XAiAgI),
    onConfirmSecondary: f,
    onConfirm: d,
    confirmText: s.intl.string(s.t.BddRzc)
  }, e)} />)
}