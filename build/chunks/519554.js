/** Chunk was on web.js **/
/** chunk id: 519554, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  b: () => c
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk442748 = require("./442748.js"),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js");

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
    c = r.useContext(o.Sfi).reducedMotion.enabled,
    u = t;
  "animate-always" !== n && ("respect-motion-settings" !== n || c) && (u = "function" == typeof t ? (e, n) => l({}, t(e, n), a.FWm) : t.map(e => l({}, e, a.FWm)));
  let d = "function" == typeof u,
    [f, _, p] = (0, i.useSprings)(e, u, s);
  return d || 4 == arguments.length ? [f, _, p] : f
}