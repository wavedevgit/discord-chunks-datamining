/** Chunk was on 91584 **/
/** chunk id: 267100, original params: t (module,exports,require) **/
"use strict";
var e = Object.prototype.hasOwnProperty;
module.exports = function(t, r, n) {
  if (!t) return null;
  var i = {};
  for (var o in t) e.call(t, o) && (i[o] = r.call(n, t[o], o, t));
  return i
}