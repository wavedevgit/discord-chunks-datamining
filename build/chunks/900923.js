/** Chunk was on web.js **/
/** chunk id: 900923, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk374316 = require("./374316.js"),
  i = TypeError;
module.exports = function(e) {
  var t = r(e, "number");
  if ("number" == typeof t) throw new i("Can't convert number to bigint");
  return BigInt(t)
}