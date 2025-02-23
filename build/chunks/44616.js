/** Chunk was on 68880 (5dfa49b29bd374d8.js) **/
"use strict";
var n = r(581079);
t.exports = function(t, e) {
  var r = [];
  return t.findEntityRanges(function(t) {
    return t.getEntity() === e
  }, function(t, e) {
    r.push({
      start: t,
      end: e
    })
  }), r.length || n(!1), r
}