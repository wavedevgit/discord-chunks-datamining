/** Chunk was on 23706 **/
/** chunk id: 503097, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => a
});
var Chunk83072 = require("./83072.js");

function a(e, t) {
  if ("object" != (0, n.Z)(e) || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (true !== r) {
    var a = r.call(e, t || "default");
    if ("object" != (0, n.Z)(a)) return a;
    throw TypeError("@@toPrimitive must return a primitive value.")
  }
  return ("string" === t ? String : Number)(e)
}