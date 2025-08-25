/** Chunk was on web.js **/
/** chunk id: 321897, original params: e,t,n (module,exports,re quire) **/
"use strict";

function r(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function i(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      r(e, t, n[t])
    })
  }
  return e
}
require.d(exports, {
  ZP: () => l
});
let o = Object.freeze({
    overflowY: "scroll",
    overflowX: "hidden"
  }),
  a = Object.freeze({
    overflowX: "scroll",
    overflowY: "hidden"
  }),
  s = Object.freeze({
    overflow: "auto"
  });

function l(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : "vertical",
    n = "vertical" === t ? o : "horizontal" === t ? a : s;
  return null != e ? i({}, n, e) : n
}