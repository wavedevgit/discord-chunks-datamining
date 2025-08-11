/** Chunk was on 50448 **/
/** chunk id: 953554, original params: t,r,n (module,exports,require) **/
"use strict";
var Chunk505072 = require("./505072.js"),
  Chunk565130 = require("./565130.js"),
  Chunk717130 = require("./717130.js"),
  u = RangeError;
module.exports = function(t) {
  var r = o(i(this)),
    n = "",
    s = e(t);
  if (s < 0 || s === 1 / 0) throw new u("Wrong number of repetitions");
  for (; s > 0;
    (s >>>= 1) && (r += r)) 1 & s && (n += r);
  return n
}