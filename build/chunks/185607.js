/** Chunk was on web.js **/
/** chunk id: 185607, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk1140 = require("./1140.js"),
  i = require("./116740.js").OrderedSet,
  a = Chunk1140.substr,
  s = i();
module.exports = function(e, t) {
  var n = Array(e.length).fill(s);
  return t && t.forEach(function(t) {
    for (var r = a(e, 0, t.offset).length, i = r + a(e, t.offset, t.length).length; r < i;) n[r] = n[r].add(t.style), r++
  }), n
}