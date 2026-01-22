/** Chunk was on web.js **/
/** chunk id: 584606, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk494277 = require("./494277.js");

function i(e) {
  if (r(e)) {
    var t = e,
      n = t.getAttribute("data-offset-key");
    if (n) return n;
    for (var a = 0; a < t.childNodes.length; a++) {
      var s = i(t.childNodes[a]);
      if (s) return s
    }
  }
  return null
}
module.exports = i