/** Chunk was on web.js **/
/** chunk id: 504117, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk733359 = require("./733359.js"),
  i = require("./65183.js").OrderedSet,
  o = Chunk733359.substr,
  a = i();
module.exports = function(e, t) {
  var n = Array(e.length).fill(a);
  return t && t.forEach(function(t) {
    for (var r = o(e, 0, t.offset).length, i = r + o(e, t.offset, t.length).length; r < i;) n[r] = n[r].add(t.style), r++
  }), n
}