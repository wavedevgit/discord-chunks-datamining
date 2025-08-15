/** Chunk was on 25292 **/
/** chunk id: 603158, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  F: () => i
}), require("./413496.js"), require("./433524.js"), require("./35282.js");
let r = function(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
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

function i(e) {
  let t = "";
  for (let n = 0; n < e.length; n++) {
    let i = e[n];
    null != r[i] ? t += r[i] : RegExp("[\\p{Pd}\\p{Pc}\\p{Po}]", "gu").test(i) ? t += " " : t += i
  }
  return t.toLowerCase()
}