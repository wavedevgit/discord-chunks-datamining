/** Chunk was on web.js **/
/** chunk id: 901158, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk745872 = require("./745872.js"),
  Chunk815329 = require("./815329.js"),
  o = Chunk745872("%Number%"),
  Chunk983281 = require("./983281.js"),
  Chunk269640 = require("./269640.js"),
  Chunk647237 = require("./647237.js");
module.exports = function(e) {
  var t = a(e) ? e : s(e, o);
  if ("symbol" == typeof t) throw new i("Cannot convert a Symbol value to a number");
  if ("bigint" == typeof t) throw new i("Conversion from 'BigInt' to 'number' is not allowed.");
  return "string" == typeof t ? l(t) : +t
}