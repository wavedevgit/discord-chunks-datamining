/** Chunk was on web.js **/
/** chunk id: 866323, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  p: () => c
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk92674 = require("./92674.js"),
  Chunk844222 = require("./844222.js"),
  Chunk384494 = require("./384494.js");

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
    c = r.useContext(a.C).reducedMotion.enabled,
    u = t;
  "animate-always" !== n && ("respect-motion-settings" !== n || c) && (u = l({}, t, o.W));
  let [d, f, p] = (0, i.useTransition)(e, u, s);
  return 4 == arguments.length ? [d, f, p] : d
}