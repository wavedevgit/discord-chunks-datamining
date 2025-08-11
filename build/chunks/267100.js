/** Chunk was on web.js **/
/** chunk id: 267100, original params: e (module,exports,re quire) **/
"use strict";
var t = Object.prototype.hasOwnProperty;
module.exports = function(e, n, r) {
  if (!e) return null;
  var i = {};
  for (var o in e) t.call(e, o) && (i[o] = n.call(r, e[o], o, e));
  return i
}