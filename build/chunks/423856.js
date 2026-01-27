/** Chunk was on 38939 **/
/** chunk id: 423856, original params: t,e,r (module,exports,require) **/
"use strict";
var Chunk789072 = require("./789072.js"),
  Chunk536978 = require("./536978.js");
module.exports = function(t) {
  var e = n(t.ownerDocument || t.document);
  t.Window && t instanceof t.Window && (t = e);
  var r = i(t),
    o = t === e ? t.ownerDocument.documentElement : t,
    a = t.scrollWidth - o.clientWidth,
    s = t.scrollHeight - o.clientHeight;
  return r.x = Math.max(0, Math.min(r.x, a)), r.y = Math.max(0, Math.min(r.y, s)), r
}