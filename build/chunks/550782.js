/** Chunk was on 19456 **/
"use strict";
var e = /([A-Z])/g;
t.exports = function(t) {
  return t.replace(e, "-$1").toLowerCase()
}