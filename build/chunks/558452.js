/** Chunk was on web.js **/
/** chunk id: 558452, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Y: () => l
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk401393 = require("./401393.js"),
  Chunk793030 = require("./793030.js");

function o(e, t, n) {
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
      o(e, t, n[t])
    })
  }
  return e
}

function l(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : "respect-motion-settings",
    o = arguments.length > 3 ? arguments[3] : true,
    l = r.useContext(a.Sfi).reducedMotion.enabled,
    c = t;
  "animate-always" !== n && ("respect-motion-settings" !== n || l) && (c = s({}, t, a.FWm));
  let [u, d, f] = (0, i.useTransition)(e, c, o);
  return 4 == arguments.length ? [u, d, f] : u
}