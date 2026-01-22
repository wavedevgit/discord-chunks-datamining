/** Chunk was on 47950 **/
/** chunk id: 536132, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => s
});
var Chunk700272 = require("./700272.js"),
  o = Object.prototype,
  a = o.hasOwnProperty,
  i = o.toString,
  l = Chunk700272.A ? Chunk700272.A.toStringTag : true;
let s = function(e) {
  var t = a.call(e, l),
    r = e[l];
  try {
    e[l] = true;
    var n = true
  } catch (e) {}
  var o = i.call(e);
  return n && (t ? e[l] = r : delete e[l]), o
}