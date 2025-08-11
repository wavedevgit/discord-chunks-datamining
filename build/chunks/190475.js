/** Chunk was on web.js **/
/** chunk id: 190475, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk707104 = require("./707104.js"),
  i = TypeError;
module.exports = function(e) {
  var t = r(e, "number");
  if ("number" == typeof t) throw new i("Can't convert number to bigint");
  return BigInt(t)
}