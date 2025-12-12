/** Chunk was on web.js **/
/** chunk id: 6819, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk580983 = require("./580983.js"),
  Chunk880181 = require("./880181.js"),
  Chunk434431 = require("./434431.js"),
  o = TypeError;
module.exports = function(e, t) {
  var n, s;
  if ("string" === t && i(n = e.toString) && !a(s = r(n, e)) || i(n = e.valueOf) && !a(s = r(n, e)) || "string" !== t && i(n = e.toString) && !a(s = r(n, e))) return s;
  throw new o("Can't convert object to primitive value")
}