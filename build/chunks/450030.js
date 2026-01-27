/** Chunk was on 38939 **/
/** chunk id: 450030, original params: t (module,exports,require) **/
"use strict";
var e = /([A-Z])/g;
module.exports = function(t) {
  return t.replace(e, "-$1").toLowerCase()
}