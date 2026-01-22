/** Chunk was on 47950 **/
/** chunk id: 991494, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => c
});
var Chunk464117 = require("./464117.js"),
  Chunk463450 = require("./463450.js"),
  Chunk687669 = require("./687669.js"),
  i = Object.prototype,
  l = Function.prototype.toString,
  s = i.hasOwnProperty,
  u = l.call(Object);
let c = function(e) {
  if (!(0, a.A)(e) || "[object Object]" != (0, n.A)(e)) returnfalse;
  var t = (0, o.A)(e);
  if (null === t) returntrue;
  var r = s.call(t, "constructor") && t.constructor;
  return "function" == typeof r && r instanceof r && l.call(r) == u
}