/** Chunk was on web.js **/
/** chunk id: 982147, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  m: () => c
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk864605 = require("./864605.js"),
  Chunk158954 = require("./158954.js"),
  Chunk397927 = require("./397927.js");

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

function c(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : "respect-motion-settings",
    s = arguments.length > 3 ? arguments[3] : true,
    c = r.useContext(o.CZY).reducedMotion.enabled,
    u = t;
  "animate-always" !== n && ("respect-motion-settings" !== n || c) && (u = "function" == typeof t ? (e, n) => l({}, t(e, n), a.WD7) : t.map(e => l({}, e, a.WD7)));
  let d = "function" == typeof u,
    [f, p, _] = (0, i.useSprings)(e, u, s);
  return d || 4 == arguments.length ? [f, p, _] : f
}