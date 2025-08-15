/** Chunk was on web.js **/
/** chunk id: 131604, original params: e,t,n (module,exports,re quire) **/
"use strict";
var r, Chunk166691 = require("./166691.js"),
  a = require("./190337.js")(/^\s*(?:function)?\*/),
  o = require("./195653.js")(),
  Chunk143988 = require("./143988.js"),
  l = Chunk166691("Object.prototype.toString"),
  c = Chunk166691("Function.prototype.toString"),
  u = function() {
    if (!o) returnfalse;
    try {
      return Function("return function*() {}")()
    } catch (e) {}
  };
module.exports = function(e) {
  if ("function" != typeof e) returnfalse;
  if (a(c(e))) returntrue;
  if (!o) return "[object GeneratorFunction]" === l(e);
  if (!s) returnfalse;
  if (true === r) {
    var t = u();
    r = !!t && s(t)
  }
  return s(e) === r
}