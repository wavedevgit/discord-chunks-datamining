/** Chunk was on web.js **/
/** chunk id: 400569, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  D: () => c
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk575053 = require("./575053.js"),
  Chunk622999 = require("./622999.js"),
  Chunk513533 = require("./513533.jsx");

function s(e, t, n) {
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
      s(e, t, n[t])
    })
  }
  return e
}
let c = e => {
  let {
    errorLabel: t,
    children: n,
    elementOptions: s
  } = e, c = Date.now();
  return (0, r.jsx)(a.k, {
    label: t,
    children: (0, r.jsx)(i.Elements, {
      stripe: (0, o.d2)(),
      options: l({
        mode: "setup",
        currency: "usd",
        setup_future_usage: "off_session"
      }, s),
      children: n
    })
  }, c)
}