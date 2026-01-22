/** Chunk was on web.js **/
/** chunk id: 863781, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk446474 = require("./446474.js"),
  Chunk339626 = require("./339626.js"),
  Chunk598349 = require("./598349.js"),
  s = TypeError;
module.exports = function(e, t) {
  var n, o;
  if ("string" === t && i(n = e.toString) && !a(o = r(n, e)) || i(n = e.valueOf) && !a(o = r(n, e)) || "string" !== t && i(n = e.toString) && !a(o = r(n, e))) return o;
  throw new s("Can't convert object to primitive value")
}