/** Chunk was on web.js **/
/** chunk id: 985247, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk552597 = require("./552597.js");
module.exports = function(e) {
  var t = e.getSelection();
  if (!t.rangeCount) return null;
  var n = r(t.getRangeAt(0)),
    i = n.top,
    a = n.right,
    s = n.bottom,
    o = n.left;
  return 0 === i && 0 === a && 0 === s && 0 === o ? null : n
}