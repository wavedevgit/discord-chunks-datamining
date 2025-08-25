/** Chunk was on web.js **/
/** chunk id: 327885, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk837268 = require("./837268.js"),
  Chunk32300 = require("./32300.js"),
  Chunk371651 = require("./371651.js"),
  Chunk3506 = require("./3506.jsx"),
  Chunk794704 = require("./794704.jsx");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function d(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      u(e, t, n[t])
    })
  }
  return e
}

function f(e) {
  let t = (0, a.XE)("user_settings"),
    n = (0, i.e7)([s.default], () => s.default.getForcedRenderMode()),
    u = n === o.R5.OUT_OF_PROCESS_V3 || n === o.R5.OUT_OF_PROCESS_V3_LIMITED_INTERACTION;
  return t || u ? (0, r.jsx)(c.Z, d({}, e)) : (0, r.jsx)(l.Z, d({}, e))
}