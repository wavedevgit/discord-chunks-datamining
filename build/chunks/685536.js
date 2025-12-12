/** Chunk was on web.js **/
/** chunk id: 685536, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk143310 = require("./143310.js"),
  Chunk688411 = require("./688411.js");
module.exports = function(e) {
  var t = r(e.ownerDocument || e.document);
  e.Window && e instanceof e.Window && (e = t);
  var n = i(e),
    o = e === t ? e.ownerDocument.documentElement : e,
    a = e.scrollWidth - o.clientWidth,
    s = e.scrollHeight - o.clientHeight;
  return n.x = Math.max(0, Math.min(n.x, a)), n.y = Math.max(0, Math.min(n.y, s)), n
}