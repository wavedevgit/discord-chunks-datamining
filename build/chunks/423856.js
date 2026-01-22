/** Chunk was on web.js **/
/** chunk id: 423856, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk789072 = require("./789072.js"),
  Chunk536978 = require("./536978.js");
module.exports = function(e) {
  var t = r(e.ownerDocument || e.document);
  e.Window && e instanceof e.Window && (e = t);
  var n = i(e),
    a = e === t ? e.ownerDocument.documentElement : e,
    s = e.scrollWidth - a.clientWidth,
    o = e.scrollHeight - a.clientHeight;
  return n.x = Math.max(0, Math.min(n.x, s)), n.y = Math.max(0, Math.min(n.y, o)), n
}