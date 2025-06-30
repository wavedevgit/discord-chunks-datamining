/** Chunk was on 8381 **/
"use strict";
t.exports = function(t) {
  var e = {};
  return function(r) {
    return e.hasOwnProperty(r) || (e[r] = t.call(this, r)), e[r]
  }
}