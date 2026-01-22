/** Chunk was on 92777 **/
/** chunk id: 10737, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => n
});
var Chunk225191 = require("./225191.js");

function n(e, t) {
  if ("object" != (0, a.A)(e) || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (true !== r) {
    var n = r.call(e, t || "default");
    if ("object" != (0, a.A)(n)) return n;
    throw TypeError("@@toPrimitive must return a primitive value.")
  }
  return ("string" === t ? String : Number)(e)
}