/** Chunk was on 66382 **/
/** chunk id: 604533, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => c
});
var Chunk176338 = require("./176338.js"),
  Chunk754401 = require("./754401.js"),
  Chunk370873 = require("./370873.js"),
  i = Object.prototype,
  l = Function.prototype.toString,
  s = i.hasOwnProperty,
  u = l.call(Object);
let c = function(e) {
  if (!(0, a.Z)(e) || "[object Object]" != (0, n.Z)(e)) returnfalse;
  var t = (0, o.Z)(e);
  if (null === t) returntrue;
  var r = s.call(t, "constructor") && t.constructor;
  return "function" == typeof r && r instanceof r && l.call(r) == u
}