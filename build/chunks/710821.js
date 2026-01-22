/** Chunk was on web.js **/
/** chunk id: 710821, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk503199 = require("./503199.js"),
  Chunk120394 = require("./120394.js"),
  a = RangeError;
module.exports = function(e, t, n, s) {
  var o = r(e),
    l = i(n),
    c = l < 0 ? o + l : l;
  if (c >= o || c < 0) throw new a("Incorrect index");
  for (var u = new t(o), d = 0; d < o; d++) u[d] = d === c ? s : e[d];
  return u
}