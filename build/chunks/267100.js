/** Chunk was on web.js **/
/** chunk id: 267100, original params: e (module,exports,re quire) **/
"use strict";
var t = Object.prototype.hasOwnProperty;
module.exports = function(e, n, r) {
  if (!e) return null;
  var i = {};
  for (var a in e) t.call(e, a) && (i[a] = n.call(r, e[a], a, e));
  return i
}