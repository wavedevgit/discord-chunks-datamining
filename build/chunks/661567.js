/** Chunk was on 91584 **/
/** chunk id: 661567, original params: t,e,r (module,exports,require) **/
"use strict";
var Chunk465135 = require("./465135.js");
module.exports = function t(e) {
  if (n(e)) {
    var r = e.getAttribute("data-offset-key");
    if (r) return r;
    for (var i = 0; i < e.childNodes.length; i++) {
      var o = t(e.childNodes[i]);
      if (o) return o
    }
  }
  return null
}