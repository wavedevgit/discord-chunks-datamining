/** Chunk was on web.js **/
/** chunk id: 133491, original params: e,t,n (module,exports,re quire) **/
"use strict";
var r, Chunk906046 = require("./906046.js"),
  a = require("./429013.js")(/^\s*(?:function)?\*/),
  s = require("./581070.js")(),
  Chunk428495 = require("./428495.js"),
  l = Chunk906046("Object.prototype.toString"),
  c = Chunk906046("Function.prototype.toString"),
  u = function() {
    if (!s) returnfalse;
    try {
      return Function("return function*() {}")()
    } catch (e) {}
  };
module.exports = function(e) {
  if ("function" != typeof e) returnfalse;
  if (a(c(e))) returntrue;
  if (!s) return "[object GeneratorFunction]" === l(e);
  if (!o) returnfalse;
  if (true === r) {
    var t = u();
    r = !!t && o(t)
  }
  return o(e) === r
}