/** Chunk was on web.js **/
/** chunk id: 830690, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk166691 = require("./166691.js"),
  i = Chunk166691("Object.prototype.toString"),
  o = require("./738146.js")(),
  Chunk190337 = require("./190337.js");
if (o) {
  var s = Chunk166691("Symbol.prototype.toString"),
    l = Chunk190337(/^Symbol\(.*\)$/),
    c = function(e) {
      return "symbol" == typeof e.valueOf() && l(s(e))
    };
  module.exports = function(e) {
    if ("symbol" == typeof e) returntrue;
    if (!e || "object" != typeof e || "[object Symbol]" !== i(e)) returnfalse;
    try {
      return c(e)
    } catch (e) {
      returnfalse
    }
  }
} else module.exports = function(e) {
  returnfalse
}