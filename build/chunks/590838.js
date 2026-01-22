/** Chunk was on web.js **/
/** chunk id: 590838, original params: e (module,exports,re quire) **/
"use strict";
var t = Math.round;
module.exports = function(e) {
  var n = t(e);
  return n < 0 ? 0 : n > 255 ? 255 : 255 & n
}