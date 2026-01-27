/** Chunk was on web.js **/
/** chunk id: 271683, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => l
});
var Chunk627968 = require("./627968.js"),
  Chunk397927 = require("./397927.js"),
  Chunk136523 = require("./136523.jsx");

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

function l(e) {
  let {
    channel: t,
    sourceAnalyticsLocations: o
  } = e;
  (0, i.mMO)(async () => {
    let {
      default: e
    } = await Promise.resolve().then(n.bind(n, 136523));
    return n => (0, r.jsx)(e, s({
      channel: t,
      sourceAnalyticsLocations: o
    }, n))
  }, {
    modalKey: a.m
  })
}