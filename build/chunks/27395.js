/** Chunk was on web.js **/
/** chunk id: 27395, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk617179 = require("./617179.js");
module.exports = function(e, t) {
  if (!(e instanceof r)) return null;
  var n = e.getNextSiblingKey();
  if (n) return n;
  var i = e.getParentKey();
  if (!i) return null;
  for (var a = t.get(i); a && !a.getNextSiblingKey();) {
    var s = a.getParentKey();
    a = s ? t.get(s) : null
  }
  return a ? a.getNextSiblingKey() : null
}