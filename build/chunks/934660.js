/** Chunk was on web.js **/
/** chunk id: 934660, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk166691 = require("./166691.js"),
  i = Chunk166691("String.prototype.valueOf"),
  a = function(e) {
    try {
      return i(e), true
    } catch (e) {
      returnfalse
    }
  },
  o = Chunk166691("Object.prototype.toString"),
  s = "[object String]",
  l = require("./195653.js")();
module.exports = function(e) {
  return "string" == typeof e || !!e && "object" == typeof e && (l ? a(e) : o(e) === s)
}