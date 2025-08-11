/** Chunk was on 50448 **/
/** chunk id: 972305, original params: t (module,exports,require) **/
"use strict";
var r = Math.ceil,
  n = Math.floor;
module.exports = Math.trunc || function(t) {
  var e = +t;
  return (e > 0 ? n : r)(e)
}