/** Chunk was on 8381 **/
/** chunk id: 205681, original params: t,e,r (module,exports,require) **/
"use strict";
var Chunk733359 = require("./733359.js"),
  i = require("./65183.js").OrderedSet,
  o = Chunk733359.substr,
  a = i();
module.exports = function(t, e) {
  var r = Array(t.length).fill(a);
  return e && e.forEach(function(e) {
    for (var n = o(t, 0, e.offset).length, i = n + o(t, e.offset, e.length).length; n < i;) r[n] = r[n].add(e.style), n++
  }), r
}