/** Chunk was on 8381 **/
/** chunk id: 295864, original params: t,e,r (module,exports,require) **/
"use strict";
var Chunk613078 = require("./613078.js");
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