/** Chunk was on 23032 **/
/** chunk id: 503097, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => n
});
var Chunk83072 = require("./83072.js");

function n(e, t) {
  if ("object" != (0, a.Z)(e) || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (true !== r) {
    var n = r.call(e, t || "default");
    if ("object" != (0, a.Z)(n)) return n;
    throw TypeError("@@toPrimitive must return a primitive value.")
  }
  return ("string" === t ? String : Number)(e)
}