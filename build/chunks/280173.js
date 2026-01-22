/** Chunk was on 35511 **/
/** chunk id: 280173, original params: e,t,n (module,exports,require) **/
"use strict";
var Chunk663172 = require("./663172.js"),
  a = TypeError;
module.exports = function(e) {
  if ("object" == typeof e && "size" in e && "has" in e && "get" in e && "set" in e && "delete" in e && "entries" in e) return e;
  throw new a(r(e) + " is not a map")
}