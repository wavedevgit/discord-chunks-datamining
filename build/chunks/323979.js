/** Chunk was on web.js **/
"use strict";
var r = n(545576),
  i = n(354848),
  o = n(838957),
  a = n(769992),
  s = Object;
e.exports = a ? function(e) {
  return "symbol" == typeof e
} : function(e) {
  var t = r("Symbol");
  return i(t) && o(t.prototype, s(e))
}