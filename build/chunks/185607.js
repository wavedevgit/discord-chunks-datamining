/** Chunk was on 38939 **/
/** chunk id: 185607, original params: t,e,r (module,exports,require) **/
"use strict";
var Chunk1140 = require("./1140.js"),
  i = require("./116740.js").OrderedSet,
  o = Chunk1140.substr,
  a = i();
module.exports = function(t, e) {
  var r = Array(t.length).fill(a);
  return e && e.forEach(function(e) {
    for (var n = o(t, 0, e.offset).length, i = n + o(t, e.offset, e.length).length; n < i;) r[n] = r[n].add(e.style), n++
  }), r
}