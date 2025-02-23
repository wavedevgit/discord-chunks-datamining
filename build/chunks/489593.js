/** Chunk was on 68880 (5dfa49b29bd374d8.js) **/
"use strict";
t.exports = function(t, e, r) {
  var n = t;
  if (r === n.count()) e.forEach(function(t) {
    n = n.push(t)
  });
  else if (0 === r) e.reverse().forEach(function(t) {
    n = n.unshift(t)
  });
  else {
    var i = n.slice(0, r),
      o = n.slice(r);
    n = i.concat(e, o).toList()
  }
  return n
}