/** Chunk was on web.js **/
/** chunk id: 452716, original params: e,t,n (module,exports,re quire) **/
"use strict";
var r = require("./745872.js")("%Array.prototype%"),
  Chunk333567 = require("./333567.js"),
  Chunk429675 = require("./429675.js"),
  Chunk815329 = require("./815329.js"),
  Chunk637255 = require("./637255.js"),
  Chunk163951 = require("./163951.js"),
  Chunk371486 = require("./371486.js");
module.exports = function(e) {
  if (!s(e) || e < 0) throw new a("Assertion failed: `length` must be an integer Number >= 0");
  if (e > l) throw new i("length is greater than (2**32 - 1)");
  var t = arguments.length > 1 ? arguments[1] : r,
    n = [];
  if (t !== r) {
    if (!c) throw new o("ArrayCreate: a `proto` argument that is not `Array.prototype` is not supported in an environment that does not support setting the [[Prototype]]");
    c(n, t)
  }
  return 0 !== e && (n.length = e), n
}