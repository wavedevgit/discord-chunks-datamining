/** Chunk was on web.js **/
/** chunk id: 944024, original params: e (module,exports,re quire) **/
"use strict";
var t = Math.ceil,
  n = Math.floor;
module.exports = Math.trunc || function(e) {
  var r = +e;
  return (r > 0 ? n : t)(r)
}