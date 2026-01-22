/** Chunk was on 47950 **/
/** chunk id: 917921, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => c
});
var Chunk700272 = require("./700272.js"),
  Chunk800225 = require("./800225.js"),
  Chunk5264 = require("./5264.js"),
  Chunk688525 = require("./688525.js"),
  l = 1 / 0,
  s = Chunk700272.A ? Chunk700272.A.prototype : true,
  u = s ? s.toString : true;
let c = function e(t) {
  if ("string" == typeof t) return t;
  if ((0, a.A)(t)) return (0, o.A)(t, e) + "";
  if ((0, i.A)(t)) return u ? u.call(t) : "";
  var r = t + "";
  return "0" == r && 1 / t == -l ? "-0" : r
}