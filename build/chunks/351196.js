/** Chunk was on web.js **/
/** chunk id: 351196, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk914331 = require("./914331.js"),
  Chunk77826 = require("./77826.js"),
  o = RangeError;
module.exports = function(e, t, n, a) {
  var s = r(e),
    l = i(n),
    c = l < 0 ? s + l : l;
  if (c >= s || c < 0) throw new o("Incorrect index");
  for (var u = new t(s), d = 0; d < s; d++) u[d] = d === c ? a : e[d];
  return u
}