/** Chunk was on 68880 (5dfa49b29bd374d8.js) **/
"use strict";
t.exports = function(t) {
  var e = (t ? t.ownerDocument || t : document).defaultView || window;
  return !!(t && ("function" == typeof e.Node ? t instanceof e.Node : "object" == typeof t && "number" == typeof t.nodeType && "string" == typeof t.nodeName))
}