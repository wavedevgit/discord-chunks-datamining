/** Chunk was on web.js **/
/** chunk id: 717421, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  z: () => c
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk432022 = require("./432022.js"),
  Chunk844222 = require("./844222.js"),
  Chunk384494 = require("./384494.js");

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

function c(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : "respect-motion-settings",
    n = arguments.length > 2 ? arguments[2] : true,
    o = r.useContext(a.C).reducedMotion.enabled,
    c = e;
  "animate-always" !== t && ("respect-motion-settings" !== t || o) && (c = "function" == typeof e ? () => l({}, e(), s.W) : l({}, e, s.W));
  let u = "function" == typeof c,
    [d, f, p] = (0, i.useSpring)(c, n);
  return u || 3 == arguments.length ? [d, f, p] : d
}