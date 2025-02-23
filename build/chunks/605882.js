/** Chunk was on 68880 (5dfa49b29bd374d8.js) **/
"use strict";
var n = r(148760),
  i = r(733359).strlen;
t.exports = function(t, e) {
  var r = [];
  return t.findEntityRanges(function(t) {
    return !!t.getEntity()
  }, function(o, a) {
    var u = t.getText(),
      s = t.getEntityAt(o);
    r.push({
      offset: i(u.slice(0, o)),
      length: i(u.slice(o, a)),
      key: Number(e[n.stringify(s)])
    })
  }), r
}