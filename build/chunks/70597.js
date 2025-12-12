/** Chunk was on web.js **/
/** chunk id: 70597, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => c
});
var Chunk599582 = require("./599582.js"),
  Chunk788613 = require("./788613.js"),
  Chunk528734 = require("./528734.js"),
  Chunk951516 = require("./951516.js"),
  Chunk217224 = require("./217224.js");

function l(e) {
  return (l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e
  } : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
  })(e)
}

function c(e, t) {
  if ((0, o.Z)(2, arguments), !t || "object" !== l(t)) return new Date(NaN);
  var n = t.years ? (0, s.Z)(t.years) : 0,
    c = t.months ? (0, s.Z)(t.months) : 0,
    u = t.weeks ? (0, s.Z)(t.weeks) : 0,
    d = t.days ? (0, s.Z)(t.days) : 0,
    f = t.hours ? (0, s.Z)(t.hours) : 0,
    p = t.minutes ? (0, s.Z)(t.minutes) : 0,
    _ = t.seconds ? (0, s.Z)(t.seconds) : 0,
    m = (0, a.default)(e),
    h = c || n ? (0, i.default)(m, c + 12 * n) : m,
    g = d || u ? (0, r.default)(h, d + 7 * u) : h,
    E = 1e3 * (_ + 60 * (p + 60 * f));
  return new Date(g.getTime() + E)
}