/** Chunk was on web.js **/
/** chunk id: 440938, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  R9: () => c,
  uM: () => l
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js");

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function s(e) {
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
let o = Chunk64700.createContext(null);

function l() {
  return i.useContext(o)
}

function c(e) {
  let {
    newValue: t,
    children: n
  } = e, a = l(), c = i.useMemo(() => s({}, a, t), [a, t]);
  return (0, r.jsx)(o.Provider, {
    value: c,
    children: n
  })
}