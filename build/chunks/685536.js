/** Chunk was on 8381 **/
/** chunk id: 685536, original params: t,e,r (module,exports,require) **/
"use strict";
var Chunk143310 = require("./143310.js"),
  Chunk688411 = require("./688411.js");
module.exports = function(t) {
  var e = n(t.ownerDocument || t.document);
  t.Window && t instanceof t.Window && (t = e);
  var r = i(t),
    o = t === e ? t.ownerDocument.documentElement : t,
    a = t.scrollWidth - o.clientWidth,
    u = t.scrollHeight - o.clientHeight;
  return r.x = Math.max(0, Math.min(r.x, a)), r.y = Math.max(0, Math.min(r.y, u)), r
}