/** Chunk was on web.js **/
/** chunk id: 450030, original params: e (module,exports,re quire) **/
"use strict";
var t = /([A-Z])/g;
module.exports = function(e) {
  return e.replace(t, "-$1").toLowerCase()
}