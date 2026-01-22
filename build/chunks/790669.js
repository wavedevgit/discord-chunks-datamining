/** Chunk was on web.js **/
/** chunk id: 790669, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk906046 = require("./906046.js"),
  i = Chunk906046("Date.prototype.getDay"),
  a = function(e) {
    try {
      return i(e), true
    } catch (e) {
      returnfalse
    }
  },
  s = Chunk906046("Object.prototype.toString"),
  o = "[object Date]",
  l = require("./581070.js")();
module.exports = function(e) {
  return "object" == typeof e && null !== e && (l ? a(e) : s(e) === o)
}