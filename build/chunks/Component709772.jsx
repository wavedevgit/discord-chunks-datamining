/** Chunk was on web.js **/
/** chunk id: 709772, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  a: () => c
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk342393 = require("./342393.js"),
  Chunk71532 = require("./71532.js"),
  Chunk714126 = require("./714126.jsx");

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
let c = e => {
  let {
    errorLabel: t,
    children: n,
    elementOptions: o
  } = e, c = Date.now();
  return (0, r.jsx)(s.W, {
    label: t,
    children: (0, r.jsx)(i.Elements, {
      stripe: (0, a.Cv)(),
      options: l({
        mode: "setup",
        currency: "usd",
        setup_future_usage: "off_session"
      }, o),
      children: n
    })
  }, c)
}