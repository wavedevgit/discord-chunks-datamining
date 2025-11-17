/** Chunk was on web.js **/
/** chunk id: 279636, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk108993 = require("./108993.js");

function i(e) {
  if (r(e)) {
    var t = e,
      n = t.getAttribute("data-offset-key");
    if (n) return n;
    for (var a = 0; a < t.childNodes.length; a++) {
      var o = i(t.childNodes[a]);
      if (o) return o
    }
  }
  return null
}
module.exports = i