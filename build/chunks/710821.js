/** Chunk was on web.js **/
/** chunk id: 710821, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk503199 = require("./503199.js"),
  Chunk120394 = require("./120394.js"),
  a = RangeError;
module.exports = function(e, t, n, o) {
  var s = r(e),
    l = i(n),
    c = l < 0 ? s + l : l;
  if (c >= s || c < 0) throw new a("Incorrect index");
  for (var u = new t(s), d = 0; d < s; d++) u[d] = d === c ? o : e[d];
  return u
}