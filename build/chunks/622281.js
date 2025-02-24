/** Chunk was on web.js **/
"use strict";
var r = n(354848),
  i = n(174124),
  o = i.all;
e.exports = i.IS_HTMLDDA ? function(e) {
  return "object" == typeof e ? null !== e : r(e) || e === o
} : function(e) {
  return "object" == typeof e ? null !== e : r(e)
}