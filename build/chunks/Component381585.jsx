/** Chunk was on web.js **/
/** chunk id: 381585, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  k0: () => c,
  sp: () => l
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js");

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function o(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      a(e, t, n[t])
    })
  }
  return e
}
let s = Chunk647438.createContext(null);

function l() {
  return Chunk647438.useContext(s)
}

function c(e) {
  let {
    newValue: t,
    children: n
  } = e, a = l(), c = i.useMemo(() => o({}, a, t), [a, t]);
  return (0, r.jsx)(s.Provider, {
    value: c,
    children: n
  })
}