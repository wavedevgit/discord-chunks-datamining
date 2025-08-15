/** Chunk was on 30202 **/
/** chunk id: 327885, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk837268 = require("./837268.js"),
  Chunk32300 = require("./32300.js"),
  Chunk371651 = require("./371651.js"),
  Chunk3506 = require("./3506.jsx"),
  Chunk794704 = require("./794704.jsx");

function d(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      var i;
      i = n[t], t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = i
    })
  }
  return e
}

function u(e) {
  let t = (0, a.XE)("user_settings"),
    n = (0, r.e7)([l.default], () => l.default.getForcedRenderMode()),
    u = n === s.R5.OUT_OF_PROCESS_V3 || n === s.R5.OUT_OF_PROCESS_V3_LIMITED_INTERACTION;
  return t || u ? (0, i.jsx)(c.Z, d({}, e)) : (0, i.jsx)(o.Z, d({}, e))
}