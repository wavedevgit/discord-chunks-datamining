/** Chunk was on web.js **/
/** chunk id: 225153, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => c
});
var Chunk410530 = require("./410530.js"),
  Chunk228378 = require("./228378.js"),
  Chunk29583 = require("./29583.js"),
  Chunk618027 = require("./618027.js"),
  Chunk998280 = require("./998280.js");

function l(e) {
  return (l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e
  } : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
  })(e)
}

function c(e, t) {
  if ((0, o.A)(2, arguments), !t || "object" !== l(t)) return new Date(NaN);
  var n = t.years ? (0, s.A)(t.years) : 0,
    c = t.months ? (0, s.A)(t.months) : 0,
    u = t.weeks ? (0, s.A)(t.weeks) : 0,
    d = t.days ? (0, s.A)(t.days) : 0,
    f = t.hours ? (0, s.A)(t.hours) : 0,
    p = t.minutes ? (0, s.A)(t.minutes) : 0,
    _ = t.seconds ? (0, s.A)(t.seconds) : 0,
    h = (0, a.default)(e),
    m = c || n ? (0, i.default)(h, c + 12 * n) : h,
    g = d || u ? (0, r.default)(m, d + 7 * u) : m,
    E = 1e3 * (_ + 60 * (p + 60 * f));
  return new Date(g.getTime() + E)
}