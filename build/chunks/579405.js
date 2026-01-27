/** Chunk was on web.js **/
/** chunk id: 579405, original params: e,t,n (module,exports,re quire) **/
"use strict";
var r = require("./439619.js")("%Array.prototype%"),
  Chunk333654 = require("./333654.js"),
  Chunk870064 = require("./870064.js"),
  Chunk741623 = require("./741623.js"),
  Chunk358073 = require("./358073.js"),
  Chunk568898 = require("./568898.js"),
  Chunk528574 = require("./528574.js");
module.exports = function(e) {
  if (!s(e) || e < 0) throw new o("Assertion failed: `length` must be an integer Number >= 0");
  if (e > l) throw new i("length is greater than (2**32 - 1)");
  var t = arguments.length > 1 ? arguments[1] : r,
    n = [];
  if (t !== r) {
    if (!c) throw new a("ArrayCreate: a `proto` argument that is not `Array.prototype` is not supported in an environment that does not support setting the [[Prototype]]");
    c(n, t)
  }
  return 0 !== e && (n.length = e), n
}