/** Chunk was on 86029 **/
"use strict";
var e = /([A-Z])/g;
t.exports = function(t) {
  return t.replace(e, "-$1").toLowerCase()
}