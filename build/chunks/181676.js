/** Chunk was on 68880 (5dfa49b29bd374d8.js) **/
"use strict";
t.exports = function(t, e, r, n) {
  if (t.size) {
    var i = 0;
    t.reduce(function(t, o, a) {
      return e(t, o) || (r(t) && n(i, a), i = a), o
    }), r(t.last()) && n(i, t.count())
  }
}