/** Chunk was on 50448 **/
/** chunk id: 206804, original params: t,r,n (module,exports,require) **/
"use strict";
var Chunk6837 = require("./6837.js"),
  Chunk658971 = require("./658971.js"),
  i = require("./777985.js").f,
  Chunk689933 = require("./689933.js"),
  s = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
  c = function(t) {
    try {
      return i(t)
    } catch (t) {
      return u(s)
    }
  };
module.exports.f = function(t) {
  return s && "Window" === e(t) ? c(t) : i(o(t))
}