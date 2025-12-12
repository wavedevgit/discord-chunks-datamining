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
  for (var o = t.get(i); o && !o.getNextSiblingKey();) {
    var a = o.getParentKey();
    o = a ? t.get(a) : null
  }
  return o ? o.getNextSiblingKey() : null
}