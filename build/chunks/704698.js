/** Chunk was on web.js **/
/** chunk id: 704698, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk906046 = require("./906046.js"),
  i = Chunk906046("Object.prototype.toString"),
  a = require("./912877.js")(),
  Chunk429013 = require("./429013.js");
if (a) {
  var s = Chunk906046("Symbol.prototype.toString"),
    l = Chunk429013(/^Symbol\(.*\)$/),
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