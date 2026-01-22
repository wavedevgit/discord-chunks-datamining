/** Chunk was on 94678 **/
/** chunk id: 517480, original params: t,r,e (module,exports,require) **/
"use strict";
var Chunk512008 = require("./512008.js"),
  Chunk309270 = require("./309270.js"),
  Chunk529030 = require("./529030.js"),
  Chunk157494 = require("./157494.js"),
  Chunk348666 = require("./348666.js"),
  c = Chunk157494("IE_PROTO"),
  a = Object,
  f = a.prototype;
module.exports = Chunk348666 ? a.getPrototypeOf : function(t) {
  var r = s(t);
  if (n(r, c)) return r[c];
  var e = r.constructor;
  return o(e) && r instanceof e ? e.prototype : r instanceof a ? f : null
}