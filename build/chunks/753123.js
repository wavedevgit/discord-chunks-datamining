/** Chunk was on 94678 **/
/** chunk id: 753123, original params: t,r,e (module,exports,require) **/
"use strict";
var Chunk459547 = require("./459547.js"),
  Chunk958498 = require("./958498.js"),
  s = require("./989447.js").f,
  Chunk596479 = require("./596479.js"),
  u = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
  c = function(t) {
    try {
      return s(t)
    } catch (t) {
      return i(u)
    }
  };
module.exports.f = function(t) {
  return u && "Window" === n(t) ? c(t) : s(o(t))
}