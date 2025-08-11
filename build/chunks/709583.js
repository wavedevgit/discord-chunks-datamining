/** Chunk was on 50448 **/
/** chunk id: 709583, original params: t,r,n (module,exports,require) **/
"use strict";
var Chunk185698 = require("./185698.js"),
  Chunk971428 = require("./971428.js"),
  Chunk475424 = require("./475424.js"),
  Chunk459079 = require("./459079.js"),
  Chunk336769 = require("./336769.js"),
  c = Chunk459079("IE_PROTO"),
  f = Object,
  a = f.prototype;
module.exports = Chunk336769 ? f.getPrototypeOf : function(t) {
  var r = i(t);
  if (e(r, c)) return r[c];
  var n = r.constructor;
  return o(n) && r instanceof n ? n.prototype : r instanceof f ? a : null
}