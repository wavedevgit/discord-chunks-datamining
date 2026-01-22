/** Chunk was on 47950 **/
/** chunk id: 675279, original params: e,t,r (module,exports,require) **/
var Chunk338036 = require("./338036.js"),
  Chunk853531 = require("./853531.js"),
  Chunk422750 = require("./422750.js"),
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