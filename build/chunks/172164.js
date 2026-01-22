/** Chunk was on 94678 **/
/** chunk id: 172164, original params: t (module,exports,require) **/
"use strict";
var r = Math.ceil,
  e = Math.floor;
module.exports = Math.trunc || function(t) {
  var n = +t;
  return (n > 0 ? e : r)(n)
}