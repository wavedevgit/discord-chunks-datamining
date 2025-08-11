/** Chunk was on web.js **/
/** chunk id: 603158, original params: e,t,n (module,exports,re quire) **/
"use strict";

function r(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
require.d(exports, {
  F: () => o
}), require("./413496.js"), require("./433524.js"), require("./35282.js");
let i = function e(e) {
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
}({}, {
  "-": "-",
  " ": " "
}, {
  "[": " ",
  "]": " ",
  "(": " ",
  ")": " ",
  "|": " ",
  "~": " "
}, {
  "​": "",
  "‌": "",
  "‍": "",
  "‎": "",
  "\uFEFF": ""
}, {
  "|": " "
});

function o(e) {
  let t = "";
  for (let n = 0; n < e.length; n++) {
    let r = e[n];
    null != i[r] ? t += i[r] : RegExp("[\\p{Pd}\\p{Pc}\\p{Po}]", "gu").test(r) ? t += " " : t += r
  }
  return t.toLowerCase()
}