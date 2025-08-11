/** Chunk was on web.js **/
/** chunk id: 295864, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk613078 = require("./613078.js");

function i(e) {
  if (r(e)) {
    var t = e,
      n = t.getAttribute("data-offset-key");
    if (n) return n;
    for (var o = 0; o < t.childNodes.length; o++) {
      var a = i(t.childNodes[o]);
      if (a) return a
    }
  }
  return null
}
module.exports = i