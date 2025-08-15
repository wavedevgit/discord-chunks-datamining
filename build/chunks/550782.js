/** Chunk was on 8381 **/
/** chunk id: 550782, original params: t (module,exports,require) **/
"use strict";
var e = /([A-Z])/g;
module.exports = function(t) {
  return t.replace(e, "-$1").toLowerCase()
}