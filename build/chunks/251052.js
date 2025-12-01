/** Chunk was on web.js **/
/** chunk id: 251052, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  q: () => c
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk666917 = require("./666917.js"),
  Chunk213305 = require("./213305.js"),
  Chunk964925 = require("./964925.js");

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

function c(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : "respect-motion-settings",
    n = arguments.length > 2 ? arguments[2] : true,
    s = r.useContext(a.S).reducedMotion.enabled,
    c = e;
  "animate-always" !== t && ("respect-motion-settings" !== t || s) && (c = "function" == typeof e ? () => l({}, e(), o.F) : l({}, e, o.F));
  let u = "function" == typeof c,
    [d, f, _] = (0, i.useSpring)(c, n);
  return u || 3 == arguments.length ? [d, f, _] : d
}