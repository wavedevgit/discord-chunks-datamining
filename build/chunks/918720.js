/** Chunk was on 68880 (5dfa49b29bd374d8.js) **/
"use strict";
var n = r(806998);
t.exports = function(t, e) {
  if (!(t instanceof n)) return null;
  var r = t.getNextSiblingKey();
  if (r) return r;
  var i = t.getParentKey();
  if (!i) return null;
  for (var o = e.get(i); o && !o.getNextSiblingKey();) {
    var a = o.getParentKey();
    o = a ? e.get(a) : null
  }
  return o ? o.getNextSiblingKey() : null
}