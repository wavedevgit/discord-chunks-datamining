/** Chunk was on web.js **/
/** chunk id: 863781, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk446474 = require("./446474.js"),
  Chunk339626 = require("./339626.js"),
  Chunk598349 = require("./598349.js"),
  o = TypeError;
module.exports = function(e, t) {
  var n, s;
  if ("string" === t && i(n = e.toString) && !a(s = r(n, e)) || i(n = e.valueOf) && !a(s = r(n, e)) || "string" !== t && i(n = e.toString) && !a(s = r(n, e))) return s;
  throw new o("Can't convert object to primitive value")
}