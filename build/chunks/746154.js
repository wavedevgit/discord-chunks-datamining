/** Chunk was on 86029 **/
"use strict";
t.exports = function(t) {
  var e = {};
  return function(r) {
    return e.hasOwnProperty(r) || (e[r] = t.call(this, r)), e[r]
  }
}