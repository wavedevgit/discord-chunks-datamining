/** Chunk was on 68880 (5dfa49b29bd374d8.js) **/
"use strict";
var n = r(290724);
t.exports = function t(e) {
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