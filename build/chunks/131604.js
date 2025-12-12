/** Chunk was on web.js **/
/** chunk id: 131604, original params: e,t,n (module,exports,re quire) **/
"use strict";
var r, Chunk166691 = require("./166691.js"),
  o = require("./190337.js")(/^\s*(?:function)?\*/),
  a = require("./195653.js")(),
  Chunk143988 = require("./143988.js"),
  l = Chunk166691("Object.prototype.toString"),
  c = Chunk166691("Function.prototype.toString"),
  u = function() {
    if (!a) returnfalse;
    try {
      return Function("return function*() {}")()
    } catch (e) {}
  };
module.exports = function(e) {
  if ("function" != typeof e) returnfalse;
  if (o(c(e))) returntrue;
  if (!a) return "[object GeneratorFunction]" === l(e);
  if (!s) returnfalse;
  if (true === r) {
    var t = u();
    r = !!t && s(t)
  }
  return s(e) === r
}