/** Chunk was on web.js **/
/** chunk id: 566608, original params: e (module,exports,re quire) **/
"use strict";
module.exports = function(e) {
  var t = (e ? e.ownerDocument || e : document).defaultView || window;
  return !!(e && ("function" == typeof t.Node ? e instanceof t.Node : "object" == typeof e && "number" == typeof e.nodeType && "string" == typeof e.nodeName))
}