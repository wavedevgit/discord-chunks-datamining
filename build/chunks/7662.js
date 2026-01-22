/** Chunk was on 94678 **/
/** chunk id: 7662, original params: t,r,e (module,exports,require) **/
"use strict";
var Chunk918078 = require("./918078.js"),
  Chunk57284 = require("./57284.js"),
  Chunk693755 = require("./693755.js"),
  i = RangeError;
module.exports = function(t) {
  var r = o(s(this)),
    e = "",
    u = n(t);
  if (u < 0 || u === 1 / 0) throw new i("Wrong number of repetitions");
  for (; u > 0;
    (u >>>= 1) && (r += r)) 1 & u && (e += r);
  return e
}