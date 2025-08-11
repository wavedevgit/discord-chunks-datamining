/** Chunk was on 50448 **/
/** chunk id: 213805, original params: t,r,n (module,exports,require) **/
"use strict";
var Chunk517522 = require("./517522.js"),
  Chunk971428 = require("./971428.js"),
  Chunk829575 = require("./829575.js"),
  u = TypeError;
module.exports = function(t, r) {
  var n, s;
  if ("string" === r && o(n = t.toString) && !i(s = e(n, t)) || o(n = t.valueOf) && !i(s = e(n, t)) || "string" !== r && o(n = t.toString) && !i(s = e(n, t))) return s;
  throw new u("Can't convert object to primitive value")
}