/** Chunk was on web.js **/
/** chunk id: 44135, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk309987 = require("./309987.js");
module.exports = function(e, t) {
  if (!(e instanceof r)) return null;
  var n = e.getNextSiblingKey();
  if (n) return n;
  var i = e.getParentKey();
  if (!i) return null;
  for (var a = t.get(i); a && !a.getNextSiblingKey();) {
    var o = a.getParentKey();
    a = o ? t.get(o) : null
  }
  return a ? a.getNextSiblingKey() : null
}