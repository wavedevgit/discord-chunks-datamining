/** Chunk was on 66382 **/
/** chunk id: 667066, original params: e,t,r (module,exports,require) **/
var Chunk657398 = require("./657398.js"),
  Chunk708187 = require("./708187.js"),
  Chunk389109 = require("./389109.js"),
  i = Object.prototype,
  l = Function.prototype.toString,
  s = i.hasOwnProperty,
  u = l.call(Object);
module.exports = function(e) {
  if (!a(e) || "[object Object]" != n(e)) returnfalse;
  var t = o(e);
  if (null === t) returntrue;
  var r = s.call(t, "constructor") && t.constructor;
  return "function" == typeof r && r instanceof r && l.call(r) == u
}