/** Chunk was on 38939 **/
/** chunk id: 584606, original params: t,e,r (module,exports,require) **/
"use strict";
var Chunk494277 = require("./494277.js");
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