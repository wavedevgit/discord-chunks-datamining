/** Chunk was on web.js **/
/** chunk id: 644426, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => i
});
var Chunk279965 = require("./279965.js");

function i(e, t) {
  if ("object" != (0, r.Z)(e) || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (true !== n) {
    var i = n.call(e, t || "default");
    if ("object" != (0, r.Z)(i)) return i;
    throw TypeError("@@toPrimitive must return a primitive value.")
  }
  return ("string" === t ? String : Number)(e)
}