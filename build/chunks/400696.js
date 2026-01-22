/** Chunk was on web.js **/
/** chunk id: 400696, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk906046 = require("./906046.js"),
  i = Chunk906046("String.prototype.valueOf"),
  a = function(e) {
    try {
      return i(e), true
    } catch (e) {
      returnfalse
    }
  },
  s = Chunk906046("Object.prototype.toString"),
  o = "[object String]",
  l = require("./581070.js")();
module.exports = function(e) {
  return "string" == typeof e || !!e && "object" == typeof e && (l ? a(e) : s(e) === o)
}